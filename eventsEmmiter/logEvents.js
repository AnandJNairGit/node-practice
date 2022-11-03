const fs = require("fs");
const path = require("path");
const fsPromise = fs.promises;
const { v4: uuid } = require("uuid");

const logEvent = async (message) => {
  //check log files directory exists or not
  if (!fs.existsSync(path.join(__dirname, "logFiles"))) {
    //create directory if directory doesnot exists
    fs.mkdir(path.join(__dirname, "logFiles"), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("directory created");
      }
    });
  }

  //dtat to append
  const appendData = `${uuid()}\t${message}`;
  try {
    await fsPromise.appendFile(path.join(__dirname, "logFiles"), appendData);
  } catch (error) {
    console.log(error);
  }
};
