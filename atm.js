
var atm = {
sumChecking: 0,
sumSavings: 0,
listen:function() {

      $( "#checking input[value=Deposit]" ).on( "click" , atm.functions.DepositC );
      $( "#checking input[value=Withdraw]" ).on("click" , atm.functions.WithdrawC );
      $( "#savings input[value=Deposit]" ).on( "click" , atm.functions.DepositS );
      $( "#savings input[value=Withdraw]" ).on("click" , atm.functions.WithdrawS );

},

functions: {
  DepositC: function() {
            var depositChecking = $( "#checking input[type=text]" ).val();
            atm.sumChecking += parseInt(depositChecking);

            $( "#checking div.balance" ).html("$" + atm.sumChecking);
            if(atm.sumSavings > 0) {
                $( "#checking .balance").removeClass( "zero");
            }
          },

  WithdrawC: function () {
              var withdrawChecking = $( "#checking input[type=text]" ).val();
              atm.sumChecking -= parseInt(withdrawChecking);

              if (atm.sumChecking < 0) {
                $( "#checking .balance").addClass( "zero");
              }

              if (atm.sumChecking < 0 && atm.sumSavings >= 0) {
                if (atm.sumSavings <= 0) {
                  $( "#savings .balance").addClass( "zero");
                  atm.sumChecking = 0;
                  return alert("You don't have enough money for this transaction.")
                }
                // Overdraft amount ( ex. -10 + 50 = 40)
                atm.sumSavings += atm.sumChecking;
                atm.sumChecking = 0;

                $( "#savings div.balance" ).html("$" + atm.sumSavings);
              }

              $( "#checking div.balance" ).html("$" + atm.sumChecking);

            },
  DepositS: function() {
            var depositSavings = $( "#savings input[type=text]" ).val();
            atm.sumSavings += parseInt(depositSavings);

            $( "#savings div.balance" ).html("$" + atm.sumSavings);
            if(atm.sumSavings > 0) {
                $( "#savings .balance").removeClass( "zero");
            }

          },
  WithdrawS: function() {
              var withdrawSavings = $( "#savings input[type=text]" ).val();
              atm.sumSavings -= parseInt(withdrawSavings);

              // Turn acct red if 0
              if (atm.sumSavings <= 0) {
                $( "#savings .balance").addClass( "zero");
              }

              if (atm.sumSavings < 0 && atm.sumChecking >= 0) {
                if (atm.sumChecking <= 0) {
                  $( "#checking .balance").addClass( "zero");
                  atm.sumSavings = 0;
                  return alert("You don't have enough money for this transaction.")
                }
                // Overdraft amount ( ex. -10 + 50 = 40)
                atm.sumChecking += atm.sumSavings;
                atm.sumSavings = 0;

                $( "#checking div.balance" ).html("$" + atm.sumChecking);
              }

              $( "#savings div.balance" ).html("$" + atm.sumSavings);

            }
        }
}
atm.listen()
