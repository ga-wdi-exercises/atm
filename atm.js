// SPECS
// - Users can deposit money into one of the bank accounts
// - Users can withdraw money from one of the bank accounts
// - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// - The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)

$(document).ready(function(){

  function getBalance(accountType) {
    var balance = $(`#${accountType}`).find(".balance"); //get the current balance from the display
    var balanceValue = balance.html(); //get the actual value
    var balanceNumber = balanceValue.substring(1, balanceValue.length); //remove the dollar sign
    return parseInt(balanceNumber); //return just the number
  }

  //get the number from the checking input and return it
  function getInput(accountType) {
    var input = $(`#${accountType}`).find("input").val();
    return parseInt(input);
  }

  //update the display with the new balance for the given account
  function updateDisplay(accountType, balance) {
    $(`#${accountType}`).find(".balance").html(`$${balance}`);
    if (getBalance(`${accountType}`) === 0) {
      $(`#${accountType}`).find(".balance").addClass('zero');
    } else if(getBalance(`${accountType}`) !== 0) {
      $(`#${accountType}`).find(".balance").removeClass('zero');
    }
  }

  function deposit(accountType) {
    var currentBalance = getBalance(accountType); //get current balance for the account type
    var amount = getInput(accountType); //get the amount the user wants to deposit
    var newBalance = currentBalance + amount; //add em up
    updateDisplay(accountType, newBalance); //update the display
  }

  function withdraw(accountType, amount) {
    var currentBalance = getBalance(accountType); //get current balance
    var amountToWithdraw = amount ? amount : getInput(accountType); //get the amount the user wants to withdraw
    var result = currentBalance - amountToWithdraw; //calculate the result of the transaction
    var newBalance = result < 0 ? handleOverdraft(accountType, amountToWithdraw) : result; //only allow it if the result is greater than 0
    updateDisplay(accountType, newBalance); //update the display
  }

  function handleOverdraft(accountType, amountToWithdraw) {
    var thisAccount = accountType === "savings" ? "savings" : "checking"; //set thisAccount to whichever account is getting withdrawn from
    var otherAccount = thisAccount === "savings" ? "checking" : "savings"; //set otherAccount to the other account
    var thisBalance = getBalance(thisAccount); //get the balance of this account
    var otherBalance = getBalance(otherAccount); //get the balance of the other account
    if (amountToWithdraw <= thisBalance + otherBalance){ //compare the combined balance to what they want to withdraw
      var leftover = amountToWithdraw - thisBalance; //if they have enough, withdraw the leftover from the other account
      withdraw(otherAccount, leftover);
      return 0; //then return 0 so the current balance of the other account is set to 0
    } else { //if the amount they want to withdraw is more than the combined total of their account balances
      console.log("You don't have enough money to make that withdrawl."); //tell them they can't withdraw
//TODO: Get both balances to flash red when user tries to withdraw too much money.
      // flashRed();
      // setTimeout(removeRed, 100);
      return thisBalance; //return the current balance so nothing changes
    }
  }

  //delegate click event listeners to buttons within the accounts
  $(".account").delegate(":button", "click", function(){
    var buttonType = $(this).attr('class'); //get the type of the button that was clicked (deposit or withdraw)
    var accountType = $(this).parent().attr('id'); //get the type of the account containing clicked button (checking or savings)
    buttonType === "deposit" ? deposit(accountType) : withdraw(accountType); //either deposit or withdraw to that account based on button type
  });
});


//TODO: Get these working.
  // function flashRed(){
  //   var accounts = $(`.account`).find('.balance').children();
  //   console.log(accounts);
  //   accounts.each(function(account){
  //     console.log(account);
  //     account.addClass('zero');
  //   });
  // }
  // function removeRed(){
  //   var accounts = $(`.account`).find('.balance');
  //   accounts.each(function(account){
  //     account.removeClass('zero');
  //   });
  // }
