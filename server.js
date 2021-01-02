const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const publicPath = path.join(__dirname, "build");

const app = express();

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
