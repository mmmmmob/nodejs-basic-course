import cors from "cors";
import express from "express";
import { findTodo, listTodos } from "./models/todo.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  const todos = listTodos();
  // 1. Implement: returns a list of todos
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  //return 404 with error when id not found.
  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
  }

  // 2. Implement: returns a single todo
  res.json({
    data: {
      id: todo.id,
      title: todo.title,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
