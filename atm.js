var checkAdd = $("#checking").children("input.deposit")
var checkMin = $("#checking").children("input.withdraw")
var checkIn = $("#checking").children("input.input")
var saveAdd = $("#savings").children("input.deposit")
var saveMin = $("#savings").children("input.withdraw")
var saveIn = $("#savings").children("input.input")

var checkBal = $("#checking").children(".balance")
var saveBal = $("#savings").children(".balance")

var actCheckBal = 0
checkAdd.on("click", deposit)
checkMin.on("click", withdraw)

function deposit(e) {
  var checkValD = checkIn.val()
  var balance = parseInt(checkValD)
  actCheckBal = actCheckBal + balance
  checkBal.text("$" + actCheckBal)
  e.preventDefault()
}
function withdraw(e) {
  var checkValW = checkIn.val()
  var balance = parseInt(checkValW)
  actCheckBal = actCheckBal - balance
  checkBal.text("$" + actCheckBal)
  e.preventDefault()
}
var actSaveBal = 0
saveAdd.on("click", depositSave)
saveMin.on("click", withdrawSave)

function depositSave(e) {
  var saveValD = saveIn.val()
  var balance = parseInt(saveValD)
  actSaveBal = actSaveBal + balance
  saveBal.text("$" + actSaveBal)
  e.preventDefault()
}
function withdrawSave(e) {
  var saveValW = saveIn.val()
  var balance = parseInt(saveValW)
  actSaveBal = actSaveBal - balance
  saveBal.text("$" + actSaveBal)
  e.preventDefault()
}
