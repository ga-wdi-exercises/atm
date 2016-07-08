$(document).ready(function(){
  console.log("yo... JS working");

  // console.log(checkingInput);
  //console.log(checkingBalance);
  //console.log(depositToChecking);
  //console.log(withdrawFromChecking);

  var depositToChecking = $('#checking > .deposit');
  depositToChecking.on("click", function(evt)
  {
    var checkingInput = $('#checking > .input').val();
    //grabs content from checking input value
    var checkingBalance = $('#checking > .balance').html();
    // grabs content from balance available

    //console.log("You've got money...C.R.E.A.M");
    evt.preventDefault();
    //When the deposit submit button is pressed for input on the checking side
    // console.log("before: " + checkingBalance);
    var currentTotal = checkingBalance.split('$')[1];
    // var curentTot = the balance displayed but split into an array containing the number value;
    //Local Variable made for current total to be logged
    // console.log("After split: " + checkingBalance);
    var totalValue = parseFloat(currentTotal) + parseFloat(checkingInput);
    // console.log(totalValue);
    // console.log(totalValue);
    var oldBalance = parseFloat($('.balance:first').html().split('$')[1]);
    var newBalance = $('#checking > .balance').html('$' + totalValue);

  });

  var withdrawFromChecking = $('#checking > .withdraw');
  withdrawFromChecking.on('click', function(evt)
  {
    var checkingInput = $('#checking > .input').val();
    var checkingBalance = $('#checking > .balance').html();

    // console.log(checkingInput);
    // console.log(checkingBalance);

    evt.preventDefault();
    var currentTotal = checkingBalance.split('$')[1];
//   console.log(checkingInput);
//
    var totalValue = parseFloat(currentTotal) - parseFloat(checkingInput);
//
    var oldBalance = parseFloat($('.balance:first').html().split('$')[1]);
    var newBalance = $('#checking > .balance').html('$' + totalValue);

    if (totalValue < 0)
    {
      $("#checking > .balance").css("background-color", "red");
    }
    else
    {
      if (totalValue > 0)
      {
        $("#checking > .balance").css("background-color", "#E3E3E3");
      }
      else if (totalValue < 0)
      {
        $("#checking > .balance").css("background-color", "red");
      }
      $("#checking > .balance").css("background-color", "#E3E3E3");
    }
  });


//***********************BEGIN SAVINGS FUNCTIONS***************************//


  var depositToSavings = $('#savings > .deposit');
  depositToSavings.on("click", function(evt)
  {
    var savingsInput = $('#savings > .input').val();
    var savingsBalance = $('#savings > .balance').html();
    evt.preventDefault();
    var currentTotal = savingsBalance.split('$')[1];
    var totalValue = parseFloat(currentTotal) + parseFloat(savingsInput);
    var oldBalance = parseFloat($('.balance:first').html().split('$')[1]);
    var newBalance = $('#savings > .balance').html('$' + totalValue);

  });

  var withdrawFromSavings = $('#savings > .withdraw');
  withdrawFromSavings.on('click', function(evt)
  {
    var savingsInput = $('#savings > .input').val();
    var savingsBalance = $('#savings > .balance').html();

    // console.log(checkingInput);
    // console.log(checkingBalance);

    evt.preventDefault();
    var currentTotal = savingsBalance.split('$')[1];
//   console.log(checkingInput);
//
    var totalValue = parseFloat(currentTotal) - parseFloat(savingsInput);
//
    var oldBalance = parseFloat($('.balance:first').html().split('$')[1]);
    var newBalance = $('#savings > .balance').html('$' + totalValue);

    if (totalValue < 0)
    {
      $("#savings > .balance").css("background-color", "red");
    }
    else
    {
      if (totalValue > 0)
      {
        $("#savings > .balance").css("background-color", "#E3E3E3");
      }
      else if (totalValue < 0)
      {
        $("#savings > .balance").css("background-color", "red");
      }
      $("#savings > .balance").css("background-color", "#E3E3E3");
    }
  });
});
