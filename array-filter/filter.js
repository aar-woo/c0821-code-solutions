function filter(array, predicate) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}

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

const madeEven = filter(numbers, num => {
  return num % 2 === 0;
});

const madeHaveD = filter(names, name => {
  return name.includes('d') || name.includes('D');
});

console.log('madeEven', madeEven);
console.log('madeHaveD', madeHaveD);
