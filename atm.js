var depositInt = parseInt (0)
var savingsBal = parseInt (0)
var checkingBal = parseInt (0)

function changeClass(checkingBal){
   $("#checking .balance").removeClass("zero");
   if (checkingBal === 0) {
    $("#checking .balance").addClass("zero");
   }
};

function changeSClass(savingsBal){
   $("#savings .balance").removeClass("zero");
   if (savingsBal === 0) {
    $("#savings .balance").addClass("zero");
   }
};

$(document).ready(function(){
  $("#checking .deposit").on("click",function(){
     var deposit = $("#checking .input").val();
     depositInt = parseInt(deposit);
     checkingBal = checkingBal + depositInt
     $("#checking .balance").html("$"+checkingBal);
     changeClass(checkingBal)
  })

  $("#checking .withdraw").on("click",function(){
    var deposit = $("#checking .input").val();
    var depositInt = parseInt(deposit);
    checkingBal = checkingBal - depositInt
    if (checkingBal < 0){
      checkingBal = checkingBal + depositInt
      alert("Invalid Withdrawl Balance Fell Below Zero");
    }
    $("#checking .balance").html("$"+checkingBal);
    changeClass(checkingBal)
  });

   $("#savings .deposit").on("click",function(){
      var deposit = $("#savings .input").val();
      depositInt = parseInt(deposit);
      savingsBal = savingsBal + depositInt
      $("#savings .balance").html("$"+savingsBal)
      changeSClass(savingsBal)
   })


   $("#savings .withdraw").on("click",function(){
     var deposit = $("#savings .input").val();
     depositInt = parseInt(deposit);
     savingsBal = savingsBal - depositInt
     if (savingsBal < 0){
       savingsBal = savingsBal + depositInt
       alert("Invalid Withdrawl Balance Fell Below Zero");
     }
     $("#savings .balance").html("$"+savingsBal)
     changeSClass(savingsBal)
   })
 });
