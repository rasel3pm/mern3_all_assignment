const express = require("express");
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cors = require("cors")
const router = require("./router")
const app = express();

//middleware
// app.use(cors({
//     origin:"http://127.0.0.1:5500"
// }))
app.use(cors({
    origin:"http://localhost:63342",
}))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet())
app.use(router)



const port = 8080
//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});