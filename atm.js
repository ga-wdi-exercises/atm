/* global $ */
$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
$('body').css('background', 'gray')

var button1 = $('#checking .deposit')
var button2 = $('#checking .withdraw')
var button3 = $('#savings .deposit')
var button4 = $('#savings .withdraw')

// Checking
button1.on("click", function(){
    var deposit = parseInt($("#checking .input").val())
    var balance = parseInt($("#checking .balance").text().replace("$", ""))
    var newBalance = "$" + (balance + deposit)
    $("#checking .balance").text(newBalance)
    $('#checking .input').val('');
  })

  button2.on("click", function(){
      var deposit = parseInt($("#checking .input").val())
      var balance = parseInt($("#checking .balance").text().replace("$", ""))
      var newBalance = "$" + (balance - deposit)
      $("#checking .balance").text(newBalance)
      $('#checking .input').val('');
    })

    // Savings
    button3.on("click", function(){
        var deposit = parseInt($("#savings .input").val())
        var balance = parseInt($("#savings .balance").text().replace("$", ""))
        var newBalance = "$" + (balance + deposit)
        $("#savings .balance").text(newBalance)
        $('#savings .input').val('');
      })

      button4.on("click", function(){
          var deposit = parseInt($("#savings .input").val())
          var balance = parseInt($("#savings .balance").text().replace("$", ""))
          var newBalance = "$" + (balance - deposit)
          $("#savings .balance").text(newBalance)
          $('#savings .input').val('');
        })
