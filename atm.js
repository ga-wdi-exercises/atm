var checkBalance = 0;
var saveBalance = 0;



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
