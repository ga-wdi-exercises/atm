 /*
An application to keep track of the checking and savings balances.

 User actions
 - As a user, I want to deposit money into one of the bank accounts
 - As a user, I want to withdraw money from one of the bank accounts

 Validation / Overdraft protection
   + If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
   + If the withdrawal amount is more than the combined account balance, ignore it.

 Presentation
 - As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
  */


/**
 * A class that represents user account.
 */
function Account() {

  // State
  this.balances = {
    checking: 0,
    savings: 0
  };

  this.deposit = function( type, amount ) {
    this.balances[ type ] += parseInt( amount );
  }

  this.withdraw = function ( type, amount ) {

    // Reject if there is not enough fund.
    if ( ! hasEnoughFund( amount ) ) { return false; }

    if ( this.balances[ type ] > amount ) {
      // Only from checking account.
      this.balances.checking -= amount;
    } else {
      // From the specified first.
      this.balances[ type ] = 0;
      // Then from the other.
      var theOtherType = ( type === "checking" ) ? "savings" : "checking";
      this.balances[ theOtherType ] -= ( amount - this.balances[ type ]  );
    }

    return true;
  }


  //---
  // Private methods.
  //---


  function validateInput( amount ) {
    return /^\d+(\d+(\.\d+)?)$/.test( amount );
  }

  function getTotalBalances() {
    return this.balances.checking + this.balances.savings;
  }

  function hasEnoughFund( amount ) {
    return getTotalBalances() > amount;
  }
}


/**
 * A controller of this application.
 */
function initAtm( account ) {

  // Constants
  var AMOUNT_PREFIX = "$";

  // References to the elements.
  var checkingMachine = {
    input:    document.querySelector( '#checking .input' ),
    deposit:  document.querySelector( '#checking .deposit' ),
    withdraw: document.querySelector( '#checking .withdraw' ),
    balance:  document.querySelector( '#checking .balance' )
  };
  var savingsMachine = {
    input:    document.querySelector( '#savings .input' ),
    deposit:  document.querySelector( '#savings .deposit' ),
    withdraw: document.querySelector( '#savings .withdraw' ),
    balance:  document.querySelector( '#savings .balance' )
  };

  // Listen for click events.
  document.querySelector( '#checking' ).addEventListener( 'click', handleClick );
  document.querySelector( '#savings' ).addEventListener( 'click', handleClick );

  function handleClick( evt ) {

    switch ( evt.target ) {
      case checkingMachine.deposit:
        console.log("checkingMachine.deposit");
        var amount = getAmountInput( "checking" );
        account.deposit( "checking", amount );
        console.log(amount);
        break;
      case checkingMachine.withdraw:
        console.log("checking.withdraw");
        break;
      case savingsMachine.deposit:
        console.log("savingsMachine.deposit");
        var amount = getAmountInput( "savings" );
        account.deposit( "savings", amount );
        console.log(amount);
        break;
      case savingsMachine.withdraw:
        console.log("savingsMachine.withdraw");
    }

    updateUI();
  }

  function getAmountInput( type ) {
    var amount;

    if ( type === "checking" ) {
      amount = parseInt(checkingMachine.input.value);
    } else if ( type === "savings" ) {
      amount = parseInt(savingsMachine.input.value);
    }

    return amount;
  }

  function updateUI() {
    checkingMachine.balance.innerHTML = AMOUNT_PREFIX + account.balances.checking;
    savingsMachine.balance.innerHTML  = AMOUNT_PREFIX + account.balances.savings;
    checkingMachine.input.value = "";
    savingsMachine.input.value  = "";
  }
}


/**
 * Start the application when document is loaded.
 */
document.addEventListener( "DOMContentLoaded", function() {

  initAtm( new Account() );

});
