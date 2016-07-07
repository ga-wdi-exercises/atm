$("document").ready(function(){
console.log("hello");

$("#checking > .deposit").on("click", function(evt){
    // prevent default action
    evt.preventDefault();
    // get user input && convert to float with 2 decimal placess
    var newInput = $("#checking > .input").val()
    var floatNewInput = parseFloat(newInput).toFixed(2);
    console.log(floatNewInput);

    // update total
      //  get current total
    var total = $("#checking > .balance").html()
    var numericTotal = parseFloat(total.split("$")[1])
    var actualTotal = parseFloat(floatNewInput) + numericTotal
    $("#checking > .balance").html("$ " + actualTotal.toFixed(2));
    console.log()
    $("input.input").val("")


  })


});
