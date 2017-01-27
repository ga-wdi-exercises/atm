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
  } else if (savingsBalance >= (parseInt($('#checking .input').val()) - checkingBalance)) {
      var checkingDwindle = prompt(`You only have $${checkingBalance} left. Would you like to take the rest from your Savings Account? Y/N`)
      if (checkingDwindle === "Y") {
        savingsBalance = savingsBalance - (parseInt($('#checking .input').val()) - checkingBalance);
        checkingBalance = 0;
        console.log(checkingBalance)
        $('#checking').addClass("zero")
        $('#checking .balance').html(`$${checkingBalance}`)
        $('#savings .balance').html(`$${savingsBalance}`)
        if (savingsBalance === 0) {
          $('#savings').addClass("zero")
          $('#savings .balance').html(`$${savingsBalance}`)
        }
      } else {
        alert('Thank you, come again!')
      }
  } else {
    var checkingDrain = prompt(`You only have $${checkingBalance} in Checking and $${savingsBalance} in Savings. Would you like to empty both? Y/N`)
    if (checkingDrain === "Y") {
      checkingBalance = 0;
      savingsBalance = 0;
      console.log(checkingBalance)
      $('#checking').addClass("zero")
      $('#checking .balance').html(`$${checkingBalance}`)
      $('#savings').addClass("zero")
      $('#savings .balance').html(`$${savingsBalance}`)
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
  } else if (checkingBalance >= (parseInt($('#savings .input').val()) - savingsBalance)) {
      var savingsDwindle = prompt(`You only have $${savingsBalance} left. Would you like to take the rest from your Checking Account? Y/N`)
      if (savingsDwindle === "Y") {
        checkingBalance = checkingBalance - (parseInt($('#savings .input').val()) - savingsBalance);
        savingsBalance = 0;
        console.log(savingsBalance)
        $('#savings').addClass("zero")
        $('#savings .balance').html(`$${savingsBalance}`)
        $('#checking .balance').html(`$${checkingBalance}`)
        if (checkingBalance === 0) {
          $('#checking').addClass("zero")
          $('#checking .balance').html(`$${checkingBalance}`)
        }
      } else {
        alert('Thank you, come again!')
      }
  } else {
    var savingsDrain = prompt(`You only have $${savingsBalance} in Savings and $${checkingBalance} in Checking. Would you like to empty both? Y/N`)
    if (savingsDrain === "Y") {
      checkingBalance = 0;
      savingsBalance = 0;
      console.log(savingsBalance)
      $('#checking').addClass("zero")
      $('#checking .balance').html(`$${checkingBalance}`)
      $('#savings').addClass("zero")
      $('#savings .balance').html(`$${savingsBalance}`)
    } else {
      alert('Thank you, come again!')
    }
  }

});

})
