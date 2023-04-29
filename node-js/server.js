const http = require("http");
const fs = require("fs");

//create server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./public/home.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url == "/About") {
    fs.readFile("./public/about.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url == "/Contact") {
    fs.readFile("./public/contact.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    fs.readFile("./public/notFound.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});
server.listen(3000, () => {
  console.log("server is running");
});
