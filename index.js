const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const http = require("http").createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 5000;

http.listen(PORT, () => {
  console.log("Listening in ", PORT);
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
