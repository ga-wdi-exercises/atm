$(document).ready(function(){
// setting all the variables
  var value = 0
  var balance
// var inputValue
// deposit on button click
$(".deposit").click(function() {
  console.log($(this))
  balance = value + parseInt($(".input").val())
  $(this).siblings(".input").html(`$${balance}`)
  // $(".balance")

  //reset the
  $(".input").val(function(){
    $(this).attr("placeholder, enter and amount")
})
})

});
