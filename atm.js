
var chkDeposit = $("#checking_deposit");
var chkWithdrawal = $("#checking_withdraw");
var savDeposit = $("#savings_deposit");
var savWithdrawal = $("#savings_withdraw");
var chkAmount = 0
var savAmount = 0


// an eventListener for each button, each one a "click"
chkDeposit.on("click", checkingDeposit);
chkWithdrawal.on("click", checkingWithdrawal);
savDeposit.on("click", savingsDeposit);
savWithdrawal.on("click", savingsWithdrawal);

//actions responding to each button
function checkingDeposit() {
  chkAmount = parseInt($("#checking_amount").val());
  var checkingBal = $(".balance.checking").html();
  var chkBalAmt = parseInt(checkingBal.replace("$", ""));
  checkingBal = chkBalAmt + chkAmount;
  $(".balance.checking").text("$" + checkingBal);
  if(checkingBal == 0) {
    $(".balance.checking").addClass("zero");
  } else {
    $(".balance.checking").removeClass("zero");
  };
};


function checkingWithdrawal(){
  chkAmount = parseInt($("#checking_amount").val());
  var checkingBal = $(".balance.checking").html();
  var chkBalAmt = parseInt(checkingBal.replace("$", ""));
  var savingsBal = $(".balance.savings").html();
  var savBalAmt = parseInt(savingsBal.replace("$", ""));
  if(chkBalAmt >= chkAmount) {
    checkingBal = chkBalAmt - chkAmount;
  } else if ((chkBalAmt + savBalAmt) >= chkAmount) {
    checkingBal = 0;
    savingsBal = savBalAmt - (chkAmount - chkBalAmt);
    $(".balance.savings").text("$" + savingsBal);
  } else {
    checkingBal = chkBalAmt;
    alert("Transaction rejected: Insufficient funds. Sorry!")
  };
  $(".balance.checking").text("$" + checkingBal);
  if(checkingBal == 0) {
    $(".balance.checking").addClass("zero");
  } else {
    $(".balance.checking").removeClass("zero");
  };
}

function savingsDeposit(){
  savAmount = parseInt($("#savings_amount").val());
  var savingsBal = $(".balance.savings").html();
  var savBalAmt = parseInt(savingsBal.replace("$", ""));
  savingsBal = savBalAmt + savAmount;
  $(".balance.savings").text("$" + savingsBal);
  if(savingsBal == 0) {
    $(".balance.savings").addClass("zero");
  } else {
    $(".balance.savings").removeClass("zero");
  };
}

function savingsWithdrawal(){
  savAmount = parseInt($("#savings_amount").val());
  var savingsBal = $(".balance.savings").html();
  var savBalAmt = parseInt(savingsBal.replace("$", ""));
  if(savBalAmt >= savAmount) {
    savingsBal = savBalAmt - savAmount;
  } else {
    savingsBal = savBalAmt;
    alert("Transaction rejected: Insufficient funds. Sorry!")
  };
  $(".balance.savings").text("$" + savingsBal);
  if(savingsBal == 0) {
    $(".balance.savings").addClass("zero");
  } else {
    $(".balance.savings").removeClass("zero");
  };
}
