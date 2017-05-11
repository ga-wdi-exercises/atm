$(document).ready(function(){
  $("#checkingDeposit").on("click", function(){
    var checkingBalance = parseInt($("#checkingBalance").html().replace("$",""))
    var deposit = parseInt($("#checkingAmount").val())
    var total = deposit + checkingBalance;
    $("#checkingBalance").html("$" + total);
    //console.log(checkingBalance)
})
  $("#withdrawDepositt").on("click", function(){
    var checkingBalance = parseInt($("#checkingBalance").html().replace("$",""))
    var withdraw = parseInt($("#checkingAmount").val())
    var total = checkingBalance - withdraw;
    $("#checkingBalance").html("$" + total);

    if (total === 0) {
      $("#checking").addClass("zero");
      event.preventDefault();
    } else {
      $("#checking").removeClass("zero")
    }
    if (total < 0) {
      alert("Nice try but you don't have enough balance.")
    }
})
  $("#savingDepositt").on("click", function(){
    var savingBalance = parseInt($("#savingBalance").html().replace("$",""))
    var deposit = parseInt($("#savingAmount").val())
    var total = deposit + savingBalance;
    $("#savingBalance").html("$" + total);
  })
  $("#withdrawDeposit").on("click", function(){
    var savingBalance = parseInt($("#savingBalance").html().replace("$",""))
    var withdraw = parseInt($("#savingAmount").val())
    var total = savingBalance - withdraw;
    $("#savingBalance").html("$" + total);

    if (total === 0) {
      $("#savings").addClass("zero");
      event.preventDefault();
    } else {
      $("#savings").removeClass("zero");
    }
    if (total < 0) {
      alert("Nice try but you don't have enough balance.")
    }
})
});
