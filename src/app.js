const { checkFile } = require('./FileManager');
const { getMembers } = require('./ArrayManager');

const appJsFile = 'app.js';

if (checkFile(appJsFile)) {
  console.log(`${appJsFile} exists`);
} else {
  console.log(`${appJsFile} does not exists`);
}

