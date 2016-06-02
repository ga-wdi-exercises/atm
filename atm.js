$(document).ready(function(){

  var checkingInput; //#checking .input
  var savingsInput; //#savings .input
  var checkingBalance=0; //#checking .balance
  var savingsBalance=0;
  var checkingInput = $("#checking .input").val();

  ///FUNCTIONS TO DETERMINE ACCOUNT COLOR///

  function getAccountColor() {
    if (checkingBalance==0) {
    $("#checking .balance").addClass("zero");
    }

    else {
    $("#checking .balance").removeClass("zero");
    console.log("julia u dumb");
    }
  }

  function getAccountColorB() {
    if (savingsBalance==0) {
    $("#savings .balance").addClass("zero");}

    else {
      $("#savings .balance").removeClass("zero");
      console.log("julia u dumb");
      }
  }

  ///CALLING THE COLOR CHANGE FUNCTIONS

  getAccountColor();
  getAccountColorB()

//CHECKING DEPOSIT///

  $("#checking .deposit").on("click", function(){

      var checkingInput = $("#checking .input").val();

        if (checkingInput <=0) {
          alert("Please enter an amount greater than 0");
        }

        else {
          checkingInput = parseInt(checkingInput);
          checkingBalance+=checkingInput
          $("#checking .balance").html("$"+checkingBalance);
          getAccountColor();
          console.log("the new balance is $"+checkingBalance);
        }
    })

//CHECKING WITHDRAW//

  $("#checking .withdraw").on("click", function(){

      var checkingInput = $("#checking .input").val();

        if (checkingInput <=0) {
          alert("Please enter an amount greater than 0");
          }

        else {
        checkingInput = parseInt(checkingInput);

          //don't allow a withdraw that causes balance to go < 0
          if (checkingInput>checkingBalance) {
            alert("STOP! You do not have enough to withdraw this amount")
          }

          else {
          checkingBalance-=checkingInput;
          $("#checking .balance").html("$"+checkingBalance);
          getAccountColor();
          console.log("the new balance is $"+checkingBalance);
          }
        }
      })

  ///SAVINGS DEPOSIT///

      $("#savings .deposit").on("click", function(){

          var savingsInput = $("#savings .input").val();

            if (savingsInput <=0) {
              alert("Please enter an amount greater than 0");
              }

            else {
          // console.log(checkingInput);
          savingsInput = parseInt(savingsInput);
          // console.log((checkingInput+10)+" is the user input plus 10")
          savingsBalance+=savingsInput
          $("#savings .balance").html("$"+savingsBalance);
          getAccountColorB()
          console.log("the new balance is $"+savingsBalance);
          }

        })

  ///SAVINGS WITHDRAW///

      $("#savings .withdraw").on("click", function(){
          var savingsInput = $("#savings .input").val();

            if (savingsInput <=0) {
              alert("Please enter an amount greater than 0");
              }

            else {
                savingsInput = parseInt(savingsInput);

                  //don't allow a withdraw that causes balance to go < 0
                  if (savingsInput>savingsBalance) {
                    alert("STOP! You do not have enough to withdraw this amount");
                  }

                  else {
                  savingsBalance-=savingsInput
                  $("#savings .balance").html("$"+savingsBalance);
                  getAccountColorB()
                  console.log("the new balance is $"+savingsBalance);
                  }
              }
        });
});
