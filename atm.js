$(document).ready(function(){

  function getFieldInput(accountType){
    var field = $("#" + accountType + ">input.input");
    var money = field.val();
    return parseFloat(money);
  }

  function clearField(accountType){
    $("#" + accountType + ">input.input").val("")
  }

  function getBalance(accountType){
    var balance = $("#"+accountType+">div.balance").html().split("$")[1];
    return parseFloat(balance);
  }

  function changeBalance(balance, money, accountType, depOrWith){
    if (depOrWith == "D"){
      var newBalance = (balance + money).toFixed(2);
      $("#" + accountType + ">div.balance").html("$" + newBalance);
    }
    else if (depOrWith == "W") {
      if (money <= balance){
        var newBalance = (balance - money).toFixed(2)
        $("#" + accountType + ">div.balance").html("$" + newBalance);
      }
      else if(accountType == "checking"){ //overdraft protection
        var savedBalance = getBalance("savings");
        if (savedBalance + (balance - money) >= 0){
          newBalance = parseFloat(0).toFixed(2);
          $("#checking>div.balance").html("$" + newBalance);
          savedBalance = (savedBalance + (balance - money)).toFixed(2);
          $("#savings>div.balance").html("$" + savedBalance);
          isBalanceZero("savings", "W", savedBalance);
        }
      }
    }
    return newBalance;
  }

  function isBalanceZero(accountType, depOrWith, myBalance){
    if(depOrWith == "D"){
      if ($("#"+accountType+">div.balance").attr("class").indexOf("zero") > -1 && parseFloat(myBalance) > 0) {
        $("#"+accountType+">div.balance").removeClass("zero");
      }
    }
    else if(depOrWith == "W"){
      if($("#"+accountType+">div.balance").attr("class").indexOf("zero") == -1 && parseFloat(myBalance) == 0) {
        $("#"+accountType+">div.balance").addClass("zero");
      }
    }
  }


  $(".balance").addClass("zero");
  //listen for click event on checking account deposit button
  var checkingDepButton = $("#checking>input.deposit");
  checkingDepButton.on("click", addToChecking);

  function addToChecking(){

    //get user input from field
    var moneyValue = getFieldInput("checking");
    if (moneyValue >= 0) { //If user entered a non-negative value
      //Get checking balance
      var checkingBalance = getBalance("checking");
      //Add user input to balance
      checkingBalance = changeBalance(checkingBalance, moneyValue, "checking", "D");
      //If checking has a class of zero and balance != 0 remove class zero
      isBalanceZero("checking", "D", checkingBalance);
    }
    clearField("checking");
  }


    //listen for click even on cheking account withdrawl button
    var checkingWDButton = $("#checking>input.withdraw");
    checkingWDButton.on("click", takeFromChecking);

    function takeFromChecking(){
      //get user input from field
      var moneyValue = getFieldInput("checking");
      if (moneyValue >= 0) {
        //get checking balance
        var checkingBalance = getBalance("checking");
        //if user input is not greater than balance, subtract user input from balance
        checkingBalance = changeBalance(checkingBalance, moneyValue, "checking", "W");
        //If checking does not have a class of 0 and balance == 0 add class zero
          isBalanceZero("checking", "W", checkingBalance);
      }
      clearField("checking");
    }


    //listen for click event on savings account deposit button
    var savingsDepButton = $("#savings>input.deposit");
    savingsDepButton.on("click", addToSavings);

    function addToSavings(){

      //get user input from field
      var moneyValue = getFieldInput("savings");
      if (moneyValue >= 0) { //If user entered a non-negative value
        //Get savings balance
        var savingsBalance = getBalance("savings");
        //Add user input to balance
        savingsBalance = changeBalance(savingsBalance, moneyValue, "savings", "D");
        //If savings has a class of zero and balance != 0 remove class zero
        isBalanceZero("savings", "D", savingsBalance);
      }
      clearField("savings");
    }


    //listen for click even on savings account withdrawl button
    var savingsWDButton = $("#savings>input.withdraw");
    savingsWDButton.on("click", takeFromSavings);

    function takeFromSavings(){
      //get user input from field
      var moneyValue = getFieldInput("savings");
      if (moneyValue >= 0) { //If user entered a non-negative value
        //get savings balance
        var savingsBalance = getBalance("savings");
        //if user input is not greater than balance, subtract user input from balance
        savingsBalance = changeBalance(savingsBalance, moneyValue, "savings", "W");
        //If checking does not have a class of 0 and balance == 0 add class zero
        isBalanceZero("savings", "W", savingsBalance);
      }
      clearField("savings");
    }
});
