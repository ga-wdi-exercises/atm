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

checkAdd.on("click", transact)
checkMin.on("click", transact)
function transact(event){
  event.preventDefault()
  var balance = parseInt(checkIn.val())
  if (isNaN(balance)) {
    return alert("Please enter only numbers.")
  }
  if($(this).val() == "Withdraw"){
    if (balance > actCheckBal) {
      return checkOverdraft()
    }
    balance = balance*-1
  }
  checkBal.text("$" + (actCheckBal += balance))
  red()
}

saveAdd.on("click", transactSave)
saveMin.on("click", transactSave)
function transactSave(event){
  event.preventDefault()
  var balance = parseInt(saveIn.val())
  if (isNaN(balance)) {
    return alert("Please enter only numbers.")
  }
  if($(this).val() == "Withdraw"){
    if (balance > actSaveBal) {
      return checkOverdraft()
    }
    balance = balance*-1
  }
  saveBal.text("$" + (actSaveBal += balance))
  red()
}

checkTranB.on("click", Transfer)
saveTranB.on("click", Transfer)

function Transfer(event) {
  event.preventDefault()

  // if(actCheckBal >= balance) {
  if($(this).parent().attr("id") == "savings"){
    var balance = parseInt(saveTran.val())

    if (isNaN(balance)) {
      return alert("Please enter only numbers.")}
    actCheckBal = actCheckBal + balance
    actSaveBal = actSaveBal - balance
  }
  else{
    var balance = parseInt(checkTran.val())

    if (isNaN(balance)) {
      return alert("Please enter only numbers.")}
    actSaveBal = actSaveBal + balance
    actCheckBal = actCheckBal - balance
  }
    saveBal.text("$" + actSaveBal)
    checkBal.text("$" + actCheckBal)
  // } else {
  //   alert("Transaction not possible.")
  // }
    red()
}

function checkOverdraft() {
  var balance = parseInt(checkIn.val())
  if ((actCheckBal + actSaveBal) >= balance) {
    var remainder = actCheckBal - balance
    actCheckBal = 0
    actSaveBal = actSaveBal + remainder
    saveBal.text("$" + actSaveBal)
    checkBal.text("$" + actCheckBal)
  } else {
      alert("Transaction not possible.")
  }
}
function saveOverdraft() {
  var balance = parseInt(saveIn.val())
  if ((actCheckBal + actSaveBal) >= balance) {
    var remainder = actSaveBal - balance
    actSaveBal = 0
    actCheckBal = actCheckBal + remainder
    saveBal.text("$" + actSaveBal)
    checkBal.text("$" + actCheckBal)
  } else {
      alert("Transaction not possible.")
  }
}
