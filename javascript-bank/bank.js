/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || Math.floor(balance) !== balance) {
    return null;
  }
  var newAcc = new Account(this.nextAccountNumber, holder);
  newAcc.deposit(balance);
  this.accounts.push(newAcc);
  this.nextAccountNumber++;
  return newAcc.number;
};

Bank.prototype.getAccount = function (number) {
  for (var accountNum = 0; accountNum < this.accounts.length; accountNum++) {
    if (this.accounts[accountNum].number === number) {
      return this.accounts[accountNum];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var accountNum = 0; accountNum < this.accounts.length; accountNum++) {
    totalAssets += this.accounts[accountNum].getBalance();
  }
  return totalAssets;
}
;
