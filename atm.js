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

  /**
   * Processes the deposit for the specified account type and amount.
   * @param  {[String]} type   either "checking" or "savings"
   * @param  {[String]} amount a numerical string
   * @return true if the transaction was successful, else false.
   */
  this.deposit = function( type, amount ) {

    // Reject if input is invalid.
    if ( ! this.isValidAmountFormat( amount ) ) {
      return false;
    }

    this.balances[ type ] += Number( amount );

    return true;
  }

  /**
   * Processes the withdrawal for the specified account type and amount.
   * @param  {[String]} type   either "checking" or "savings"
   * @param  {[String]} amount a numerical string
   * @return true if the transaction was successful, else false.
   */
  this.withdraw = function ( type, amount ) {

    // Reject if input is invalid or there is not enough fund.
    if ( ! this.isValidAmountFormat( amount ) ||
         ! this.hasEnoughFundForWithdrawal( amount ) ) {
      console.error( "Withdrawal rejected" );
      return false;
    }

    // Process the withdrawal based on the state of the acccount.
    if ( this.balances[ type ] >= amount ) {
      // Only from checking account.
      this.balances.checking -= amount;

    } else {
      // Take all the money from the specified account first.
      amount -= this.balances[ type ];  // Update the desired amount.
      this.balances[ type ] = 0;        // Empty this account's balance.

      // Then from the other.
      var theOtherType = ( type === "checking" )
                       ? "savings"
                       : "checking"
                       ;
      this.balances[ theOtherType ] -= amount;
    }

    return true;
  }

  /**
   * Validates the amount's format.
   * @param  {[String]} amount a numerical string
   * @return true if the format is valid, else false.
   */
  this.isValidAmountFormat = function( amount ) {
    return /\d+(\d+(\.\d+))?/.test( amount );
  }

  /**
   * Calculates the total balances of this account.
   * @return {[Number]}
   */
  this.getTotalBalances = function() {
    return this.balances.checking + this.balances.savings;
  }

  /**
   * @param  {[Number]} amount the desired amount to withdraw
   * @return true if the total amount is greater than or equal to the specified amount.
   */
  this.hasEnoughFundForWithdrawal = function( amount ) {
    return this.getTotalBalances() >= amount;
  }
}


/**
 * Initializes the controller of this application.
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

    // If the event occurs on one of the buttons, handle it appropriately.
    switch ( evt.target ) {
      case checkingMachine.deposit:
        var amount = getAmountInput( "checking" );
        account.deposit( "checking", amount );
        updateUI();
        break;
      case checkingMachine.withdraw:
        var amount = getAmountInput( "checking" );
        account.withdraw( "checking", amount );
        updateUI();
        break;
      case savingsMachine.deposit:
        var amount = getAmountInput( "savings" );
        account.deposit( "savings", amount );
        updateUI();
        break;
      case savingsMachine.withdraw:
        var amount = getAmountInput( "savings" );
        account.withdraw( "savings", amount );
        updateUI();
    }
  }

  /**
   * @param  {[String]} type   either "checking" or "savings"
   * @return {[Number]}
   */
  function getAmountInput( type ) {
    var amount;

    if ( type === "checking" ) {
      amount = Number( checkingMachine.input.value );
    } else if ( type === "savings" ) {
      amount = Number( savingsMachine.input.value );
    }

    console.log( "getAmountInput: ", amount );
    return amount;
  }

  function updateUI() {
    // Log error if the balance total gets lower than 0.
    if ( account.getTotalBalances() < 0 ) { console.error( "Error: A balance should not be negative" ); }

    // Update the balances on the UI.
    checkingMachine.balance.innerHTML = AMOUNT_PREFIX + account.balances.checking;
    savingsMachine.balance.innerHTML  = AMOUNT_PREFIX + account.balances.savings;

    // Clear the input fields.
    checkingMachine.input.value = "";
    savingsMachine.input.value  = "";

    console.log( "updateUI: ", account.balances );
  }
}


/**
 * Start the application when document is loaded.
 */
document.addEventListener( "DOMContentLoaded", function() {

  initAtm( new Account() );

});
