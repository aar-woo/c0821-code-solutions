/* exported titleCase */
/*
  - create storage for all minor words
  - create storage for output
  - create storage for current word
  - look at each character in title one by one
    - if the character is the first or the character before is a space or a hyphen
      - capitalize the character and add it to current word
    - else if the character is a space
      - if the current word is Javascript
        - make current word JavaScript
      - else if the current word is Javascript:
        - make current word JavaScript:
      - else if current word is Api
        - make current word API
      - else if the length of current word is less than 4 and the second to last
        character in output is not a colon and output is not empty
        - look at each item in minor words storage one by one
          - if the current word lowercased matches the item in minor words
            - make current word equal to the lowercase current word
      - add current word to output
      - clear current word
      - add character to output
    - otherwise
      - add character to current word
  - if last current word is Api
    - make current word API
  - add last current word to output
  - return output
*/

function titleCase(title) {
  var minorWords = ['and', 'or', 'not', 'but', 'a', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newTitle = '';
  var currWord = '';
  for (var i = 0; i < title.length; i++) {
    if (i === 0 || title[i - 1] === ' ' || title[i - 1] === '-') {
      currWord += title[i].toUpperCase();
    } else if (title[i] === ' ') {
      if (currWord === 'Javascript') {
        currWord = 'JavaScript';
      } else if (currWord === 'Javascript:') {
        currWord = 'JavaScript:';
      } else if (currWord === 'Api') {
        currWord = 'API';
      } else if (currWord.length < 4 && newTitle[newTitle.length - 2] !== ':' && newTitle !== '') {
        for (var j = 0; j < minorWords.length; j++) {
          if (currWord.toLowerCase() === minorWords[j]) {
            currWord = currWord.toLowerCase();
          }
        }
      }
      newTitle += currWord;
      currWord = '';
      newTitle += title[i];
    } else {
      currWord += title[i];
    }
  }
  if (currWord === 'Api') {
    currWord = 'API';
  }
  newTitle += currWord;
  return newTitle;
}
