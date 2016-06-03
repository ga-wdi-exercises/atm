$(document).ready(function(){
  var CDButton = $("#CDButton");
  var CInput = $("#CInput");
  var CWButton = $("#CWButton");
  var CBalance = $("#CBalance");

  var SDButton = $("#SDButton");
  var SInput = $("#SInput");
  var SWButton = $("#SWButton");
  var SBalance = $("#SBalance");




  CDButton.click(checkingDeposit);
  function checkingDeposit() {
    var CBalance = $("#CBalance").html().replace("$","");
    var Total = (parseInt(CInput.val()) + parseInt(CBalance));
    console.log(Total);
    $("#CBalance").html(Total);
  }

  CWButton.click(checkingWithdrawal);
  function checkingWithdrawal() {
    var CBalance = $("#CBalance").html().replace("$","");
    var Total = (parseInt(CBalance)) - parseInt(CInput.val());
    console.log(Total);
    $("#CBalance").html(Total);
  }

  SDButton.click(savingDeposit);
  function savingDeposit() {
    var SBalance = $("#SBalance").html().replace("$","");
    var Total = (parseInt(SInput.val()) + parseInt(SBalance));
    console.log(Total);
    $("#SBalance").html(Total);
  }

  SWButton.click(savingWithdrawal);
  function savingWithdrawal(){
    var SBalance = $("#SBalance").html().replace("$","");
    var Total = (parseInt(SBalance)) - parseInt(SInput.val());
    console.log(Total);
    $("#SBalance").html(Total);
  }
});
