const { ifError } = require("assert");
const fs = require("fs").promises;
const path = require("path");

console.log("the path is---------->", path.join(__dirname, "starter.txt"));

const fileOperations = async () => {
  console.log("inside op function");
  const filePath = path.join(__dirname, "files", "starter.txt");

  //TO READ FILES
  const data = await fs.readFile(filePath, "utf-8");

  //TO WRITE FILES
  await fs.writeFile(
    path.join(__dirname, "files", "anand.txt"),
    "hi this is Anand j nair"
  );

  // TO APPEND TO FILES
  await fs.appendFile(path.join(__dirname, "files", "anand.txt"), `\n${data}`);

  // TO RENAME FILES
  await fs.rename(
    path.join(__dirname, "files", "anand.txt"),
    path.join(__dirname, "files", "anand_async_RENAME.txt")
  );

  //TO READ THE FINAL DATA
  const newdata = await fs.readFile(
    path.join(__dirname, "files", "anand_async_RENAME.txt"),
    "utf-8"
  );
  console.log("the new data is ------>", newdata);
};

fileOperations();
console.log("Hello");
