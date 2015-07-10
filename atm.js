
 $('#checking_deposit').on("click", function(){
   var depositAmount = parseInt ($('#checking_amount').val())
   console.log(depositAmount);

   var balance = parseInt ($("#checking_balance").text().replace("$", ""))
   console.log(balance);

   var account_balance = "$" +(balance + depositAmount)
  console.log(account_balance);

   $("#checking_balance").text(account_balance)

})
$("#withdrawal").on("click", function(){
var withdraw = parseInt ($('#withdraw').val())
var remaining_balance = "$" +(checking_balance - withdraw)

console.log(remaining_balance);

})


$('#saving_amount').on("click", function(){
var deposit = parseInt ($("#saving_amount").val())

  console.log("deposit");
  })
