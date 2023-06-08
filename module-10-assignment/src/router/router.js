const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Product = require("../model/ProductModel");
/*
 Create an Express.js route that handles a GET request to '/products' and returns a JSON response
  containing all products from the Mongoose "Product" collection. Ensure that the response includes 
  only the name and price fields for each product.
 */

router.get("/products", async (req, res) => {
  try {
    let query = {};
    let spacificField = { name: 1, price: 1, _id: 0 };
    const products = await Product.find(query, spacificField);

    res.status(200).json({ message: "Product get ", products: products });
  } catch (error) {
    res.status(404).json({ message: "Product not found", error });
  }
});

/*
Write a function called generateToken that generates a JWT token using the 'jsonwebtoken' library. 
The function should accept a user ID and a secret key as parameters and return the generated token.
*/
exports.generateToken = (userId, secret) => {
  // Create a JSON object with the user ID and expiration time
  const claims = {
    userId,
    expires: new Date().getTime() + 1000 * 60 * 60 * 24, // 1 day
  };
  // Sign the claims with the secret key
  const token = jwt.sign(claims, secret);
  // Return the token
  return token;
};
module.exports = router;
