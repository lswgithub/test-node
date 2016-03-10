var fs = require("fs");

//Blocking Code Example
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");


//Non-Blocking Code Example
fs.readFile('input.txt', function(err, dataa) {
  if (err) return console.error(err);
  console.log(dataa.toString());
});

console.log("Program Ended2");

//======================result
/*
i'm the input.txt contents.
Program Ended
Program Ended2
i'm the input.txt contents.
*/







