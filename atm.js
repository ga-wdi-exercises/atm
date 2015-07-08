$(document).ready(function() {  ///DON'T DELETE

// As a user, I want to deposit money into one of the bank accounts
  //user inputs new number amount (a variable) checkingAmount
  //user clicks deposit button
    //new number amount + old number amount (default = 0)
    //total should replace $0
    //input field should go back to default

var cBal = 0;

$("#cDepositButton").on("click", function() {
  var cAmt = parseInt($("#cplaceholder").val());
  alert("$" + (cAmt + cBal)) //returning $NaN0 .. cAmt is NaN?
})

// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// var cBal = parseInt($("#checkingBalance").text().replace("$", ""));



}) ///CLOSING TAG DON'T DELETE



//Notes to self


//omg i got the button to work. FIRST: created an ID in the HTML for the deposit button so that I could identify it.  once that was done i made the event listener (with alert) with an anonymous function.  then i entered checkingBalance in the function. unsure if i need to do this.
// $("#cDepositButton").on("click", function(checkingBalance) {
//   alert("button worked!")
// })

//had the hardest time with the variables..they were ahead of the function, but kept being returned not defined in the DOM or NaN in my popup... was advised that as the page loads, it determines the outcome of the function (clicking the deposit button in this case) before the user actually enters a number, which was why it was returning NaN. put the var cAmt variable within the function so it would process the variable at the same time. Voila.
