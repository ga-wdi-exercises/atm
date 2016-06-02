
$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

var checkingInput; //#checking .input
var savingsInput; //#savings .input
var checkingBalance=0; //#checking .balance
var savingsBalance=0;
var checkingInput = $("#checking .input").val();




$("#checking .deposit").on("click", function(){

    var checkingInput = $("#checking .input").val();

      if (checkingInput <=0) {
        alert("Please enter an amount greater than 0");
        }

      else {
    // console.log(checkingInput);
    checkingInput = parseInt(checkingInput);
    // console.log((checkingInput+10)+" is the user input plus 10")
    checkingBalance=checkingBalance+checkingInput
    $("#checking .balance").html("$"+checkingBalance);
    console.log("the new balance is $"+checkingBalance);
    }

  })


$("#checking .withdraw").on("click", function(){

    var checkingInput = $("#checking .input").val();

      if (checkingInput <=0) {
        alert("Please enter an amount greater than 0");
        }

      else {

      checkingInput = parseInt(checkingInput);
      // console.log((checkingInput+10)+" is the user input plus 10")
      checkingBalance=checkingBalance-checkingInput
      $("#checking .balance").html("$"+checkingBalance);
      console.log("the new balance is $"+checkingBalance);
      }

    })

    $("#savings .deposit").on("click", function(){

        var savingsInput = $("#savings .input").val();

          if (savingsInput <=0) {
            alert("Please enter an amount greater than 0");
            }

          else {
        // console.log(checkingInput);
        savingsInput = parseInt(savingsInput);
        // console.log((checkingInput+10)+" is the user input plus 10")
        savingsBalance=savingsBalance+savingsInput
        $("#savings .balance").html("$"+savingsBalance);
        console.log("the new balance is $"+savingsBalance);
        }

      })


    $("#savings .withdraw").on("click", function(){

        var savingsInput = $("#savings .input").val();

          if (savingsInput <=0) {
            alert("Please enter an amount greater than 0");
            }

          else {

          savingsInput = parseInt(savingsInput);
          // console.log((checkingInput+10)+" is the user input plus 10")
          savingsBalance=savingsBalance-savingsInput
          $("#savings .balance").html("$"+savingsBalance);
          console.log("the new balance is $"+savingsBalance);
          }

        })

});
