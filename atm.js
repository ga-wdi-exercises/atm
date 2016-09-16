var checkAdd = $("#checking").children("input.deposit")
var checkMin = $("#checking").children("input.withdraw")
var checkIn = $("#checking").children("input.input")
var saveAdd = $("#savings").children("input.deposit")
var saveMin = $("#savings").children("input.withdraw")
var saveIn = $("#savings").children("input.input")

var checkBal = $("#checking").children(".balance")
var saveBal = $("#savings").children(".balance")

var checkTran = $("#checking").children("input.transferIn")
var checkTranB = $("#checking").children("input.transfer")
var saveTran = $("#savings").children("input.transferIn")
var saveTranB = $("#savings").children("input.transfer")

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
    checkOverdraft()
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

checkTranB.on("click", checkTransfer)
saveTranB.on("click", saveTransfer)

function checkTransfer(e) {
  var tranVal = checkTran.val()
  var balance = parseInt(tranVal)
  if(actCheckBal >= balance) {
  actSaveBal = actSaveBal + balance
  actCheckBal = actCheckBal - balance
  saveBal.text("$" + actSaveBal)
  checkBal.text("$" + actCheckBal)
} else {
  alert("Transaction not possible.")
}
  red()
  e.preventDefault()
}
function saveTransfer(e) {
  var tranVal = saveTran.val()
  var balance = parseInt(tranVal)
  if(actSaveBal >= balance) {
  actCheckBal = actCheckBal + balance
  actSaveBal = actSaveBal - balance
  saveBal.text("$" + actSaveBal)
  checkBal.text("$" + actCheckBal)
} else {
  alert("Transaction not possible.")
}
  red()
  e.preventDefault()
}

function checkOverdraft() {
  var checkValW = checkIn.val()
  var balance = parseInt(checkValW)
  if ((actCheckBal + actSaveBal) >= balance) {
    alert("overdraft protocol")
    var remainder = actCheckBal - balance
    actCheckBal = 0
    actSaveBal = actSaveBal + remainder
    saveBal.text("$" + actSaveBal)
    checkBal.text("$" + actCheckBal)
  } else {
      alert("Transaction not possible.")
  }
}
