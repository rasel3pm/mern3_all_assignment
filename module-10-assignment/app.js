const express = require("express");
const app = express();
const router = require("./src/router/router");
const bodyParser = require("body-parser");
const DBCONNECTION = require("./src/database/dbConnection");
//Security Middleware import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
//req rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(mongoSanitize());
app.use(helmet());
app.use(limiter);

app.use("/api/v1", router);
DBCONNECTION();

app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
