// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });

//
var checkBal = $("#checking").children("div.balance");
var checkAdd = $("#checking").children("input.deposit");
var checkSub = $("#checking").children("input.withdraw");
var checkInput=$("#checking").children("input.input");

var savBal = $("#savings").children("div.balance");
var savAdd = $("#savings").children("input.deposit");
var savSub = $("#savings").children("input.withdraw");
var savInput = $("#savings").children("input.input");

var balance = 0
var savingBalance = 0
var total = savingBalance + balance;

checkAdd.on("click",addAmount);
function addAmount(){
  var value = parseInt(checkInput.val());
  balance = value + balance
  checkBal.text(balance);
}
  checkSub.on("click",subtractAmount);
  function subtractAmount(){
    var total = balance + savingBalance;
    var value = parseInt(checkInput.val());
    if (balance < value){
      alert("we will transfer money from your savings account")
      balance = savingBalance;
      checkBal.text(balance)
      savingBalance = 0;
    savBal.text(savingBalance);
    if (balance<value){
      alert("Insufficient Funds")
    }
    // checkBal.text(balance)
  }
    // else if (savingBalance < total) {
    //   alert("Insufficient Funds")
    // }
    // savingBalance =  savingBalance - balance;
      // console.log("it works")
      // alert("Insufficient Funds");
    else{
    balance = balance- value
    checkBal.text(balance);
  }
}


  savAdd.on("click",savAddAmount);
  function savAddAmount(){
    var value = parseInt(savInput.val());
    savingBalance = value + savingBalance
    savBal.text(savingBalance);
  }
  savSub.on("click",savSubtractAmount);
  function savSubtractAmount(){
    var value = parseInt(savInput.val());
    if (savingBalance< value){
      alert("we will transfer money from your savings account")
      balance = savingBalance;
      checkBal.text(balance)
      savingBalance = 0;
    savBal.text(savingBalance);
    if (balance<value){
      alert("Insufficient Funds")
    }else{
    savingBalance = savingBalance - value;
    }
      savBal.text(savingBalance);
    }

  // checkBal.text(value) + parseInt((checkInput.val()));
  // console.log(value)
  // value = parseInt(checkInput.val());
  // checkBal.text(value + parseInt(checkBal.text()));
  // // console.log(value)

//
// $(cehcking.balance).text("$"+ (input + balance))
//   $(.balance).eturn balance = balance + "amount entered"
//
//   ;

// 1. User chooses checking or savings account.
// 2. Enter amount to deposit in input text placeholder (.input)<input value === something>
// 3. click deposit button.
//     $(".deposit").on("click", addAmount);
//     function addAmount(){
//
//     }
// 4. show balance in .balance
// 5. Choose checking or savings account
// 6. enter amount to withdraw in input text placeholder (.input)
// 7. click withdraw button
// $(".withdraw").on("click", subtractAmount);
// function subtractAmount(){
// 8. show remaining balance
