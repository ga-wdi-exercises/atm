var checkingBalance = 0;
var savingsBalance = 0;

/*var savingsBalance = document.querySelector("div#savings_balance");
savingsBalance = parseInt( savingsBalance.innerHTML.replace("$", "") );
*/

//var checking_amount = parseInt( checkingBalance.innerHTML.replace("$", "") );


function checkingWithdrawal(amount){

}

function savingsDeposit(amount){
  $(".savingsDepositBtn").on('click', function(){
      var dollarAmount = $(".savings_Input").val();
        $("#savings_Input").text("$" + dollarAmount);
  });
}





function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
//deposit button
$(".checkingDepositBtn").on('click', function depositCheckingMoney(){//when button is clicked
    var dollarAmount = parseInt($(".checking_input").val(),10);//take value placed in the input field
      $("#checking_balance ").text(dollarAmount);// get checking class text(Giant Box). Change to input field aka dollarAmount
       newCheckingMoney = dollarAmount += checkingBalance;//add dollar amount plus existing checking balance
            console.log(newCheckingMoney);
            ("#checking_balance").html("$" + newCheckingMoney);

});

//withdrawal button
$(".checkingWithdrawBtn").on('click', function(){
  alert("you clicked");
});
////////////////////////////////////////////////////////////////

//savings Button
$(".savingsDepositBtn").on('click', function(){
    var savingsDollarAmount = parseInt($(".savings_Input").val(),10);
      $("#savings_balance").text(savingsDollarAmount);
        var newSavingsMoney = (savingsDollarAmount += savingsBalance);
          console.log(newSavingsMoney);
});

//savings withdrawal button
$(".savingsWithdrawBtn").on('click', function(){
  alert("you clicked");
});
//target class of balance
