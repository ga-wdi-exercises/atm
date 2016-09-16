//TODO:
  // [ ] handle zero balance (add red style) use throw()
  // [ ] overdraft protection
var $buttons = $('input:button');

$buttons.on('click', function(){
  bank.beginTransaction($(this));
});

var bank = {
  checking: 0,
  savings: 0,
  account: '',
  action: '',
  domBalance: {},
  amount: 0,
  beginTransaction: function(button) {
    this.amount = this.getInput(button); //amount is set
    this.domLegWork(button);
    this.transact(this.account, this.amount)
  },
  getInput: function(form) {
    var input = form.siblings('.input').val();
    var amount = parseFloat(input.replace(/\$|,/g, ""));
    // double check that the amount is actually a number. If not, return false
    return amount ? amount : false;
  },
  domLegWork: function(button) {
    this.account = button.parent().attr('id');
    this.action = button.attr('class');
    this.domBalance = button.siblings('.balance');
  },
  transact: function(account, amount) {
    // if the action is withdraw, set amount to be negative
    amount = (this.action == 'withdraw') ? -Math.abs(amount) : amount;
    this[account] += amount;
    this.domBalance.html(this.toUSD(this[account]));
  },
  toUSD: function(number) {
      //found this function at the following link. It gives a nice walkthrough of what's going on as well:
      // http://www.cssnewbie.com/javascript-currency-conversion-script/#.V9vsYZMrLUo
      var number = number.toString(),
      dollars = number.split('.')[0],
      cents = (number.split('.')[1] || '') +'00';
      dollars = dollars.split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
      return '$' + dollars + '.' + cents.slice(0, 2);
  },
}
