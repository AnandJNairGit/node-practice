const EventEmitter = require("events");
const logEvent = require("./logEvents");

//create event emmiter object
const event = new EventEmitter();

//create event listner
event.on("log", (message) => {
  logEvent(message);
});

const runEmmiter = () => {
  setTimeout(() => {
    //the emit event
    event.emit("log", "log mesage from emmitter");
  }, 2000);
};

module.exports= runEmmiter;
