window.onload = function () {
 $("div.account").addClass("zero");
 };

var checkingBalance = parseInt(document.querySelector("div#checking_balance").innerHTML.replace("$", ""));
var savingsBalance = parseInt(document.querySelector("div#savings_balance").innerHTML.replace("$", ""));

$("input[value='Deposit']").eq(0).on("click", function(){
    var deposit = parseInt($("input#checking_deposit").val());//Set their input equal to amount
    checkingBalance += deposit;//Add amount to checkingBalance, i.e. checkingBalance += amount
    $("div#checking_balance").html("$ " + checkingBalance)//Update the "balance" div to reflect the new checkingBalance
    if(checkingBalance > 0) {
      $("div.account").eq(0).removeClass("zero");
    };//Remove class zero
})

function checkingWithdrawal(amount){
  //When the user presses the withdrawal button in the first "account" div...
    //Set their input equal to amount
    if((checkingBalance - amount) < 0){
      if(((checkingBalance + savingsBalance) - amount) > 0){
        savingsBalance -= (amount - checkingBalance);
        //Update the savings balance div
        checkingBalance = 0;
        //Reinstate class zero
      }
      else {
        alert("Insufficient funds");
      }
    }
    else {
      checkingBalance -= amount;
      //Update the "balance" div to reflect the new checkingBalance
    }
    console.log(checkingBalance);
}

function savingsDeposit(amount){
  // savingsBalance = parseInt( savingsBalance.innerHTML.replace("$", "") );
  //When the user presses the deposit button in the second "account" div...
    //Set their input equal to amount
    savingsBalance += amount; //Add amount to savingsBalance, i.e. savingsBalance += amount
    console.log(savingsBalance);
    //Update the "balance" div to reflect the new savingsBalance
    if(savingsBalance > 0) {
      $("div.account").eq(1).removeClass("zero");
    };
}

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

// - Are there ways to refactor your code to make it DRYer or more Object-Oriented?
//
// ###Tips
// * Tackle making your accounts work individually first
// * Then tackle them working together with overdraft protection
// * Only start working with the DOM after you have the logic down
//
// ###Resources
// * [What is window.onload for?](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload)
// * [Adding Event Listeners so things happen when you click](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener)
// * [Adding or removing a CSS class using JS](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList)
// * [Changing HTML with JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Element.innerHTML)

//var checkingBalance = document.querySelector("div#checking_balance");
//var savingsBalance = document.querySelector("div#savings_balance");
