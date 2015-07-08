var bankAccount = {
  elements: {
    checkingDepositButton: document.getElementsByTagName("input")[1],
    checkingWithdrawButton: document.getElementsByTagName("input")[2],
    savingDepositButton: document.getElementsByTagName("input")[4],
    savingWithdrawButton: document.getElementsByTagName("input")[5]
  },
  listen: function(){
    this.elements.checkingDepositButton.addEventListener("click", function(){
      console.log("work")
      
    }.bind(this))


    this.elements.checkingWithdrawButton.addEventListener("click", function(){
      console.log("work")
    }.bind(this))


    this.elements.savingDepositButton.addEventListener("click", function(){
      console.log("work")
    }.bind(this))

    this.elements.savingWithdrawButton.addEventListener("click", function(){
      console.log("work")
    }.bind(this))
  }
}
bankAccount.listen();










// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var savingBalance = document.querySelector("div#saving_balance");
// savingBalance = parseInt( savingBalance.innerHTML.replace("$", "") );
//
//
// var depositChecking = document.getElementsByTagName("input")[1].addEventListener("click", function(){
//   console.log("working")
//
// })
//
// var WithdrawChecking = document.getElementsByTagName("input")[2].addEventListener("click", function(){
//   console.log("working")
// })
//
// var depositSaving = document.getElementsByTagName("input")[4].addEventListener("click", function(){
//   console.log("working")
// })
//
// var withdrawSaving = document.getElementsByTagName("input")[5].addEventListener("click", function(){
//   console.log("working")
// })
//
//
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
