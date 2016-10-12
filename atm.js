console.log("hello");

$("body").on("click", function(){
  $("body").css("background-color", "red");
});

$("#checking .deposit").on("click", function(){
  console.log("hello");
  
  var input = $("#checking .input").select().val();
    console.log(input);
});
