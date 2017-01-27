//checking deposit function
$('#checking .deposit').on('click', function(){
  var userInputValue = parseInt($('#checking .input').val());
  var currentBalance = parseInt($('#checking .balance').text().replace("$",""));
  var updatedBalance = "$" + (currentBalance + userInputValue);
  $('#checking .balance').text(updatedBalance);

})

//checking withdraw function
$('#checking .withdraw').on('click', function(){
  var userInputValue = parseInt($('#checking .input').val());
  var currentBalance = parseInt($('#checking .balance').text().replace("$",""));
  var updatedBalance = "$" + (currentBalance - userInputValue);

  if (userInputValue > currentBalance) {
      alert("Sorry, you do not have enough funds")
      $('#checking .balance').text("$" + currentBalance);
  }
  else
      $('#checking .balance').text(updatedBalance);


})

//savings deposit function
$('#savings .deposit').on('click', function(){
  var userInputValue = parseInt($('#savings .input').val());
  var currentBalance = parseInt($('#savings .balance').text().replace("$",""));
  var updatedBalance = "$" + (currentBalance + userInputValue);
  $('#savings .balance').text(updatedBalance);


})

//savings withdraw function
$('#savings .withdraw').on('click', function(){
  var userInputValue = parseInt($('#savings .input').val());
  var currentBalance = parseInt($('#savings .balance').text().replace("$",""));
  var updatedBalance = "$" + (currentBalance - userInputValue);
  if (userInputValue > currentBalance) {
      alert("Sorry, you do not have enough funds")
      $('#savings .balance').text("$" + currentBalance);
  }
  else
      $('#savings .balance').text(updatedBalance);


})
