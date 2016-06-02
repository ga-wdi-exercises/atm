//fix css update

$( document ).ready(function() {
  console.log( "document loaded")

  var deposit = document.getElementById('deposit')
  var depositb = document.getElementById('depositb')
  var withdraw = document.getElementById('withdraw')
  var withdrawb = document.getElementById('withdrawb')
  var checking_balance = Number(0)
  var savings_balance = Number(0)


  deposit.addEventListener('click', ca_chang)
  function ca_chang (){
    var add = document.getElementById('add').value;
    checking_balance += Number(add)
    console.log("checking:" + checking_balance);
    $("#checking_balance").text("$" + checking_balance);
  }

  withdraw.addEventListener('click', take)
  function take (){
    var add = document.getElementById('add').value;
    if (checking_balance - Number(add) >= 0) {
      checking_balance -= Number(add)
      console.log("checking:" + checking_balance);
      $("#checking_balance").text("$" + checking_balance);
    }
    else $("#checking_balance").css(".zero");
  }

  depositb.addEventListener('click', ca_changb)
  function ca_changb (){
    var addb = document.getElementById('addb').value;
    savings_balance += Number(addb)
    console.log("savings:" + savings_balance)
    $("#savings_balance").text("$" + savings_balance);
  }

  withdrawb.addEventListener('click', takeb)
  function takeb (){
    var addb = document.getElementById('addb').value;
    if (savings_balance - Number(addb) >=0) {
      savings_balance -= Number(addb)
      console.log('savings:' + savings_balance)
      $("#savings_balance").text("$" + savings_balance);
    }
    // else $("#checking_balance").css(".zero");
  }


});
