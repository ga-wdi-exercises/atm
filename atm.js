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
 */


$(document).ready(function(){
    // console.log("working")

    // check to see if console.log works on click.

    // set the div with a class of balance, inside #checking to 0
    
    // var previousBalance = 0

    // var deposit = function addMoney(userMoney, userBalance) {
    //    return userMoney + userBalance
    //}

    // var withdraw = function withdrawMoney(userMoney, userBalance) {
    //    return userMoney + userBalance
    //}

    // we don't want the balance to ever go negative cuz we a kind bank and all

    $(".deposit").on("click", function(){
        // console.log("Ya clicked me!")
     
        
        // return $(".balance").addMoney(userMoney, userBalance)
        // get the $
    })
    //$("input[type=button]").val("Withdraw").on("click", function(){
    //    return $(".balance").withdrawMoney(userMoney, userBalance)
    //})
});
