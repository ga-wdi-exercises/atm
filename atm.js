$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
//not anymore!
});
$("#checking .deposit").click(function(){
var deposit = parseInt($(".input").val(), 0)
var balance = parseInt($("#checking .balance").text().replace("$", ""))
var newBalance = "$" + (balance + deposit)
$("#checking .balance").text(newBalance)
})



$("#savings .deposit").click(function(){
var deposit = parseInt($(".input").val(), 0)
var balance = parseInt($("#savings .balance").text().replace("$", ""))
var newBalance = "$" + (balance + deposit)
$("#savings .balance").text(newBalance)
});
