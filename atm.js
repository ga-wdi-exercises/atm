$(document).ready(function(){

var checkingBalance = 0;
var savingsBalance = 0;

$('#checking .deposit').on("click", function() {
  checkingBalance += parseInt($('#checking .input').val());
  console.log(checkingBalance)
  $('#checking .balance').html(`$${checkingBalance}`)
})

$('#checking .withdraw').on("click", function() {
  if (parseInt($('#checking .input').val()) <= checkingBalance) {
    checkingBalance -= parseInt($('#checking .input').val());
    console.log(checkingBalance)
    $('#checking .balance').html(`$${checkingBalance}`)
  } else {
    var checkingDwindle = prompt(`You only have $${checkingBalance} left. Would you like to take the rest? Y/N`)
      if (checkingDwindle === "Y") {
        checkingBalance = 0;
        console.log(checkingBalance)
        $('#checking').addClass("zero")
        $('#checking .balance').html(`$${checkingBalance}`)
      } else {
        alert('Thank you, come again!')
      }
  }

})

$('#savings .deposit').on("click", function() {
  savingsBalance += parseInt($('#savings .input').val());
  console.log(savingsBalance)
  $('#savings .balance').html(`$${savingsBalance}`)
})

$('#savings .withdraw').on("click", function() {
  if (parseInt($('#savings .input').val()) <= savingsBalance) {
    savingsBalance -= parseInt($('#savings .input').val());
    console.log(savingsBalance)
    $('#savings .balance').html(`$${savingsBalance}`)
  } else {
    var savingsDwindle = prompt(`You only have $${savingsBalance} left. Would you like to take the rest? Y/N`)
      if (savingsDwindle === "Y") {
        savingsBalance = 0;
        console.log(savingsBalance)
        $('#savings').addClass("zero")
        $('#savings .balance').html(`$${savingsBalance}`)
      } else {
        alert('Thank you, come again!')
      }
  }

});

})
