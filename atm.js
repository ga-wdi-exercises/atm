$(document).ready( function(){

  $("#depositCheckBtn").on("click", function (){
    var checkingBalance = parseFloat($("#checkBal").html().replace("$",""));
    var inputValueChecking = parseFloat($("#checkInput").val());
    newBalance = checkingBalance + inputValueChecking;
    $("#checkBal").html("$" + newBalance);
  });

  $("#depositSavBtn").on("click", function(){
    var savingBalance = parseFloat($("#savBal").html().replace("$",""));
    var inputValueSaving = parseFloat($("#savInput").val());
    newBalance = savingBalance + inputValueSaving;
    $("#savBal").html("$" + newBalance);
  })

  $("#withdrawCheckBtn").on("click", function(){
    var checkingBalance = parseFloat($("#checkBal").html().replace("$",""));
    var savingBalance = parseFloat($("#savBal").html().replace("$",""));
    var inputValueChecking = parseFloat($("#checkInput").val());
    newBalance = checkingBalance - inputValueChecking;
    if (inputValueChecking>(checkingBalance + savingBalance)){
      alert("You don't have enough money for this transaction.")
    }else if (checkingBalance<inputValueChecking){
      var overDraft = savingBalance - (inputValueChecking-checkingBalance);
      $("#checkBal").html("$0");
      $("#savBal").html("$" + overDraft);
    }else{
      $("#checkBal").html(newBalance);
    }
  })

  $("#withdrawSavBtn").on("click", function(){
    var checkingBalance = parseFloat($("#checkBal").html().replace("$",""));
    var savingBalance = parseFloat($("#savBal").html().replace("$",""));
    var inputValueSaving = parseFloat($("#savInput").val());
    newBalance = savingBalance - inputValueSaving;
    if (inputValueSaving>(checkingBalance + savingBalance)){
      alert("You don't have enough money for this transaction.")
    }else if (savingBalance<inputValueSaving){
      var overDraft = checkingBalance - (inputValueSaving-savingBalance);
      $("#savBal").html("$0");
      $("#checkBal").html("$" + overDraft);
    }else{
      $("#savBal").html("$" + newBalance);
    }
  })
})
