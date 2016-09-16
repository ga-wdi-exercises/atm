$(document).ready(function(){

  var savings = 0;
  var checking = 0;



  //Add a click listener to the checking account's "Deposit" button
  $(".deposit").on("click", function() {
    console.log("hello");
  });
  //On clicking "Deposit", it should get the user input
  $(".withdraw").on("click", function() {
    var input = $(':input').val();
    console.log(input);
  });

  //On clicking "Deposit", it should update the "balance" with the user input
  $("#checking .deposit").on("click", function() {
    checking = checking + eval($('input.input').val());
    console.log(checking);
    $("#checking .balance").text(checking);
  });
  //On "Withdraw", it updates the balance
  $("#checking .withdraw").on("click", function() {
    var amount = eval($('input.input').val());
    if (checking - amount > 0) {

      checking = checking - amount;
      console.log(checking);
    } else {
      console.log('This account only has '+checking+' dollars in it. Your withdrawal request exceeds this balance by '+(amount - checking) + " " +'dollars.');
    }
    $("#checking .balance").text(checking);
  });
  //On clicking 'savings account' "Deposit", it should get the user input

  $('#savings .deposit').on('click', function(){
    var deposit = $("#savings input.input").val();
    var deposit = parseInt(deposit);
    savings = savings + deposit;
    console.log(savings);
    $('#savings .balance').text(savings);
  });
  //On "Withdraw", it updates the balance (savings account);
  $("#savings .withdraw").on("click",function() {
    var amount = eval($('#savings input.input').val());
    if (savings - amount > 0) {
      savings = savings - amount;
      console.log(savings);
    } else {
      console.log('This account only has '+savings+' dollars in it. Your withdrawal request exceeds this balance by '+(amount - savings) + " " +'dollars.');
    }
    $("#savings .balance").text(savings);
  })


  });
