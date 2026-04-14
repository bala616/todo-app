

const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./model/Todo");



const app = express();

mongoose
    .connect("mongodb://localhost:27017/todolistapp")
    .then(() => { console.log("MongoDB Connected!!") })
    .catch((e) => { console.log(e) });


app.get("/todolist", (req, res) => {

});


app.post("todolist", (req, res) => { });


app.put("/todolist", (req, res) => { });


app.delete("/todolist", (req, res) => { });