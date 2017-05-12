$(document).ready(function(){

//user types in dollar amount and clicks Deposit or Withdraw
//if Deposit is clicked amount typed in is added to account

$("#checking .deposit").on("click", function(){
var deposit = parseInt($("#checking .input").val())
var checkingBalance = parseInt($("#checking .balance").html().replace("$", ""))
$("#checking .balance").html("$" + (deposit + checkingBalance))
if (checkingBalance > 0) {
  $("#checking .account").removeClass("zero")
}
})

//if Withdraw is clicked balance of account is checked for sufficient funds
//if sufficient funds allow withdraw
//if amount typed in is not available in account give user an error message

$("#checking .withdraw").on("click", function(){
  var withdraw = parseInt($("#checking .input").val())
  var checkingBalance = parseInt($("#checking .balance").html().replace("$", ""))

  if ((checkingBalance - withdraw) >= 0) {
    $("#checking .balance").html("$" + (checkingBalance - withdraw))
  } else {
    alert("insufficient funds")
  }
  if (checkingBalance - withdraw <= 0) {
    $("#checking .account").addClass("zero");
  } else {
    $("#checking .account").removeClass("zero")
  }
})

$("#savings .deposit").on("click", function(){
  var deposit = parseInt($("#savings .input").val())
  var savingsBalance = parseInt($("#savings .balance").html().replace("$", ""))
  $("#savings .balance").html("$" + (deposit + savingsBalance))
  if (savingsBalance > 0) {
    $("#savings .account").removeClass("zero")
  }
  if (savingsBalance > 0) {
    $("#savings .account").removeClass("zero")
  }

})

$("#savings .withdraw").on("click", function(){
  var withdraw = parseInt($("#savings .input").val())
  var savingsBalance = parseInt($("#savings .balance").html().replace("$", ""))

  if ((savingsBalance - withdraw) >= 0) {
    $("#savings .balance").html("$" + (savingsBalance - withdraw))
    // console.log(typeof newCurrentBalance)
  } else {
    alert("insufficient funds")
  }
  if (savingsBalance - withdraw <= 0) {
    $("#savings .account").addClass("zero");
  } else {
    $("#savings .account").removeClass("zero")
  }
})
//if account balance is zero turn .zero red
// function inTheRed() {
//   var redNumber = $(".balance").text()
//   if (redNumber == "$0") {
//     $(".account").addClass("zero")
// }
// }

});
