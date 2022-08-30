import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Index page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact-me", (req, res) => {
  res.send("Contact page");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
