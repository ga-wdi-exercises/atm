
$(function(){

	var cbalance = parseFloat( $("#checking .balance").text().replace("$", "") );
	var sbalance = parseFloat( $("#saving .balance").text().replace("$", "") );

	$( "#checking .depositbtn" ).on( "click", function(){
		var cInput = parseFloat( $("#checking .balanceinput").val().replace("$", "") );
		cbalance = cInput + cbalance;
		$("#checking .balance").text('$' + cbalance);
	});

	$( "#checking .withdrawbtn" ).on( "click", function(){
		var cInput = parseFloat( $("#checking .balanceinput").val().replace("$", "") );
		cbalance = cbalance - cInput;
		if(cbalance < 0){
			if(sbalance > 0){
				sbalance = sbalance - Math.abs(cbalance);
				if(sbalance < 0){
					cbalance = sbalance;
					sbalance = 0;
				}else{
					cbalance = 0;
				}

				$("#saving .balance").text('$' + sbalance);
			}
		}
		$("#checking .balance").text('$' + cbalance);
	});

	$( "#saving .depositbtn" ).on( "click", function(){
		var sInput = parseFloat($("#saving .balanceinput").val().replace("$", ""));
		sbalance = sInput + sbalance;
		$("#saving .balance").text('$' + sbalance);
	});

	$( "#saving .withdrawbtn" ).on( "click", function(){
		var sInput = parseFloat($("#saving .balanceinput").val().replace("$", ""));
		sbalance = sbalance - sInput;
		$("#saving .balance").text('$' + sbalance);

	});
});
