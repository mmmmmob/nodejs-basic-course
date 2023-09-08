const fs = require("fs");

const filePath = "data.txt";

const option = process.argv[2]
const input = process.argv[3]


if (option === 'w') {
  fs.appendFileSync(filePath, input + "\n")
  console.log('appended:', input)
}
else if (option === 'r') {
  const content = fs.readFileSync(filePath)
  console.log('file content:', content.toString())
}
else if (option === 'c') {
  fs.writeFileSync(filePath, "")
}
else {
  console.log('invalid option')
}