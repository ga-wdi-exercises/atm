//pseudocode
//FOR BOTH SIDES, RESPECTIVELY:
//IF balance <=0, color is red, ELSE color is green

//listen for DEPOSIT submit event (on submit)
//prevent default of event (reload)
//get new user input from input field
//convert new input to a float with 2 decimals
//get inner html from running total, access only value part (no $), ADD those two values together
//update new balance with formatted input + "$"
//clear field

//listen for WITHDRAWAL submit event (on submit)
//prevent default of event (reload)
//get new user input from input field
//convert new input to a float with 2 decimals
//CHECK if input >= balance, throw error
//get inner html from running total, access only value part (no $), SUBTRACT new input from running total
//update new balance with formatted input + "$"
//clear field


$(document).ready(function(){

  //IF balance <=0, color is red, ELSE color is green
  // if (balance === "$0") {
  //   $(".checking").css("background-color", "red");
  // } else {
  //   $(".checking").css("background-color", "#6C9A74");
  // }

//*********************************************************CHECKING DEPOSIT
  //listen for DEPOSIT submit event (on click)
  //prevent default of event (reload)
  $("#checking > .deposit").on("click", function(e){
    e.preventDefault();

    //get new user input from input field
    var newInput = $("#checking > .input").val();
    //convert new input to a float with 2 decimals
    var floatNewInput = parseFloat(newInput).toFixed(2);
    //console.log( typeof(floatNewInput) ); //floatNewInput is a string
    floatNewInput = parseFloat(floatNewInput); //redefine as a float this time
    //console.log( typeof(floatNewInput) ); //floatNewINput is now a number

    //getting the inner html of the #total
    var total = $("#checking > .balance").html()
    //taking that total, split it out to an array, access only the part we want)
    var numericalTotal = parseFloat(total.split("$")[1]);
    // take the new entry that we formatted, add it to the numericaltotal which is the running total
    var actualTotal = floatNewInput + numericalTotal;
    //console.log(typeof(actualTotal));
    //take what we just added, convert to string
    actualTotal = actualTotal.toFixed(2);
    //console.log(typeof(actualTotal), actualTotal);
    //change the inner html for balance
    $("#checking > .balance").html("$" + actualTotal);
    //clear field
    $("#checking > .input").val("")
  })

  //*********************************************************SAVING DEPOSIT
    $("#savings > .deposit").on("click", function(e){
      e.preventDefault();
      var newInput = $("#savings > .input").val();
      var floatNewInput = parseFloat(newInput).toFixed(2);
      floatNewInput = parseFloat(floatNewInput);
      var total = $("#savings > .balance").html();
      var numericalTotal = parseFloat(total.split("$")[1]);
      var actualTotal = floatNewInput + numericalTotal;
      actualTotal = actualTotal.toFixed(2);
      $("#savings > .balance").html("$" + actualTotal);
      $("#savings > .input").val("");
    })

//*********************************************************CHECKING WITHDRAW
$("#checking > .withdraw").on("click", function(e){
  e.preventDefault();
  var newInput = $("#checking > .input").val();
  var floatNewInput = parseFloat(newInput).toFixed(2);
  floatNewInput = parseFloat(floatNewInput);
  var total = $("#checking > .balance").html();
  var numericalTotal = parseFloat(total.split("$")[1]);
  var actualTotal = numericalTotal - floatNewInput;
  actualTotal = actualTotal.toFixed(2);
  $("#checking > .balance").html("$" + actualTotal);
  $("#checking > .input").val("");
})

//*********************************************************SAVINGS WITHDRAW
$("#savings > .withdraw").on("click", function(e){
  e.preventDefault();
  var newInput = $("#savings > .input").val();
  var floatNewInput = parseFloat(newInput).toFixed(2);
  floatNewInput = parseFloat(floatNewInput);
  var total = $("#savings > .balance").html();
  var numericalTotal = parseFloat(total.split("$")[1]);
  var actualTotal = numericalTotal - floatNewInput;
  actualTotal = actualTotal.toFixed(2);
  $("#savings > .balance").html("$" + actualTotal);
  $("#savings > .input").val("");
})





});
