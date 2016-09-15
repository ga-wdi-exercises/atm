// $(document).ready(function(){
var balance = 0;


  //Add a click listener to the checking account's "Deposit" button
  $(".deposit").on("click", function() {
    console.log("hello");
  })
  //On clicking "Deposit", it should get the user input
  $(".withdraw").on("click", function() {
    var input = $(':input').val();
    console.log(input);
  })

  //On clicking "Deposit", it should update the "balance" with the user input
  $(".deposit").on("click", function() {
      balance = balance + eval($('input.input').val());
      console.log(balance);
      $("#checking .balance").text(balance);
  })
  //On "Withdraw", it updates the balance
  $(".withdraw").on("click", function() {
    balance = balance - eval($('input.input').val());
    console.log(balance);
    $("#checking .balance").text(balance);
  })
// });
