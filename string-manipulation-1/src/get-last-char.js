/* exported getLastChar */
/* Pseudo Code
  - create storage for output
  - add character at the last position of the string to output
  - return output
*/

function getLastChar(string) {
  var lastChar = '';
  lastChar += string[string.length - 1];
  return lastChar;
}
