/*
var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
*/

window.onload = function(){
  var checking = new Account(0);
  var savings = new Account(0);


  var checkingDepositBtn = $("input[value='Deposit']").eq(0);
  var checkingWithdrawBtn = $("input[value='Withdraw']").eq(0);
  var checkingDisplay = $(".balance").eq(0);
  var checkingInput = $("input[type='text']").eq(0);

  var savingsDepositBtn = $("input[value='Deposit']").eq(1);
  var savingsWithdrawBtn = $("input[value='Withdraw']").eq(1);
  var savingsDisplay = $(".balance").eq(1);
  var savingsInput = $("input[type='text']").eq(1);

  function updateDisplay(){
    savingsDisplay.html("$"+savings.balance);
    if(savings.balance <= 0){savingsDisplay.addClass("zero");}
    else{savingsDisplay.removeClass("zero");}
    checkingDisplay.html("$"+checking.balance);
    if(checking.balance <= 0){checkingDisplay.addClass("zero");}
    else{checkingDisplay.removeClass("zero");}
  }

  function checkingDeposit(amount){
    checking.deposit(amount);
  }

  function checkingWithdraw(amount){
    if(amount > checking.balance + savings.balance){return;}
    else if(amount > checking.balance){
      amount-= checking.balance;
      savings.withdraw(amount);
      checking.balance = 0;
      return;
    }
    else{
      checking.balance -= amount;
      return;
    }
  }

  function savingsDeposit(amount){
      savings.deposit(amount);
  }

  function savingsWithdraw(amount){
    if(amount > savings.balance + checking.balance){return;}
    else if(amount > savings.balance){
      amount-= savings.balance;
      checking.withdraw(amount);
      savings.balance = 0;
      return;
    }
    else{
      savings.balance -= amount;
      return;
    }
  }

  function Account(startingBalance) {
    this.balance = startingBalance;
  }

  Account.prototype.withdraw = function(amount){
    if (this.balance >= amount){this.balance -= amount; return amount;}
    else { return 0; }
  }

  Account.prototype.deposit = function(amount){
    this.balance += amount;
  }

  // an eventListerner for each button, each one a "click"
  checkingDepositBtn.on("click",function(e){
    var amount = Number(checkingInput.val());
    checkingDeposit(amount);
    updateDisplay();
    checkingInput.val("");
  })
  checkingWithdrawBtn.on("click",function(e){
    var amount = Number(checkingInput.val());
    checkingWithdraw(amount);
    updateDisplay();
    checkingInput.val("");
  })
  savingsDepositBtn.on("click",function(e){
    var amount = Number(savingsInput.val());
    savingsDeposit(amount);
    updateDisplay();
    savingsInput.val("");
  })
  savingsWithdrawBtn.on("click",function(e){
    var amount = Number(savingsInput.val());
    savingsWithdraw(amount);
    updateDisplay();
    savingsInput.val("");
  })

  updateDisplay();
  
}
