  $(document).ready(function(){

  // Checking account
  // set checking balance
  // var cbalance = $('#checkingBalance').text();
  cbalance = +$('#checkingBalance').text();
  cdepositsum = +0;

  //Set up Checking Deposit Function
  function depositChecking(){
    cbalance = +cbalance + +cdepositsum;
  }

  // event listen for Function deposit
  $('.cdeposit').click(function(num1, num2) {
    cdepositsum = $('.cinput').val();
    depositChecking();
    $('#checkingBalance').text(cbalance);
  })

  // event listen for function withdraw
  //   if account go negative, ignore transaction
  //   if account reaches zero, turn background red
  //
  // saving account
  // set saving balance
  // event listen for Function deposit
  // event listen for function withdraw
  //   if account go negative, ignore transaction
  //   if account reaches zero, turn background red

  });
