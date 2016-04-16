//learning from tutorialspoint

var buffer = new Buffer(100, "utf-8");
var bufferArr = new Buffer([10,20,30,40,50]);

//option [ascii, utf8, utf16le, ucs2, base64, hex
var bufferEncode = new Buffer("Notify encoding : ", "utf-8");

/* buffer.writh(String[,offset][,length][,encoding])
*  String : data
*  offset : index of th buffer to start writing at
*  length : number of bytes to write
*  encoding : (option) 'utf8' is defaule
*/
len = buffer.write("text write... : " );

console.log("buffer length : "  + len);

/* buffer.toString([encoding][,start][,end]) */
console.log(buffer.toString("utf-8", 0, len));

/* Convert Buffer to JSON
   buffer.toJSON()
*/
//console.log(buffer.toJSON());

//concat
//var bufferConcat = Buffer.concat([buffer, bufferEncode]);
//console.log(bufferConcat.toString());

//compare
// 0: true , 1: false
var bufferCompare = Buffer.compare(buffer, buffer);
console.log("buffer is same :" + bufferCompare);

/* buffer.copy(targetBuffer[, targetStart][, srcStart][srcEnd]) */
var targetCopy = new Buffer(100);
buffer.copy(targetCopy);
console.log(targetCopy);

//slice
var targetSlice = buffer.slice(0,9);
console.log("slice : " + targetSlice);

//Get a buffer length
console.log("buffer length : " + buffer.length);





