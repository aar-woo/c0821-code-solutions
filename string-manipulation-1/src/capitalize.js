/* exported capitalize */
/* Pseudo Code
  - add storage for output
  - look at each character one at a time
    - if character is in the first position of the string
      - capitalize that character and add to output
    - otherwise
      - make the character lowercase and add to output
  - return output
*/

function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += (word[i].toUpperCase());
    } else {
      newWord += (word[i].toLowerCase());
    }
  }
  return newWord;
}
