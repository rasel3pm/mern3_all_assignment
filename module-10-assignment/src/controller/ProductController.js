const Product = require("../model/ProductModel");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name.trim()) {
      return res.json({ message: "Name is required" });
    }
    const exsistingProduct = await Product.findOne({ name });
    if (exsistingProduct) {
      return res.json({ message: "This product already exsist" });
    }
    const product = await new Product({
      name,
      price,
      description,
    });
    const data = await product.save();
    res.status(200).json({ message: "Product create success", data });
  } catch (error) {
    res.status(400).json({ message: "Product not created", error });
  }
};

//find product only the name and price fields
exports.findProducts = async (req, res) => {
  try {
    let query = {};
    let spacifiqField = { name: 1, price: 1 };
    const findProducts = await Product.find(query, spacifiqField);
    res.status(200).json({ message: "Product get ", findProducts });
  } catch (error) {
    res.status(404).json({ message: "Product not found", error });
  }
};
