const takeAChance = require('./take-a-chance');

const promiseVar = takeAChance('Aaron');

promiseVar.then(value => {
  console.log(value);
});

promiseVar.catch(error => {
  console.log(error.message);
});
