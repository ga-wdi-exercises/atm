$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

var checkDeposit = $("#checking .deposit");

var checkWithdraw = $("#checking .withdraw")

var saveDeposit = $("#savings .deposit");

var saveWithdraw = $("#savings .withdraw");

var checkBalance = $("#checking .balance")
//Where the input values go for checking
var saveBalance = $("#savings .balance")
//Where the input values go for savings
var checking = 0;
var savings = 0;

function zeroCheck (){
  if (savings == 0){
    $("#savings").toggleClass("zero")
  }
}

  checkDeposit.on("click", addChTotal)
    function addChTotal() {
      // console.log("Deposit to Checking");
      // event.preventDefault();
      var chDep = $("#checking input").val();
      chDep = parseInt(chDep);
      checking = checking + chDep
      $("#checking .balance").html("$" +checking.toFixed(2))


    };

  checkWithdraw.on("click", subChTotal)
    function subChTotal() {
      // console.log("Withdraw from Checking")
      // event.preventDefault();
      var chWith = $("#checking input").val();
      chWith = parseInt(chWith);
      checking = checking - chWith
      if (checking < 0) {
        console.log (checking);
        // console.log("not enough funds");
        checking = checking + chWith
      } else{
        $("#checking .balance").html("$" +checking.toFixed(2))
      }


    };

    saveDeposit.on("click", addSvTotal)
      function addSvTotal() {
        // console.log("Deposit to Savings");
        event.preventDefault();
        var svDep = $("#savings input").val();
        svDep = parseInt(svDep);
        savings = savings + svDep
        $("#savings .balance").html("$" +savings.toFixed(2))

      };

      saveWithdraw.on("click", subSvTotal)


        function subSvTotal() {
          // console.log("Withdraw from Savings");
          event.preventDefault();
          var svWith = $("#savings input").val();
          svWith = parseInt(svWith);
          var svWith = parseFloat(svWith);
          savings = savings - svWith

          //checks for zero and sets it's class
          if (savings == 0){
            $("#savings").toggleClass("zero")
          }

          if (savings < 0) {
            // console.log (checking);
            alert("not enough funds");
            savings = savings + svWith
          }

          else {
            $("#savings .balance").html("$" +savings.toFixed(2))
          }

      };





///don't change this it ends the document.ready function
});
