var checkBal = 0;
var savBal = 0;
var checkDepo = 0;
var checkDraw = 0;
var txType;
var txType;
var txAmt = 0;
var draftCheck;

$(document).on("ready", function() {

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// THIS IS THE ORIGINAL CODE

// $("#checking").find(".deposit").on("click", function(){
//     checkDepo = parseInt($("#checking").find(".input").val());
//     checkBal = parseInt(checkBal + checkDepo);
//     $("#checking").find(".balance").text(checkBal);
//     // checkDepo = null;
//     $("#checking").find(".input").val("");
// });
//
// $("#checking").find(".withdraw").on("click", function(){
//     checkDraw = parseInt($("#checking").find(".input").val());
//     checkBal = parseInt(checkBal - checkDraw);
//     $("#checking").find(".balance").text(checkBal);
//     checkDraw = null;
//     $("#checking").find(".input").val("");
// });
//
// $(":button").on("click", function() {
//     txType = $(this).val();
//     txAcct = $(this).parent($(".class")).attr('id');
// })
//
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// THIS IS THE FUNCTIONING CODE

// $(":button").on("click", function() {
//     txType = $(this).val();
//     txAcct = $(this).parent($(".class")).attr('id');
//     if (txAcct == "checking") {
//         txAmt = parseInt($("#checking").find(".input").val());
//         if (txType == "Deposit") {
//             checkBal = parseInt(checkBal + txAmt);
//             $("#checking").find(".balance").text(checkBal);
//         }
//         else {
//             checkBal = parseInt(checkBal - txAmt);
//             $("#checking").find(".balance").text(checkBal);
//         }
//         $("#checking").find(".input").val("");
//     }
//     else {
//         txAmt = parseInt($("#savings").find(".input").val());
//         if (txType == "Deposit") {
//             savBal = parseInt(savBal + txAmt);
//             $("#savings").find(".balance").text(savBal);
//         }
//         else {
//             savBal = parseInt(savBal - txAmt);
//             $("#savings").find(".balance").text(savBal);
//         }
//         $("#savings").find(".input").val("");
//     }
// })

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// THIS IS TEST CODE BELOW

function atm () {
    firstCat ();
    $(".account").find(".input").val("")
};

function firstCat () {
    if (txType == "Deposit") {
        draftCheck = "checkOrigin";
        deposit();
    }
    else {
        draftCheck = "savOrigin";
        withdraw();
    }
};

function deposit () {
    if (txAcct == "checking") {
        checking ();
    }
    else {
        savings ();
    }
};

function withdraw () {
    txAmt = txAmt * (-1);
    if (txAcct == "checking") {
        checking ();
    }
    else {
        savings ();
    }
};

function checking () {
    // txAmt = parseInt($("#checking").find(".input").val());
    if (parseInt(checkBal + txAmt) < 0) {
        overCheck ();
    }
    else {
        checkBal = parseInt(checkBal + txAmt);
        $("#checking").find(".balance").text(checkBal);
    }
};

function savings () {
    // txAmt = parseInt($("#savings").find(".input").val());
    if (parseInt(checkBal + txAmt) < 0) {
        overCheck ();
    }
    else {
        savBal = parseInt(savBal + txAmt);
        $("#savings").find(".balance").text(savBal);
    }
};

function overCheck () {
    if (parseInt(checkBal + savBal + txAmt) >= 0) {
        if (draftCheck == "checkOrigin") {
            var difference = txAmt + checkBal;
            checkBal = 0;
            savBal = savBal + difference;
        }
        else {
            var difference = txAmt + savBal;
            savBal = 0;
            checkBal = checkBal + difference;
        }
        $("#checking").find(".balance").text(checkBal);
        $("#savings").find(".balance").text(savBal);
        $(".account").find(".input").val("");
    }
    else {
        $(".account").find(".input").val("");
    }
};

$(":button").on("click", function() {
    txType = $(this).val();
    txAcct = $(this).parent($(".class")).attr('id');
    txAmt = parseInt($(this).parent($(".account")).find(".input").val());
    atm();
});

});
