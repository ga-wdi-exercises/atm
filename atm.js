$(document).ready(function(){

  // checking related variables
  var checkBalance = 0
  var checkInput = $('#checking .input')
  var checkDepo = $('#checking .deposit')
  var checkWith = $('#checking .withdraw')
  var checkBalDisplay = $('#checking .balance')

  var savingsBalance = 0
  var savingsInput = $('#savings .input')
  var savingsDepo = $('#savings .deposit')
  var savingsWith = $('#savings .withdraw')
  var savingsBalDisplay = $('#savings .balance')

  function depositToChecking () {
    var actInput = parseInt(checkInput.val())
    checkBalance += actInput
    checkBalDisplay.text(checkBalance)
  }
function depositToSavings () {
  var actInput = parseInt(savingsInput.val())
  savingsBalance += actInput
  savingsBalDisplay.text(savingsBalance)
}
function withdrawFromChecking () {
  var actInput = parseInt(checkInput.val())
  checkBalance -= actInput
  checkBalDisplay.text(checkBalance)
}
function withdrawFromSavings () {
  var actInput = parseInt(savingsInput.val())
  savingsBalance -= actInput
  savingsBalDisplay.text(savingsBalance)
}

  // function withdrawFromChecking () {
  //   var actinput = parseInt(checkInput.val())
  //   checkings.bal = checkings.withdraw(actInput)
  //   checkingBal.text(checkings.bal)
  // }



  checkDepo.on('click', function () {
    depositToChecking()
  })// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  checkWith.on('click', function () {
    withdrawFromChecking()
  })
  savingsDepo.on('click', function () {
    depositToSavings()
  })
  savingsWith.on('click', function () {
    withdrawFromSavings()

  })

})
