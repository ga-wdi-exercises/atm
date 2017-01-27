//set up click responses for button clicks
// write 4 functions check withdraw/deposit / savings widthdraw/deposit
//each function should take in both the number they typed in and the current balance






// ------- refactoring   -------
 // single function to update balance anytime a button is pressed
 // function updateBalance(){
 //    curentballance = parseInt($(this).siblings('.balance').html().substring(1))
 //    inputVal = parseInt($(this).siblings('.input').val())


 //    }
 	//change the number to red if its 0;
 // function checkforZero(){
	
// }


// ---------- original -----------------

$(document).ready(function() {
    console.log('jquery loaded');
    $('#checkD').click(function(){
        updateCheckBalance();
    })
    $('#checkW').click(function(){
    	withdrawChecking();
    })
     $('#savingsD').click(function(){
    	updateSavingsBalance();
    })
      $('#savingsW').click(function(){
    	withdrawSavings();
    })


 
});


function withdrawChecking(){
	bal = $('#checkbal').text();
	ballance = parseInt(bal)
	valTo = $('#inputCheck').val();
	valtosub = parseInt(valTo)
	if (valtosub > ballance)
		alert('you cannot take out that much');
	else
	updated = (ballance - valtosub)
	$('#checkbal').text(updated);



}

function withdrawSavings(){
	bal = $('#savebal').text();
	ballance = parseInt(bal)
	
	
	valTo = $('#inputSaving').val();
	valtoadd = parseInt(valTo)
	if (valtoadd > ballance)
		alert('you cannot take out that much');
	else
	updated = (ballance - valtoadd);
	
	$('#savebal').text(updated);


}

function updateCheckBalance(){
	bal = $('#checkbal').text();
	ballance = parseInt(bal)
	
	valTo = $('#inputCheck').val();
	valtoadd = parseInt(valTo)
	
	updated = (ballance + valtoadd);
	
	$('#checkbal').text(updated);


}


function updateSavingsBalance(){
	bal = $('#savebal').text();
	ballance = parseInt(bal)
	console.log(ballance);
	// ballance = bal.slice(1);
	valTo = $('#inputSaving').val();
	valtoadd = parseInt(valTo)
	console.log(valtoadd)
	updated = (ballance + valtoadd);
	console.log(updated);
	$('#savebal').text(updated);


}


// var bal = $('#checkbal').text();
// var ballance = bal.slice(1)


// function checkvalues(ele){
// 	$(ele).val();
// }

// var checkings = {
// 	oldval: $('#inputCheck').val(),
// 	newVal: $()
// }
// function CheckWithdrawOk(){
// 	valToWithdraw = 
// 	if (valToWithdraw > currentBal)
// 		alert('you cannot take out that much');
// }

// basic adding to account balance


// function prependWith(){

// }

// var balance = parseInt($(this).siblings('.balance').html().substring(1);
//     balance = parseInt(balance);


   

// var bal = $('#checkbal').text('$100');