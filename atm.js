$(document).ready(function(){
    console.log("JS Connected");
    // Get user input: text field, button press
    $('#checking .deposit').click( function () {
        transact('#checking', 1);

    });

    $('#checking .withdraw').click( function () {
        transact('#checking', -1);
    });

    $('#savings .deposit').click( function () {
        transact('#savings', 1);
    });

    $('#savings .withdraw').click( function () {
        transact('#savings', -1);
    });







    // Check for validity: number, non-negative.

    // Convert balances into number

    // Add or subtract transaction from relevant account

    // Present new balances
    function transact (acctClass, signMultiplier) {
        // acctClass specifies the class of the account to be modified. It will already have
        //   a . or # prepended
        // signMultiplier shall be 1 or -1, to adjust for deposit and withdrawal

        // Get the amount of the transaction
        var amount = getTransactionAmount(acctClass);
        if (amount == false) {
            // Input is not valid
            return 0;
        }

        // If the input is valid, adjust the balance
        amount *= signMultiplier;
        console.log("Within fn transact: amount = "+ amount);
        adjustBalance(acctClass, amount);
    }
    
    function getTransactionAmount(acctClass) {
        // acctClass specifies the class of the account to be modified. It will already have
        //   a . or # prepended

        // Get the string representing balance and coerce it to float
        var rawAmount = $(acctClass + " .input").val();
        var amount = parseFloat(rawAmount);

        // Return the amount if we have a number, else return false
        console.log("Within fn getTransactionAmount: amount = "+ amount);
        if (isNaN(amount) == false) {
            return amount;
        } else {
            return false;
        }
    }

    function adjustBalance(acctClass, amount) {
        // acctClass specifies the class of the account to be modified. It will already have
        //   a . or # prepended
        // amount will be a float, positive or negative depending on transaction type

        // Get current account balance
        var rawBalance = $(acctClass + ' .balance').html();
        var balance = parseFloat(rawBalance.split('$')[1]);
        console.log(balance);

        // Get the new balance
        balance += amount;

        // If the new balance is non-negative, allow it to post;
        if ( balance >= 0) {
            $(acctClass + ' .balance').html("$" + balance.toFixed(2));
        }

        // If the new balance is zero, give the div the .zero class
        if (balance > 0) {
            $(acctClass).attr('class', 'account');
        } else {
            $(acctClass).attr('class', 'account zero');
        }
    }
});



// Get user input: text field, button press

// Check for validity: number, non-negative.

// Get current account balances

// Convert balances into number

// Add or subtract transaction from relevant account

// Present new balances