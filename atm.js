$(document).ready(function(){
  $("#checking .deposit").on("click", function(evt){
    evt.preventDefault();
    $("#checking .balance.zero").removeClass("zero");
    $("#checking .input").css("color", "black");
    $("#checking .input").select();
    var totalBalance = currentBalance("#checking .balance");
    var userInput = currentInput("#checking .input");
    var balance = userInput + totalBalance;
    $("#checking .balance").html("$" + balance);
  })

  $("#checking .withdraw").on("click", function(evt){
    evt.preventDefault();
    $("#checking .balance.zero").removeClass("zero");
    $("#checking .input").css("color", "black");
    $("#checking .input").select();
    var totalBalance = currentBalance("#checking .balance");
    var userInput = currentInput("#checking .input");
    var balance = withdraw(totalBalance, userInput, "#checking .balance", "#checking .input")
    $("#checking .balance").html("$" + balance);
  })

  $("#savings .deposit").on("click", function(evt){
    evt.preventDefault();
    $("#savings .balance.zero").removeClass("zero");
    $("#savings .input").css("color", "black");
    $("#savings .input").select();
    var totalBalance = currentBalance("#savings .balance");
    var userInput = currentInput("#savings .input");
    var balance = userInput + totalBalance;
    $("#savings .balance").html("$" + balance);
  })

  $("#savings .withdraw").on("click", function(evt){
    evt.preventDefault();
    $("#savings .input").css("color", "black");
    $("#savings .input").select();
    var totalBalance = currentBalance("#savings .balance");
    var userInput = currentInput("#savings .input");
    var balance = withdraw(totalBalance, userInput, "#savings .balance", "#savings .input");
    $("#savings .balance").html("$" + balance);
  })

  function redTextWarning(location){
    $(location).css("color", "red");
    $(location).val("INSUFFICIENT FUNDS!");
    $(location).select();
  }

  function currentBalance(location){
    var displayedBalance = $(location).html();
    var totalBalance = parseFloat(displayedBalance.split("$")[1]);
    return totalBalance;
  }

  function currentInput(location){
    var amount = $(location).val();
    var floatAmount = parseFloat(amount).toFixed(2);
    var userInput = parseFloat(floatAmount);
    return userInput;
  }

  function zeroDollars(location){
    $(location).addClass("zero");
  }

  function withdraw(currentBalance, withdrawAmount, balanceLocation, inputLocation){
    var balance = currentBalance - withdrawAmount;
    if (balance == 0){
      zeroDollars(balanceLocation);
    }
    else if(balance < 0){
      balance = currentBalance;
      redTextWarning(inputLocation);
    }
    return balance;
  }

  // function overdraft(withdrawAmount, savingsLocation, checkingLocation, inputLocation){
  //    if((currentBalance(checkingLocation) + currentBalance(savingsLocation) - withdrawAmount)>0){
  //      savingsAmount = savingsAmount - (currentBalance(checkingLocation)-withdrawAmount)
  //    }
  //    else{
  //      balance = currentBalance;
  //      redTextWarning(inputLocation);
  //    }
  // }
});

/*
select user input
convert input to float with 2 decimal places
if (withdraw button pressed){
subtract input from current balance
}
if (deposit button pressed){
add input to current balance
}
if (balance < 0){
do not update balance on dom
reset balance to previous value
display error message within input field
}
else if (balance == 0){
use css to change box background to red
}
else{
update account balance on DOM
bank color should be green
}
clear specific input field
*/
