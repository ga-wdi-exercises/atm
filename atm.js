var checkTotal = 0;
var saveTotal = 0;

//sends amount to checkingBalance
var checkingDeposit = function(amount){
  checkTotal = checkTotal + amount;
};

//removes number from checking total
function checkingWithdrawal(amount){
  //first check if withdraw is more than in acct
  if (amount > checkTotal) {
    //if it is, then check the sum of both accounts
    if (amount <= (checkTotal + saveTotal)){
      amount = amount - checkTotal;
      checkTotal = 0;
      //take it out of savings!
      saveTotal = saveTotal - amount;
      return saveTotal;
    }else{}
  }else{
    checkTotal = checkTotal - amount;
    return checkTotal;
  }
}

//increase save total
function savingsDeposit(amount){
  saveTotal = saveTotal + amount;
}
//withdraw from savings
function savingsWithdrawal(amount){
  if (amount > saveTotal) {
    if (amount <= (checkTotal + saveTotal)){
      amount = amount - saveTotal;
      saveTotal = 0;
      checkTotal = checkTotal - amount;
      return checkTotal;
    }else{}
  }else{
    saveTotal = saveTotal - amount;
    return saveTotal;
  }
}
// an eventListerner for each button, each one a "click"
//checking Deposit
$(':button').eq(0).on("click", function() {
  if ($("input").eq(0).val() === "") {
  }else{
    var newNum = $("input").eq(0).val();
    checkingDeposit(parseInt(newNum));
    $('.balance').eq(0).html("$"+checkTotal);
    checkColorSave();
    checkColorCheck();
  }
});
//checking withdraw
$(':button').eq(1).on("click", function() {
  if ($("input").eq(0).val()===""){
  }else{
    var newNum = $("input").eq(0).val();
    checkingWithdrawal(parseInt(newNum));
    $('.balance').eq(0).html("$"+checkTotal);
    $('.balance').eq(1).html("$"+saveTotal);
    checkColorSave();
    checkColorCheck();
  }
});
//savings deposit
$(':button').eq(2).on("click", function() {
  if($("input").eq(3).val() === ""){
  }else{
    var newNum = $("input").eq(3).val();
    savingsDeposit(parseInt(newNum));
    $('.balance').eq(1).html("$"+saveTotal);
    checkColorSave();
    checkColorCheck();
  }
});
//savings withdraw
$(':button').eq(3).on("click", function() {
  if ($("input").eq(3).val()===""){
  }else{
    var newNum = $("input").eq(3).val();
    savingsWithdrawal(parseInt(newNum));
    $('.balance').eq(0).html("$"+checkTotal);
    $('.balance').eq(1).html("$"+saveTotal);
    checkColorSave();
    checkColorCheck();
  }
});

function checkColorSave(){
if ($('.balance').eq(1).html()=="$0"){
  $('.balance').eq(1).addClass("zero");
}else{$('.balance').eq(1).removeClass("zero");}
}
checkColorSave();

function checkColorCheck(){
if ($('.balance').eq(0).html()=="$0"){
  $('.balance').eq(0).addClass("zero");
}else{$('.balance').eq(0).removeClass("zero");}
}
checkColorCheck();
