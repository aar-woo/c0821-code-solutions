/* exported titleCase */
/*
Capitalize the first word of the title and of any subtitle.
Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., Self-Report not Self-report).
Capitalize all words of four letters or more.

This boils down to using lowercase only for “minor” words of three letters or fewer, namely,
for conjunctions (words like and, or, nor, and but), articles (the words a, an, and the),
and prepositions (words like as, at, by, for, in, of, on, per, and to),
as long as they aren’t the first word in a title or subtitle.
*/
/*
  -
*/
function titleCase(title) {
  var minorWords = ['and', 'or', 'not', 'but', 'a', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleCasedStr = '';
  var currWord = '';

  for (var i = 0; i < title.length; i++) {
    if (i === 0 || title[i - 1] === '-' || title[i - 1] === ' ' || title[i - 2] === ':') {
      currWord += title[i].toUpperCase();
    } else if (title[i] === ' ') {
      if (titleCasedStr === '') {
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      } else if (titleCasedStr !== '' && currWord.length >= 4 && currWord !== 'Javascript' && currWord !== 'Api') {
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      } else if (currWord === 'Javascript') {
        currWord = 'JavaScript';
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      } else if (currWord === 'Api') {
        currWord = 'API';
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      } else if (currWord.length < 4) {
        for (var j = 0; j < minorWords.length; j++) {
          if (currWord.toLowerCase() === minorWords[j]) {
            currWord = currWord.toLowerCase();
          }
        }
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      } else {
        titleCasedStr += currWord;
        currWord = '';
        titleCasedStr += title[i];
      }
    } else {
      currWord += title[i];
    }
  }
  if (currWord === 'Api') {
    currWord = currWord.toUpperCase();
  }
  titleCasedStr += currWord;
  return titleCasedStr;
}
