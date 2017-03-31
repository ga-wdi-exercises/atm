$(document).ready(function(){
  // Create a variable to store all transaction history
  var transactionHistory = [];
  var savTransactionHistory = [];
  // Declare Buttons
  var depositCheckingButton = $('#checking .deposit');
  var withdrawCheckingButton = $('#checking .withdraw');
  var depositSavingsButton = $('#savings .deposit');
  var withdrawSavingsButton = $('#savings .withdraw')
  //Deposit Checking function
  // When Deposit is clicked, add input value to checking balance displayed
  depositCheckingButton.on('click',function(){
    var inputVal = parseInt($('#checking .input').val());
    var checkingBalanceDisplay = parseInt($('#checking .balance').text().replace("$",""));
    var newBalance = inputVal + checkingBalanceDisplay;

    $('#checking .balance').text('$' + newBalance);
    // Add each new deposit to transactionHistory array
    transactionHistory.push(inputVal);
    console.log(transactionHistory);
    // Remove zero class for amounts greater than 0
    if(newBalance > 0) {
      $('#checking .balance').removeClass('zero');
    }

  });

  withdrawCheckingButton.on('click',function(){
    var inputVal = parseInt($('#checking .input').val());
    var checkingBalanceDisplay = parseInt($('#checking .balance').text().replace("$",""));
    var newBalance = checkingBalanceDisplay - inputVal;
    $('#checking .balance').text("$" + newBalance);
    // Add each new deposit to transactionHistory array
    transactionHistory.push(-inputVal);
    console.log(transactionHistory);
    // Add zero class for amounts less than or equal to
    if(newBalance < 0) {
      $('#checking .balance').addClass('zero');
    }
  });

  depositSavingsButton.on('click',function(){
    var inputVal = parseInt($('#savings .input').val());
    var savingsBalanceDisplay = parseInt($('#savings .balance').text().replace("$",""));
    var newBalance = savingsBalanceDisplay + inputVal;
    $('#savings .balance').text('$' + newBalance);
    // Add each new deposit to savTransactionHistory array
    savTransactionHistory.push(inputVal);
    console.log(savTransactionHistory);
    // Remove zero class for amounts greater than 0
    if(newBalance > 0) {
      $('#savings .balance').removeClass('zero');
    }
  })

  withdrawSavingsButton.on('click',function(){
    var inputVal = parseInt($('#savings .input').val());
    var savingsBalanceDisplay = parseInt($('#savings .balance').text().replace("$",""));
    var newBalance = savingsBalanceDisplay - inputVal;
    $('#savings .balance').text('$' + newBalance);
    // Add each new deposit to savTransactionHistory array
    savTransactionHistory.push(-inputVal);
    console.log(savTransactionHistory);
    // Add zero class for amounts less than or equal to
    if(newBalance < 0) {
      $('#savings .balance').addClass('zero');
    }
  })


});


//
// $("#checkingDeposit").on("click", function(){
//     var deposit = parseInt($("#checkingInput").val())
//     var balance = parseInt($(".checking.balance").text().replace("$", ""))
//     var newBalance = "$" + (balance + deposit)
//     $(".checking.balance").text(newBalance)
//   })
