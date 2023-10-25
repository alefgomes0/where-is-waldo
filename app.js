require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dbConn = require("./config/dbConn");
const indexRouter = require("./routes/index");

dbConn();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/front-end/index.html"))
})

app.use((err, req, res, next) => {
  res.json(err);
});


app.listen(
  process.env.PORT,
  console.log(`Server started at port ${process.env.PORT}`)
);
