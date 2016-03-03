//
// function checkingWithdrawal(){
//
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }
//
// // an eventListerner for each button, each one a "click"
//
//
// /* ATM PSEUDOCODE//
// var checkingDeposit = function(amount){ document.querySelector("div#checking_balance");
// }
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// //starting balances//
// var checkingBalance = 0;
// var savingsBalance = 0;
//
// value entered into the checking input
// var amount = parseInt($(#checking_amount).value)
// entered into either id #account1 or #account 2
//
//     CheckingBalanceDiv = #account1
//     savingsAccountDiv = #account2
//
//     if amount entered into account1
//       checkingAcountDiv-user inputs num in input of #checking_amount placeholder
//       enter in a $ amount to the input <div> of
//         user .on("click", function) "button" with value "deposit" or "withdraw"
//         button value deposit has id #checking_deposit
//         button value withdraw has id #checking_withdraw
//           find checkingTotal-
//             if #checking_deposit button clicked, function
//               checkingTotal = checkingBalance.value + checking_amount.value
//             else if #checking_withdraw button clicked, function
//               checkingTotal = checkingBalance.value - checking_withdraw.value
//     else if amount entered into account2
//       savingsAccountDiv- input num in input of #savings_amount placeholder
//       enter in a $ amount to the input <div> in #account2
//         user .on("click", function) "button" with value "deposit" or "withdraw"
//         button value deposit has id #savings_deposit
//         button value withdraw has id #savings_withdraw
//           find savingsTotal-
//             if #savings_deposit button clicked, function
//               var savingsTotal = savingsBalance.value + savings_amount.value
//             else if #savings_withdraw button clicked, function
//               var savingsTotal = savingsBalance.value - savings_withdraw.value
//
//   setLimits of totals
//   get totals with
//   document.getElementbyID('checking_balance')
//   document.getElementbyID('savings_balance')
//   if balances are < 0, class(.balance) = "fail"
//
//   changeBackgroundcolor
//     if (checkingTotal  <= 0) {
//       account1.css("background-color", "pink")
//     else if (checkingTotal > 0) {
//       account1.css("background-color", "grey")
//     } if (savingsTotal  <= 0) {
//       account2.css("background-color", "pink")
//     else if (savingsTotal > 0) {
//       account2.css("background-color", "grey")
//     }

$(document).ready(function(){
  //make deposit button work
  $("#checking .deposit").click(function(){

//get value inside the input//
    var userInput = parseInt($("#checking .input").val());
    //right now these numbers are strings, we need them to be numbers
    var balance = $("#checking .balance").text();
    //replace dollar signs of balance with nothing so it will become a number//
    balance = parseInt(balance.replace("$", ""));
    var newBalance = userInput + balance;
    $("#checking .balance").text("$" + newBalance);

  });
});



// alternative:
$(document).ready(function(){
    var checking = new Account($("#checking"));
    var savings = new Account($("#savings"));
  });

  function Account(element) { //element referring to element $("#checking")
    var account = this
    account.element = element;
    account.balance = 0; //actual balance of the accounts
    account.elements = {
    //account.element called for both $("#checking") and $("#savings") as above
      deposit: account.element.find(".deposit"),
      withdraw: account.element.find(".withdraw"),
      balance: account.element.find(".balance"),
      input: account.element.find(".input")
    }

//add event listeners//
  account.elements.deposit.click(function(){
    var input =
    parseInt(account.elements.input.val());
    account.balance += input; //changing the account's balance property//
    account.elements.balance.html("$" + account.balance);
    //above gets value of input on click//

  });
  //event listener for withdraw same as above with different word and decrement
  account.elements.withdraw.click(function(){
    //above gets value of input on click//
    var input = parseInt(account.elements.input.val());
    var newBalance = account.balance - input;
    account.balance -= input; //changing the account's balance property//
    if (newBalance > 0) {
    account.balance = newBalance
    account.elements.balance.html("$" + account.balance);
  } else {
  }
  });
}
