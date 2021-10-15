function reduce(array, reducer, initialValue) {
  if (initialValue === undefined) {
    initialValue = array[0];
  }
  for (let i = 0; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];
const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const madeSum = reduce(numbers, (previousNum, currNum) => previousNum + currNum);
const madeProduct = reduce(numbers, (previousNum, currNum) => previousNum * currNum);
const madeFindBalance = function (previous, curr) {
  if (curr.type === 'deposit') {
    return previous + curr.amount;
  } else {
    return previous - curr.amount;
  }
};

const madeBalance = reduce(account, madeFindBalance, 0);
const madeComposite = reduce(traits, (previous, curr) => {
  for (const key in curr) {
    previous[key] = curr[key];
  }
  return previous;
});

console.log('madeSum', madeSum);
console.log('madeProduct', madeProduct);
console.log('madeBalance', madeBalance);
console.log('madeComposite', madeComposite);
