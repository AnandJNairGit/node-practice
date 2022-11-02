const fs = require("fs");

fs.readFile("./files/starter.txt6", "utf-8", (err, data) => {
  try {
    if (err) {
      throw err;
    }
    console.log(data);
  } catch (error) {
    console.error("the error is", error);
  }
});

console.log("Hello");
