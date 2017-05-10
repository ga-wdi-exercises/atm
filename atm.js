var savings;
var checking;
var $alert;

$(document).ready(function(){
    var $body =  $('body');
    var $titleBOG = $('.title');
    $alert = $('#alert');

    $body.css('background-color', 'red');

    // Create a savings object and a checking object with a balance property, a withdraw method and a deposit method.

    // Savings Object and DOM variables
    savings = {
        input: 0,
        balance: 0,
        deposit: deposit,
        withdraw: withdraw
    }

    var $savingsInput = $('#savings .input');
    var $savingsDeposit = $('#savings .deposit');
    var $savingsWithdraw = $('#savings .withdraw');
    var $savingsBalance = $('#savings .balance');

    // Savings methods

    $savingsDeposit.click(function() {
        savings.input = parseInt($savingsInput.val());
        savings.deposit(savings.input);
        $savingsBalance.text(`$${parseInt(savings.balance)}`);
    });
    $savingsWithdraw.click(function() {
        savings.input = parseInt($savingsInput.val());
        savings.withdraw(savings.input);
        $savingsBalance.text(`$${savings.balance}`);
    })

    // Checking Object and DOM variables
    checking = {
        input: 0,
        balance: 0,
        deposit: deposit,
        withdraw: withdraw
    }

    var $checkingInput = $('#checking .input');
    var $checkingDeposit = $('#checking .deposit');
    var $checkingWithdraw = $('#checking .withdraw');
    var $checkingBalance = $('#checking .balance');

    // Checking methods
    $checkingDeposit.click(function() {
        checking.input = parseInt($checkingInput.val());
        checking.deposit(checking.input);
        $checkingBalance.text(`$${parseInt(checking.balance)}`);
    });

    $checkingWithdraw.click(function() {
        checking.input = parseInt($checkingInput.val());
        checking.withdraw(checking.input);
        $checkingBalance.text(`$${checking.balance}`);
    })


    // Create a deposit function in the global scope. A reference to this function can be called within a checking and saving object.
    function deposit(depositAmount) {
        this.balance += depositAmount;
    }
    // Create a withdraw function in the global scope. The withdraw function should prevent a user from withdrawing more money than is in their current balance unless they have enough money in both their savings and checking to cover the transaction. If so, the balance in the checking account should drop to $0 and the remaining amount should be taken from savings. If the amount the user is attempting to withdraw exceeds the balance of both accounts, display an error message. A reference to this function can be called within the checking and savings object.
    function withdraw(withdrawAmount) {
        if (this.balance - withdrawAmount >= 0) {
            this.balance -= withdrawAmount;
        } else if (checking.balance + savings.balance >= withdrawAmount) {
            var difference = withdrawAmount - checking.balance;
            checking.balance -= difference;
            console.log(withdrawAmount);
            console.log(difference);
            savings.balance -= difference;
        } else {
            setTimeout(function() {
                $alert.fadeIn('slow', function() {
                    $alert.removeClass('hide');
                });
                setTimeout(function() {
                    $alert.fadeOut('slow', function() {
                        $alert.addClass('hide');
                    });
                },3000);
            }, 0)
        }
    }
    function isBalanceZero(balance) {
        if (this.balance === 0) {
            addClass('');
        } else {
            removeClass
        }
    }
});
