/* exported capitalize */
/* Pseudo Code
  - add storage for output
  - capitalize first character in word and add to output
  - look at each character one at a time starting from the second character
      - make the character lowercase and add to output
  - return output
*/

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += (word[i].toLowerCase());
  }
  return newWord;
}
