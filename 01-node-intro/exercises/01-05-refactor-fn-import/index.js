// import each function
import { clear, read, write } from "./utils.js";

// import default function
import utils from "./utils.js";

const option = process.argv[2];
const input = process.argv[3];

switch (option) {
  case "w":
    // indiv. function use directly as function name
    write(input);
    break;
  case "r":
    read();
    break;
  case "c":
    clear();
    break;
  case "d":
    // default function use as classname.functionname()
    utils.duplicate();
    break;
  default:
    console.log(
      "Invalid option. Please use:\n w to write to file\n r to read the file\n c to clear all content on the file\n d to duplicate file content to the existing file"
    );
}
