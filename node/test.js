//fs stands for file system...a node module
let fs = require('fs');

//https allos node to pull files from internet
let https = require('https')

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great.</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});

let photo = 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp'

https.get(photo, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/nature.jpg"))
});
