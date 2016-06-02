$(document).ready(function(){
 // var button = $("#checking").children().find(".deposit")
 //
 // function buttonClick(){
 //   button.on("click", console.log("hello"))
var checkingInput = $("#checking .input").val()
var checkingTotal = 0


$("#checking .deposit").on("click", function(){
  var checkingInput = $("#checking .input").val()

  checkingInput = parseInt(checkingInput);

  checkingTotal += checkingInput;

  checkingTotal = String(checkingTotal);

  $("#checking .balance").text("$" + checkingTotal);

});



});
