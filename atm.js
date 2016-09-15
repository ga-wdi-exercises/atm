/* 
 * Boil the ocean one ounce at a time.
 *
 * This ATM allows a user to deposit and withdraw money
 * - user chooses to deposit into Checking or Savings by clicking into input
 * field. Event is triggered!!!
 * - user can now set the dollar amount by typing in a number value.
 * - user chooses to deposit or withdraw
 * - balance is stored
 * - balance number window reflects the new value resulting in the user's action
 * - addition operator
 * - don't let the user go negative
 * - checking vs savings and then nested in, depositing vs withdrawing
 */


$(document).ready(function(){
    // console.log("working")

    // check to see if console.log works on click.

    // set the div with a class of balance, inside #checking to 0
    
    // my variables
    var previousBalance = 0
    var userMoney = 25

    $("#checking .balance").text("$" + (userMoney + previousMoney))

    var newBalance = ""
    
    // my events and functions
    var deposit = 
        //some code that gets userMoney
        

        // code that adds
        function addMoney(userMoney, previousBalance) {
        var newBalance = userMoney + previousBalance

        // code that changes the displayed balance
        $("#checking div.balance").text(newBalance)
    }

    // var withdraw = function withdrawMoney(userMoney, previousBalance) {
    //    return userMoney + userBalance
    //}

    // my result
    $(".deposit").on("click", deposit)
        // console.log("Ya clicked me!")
        
        // return $(".balance").addMoney(userMoney, userBalance)
        // get the $

    //$("input[type=button]").val("Withdraw").on("click", function(){
    //    return $(".balance").withdrawMoney(userMoney, userBalance)
    //})
});
