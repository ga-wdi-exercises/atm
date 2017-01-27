var checkingBalance = 0;
var savingsBalance = 0;

checkZero();
saveZero();

function checkZero(){
  if(+checkingBalance == 0){
    $("#checking").addClass("zero");
  }else if(+checkingBalance > 0){
    $("#checking").removeClass("zero");
  }
}

function saveZero(){
  if(+savingsBalance == "0"){
    $("#savings").addClass("zero");
  }else if(+savingsBalance > "0"){
    $("#savings").removeClass("zero");
  }
}

$(document).ready(function(){

  $("#checking > .deposit").on("click", function(){
    var checkingInput = $("#checking > .input").val()
    checkingBalance = +checkingInput + +checkingBalance;
    $("#checking > .balance").text("$" + checkingBalance);
    checkZero();
    });

  $("#checking > .withdraw").on("click", function(){
    var checkingInput = $("#checking > .input").val()
    if(+checkingInput > +checkingBalance){
      alert("You cannot withdraw this amount.")
    }else{
    checkingBalance = +checkingBalance - +checkingInput;
    $("#checking > .balance").text("$" + checkingBalance);}
    checkZero();
  });

  $("#savings > .deposit").on("click", function(){
    var savingsInput = $("#savings > .input").val()
    savingsBalance = +savingsInput + +savingsBalance;
    $("#savings > .balance").text("$" + savingsBalance);
    saveZero();
    });

  $("#savings > .withdraw").on("click", function(){
    var savingsInput = $("#savings > .input").val()
    if(+savingsInput > +savingsBalance){
      alert("You cannot withdraw this amount.")
    }else{
    savingsBalance = +savingsBalance - +savingsInput;
    $("#savings > .balance").text("$" + savingsBalance);}
    saveZero();
    });


});
