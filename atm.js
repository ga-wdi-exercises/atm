$(document).ready(function(){




var checkingDepositBtn = $("#checkingDepositBtn");

var checkingDisplay = $("#checkingAccount > .balance");

var checkingBalance = parseInt(checkingDisplay.html().replace("$" , ""));


checkingDepositBtn.click(depositMoney);

function depositMoney() {
  var userInput = parseInt($("#checkingField").val());
  checkingBalance += userInput;
  checkingDisplay.html("$" + checkingBalance);
}


});
