$(document).ready(function(){
	$("body").css("background", "red")
});

$("#checking").children(".deposit").on("click", function () {
	console.log($("input").val());
} )
