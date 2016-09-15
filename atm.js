
$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var accounts = [
  // array of account objects
  {
    name: "Trip Planning",
    type: "savings",
    balance: 0
  }
];
var currentAccount = {
  name: "My Primary Checking Account",
  type: "checking",
  balance: 100,
  overdraftAccount: undefined,
};
var overdraftAccount = {
  name: "Emergency Fund",
  type: "savings",
  balance: 200
};
var transferAccount;

var $inputDiv = $("#input");
var $optionsDiv = $("#options")
var $inputField = $("#input-field");
var $button = $("#button");

var inputValue = $inputField.val();

var atm = {
  // methods
  removeEventHandler: function(object) {
    object.off();
  },
  selectDeposit: function() {
    // change event handler for input form and button
    removeEventHandler($button);
    $button.on("click",atm.deposit)
  },
  selectWithdraw: function() {
    // change event handler for input form and button
    removeEventHandler($button);
    $button.on("click",atm.withdraw)
  },
  selectTransfer: function() {
    // change event handler for input form and button
    removeEventHandler($button);
    $button.on("click",atm.transfer)
  },
  reveal: function(object) {
    object.removeClass("hidden");
  },
  hide: function(object) {
    object.addClass("hidden");
  },
  getAccount: function(arrayIndex) {
    return accounts[arrayIndex].pop();
  },
  putAccount: function(purpose) {
    if (purpose === "transfer") {
      accounts.push(transferAccount);
      transferAccount = undefined;
    } else if (purpose === "current") {
      accounts.push(currentAccount);
      transferAccount = undefined;
    } else if (purpose === "overdraft") {
      accounts.push(overdraftAccount);
      overdraftAccount = undefined;
    } else {
      alert("An error has occurred cause your banker is a dumb dumb.");
    }
  }
  selectAccount: function(purpose,) {
    // list accounts
    if (purpose === "transfer") {
      deselectAccount("transfer");
      transferAccount = accounts[this.data-id].pop();
    }
  },
  deselectAccount: function(purpose) {
    // put current account back into accounts array

  },
  cleanInput: function(input) {
    // remove special characters: $ and ,
    var cleanedInput = input.replace("$","");
    cleanedInput = cleanedInput.replace(",","");
    return cleanedInput = parseInt(cleanedInput);
  },
  validateInput: function(input) {
    return !isNaN(input) && input !== NULL;
  },
  deposit: function(amount) {
    // add amount to currentAccount.balance
    currentAccount.balance += amount;
    // may need to add in function calls to update displayed elements
  },
  withdraw: function(amount) {
    if (getBalance(currentAccount) >= amount) {
      currentAccount.balance -= amount;
      // may need to add function calls
      return true;
    } else if (getBalance(currentAccount) + getBalance(overdraftAccount) >= amount) {
      overdraw(amount - currentAccount.balance);
      currentAccount.balance = 0;
      // may need to add function calls
      return true
    } else {
      // may need to add function calls
      return false
    }
    // subtract amount from currentAccount.balance
  },
  transfer: function() {
    if () {

    }
  }
  overdraw: function(amount) {
    // subtract amount from overdraftAccount.balance
    overdraftAccount.balance -= amount;
    // may need to add function calls
    return true;
  },
  getBalance: function(account) {
    if (account.balance === undefined || account.balance === NULL) {
      return 0;
    } else {
      return account.balance;
    }
  },
  setCurrentAccountName: function(name) {
    currentAccount.name = name;
    return true
  },
  getAccountName: function(account) {

  }

}
});
