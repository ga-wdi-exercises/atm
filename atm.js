$(document).ready(function(){

var checkingBalance = 0;
var savingsBalance = 0;

$('#checking .deposit').on("click", function() {
  checkingBalance += parseInt($('#checking .input').val());
  console.log(checkingBalance)
  $('#checking .balance').html(`$${checkingBalance}`)
})

$('#checking .withdraw').on("click", function() {
  checkingBalance -= parseInt($('#checking .input').val());
  console.log(checkingBalance)
  $('#checking .balance').html(`$${checkingBalance}`)
})

$('#savings .deposit').on("click", function() {
  savingsBalance += parseInt($('#savings .input').val());
  console.log(savingsBalance)
  $('#savings .balance').html(`$${savingsBalance}`)
})

$('#savings .withdraw').on("click", function() {
  savingsBalance -= parseInt($('#savings .input').val());
  console.log(savingsBalance)
  $('#savings .balance').html(`$${savingsBalance}`)
})

});
