var checkingBalance = document.querySelector("div#checking_balance").innerHTML;


function checkingDeposit(){
  if (!isNaN(parseInt($("#checkingInput").val()))){
    var newDeposit = parseInt($("#checkingInput").val());
    var balance = parseInt($("#checking_balance").html().replace("$",""));
    var newBalance = newDeposit + balance;
    $("#checking_balance").text("$" + newBalance);
    $("#checking_balance").removeClass("zero");
    $("#checkingInput").val("");
 }
}


function checkingWithdrawal(){
  var newWithdrawal = parseInt($("#checkingInput").val());
  var balance = parseInt($("#checking_balance").html().replace("$",""));
  var savingsBalance = parseInt($("#savings_balance").html().replace("$",""));
  var totalBalance = balance + savingsBalance;
  if( newWithdrawal < balance ){
    var newBalance = balance - newWithdrawal;
    $("#checking_balance").text("$" + newBalance);
  } else if ( newWithdrawal <= totalBalance){
    $("#checking_balance").text("$0");
    $("#checking_balance").addClass("zero");
    var newBalance = savingsBalance + balance - newWithdrawal;
    $("#savings_balance").text("$" + newBalance);
  }
  $("#checkingInput").val("");
}

function savingsDeposit(){
  if (!isNaN(parseInt($("#savingsInput").val()))){
    var newDeposit = parseInt($("#savingsInput").val());
    var balance = parseInt($("#savings_balance").html().replace("$",""));
    var newBalance = newDeposit + balance;
    $("#savings_balance").text("$" + newBalance);
    $("#savings_balance").removeClass("zero");
    $("#savingsInput").val("");
  }
}

function savingsWithdrawal(){
  var newWithdrawal = parseInt($("#savingsInput").val());
  var balance = parseInt($("#savings_balance").html().replace("$",""));
  if( newWithdrawal < balance ){
    var newBalance = balance - newWithdrawal;
    $("#savings_balance").text("$" + newBalance);
  } else if ( newWithdrawal = balance ){
    $("#savings_balance").text("$0");
    $("#savings_balance").addClass("zero");
  }
  $("#savingsInput").val("");
}

$(":button").eq(0).on("click", checkingDeposit);
$(":button").eq(1).on("click", checkingWithdrawal);
$(":button").eq(2).on("click", savingsDeposit);
$(":button").eq(3).on("click", savingsWithdrawal);
