$(document).ready(function(){
})

$("#checking .deposit").click(function(){
var deposit = parseInt($(".input").val())
var balance = parseInt($("#checking .balance").text().replace("$", ""))
var updatedBalance = ("$") + (balance + deposit)
$("#checking .balance").text(updatedBalance)
})

// I keep getting NaN for the parseInt here in "savings", despite .input always being a number. I don't understand why it is doing this here and not on the "checking". Do I need to further define .input? Does this have to do with how it's arranged? 
$("#savings .deposit").click(function(){
var deposit = parseInt($(".input").val())
var balance = parseInt($("#savings .balance").text().replace("$", ""))
var updatedBalance = ("$") + (balance + deposit)
$("#savings .balance").text(updatedBalance)
})
