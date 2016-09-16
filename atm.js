var checkAdd = $("#checking").children("input.deposit")
var checkMin = $("#checking").children("input.withdraw")
var checkIn = $("#checking").children("input.input")
var saveAdd = $("#savings").children("input.deposit")
var saveMin = $("#savings").children("input.withdraw")
var saveIn = $("#savings").children("input.input")

var checkBal = $("#checking").children(".balance")
var saveBal = $("#savings").children(".balance")

var actCheckBal = 0
var actSaveBal = 0

function red () {
  if (actCheckBal == 0) {
    $("#checking").addClass("zero")
  } else {
    $("#checking").removeClass("zero")
  };
  if (actSaveBal == 0) {
    $("#savings").addClass("zero")
  } else {
    $("#savings").removeClass("zero")
  };
}
red()

checkAdd.on("click", deposit)
checkMin.on("click", withdraw)



function deposit(e) {
  var checkValD = checkIn.val()
  var balance = parseInt(checkValD)
  actCheckBal = actCheckBal + balance
  checkBal.text("$" + actCheckBal)
  red()
  e.preventDefault()
}
function withdraw(e) {
  var checkValW = checkIn.val()
  var balance = parseInt(checkValW)
  if (balance > actCheckBal) {
    alert("Transaction not possible.")
  } else {
  actCheckBal = actCheckBal - balance
  checkBal.text("$" + actCheckBal)
  }
  red()
  e.preventDefault()
}

saveAdd.on("click", depositSave)
saveMin.on("click", withdrawSave)

function depositSave(e) {
  var saveValD = saveIn.val()
  var balance = parseInt(saveValD)
  actSaveBal = actSaveBal + balance
  saveBal.text("$" + actSaveBal)
  red()
  e.preventDefault()
}
function withdrawSave(e) {
  var saveValW = saveIn.val()
  var balance = parseInt(saveValW)
  if (balance > actSaveBal) {
    alert("Transaction not possible.")
  } else {
  actSaveBal = actSaveBal - balance
  saveBal.text("$" + actSaveBal)
  }
  red()
  e.preventDefault()
}
