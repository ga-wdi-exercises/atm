/* PROGRAM ATM :
  Pick account you want to use checkings or Savings
  input money amount
  click button to either deposit or withdraw from account
  display amount  - if amount is zero then change background color of screen
  account should not go into negatives*/

$(document).ready(function(){
  console.log("hello");

    var account;
    //buttons for checkings
    var checkDt=  $("#checking").children().eq(3);
    var checkW= $("#checking").children().eq(4);

    // buttons for savings
    var savDt=  $("#savings").children().eq(3);
    var savW= $("#savings").children().eq(4);

    // create a JQuery object for this elements
    var input = $("#checking .input");
    var input2 = $("#savings .input");

    var total1 = 0;
    var total2 = 0;

    // variables where user input is stored
    var moneyAmnt ;
    var moneyAmntS ;

      // functions for Checking Account

      // Deposit Function

             function amountDeposit(){
                moneyAmnt =  parseFloat(input.val());
                total1 = total1 + moneyAmnt
                $("#checking .balance").removeClass("zero")

                if (total1 > 0 ){

                    $("#checking .balance").html("$" + total1.toFixed(2))
                    }

             }

            //  Withdraw Function

                   function amountWithdraw(){
                     moneyAmnt =  parseFloat(input.val());

                          if (total1 >= moneyAmnt ){
                               total1 = total1 - moneyAmnt ;
                               $("#checking .balance").html("$" + total1.toFixed(2))}
                        if(total1 <= 0) {
                              $("#checking .balance").addClass("zero")
                              }
                   }

                   checkDt.on("click", amountDeposit)
                   checkW.on("click", amountWithdraw)


                  //   functions for Savings account



                  function amountDepositS(){
                     moneyAmntS =  parseFloat(input2.val());
                     total2 = total2 + moneyAmntS
                     $("#savings .balance").removeClass("zero")

                     if (total2 > 0 ){

                         $("#savings .balance").html("$" + total2.toFixed(2))
                         }

                  }

                  function amountWithdrawS(){
                    moneyAmntS =  parseFloat(input2.val());

                         if (total2 >= moneyAmntS ){
                              total2 = total2 - moneyAmntS ;
                              $("#savings .balance").html("$" + total2.toFixed(2))}
                       if( total2 <= 0) {
                             $("#savings .balance").addClass("zero")
                             }
                          }


      //     function amountDepositS(){
      //     moneyAmntS =  parseFloat(input2.val());
      //     total2 = total2 + moneyAmntS ;
      //     $("#savings .balance").html("$" + total2.toFixed(2))
      //
      //     if (total2 <= 0 ){
      //       $("#savings .balance").addClass("zero")
      //     }
      //     else {
      //           $("#savings .balance").removeClass("zero")
      //     }
      // }
      //



      //     function amountWithdrawS(){
      //     moneyAmntS =  parseFloat(input2.val());
      //
      //
      //
      //     if (total2 <= 0 ){
      //       $("#savings .balance").addClass("zero")
      //
      //
      //     }
      //     else {
      //
      //           $("#savings .balance").addClass("balance")
      //           total2 = total2 - moneyAmntS ;
      //
      //     }
      //       $("#savings .balance").html("$" + total2.toFixed(2))
      //
      // }





      //  deposit

    savDt.on("click", amountDepositS)
    savW.on("click", amountWithdrawS)


});
