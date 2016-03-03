$(document).ready(function(){
//I want to deposit money into my checking account
    //
    //get innerhtml from balance div


    //gets the jquery deposit button element
    var checkingDepositBtn = $("#checkingDepositBtn");

    var checkingWithdrawBtn = $("#checkingWithdrawBtn");

    //getting the jquery checking balance element.
    var checkingDisplay = $("#checkingAccount >.balance");

    //getting the current value of the balance
    var checkingAmount = parseInt(checkingDisplay.html().replace("$", ""));

    //create function to call in click
    function addMoney(){
        //grab userInput
        var userInput = parseInt($("#checkingField").val());
        //add input to checkingAmount
        checkingAmount += userInput;
        //updating the display
        checkingDisplay.html("$" + checkingAmount);
        //clear value in input box
        $("#checkingField").val("");
    }

    function subtractMoney(){
        //grab userInput
        var userInput = parseInt($("#checkingField").val());
        //add input to checkingAmount
        checkingAmount -= userInput;
        //updating the display
        checkingDisplay.html("$" + checkingAmount);
        //clear value in input box
        $("#checkingField").val("");
    }


    checkingDepositBtn.on("click", addMoney);

    checkingWithdrawBtn.on("click", subtractMoney);
});
