const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./model/Todo");



const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/todolistapp")
    .then(() => { console.log("MongoDB Connected!!") })
    .catch((e) => { console.log(e) });


// get all todos
app.get("/get", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// add todo
app.post("/add", async (req, res) => {
    const newTodo = new Todo({ task: req.body.task });
    const saved = await newTodo.save();
    res.json(saved);
});

// delete todo
app.delete("/delete/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json("Deleted");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});