import fs from "fs";
const filePath = "data.txt";

// ------------------- //

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
}

export function read() {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
}

export function clear() {
  fs.truncateSync(filePath, 0);
  console.log("cleared:", filePath);
}

// ------------------- //

function duplicate() {
  const copy = fs.readFileSync(filePath, "utf-8");
  fs.appendFileSync(filePath, copy, "utf-8");
  console.log("copied content to", filePath);
}

export default { duplicate };
