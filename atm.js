$(document).ready(function(){
  //Turn background red
  $('body').css("background", "red");
  //Add a click listener to the **checking account's** "Deposit" button
  console.log("hola");
  //User input a dollar amount to deposit money to checking
  var deposit = $('.deposit');
  $(deposit).on("click", function(evt) {
    //Prevent default of submit button from refreshing page
    evt.preventDefault();

    console.log("Deposit button pressed");

  });
  //Make sure input field is clear
    //update amount
    //use 2 decimals (parseFloat())
  //input a dollar amound to withdraw money for checking
    //update amount
  //if User withdraw amount > account balance
    //reject transaction
  //color of bank account green for positive value
    //red for 0 (or less for bonus)

  //User input a dollar amount to deposit money to savings
  //Make sure input field is clear
  //update amount
  //use 2 decimals (parseFloat())
  //input a dollar amound to withdraw money to savings
  //update amount
  //if User withdraw amount > account balance
  //reject transaction
  //color of bank account green for positive value
  //red for 0 (or less for bonus)
});
