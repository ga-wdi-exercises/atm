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
 * A class that represents an ATM transaction service.
 */
function Atm() {

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


document.addEventListener( "DOMContentLoaded", function() {

  // Start a session.
  var atm = new Atm();

  // References to the elements.
  var checkingMachine = {
    deposit:  document.querySelector( '#checking .deposit' ),
    withdraw: document.querySelector( '#checking .withdraw' ),
    balance:  document.querySelector( '#checking .balance' )
  };
  var savingsMachine = {
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
        break;
      case checkingMachine.withdraw:
        console.log("checking.withdraw");
        break;
      case savingsMachine.deposit:
        console.log("savingsMachine.deposit");
        break;
      case savingsMachine.withdraw:
        console.log("savingsMachine.withdraw");
    }
  }

});
