const express = require("express");
const app = express();
const router = require("./src/router/router");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongodb = require("./src/database/db.js");
//req rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(mongoSanitize());
app.use(helmet());
app.use(limiter);
mongodb();
app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
