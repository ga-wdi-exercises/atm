var addCheck = $("#checking").children("input.deposit")
var balanceText = $("#checking .balance")
var input = $("#checking .input")
var subtractCheck =$("#checking").children("input.withdraw")

var addSavings =$("#savings").children("input.deposit")
var balanceTextSavings = $("#savings .balance")
var inputSavings = $("#savings .input")
var subtractSavings = $("#savings").children("input.withdraw")


addCheck.on("click", deposit)
var newBalance = 0
function deposit(){
var checkInput = input.val()
var balance = parseInt(checkInput);
 newBalance = balance + newBalance
balanceText.text("$" + newBalance);

}

subtractCheck.on("click", withdraw)
function withdraw(){
  var checkInput = input.val()
  var balanceSavings = parseInt(checkInput)
  newBalance = newBalance - balanceSavings;
  balanceText.text("$" + newBalance);

   if (newBalance < 0){
   var checkInputSavings = inputSavings.val();
   var balanceSavings = parseInt(checkInputSavings)
   var overdrawNewBalance = newBalance  + balanceSavings
   balanceTextSavings.text("$" + overdrawNewBalance)

 }
}
addSavings.on("click", depositSavings)
var newBalanceSavings = 0
function depositSavings(){
var checkInputSavings = inputSavings.val()
var balance = parseInt(checkInputSavings);
 newBalanceSavings = balance + newBalanceSavings
balanceTextSavings.text("$" + newBalanceSavings)
}

subtractSavings.on("click", withdrawSavings)

function withdrawSavings(){
 var checkInputSavings = inputSavings.val();
 var balanceSavings = parseInt(checkInputSavings)
 newBalanceSavings = newBalanceSavings - balanceSavings;
 balanceTextSavings.text("$" + newBalanceSavings)
}


// if (newbalance < 0){ function withdrawSavings(){
//  var checkInputSavings = inputSavings.val();
//  var balanceSavings = parseInt(checkInputSavings)
//  newBalance= newBalanceSavings - balanceSavings + newBalance;
//  balanceTextSavings.text("$" + newBalance)
// }

//
//

function checkZero(){
$("#checking").toggleClass("zero",function("#checking", "account")
  }






// balance.replace("$", " ")
// parseInt(balance.replace("$", " "))
//
// ---
// var balance = 0
// var input = 25
// $("#checking .balance").text("$" + (input+balance))
