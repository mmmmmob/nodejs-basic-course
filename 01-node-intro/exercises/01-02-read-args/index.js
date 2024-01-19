import fs from "fs";

const arg = process.argv;
const text = "data.txt";

if (!text) {
  fs.writeFileSync(text, `${arg[2]}\n`);
}
fs.appendFileSync(text, `${arg[2]}\n`);
