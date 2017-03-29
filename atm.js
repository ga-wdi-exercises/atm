var checkingDeposit = $('#checking input.deposit');
var checkingInput = $('#checking input.input');
var checkingBalance = $('#checking div.balance');

checkingDeposit.on('click', sayHello);

function sayHello() {
  console.log('Hello');
  checkingBalance.html('$' + checkingInput.val());
}
