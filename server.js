const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).send("server okay");
});

const port = process.env.PORT || 3000;
// const port = 3000;
//
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
