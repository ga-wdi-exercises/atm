$( document ).ready(function(){
var checkingDeposit = function(){
  var checkingBalance = $("#checkingBalance").html();
  checkingBalance = parseInt( checkingBalance.replace("$", "") );
  var deposit = parseInt($("#checkingAmount").val());
  var total = deposit + checkingBalance;
  $("#checkingBalance").html("$" + total);
  if(total > 0){
    $("#checkingBalance").removeClass("zero");
  }
}


function checkingWithdrawal(){
  var checkingBalance = $("#checkingBalance").html();
  checkingBalance = parseInt( checkingBalance.replace("$", "") );
  var withdrawal = parseInt($("#checkingAmount").val());
  var total = checkingBalance - withdrawal;
  var savingsBalance = $("#savingsBalance").html();
  savingsBalance = parseInt( savingsBalance.replace("$", "") );
  if(total >= 0){
      $("#checkingBalance").html("$" + total);
      if(total === 0){
        $("#checkingBalance").addClass("zero");
      }
  } else if(total + savingsBalance >= 0) {
      $("#checkingBalance").html("$0");
      $("#savingsBalance").html("$" + (savingsBalance + total));
      $("#checkingBalance").addClass("zero");
      if(withdrawal === (checkingBalance + savingsBalance)){
        $("#savingsBalance").addClass("zero");
      }

  }
}

function savingsDeposit(){
  var savingsBalance = $("#savingsBalance").html();
  savingsBalance = parseInt( savingsBalance.replace("$", "") );
  var deposit = parseInt($("#savingsAmount").val());
  var total = deposit + savingsBalance;
  $("#savingsBalance").html("$" + total);
  if(total > 0){
    $("#savingsBalance").removeClass("zero");
  }
}

function savingsWithdrawal(){
  var savingsBalance = $("#savingsBalance").html();
  savingsBalance = parseInt( savingsBalance.replace("$", "") );
  var withdrawal = parseInt($("#savingsAmount").val());
  var total = savingsBalance - withdrawal;
  var checkingBalance = $("#checkingBalance").html();
  checkingBalance = parseInt( checkingBalance.replace("$", "") );
  if(total >= 0){
      $("#savingsBalance").html("$" + total);
      if(total === 0){
        $("#savingsBalance").addClass("zero");
      }
  } else if(total + checkingBalance >= 0) {
      $("#savingsBalance").html("$0");
      $("#checkingBalance").html("$" + (checkingBalance + total));
      $("#savingsBalance").addClass("zero");
      if(withdrawal === (savingsBalance + checkingBalance)){
        $("#checkingBalance").addClass("zero");
      }

  }
}

// an eventListerner for each button, each one a "click"

$("#checkingDeposit").on("click", function(){
    checkingDeposit();
  });


$("#savingsDeposit").on("click", function(){
    savingsDeposit();
    });

$("#checkingWithdrawal").on("click",function(){
  checkingWithdrawal();
});

$("#savingsWithdrawal").on("click",function(){
  savingsWithdrawal();
});

});
