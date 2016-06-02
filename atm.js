$(document).ready(function(){

  var savingsInput; //#savings .input
  var checkingBalance=0; //#checking .balance
  var savingsBalance=0;
  var checkingInput;
  var totalBalance;

  ///FUNCTIONS TO DETERMINE ACCOUNT COLOR///

  function getAccountColor() {
    if (checkingBalance==0) {
      $("#checking .balance").addClass("zero");
    }

    else {
      $("#checking .balance").removeClass("zero");
    }
  }

  function getAccountColorB() {
    if (savingsBalance==0) {
      $("#savings .balance").addClass("zero");}

      else {
        $("#savings .balance").removeClass("zero");
      }
    }

    ///CALLING THE COLOR CHANGE FUNCTIONS

    getAccountColor();
    getAccountColorB()

    // //get total balanace
    // var totalBalance = function (){
    //
    //   var checkingBalance = $("#checking .balance").val();
    //   var savingBalance = $("#savings .balance").val();
    //
    //   parseInt(checkingBalance);
    //   parseInt(savingsBalance);
    //
    //   totalBalance = (checkingBalance + savingsBalance);
    //
    // }

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
        var totalBalance = checkingBalance + savingsBalance;
        console.log("the new balance is $"+checkingBalance+" and $"+totalBalance+" is the total balance");
      }
    })

    //CHECKING WITHDRAW//

    $("#checking .withdraw").on("click", function(){
      var checkingInput = $("#checking .input").val();

      if (checkingInput <=0) {
        alert("Please enter an amount greater than 0");
      }

      else {
        var checkingInput = $("#checking .input").val();
        var totalBalance = checkingBalance + savingsBalance;

          if (checkingInput<=checkingBalance){
            var checkingInput = $("#checking .input").val();
            checkingInput = parseInt(checkingInput);
            checkingBalance=checkingBalance-checkingInput;
            $("#checking .balance").html("$"+checkingBalance);
            // var totalBalance = checkingBalance + savingsBalance;
            getAccountColor();
            // console.log("the new balance is $"+checkingBalance+" and $"+totalBalance+" is the total balance");
          }

          else if ((checkingInput>totalBalance) && (checkingInput>checkingBalance)) {
            // var checkingInput = $("#checking .input").val();
            alert("There are not enough funds to complete this request. Pleae try again.");
          }

          else if (checkingInput>checkingBalance) {
            var checkingInput = $("#checking .input").val();
            console.log("Time to move into B-b-b bonus round...")
            var totalBalance = checkingBalance + savingsBalance;

            var overdraft = checkingInput-checkingBalance;
            overdraft = Math.abs(overdraft);
            console.log("$"+overdraft+" is the overdraft.");

            savingsBalance=savingsBalance-overdraft
            checkingBalance = 0;

            $("#checking .balance").html("$"+checkingBalance);
            $("#savings .balance").html("$"+savingsBalance);
          }
        }
    });

    ///SAVINGS DEPOSIT///

    $("#savings .deposit").on("click", function(){

      var savingsInput = $("#savings .input").val();

      if (savingsInput <=0) {
        alert("Please enter an amount greater than 0");
      }

      else {
        savingsInput = parseInt(savingsInput);
        savingsBalance+=savingsInput
        $("#savings .balance").html("$"+savingsBalance);
        getAccountColorB()
        var totalBalance = checkingBalance + savingsBalance;
        console.log("the new balance is $"+savingsBalance+" and $"+totalBalance+" is the total balance");
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
          var totalBalance = checkingBalance + savingsBalance;
          console.log("the new balance is $"+savingsBalance+" and $"+totalBalance+" is the total balance");
        }
      }
    });
  });
