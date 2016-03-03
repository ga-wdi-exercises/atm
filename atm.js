$(document).ready(function(){
//I want to deposit money into my checking account
    //
    //get innerhtml from balance div



    var checkingDepositBtn = $("#checkingDepositBtn");

    var checkingDisplay = $("#checkingAccount >.balance")

    var checkingAmount = parseInt(checkingDisplay.html().replace("$", ""));

    function addMoney(){
        //grab userInput
        var userInput = parseInt($("#checkingField").val());
        //add checkingAmount
        checkingAmount += userInput;
        checkingDisplay.html("$" + checkingAmount);
    }

    checkingDepositBtn.on("click", addMoney)

});
