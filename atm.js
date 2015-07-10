window.onload = function () {
 $("div.account").addClass("zero");
 };
//Shorten these?
var checkingBalance = parseInt(document.querySelector("div#checking_balance").innerHTML.replace("$", ""));
var savingsBalance = parseInt(document.querySelector("div#savings_balance").innerHTML.replace("$", ""));

$("input[value='Deposit']").eq(0).on("click", function(){
    var deposit = parseInt($("input#checking_input").val());//Set their input equal to amount
    checkingBalance += deposit;//Add amount to checkingBalance, i.e. checkingBalance += amount
    $("div#checking_balance").html("$ " + checkingBalance)//Update the "balance" div to reflect the new checkingBalance
    if(checkingBalance > 0) {
      $("div.account").eq(0).removeClass("zero");
    };//Remove class zero
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

function savingsWithdrawal(amount){
  //When the user presses the withdrawal button in the second "account" div...
    //Set their input equal to amount
    if((savingsBalance - amount) < 0){
      if(((checkingBalance + savingsBalance) - amount) > 0){
        checkingBalance -= (amount - savingsBalance);
        //Update the checking balance div
        savingsBalance = 0;
        //Reinstate class zero
      }
      else {
        alert("Insufficient funds");
      }
    }
    else {
      savingsBalance -= amount;
      //Update the "balance" div to reflect the new checkingBalance
    }
    console.log(savingsBalance);
}
