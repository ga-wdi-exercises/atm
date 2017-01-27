$(document).ready(function(){
});
/*$( ".deposit" ).click(function() {
  console.log( "it's working" );
});*/
//var checkingDeposit = $( "#checking" ).children(".deposit");
//console.log("checkingDeposit");

//checkingDeposit.click(function(){
//  console.log("works again");
//});

/*var input = $( "#checking" ).children(".input").val()

(checkingDeposit).click(function() {
  console.log(input.val());
});*/

var checkDeposit = $("#checking.deposit");
var checkingInput = $("#checking.input");
var checkingBalance = 0;

  $("#checking .deposit").on("click", function(){
    var checkingInput = $("#checking .input").val()
    checkingBalance = +checkingInput + +checkingBalance;
    $("#checking .balance").html("$" + checkingBalance);
  })

  $("#checking .withdraw").on("click", function(){
    var checkingInput = $("#checking .input").val()
    checkingBalance = +checkingBalance -  +checkingInput;
    $("#checking .balance").html("$" + checkingBalance);
  })

  var saveDeposit = $("#savings.deposit");
  var savingInput = $("#savings.input");
  var savingBalance = 0;

    $("#savings .deposit").on("click", function(){
      var savingInput = $("#savings .input").val()
      savingBalance = +savingInput + +savingBalance;
      $("#savings .balance").html("$" + savingBalance);
    })

    $("#savings .withdraw").on("click", function(){
      var savingInput = $("#savings .input").val()
      savingBalance = +savingBalance -  +savingInput;
      $("#savings .balance").html("$" + savingBalance);
    })




/*  newDeposit.append(checkInput)

function(){
  for(i=0;i < newDeposit.length; i++)
  return newDeposit+=checkInput

}

/*var currentBalence = 0
var newBalance = checkBalance.html(checkInput.val());

function add(currentBalence, checkInput){
if(newBalance < 0;);
currentBalence+=checkInput

}*/
