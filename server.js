console.log("node intro");
console.log(global);

const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

const path = require("path");
const { add, sub, mul, div } = require("./math");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
console.log(div(1,2));

