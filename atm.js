$(document).ready(function(){

  // basic jquery testing
  // console.log("JQuery!");
  // $('body').css('background', 'red');

  var checkingBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);
  var savingsBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);

  if (checkingBalance == 0) {
    console.log('zero!');
    $('#checking').addClass("zero");
  }
  if (savingsBalance == 0) {
    console.log('zero!');
    $('#savings').addClass("zero");
  }

  $('#checking').children('.deposit').click(function() {
    var depositAmount = parseFloat($('#checking').children('input').val());
    if (isNaN(depositAmount) == false) {
      checkingBalance = parseFloat(checkingBalance + depositAmount);
      console.log(checkingBalance);
      $('#checking').children('.balance').text('$' + checkingBalance.toFixed(2));
      if (checkingBalance == 0) {
        console.log('zero!');
        $('#checking').addClass("zero");
      }
      else {
        $('#checking').removeClass('zero');
      }
    }
  });
  $('#checking').children('.withdraw').click(function() {
    var withdrawAmount = parseFloat($('#checking').children('input').val());
    if (withdrawAmount <= checkingBalance && isNaN(withdrawAmount) == false) {
      checkingBalance = parseFloat(checkingBalance - withdrawAmount);
      console.log(checkingBalance);
      $('#checking').children('.balance').text('$' + checkingBalance.toFixed(2));
      if (checkingBalance == 0) {
        console.log('zero!');
        $('#checking').addClass("zero");
      }
      else {
        $('#checking').removeClass('zero');
      }
    }
  });
  $('#savings').children('.deposit').click(function() {
    var depositAmount = parseFloat($('#savings').children('input').val());
    if (isNaN(depositAmount) == false) {
      savingsBalance = parseFloat(savingsBalance + depositAmount);
      $('#savings').children('.balance').text('$' + savingsBalance.toFixed(2));
      if (savingsBalance == 0) {
        console.log('zero!');
        $('#savings').addClass("zero");
      }
      else {
        $('#savings').removeClass('zero');
      }
    }
  });
  $('#savings').children('.withdraw').click(function() {
    var withdrawAmount = parseFloat($('#savings').children('input').val());
    if (withdrawAmount <= savingsBalance && isNaN(withdrawAmount) == false) {
      savingsBalance = parseFloat(savingsBalance - withdrawAmount);
      $('#savings').children('.balance').text('$' + savingsBalance.toFixed(2));
      if (savingsBalance == 0) {
        console.log('zero!');
        $('#savings').addClass("zero");
      }
      else {
        $('#savings').removeClass('zero');
      }
    }
  });

});
