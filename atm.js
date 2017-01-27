//code for testing jQuery
$(document).ready(function(){
$("body").css("background", "red");
});


//code for deposit money to checking a/c.
var balanceCheck = $("div.balanceC")
var inputCheck = $("input.inputC")
var balanceSave = $("div.balanceS")
var inputSave = $("input.inputS")




$ ("input.depositC").click(function(){
  console.log("HELLO");

  $("div.balanceC").text("$"+(parseInt(inputCheck.val() + balanceCheck.val())));

});

//code for withdrawing money from checking a/c.

$ ("input.withdrawC").click(function(){
  console.log("GOODMORNING");

  $("div.balanceC").text("$"+(parseInt(balanceCheck.val() - inputCheck.val())));

});




//code for deposit money to savings a/c.

$ ("input.depositS").click(function(){
  console.log("HELLO");

$("div.balanceS").text("$"+(parseInt(inputSave.val() + balanceSave.val())));

});

//code for withdrawing money from savings a/c.

$ ("input.withdrawS").click(function(){
  console.log("GOODMORNING");

  $("div.balanceS").text("$"+(parseInt(balanceSave.val() - inputSave.val())));

});




// var overDraft = function(input){
//   var balanceCheck = $("div.balanceC")
//
// 	if(input < 0){
// 		alert("Wrong Amount");
//    }
//    else {
//      return;
//    }
//
// }
