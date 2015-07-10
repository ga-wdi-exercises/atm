$(document).ready(function(){

//Deposit Money
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
// var changeColor = function(obj){

//  if(NewBalance.value <= 0){
//    o.style.backgroundColor = 'green';--  start here
//  }
 })

//Withdraw Money
$(".cwithdrawalButton").on("click",function(){
  console.log("i clicked the withdrawal button")
var withdrawal = parseInt($(".input").val())
var balance=$(".cBalance").text()
balance= parseInt(balance.replace("$", ""))
  var newBalance= balance - withdrawal
   $(".cBalance").text("$" + newBalance)
})

//Saving Money
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
})

//Withdraw Money
$(".swithdrawalButton").on("click",function(){
console.log("i clicked the withdrawal button")
var withdrawal = parseInt($(".sInput").val())
var balance=$(".sBalance").text()
balance= parseInt(balance.replace("$", ""))
var newBalance= balance - withdrawal
 $(".sBalance").text("$" + newBalance)
})

})
