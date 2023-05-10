const express = require("express");
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cors = require("cors")
const router = require("./router")
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet())
app.use(router)
app.use(cors())


const port = 8080
//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});