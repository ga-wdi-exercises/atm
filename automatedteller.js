$(document).ready(function(){
  console.log("Your Mom");

$("body").on("mouseover", bodyRed);

  function bodyRed() {

    $("body").css("background", "red");
  }

$("#checking .deposit").on("click", hello);

  function hello()  {
    console.log("Hello.");
  }

$("#savings .deposit").on("click", function()  {

    var deposit = $("#savings .input").val();
     var floatDeposit = parseFloat(deposit);

    console.log(deposit);

});



  // $('someElement').on('click', function(e){
  //     // stop the event from bubbling.
  //     e.stopPropagation();
  // });



















});
