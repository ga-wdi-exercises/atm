//TODO:
  // [x] combine event listeners
  // [x] add a validator
  // [x] combine withdraw and deposit
  // [ ] handle zero balance (add red style)
  // [ ] overdraft protection

var bank = {
  checking: 0,
  savings: 0,
}

var $buttons = $('input:button');

$buttons.on('click', function(){
  var self = $(this);
  var amount = getInput(self);
  update(self, amount);
})

function update(button, amount) {
  var account = button.parent().attr('id');
  var action = button.attr('class');
  var domBalance = button.siblings('.balance');
  // if the action is withdraw, set amount to be negative
  amount = (action == 'withdraw') ? -Math.abs(amount) : amount;
  bank[account] += amount;
  domBalance.html(toUSD(bank[account]));
}

function getInput(form) {
  var input = form.siblings('.input').val();
  var amount = parseFloat(input.replace(/\$|,/g, ""));
  // double check that the amount is actually a number. If not, return false
  return amount ? amount : false;
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
