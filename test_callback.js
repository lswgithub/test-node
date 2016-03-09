var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

fs.readFile('input.txt', function(err, dataa) {
  if (err) return console.error(err);
  console.log(dataa.toString());
});

console.log("Program Ended2");




