const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2);

// Initializing variables
let requestedURL = argv[0];
let filePath = argv[1];
// Console tests
// console.log('requestedURL', requestedURL);
// console.log('filePath', filePath);


request(requestedURL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (error)
        console.log(err);
      else {
        console.log(`Downloaded and saved ${fs.statSync(filePath).size} bytes to ${filePath}`);
      }
    });
  }
});
