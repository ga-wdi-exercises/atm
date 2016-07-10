var $balance = $(".balance")
var $input = $(".input")
var $button = $("input[type='button']")

// when i click on deposit
$button.on("click", function(){
  // get the value of the input
  var $buttonIClickedOn = $(this)
  var $account = $(this).parent();
  var inputValue = parseInt($account.find($input).val());
  if($buttonIClickedOn.val() == "Withdraw"){
    inputValue = inputValue * -1
  }
  // get the original balance
  var originalBalance = parseInt($account.find($balance).html().replace('$',''));
  // add the input to original balance
  var newBalance = inputValue + originalBalance;
  // it should appear under checking
  $account.find($balance).html("$"+newBalance)
})
