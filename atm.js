//my likely bad code
// var checkBal = $('.balance').eq(0).html();
// var checkSave = $('.balance').eq(1).html();


var checkBalance = 0;

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
  checkBalance = parseFloat(userLeftAmount) + parseFloat(checkBalance);
  console.log(checkBalance);
  $('.balance').eq(0).html(checkBalance);
});



$('#leftWithdraw').on('click' , function(){
  console.log('withdraw');

});

//another likely wrong way
//$('.balance').eq(1).html($("input").val());
