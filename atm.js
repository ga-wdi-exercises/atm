
var txAcct;
var txType;
var txAmt = 0;

$(document).on("ready", function() {

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// THIS IS MY SUBMISSION CODE - 3RD ATTEMPT AT REFRACTORING

// Set starting balance to 0 and apply red color.
$(".balance").text("$0");
$(".balance").addClass("zero");

// Listen for a click on any of the four buttons.
$(":button").on("click", function() {

    // Verify the entry is an integer; if not, disregard.
    if (isNaN(parseInt($(this).siblings(".input").val()))) {
          $(".account").find(".input").val("");
          return;
    }

    // Immediately pull values for the transaction type (deposit/
    // withdrawal), account (checking/savings), and amount.
    txType = $(this).val();
    txAcct = $(this).parent().attr('id');
    txAmt = parseInt($(this).siblings(".input").val());

    // If the type is withdrawal, flip the amount to negative for
    // consistent addition throughout.
    if (txType == "Withdraw") {
        txAmt = txAmt * (-1);
    };

    // Remove the dollar signs prior to calculations.
    $("#checking").find(".balance").text($("#checking").find(".balance").text().replace("$",""));
    $("#savings").find(".balance").text($("#savings").find(".balance").text().replace("$",""));

    // Next, check for potential for overdraft, which leads to a
    // different function.
    if (overCheck() == true) {
        overDraft();
    };

    // If no overdraft, risk, proceed to normal atm operation.
    if (overCheck() != true) {
        atm();
    };

    // After either route, this function updates the color scheme
    // for zero balances.
    updateBals();

    // Finally, clear the text fields.
    $(".account").find(".input").val("");
});

// Check to see if the value of the transaction puts the account at
// risk of overdraft.
function overCheck() {
    if ((parseInt($("#"+txAcct).find($(".balance")).text()) + txAmt) < 0) {
        return true;
    }
}

// If no overdraft, simply update the balance to reflect the transaction.
function atm () {
    $("#"+txAcct).find($(".balance")).text(txAmt+parseInt($("#"+txAcct).find($(".balance")).text()));
}

// Is there is an overdraft, first check to see if the transaction
// is within the total of both accounts.
function overDraft () {
    if (0 <= parseInt(($("#"+txAcct).find($(".balance")).text())) + parseInt(($(".account").not("#"+txAcct).find($(".balance")).text())) + txAmt) {

        //If it is, calculate the overdraft amount of the origin account.
        var difference = txAmt + parseInt(($("#"+txAcct).find($(".balance")).text()));

        // Set the origin account to zero.
        $("#"+txAcct).find($(".balance")).text("0");

        // And subtract the difference from the target account.
        $(".account").not("#"+txAcct).find($(".balance")).text(parseInt(($(".account").not("#"+txAcct).find($(".balance")).text())) + difference);
    }

    // If the amount exceeds both accounts, you're SOL.
    else {
        alert("Insufficient funds.");
    }
};

// Remove the zero class by default, then add back if needed.
function updateBals () {
    $(".balance").removeClass("zero");
    if (parseInt($("#"+txAcct).find(".balance").text()) <= 0) {
        $("#"+txAcct).find(".balance").addClass("zero");
    }
    if (parseInt($(".account").not("#"+txAcct).find(".balance").text()) <= 0) {
        $(".account").not("#"+txAcct).find(".balance").addClass("zero");
    }

    // Finally, add back the dollar signs.
    $("#checking").find(".balance").text("$"+($("#checking").find(".balance").text()));
    $("#savings").find(".balance").text("$"+($("#savings").find(".balance").text()));
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// THIS WAS MY FIRST ATTEMPT AT REFRACTORING. IT'S MUCH LONGER
// BUT I FEEL MUCH EASIER TO READ AND UNDERSTAND. NOT COMMENTED
// AND I REMOVED ALL REQUIRED DECLARED VARIABLES.

// updateBals();
//
// $(":button").on("click", function() {
//     txType = $(this).val();
//     txAcct = $(this).parent($(".class")).attr('id');
//     txAmt = parseInt($(this).parent($(".account")).find(".input").val());
//     atm(txAcct, txType);
//     updateBals();
//     $(".account").find(".input").val("");
// });
//
// function atm (account, type) {
//     if (account == "checking" && type == "Deposit") {
//         checkingDeposit();
//     }
//     else if (account == "savings" && type == "Deposit") {
//         savingsDeposit();
//     }
//     else if (account == "checking" && type == "Withdraw") {
//         checkingWithdrawal();
//     }
//     else {
//         savingsWithdrawal();
//     }
// }
//
// function checkingDeposit() {
//     checkBal = parseInt(checkBal + txAmt);
// }
//
// function savingsDeposit() {
//     savBal = parseInt(savBal + txAmt);
// }
//
// function checkingWithdrawal() {
//     txAmt = txAmt * (-1);
//     if (parseInt(checkBal + txAmt) < 0) {
//         draftCheck = "checkOrigin";
//         overCheck ();
//     }
//     else {
//         checkBal = parseInt(checkBal + txAmt);
//     }
// }
//
// function savingsWithdrawal() {
//     txAmt = txAmt * (-1);
//     if (parseInt(savBal + txAmt) < 0) {
//         draftCheck = "savOrigin";
//         overCheck ();
//     }
//     else {
//         savBal = parseInt(savBal + txAmt);
//     }
// }
//
// function overCheck () {
//     if (parseInt(checkBal + savBal + txAmt) >= 0) {
//         if (draftCheck == "checkOrigin") {
//             var difference = txAmt + checkBal;
//             checkBal = 0;
//             savBal = savBal + difference;
//         }
//         else {
//             var difference = txAmt + savBal;
//             savBal = 0;
//             checkBal = checkBal + difference;
//         }
//         $("#checking").find(".balance").text("$"+checkBal);
//         $("#savings").find(".balance").text("$"+savBal);
//         $(".account").find(".input").val("");
//     }
//     else {
//         $(".account").find(".input").val("");
//         alert("Insufficient funds.");
//     }
// };
//
// function updateBals () {
//     $("#checking").find(".balance").text("$"+checkBal);
//     $("#savings").find(".balance").text("$"+savBal);
//     $(".balance").removeClass("zero");
//     if (checkBal <= 0) {
//         $("#checking .balance").addClass("zero");
//     }
//     if (savBal <= 0) {
//         $("#savings .balance").addClass("zero");
//     }
// }


// DOC READY END TAG
});
