/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var depositTransaction = new Transaction('deposit', amount);
  if (amount > 0 && typeof amount === 'number' && Math.floor(amount) === amount) {
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
}
;
