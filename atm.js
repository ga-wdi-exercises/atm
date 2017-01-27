$(document).ready(function(){
// setting all the variables
  var value = null
  // var valueSavings = 0
  var balance
  // var balanceSavings

// deposit on button click
$(".deposit").click(function() {
  // console.log($(this))
  balance = value + parseInt($(".input").val())
  $(this).siblings(".balance").html(`$${balance}`)
  // console.log($(".balance").val())
  value = balance
  //reset the input box
  $(".input").val(function(){
    $(this).attr("placeholder, enter and amount")
})
})


});
