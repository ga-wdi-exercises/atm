
checkingAmount = 0;

$(document).ready(function(){
	$("body").css("background", "red")
});


$("#checking").children(".deposit").on("click", function () {
	checkingAmount += parseInt($("#checking .input").val());
	$("#checking .balance").html("$" + checkingAmount);
	console.log($("input").val());
} );

$("#checking").children(".withdraw").on("click", function () {
	checkingAmount -= parseInt($("#checking .input").val());
	$("#checking .balance").html("$" + checkingAmount);
	console.log($("input").val());
} );

