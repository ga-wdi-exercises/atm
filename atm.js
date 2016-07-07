$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

//change to red when balance is at 0
$("#checking > .balance").addClass("zero");
$("#savings > .balance").addClass("zero");
//chance balance to white when it is greater then 0

//define CHECKING DEPOSIT  button*********************************************

      //prevent submissions from reloading
      $("#checking > .deposit").on("click", makeCheckingDeposit)

      function makeCheckingDeposit (evt){
      evt.preventDefault()

          //checking account variables
          var checkEntry = $("#checking > .input").val()
            console.log(checkEntry);
          var floatCheckEntry = parseFloat(checkEntry);
            console.log("FloatChcekEntry: " + floatCheckEntry);
          var balance = $("#checking > .balance").html();
            console.log(balance)
          var numericTotal = parseFloat(balance.split('$')[1]);
            console.log(numericTotal)
          var actualDepositTotal = parseFloat(floatCheckEntry) + numericTotal;

          //place this into input html
          $("#checking > .balance").html("$"+ actualDepositTotal.toFixed(2));

          //clearfield checking input
          $("#checking > .input").val("")

          if(actualDepositTotal > 0){
            $(".balance").removeClass("zero")
          } else {
            console.log("it works")
          }


      }


//define CHECKING WITHDRAW  button

      //prevent submissions from reloading
      $("#checking > .withdraw").on("click", makeCheckingWithdraw);

      function makeCheckingWithdraw(evt){
      evt.preventDefault()

          //checking account variables
          var checkEntry = $("#checking > .input").val()
            console.log(checkEntry);
          var floatCheckEntry = parseFloat(checkEntry);
            console.log("FloatChcekEntry: " + floatCheckEntry);
          var balance = $("#checking > .balance").html();
            console.log(balance)
          var numericTotal = parseFloat(balance.split('$')[1]);
            console.log(numericTotal)
          var actualWithdrawTotal = numericTotal - parseFloat(floatCheckEntry);

          //won't take out more money then what you have
          if (actualWithdrawTotal < 0) {
            //don't update the total if negative balance
            console.log("nope");
          } else {
            $("#checking > .balance").html("$"+ actualWithdrawTotal.toFixed(2));
          }

          //clearfield checking input
          $("#checking > .input").val("")
        }


//define SAVINGS DEPOSIT button*********************************************

      //savings button
      $("#savings > .deposit").on("click", makeSavingsDeposit)

      function makeSavingsDeposit (evt){
      evt.preventDefault()

          //savings account variables
          var savingsEntry = $("#savings > .input").val()
            console.log(savingsEntry);
          var floatSavingsEntry = parseFloat(savingsEntry);
            console.log("floatSavingsEntry : " + floatSavingsEntry);
          var savingsBalance = $("#savings > .balance").html();
            console.log(savingsBalance)
          var numericSavingsTotal = parseFloat(savingsBalance.split('$')[1]);
            console.log(numericSavingsTotal)
          var actualSavingsDepositTotal = parseFloat(floatSavingsEntry) + numericSavingsTotal;

          $("#savings > .balance").html("$"+ actualSavingsDepositTotal.toFixed(2));

          //clearfield savings input
          $("#savings > .input").val("")

          if (actualSavingsDepositTotal > 0){
            $("#savings > .balance").removeClass("zero");

          } else {
            console.log('it works');
          }

      }


//define SAVINGS WITHDRAW  button

  //withdraw button
  $("#savings > .withdraw").on("click", makeSavingsWithdraw)

      function makeSavingsWithdraw (evt){
      evt.preventDefault()

          //savings account variables
          var savingsEntry = $("#savings > .input").val()
            console.log(savingsEntry);
          var floatSavingsEntry = parseFloat(savingsEntry);
            console.log("FloatSavingsEntry : " + floatSavingsEntry);
          var savingsBalance = $("#savings > .balance").html();
            console.log(savingsBalance)
          var numericSavingsTotal = parseFloat(savingsBalance.split('$')[1]);
            console.log(numericSavingsTotal)
          var actualSavingsWithdrawTotal = numericSavingsTotal - parseFloat(floatSavingsEntry);

          if(actualSavingsWithdrawTotal < 0){
            console.log("nuh uh")
          } else {
            $("#savings > .balance").html("$"+ actualSavingsWithdrawTotal.toFixed(2));

        }

        //clearfield checking input
        $("#savings > .input").val("")
      }


})
