import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

switch (option) {
  case "w":
    fs.appendFileSync(filePath, input + "\n");
    console.log("appended:", input);
    break;
  case "r":
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(data);
    break;
  case "c":
    fs.truncateSync(filePath, 0);
    console.log("cleared:", filePath);
    break;
  case "d":
    const copy = fs.readFileSync(filePath, "utf-8");
    fs.appendFileSync(filePath, copy, "utf-8");
    console.log("copied content to", filePath);
    break;
  default:
    console.log(
      "Invalid option. Please use:\n w to write to file\n r to read the file\n c to clear all content on the file\n d to duplicate file content to the existing file"
    );
}
