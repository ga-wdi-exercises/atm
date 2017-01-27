  $(document).ready(function(){

  // A. Checking account

        // Set checking balance
        cbalance = +$('#checkingBalance').text();

        // Set new checking sum
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
        //   if a text added, ignore transaction


        
  // B. savings account

        // Set savings balance
        sbalance = +$('#savingsBalance').text();

        // Set new savings sum
        snewsum = +0;

        //Set up Savings Deposit Function
        function depositSavings(){
          sbalance = +sbalance + +snewsum;
        }

        //Set up savings Withdraw Function
        function withdrawSavings(){
          sbalance = +sbalance - +snewsum;
        }

        // event listen for Function savings deposit
        $('.sdeposit').click(function(num1, num2) {
          snewsum = $('.sinput').val();
          depositSavings();
          $('#savingsBalance').text(sbalance);
        })

        // event listen for function savings withdraw
        $('.swithdraw').click(function(num1, num2) {
          snewsum = $('.sinput').val();
          withdrawSavings();
          $('#savingsBalance').text(sbalance);
        })

      //   if account go negative, ignore transaction
      //   if account reaches zero, turn background red
      //   if a text added, ignore transaction

  });
