$(document).ready(function(){});

var depositChecking = $("#depositChecking")
var withdrawChecking = $("#withdrawChecking")
var depositSavings = $("#depositSavings")
var withdrawSavings = $("#withdrawSavings")

function sayHello() {
  console.log("hello");
}
function sayGoodbye() {
  console.log("goodbye")
}
function sayHowdy() {
  console.log("howdy")
}
function sayLater() {
  console.log("later")
}
depositChecking.on("click", sayHello)
withdrawChecking.on("click", sayGoodbye)
depositSavings.on("click", sayHowdy)
withdrawSavings.on("click", sayLater)

$("#depositChecking").on("click", function(){
  var deposit = parseInt($("#inputChecking").val())
  var balance = parseInt($("#balanceChecking").text().replace("$",""))
  var newBalance = "$" + (balance + deposit)
  $("#balanceChecking").text(newBalance)
})

$("#withdrawChecking").on("click", function(){
  var withdraw = parseInt($("#inputChecking").val())
  var balance = parseInt($("balanceChecking").text().replace("$",""))
    if ((balance - withdraw) >= 0){
      var newBalance = "$" + (balance + -withdraw);
    }
      $("#balanceChecking").text(newBalance)
})

$("#depositSavings").on("click", function(){
  var deposit = parseInt($("#inputSavings").val())
  var balance = parseInt($("#balanceSavings").text().replace("$",""))
  var newBalance = "$" + (balance + deposit)
  $("#balanceSavings").text(newBalance)
})

$("#withdrawSavings").on("click", function(){
  var withdraw = parseInt($("#inputSavings").val())
  var balance = parseInt($("balanceSavings").text().replace("$",""))
    if ((balance - withdraw) >= 0){
      var newBalance = "$" + (balance + -withdraw);
    }
      $("#balanceSavings").text(newBalance)
})






//blah
