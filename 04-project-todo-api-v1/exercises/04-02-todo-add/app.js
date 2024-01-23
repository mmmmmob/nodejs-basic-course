import cors from "cors";
import express from "express";
import { createTodo, findTodo, listTodos } from "./models/todo.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  const todos = listTodos();
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: todo });
});

app.post("/todos", (req, res) => {
  const title = req.body.title;
  const addedTodo = createTodo({ title: title });

  res.json({ data: addedTodo });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
