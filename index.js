var chalk = require("chalk");

var message = chalk("Hello ") + chalk.yellow.underline("World");
console.log(message);

var message1 = chalk("new")