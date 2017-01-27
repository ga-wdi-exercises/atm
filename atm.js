//Given ATM Object with a checking and savings account
//Need to make ATM object functional, how do we do that?
//Make sure functions are not longer than five lines,(Sandi Metz's Rule 2)

//Test that the Javascript library, jQuery is working
$(document).ready(function(){
  console.log('javascript is running');
  console.log($);

  //Users of the ATM object with a Checking Account
  //Users of the ATM object can deposit money into bank account
  // Set the value of 0

  var checkingAccount = 0;
  var checkingBalance = $("#checking div.balance");
    console.log(checkingBalance.html());
  var checkingInput = $(".input input.input");
    console.log(checkingInput.html());
  var checkingDeposit = $(".button input.deposit");
    console.log(checkingDeposit.html());
  var checkingWithdraw = $(".button input.withdraw");
    console.log(checkingWithdraw.html());

  //Users of the ATM object with a Savings Account
  //Users of the ATM object can deposit money into bank account
  //Set the value of 0

  var savingsAccount = 0;
  var savingsBalance = $("#savings div.balance");
    console.log(savingsBalance.html());
  var savingsInput = $(".input input.input");
    console.log(savingsInput.html());
  var savingsDeposit = $(".button input.deposit");
    console.log(savingsDeposit.html());
  var savingsWithdraw = $(".button input.deposit");
    console.log(savingsWithdraw.html());


  //Create an event that listens for click on deposit button from user when a deposit is made
  //When deposit button is clicked it will console.log('hello')
  //This works for both accounts


 $(".deposit").on("click", function() {
      console.log("hello");

 });

 //When deposit button is clicked it will return the userinput
 //When userinput is returned it will console.log('get money')
 //When the deposit button is clicked, the balance container will update (in add. to current) with userinput


$("div#checking > .deposit").on("click", sumTotal);
function sumTotal() {
  var checkingBalance = parseInt($("#checking > .input").val());
    if($(this).val()==$(this).attr('.deposit'))
         $(this).val().split();
   console.log(checkingBalance);
   console.log("in sumTotal");
}



//Users of the ATM object can withdraw money from bank account
//Create an event that listens for click on withdraw button from user when a withdraw is made
//When withdraw button is clicked it will console.log('bye')
//This does it for both

$(".withdraw").on("click", function() {
     console.log("bye");

});

//When withdrawn button is clicked it will return the userinput
//When userinput is returned it will console.log('ballin')
//When the withdraw button is clicked, the balance container will update (in add. to current) with userinput


("#checking > .withdraw").on("click", sumTotal);

function sumLoss() {
  var checkingBalance = parseInt($("#checking > .input").val());
    if($(this).val()==$(this).attr('.withdraw'))
         $(this).val().split();
   console.log(checkingBalance);
   console.log("in sumLoss");
}


//----------------------------------------------------

//When withdrawn button is clicked it will return the userinput
//When userinput is returned it will console.log('ballin')
//When the withdraw button is clicked, the balance container will update (in add. to current) with userinput

$("div#savings > .deposit").on("click", sumTotal);
function sumSavingsTotal() {
  var checkingBalance = parseInt($("#savings > .input").val());
    if($(this).val()==$(this).attr('.deposit'))
         $(this).val().split();
   console.log(savingsBalance);
   console.log("in sumTotal");
}


//When withdrawn button is clicked it will return the userinput
//When userinput is returned it will console.log('money loss')
//When the withdraw button is clicked, the balance container will update (in add. to current) with userinput

("#savings > .withdraw").on("click", sumTotal);

function sumSavingsLoss() {
  var checkingBalance = parseInt($("#savings > .input").val());
    if($(this).val()==$(this).attr('.withdraw'))
         $(this).val().split();
   console.log(savingsBalance);
   console.log("in sumLoss");
 }


});
