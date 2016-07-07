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
    console.log(balance, money, accountType, depOrWith);
    if (depOrWith == "D"){
      console.log("Hello");
      var newBalance = (balance + money).toFixed(2);
    }
    else if (depOrWith == "W") {
      console.log("Goodbye");
      if (money <= balance){
        var newBalance = (balance - moneyValue).toFixed(2)
    }
    }
    $("#" + accountType + ">div.balance").html("$" + newBalance);
    return newBalance;
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
      // checkingBalance = (checkingBalance + moneyValue).toFixed(2);
      // $("#checking>div.balance").html("$" + checkingBalance);
      checkingBalance = changeBalance(checkingBalance, moneyValue, "checking", "D");

      //If checking has a class of zero and balance != 0 remove class zero
      if($("#checking>div.balance").attr("class").indexOf("zero") > -1 && parseFloat(checkingBalance) > 0) {
        $("#checking>div.balance").removeClass("zero");
      }
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
        if (moneyValue <= checkingBalance){
          checkingBalance = (checkingBalance - moneyValue).toFixed(2)
          $("#checking>div.balance").html("$" + checkingBalance);
        //If checking does not have a class of 0 and balance == 0 add class zero
          if($("#checking>div.balance").attr("class").indexOf("zero") == -1 && parseFloat(checkingBalance) == 0) {
            $("#checking>div.balance").addClass("zero");
          }
        }
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
        savingsBalance = (savingsBalance + moneyValue).toFixed(2);
        $("#savings>div.balance").html("$" + savingsBalance);

        //If savings has a class of zero and balance != 0 remove class zero
        if($("#savings>div.balance").attr("class").indexOf("zero") > -1 && parseFloat(savingsBalance) > 0) {
          $("#savings>div.balance").removeClass("zero");
        }
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
        if (moneyValue <= savingsBalance){
          savingsBalance = (savingsBalance - moneyValue).toFixed(2)
          $("#savings>div.balance").html("$" + savingsBalance);
          //If checking does not have a class of 0 and balance == 0 add class zero
          if($("#savings>div.balance").attr("class").indexOf("zero") == -1 && parseFloat(savingsBalance) == 0) {
            $("#savings>div.balance").addClass("zero");
          }
        }
      }
      clearField("savings");
    }
});
