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
router.post("/add-book",(req,res)=>{
    try{
        const id =uuidv4();
        const {title,author}= req.body
        const addBook = {
            id,
            title,
            author
        }
        books.push(addBook)
        res.status(200).json({msg:"Book add successfully",addBook})
    }catch (err){
        res.status(400).json({msg:"Book add fail"})
    }
})

//delete book by id
router.delete("/delete/:id",(req,res)=>{
    const bookId = req.params.id; //get id using params
    books.filter(book => book.id !== bookId);
    res.json({ message: `Book with ID ${bookId} has been deleted.` });
})


module.exports = router