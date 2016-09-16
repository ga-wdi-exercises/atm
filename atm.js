$(document).ready(function(){
  var balance = 0;
  var savings = 0;
  var checking = 0;
  var balance1 = 0;
  var deposit = 0;


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
    balance = balance + eval($('input.input').val());
    console.log(balance);
    $("#checking .balance").text(balance);
  });
  //On "Withdraw", it updates the balance
  $("#checking .withdraw").on("click", function() {
    balance = balance - eval($('input.input').val());
    console.log(balance);
    $("#checking .balance").text(balance);
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
    savings = savings - eval($('#savings input.input').val());
    console.log(savings);
    $("#savings .balance").text(savings);
  })


  });
