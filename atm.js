
//checking deposit function
$('.deposit').on('click', function(){
  var userInputValue = parseInt($('.input').val());
  var currentBalance = parseInt($('.balance').text().replace("$",""));
  var updatedBalance = "$" + (currentBalance + userInputValue);
  $('#checking .balance').text(updatedBalance);


})
