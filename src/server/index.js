const express = require("express");
const path = require("path");
const userRouter = require("./router");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(8081);