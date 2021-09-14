/* exported isPalindromic */
/*
 - create storage for reversed string
 - look at each character one by one starting from the back
  - if the character is not a space
    - add character to reversed string
 - look at each character one by one
  - if the character is not a space
    - add character to no space string
- if string and reversed string are equal
  - return true
- otherwise
  - return false
*/

function isPalindromic(string) {
  var reverseStr = '';
  var noSpaceStr = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reverseStr += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      noSpaceStr += string[j];
    }
  }
  if (noSpaceStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}
