$( document ).ready(function() {
  console.log( "document loaded")

  var deposit = document.getElementById('deposit')
  var depositb = document.getElementById('depositb')
  var withdraw = document.getElementById('withdraw')
  var withdrawb = document.getElementById('withdrawb')
  // var checking_balance = document.getElementById('#checking_balance')
  var checking_balance = Number(0)
  var savings_balanace = 0
  // var add = document.getElementById('add')





  deposit.addEventListener('click', ca_chang)
  function ca_chang (){
    var add = document.getElementById('add').value;   //user input?
    checking_balance += Number(add)
    console.log("hello!");
    console.log(checking_balance)

  }

//displaying values



  // var b1 = 0
  // function account_update (){
  //   b1 += 1;
  //   console.log(b1);
  // }





});
