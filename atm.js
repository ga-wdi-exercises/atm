//add event listener to listen for click on deposit button
//when deposit button is clicked, change div with balance

 $(".Cdepbutton").on("click", function(){
  var userEntry = $(".Ctext").val();
  console.log(userEntry);
  $('.balance').eq(0).val(userEntry);
});
  // var checkingDeposit = function(amount){
  // checkingBalance = parseInt(balance.innerHTML.replace("$", "") );


  //when button is pressed perform a function
  // $("input").val(); //get the user input
                //put user input into a class





//http://stackoverflow.com/questions/8637752/jquery-nth-child-append

















// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }
//
// // an eventListerner for each button, each one a "click"
// $("input").val();
