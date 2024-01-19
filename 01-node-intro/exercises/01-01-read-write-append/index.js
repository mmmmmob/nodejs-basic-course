import fs from "fs";

// \n to enter new line
fs.writeFileSync("data.txt", "Hello, World!\n");
// appendFileSync to add data to the same file
fs.appendFileSync("data.txt", "Second line");

// read file w/o encoding will be showing as binary
const text = fs.readFileSync("data.txt", { encoding: "utf-8" });

console.log(text);
