
checkingAmount = 0;
savingsAmount = 0;
clearInput = "";


//Checking account

$("#checking").children(".deposit").on("click", function () {
	checkingAmount += parseInt($("#checking .input").val());
	$("#checking .balance").html("$" + checkingAmount);
	console.log($("input").val());
	$("#checking .input").val(clearInput);
	overdraft();
} );

$("#checking").children(".withdraw").on("click", function () {
	checkingAmount -= parseInt($("#checking .input").val());
	$("#checking .balance").html("$" + checkingAmount);
	console.log($("input").val());
	$("#checking .input").val(clearInput);
	overdraft();
} );

//Saving account

$("#savings").children(".deposit").on("click", function () {
	savingsAmount += parseInt($("#savings .input").val());
	$("#savings .balance").html("$" + savingsAmount);
	console.log($("input").val());
	$("#savings .input").val(clearInput);
	overdraft();
} );

$("#savings").children(".withdraw").on("click", function () {
	savingsAmount -= parseInt($("#savings .input").val());
	$("#savings .balance").html("$" + savingsAmount);
	console.log($("input").val());
	$("#savings .input").val(clearInput);
	overdraft();
} );

function overdraft(){
	if(checkingAmount <= 0){
		$("#checking .balance").css("background", "red");
	} else if (savingsAmount <= 0){
		$("#savings .balance").css("background", "red");
	} else {
		$("#checking .balance").css("background", "white");
		$("#savings .balance").css("background", "white");
	}
}

