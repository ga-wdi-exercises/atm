$(document).ready(function(){


    var checkingBal = 0;
    var savingsBal = 0;

//Checking
//deposit
    $("#checking .deposit").on("click", function(){
        //amount in box, click deposit-adds val
        var checkingInput = $("#checking .input").val(); // assigning value of the input class inside of checking to variable checkingInput
        checkingBal = parseInt(checkingInput) + parseInt(checkingBal); //adding the value to the balance after parsing the string in checkingInput to a var
        $("#checking .balance").text(checkingBal); //changing the text of balance class in checking div to checkingBal

        $("#checking").removeClass("zero");
    });

//withdraw
    $("#checking .withdraw").on("click", function(){ //executes bottom when withdraw is clicked
        //amount in box withdraw-subtract val


        var checkingInput = $("#checking .input").val();

        var savingsBal = $("#savings .balance").text();
        var checkingBal = $("#checking .balance").text(); // lastly added to add the value of checking balance so it would recalculate the overdraft amt
        console.log(checkingBal);
        checkingInput = parseInt(checkingInput); //changing the string to integer
        checkingBal = parseInt(checkingBal);
        savingsBal = parseInt(savingsBal);
                console.log(checkingBal);
//OVERDRAFT PROTECTION
        var overdraft = Math.abs(checkingInput - checkingBal); //calculates absolute value of overdraft amt
        if (checkingInput > checkingBal){
            if (checkingInput > checkingBal + savingsBal){ //if the amount to withdraw is more than the total savings and checking, then you cant do it
                console.log("not enough money in checking and saving balances");
            }
            else if (overdraft <= savingsBal){
                console.log("Overdraft protection initialized");
                console.log("overdraft is "+overdraft);
                $("#checking .balance").text('0');
                $("#checking").addClass("zero");
                savingsBal = savingsBal - (overdraft); //subtracting the value from savingsBal
                $("#savings .balance").text(savingsBal);
                    if (savingsBal === 0){ //if withdraw is 0, turn background red. this if goes inside the above if because it only works when there is a proper withdraw
                            $("#savings").addClass("zero");
                    }
                }
        }
        else if (checkingBal >= checkingInput){
            checkingBal = checkingBal - parseInt(checkingInput); //subtracting the value from checkingBal
            $("#checking .balance").text(checkingBal);
            if (checkingBal === 0){ //if withdraw is 0, turn background red. this if goes inside the above if because it only works when there is a proper withdraw
                    $("#checking").addClass("zero");
                    console.log("GOT NO MONEY IN THE BANK");
                }
            else if (checkingBal > 0){
                    $("#checking").removeClass("zero");
                    console.log("removing zero class");
            }
        }

    });


//savings
//deposit
    $("#savings .deposit").on("click", function(){
        //amount in box, click deposit-adds val
        var savingsInput = $("#savings .input").val();
        savingsBal = parseInt(savingsInput) + savingsBal; //adding the value to the balance after parsing the string in savingsInput to a var
        $("#savings .balance").text(savingsBal);
        console.log(savingsBal);
        $("#savings").removeClass("zero");
    });

//withdraw
    $("#savings .withdraw").on("click", function(){
        //amount in box withdraw-subtract val
        var savingsInput = $("#savings .input").val();
        if (savingsInput > savingsBal){
            console.log("not enough money in savings balance")
        }
        else{
            savingsBal = savingsBal - parseInt(savingsInput); //subtracting the value from savingsBal
            $("#savings .balance").text(savingsBal);
            console.log(savingsBal);
            if (savingsBal === 0){ //if withdraw is 0, turn background red. this if goes inside the above if because it only works when there is a proper withdraw
                    $("#savings").addClass("zero");
                }
                else if (checkingBal > 0){
                        $("#savings").removeClass("zero");
                        console.log("removing zero class");
                }
        }

    });

}); //overall load function close (this is the last bracket)
