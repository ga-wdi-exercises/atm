
var checkingBalance = $("#checking").children().eq(1).text()
var checkingDeposit =$("#checking").children().eq(3)
var checkingWithdraw =$("#checking").children().eq(4)


function deposit(event) {
  event.preventDefault()
  var checkingInput =$("#checking").children().eq(2).val()
  // console.log(checkingInput)
  // console.log(checkingBalance)
  checkingBalance= (parseFloat(checkingBalance)+parseFloat(checkingInput))
  // console.log(checkingBalance)
  $("#checking").children().eq(1).text(parseFloat(checkingBalance))
  $("#checking").children().eq(2).val('')
}
checkingDeposit.click(deposit)

function withdraw(event) {
  event.preventDefault()
  var checkingInput =$("#checking").children().eq(2).val()
  if ((parseFloat(checkingBalance)-parseFloat(checkingInput) >= 0)){
    checkingBalance= (parseFloat(checkingBalance)-parseFloat(checkingInput))
    $("#checking").children().eq(1).text(parseFloat(checkingBalance))
    $("#checking").children().eq(2).val('')
  };
}
checkingWithdraw.click(withdraw)

//Savings
var savingsBalance = $("#savings").children().eq(1).text()
var savingsDeposit =$("#savings").children().eq(3)
var savingsWithdraw =$("#savings").children().eq(4)


function depositSavings(event) {
  event.preventDefault()
  var savingsInput =$("#savings").children().eq(2).val()
  // console.log(savingsInput)
  // console.log(savingsBalance)
  savingsBalance= (parseFloat(savingsBalance)+parseFloat(savingsInput))
  // console.log(savingsBalance)
  $("#savings").children().eq(1).text(parseFloat(savingsBalance))
  $("#savings").children().eq(2).val('')
}
savingsDeposit.click(depositSavings)

function withdrawSavings(event) {
  event.preventDefault()
  var savingsInput =$("#savings").children().eq(2).val()
  if ((parseFloat(savingsBalance)-parseFloat(savingsInput) >= 0)){
    savingsBalance= (parseFloat(savingsBalance)-parseFloat(savingsInput))
    $("#savings").children().eq(1).text(parseFloat(savingsBalance))
    $("#savings").children().eq(2).val('')
  };
}
savingsWithdraw.click(withdrawSavings)
