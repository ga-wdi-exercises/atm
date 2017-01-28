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

    // Turn checking box to red if balance reaches 0
    if (actualtotal == 0) {
      $("#checking").removeClass("account").addClass("zero")
    }
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

    // Turn checking box to red if balance reaches 0
    if (actualtotal == 0) {
      $("#checking").removeClass("account").addClass("zero")
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

    if (actualtotal == 0) {
      $("#checking").removeClass("account").addClass("zero")
    }

    // Turn checking box to red if balance reaches 0
    if (actualtotal == 0) {
      $("#savings").removeClass("account").addClass("zero")
    }
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

        // Turn checking box to red if balance reaches 0
        if (actualtotal == 0) {
          $("#savings").removeClass("account").addClass("zero")
        }
        })




});
