const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide.js');

if (process.argv[3] === 'plus') {
  console.log('result:', add.add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtract.subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply.multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide.divide(Number(process.argv[2]), Number(process.argv[4])));
}
