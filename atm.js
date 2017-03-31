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
  });

  withdrawCheckingButton.on('click',function(){
    console.log('withdraw')
    var inputVal = parseInt($('#checking .input').val());
    var checkingBalanceDisplay = parseInt($('#checking .balance').text().replace("$",""));
    var newBalance = checkingBalanceDisplay - inputVal;

    $('#checking .balance').text('$' + newBalance);
    // Add each new deposit to transactionHistory array
    transactionHistory.push(-inputVal);
    console.log(transactionHistory);
  });

  depositSavingsButton.on('click',function(){
    console.log('deposit savings');
    var inputVal = parseInt($('#savings .input').val());
    var savingsBalanceDisplay = parseInt($('#savings .balance').text().replace("$",""));
    var newBalance = savingsBalanceDisplay + inputVal;

    $('#savings .balance').text('$' + newBalance);
    savTransactionHistory.push(inputVal);
    console.log(savTransactionHistory);
  })

  withdrawSavingsButton.on('click',function(){
    console.log('withdraw savings');
  })


});


//
// $("#checkingDeposit").on("click", function(){
//     var deposit = parseInt($("#checkingInput").val())
//     var balance = parseInt($(".checking.balance").text().replace("$", ""))
//     var newBalance = "$" + (balance + deposit)
//     $(".checking.balance").text(newBalance)
//   })
