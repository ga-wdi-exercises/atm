var addCheck = $("#checking").children("input.deposit")
var balanceText = $("#checking .balance")
var input = $("#checking .input")
var subtractCheck =$("#checking").children("input.withdraw")



addCheck.on("click", deposit)
var newBalance = 0
function deposit(){
var checkInput = input.val()
var balance = parseInt(checkInput);
 newBalance = balance + newBalance
balanceText.text(newBalance)
}

subtractCheck.on("click", withdraw)
function withdraw(){
  var checkInput = input.val()
  var balance = parseInt(checkInput)
  newBalance = newBalance - balance;
  balanceText.text(newBalance)
}
















// balance.replace("$", " ")
// parseInt(balance.replace("$", " "))
//
// ---
// var balance = 0
// var input = 25
// $("#checking .balance").text("$" + (input+balance))
