const express = require("express");
const router = require("./router.js");

const app = express();

app.use(express.json());

app.use(router);

app.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: "Error 404 not found",
  })
);

app.listen(5000, () => console.log("server running on port 5000"));
