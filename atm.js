$( document ).ready(function() {
    console.log( "ready!" );
});


//add value of inputChecking to #checking
$("#checkingDeposit").click(function(){
  var inputChecking = parseInt($("#inputChecking").val());
  var checking = $("#checking").text();
  checking = parseInt(checking.replace("$", ""))
  var newBalance = checking + inputChecking
  console.log(newBalance);
  $("#checking").text("$" + newBalance)
})

//subtract inputChecking from #checking
$("#checkingWithdrawal").click(function(){
  var inputChecking = parseInt($("#inputChecking").val());
  var checking = $("#checking").text();
  checking = parseInt(checking.replace("$", ""))
  var newBalance = checking - inputChecking
    if (newBalance <0) { //prevents negative balances
      return;
    }
  console.log(newBalance);
  $("#checking").text("$" + newBalance)

})

//add inputSavings to savings
$("#savingsDeposit").click(function(){
  var inputSavings = parseInt($("#inputSavings").val());
  var savings = $("#savings").text();
  savings = parseInt(savings.replace("$", ""))
  var newBalance = savings + inputSavings
  console.log(newBalance);
  $("#savings").text("$" + newBalance)
})

//subtract inputSavings from savingsBalance
$("#savingsWithdrawal").click(function(){
  var inputSavings = parseInt($("#inputSavings").val());
  var savings = $("#savings").text();
  savings = parseInt(savings.replace("$", ""))
  var newBalance = savings - inputSavings
  if (newBalance <0) { //prevents negative balances
    return;
  }
  console.log(newBalance);
  $("#savings").text("$" + newBalance)
})
