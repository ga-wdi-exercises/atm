window.onload = function () {
 $("div.account").addClass("zero");
 };

var checkingBalance = parseInt($("div#checking_balance").html().replace("$", ""));
var savingsBalance = parseInt($("div#savings_balance").html().replace("$", ""));

$("input[value='Deposit']").eq(0).on("click", function(){
    var deposit = parseInt($("input#checking_input").val());//Set their input equal to amount
    checkingBalance += deposit;//Add amount to checkingBalance, i.e. checkingBalance += amount
    $("div#checking_balance").html("$ " + checkingBalance)//Update the "balance" div to reflect the new checkingBalance
    if(checkingBalance > 0) {
      $("div.account").eq(0).removeClass("zero");//Remove class zero
    };
})

$("input[value='Withdraw']").eq(0).on("click", function(){
  //When the user presses the withdrawal button in the first "account" div...
    var withdrawal = parseInt($("input#checking_input").val());//Set their input equal to amount
    if((checkingBalance - withdrawal) < 0){
      if(((checkingBalance + savingsBalance) - withdrawal) > 0){
        savingsBalance -= (withdrawal - checkingBalance);
        $("div#savings_balance").html("$ " + savingsBalance);//Update the savings balance div
        checkingBalance = 0;
        $("div.account").eq(0).addClass("zero");
      }
      else {
        alert("Insufficient funds");
      }
    }
    else {
      checkingBalance -= withdrawal;
      if (checkingBalance == 0) {
        $("div.account").eq(0).addClass("zero");
      }
    }
  $("div#checking_balance").html("$ " + checkingBalance);//Update the "balance" div to reflect the new checkingBalance
})

$("input[value='Deposit']").eq(1).on("click", function(){
  //When the user presses the deposit button in the second "account" div...
    var deposit = parseInt($("input#savings_input").val());//Set their input equal to amount
    savingsBalance += deposit; //Add amount to savingsBalance, i.e. savingsBalance += amount
    $("div#savings_balance").html("$ " + savingsBalance)//Update the "balance" div to reflect the new savingsBalance
    if(savingsBalance > 0) {
      $("div.account").eq(1).removeClass("zero");
    };
})

$("input[value='Withdraw']").eq(1).on("click", function(){
  //When the user presses the withdrawal button in the second "account" div...
    var withdrawal = parseInt($("input#savings_input").val());//Set their input equal to amount
    if((savingsBalance - withdrawal) < 0){
      if(((checkingBalance + savingsBalance) - withdrawal) > 0){
        checkingBalance -= (withdrawal - savingsBalance);
        $("div#checking_balance").html("$ " + checkingBalance);//Update the checking balance div
        savingsBalance = 0;
        $("div.account").eq(1).addClass("zero");//Reinstate class zero
      }
      else {
        alert("Insufficient funds");
      }
    }
    else {
      savingsBalance -= withdrawal;
      if (savingsBalance == 0) {
        $("div.account").eq(1).addClass("zero");
      }
    }
    $("div#savings_balance").html("$ " + savingsBalance); //Update the "balance" div to reflect the new checkingBalance
})
