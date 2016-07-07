$("document").ready(function(){
console.log("hello");

//*******Checking Deposit START*********
$("#checking > .deposit").on("click", function(evt){
    // prevent default action
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
//*********Checking Deposit END************

//*********Savings Deposit START***********(change Variables)
$("#savings > .deposit").on("click", function(evt){
    // prevent default action
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

//*********Savings Deposit END************

//********** Checking Withdrawl BEGIN***********
$("#checking > .withdraw").on("click", function(evt){
    // prevent default action
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
    })
//**********Checking Withdrawl END*************

//**********Savings Withdrawl BEGIN*************
$("#savings > .withdraw").on("click", function(evt){
    // prevent default action
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
//**********Savings Withdrawl END****************

});
