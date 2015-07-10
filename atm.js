// Need to refactor into global objects, helper methods, DRY up code
$(document).ready(function(){
  // Checking Account Functions
    // when user clicks deposit
    $("#checkingDeposit").on("click", function(){
      console.log("I clicked deposit");
      // Grab user input and parse it so it can be added to balance
      var checkingInput = parseInt($("#checkingInput").val())
      // Find current Balance
      var checkBalance = $("#checkingBalance").text()
      // Parse current balance into a number
      checkBalance = parseInt(checkBalance.replace("$", ""))
      // Create the new balance to be displayed
      var newBalance = checkingInput + checkBalance
      console.log(newBalance);
      // Format it to display
      $("#checkingBalance").text("$" + newBalance)
    })
    // when user clicks withdraw
    $("#checkingWithdraw").on("click", function(){
      console.log("I clicked withdraw");
      // Grab user input and parse it so it can be subtracted to balance
      var checkingInput = parseInt($("#checkingInput").val())
      // Find current Balance
      var checkBalance = $("#checkingBalance").text()
      // Parse current balance into a number
      checkBalance = parseInt(checkBalance.replace("$", ""))
      // Create the new balance to be displayed
      var newBalance = checkBalance - checkingInput
      // prevent withdraw if transaction goes negative
      if (newBalance < 0) {
        alert("Did not process request, Insufficient funds")
        console.log(newBalance);
      }
      else {
        console.log(newBalance);
        // Format it nice to display
        $("#checkingBalance").text("$" + newBalance)
      }
    })
  // Savings Account Functions
    $("#savingsDeposit").on("click", function(){
      console.log("I clicked deposit");
      // Grab user input and parse it so it can be added to balance
      var savingsInput = parseInt($("#savingsInput").val())
      // Find current Balance
      var savingsBalance = $("#savingsBalance").text()
      // Parse current balance into a number
      savingsBalance = parseInt(savingsBalance.replace("$", ""))
      // Create the new balance to be displayed
      var newBalance = savingsInput + savingsBalance
      console.log(newBalance);
      // Format it to display
      $("#savingsBalance").text("$" + newBalance)
    })
    // when user clicks withdraw
    $("#savingsWithdraw").on("click", function(){
      console.log("I clicked withdraw");
      // Grab user input and parse it so it can be subtracted to balance
      var savingsInput = parseInt($("#savingsInput").val())
      // Find current Balance
      var savingsBalance = $("#savingsBalance").text()
      // Parse current balance into a number
      savingsBalance = parseInt(savingsBalance.replace("$", ""))
      // Create the new balance to be displayed
      var newBalance = savingsBalance - savingsInput
      // prevent withdraw if transaction goes negative
      if (newBalance < 0) {
        alert("Did not process request, Insufficient Funds")
        console.log(newBalance);
      }
      else {
      // Format it to display
        $("#savingsBalance").text("$" + newBalance)
      }
    })
})
