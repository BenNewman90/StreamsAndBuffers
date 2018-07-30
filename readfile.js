var fs = require("fs");

var book = "";
var filename = process.argv[2];
var readStream = fs.createReadStream(filename);

readStream.on("data", function() {
  readStream.pipe(process.stdout);
});

readStream.on("end", function() {
  process.stdout.write("END OF STREAM");
});
