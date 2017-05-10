$(document).ready(function(){
  $("body").css("background-color", "red");


//user types in dollar amount and clicks Deposit or Withdraw
//if Deposit is clicked amount typed in is added to account

$(".deposit").on("click", function(){
  // event.preventDefault()

  var value = $(".input").val()
  var noDollarInput = parseInt(value)
console.log(noDollarInput)

  var currentBalance = $(".balance").val()
  var noDollarCurrent = parseInt(currentBalance)
console.log(currentBalance)

  var newBalance = noDollarCurrent + noDollarInput

console.log(newBalance)
  // console.log(typeof value)
})


//if Withdraw is clicked balance of account is checked for sufficient funds
//if sufficient funds allow withdraw
//if amount typed in is not available in account give user an error message


//if account balance is zero turn .zero red

});
