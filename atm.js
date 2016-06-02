$(document).ready(function(){


    var checkingBal = 0;
    var savingsBal = 0;

//Checking
    //deposit
    $("#checking .deposit").on("click", function(){
        //amount in box, click deposit-adds val
        console.log(checkingBal);
        var checkingInput = $("#checking .input").val(); // assigning value of the input class inside of checking to variable checkingInput
        checkingBal = parseInt(checkingInput) + checkingBal; //adding the value to the balance after parsing the string in checkingInput to a var
        $("#checking .balance").text(checkingBal); //changing the text of balance class in checking div to checkingBal
    });

    //withdraw
    $("#checking .withdraw").on("click", function(){
        //amount in box withdraw-subtract val
        console.log(checkingBal);

        var checkingInput = $("#checking .input").val();
        if (checkingInput > checkingBal){
            console.log("not enough money in checking balance")
        }
        else{
            checkingBal = checkingBal - parseInt(checkingInput); //subtracting the value from checkingBal
            $("#checking .balance").text(checkingBal);
            if (checkingBal === 0){ //if withdraw is 0, turn background red. this if goes inside the above if because it only works when there is a proper withdraw
                    $("#checking").css("background", "red");
                }
        }
    });


//savings
    //deposit
    $("#savings .deposit").on("click", function(){
        //amount in box, click deposit-adds val
        console.log(savingsBal);
        var savingsInput = $("#savings .input").val();
        savingsBal = parseInt(savingsInput) + savingsBal; //adding the value to the balance after parsing the string in savingsInput to a var
        $("#savings .balance").text(savingsBal);
    });

    //withdraw
    $("#savings .withdraw").on("click", function(){
        //amount in box withdraw-subtract val
        console.log(savingsBal);

        var savingsInput = $("#savings .input").val();
        if (savingsInput > savingsBal){
            console.log("not enough money in savings balance")
        }
        else{
            savingsBal = savingsBal - parseInt(savingsInput); //subtracting the value from savingsBal
            $("#savings .balance").text(savingsBal);
            if (savingsBal === 0){ //if withdraw is 0, turn background red. this if goes inside the above if because it only works when there is a proper withdraw
                    $("#savings").css("background", "red");
                }
        }

    });

}); //overall load function close (this is the last bracket)
