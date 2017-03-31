
$(document).ready(function(){
   var history = [];
   var savingsHistory = [];
   // Declare Buttons
   var depositCheckingButton = $('#checking .deposit');
   var withdrawCheckingButton = $('#checking .withdraw');
   var depositSavingsButton = $('#savings .deposit');
   var withdrawSavingsButton = $('#savings .withdraw')

   depositCheckingButton.on('click',function(){
     var inputVal = parseInt($('#checking .input').val());
     var checkingBalanceDisplay = parseInt($('#checking .balance').text().replace("$",""));
     var newBalance = inputVal + checkingBalanceDisplay;

     $('#checking .balance').text('$' + newBalance);
     history.push(inputVal);
     console.log(history);
     if(newBalance > 0) {
       $('#checking .balance').removeClass('zero');
     }
   });

   withdrawCheckingButton.on('click',function(){
     var inputVal = parseInt($('#checking .input').val());
     var checkingBalanceDisplay = parseInt($('#checking .balance').text().replace("$",""));
     var newBalance = checkingBalanceDisplay - inputVal;
     $('#checking .balance').text("$" + newBalance);

     history.push(-inputVal);
     console.log(history);
     if(newBalance < 0) {
       $('#checking .balance').addClass('zero');
       $('#checking .balance').text('$0');
     }
   });

   depositSavingsButton.on('click',function(){
     var inputVal = parseInt($('#savings .input').val());
     var savingsBalanceDisplay = parseInt($('#savings .balance').text().replace("$",""));
     var newBalance = savingsBalanceDisplay + inputVal;
     $('#savings .balance').text('$' + newBalance);
     savingsHistory.push(inputVal);
     console.log(savingsHistory);
     if(newBalance > 0) {
       $('#savings .balance').removeClass('zero');
     }
   })

   withdrawSavingsButton.on('click',function(){
     var inputVal = parseInt($('#savings .input').val());
     var savingsBalanceDisplay = parseInt($('#savings .balance').text().replace("$",""));
     var newBalance = savingsBalanceDisplay - inputVal;
     $('#savings .balance').text('$' + newBalance);
     savingsHistory.push(-inputVal);
     console.log(savingsHistory);
     if(newBalance < 0) {
       $('#savings .balance').addClass('zero');
       $('#savings .balance').text('$0');
     }
   })


 });
