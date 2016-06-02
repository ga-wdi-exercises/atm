//initial balance
var currentBalance = 0;

//checking button function
$('#checking input.deposit').on('click', function(){
  //retreiving deposit value
  var depositAmt = $('#checking input.input').val();
  console.log(depositAmt);

  //changing deposit to Number
  depositAmt = parseInt(depositAmt);
  console.log(depositAmt);

  //adding to the current balance
  currentBalance = currentBalance + depositAmt;
  console.log(currentBalance);

  //display the currentBalance
  $('#checking div.balance').html(currentBalance);
})
