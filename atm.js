  $(document).ready(function(){

    // Defining variables

      // Set checking balance
      // cbalance = +$('#checkingBalance').text();
      cbalance = 100;

      // Set new checking sum
      cnewsum = +0;

      // Set savings balance
      sbalance = +100;

      // Set new savings sum
      snewsum = +0;

      // Set up overall balance
      compined = +cbalance + +sbalance;


  // A. Checking account

        //Set up Checking Deposit Function
        function depositChecking(){
          cbalance = +cbalance + +cnewsum;
          compined = +cbalance + sbalance;
        }

        //Set up Checking Withdraw Function
        function withdrawChecking(){
          cbalance = +cbalance - +cnewsum;
          compined = +cbalance + sbalance;
        }

        //Overdeaft Functionality for Checking account
        function qualifyCOverdarft(){
          if ( +compined >= +cnewsum ){
            alert('Your account does not have enough funds, but you qualify for overdraft');
            sbalance = +compined - +cnewsum;
            cbalance= 0;
            $('#checkingBalance').text(cbalance);
            redCAlarm();
            $('#savingsBalance').text(sbalance);
            redSAlarm();
          } else {
            alert('Sorry! You do not qualify for overdraft protection!');
          }
        }

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

        //Event Listeners

        // event listen for Function checking deposit
        $('.cdeposit').click(function(num1, num2) {
          cnewsum = $('.cinput').val();
          if (isNaN(cnewsum) === true) {
            alert('This is not a number. You can only use numbers and dots!');
          } else if (cnewsum < 0){
            alert('Sorry! You can not use negative values!');
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
          } else if (cnewsum < 0){
            alert('Sorry! You can not use negative values!');
          } else if (cbalance == 0){
            alert('Sorry! You account is empty!');
          } else if( (+cbalance - +cnewsum) < 0) {
            qualifyCOverdarft();
          } else {
            withdrawChecking();
            $('#checkingBalance').text(cbalance);
            redCAlarm();
          }
        })


  // B. savings account

        //Set up Savings Deposit Function
        function depositSavings(){
          sbalance = +sbalance + +snewsum;
          compined = +cbalance + sbalance;
        }

        //Set up savings Withdraw Function
        function withdrawSavings(){
          sbalance = +sbalance - +snewsum;
          compined = +cbalance + sbalance;
        }

        //Overdeaft Functionality for Savings account
        function qualifySOverdarft(){
          if ( +compined >= +snewsum ){
            alert('Your account does not have enough funds, but you qualify for overdraft');
            cbalance = +compined - +snewsum;
            sbalance= 0;
            $('#checkingBalance').text(cbalance);
            redCAlarm();
            $('#savingsBalance').text(sbalance);
            redSAlarm();
          } else {
            alert('Sorry! You do not qualify for overdraft protection!');
          }
        }

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

        //Event Listeners

        // event listen for Function savings deposit
        $('.sdeposit').click(function(num1, num2) {
          snewsum = $('.sinput').val();
          if (isNaN(snewsum) === true) {
            alert('This is not a number. You can only use numbers and dots!');
          } else if (snewsum < 0){
            alert('Sorry! You can not use negative values!');
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
          } else if (snewsum < 0){
              alert('Sorry! You can not use negative values!');
          } else if (sbalance == 0){
              alert('Sorry! You account is empty!');
          } else if( (+sbalance - +snewsum) < 0) {
              qualifySOverdarft();
          } else {
              withdrawSavings();
              $('#savingsBalance').text(sbalance);
              redSAlarm();
          }
        })

  });
