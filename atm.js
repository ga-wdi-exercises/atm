$(document).ready(function(){
  $("body").css("background-color", "red");


//user types in dollar amount and clicks Deposit or Withdraw
//if Deposit is clicked amount typed in is added to account

$(".deposit").on("click", function(){
  console.log("hello")
  var inputValue = $(".input").val()
  var newInputValue = inputValue.replace("$", "")
  console.log(newInputValue)

  var currentBalance = $(".balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  var newCurrentBalance = parseInt(noDollarCurrent)
  console.log(newCurrentBalance)

  $(".balance").html("$" + (+newInputValue + +newCurrentBalance))
  console.log(typeof newCurrentBalance)
})

//if Withdraw is clicked balance of account is checked for sufficient funds
//if sufficient funds allow withdraw
//if amount typed in is not available in account give user an error message

$(".withdraw").on("click", function(){
  console.log("step two")
  var withdrawValue = $(".input").val()
  var wValue = withdrawValue.replace("$", "")
})


//if account balance is zero turn .zero red

});
