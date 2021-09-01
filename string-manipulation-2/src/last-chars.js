/* exported lastChars */
/*
  - create storage for output
  - create storage for backward string
  - create storage for used length
  - if length is greater than string's length
    - return string
  - make used length value the string's length subtracted by passed length
  - look at each character one by one starting from the back up to used length
    - add each character to backward string
  - look at each character one by one in backward string starting from the back
    - add each character to ouput
  - return output
*/

function lastChars(length, string) {
  var newStr = '';
  var usedLength;
  if (length > string.length) {
    return string;
  }
  usedLength = string.length - length;
  for (var i = usedLength; i < string.length; i++) {
    newStr += string[i];
  }
  return newStr;
}
