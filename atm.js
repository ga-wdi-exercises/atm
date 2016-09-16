var depositC = $("#checking")
var withdrawC = $("#checking")
var depositS = $("#savings")
var withdrawS = $("#savings")
var balance = 0
var total = 0
var checking = $(".account")
var savings = $(".account")
var amount = parseInt($(".input").val())

var depositbuttonC = $("#checking").children("input.deposit")
var withdrawbuttonC = $("#checking").children("input.withdraw")
var depositbuttonC = $("#savings").children("input.deposit")
var withdrawbuttonS = $("#savings").children("input.withdraw")
var balance = parseInt($(".balance").val());

var checkIn = $("checking").children("input.input")
var saveIn  = $("savings").children("input.input")

checkIn.click(parseInt($(".input").val()))
/*function amountEntered() {
  var checkIn = parseInt($(".input").val())
}

depositbuttonC.click("totalInAccount", amountEntered);*/
function totalInAccount() {
  if (checkIn > 0) {
    return $("#checking .balance").text("$" + (checkIn + balance))
  }
  else  { alert("No withdrawal can be made")
}
}
//amountEntered()
//totalInAccount()
/*function totalInAccount () {
  return $("#checking .balance").text("$" + (amountEntered + balance))
}*/

//balance.replace('$', '')
//$("#checking .balance").text("$" + (input + balance))
// when i click on deposit
  // calculate how much
    // get value of balance html
    // convert that to a number
    // get value of input
    // add them together
    // update balance html to total
