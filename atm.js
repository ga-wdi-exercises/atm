/*Enter an amount -
    -user enters a number value
    -user clicks either on deposit or withdraw

checking account
    when deposit button clicked{
                   get the value and add that to the checking balance
                      }
    withdraw button clicked {

               if (balance == '0' || value > balance){
                              prompt("You don't have enough money,please check your savings account")
                            } else if(value < balance ){
                                   then do this function withdraw(value, balance){
                                                    new balance = (balance - value)
                                                    return new balance;
                                                  }
                          }else{
                          prompt("invalid amount")
                        }


                 }





 Saving account

           when deposit button clicked{
                                  get the value and add that to the Savings balance
                                    }
                                    withdraw button clicked {

                                               if (balance == '0' || value > balance){
                                                              prompt("You don't have enough money,please add more money")
                                                            } else if(value < balance ){
                                                                   then do this function withdraw(value, balance){
                                                                                    new balance = (balance - value)
                                                                                    return new balance;
                                                                                  }
                                                          }else{
                                                          prompt("invalid amount")
                                                        }


                                                 }






*/

/*
var balance = $(".balance")

var input = $(".input")

var deposit = $(".deposit")



*/

$(document).ready(function(){

});

var checkingDeposit = $( "#checking" ).children(".deposit");
console.log("Checking");

checkingDeposit.click(function(){
 console.log("works fine");
});


var savingDeposit = $( "#savings" ).children(".deposit");
console.log("saving");

savingDeposit.click(function(){
 console.log("works with saving");
});
