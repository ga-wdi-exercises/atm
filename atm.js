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






var checkDeposit = $("#checking .deposit");
var checkInput = $("#checking .input");




var checkBalance = 0;
var savingsBalance = 0;

//checking deposit
$("#checking .deposit").on("click", function(){
                       var checkInput = $("#checking .input").val()

                   checkBalance = +checkInput + +checkBalance;
                   $("#checking .balance").html("$" + checkBalance);
                              })

//checking withdraw

$("#checking .withdraw").on("click", function(){
                         var checkInput = $("#checking .input").val()

                     checkBalance = +checkBalance - +checkInput;
                     $("#checking .balance").html("$" + checkBalance);
                     })

       // Savings account

   $("#savings .deposit").on("click", function(){
                          var checkInput = $("#savings .input").val()

                      checkBalance = +checkInput + +checkBalance;
                      $("#savings .balance").html("$" + checkBalance);
                      })

   //Withdraw from savings
   $("#savings .withdraw").on("click", function(){
                          var checkInput = $("#savings .input").val()

                      checkBalance = +checkBalance - +checkInput;
                      $("#savings .balance").html("$" + checkBalance);
                      })
