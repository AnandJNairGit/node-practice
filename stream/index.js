const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files");

const readStream = fs.createReadStream(`${filePath}/data.txt`,{encoding:"utf-8"});
const writeStream = fs.createWriteStream(`${filePath}/new-data1.txt`);

// console.log(readStream);

// readStream.on('data', (data)=>{
//     writeStream.write(data)
// })

readStream.pipe(writeStream);

