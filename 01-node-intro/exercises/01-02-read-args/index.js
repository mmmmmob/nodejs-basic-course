import fs from "fs";

// import value from CLI arguments with process.argv
const arg = process.argv;
const text = "data.txt";

// if text file doesn't exist (false is true) use writeFileSync to create a new file, else if there is a file, append new text with \n instead
if (!text) {
  fs.writeFileSync(text, `${arg[2]}\n`);
}
fs.appendFileSync(text, `${arg[2]}\n`);
