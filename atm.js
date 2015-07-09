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


})
