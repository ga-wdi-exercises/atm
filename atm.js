$(document).ready(function(){

var checkingBalance = 0;
var savingsBalance = 0;

$("#c-depbtn").on("click", function(){
  var userInput = $("#c-text").val();
  checkingBalance += userInput;
  $("#c-balance").html(checkingBalance);
});

$("#s-depbtn").on("click", function(){
  var userInput = $("#s-text").val();
  savingsBalance += userInput;
  $("#s-balance").html(savingsBalance);
});


});
