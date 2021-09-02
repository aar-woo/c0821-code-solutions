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
    if (i === 0 || title[i - 1] === '-' || title[i - 1] === ' ') {
      currWord += title[i].toUpperCase();
    } else if (title[i] === ' ') {
      if (titleCasedStr !== '' && currWord.length >= 3 && currWord !== 'JavaScript' && currWord !== 'API') {
        for (var j = 0; j < minorWords.length; j++) {
          if (currWord) {
            return; // work from here
          }
        }
      }
    }
  }

}
