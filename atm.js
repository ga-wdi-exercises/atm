// var depositInt = parseInt (0)
var savingsBal = parseInt (0)
var checkingBal = parseInt (0)
var totalBal = parseInt (0)

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
     var depositInt = parseInt(deposit);
     checkingBal = checkingBal + depositInt
     totalBal = totalBal + depositInt
     $("#checking .balance").html("$"+checkingBal);
     changeClass(checkingBal)
  })

  $("#checking .withdraw").on("click",function(){
    var deposit = $("#checking .input").val();
    var depositInt = parseInt(deposit);
    checkingBal = checkingBal - depositInt
    totalBal = totalBal - depositInt
    if (checkingBal < 0){
      if (totalBal >= 0) {
         checkingBal = parseInt (0);
         savingsBal = totalBal;
         alert("Overdraft Protection Initiated");
      }else{
        checkingBal = checkingBal + depositInt
        totalBal = totalBal + depositInt
        alert("Invalid Withdrawl Balance Fell Below Zero");
      }
    }
    $("#checking .balance").html("$"+checkingBal);
    $("#savings .balance").html("$"+savingsBal)
    changeClass(checkingBal)
    changeSClass(savingsBal)
  });

   $("#savings .deposit").on("click",function(){
      var deposit = $("#savings .input").val();
      var depositInt = parseInt(deposit);
      savingsBal = savingsBal + depositInt
      totalBal = totalBal + depositInt
      $("#savings .balance").html("$"+savingsBal)
      changeSClass(savingsBal)
   })


   $("#savings .withdraw").on("click",function(){
     var deposit = $("#savings .input").val();
     depositInt = parseInt(deposit);
     savingsBal = savingsBal - depositInt
     totalBal = totalBal - depositInt
     if (savingsBal < 0){
       if (totalBal >= 0) {
          savingsBal = parseInt (0);
          checkingBal = totalBal;
          alert("Overdraft Protection Initiated");
       }else{
         savingsBal = savingsBal + depositInt
         totalBal = totalBal + depositInt
         alert("Invalid Withdrawl Balance Fell Below Zero");
       }
     }
     $("#checking .balance").html("$"+checkingBal);
     $("#savings .balance").html("$"+savingsBal)
     changeClass(checkingBal)
     changeSClass(savingsBal)
   })
 });


// $(document).ready(function(){
//   function isValidNumber(number){
//     var integer = parseInt(number);
//     if(isNaN(number)){
//       return false;
//     }else{
//       return true;
//     }
//   }
//
//   $("#savings .deposit").on("click", function(){
//     var input = $("#savings .input").val();
//     if(!isValidNumber(input)) return;
//     else alert("If you're seeing this, it was a valid number.");
//   });
// });
