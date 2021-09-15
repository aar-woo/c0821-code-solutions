/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var depositTransaction = new Transaction('deposit', amount);
  if (amount > 0 && Math.floor(amount) === amount) {
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawTransaction = new Transaction('withdrawal', amount);
  if (amount > 0 && Math.floor(amount) === amount) {
    this.transactions.push(withdrawTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var numTransactions = 0; numTransactions < this.transactions.length; numTransactions++) {
    if (this.transactions[numTransactions].type === 'deposit') {
      balance += this.transactions[numTransactions].amount;
    } else {
      balance -= this.transactions[numTransactions].amount;
    }
  }
  return balance;
};
