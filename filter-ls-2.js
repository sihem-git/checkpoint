var fs = require('fs');
var path = require('path');
var mydir = process.argv[2];
console.log("ma direction est:",mydir)
var ext1 = '.' + process.argv[3];
console.log("extension est:",ext1)
fs.readdir(mydir, function(err, files){
  if(err){
    throw err
  }
  // console.log(files);
  files.forEach(function(filename){
    var ext = path.extname(filename);
    if(ext === ext1){
      console.log(ext)
      console.log(filename);
    }
  });
});