function addRedBalance(selector){
    if(parseFloat($(selector).html().split('$')[1])==0){
        $(selector).addClass("zero")
    }
}
function removeRedBalance(selector){
    if(parseFloat($(selector).html().split('$')[1])!==0){
        $(selector).removeClass('zero')
    }
}
$(document).ready(function() {
    addRedBalance(".balance");
    $('form').submit(function(event) {
        event.preventDefault();
    });
    $(".deposit:first").on('click', function(event) {
        var depositAmount = parseFloat($('.input:first').val()).toFixed(2)
        if(!isNaN(depositAmount)){
            var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
            $('.balance:first').html('$' + (parseFloat(depositAmount)+currentBalance).toFixed(2));
            removeRedBalance(".balance:first");
            $('.entry:first')[0].reset();
        }
    });
    $(".withdraw:first").on('click', function(event) {
        var withdrawAmount = parseFloat($('.input:first').val()).toFixed(2)
        var currentBalance = parseFloat($('.balance:first').html().split('$')[1])
        var difference = currentBalance - parseFloat(withdrawAmount)
        var saveBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
        if(!isNaN(withdrawAmount) && difference >= 0){
            $('.balance:first').html('$' + (currentBalance - parseFloat(withdrawAmount)).toFixed(2));
            addRedBalance(".balance:first");
            $('.entry:first')[0].reset();
        }else if(!isNaN(withdrawAmount) && difference < 0 && saveBalance >= (difference*-1)) {
                var protectionAmount = ((currentBalance - withdrawAmount) * -1).toFixed(2)
                var savingsAmount = parseFloat($('.balance:eq(1)').html().split('$')[1])
                $('.balance:eq(1)').html('$'+ (savingsAmount - parseFloat(protectionAmount)).toFixed(2))
                $('.balance:first').html('$0.00')
                addRedBalance(".balance:first");
                addRedBalance(".balance:eq(1)");
                alert('Careful! Overdraft Protection Used! $' + protectionAmount + ' removed from savings')
                $('.entry:first')[0].reset();
        }else{
            alert("You're Poor!...or you didn't put in an ammount to remove =(")
        }
    });
    $(".deposit:eq(1)").on('click', function(event){
        var depositAmount = parseFloat($('.input:eq(1)').val()).toFixed(2)
        if(!isNaN(depositAmount)){
            var currentBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
            $('.balance:eq(1)').html('$' + (parseFloat(depositAmount)+currentBalance).toFixed(2));
            removeRedBalance('.balance:eq(1)')
            addRedBalance('.balance:eq(1)');
            $('.entry:eq(1)')[0].reset();
        }
    });
    $(".withdraw:eq(1)").on('click', function(event) {
        var withdrawAmount = parseFloat($('.input:eq(1)').val()).toFixed(2)
        var currentBalance = parseFloat($('.balance:eq(1)').html().split('$')[1])
        var difference = currentBalance - parseFloat(withdrawAmount)
        if(!isNaN(withdrawAmount) && difference >= 0){
            $('.balance:eq(1)').html('$' + (currentBalance - parseFloat(withdrawAmount)).toFixed(2));
            $('.entry:eq(1)')[0].reset();
        } else {
            alert('No Funds In Savings!')
        }
    });
});
