$( document ).ready(function() {
  console.log( "document loaded")


  var deposit = document.getElementById('deposit')
  var checking_balance = document.getElementById('checking_balance')
  var b1 = 0


  deposit.addEventListener('click', ca_chang)
  function ca_chang (){
    console.log("hello!");
    b1 += input.value
  }




  // function account_update (){
  //   b1 += 1;
  //   console.log(b1);
  // }





});






// var check = document.getElementById(".header");
// var save = document.getElementById("savings account");

// check.background-color input.value = "blue";


// form.addEventListener("submit", function(){
//   ID="savings"".account" = input.value;
//   box = clear
// })
