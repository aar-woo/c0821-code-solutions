function map(array, transform) {
  const outputArr = [];
  for (let i = 0; i < array.length; i++) {
    const transformedVal = transform(array[i]);
    outputArr.push(transformedVal);
  }
  return outputArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const madePrices = map(numbers, num => `$${num.toFixed(2)}`);
const madeFirstLetters = map(languages, lang => lang[0]);
console.log('madePrices', madePrices);
console.log('madeFirstLetters', madeFirstLetters);
