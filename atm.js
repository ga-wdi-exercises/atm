$(document).ready(function(){
// setting all the variables
  // var value = 0
  var valueChecking = 0
  var valueSavings = 0
  var hasInput = true
  var balanceChecking
  var balanceSavings
  // var balanceSavings

// deposit on button click
$(".deposit").click(function() {
  //not get NaN if input is empty
  if ($("#checking .input").val() !== '') {
    // console.log($(this))
    balanceChecking = valueChecking + parseInt($(this).siblings("#checking .input").val())
    $(this).siblings("#checking .balance").html(`$${balanceChecking}`)
    valueChecking = balanceChecking
  } else if ($("#savings .input").val() !== '') {
    balanceSavings = valueSavings + parseInt($(this).siblings("#savings .input").val())
    $(this).siblings("#savings .balance").html(`$${balanceSavings}`)

    valueSavings = balanceSavings
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
  if ($("#checking .input").val() !== '') {
    console.log($(this))
    balanceChecking = valueChecking - parseInt($(this).siblings("#checking .input").val())
      if (balanceChecking > 0) {
        $("#checking ").css("background-color", "red")
      } else {
        $("#checking ").css("background-color", '#6C9A74')
      }
      if (balanceChecking < 0) {
        hasInput = false
        return
      }
    valueChecking = balanceChecking
    $(this).siblings("#checking .balance").html(`$${balanceChecking}`)
  } else if ($("#savings .input").val() !== '') {
    balanceSavings = valueSavings - parseInt($(this).siblings("#savings .input").val())
      if (balanceChecking > 0) {
        $("#checking ").css("background-color", "red")
      } else {
        $("#checking ").css("background-color", '#6C9A74')
      }
      if (balanceSavings < 0) {
        hasInput = false
        return
      }
    valueSavings = balanceSavings
    $(this).siblings("#savings .balance").html(`$${balanceSavings}`)
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

});
