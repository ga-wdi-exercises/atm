$(document).ready(function(){
  var checking = 0;
  var savings = 0;

  $('#checking input.deposit').on('click', function(){
    var deposit = $("#checking input.input").val();
    var deposit = parseInt(deposit);

    checking = checking + deposit;

  $('#checking div.balance').html("$" + checking);
})

  $('#checking input.withdraw').on('click', function(){
    var withdrawl = $('#checking input.input').val();
    withdrawl = parseInt(withdrawl);

    var remainder = withdrawl - checking;

    if (remainder < checking){
      var total = checking - withdrawl;
      $('#checking div.balance').html("$" + total);
    }
      else if(remainder > checking && remainder < savings){
        checking = 0;
        savings = savings - remainder;
      $('#checking div.balance').html("$" + checking);
      $('#savings div.balance').html("$" + savings);
    }
      else if (remainder > checking && remainder > savings){
        alert("Error! Can't withdraw that much")
    }
      else if (withdrawl > checking && withdrawl > savings){
        alert("Error! Can't withdraw that much")
    }
})

  $('#savings input.deposit').on('click', function(){
    var deposit = $("#savings input.input").val();
    var deposit = parseInt(deposit);

    savings = savings + deposit;

  $('#savings div.balance').html("$" + savings);
})

  $('#savings input.withdraw').on('click', function(){
    var withdrawl = $('#savings input.input').val();
    withdrawl = parseInt(withdrawl);

    var total = savings - withdrawl;

    $('#savings div.balance').html("$" + total);
})
})
