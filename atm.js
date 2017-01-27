$(document).ready(function(){
// setting all the variables
  var value = 0
  // var valueSavings = 0
  var hasInput = true
  var balance
  // var balanceSavings

// deposit on button click
$(".deposit").click(function() {
  //get NaN if input is empty
  if ($(".input").val() !== NaN) {
    // console.log($(this))
    balance = value + parseInt($(this).siblings(".input").val())
    $(this).siblings(".balance").html(`$${balance}`)
    // console.log($(".balance").val())
    value = balance
  } else {
    console.log("nope");
    hasInput = false
    return
}
  //reset the input box
  $(".input").val(function(){
    $(this).attr("placeholder, enter and amount")
})
})
$(".withdraw").click(function() {
  // console.log($(this))
  balance = value - parseInt($(this).siblings(".input").val())
  $(this).siblings(".balance").html(`$${balance}`)
  // console.log($(".balance").val())
  value = balance
  //reset the input box
  $(".input").val(function(){
    $(this).attr("placeholder, enter and amount")
})
})

});
