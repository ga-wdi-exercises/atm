var amount = $("input").val();


$(document).ready(function(){
	$("body").css("background", "red")
});

$("#checking").children(".deposit").on("click", function () {
	console.log($("input").val());
} );

$("#checking").children(".deposit").on("click", function () {
	$(".checkingBal").html("$" + amount);
} );