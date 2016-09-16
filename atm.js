//TODO:
  // [x] combine event listeners
  // [ ] add a validator
  // [ ] handle zero balance (add red style)
  // [ ] overdraft protection

var bank = {
  checkingBalance: 0,
  savingsBalance: 0,
}

var $checkingBalance = $('#checking .balance');
var $savingsBalance = $('#savings .balance');

var $depositButtons = $('.deposit');
var $withdrawButtons = $('.withdraw');


// event listeners
$depositButtons.on('click', function(){
  var self = $(this);
  var amount = getInput(self);
  if (amount) {
    if (self.parent().is("#checking")) {
      deposit("checkingBalance", $checkingBalance, amount);
    } else {
      deposit("savingsBalance", $savingsBalance, amount);
    }
  } else {
    alert("That's not a number!");
    self.siblings('.input').val('');
  }
})

$withdrawButtons.on('click', function(){
  var self = $(this);
  var amount = parseFloat(self.siblings('.input').val());
  if (self.parent().is("#checking")) {
    withdraw("checkingBalance", $checkingBalance, amount);
  } else {
    withdraw("savingsBalance", $savingsBalance, amount);
  }
})

//DEPOSIT and WITHDRAW functions
function deposit(account, display, amount) {
  bank[account] += amount;
  display.html(toUSD(bank[account]));
}

function withdraw(account, display, amount) {
  bank[account] -= amount;
  display.html(toUSD(bank[account]));
}

function getInput(form) {
  var input = form.siblings('.input').val();
  var amount = parseFloat(input.replace(/\$|,/g, ""));
  if (amount) {
    return amount;
  } else {
    return false;
  }
}

function toUSD(number) {
    //found this function at the following link. It gives a nice walkthrough of what's going on as well:
    // http://www.cssnewbie.com/javascript-currency-conversion-script/#.V9vsYZMrLUo
    var number = number.toString(),
    dollars = number.split('.')[0],
    cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
}
