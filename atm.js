/*
select user input
convert input to float with 2 decimal places
if (withdraw button pressed){
  subtract input from current balance
}
if (deposit button pressed){
  add input to current balance
}
if (balance < 0){
  do not update balance on dom
  reset balance to previous value
  display error message within input field
}
else if (balance == 0){
  use css to change box background to red
}
else{
  update account balance on DOM
  bank color should be green
}
clear specific input field
*/
$(document).ready(function(){
  // $("body").css("background", "red");

  $("#checking .deposit").on("click", function(evt){
    evt.preventDefault();
    var amount = $("#checking .input").val();
    console.log(amount)

  })

// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
