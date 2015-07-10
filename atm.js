var checkingBalance = $(".balance")[0];
var checkingInt = Number.parseInt(checkingBalance.innerHTML.replace("$", ""));
$(".balance").eq(0).addClass("zero");
// console.log(checkingInt);
var savingsBalance = $(".balance")[1];
var savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
$(".balance").eq(1).addClass("zero");
// console.log(savingsInt);


// add eventListener to each button
$("[value=\"Deposit\"]").eq(0).click( function(event){checkingDeposit(event);} );
$("[value=\"Withdraw\"]").eq(0).click( function(event){checkingWithdrawal(event);} );

// event listeners for savings account buttons
$("[value=\"Deposit\"]").eq(1).click( function(event){savingsDeposit(event);} );
$("[value=\"Withdraw\"]").eq(1).click( function(event){savingsWithdrawal(event);} );



function checkingDeposit(event){
  // Return if text input is empty string
  if($("[type=\"text\"]").eq(0).val() === ""){
    return;
  }
  // Check contents (integer form) of text input field
  checkingInt = Number.parseInt(checkingBalance.innerHTML.replace("$", ""));
  // Sum together that number and the number parsed from the current balance
  checkingBalance.innerHTML = "$" + (checkingInt + Number.parseInt($("[type=\"text\"]").eq(0).val()));
  // Clear the text input field
  $("[type=\"text\"]").eq(0).val("");

  // if the checking account balance > 0, add the class 'zero'
  if(Number.parseInt(checkingBalance.innerHTML.replace("$", "")) > 0){
    $(".balance").eq(0).removeClass("zero");
  }
}



function checkingWithdrawal(event){
  // Return if text input is empty string
  if($("[type=\"text\"]").eq(0).val() === ""){
    return;
  }

  // Get current balances:
  checkingInt = Number.parseInt(checkingBalance.innerHTML.replace("$", ""));
  savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
  // if withdraw > checkingBalance, check if the remaining withdrawal request could be taken from savingsBalance
  if (Number.parseInt($("[type=\"text\"]").eq(0).val()) > checkingInt){
    console.log("if 1");
    //  if remainder can be taken from savingsBalance, make checkingBalance zero then take the remainder from savingsBalance
    if(savingsInt - (Number.parseInt($("[type=\"text\"]").eq(0).val()) - checkingInt) >= 0){
      console.log("if 2");
      checkingBalance.innerHTML = "$0";
      savingsBalance.innerHTML = "$" + (savingsInt - (Number.parseInt($("[type=\"text\"]").eq(0).val()) - checkingInt));
    }
  }
  // else (withdraw is <= checkingBalance), withdraw the money
  else{
    checkingBalance.innerHTML = "$" + (checkingInt - Number.parseInt($("[type=\"text\"]").eq(0).val()));
  }

  // if the checking account balance = 0, add the class 'zero'
  if(Number.parseInt(checkingBalance.innerHTML.replace("$", "")) === 0){
    $(".balance").eq(0).addClass("zero");
  }
  // if the savings account balance = 0, add the class 'zero'
  if(Number.parseInt(savingsBalance.innerHTML.replace("$", "")) === 0){
    $(".balance").eq(1).addClass("zero");
  }

  // Clear the text input field
  $("[type=\"text\"]").eq(0).val("");
}



function savingsDeposit(event){
  // Return if text input is empty string
  if($("[type=\"text\"]").eq(1).val() === ""){
    return;
  }

  // Check contents (integer form) of text input field
  savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
  // Sum together that number and the number parsed from the current balance
  savingsBalance.innerHTML = "$" + (savingsInt + Number.parseInt($("[type=\"text\"]").eq(1).val()));
  // Clear the text input field
  $("[type=\"text\"]").eq(1).val("");

  // if the checking account balance > 0, add the class 'zero'
  if(Number.parseInt(savingsBalance.innerHTML.replace("$", "")) > 0){
    $(".balance").eq(1).removeClass("zero");
  }
}



function savingsWithdrawal(event){
  // Return if text input is empty string
  if($("[type=\"text\"]").eq(1).val() === ""){
    return;
  }
  savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
  //if the text input field < savings balancs, withdraw the amount
  if (Number.parseInt($("[type=\"text\"]").eq(1).val()) < savingsInt){
    savingsBalance.innerHTML = "$" + (savingsInt - Number.parseInt($("[type=\"text\"]").eq(1).val()));
  }
  //clear the text input field
  $("[type=\"text\"]").eq(1).val("");
  // if the savings account balance = 0, add the class 'zero'
  if(Number.parseInt(savingsBalance.innerHTML.replace("$", "")) === 0){
    $(".balance").eq(1).addClass("zero");
  }

}
