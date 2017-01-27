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
          if (isNaN(cnewsum) === true) {
            alert('This is not a number. You can only use numbers and dots!');
          } else {
            depositChecking();
            $('#checkingBalance').text(cbalance);
            greenCAlarm();
          }
        })

        // event listen for function checking withdraw
        $('.cwithdraw').click(function(num1, num2) {
          cnewsum = $('.cinput').val();
          if (isNaN(cnewsum) === true) {
            alert('This is not a number. You can only use numbers and dots!');
          } else if( (+cbalance - +cnewsum) < 0) {
            alert('Sorry! You do not have enough credit to perform this transaction!');
          } else {
            withdrawChecking();
            $('#checkingBalance').text(cbalance);
            redCAlarm();
          }
        })

        // if account reaches zero, turn background red
        function redCAlarm(){
          if (+cbalance <= 0){
            $('#checking').addClass('zero');
          }
        }

        // if account returns positive, the red background goes away
        function greenCAlarm(){
          if (+cbalance > 0){
            $('#checking').removeClass('zero');
          }
        }

        // Stop depositing negative values



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
          if (isNaN(snewsum) === true) {
            alert('This is not a number. You can only use numbers and dots!');
          } else {
            depositSavings();
            $('#savingsBalance').text(sbalance);
            greenSAlarm();
          }
        })

        // event listen for function savings withdraw
        $('.swithdraw').click(function(num1, num2) {
          snewsum = $('.sinput').val();
          if (isNaN(snewsum) === true) {
              alert('This is not a number. You can only use numbers and dots!');
          } else if( (+sbalance - +snewsum) < 0) {
              alert('Sorry! You do not have enough credit to perform this transaction!');
          } else {
              withdrawSavings();
              $('#savingsBalance').text(sbalance);
              redSAlarm();
          }
        })

        // if account reaches zero, turn background red
        function redSAlarm(){
          if (+sbalance <= 0){
            $('#savings').addClass('zero');
          }
        }

        // if account returns positive, the red background goes away
        function greenSAlarm(){
          if (+sbalance > 0){
            $('#savings').removeClass('zero');
          }
        }

      // Stop depositing negative values


  });
