// $(document).ready(function(){
  var checkingDeposit = $("#checking").find(".deposit");
  var checkingWithdraw = $("#checking").find(".withdraw");
  var savingsDeposit = $("#savings").find(".deposit");
  var savingsWithdraw = $("#savings").find(".withdraw");
var atm = {
  checking: 0,
  savings: 0,
  depositToChecking: function(){
    var value = parseInt($("#checking input.input").val());
    this.checking += value;
    $("#checking .balance").text("$" + this.checking);
    console.log($("#checking .balance"))
  },
  depositToSavings: function(){
    var value = parseInt($("#savings input.input").val());
    this.savings += value;
    $("#savings .balance").text("$" + this.savings);
  },
  withdrawFromSavings: function(){
    var value = parseInt($("#savings input.input").val());
    this.savings -= value ;
    $("#savings .balance").text("$" + this.savings);
}
savingsWithdraw.on("click", atm.depositToSavings.bind(atm));
savingsDeposit.on("click", atm.depositToSavings.bind(atm));
checkingDeposit.on("click", atm.depositToChecking.bind(atm));
// });
//make variables for jquery objects: input.deposit, input.withdraw, input.text;
//create click events for input.deposit and input.withdraw (specify savings and checking);
//within click events add function to add or subtract from the value of html text in (specify savings and checking)
//
//refractor code
