$(document).ready(function(){
	$("#checking .deposit").on("click", function() {
		logic("checking", 1)
	})
	$("#checking .withdraw").on("click", function() {
		logic("checking", 2)
	})
	$("#savings .deposit").on("click", function() {
		logic("savings", 1)
	})
	$("#savings .withdraw").on("click", function() {
		logic("savings", 2)
	})
});

function logic(acc, action) {
	if (action == 1) {
		if (isNaN(parseInt($("#" + acc + " .input")[0].value))) {
			alert("Enter a valid amount into " + acc);
		}
		else {
			$("#" + acc + " .balance")[0].innerHTML = "$" + (parseInt(($("#" + acc + " .balance")[0].innerHTML).split("$")[1]) + parseInt($("#" + acc + " .input")[0].value));
		}
	}
	else {
		if (isNaN(parseInt($("#" + acc + " .input")[0].value))) {
			alert("Enter a valid amount into " + acc);
		}
		else {
			$("#" + acc + " .balance")[0].innerHTML = "$" + (parseInt(($("#" + acc + " .balance")[0].innerHTML).split("$")[1]) - parseInt($("#" + acc + " .input")[0].value));
		}
	}
}
