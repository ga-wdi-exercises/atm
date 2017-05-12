$(document).ready(function(){

var type= prompt("For saving account enter 1 or for saving account enter 2, please")
if(type==1)
{
  var depositButton = $("#checking .deposit")
  var withdrawButton =$("#checking .withdraw")
  var balance1 =$("#checking .balance")
  var balance =balance1.html().replace("$","")
  var amount1 = $("#checking .input");
}
else if (type==2){
  var depositButton = $("#savings .deposit")
  var withdrawButton =$("#savings .withdraw")
  var balance1 =$("#savings .balance")
  var balance =balance1.html().replace("$","")
  var amount1 = $("#savings .input");
}
else {
  alert("Am sorry, I think you are new customer, please call 202 123 4567 for more information")
  return;
}

function deposit(){
   var amount = amount1.val();
    if (isNaN(amount)==true){
      alert("Please enter valid number, please!!!")
    }
    else{
      console.log("You add $" + amount);
      balance= parseInt(balance) + parseInt(amount);
      console.log("your balance now is $" + balance);
      balance1.text("$"+balance)
      if (balance>0){
         balance1.removeClass("zero");
       }
    }

    }
 depositButton.on("click",deposit);

 function withdraw(){
    var amount = amount1.val();
    if (isNaN(amount)==true){
      alert("Please enter valid number, please!!!")
    }
    else{
      console.log("You withdraw $" + amount);
      if (amount<=balance){
          balance= parseInt(balance) - parseInt(amount);
           console.log("your balance now is $" + balance);
           balance1.text("$"+balance)

           if (balance === 0){
             balance1.addClass("zero");
           }
           else {
             balance1.removeClass("zero");
           }
          }
      else {
          console.log("Your balance is declined, the maximum amount you can withdraw currently is $" + balance);
          alert("Your balance is declined, the maximum amount you can withdraw currently is $" + balance);
       }
    }

    }
  withdrawButton.on("click",withdraw);

})
