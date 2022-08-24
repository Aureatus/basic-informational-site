import { readFile } from "node:fs/promises";

import { createServer } from "node:http";
const hostname = "0.0.0.0";
const port = 8080;

const server = createServer((req, res) => {
  if (req.url === "/") {
    (async () => {
      try {
        const indexPage = await readFile("./index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(indexPage);
      } catch (err) {
        console.log(err);
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>File not found</h1>");
      }
      return;
    })();
  } else if (req.url === "/about") {
    (async () => {
      try {
        const aboutPage = await readFile("./about.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(aboutPage);
      } catch (err) {
        console.log(err);
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>File not found</h1>");
      }
      return;
    })();
  } else if (req.url === "/contact-me") {
    (async () => {
      try {
        const contactPage = await readFile("./contact-me.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(contactPage);
      } catch (err) {
        console.log(err);
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>File not found</h1>");
      }
      return;
    })();
  } else {
    (async () => {
      try {
        const errorPage = await readFile("./404.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(errorPage);
      } catch (err) {
        console.log(err);
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>File not found</h1>");
      }
      return;
    })();
  }
});

server.listen(port, hostname, () => {});
