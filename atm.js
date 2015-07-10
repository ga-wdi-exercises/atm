var checkBalance = 0;
var saveBalance = 0;

//left side number, currently null
// var checkingBalance = document.querySelector("div#checking_balance");
//     checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );


//right side number in a varible and function
var checkingDeposit = function(amount){
    checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

    }

function checkingWithdrawal(amount){
//withdraw from  left side
}

function savingsDeposit(amount){
//deposit right side - take the input.val - add to savings total
}

function savingsWithdrawal(amount){
//withdraw from right side
}

// an eventListerner for each button, each one a "click"

$('#leftDeposit').on('click' , function(){
  console.log('Deposit');
  userLeftAmount = $('#leftAmount').val();
  console.log(userLeftAmount);
  checkBalance = parseInt(userLeftAmount) + parseInt(checkBalance);
  console.log(checkBalance);
  $('.balance').eq(0).html(checkBalance);

});

$('#leftWithdraw').on('click' , function(){
  console.log('Withdraw');
  userLeftAmount = $('#leftAmount').val();
  console.log(userLeftAmount);
  checkBalance = parseInt(checkBalance) - parseInt(userLeftAmount);
  console.log(checkBalance);
  $('.balance').eq(0).html(checkBalance);

  if (checkBalance < 0){
  $('.balance').eq(0).html('you broke');
  $('.balance').css("background-color" , "red");
  }
  else{
  $('.balance').eq(0).html(checkBalance);
  }

});




$('#rightDeposit').on('click' , function(){
  console.log('Deposit');
  userRightAmount = $('#rightAmount').val();
  console.log(userRightAmount);
  saveBalance = parseInt(saveBalance) + parseInt(userRightAmount);
  console.log(saveBalance);
  $('.balance').eq(1).html(saveBalance);
});

$('#rightWithdraw').on('click' , function(){
  console.log('Withdraw');
  userRightAmount = $('#rightAmount').val();
  console.log(userRightAmount);
  saveBalance = parseInt(saveBalance) - parseInt(userRightAmount);
  console.log(saveBalance);
  $('.balance').eq(1).html(saveBalance);

  if (saveBalance < 0){
  $('.balance').eq(1).html('you broke');
  $('.balance').css("background-color" , "red");
  }
  else{
  $('.balance').eq(1).html(saveBalance);
  }

});
