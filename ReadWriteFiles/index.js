const { ifError } = require("assert");
const fs = require("fs");
const path = require("path");

console.log("the path is---------->", path.join(__dirname, "starter.txt"));

const filePath = path.join(__dirname, "files", "starter.txt");

//TO READ FILES
fs.readFile(filePath, "utf-8", (err, data) => {
  try {
    if (err) {
      throw err;
    }
    console.log(data);
  } catch (error) {
    console.error("the error is", error);
  }
});

// //TO WRITE FILES
fs.writeFile(
  path.join(__dirname, "files", "anand.txt"),
  "hi this is Anand",
  (err) => {
    if (err) {
      console.error("the write error is-------->", err);
    } else {
      console.log("writing complete");
    }
  }
);

// TO APPEND TO FILES
fs.appendFile(
    path.join(__dirname, "files", "anand.txt"),
    "\nhi this is Anand",
    (err) => {
      if (err) {
        console.error("the append error is-------->", err);
      } else {
        console.log("apppending complete");
      }
    }
  );
  

console.log("Hello");
