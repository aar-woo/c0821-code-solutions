/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordSuffix = [];
  for (var i = 0; i < words.length; i++) {
    wordSuffix.push(words[i] + suffix);
  }
  return wordSuffix;
}
