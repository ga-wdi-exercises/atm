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
  overdraftAccount: "Emergency Fund"
};
var overdraftAccount = {
  name: "Emergency Fund",
  type: "savings",
  balance: 200
};
var transferAccount = {
  name: "Wild Parties Checking Account",
  type: "checking",
  balance: 0,
  overdraftAccount: undefined
};

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
  var newAccountOverdraftAccountLi = account.overdraftAccount ? $("<li class='accountOverdraftAccount'></li>").html("Overdraft Protection Enabled: (" + account.overdraftAccount + ")") : "";
  newAccountUl.append(newAccountNameLi).append(newAccountTypeLi).append(newAccountBalanceLi).append(newAccountOverdraftAccountLi);
  newAccountDiv.append(newAccountUl);
  return account.balance === 0 ? newAccountDiv.css("background","red") : newAccountDiv;
}

function refreshCurrentAccount() {
  getActiveAccount();
  $activeAccount.remove();
  $activeDiv.append(createAccountDiv(currentAccount));
}

function refreshOtherAccounts() {
  getOtherAccounts();
  $otherAccountsDivs.remove();
  // the next two lines will fail when the referenced account variable is undefined
  $accountsDiv.append(createAccountDiv(overdraftAccount));
  $accountsDiv.append(createAccountDiv(transferAccount));
  for (var i = 0; i < accounts.length; i++) {
    $accountsDiv.append(createAccountDiv(accounts[i]));
  }
}

function setTransactionType() {
  transactionType = $(this).attr("id");
  $button.html(capitalizeFirstLetter(transactionType));
  atm.optionsToInput();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var atm = {
  // methods
  tryTransaction: function() {
    getInputValue();
    var amount = atm.cleanInput(inputValue);
    if (!atm.validateInput(amount)) {
      return atm.invalidInput();
    } else if (transactionType === undefined || currentAccount === undefined) {
      return alert("This ATM is experiencing an error. Please contact customer support.");
    } else if (transactionType === "deposit") {
      return atm.updateBalance(amount,currentAccount) ? atm.transactionSuccessful() : atm.transactionFailed();
    } else if (transactionType === "withdraw") {
      return atm.withdraw(amount) ? atm.transactionSuccessful() : atm.transactionFailed();
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
  error: function() {
    alert("An error has occurred cause your banker is a dumb dumb.");
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
      atm.error();
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
    return cleanedInput = parseFloat(cleanedInput);
  },
  validateInput: function(input) {
    return !isNaN(input);
  },
  invalidInput: function() {
    alert("The value '" + inputValue + "' is an invalid entry.");
    $inputField.attr("value","0");
  },



  // math
  updateBalance: function(amount,account) {
    account.balance += amount;
    return true
  },
  withdraw: function(amount) {
    var currentAccountBalance = atm.getBalance(currentAccount);
    if (currentAccountBalance >= amount) {
      atm.updateBalance(amount * -1,currentAccount);
      return true;
    } else if (currentAccountBalance + atm.getBalance(overdraftAccount) >= amount) {
      atm.overdraw(amount - currentAccountBalance);
      atm.updateBalance(currentAccountBalance * -1,currentAccount);
      return true
    } else {
      return false
    }
  },
  overdraw: function(amount) {
    atm.updateBalance(amount * -1,overdraftAccount);
    alert("You have overdrawn your account, but Overdraft Protection has covered the $" + amount + " that was overdrawn by making a deduction from " + atm.getAccountName(overdraftAccount) + ".");
    return true;
  },
  // secondary - do if time permits - it didn't
  transfer: function(amount) {
    atm.updateBalance(amount,transferAccount);
    atm.updateBalance(amount * -1,currentAccount);
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
    if (account.name === "") {
      return "your unnamed " + account.type + " account";
    } else {
      return account.name;
    }
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
