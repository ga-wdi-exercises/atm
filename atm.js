var checkAdd = $("#checking").children("input.deposit")
var checkMin = $("#checking").children("input.withdraw")
var saveAdd = $("#savings").children("input.deposit")
var saveMin = $("#savings").children("input.withdraw")
var checkBal = $("#checking").children(".balance")
var saveBal = $("#savings").children(".balance")
var checkIn = $("#checking").children("input.input")
var saveIn = $("#savings").children("input.input")

var actCheckBal = 0
checkAdd.on("click", checkDeposit)

function checkDeposit(e){
  var checkVal = checkIn.val()
  var balance = parseInt(checkVal)
  e.preventDefault()
  actCheckBal = balance + actCheckBal
  checkBal.text("$" + actCheckBal)
  if (actCheckBal > 0)
    checkBal.css("background", "#E3E3E3")
}

checkMin.on("click", checkWithdraw)

  function checkWithdraw(e){
    var checkVal = checkIn.val()
    var balance = parseInt(checkVal)
    e.preventDefault()
    actCheckBal = actCheckBal - balance
    checkBal.text("$" + actCheckBal)
      if (actCheckBal < 0)
        checkBal.css("background", "red")

  }
var actSaveBal = 0
saveAdd.on("click", saveDeposit)

function saveDeposit(e){
  var saveVal = saveIn.val()
  var balance = parseInt(saveVal)
  e.preventDefault()
  actSaveBal = balance + actSaveBal
  saveBal.text("$" + actSaveBal)
    if (actSaveBal > 0)
      saveBal.css("background", "#E3E3E3")
}

saveMin.on("click", saveWithdraw)

function saveWithdraw(e){
  var saveVal = saveIn.val()
  var balance = parseInt(saveVal)
  e.preventDefault()
  actSaveBal = actSaveBal - balance
  saveBal.text("$" + actSaveBal)
  if (actSaveBal < 0)
    saveBal.css("background", "red")
}
