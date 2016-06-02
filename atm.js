

var balanceInt = parseInt (0);
var breakYes = "no"
var depositInt = parseInt (0)
var savingsBal = parseInt (0)

function changeClass(balanceInt){
   $("#checking .balance").removeClass("zero");
   if (balanceInt === 0) {
    $("#checking .balance").addClass("zero");
   }
};

function changeSClass(balanceInt){
   $("#savings .balance").removeClass("zero");
   if (balanceInt === 0) {
    $("#savings .balance").addClass("zero");
   }
};

function validateNum(depositInt,breakYes){
  breakYes = "no"
  if (!depositInt) {
    alert("Invalid Amount Entered. Please try again.");
    breakYes = "yes"
  }
  return breakYes;
}


$(document).ready(function(){
  $("body").css("background-color","red");
  $("#checking .deposit").on("click",function(){
     var deposit = $("#checking .input").val();
     depositInt = parseInt(deposit);
/*     validateNum(depositInt,breakYes)
     if (breakYes = "yes"){
        console.log(breakYes)
        break - break out of this and start again
    } */
     balanceInt = balanceInt + depositInt
     $("#checking .balance").html("$"+balanceInt);
     changeClass(balanceInt)
     console.log (balanceInt)
     console.log (depositInt)
  })

  $("#checking .withdraw").on("click",function(){
    var withdrawl = $("#checking .input").val();
        var withdrawlInt = parseInt(withdrawl);
        balanceInt = balanceInt - withdrawlInt
        if (balanceInt < 0){
          balanceInt = balanceInt + withdrawlInt
          alert("Invalid Withdrawl Balance Fell Below Zero");
         }
       $("#checking .balance").html("$"+balanceInt);
       changeClass(balanceInt)
       console.log (balanceInt)
       console.log (withdrawlInt)
   });

   $("#savings .deposit").on("click",function(){
      var deposit = $("#savings .input").val();
      depositInt = parseInt(deposit);
 /*     validateNum(depositInt,breakYes)
      if (breakYes = "yes"){
         console.log(breakYes)
         break - break out of this and start again
     } */
      savingsBal = savingsBal + depositInt
      $("#savings .balance").html("$"+savingsBal)
      changeSClass(savingsBal)
      console.log (balanceInt)
      console.log (savingsBal)
   })


      $("#savings .withdraw").on("click",function(){
         var deposit = $("#savings .input").val();
         depositInt = parseInt(deposit);
    /*     validateNum(depositInt,breakYes)
         if (breakYes = "yes"){
            console.log(breakYes)
            break - break out of this and start again
        } */
         savingsBal = savingsBal - depositInt
         $("#savings .balance").html("$"+savingsBal)
         changeSClass(savingsBal)
         console.log (balanceInt)
         console.log (savingsBal)
      })
   });
