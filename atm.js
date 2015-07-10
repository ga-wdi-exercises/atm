$("input").eq(0).attr("id", "cInBox"); //create id for checking account input box
$("input").eq(1).attr("id", "cDeBut"); //create id for checking deposit button
$("input").eq(2).attr("id", "cWiBut"); //create id for checking withdraw button
$("input").eq(3).attr("id", "sInBox"); //create id for savings account input box
$("input").eq(4).attr("id", "sDeBut"); //create id for checking deposit button
$("input").eq(5).attr("id", "sWiBut"); //create id for checking withdraw button
$(".balance").eq(0).attr("id", "cBalTot");//create id for checking balance total
$(".balance").eq(1).attr("id", "sBalTot");//create id for savings balance total

// Removes the $ from the balance
cBalTot.innerHTML.replace("$", "")
// sum checking balance
  var cBal = 0;
  cBalTot.innerHTML.replace("$", "");
$("#cDeBut").on("click", function(){
  var depCBal = parseFloat($("#cInBox").val());
  cBal = (depCBal + cBal);
  $("#cBalTot").text("$"+cBal);
})
// withdraw from current balance
$("#cWiBut").on("click", function(){
  var wdCBal = parseFloat($("#cInBox").val());
  cBal = (cBal - wdCBal);
  $("#cBalTot").text("$"+cBal);
})
// sum savings balance
  var sBal = 0;
  sBalTot.innerHTML.replace("$", "");
$("#sDeBut").on("click", function(){
  var depCBal = parseFloat($("#sInBox").val());
  sBal = (depCBal + sBal);
  $("#sBalTot").text("$"+sBal);
})
// withdraw from savings balance
$("#sWiBut").on("click", function(){
      var wdSBal = parseFloat($("#sInBox").val());
      sBal = (sBal - wdSBal);
      $("#sBalTot").text("$"+ sBal);


      // if withdraw is more than balance, cannot withdraw from savings
/*    if ($("sInBox").val() <= sBal){
    }
  // if withdraw is more than savings balance but less than savings balance AND
      else if(($("sInBox").val() > sBal) && ($("sInBox").val() < (sBal + cBal))){
      var withdrawFromBothBalance = parseFloat($("#sInBox").val());
      sBal = (sBal - withdrawFromBothBalance);
      $("#sBalTot").text("$" + "0")
      cBal = (cBal - sBal);
      $("#cBalTot").text("$" + cbal);}
    else {
      console.log("you don't have enough cash!");
      }
  */
  })

// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction




/*
if (cBal = "$0"){
  $("#cBalTot").css('background-color', 'red');
}
else if (cBal != "$0") {
  $("#cBalTot").css('background-color', 'green');
}
if (sBal="$0"){
  $("#sBalTot").css('background-color', 'red');
}
else {
  $("#sBalTot").css('background-color', 'green');
}
*/
