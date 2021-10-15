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

const sum = numbers.reduce((previousNum, currNum) => previousNum + currNum);
const product = numbers.reduce((previousNum, currNum) => previousNum * currNum);

const findBalance = function (previous, curr) {
  if (curr.type === 'deposit') {
    return previous + curr.amount;
  } else {
    return previous - curr.amount;
  }
};

const balance = account.reduce(findBalance, 0);

const composite = traits.reduce((previous, curr) => {
  for (const key in curr) {
    previous[key] = curr[key];
  }
  return previous;
});

console.log('sum', sum);
console.log('product', product);
console.log('balance', balance);
console.log('composite', composite);
console.log('Using recreated reduce function ↓');
