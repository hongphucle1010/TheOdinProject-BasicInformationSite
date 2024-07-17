const { createServer } = require("node:http");
const fs = require("node:fs");

const hostName = "localhost";
const port = 8000;

const path = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
  "/404": "404.html",
};

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const filePath = path[req.url] || path["/404"];
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("404 Not Found");
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
