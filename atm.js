  $(document).ready(function(){

  // A. Checking account

        // Set checking balance
        cbalance = +$('#checkingBalance').text();

        // Set new sum
        cnewsum = +0;

        //Set up Checking Deposit Function
        function depositChecking(){
          cbalance = +cbalance + +cnewsum;
        }

        //Set up Checking Withdraw Function
        function withdrawChecking(){
          cbalance = +cbalance - +cnewsum;
        }

        // event listen for Function checking deposit
        $('.cdeposit').click(function(num1, num2) {
          cnewsum = $('.cinput').val();
          depositChecking();
          $('#checkingBalance').text(cbalance);
        })

        // event listen for function checking withdraw
        $('.cwithdraw').click(function(num1, num2) {
          cnewsum = $('.cinput').val();
          withdrawChecking();
          $('#checkingBalance').text(cbalance);
        })



  //   if account go negative, ignore transaction
  //   if account reaches zero, turn background red
  //
  // saving account
  // set saving balance
  // event listen for Function deposit
  // event listen for function withdraw
  //   if account go negative, ignore transaction
  //   if account reaches zero, turn background red


//if a text added, ignore transaction

  });
