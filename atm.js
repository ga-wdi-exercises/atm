var checkingBalance = parseInt(document.querySelector("div#checking_balance").innerHTML.replace("$", ""));

//Instantiate var savingsBalance in the style of var checkingBalance
var savingsBalance = parseInt(document.querySelector("div#savings_balance").innerHTML.replace("$", ""));

var checkingDeposit = function(amount){
  // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
  //When the user presses the deposit button in the first "account" div...
    //Set their input equal to amount
    checkingBalance += amount;//Add amount to checkingBalance, i.e. checkingBalance += amount
    console.log(checkingBalance);//Update the "balance" div to reflect the new checkingBalance
    //Remove class zero
}

function checkingWithdrawal(amount){
  //When the user presses the withdrawal button in the first "account" div...
    //Set their input equal to amount
    //If checkingBalance + savingsBalance minus amount is less than $0
      //do nothing
    //Else if checkingBalance minus amount is less than $0
      //Set checkingBalance to $0 and
      //Reinstate class zero
      //Subtract (amount-checkingBalance) from savingsBalance
      //Update the savings balance div
    //Else
      //Subtract amount from checkingBalance
      //Update the "balance" div to reflect the new checkingBalance
}

function savingsDeposit(amount){
  // savingsBalance = parseInt( savingsBalance.innerHTML.replace("$", "") );
  //When the user presses the deposit button in the second "account" div...
    //Set their input equal to amount
    savingsBalance += amount; //Add amount to savingsBalance, i.e. savingsBalance += amount
    console.log(savingsBalance);
    //Update the "balance" div to reflect the new savingsBalance
}

function savingsWithdrawal(amount){
  //When the user presses the withdrawal button in the second "account" div...
    //Set their input equal to amount
    //If checkingBalance + savingsBalance minus amount is less than $0
      //do nothing
    //Else if savingsBalance minus amount is less than $0
      //Set savingsBalance to $0 and
      //Reinstate class zero
      //Subtract (amount - savingsBalance) from checkingBalance
      //Update the checking balance div
    //Else
      //Subtract amount from savingsBalance
      //Update the "balance" div to reflect the new checkingBalance
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
