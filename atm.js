$(document).ready(function(){
//I want to deposit money into my checking account

    //gets the jquery deposit button element
    var checkingDepositBtn = $("#checkingDepositBtn");

    //gets the jquery withdraw button element
    var checkingWithdrawBtn = $("#checkingWithdrawBtn");

    //getting the jquery checking balance element.
    var checkingDisplay = $("#checkingAccount >.balance");

    //getting the current value of the balance
    var checkingAmount = parseInt(checkingDisplay.html().replace("$", ""));

    //Same for savings
    var savingsDepositBtn = $("#savingsDepositBtn");

    var savingsWithdrawBtn = $("#savingsWithdrawBtn");

    var savingsDisplay = $("#savingsAccount >.balance");

    var savingsAmount = parseInt(savingsDisplay.html().replace("$", ""));

    var overdraft = checkingAmount + savingsAmount;


    //create function to call in click
    function checkingAddMoney(){
        //grab userInput
        var userInput = parseInt($("#checkingField").val());
        //add input to checkingAmount
        checkingAmount += userInput;
        //updating the display
        checkingDisplay.html("$" + checkingAmount);
        //clear value in input box
        $("#checkingField").val("");
    }

    function checkingSubMoney(){
        //grab userInput
        var userInput = parseInt($("#checkingField").val());
        if(checkingAmount >= userInput){
            //sub input from checkingAmount
            checkingAmount -= userInput;
            //updating the display
            checkingDisplay.html("$" + checkingAmount);
        }

        //clear value in input box
        $("#checkingField").val("");
    }

    function savingsAddMoney(){
        //grab userInput
        var userInput = parseInt($("#savingsField").val());
        //add input to savingsAmount
        savingsAmount += userInput;
        //updating the display
        savingsDisplay.html("$" + savingsAmount);
        //clear value in input box
        $("#savingsField").val("");
    }

    function savingsSubMoney(){
        //grab userInput
        var userInput = parseInt($("#savingsField").val());
        if(savingsAmount >= userInput){
            //sub input from savingsAmount
            savingsAmount -= userInput;
            //updating the display
            savingsDisplay.html("$" + savingsAmount);
        }



        //clear value in input box
        $("#savingsField").val("");
    }




    checkingDepositBtn.on("click", checkingAddMoney);

    checkingWithdrawBtn.on("click", checkingSubMoney);

    savingsDepositBtn.on("click", savingsAddMoney);

    savingsWithdrawBtn.on("click", savingsSubMoney);
});
