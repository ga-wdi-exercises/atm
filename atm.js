$( document ).ready(function() {
    console.log( "ready!" );
    var totalBalance = parseInt(checking + savings)


  //add value of inputChecking to #checking
  $("#checkingDeposit").click(function(){
    var inputChecking = parseInt($("#inputChecking").val());
    var checking = parseInt($("#checking").text().replace("$", ""));
    var newBalance = checking + inputChecking
    console.log(newBalance);
    $("#checking").text("$" + newBalance)
    if (checking > 0) {
      $(".checkingAccount").removeClass("zero")

    }
  })

  //subtract inputChecking from #checking
  $("#checkingWithdrawal").click(function(){
    var inputChecking = parseInt($("#inputChecking").val());
    var checking = parseInt($("#checking").text().replace("$", ""));
    var savings = parseInt($("#savings").text().replace("$", ""));
    var newBalance = checking - inputChecking

    if((checking - inputChecking) < 0){
      var overDraft = inputChecking - checking
      $("#checking").text("$0")
      var newSavingsBalance = (savings - overDraft)
      $("#savings").text("$" + newSavingsBalance)
      $(".checkingAccount").addClass("zero")
    }

    //I could not get the savings to prevent a negative balance when overdraft
    else if ((newBalance <= 0) || (newSavingsBalance <= 0)){
        console.log("oops");
        return;
      }
    //////////////////////////////////
    else{
    console.log(newBalance);
    $("#checking").text("$" + newBalance)
    }

  })

  //add inputSavings to savings
  $("#savingsDeposit").click(function(){
    var inputSavings = parseInt($("#inputSavings").val());
    var savings = parseInt($("#savings").text().replace("$", ""));
    var newBalance = savings + inputSavings
    console.log(newBalance);
    $("#savings").text("$" + newBalance)
    if (savings > 0) {
      $(".savingsAccount").removeClass("zero")

    }
  })

  //subtract inputSavings from savingsBalance
  $("#savingsWithdrawal").click(function(){
    var inputSavings = parseInt($("#inputSavings").val());
    var savings = $("#savings").text().replace("$", "");
    var newBalance = savings - inputSavings
    if (newBalance <0) { //prevents negative balances
      return;
    }
    console.log(newBalance);
    $("#savings").text("$" + newBalance)
    if (savings = 0) {
      $(".savingsAccount").removeClass("zero")
    }
  })
});
