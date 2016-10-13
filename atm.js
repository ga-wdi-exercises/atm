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

  checkDeposit.on("click", addChTotal)
    function addChTotal() {
      console.log("Deposit to Checking");
      // event.preventDefault();
      var chDep = $("#checking input").val();
      chDep = parseInt(chDep);
      checking = checking + chDep
      $("#checking .balance").html("$" +checking)

    };

  checkWithdraw.on("click", subChTotal)
    function subChTotal() {
      console.log("Withdraw from Checking")
      // event.preventDefault();
      var chWith = $("#checking input").val();
      chWith = parseInt(chWith);
      checking = checking - chWith
      $("#checking .balance").html("$" +checking)


    };

    saveDeposit.on("click", addSvTotal)
      function addSvTotal() {
        console.log("Deposit to Savings");
        event.preventDefault();
        var svDep = $("#savings input").val();
        svDep = parseInt(svDep);
        savings = savings + svDep
        $("#savings .balance").html("$" +savings)

      };

      saveWithdraw.on("click", subSvTotal)
        function subSvTotal() {
          console.log("Withdraw from Savings");
          event.preventDefault();
          var svWith = $("#savings input").val();
          svWith = parseInt(svWith);
          var svWith = parseFloat(svWith);
          savings = savings - svWith
          $("#savings .balance").html("$" +savings)

      };





///don't change this it ends the document.ready function
});
