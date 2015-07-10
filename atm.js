/**
var checkingBalance = document.querySelector("div#checking_balance");
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
*/

// var checkingBalString = $( "#check-bal" ).val();
// var checkingBalance = parseInt(checkingBalString);
// console.log("checkikngBalString is of type " + typeof(checkingBalString));
// console.log("checkingBalString is " + checkingBalString);
// console.log("checkingBalString.substring(1) is of type " + typeof(checkingBalString.substring(1)));
// console.log("checkingBalString.substring(1) is " + checkingBalString.substring(1));
// console.log("checkingBalance int parsed is of type " + typeof(parseInt(checkingBalString.substring(1))));
// console.log("checkingBalance int parsed from string is " + checkingBalance);
//
var checkingBalString;
var checkingBalance = parseInt($( "#check-bal" ).val());

/**
$( ".account" ).children().eq(3).on("click", function(){
  //checkingBalance = parseInt($( "#check-bal" ).val());
  // console.log("checkingBalString is of type " + typeof(checkingBalString));
  // console.log("checkingBalString is " + checkingBalString);
  //checkingBalance = parseInt(checkingBalString);
  console.log("checkingBalance is of type " + typeof(checkingBalance));
  console.log("checkingBalance is " + checkingBalance);
  console.log("$( '.balance' ).html() is " + $( ".balance" ).html());
  var deposit = parseInt($( "#check-field" ).val());
  //var depositStr = $( "#check-field" ).val();
  //var deposit = parseInt(depositStr);
  console.log("deposit is of type " + typeof(deposit));
  console.log("deposit amount is " + deposit);
  checkingBalance = checkingBalance + deposit;
  console.log("(checkingBalance + deposit) is of type " + checkingBalance);
  console.log("checkingBalance is " + checkingBalance);
  $( "#check-bal" ).html( checkingBalance );
  //console.log($( "#check-field" ).val());
} )

$( ".account" ).children().eq(4).on("click", function(){
  console.log($( ".balance" ).html());
  $( "#check-bal" ).html( $( "#check-field" ).val() );
  console.log($( "#check-field" ).val());
} )

*/

var checkDepWith;
var checkingBalance = 0;
var saveDepWith;
var savingBalance = 0;

if (checkingBalance === 0){
  $( ".account" ).css("background-color", "#F52F4F");
}
else{
  $( ".account" ).css("background-color", "#6C9A74");
}

$( "#check-dep-button" ).on( "click", function(){
  checkDepWith = $( "#check-field" ).val();
  $( "#check-field" ).val("");
  checkingBalance = checkingBalance + parseFloat(checkDepWith);
  $( "#check-bal" ).html("$" + checkingBalance);
  if (checkingBalance === 0){
    $( ".account" ).css("background-color", "#F52F4F");
  }
  else{
    $( ".account" ).css("background-color", "#6C9A74");
  }
})

$( "#check-with-button" ).on( "click", function(){
  checkDepWith = $( "#check-field" ).val();
  $( "#check-field" ).val("");
  if ((parseFloat(checkDepWith) > checkingBalance) && (parseFloat(checkDepWith) - checkingBalance) < savingBalance) {
    savingBalance = savingBalance - (parseFloat(checkDepWith) - checkingBalance);
    checkDepWith = 0;
    checkingBalance = 0;
    $( "#check-bal" ).html("$" + checkingBalance);
    $( "#save-bal" ).html("$" + savingBalance);
  }
  else if (parseFloat(checkDepWith) > checkingBalance){
    checkDepWith = 0;
  }
  else{
    checkingBalance = checkingBalance - parseFloat(checkDepWith);
    $( "#check-bal" ).html("$" + checkingBalance);
  }
  if (checkingBalance === 0){
    $( ".account" ).css("background-color", "#F52F4F");
  }
  else{
    $( ".account" ).css("background-color", "#6C9A74");
  }
})

$( "#save-dep-button" ).on( "click", function(){
  saveDepWith = $( "#save-field" ).val();
  $( "#save-field" ).val("");
  savingBalance = savingBalance + parseFloat(saveDepWith);
  $( "#save-bal" ).html("$" + savingBalance);
})

$( "#save-with-button" ).on( "click", function(){
  saveDepWith = $( "#save-field" ).val();
  $( "#save-field" ).val("");
  if (parseFloat(saveDepWith) > savingBalance){
    saveDepWith = 0;
  }
  else{
    savingBalance = savingBalance - parseFloat(saveDepWith);
    $( "#save-bal" ).html("$" + savingBalance);
  }
  // savingBalance = savingBalance - parseFloat(saveDepWith);
  // $( "#save-bal" ).html(savingBalance);
})
