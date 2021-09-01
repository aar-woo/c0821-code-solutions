/* exported firstChars */
/*
  - create storage for output
  - create storage for used length
  - if passed length is greater than string's length
    - add string's length as used length
  - otherwise
    - add passed length as used length
  - look at each character in string one by one up to used length (non-inclusive)
    - add character to output
  - return output
*/

function firstChars(length, string) {
  var newStr = '';
  var usedLength;
  if (length > string.length) {
    usedLength = string.length;
  } else {
    usedLength = length;
  }
  for (var i = 0; i < usedLength; i++) {
    newStr += string[i];
  }
  return newStr;
}
