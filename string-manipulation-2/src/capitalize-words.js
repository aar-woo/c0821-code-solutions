/* exported capitalizeWords */
/*
  - create storage for output
  - capitalize the first character in the string and add it to output
  - look at each character one by one starting from the second character
    - if the preceding character is a space
      - capitalize the current character and add to output
    - otherwise
      - lowercase character and add to output
  - return output
*/

function capitalizeWords(string) {
  var capitalizedWords = '';
  capitalizedWords += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capitalizedWords += string[i].toUpperCase();
    } else {
      capitalizedWords += string[i].toLowerCase();
    }
  }
  return capitalizedWords;
}
