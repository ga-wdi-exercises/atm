//withdrawing money
  // get user amount
  var $depChecking = $('#checking > .deposit');
  var $inputChecking = $('#checking > .input');

  $depChecking.on('click', function(){
    var deposit = parseInt($inputChecking.val());
    console.log("Deposit clicked. Value = " + deposit);
  })
  // if amount > amount in bank,
    // throw error
  // else subtract amount from account

//adding money
  // get user amount
  // account balance += amount
