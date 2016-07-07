$(document).ready(function(){

  $(".balance").addClass("zero");
  //listen for click event on checking account deposit button
  var checkingDepButton = $("#checking>input.deposit");
  checkingDepButton.on("click", addToChecking);
  function addToChecking(){

    //get user input from field
    var checkingField = $("#checking>input.input")
    var moneyValue = checkingField.val();
    moneyValue = parseFloat(moneyValue);
    //Get checking balance
    checkingBalance = $("#checking>div.balance").html().split("$")[1];
    checkingBalance = parseFloat(checkingBalance);
    //Add user input to balance
    checkingBalance = (checkingBalance + moneyValue).toFixed(2);
    console.log(checkingBalance, typeof(checkingBalance));
    $("#checking>div.balance").html("$" + checkingBalance);

    //If checking has a class of zero and balance != 0 remove class zero
    if($("#checking>div.balance").attr("class").indexOf("zero") > -1 && parseFloat(checkingBalance) > 0) {
      $("#checking>div.balance").removeClass("zero");
    }
    //clear field
    checkingField.val("");
  }

    //listen for click even on cheking account withdrawl button
      //get user input from field
      //if user input is not greater than balance, subtract user input from balance
      //If checking does not have a class of 0 and balance == 0 add class zero




});
