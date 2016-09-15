$(document).ready(function(){
  //Add a click listener to the checking account's "Deposit" button
  $(".deposit").on("click", function() {
    console.log("hello");
  })
  //On clicking "Deposit", it should get the user input
  $(".withdraw").on("click", function() {
    var input = $(':input').val();
    console.log(input);
  })



});
