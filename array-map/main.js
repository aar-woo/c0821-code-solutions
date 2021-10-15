const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = numbers.map(num => num * 2);
const prices = numbers.map(num => `$${num.toFixed(2)}`);
const upperCased = languages.map(lang => lang.toUpperCase());
const firstLetters = languages.map(lang => lang[0]);

console.log('double', double);
console.log('prices', prices);
console.log('upperCased', upperCased);
console.log('firstLetters', firstLetters);
console.log('Using recreated map function ↓');
