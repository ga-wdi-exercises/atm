$(document).ready(function(){

var checkingBalance = $("#checking .balance");
var checkingInput = $("#checking .checkingInput");
var checkingDeposit = $("#checking .checkingDeposit");
var checkingWithdraw = $("#checking .checkingWithdraw");

    // checking deposit
  $(".checkingDeposit").on("click", function(){
    $(checkingBalance).text().replace("$", "") // get balance, replace text with val
    var deposit = parseInt(checkingInput).val()
    var newBalance = "$" + (checkingBalance + checking)
    $(checkingBalance).text(deposit)
})

// checking withdrawal /w overdraft protection

// savings deposit

// savings withdraw

})
