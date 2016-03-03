function ATM(){
  this.els = {
    checkingBalance: $(".balance").eq(0),
    checkingInput: $("input").eq(0),
    button: $(".checkingButton")
  }
}

ATM.prototype.calculateTotal = function(input){
  var input = input;
  console.log(input);

//console.log(input + "this is my input");
  //for (var i =0; i<this.balance.length; i++){
  //console.log("this is my balance " + total);
//}
  return input;
}

var checking = new ATM();

checking.els.button.on("click", function(){
  var buttonValue = ($(this).val())
  //console.log("this is my button " + this.attr());
  //var total=checking.calculateTotal ($(this).val());
  var input = parseFloat(checking.els.checkingInput.val()); // if not a number is entered NaN is returned
  var negativeInput = input * -1;

  if (buttonValue==="Withdraw"){
    var total=checking.calculateTotal (negativeInput);
} else if (buttonValue==="Deposit"){
    var total=checking.calculateTotal (input);
}
  //checking.balance.push(input); // input will be added together in calculateTotal
//console.log("this is the value of button on click" + ($(this).val())``);
  //var total=checking.calculateTotal ($(this));
  var checkingBalance = checking.els.checkingBalance.html("$" + input); // changes the large number
  checking.els.checkingInput.val(" ");
})





 /* JQuery

$(" ")                 = document.querySelectorAll(" ")
$(" ").eq(1)           = document.querySelectorAll(" ")[]
$(" ").eq(1).html()    = document.querySelectorAll(" ")[]
.html()                = .innerHTML
$(".x:nth-child(3)")    = getting third element with class x

$("body").css("color","red"); // change color
$("body").css("color"); // get color
$("img").prop("src", "a.jpg")
$("img").eq(1).prop("alt") // returns alt of image

*/



/*var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}


// an eventListerner for each button, each one a "click"
*/
