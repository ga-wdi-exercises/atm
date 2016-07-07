$(document).ready(function(){

  // basic jquery testing
  // console.log("JQuery!");
  // $('body').css('background', 'red');

  var checkingBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);
  console.log(checkingBalance);
  var savingsBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);
  console.log(savingsBalance);


  $('#checking').children('.deposit').click(function() {
    var depositAmount = parseFloat($('#checking').children('input').val());
    console.log(depositAmount);
  });
  $('#checking').children('.withdraw').click(function() {
    var depositAmount = parseFloat($('#checking').children('input').val());
    console.log(depositAmount);
  });
  $('#savings').children('.deposit').click(function() {
    var depositAmount = parseFloat($('#checking').children('input').val());
    console.log(depositAmount);
  });
  $('#savings').children('.withdraw').click(function() {
    var depositAmount = parseFloat($('#checking').children('input').val());
    console.log(depositAmount);
  });

});
