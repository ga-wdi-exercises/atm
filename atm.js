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
    if (moneyValue >= 0) { //If user entered a non-negative value
      //Get checking balance
      var checkingBalance = $("#checking>div.balance").html().split("$")[1];
      checkingBalance = parseFloat(checkingBalance);
      //Add user input to balance
      checkingBalance = (checkingBalance + moneyValue).toFixed(2);
      //console.log(checkingBalance, typeof(checkingBalance));
      $("#checking>div.balance").html("$" + checkingBalance);

      //If checking has a class of zero and balance != 0 remove class zero
      if($("#checking>div.balance").attr("class").indexOf("zero") > -1 && parseFloat(checkingBalance) > 0) {
        $("#checking>div.balance").removeClass("zero");
      }
    }
    //clear field
    checkingField.val("");
  }

    //listen for click even on cheking account withdrawl button
    var checkingWDButton = $("#checking>input.withdraw");
    checkingWDButton.on("click", takeFromChecking);
    function takeFromChecking(){
      //get user input from field
      var checkingField = $("#checking>input.input")
      var moneyValue = checkingField.val();
      moneyValue = parseFloat(moneyValue);

      if (moneyValue >= 0) {
        //get checking balance
        var checkingBalance = $("#checking>div.balance").html().split("$")[1];
        checkingBalance = parseFloat(checkingBalance);

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
      // clear field
      checkingField.val("");
    }





});
