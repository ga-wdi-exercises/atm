var depositC = $("#checking")
var withdrawC = $("#checking")
var depositS = $("#savings")
var withdrawS = $("#savings")
//var balance = 0
var total = 0
var checking = $(".account")
var savings = $(".account")
var amount = parseInt($(".input").val())

var depositbuttonC = $("#checking").children("input.deposit")
var withdrawbuttonC = $("#checking").children("input.withdraw")
var depositbuttonS = $("#savings").children("input.deposit")
var withdrawbuttonS = $("#savings").children("input.withdraw")
var checkingBalance = parseInt($("#checking .balance").val());
var savingsBalance = parseInt($("#savings" .balance). val());

//var checkIn = $("checking").children("input.input")
//var saveIn  = $("savings").children("input.input")

/*function amountEntered() {
  var checkIn = parseInt($(".input").val())
}*/
console.log(depositbuttonC)
depositbuttonC.on("click", function () {
  var userInput = parseInt($("#checking .input").val())
  console.log(userInput)
  totalInAccount()
});

function totalInAccount() {
  var userInput = parseInt($("#checking .input").val())
  var checkingBalance = parseInt(userInput)
  console.log(checkingBalance)
  if (userInput > 0) {
   $("#checking .balance").text("$" + checkingBalance)
  }
  else  { alert("No withdrawal can be made")
}
}

console.log(depositbuttonS)
depositbuttonS.on("click", function () {
  var userInput = parseInt($("#savings .input").val())
  console.log(userInput)
  totalInAccountS()
});

function totalInAccountS() {
  var userInput = parseInt($("#savings .input").val())
  var savingsBalance = parseInt(userInput)
  console.log(savingsBalance)
  if (userInput > 0) {
   $("#savings .balance").text("$" + savingsBalance)
  }
  else  { alert("No withdrawal can be made")
}
}
//$("#checking .balance").val());
//checkIn.click(parseInt($(".input").val()))
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
