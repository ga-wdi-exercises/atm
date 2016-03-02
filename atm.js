// var checkingBalance = 0;
// var savingsBalance = 0;
// //
// // var checkingBalance = document.querySelector("div#checking_balance");
// // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// //
// //
// // //talking about a deposit
// // var checkingDeposit = function(amount){
// //   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// //input value//
// var inputValue = function
//
// function checkingWithdrawal(){
//   c
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

//ATM PSEUDOCODE//
// load page with the input places and buttons with $0 balance in both accounts
  //function of preventDefault with event so that the page doesn't reload

  //two divs created with accounts as classes created as classes
    //varCheckingAccountDiv = #account1
      //checkingBalance is zero
    //var savingsAccountDiv = #account2
      //savingsBalance is zero

  //function "inputAmount();" user enter amount into either checking #account1 or savings #account2 <div>
    //if amount entered into account1
      //checkingAcountDiv-user inputs num in input of #checking_amount placeholder
      //enter in a $ amount to the input <div> of
        //user .on("click", function) "button" with value "deposit" or "withdraw"
        //button value deposit has id #checking_deposit
        //button value withdraw has id #checking_withdraw
          //find checkingTotal-
            //if #checking_deposit button clicked, function
              //checkingTotal = checkingBalance.value + checking_amount.value
            //else if #checking_withdraw button clicked, function
              //checkingTotal = checkingBalance.value - checking_withdraw.value
    //else if amount entered into account2
      //savingsAccountDiv- input num in input of #savings_amount placeholder
      //enter in a $ amount to the input <div> in #account2
        //user .on("click", function) "button" with value "deposit" or "withdraw"
        //button value deposit has id #savings_deposit
        //button value withdraw has id #savings_withdraw
          //find savingsTotal-
            //if #savings_deposit button clicked, function
              //var savingsTotal = savingsBalance.value + savings_amount.value
            //else if #savings_withdraw button clicked, function
              //var savingsTotal = savingsBalance.value - savings_withdraw.value

              

  //changeBackgroundcolor
    //if (checkingTotal  <= 0) {
      //account1.css("background-color", "pink")
    //else if (checkingTotal > 0) {
      //account1.css("background-color", "grey")
    //} if (savingsTotal  <= 0) {
      //account2.css("background-color", "pink")
    //else if (savingsTotal > 0) {
      //account2.css("background-color", "grey")
    // }
