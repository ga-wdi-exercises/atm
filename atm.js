var checkingBalance = document.querySelector("div.checking_balance").innerHTML;
/*checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );*/

//document.querySelector("div.checking_balance").innerHTML = parseInt(document.querySelector("input").value)


function checkingDeposit(){
  var newDeposit = parseInt($("#checkingInput").val());
  var balance = parseInt($(".checking_balance").html().replace("$",""));
  var newBalance = newDeposit + balance;
  $(".checking_balance").text("$" + newBalance);
  $("#checkingInput").val("");
}


function checkingWithdrawal(){
  var newWithdrawal = parseInt($("#checkingInput").val());
  var balance = parseInt($(".checking_balance").html().replace("$",""));
  if( newWithdrawal <= balance ){
    var newBalance = balance - newWithdrawal;
    $(".checking_balance").text("$" + newBalance);
  }
  $("#checkingInput").val("");
}

function savingsDeposit(){
  var newDeposit = parseInt($("#savingsInput").val());
  var balance = parseInt($(".savings_balance").html().replace("$",""));
  var newBalance = newDeposit + balance;
  $(".savings_balance").text("$" + newBalance);
  $("#savingsInput").val("");
}

function savingsWithdrawal(){
  var newWithdrawal = parseInt($("#savingsInput").val());
  var balance = parseInt($(".savings_balance").html().replace("$",""));
  if( newWithdrawal <= balance ){
    var newBalance = balance - newWithdrawal;
    $(".savings_balance").text("$" + newBalance);
  }
  $("#savingsInput").val("");
}

$(":button").eq(0).on("click", checkingDeposit);
$(":button").eq(1).on("click", checkingWithdrawal);
$(":button").eq(2).on("click", savingsDeposit);
$(":button").eq(3).on("click", savingsWithdrawal);
