$(document).ready(function() {
    $(".deposit:first").on('click', function(event) {
        event.preventDefault();
        var depositAmount = parseFloat($('.input:first').val()).toFixed(2)
        if(!isNaN(depositAmount)){
            var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
            $('.balance:first').html('$' + (parseFloat(depositAmount)+currentBalance).toFixed(2));
            $('#entry')[0].reset();
        }
    });

    $(".withdraw:first").on('click', function(event) {
        event.preventDefault();
        var withdrawAmount = parseFloat($('.input:first').val()).toFixed(2)
        var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
        if(!isNaN(withdrawAmount) && currentBalance > 0){
            $('.balance:first').html('$' + (currentBalance - parseFloat(withdrawAmount)).toFixed(2));
            $('#entry')[0].reset();
        }
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
