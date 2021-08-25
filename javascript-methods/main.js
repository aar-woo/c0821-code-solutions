var num1 = 5;
var num2 = 10;
var num3 = 500;

var maximumValue = Math.max(num1, num2, num3);
console.log('Max value:', maximumValue);

var heroes = ['Spider Man', 'Batman', 'Thor', 'Danny Phantom'];
var randomNumber = Math.random();
randomNumber *= randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);

var library = [
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie'
  },
  {
    title: 'The Ruins of Gorlan',
    author: 'John Flanagan'
  },
  {
    title: 'No Longer Human',
    author: 'Osamu Dazai'
  }
];

var lastBook = library.pop();
console.log('Last book:', lastBook);

var firstBook = library.shift();
console.log('First book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

var fullName = 'Aaron Woo';
var firstAndLastname = fullName.split(' ');
var firstName = firstAndLastname[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
