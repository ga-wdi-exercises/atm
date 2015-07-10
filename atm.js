// Checking account - deposit function
  $(".depositButton").on("click",function(){
    var deposit  = parseInt($(".depositInput").val())
    var balance =$(".balance.checking").text()
    balance = parseInt(balance.replace("$",""))
    var newBalance = deposit + balance
    $(".balance.checking").text("$"+ newBalance)
    classChangeChecking(newBalance);
  })

// Checking account - withdraw function
  $(".depositWithdraw").on("click",function(){
    var deposit  = parseInt($(".depositInput").val())
    var balance =$(".balance.checking").text()
    balance = parseInt(balance.replace("$",""))

    var savingsGlobalBalance =$(".balance.saving").text()
    savingsGlobalBalance = parseInt(savingsGlobalBalance.replace("$",""))

    if(deposit <= balance)
    {
      var newBalance = balance - deposit
    }
    else if(deposit <= (balance + savingsGlobalBalance))
    {
      newBalance= 0;
      var overdraftBalance = savingsGlobalBalance + balance - deposit
      $(".balance.saving").text("$"+ overdraftBalance)
    }
    else
    {
      newBalance=balance
    }
    $(".balance.checking").text("$"+ newBalance)
    classChangeChecking(newBalance);
  })

//Saving account - deposit function
  $(".savingsDepositButton").on("click",function(){
    var deposit  = parseInt($(".savingsInput").val())
    var balance =$(".balance.saving").text()
    balance = parseInt(balance.replace("$",""))
    var newBalance = deposit + balance
    $(".balance.saving").text("$"+ newBalance)
    savingsGlobalBalance= newBalance;

    classChangeSaving(newBalance)
  })

// Saving account - withdraw function
  $(".savingsDepositWithdraw").on("click",function(){
    var deposit  = parseInt($(".savingsInput").val())
    var balance =$(".balance.saving").text()
    balance = parseInt(balance.replace("$",""))

    var checkingGlobalBalance =$(".balance.checking").text()
    checkingGlobalBalance = parseInt(checkingGlobalBalance.replace("$",""))
    if(deposit <= balance)
    {
      var newBalance = balance - deposit
    }

    else if(deposit <= (balance + checkingGlobalBalance))
    {
      newBalance= 0;
      var overdraftBalance = checkingGlobalBalance + balance - deposit
      $(".balance.checking").text("$"+ overdraftBalance)
    }
    else
    {
      newBalance=balance
    }
    classChangeSaving(newBalance)

    $(".balance.saving").text("$"+ newBalance)
  })
  function classChangeChecking(newBalance){
    if(newBalance>0){
      $('.checking.zero').removeClass('zero');
    }
    else
    {
      $('.balance.checking').addClass('zero');
    }
  }
  //Class change function
  function classChangeSaving(newBalance){
    if(newBalance>0){
      $('.saving.zero').removeClass('zero');
    }
    else
    {
      $('.balance.saving').addClass('zero');
    }
  }
