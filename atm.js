function addThis(selector){
    $(selector).addClass(
        function(index,currentClass){
            var addedClass;
            if(parseFloat($(selector).html().split('$')[1])==0){
                addedClass = "zero";
            }
            return addedClass;
        }
    )
}

function removeThis(selector){
    $(selector).removeClass(
        function(index,currentClass){
            var removedClass;
            if(parseFloat($(selector).html().split('$')[1])!==0){
                removedClass = "zero";
            }
            return removedClass;
        }
    )
}
$(document).ready(function() {
    //implements the zero class on start
    addThis(".balance");

    //prevent enter from reloading page
    $('form').submit(function(e) {
        e.preventDefault();
    });

    //deposit function checking
    $(".deposit:first").on('click', function(event) {
        event.preventDefault();
        var depositAmount = parseFloat($('.input:first').val()).toFixed(2)
        if(!isNaN(depositAmount)){
            var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
            $('.balance:first').html('$' + (parseFloat(depositAmount)+currentBalance).toFixed(2));
            addThis(".balance:first");
            removeThis(".balance:first");
            $('.entry:first')[0].reset();
        }
    });

    //withdraw function checking
    $(".withdraw:first").on('click', function(event) {
        event.preventDefault();
        var withdrawAmount = parseFloat($('.input:first').val()).toFixed(2)
        var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
        var difference = currentBalance - parseFloat(withdrawAmount)
        var saveBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
        if(!isNaN(withdrawAmount) && difference >= 0){
            $('.balance:first').html('$' + (currentBalance - parseFloat(withdrawAmount)).toFixed(2));
            addThis(".balance:first");
            removeThis(".balance:first");
            $('.entry:first')[0].reset();
            //overdraft protection logic
        } else if (!isNaN(withdrawAmount) && difference < 0 && saveBalance > (difference*-1)) {
            if(parseFloat($('.balance:eq(1)').html().split('$')[1])>0){
                var protectionAmount = ((currentBalance - withdrawAmount) * -1).toFixed(2)
                var savingsAmount = parseFloat($('.balance:eq(1)').html().split('$')[1])
                $('.balance:eq(1)').html('$'+ (savingsAmount - parseFloat(protectionAmount)).toFixed(2))
                $('.balance:first').html('$0.00')
                addThis(".balance:first");
                addThis(".balance:eq(1)");
            }
        } else {
            alert("You're Poor")
        }
    });

    //deposit savings function
    $(".deposit:eq(1)").on('click', function(event) {
        event.preventDefault();
        var depositAmount = parseFloat($('.input:eq(1)').val()).toFixed(2)
        if(!isNaN(depositAmount)){
            var currentBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
            $('.balance:eq(1)').html('$' + (parseFloat(depositAmount)+currentBalance).toFixed(2));
            removeThis('.balance:eq(1)')
            addThis('.balance:eq(1)');
            $('.entry:eq(1)')[0].reset();
        }
    });

    //withdraw savings function
    $(".withdraw:eq(1)").on('click', function(event) {
        event.preventDefault();
        var withdrawAmount = parseFloat($('.input:eq(1)').val()).toFixed(2)
        var currentBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
        var difference = currentBalance - parseFloat(withdrawAmount)
        if(!isNaN(withdrawAmount) && difference >= 0){
            $('.balance:eq(1)').html('$' + (currentBalance - parseFloat(withdrawAmount)).toFixed(2));
            $('.entry:eq(1)')[0].reset();
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
