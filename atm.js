$(document).ready(function(){
  /********** Variable Declaration and Element Binding **********/
  let checkD = $('#checking .deposit');
  let checkW = $('#checking .withdraw');
  let savingsD = $('#savings .deposit');
  let savingsW = $('#savings .withdraw');
  let inputCheck = $('#checking .input');
  let inputSavings = $('#savings .input');
  let checkingBalDiv = $('#checking .balance');
  let savingsBalDiv = $('#savings .balance');
  let checkingBal = 0;
  let savingsBal = 0;

  /********** Button Event Binding **********/
  checkD.click(depChecking);
  savingsD.click(depSavings);
  checkW.click(withdrawChecking);
  savingsW.click(withdrawSavings);

  /********** Function Declaration **********/

  function depChecking() {
    checkingBal = addToBalance(checkingBal, parseFloat(inputCheck.val()));
    inputCheck.val("0");
    checkingBalDiv.text(formatBalance(checkingBal));
  }

  function depSavings() {
    savingsBal = addToBalance(savingsBal, parseFloat(inputSavings.val()));
    inputSavings.val("0");
    savingsBalDiv.text(formatBalance(savingsBal));
  }

  function withdrawChecking() {
    /** NOTE: This function sets the input value to withdraw. Checks the withdrawal amount to see if it is less
    than the account amount.  It then checks to see if the withdrawal is more than both account.  If it is, it alerts
    the user and makes no changes, if it isn't if subtracts the remaining money from the second account. I was having
    trouble refactoring this function, so unfortunately it is more verbose than I would like it **/
    let withdraw = parseFloat(inputCheck.val());
    if (checkingBal - parseFloat(inputCheck.val()) < 0) {
      if (checkingBal + savingsBal < withdraw) {
        alert(`The withdrawal amount of $${withdraw} is greater than both of your accounts. Insufficient funds.`);
      } else {
        let overdraft = withdraw - checkingBal;
        savingsBal -= overdraft;
        savingsBalDiv.text(formatBalance(savingsBal));
        checkingBal = 0;
        checkingBalDiv.text(formatBalance(checkingBal));
      }
    } else {
      checkingBal = subFromBalance(checkingBal, parseFloat(inputCheck.val()));
      inputCheck.val("0");
      checkingBalDiv.text(formatBalance(checkingBal));
    }
  }

  function withdrawSavings() {
    /** NOTE: This function sets the input value to withdraw. Checks the withdrawal amount to see if it is less
    than the account amount.  It then checks to see if the withdrawal is more than both account.  If it is, it alerts
    the user and makes no changes, if it isn't if subtracts the remaining money from the second account. I was having
    trouble refactoring this function, so unfortunately it is more verbose than I would like it **/
    let withdraw = parseFloat(inputSavings.val());
    if (savingsBal - withdraw < 0) {
      if (savingsBal + checkingBal < withdraw) {
        alert(`The withdrawal amount of $${withdraw} is greater than both of your accounts. Insufficient funds.`);
      } else {
        let overdraft = withdraw - savingsBal;
        checkingBal -= overdraft;
        checkingBalDiv.text(formatBalance(checkingBal));
        savingsBal = 0;
        savingsBalDiv.text(formatBalance(savingsBal));
      }
    } else {
      savingsBal = subFromBalance(savingsBal, parseFloat(inputSavings.val()));
      inputSavings.val("0");
      savingsBalDiv.text(formatBalance(savingsBal));
    }
  }

  function addToBalance(bal, x) {
    return bal += x;
  }

  function subFromBalance(bal, x) {
    return bal -= x;
  }

  function formatBalance(bal) { // Formats Balance to 2 digits and adds $ sign
    return '$' + bal.toFixed(2)
  }
});
