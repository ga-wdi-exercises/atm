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
  overdraftAccount: undefined
};
var overdraftAccount = {
  name: "Emergency Fund",
  type: "savings",
  balance: 200
};
var transferAccount;

var $activeDiv = $("#active")
var $activeAccount = $("#active .account");

var $optionsDiv = $("#options")
var $deposit = $("#deposit");
var $withdraw = $("#withdraw");
var $transfer = $("#transfer");

var $inputDiv = $("#input");
var $inputField = $("#input-field");
var $button = $("#button");
var $cancel = $("#cancel");

var $accountsDiv = $("#accounts");
var $otherAccountsDivs = $("#accounts .account");

var inputValue;

var getInputValue = function() {
  inputValue = $inputField.val();
}

var getActiveAccount = function() {
  $activeAccount = $("#active .account");
}

var getOtherAccounts = function() {
  $otherAccountsDivs = $("#accounts .account");
}

var transactionType;

function createAccountDiv(account) {
  var newAccountDiv = $("<div class='account'></div>");
  var newAccountUl = $("<ul></ul>");
  var newAccountNameLi = $("<li class='accountName'></li>").html("Account Name: " + account.name);
  var newAccountTypeLi = $("<li class='accountType'></li>").html("Type: " + account.type);
  var newAccountBalanceLi = $("<li class='accountBalance'></li>").html("Balance: $" + account.balance);
  newAccountUl.append(newAccountNameLi).append(newAccountTypeLi).append(newAccountBalanceLi);
  newAccountDiv.append(newAccountUl);
  return newAccountDiv;
}

function refreshCurrentAccount() {
  getActiveAccount();
  $activeAccount.remove();
  $activeDiv.append(createAccountDiv(currentAccount));
}

function refreshOtherAccounts() {
  getOtherAccounts();
  $otherAccountsDivs.remove();
  $accountsDiv.append(createAccountDiv(overdraftAccount));
  // $accountsDiv.append(createAccountDiv(transferAccount));
}

function setTransactionType() {
  transactionType = $(this).attr("id");
  $button.html(transactionType);
}

var atm = {
  // methods
  tryTransaction: function() {
    getInputValue();
    var amount = atm.cleanInput(inputValue);
    if (!atm.validateInput(amount)) {
      return atm.invalidInput();
    } else if (transactionType === undefined) {
      return alert("transactionType is undefined");
    } else if (transactionType === "deposit") {
      if (atm.deposit(amount)) {
        return atm.transactionSuccessful();
      } else {
        return atm.transactionFailed();
      }
    } else if (transactionType === "withdraw") {
      if (atm.withdraw(amount)) {
        return atm.transactionSuccessful();
      } else {
        return atm.transactionFailed();
      }
    } else if (transactionType === "transfer") {
      // may or may not finish this later
      return atm.transactionFailed();
    } else {
      alert("tryTransaction has failed by meeting none of the logical criteria");
    }
  },



  transactionSuccessful: function() {
    refreshCurrentAccount();
    refreshOtherAccounts();
    atm.inputToOptions();
  },
  transactionFailed: function() {
    // this should be changed to be dynamic
    alert("Insufficient funds in accounts.")
  },



  optionsToInput: function() {
    atm.hide($optionsDiv);
    atm.reveal($inputDiv);
  },
  inputToOptions: function() {
    atm.hide($inputDiv);
    atm.reveal($optionsDiv);
  },
  reveal: function(object) {
    object.removeClass("hidden");
  },
  hide: function(object) {
    object.addClass("hidden");
  },
  // may not be using
  removeEventHandler: function(object) {
    object.off();
  },



  // secondary - use if time permits
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
  },
  selectAccount: function(purpose) {
    // get account from array and assign to variable
  },
  deselectAccount: function(purpose) {
    // put current account back into accounts array
  },



  // input handling
  cleanInput: function(input) {
    // remove special characters: $ and ,
    var cleanedInput = input.replace("$","");
    cleanedInput = cleanedInput.replace(",","");
    return cleanedInput = parseInt(cleanedInput);
  },
  validateInput: function(input) {
    return !isNaN(input);
  },
  invalidInput: function() {
    alert("The value '" + inputValue + "' is an invalid entry.");
    $inputField.attr("value","0");
  },



  // math
  deposit: function(amount) {
    // add amount to currentAccount.balance
    return currentAccount.balance += amount;
    // may need to add in function calls to update displayed elements
  },
  withdraw: function(amount) {
    if (atm.getBalance(currentAccount) >= amount) {
      currentAccount.balance -= amount;
      // may need to add function calls
      return true;
    } else if (atm.getBalance(currentAccount) + atm.getBalance(overdraftAccount) >= amount) {
      atm.overdraw(amount - currentAccount.balance);
      currentAccount.balance = 0;
      // may need to add function calls
      return true
    } else {
      // may need to add function calls
      return false
    }
  },
  overdraw: function(amount) {
    // subtract amount from overdraftAccount.balance
    overdraftAccount.balance -= amount;
    // may need to add function calls
    return true;
  },
  // secondary - do if time permits
  transfer: function() {
  },



  // account info
  getBalance: function(account) {
    if (account.balance === undefined || account.balance === "") {
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

// add event listeners
$deposit.on("click",setTransactionType);
$withdraw.on("click",setTransactionType);
$transfer.on("click",setTransactionType);
$accountsDiv.on("click",atm.selectAccount);
$button.on("click",atm.tryTransaction);
$cancel.on("click",atm.inputToOptions);

refreshCurrentAccount();
refreshOtherAccounts();
