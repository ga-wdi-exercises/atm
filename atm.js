$( document ).ready(function() {

  // var saveInput = $("#saveInput");
  // var saveBal = $("#saveBal");
  var checkBal = $("#checkBal");
  var checkInput = $("#checkInput");
  var bal;
  var newBal;

  // Checking Account
  $("input[value=Deposit]").eq(0).on("click", depositeToCheck);
  $("input[value=Withdraw]").eq(0).on("click", withdrawFromCheck);

  function depositeToCheck(){
    console.log("The button works") // check if it works
    $(checkBal).html("$" + $(checkInput).val());
  }
  function withdrawFromCheck(){
    console.log("The button works") // check if it works
  }

  // Savings Account
});
