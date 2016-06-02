window.onload = function(){
  var atm = new ATM();
  var checking_amount = document.querySelector("#checking_amount");
  var savings_amount  = document.querySelector("#savings_amount");

  function updateBalances(){
    document.querySelector("#checking_balance").innerText = "$" + atm.checking;
    document.querySelector("#savings_balance").innerText  = "$" + atm.savings;
  }

  document.querySelector("#checking_deposit").addEventListener("click", function(){
    console.log("DEPOSIT " + checking_amount.value + " TO CHECKING");
    atm.deposit("checking", checking_amount.value);
    updateBalances();
  });

  document.querySelector("#checking_withdraw").addEventListener("click", function(){
    console.log("WITHDRAW " + checking_amount.value+ " FROM CHECKING");
    atm.withdraw("checking", checking_amount.value);
    updateBalances();
  });

  document.querySelector("#savings_deposit").addEventListener("click", function(){
    console.log("DEPOSIT " + savings_amount.value + " TO SAVINGS");
    atm.deposit("savings", savings_amount.value);
    updateBalances();
  });

  document.querySelector("#savings_withdraw").addEventListener("click", function(){
    console.log("WITHDRAW " + savings_amount.value + " FROM SAVINGS");
    atm.withdraw("savings", savings_amount.value);
    updateBalances();
  });
}