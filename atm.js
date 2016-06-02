$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  // $("body").css("background-color", "red");

//   Add a click listener to the checking account's "Deposit" button
// When you click the button it should console.log("hello")
$("#checking .deposit").on("click", function(){
    var amtMoney = $("input").val();
    console.log("Amount Entered is: " + amtMoney);
});
});
