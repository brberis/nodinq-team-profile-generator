const fs = require('fs');

// write html content and save file into dist directory
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        // Don't ident to console log propertly
        resolve({
        ok: true,
        message:`
        Thanks for using Nodinq Team Generator! Your index.html is saved into ./dist folder.
        `
        });
    });
  });
};

module.exports = { writeFile };