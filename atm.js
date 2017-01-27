amount = $("input").val();

$(document).ready(function(){
  $("body").css("background", "orange")
});

$("#checking").children(".deposit").on("click", function (){
  var amount = $("input").val();
  console.log(amount);
})

// $("button").on("click", function () {
//   console.log("dom");
// })

// $(".deposit").on("click", function() {
//   var amount = $("input").val();
//   console.log(amount);

// $("")
