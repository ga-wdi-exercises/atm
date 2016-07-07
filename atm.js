$(document).ready(function(){

     console.log("Hola hola hola");

// CHECKING DEPOSIT

$("#checking > .deposit").on("click", function(evt){
    // Prevent default action
    evt.preventDefault();

  // get user input && convert to float with 2 decimal placess
    var newInput = $("#checking > .input").val()
    var floatnewInput = parseFloat(newInput).toFixed(2);
    console.log(floatnewInput);

    // update total
      //  get current total
    var total = $("#checking > .balance").html()
    var numerictotal = parseFloat(total.split("$")[1])
    var actualtotal = parseFloat(floatnewInput) + numerictotal
    $("#checking > .balance").html("$ " + actualtotal.toFixed(2));
    console.log()
    $("#checking > .input").val("")
    })

// CHECKING WITHDRAWAL

$("#checking > .withdraw").on("click", function(evt){
    // Prevent default action
    evt.preventDefault();

  // get user input && convert to float with 2 decimal placess
    var newInput = $("#checking > .input").val()
    var floatnewInput = parseFloat(newInput).toFixed(2);
    console.log(floatnewInput);

    // update total
      //  get current total
    var total = $("#checking > .balance").html()
    var numerictotal = parseFloat(total.split("$")[1])
    var actualtotal = numerictotal - parseFloat(floatnewInput)
    $("#checking > .balance").html("$ " + actualtotal.toFixed(2));
    console.log()
    $("#checking > .input").val("")

    if (actualtotal == 0) {
      $("#checking").css("background", "#F52F4F");
    }
    // } else {
    //   $("#checking").css("background", "blue");
    // }
  })
// SAVINGS DEPOSIT

$("#savings > .deposit").on("click", function(evt){
    // Prevent default action
    evt.preventDefault();

  // get user input && convert to float with 2 decimal placess
    var newInput = $("#savings > .input").val()
    var floatnewInput = parseFloat(newInput).toFixed(2);
    console.log(floatnewInput);

    // update total
      //  get current total
    var total = $("#savings > .balance").html()
    var numerictotal = parseFloat(total.split("$")[1])
    var actualtotal = parseFloat(floatnewInput) + numerictotal
    $("#savings > .balance").html("$ " + actualtotal.toFixed(2));
    console.log()
    $("#savings > .input").val("")
    })

// SAVINGS WITHDRAWAL

    $("#savings > .withdraw").on("click", function(evt){
        // Prevent default action
        evt.preventDefault();

      // get user input && convert to float with 2 decimal placess
        var newInput = $("#savings > .input").val()
        var floatnewInput = parseFloat(newInput).toFixed(2);
        console.log(floatnewInput);

        // update total
          //  get current total
        var total = $("#savings > .balance").html()
        var numerictotal = parseFloat(total.split("$")[1])
        var actualtotal = numerictotal - parseFloat(floatnewInput)
        $("#savings > .balance").html("$ " + actualtotal.toFixed(2));
        console.log()
        $("#savings > .input").val("")
        })




  // var checkingWithdraw = $("#checking > .withdraw");
  // var checkingBalance = $("#checking > .balance");
  //
  // var savingsDeposit = $("#savings > .deposit");
  // var savingsWithdraw = $("#savings > .withdraw");
  // var savingsBalance = $("#savings > .balance");
  //
  // var inputChecking = $("#checking > .input");
  // var inputSavings = $("#savings > .input")

  //  $(checkingDeposit).on("click", function(evt) {
  //      evt.preventDefault();
  //
  //      $(checkingBalance).html("$" + parseFloat(inputChecking));
  //        console.log(typeof(checkingBalance));
  //         });
  //
  // inputChecking.val("enter an amount");
  // inputChecking.on("click", function() {
  //  $(this).val("");



});

  // })

// prevent default action
//
// For checking box:
//
// input number in checking box
//
// choose either deposit or withdraw
// convert user input to float with 2 decimal places
// When clicking on deposit, add user input + previous balace and show current balance in checking display box
//
// When clickin on withdraw, subtract user iput from previous balance and show current balance in checking display box
//
// If current balance hit zero, box and number turn red.
//
// For savings box:
//
// input number in savings box
// choose either deposit or withdraw
// get user input and convert to float with 2 decimal places
// When clicking on deposit, add number and show balance in savings display box
//
// When clickin on withdraw, subtract number and show balance in savings display box
//
// If current balance hit zero, box and number turn red.
