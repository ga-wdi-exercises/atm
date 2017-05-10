$(document).ready(function(){
  $("body").css("background-color", "red");


//user types in dollar amount and clicks Deposit or Withdraw
//if Deposit is clicked amount typed in is added to account

$(".deposit").on("click", function(){
  var inputValue = $("#checking .input").val()
  var newInputValue = inputValue.replace("$", "")
  var iValue = parseInt(newInputValue)
  // console.log(iValue)

  var currentBalance = $(".balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  var newCurrentBalance = parseInt(noDollarCurrent)
  // console.log(newCurrentBalance)

  $(".balance").html("$" + (+iValue + +newCurrentBalance))
  // console.log(typeof newCurrentBalance)
})

//if Withdraw is clicked balance of account is checked for sufficient funds
//if sufficient funds allow withdraw
//if amount typed in is not available in account give user an error message

$(".withdraw").on("click", function(){
  console.log("step two")
  var withdrawValue = $("#checking .input").val()
  var newWithdrawValue = withdrawValue.replace("$", "")
  var wValue = parseInt(newWithdrawValue)
  console.log(wValue)

  var currentBalance = $(".balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  var newCurrentBalance = parseInt(noDollarCurrent)
  console.log(newCurrentBalance)

  if ((newCurrentBalance - wValue) >= 0) {
    $(".balance").html("$" + (newCurrentBalance - wValue))
    // console.log(typeof newCurrentBalance)
  } else {
    alert("insufficient funds")
  }
})


//if account balance is zero turn .zero red

});
