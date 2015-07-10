$(document).ready(function(){

//Checking Deposit
  $(".cdepositButton").on("click",function(){
    console.log("i clicked the deposit button")
    var deposit = parseInt($(".input").val())
    //console.log(deposit)
   var balance=$(".cBalance").text()
   //console.log(balance)
   balance= parseInt(balance.replace("$", ""))
  var newBalance= deposit + balance
 //console.log(balance)
 $(".cBalance").text("$" + newBalance)
 //I wasn't sure what instructions meant regarding changing the color to reflect the balance
 if (newBalance >= 500){
 $(".cBalance").css("background-color", "#6df15d")
 }


 })

//Checking Withdrawal
$(".cwithdrawalButton").on("click",function(){
  console.log("i clicked the withdrawal button")
var withdrawal = parseInt($(".input").val())
var balance=$(".cBalance").text()
if (withdrawal > balance) { //unable to figure out the code to ignore transaction if withdrawal > deposit total 
var balance=$(".cBalance").text()
}
balance= parseInt(balance.replace("$", ""))
  var newBalance= balance - withdrawal
   $(".cBalance").text("$" + newBalance)
   if (newBalance === 0){
   $(".cBalance").css("background-color", "#de3ea8")

}
})

//Savings Deposit
$(".sdepositButton").on("click",function(){
  console.log("i clicked the deposit button")
  var deposit = parseInt($(".sInput").val())
  //console.log(deposit)
 var balance=$(".sBalance").text()
 //console.log(balance)
 balance= parseInt(balance.replace("$", ""))
var newBalance= deposit + balance
//console.log(balance)
$(".sBalance").text("$" + newBalance)
if (newBalance >= 500){
$(".sBalance").css("background-color", "#6df15d")
}
})

//Savings Withdrawal
$(".swithdrawalButton").on("click",function(){
console.log("i clicked the withdrawal button")
var withdrawal = parseInt($(".sInput").val())
var balance=$(".sBalance").text()
balance= parseInt(balance.replace("$", ""))
var newBalance= balance - withdrawal
 $(".sBalance").text("$" + newBalance)
 if (newBalance === 0){
   console.log ("account is < zero")
 $(".sBalance").css("background-color", "#de3ea8")
 }
})

})
