import fs from "fs";

fs.writeFileSync("data.txt", "Hello, World!\n");
fs.appendFileSync("data.txt", "Second line\n");

const text = fs.readFileSync("data.txt", { encoding: "utf-8" });

console.log(text);
