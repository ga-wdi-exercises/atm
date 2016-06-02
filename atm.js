var checkBal = 0;
var savBal = 0;
var checkDepo = 0;
var checkDraw = 0;
var txType;
var txType;
var txAmt = 0;

$(document).on("ready", function() {

// $("#checking").find(".deposit").on("click", function(){
//     checkDepo = parseInt($("#checking").find(".input").val());
//     checkBal = parseInt(checkBal + checkDepo);
//     $("#checking").find(".balance").text(checkBal);
//     // checkDepo = null;
//     $("#checking").find(".input").val("");
// });

// $("#checking").find(".withdraw").on("click", function(){
//     checkDraw = parseInt($("#checking").find(".input").val());
//     checkBal = parseInt(checkBal - checkDraw);
//     $("#checking").find(".balance").text(checkBal);
//     checkDraw = null;
//     $("#checking").find(".input").val("");
// });

// $(":button").on("click", function() {
//     txType = $(this).val();
//     txAcct = $(this).parent($(".class")).attr('id');
// })

$(":button").on("click", function() {
    txType = $(this).val();
    txAcct = $(this).parent($(".class")).attr('id');
    if (txAcct == "checking") {
        txAmt = parseInt($("#checking").find(".input").val());
        if (txType == "Deposit") {
            checkBal = parseInt(checkBal + txAmt);
            $("#checking").find(".balance").text(checkBal);
        }
        else {
            checkBal = parseInt(checkBal - txAmt);
            $("#checking").find(".balance").text(checkBal);
        }
        $("#checking").find(".input").val("");
    }
    else {
        txAmt = parseInt($("#savings").find(".input").val());
        if (txType == "Deposit") {
            savBal = parseInt(savBal + txAmt);
            $("#savings").find(".balance").text(savBal);
        }
        else {
            savBal = parseInt(savBal - txAmt);
            $("#savings").find(".balance").text(savBal);
        }
        $("#savings").find(".input").val("");
    }
    // txAmt = $(this).prevAll($(".input")).val();
})

});
