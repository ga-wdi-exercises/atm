$(document).ready(function(){
    var $body =  $('body');
    var $titleBOG = $('.title');

    $body.css('background-color', 'red');


    // Create a savings object and a checking object with a balance property, a withdraw method and a deposit method.

    // Create a deposit function in the global scope. A reference to this function can be called within a checking and saving object.

    // Create a withdraw function in the global scope. The withdraw function should prevent a user from withdrawing more money than is in their current balance unless they have enough money in both their savings and checking to cover the transaction. If so, the balance in the checking account should drop to $0 and the remaining amount should be taken from savings. If the amount the user is attempting to withdraw exceeds the balance of both accounts, display an error message. A reference to this function can be called within the checking and savings object.

});
