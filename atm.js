$(document).ready(function(){
})

$("#checking .deposit").click(function(){
var deposit = parseInt($(".input").val());
var balance = parseInt($("#checking .balance").text().replace("$", ""));
var newBalance = "$" + (balance + deposit);
$("#checking .balance").text(newBalance)
})


$("#savings .deposit").click(function(){
var deposit = parseInt($(".input").val());
var balance = parseInt($("#savings .balance").text().replace("$", ""));
var newBalance = "$" + (balance + deposit);
$("#savings .balance").text(newBalance)
})
