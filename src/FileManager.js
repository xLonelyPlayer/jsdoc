/**
 * @module FileManager
 */

const fs = require('fs');

/**
 * Check the informed file
 * 
 * @param {string} file File to check
 * @returns {boolean} false if does not exists
 * @returns {boolean} true
 */
const checkFile = (file) => {
  try {
    const stat = fs.statSync(file);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Reads a directory and return its files
 * 
 * @param {string} dir 
 * @returns {Array} List with files in directory
 */
const readDir = (dir) => {

}

module.exports = {
  checkFile
}