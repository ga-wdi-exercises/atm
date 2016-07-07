$(document).ready(function() {
    $(".deposit:first").on('click', function(event) {
        event.preventDefault();
        console.log('I Work')
    });




});

//Pseudocode

//When specific account button pressed grab input
//if input is a number execute button task (deposit or Withdraw)
    //if deposit add money to balance div for respective account
        //add listener that checks balance to update color based on amount
    //if Withdraw ignore if balance is unsupported of value
        //if balance is within spec subtract money from balance div of respective account
        //have listener that checks updated balance to update color based on amount
