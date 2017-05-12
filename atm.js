$(document).ready(function(){
var balance = 0;
//DEPOSIT CHECKING
  $('#checking .deposit').click(function(){
    var depositInput = parseInt($('#checking .input').val());
    var newBalance = addBalance(depositInput)
    $('#checking .balance').text("$" + newBalance)
    if (newBalance > 0) {
      $('#checking').removeClass("zero");
    }
  })

//WITHDRAW CHECKING
  $('#checking .withdraw').click(function(){
    var depositInput = parseInt($('#checking .input').val());
    var newBalance = withdraw(depositInput)
    $('#checking .balance').text(`$ ${newBalance}`)
    if (0 >= newBalance) {
      $('#checking').addClass("zero");
    }

  })

//DEPOSIT SAVINGS
  $('#savings .deposit').click(function(){
    var depositInput = parseInt($('#savings .input').val());
    var newBalance = addBalance(depositInput)
    $('#savings .balance').text("$" + newBalance)
    if (newBalance > 0) {
      $('#savings').removeClass("zero");
    }
  })

//WITHDRAW SAVINGS
  $('#savings .withdraw').click(function(){
    var depositInput = parseInt($('#savings .input').val());
    var newBalance = withdraw(depositInput)
    $('#savings .balance').text("$" + newBalance)
    if (0 >= newBalance) {
      $('#savings').addClass("zero");
    }
  })


  function addBalance(depositInput) {
    balance = depositInput + balance
    return balance
  }

  function withdraw(depositInput) {
    balance = balance - depositInput
    return  balance

  }


});
