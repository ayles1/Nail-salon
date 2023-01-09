const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.get("/smth", (req, res) => {
  res.send("Uspeh!");
});

const port = 3000;
app.listen(port, () => {
  console.log("Hello world, server started at port ", port);
  console.log(`path: ${path.join(__dirname, "../build")}`);
});
