const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => {
  return num % 2 === 0;
});

const overFive = numbers.filter(num => num > 5);
const starWithE = names.filter(name => name[0] === 'E');
const haveD = names.filter(name => {
  return name.includes('d') || name.includes('D');
});

console.log('evenNumbers', evenNumbers);
console.log('overFive', overFive);
console.log('starWithE', starWithE);
console.log('haveD', haveD);
console.log('Using recreated filter function ↓');
