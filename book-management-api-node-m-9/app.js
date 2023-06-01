const express = require("express");
const app = express();
const router = require("./src/router/router");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongodb = require("./src/database/db.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//Security Middleware implement
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(helmet());
app.use(limiter);
//connect mongodb atlas
mongodb();
//use all router and define api version controll
app.use("/api/v1", router);
//not found url response
app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check url" });
});

module.exports = app;
