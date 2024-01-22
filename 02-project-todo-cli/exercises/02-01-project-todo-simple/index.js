import clc from "cli-color";
import fs from "fs";

const filePath = "todo.txt";
const option = process.argv[2];
const input = process.argv[3];

// app header with color
const header = clc.magenta.bgWhite.bold("== To-do App ==");

// add total number of items
// add number to each items
// display items in reverse (newer -> older)
// more coloring

switch (option) {
  // add item => fs.appendfilesync
  case "add":
    fs.appendFileSync(filePath, input + "\n");
    console.log(header);
    console.log(`To-do '${input}' was added.`);
    break;
  case "list":
    // list items => fs.readfilesync
    const todo = fs.readFileSync(filePath, "utf-8");
    console.log(header);
    console.log(todo);
    break;
  case "clear":
    // clear items => fs.truncatesync
    fs.truncateSync(filePath, 0);
    console.log(header);
    console.log("All to-dos are cleared.");
    break;
  default:
    console.log(header);
    console.log(
      "Please input a correct command:\n'add' to add new to-do\n'list' to list all to-do items\n'clear' to clear all todo items"
    );
    break;
}
