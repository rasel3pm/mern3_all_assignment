const router = require("express").Router()
const { v4: uuidv4 } = require('uuid');

// Serve the static index.html file
router.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// Return the array of books as JSON when a GET request is made to the /books route
router.get('/books', (req, res) => {
    res.json(books);
});

// Initialize an empty array to hold the collection of books
const books=[]
router.post("/books",(req,res)=>{
    try{
        const id =uuidv4();
        const {title,author,publishedDate}= req.body
        const newBook = {
            id,
            title,
            author,
            publishedDate
        }
        books.push(newBook)
        res.status(200).json({msg:"Book add successfully",newBook})
    }catch (err){
        res.status(400).json({msg:"Book add fail"})
    }
})

//delete book by id #method=delete
router.delete("/books/:id",(req,res)=>{
    try{
        const bookId = req.params.id;
        // Find the index of the book in the array of books
        const bookIndex = books.findIndex((book) => book.id === bookId);

        if (bookIndex === -1) {
            // If the book is not found, return a 404 error
            res.status(404).json({message:"Book Not found by Id"})
        } else {
            // Remove the book from the array of books
            books.splice(bookIndex, 1);
            res.status(200).json({message:"Book deleted successfully"})
        }
    }catch (err)  {
        res.json({err:err})
    }
})


module.exports = router