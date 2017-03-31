$(document).ready(function(){

  function addMoney(){
    // checking variables
      // buttons
      var checkingDeposit = $('#checking input.deposit');
      var checkingWithdraw = $('#checking input.withdraw');
      // input
      var checkingInput = $('#checking input.input');
      //balance

      var result = prevBalance.text();

      // turns the input value int


          $('.deposit').on('click'function(){

            var deposit = parseInt($('.balance').val())
            var prevBalance = parseInt($('#checking div.balance').val())
            var balance = parseInt(result.replace('$', ''))
            var total = '$' + (balance + prevBalance)
              $('.balance').text(total)
            });
      }

  })


  //-------------------------------------------------------
    // savings variables
      // buttons
        var savingsDeposit = $('#savings input.deposit');
      var savingsWithdraw = $('#savings input.deposit');
      // input
      var savingsInput = $('#savings input.input');
      //balance
      var savingsBalance = $('#savings div.balance');

      var checkingBalance = 0;
      var checkingBalance = 0;





   var depositChecking = function() {
      var inputVal = checkingInput.val()
      console.log(inputVal);
      var balance = checkingBalance.text('$' + inputVal);
      }


    var withdrawChecking = function() {
          console.log('hello')
        }

        var colorButton = $("#set-color");
        var colorField = $("#color-field");



  colorButton.on("click", setColor);
  checkingDeposit.on('click', depositChecking);
  checkingWithdraw.on('click', withdrawChecking);


  //savingsDeposit.on('click', depositSaving);
  //savingsWithdraw.on('click', withdrawSaving);

  });
