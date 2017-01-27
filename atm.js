$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

var checkBalance = 0
var saveBalance = 0




// CHECKING
  // Deposit
$('#checking').children('input.deposit').on('click', function(){
  var dmoney = parseInt($('#checking').children('.input').val());
  console.log(checkBalance)
  checkBalance = checkBalance + dmoney
  $(this).siblings('.balance').html("$" + checkBalance);
  $('.input').val('');
  console.log(checkBalance);
})
  // Withdraw
$('#checking').children('input.withdraw').on('click', function(){
  var wmoney = parseInt($('#checking > .input').val());
  console.log(checkBalance);
  console.log(wmoney);
  if (checkBalance < wmoney){
    if (wmoney < saveBalance){
      saveBalance = saveBalance - wmoney
      $('#savings > .balance').html("$" + saveBalance);
    }
    // overdraft function
    console.log('overdraft');
  }
  checkBalance = checkBalance - wmoney
  $(this).siblings().html("$"  + checkBalance)
  $('.input').val('');
  console.log(checkBalance);

  // if(wmoney > checkBalance){
  //   if (saveBalance > checkBalance - wmoney){
  //     checkBalance = saveBalance - (checkBalance - wmoney)
  //   }
  // }
})

// SAVINGS
  // Deposit
$('#savings').children('input.deposit').on('click', function(){
  var saveMoney = parseInt($('#savings').children('.input').val());
  saveBalance = saveBalance + saveMoney
  $(this).siblings('.balance').html("$" + saveBalance);
  $('.input').val('');
})
  // Withdraw
$('#savings').children('input.withdraw').on('click', function(){
  var saveMoney = parseInt($('#savings > input').val());
  saveBalance = saveBalance - saveMoney
  $(this).siblings().html("$"  + saveBalance)
})

// OVERDRAW
