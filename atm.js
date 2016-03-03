var checkingBalance1 = $(".balance").eq(0);
var checkingBalance2 = $(".balance").eq(1);
var total = [];

//calculates total
function calculateTotal(){
  var newTotal = 0;
  for(var i=0; i<total.length; i++){
    newTotal = +newTotal + +total[i];
  }
  console.log(newTotal);
  return newTotal;
}

//checking deposit function
function checkingDeposit(amount){
  checkingBalance1.html("$" + amount);

  total.push($("input").eq(0).val());
  var increaseNum = calculateTotal();

  checkingBalance1.html("$" + increaseNum);
  ;}

  //checking withdrawal function
  function checkingWithdrawal(amount){
    checkingBalance1.html("$" + amount);
  }

  //savings deposit function
  function savingsDeposit(amount){

    total.push($("input").eq(3).val());
    var increaseNum = calculateTotal();

    checkingBalance2.html("$" + increaseNum);
  }

  //savings withdrawal function
  function savingsWithdrawal(amount){
    return checkingBalance2.html("$" + amount);

  }

  // an eventListerner for each button, each one a "click"
  //first deposit button
  var checkDeposit = $("input[value='Deposit']").eq(0);
  //console.log(checkDeposit);
  checkDeposit.click(function(){
    checkingDeposit($("input").eq(0).val());
  });

  //first withdraw button
  var checkWithdraw = $("input[value='Withdraw']").eq(0);
  checkWithdraw.click(function(){
    checkingWithdrawal($("input").eq(0).val());
  });

  //second deposit button
  var saveDeposit = $("input[value='Deposit']").eq(1);
  saveDeposit.click(function(){
    console.log($("input").eq(3).val());
    savingsDeposit($("input").eq(3).val());
  });



  var saveWithdraw = $("input[value='Withdraw']").eq(1);
  saveWithdraw.click(function(){
    savingsWithdrawal($("input").eq(3).val());
  });
