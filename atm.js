$(document).ready(function(){
//These are wrong, should probably be parseInt's
var left = {
  teller: $("#chkInput"),
  balance: $("#bal1"),
  depositButton: $("#chkDep"),
  withdrawButton: $("#chkWithdraw"),
};
//Theoretically this should work, but it doesn't (probably) because the above variables aren't passing the right information.
    left.depositButton.click(function(){
    var transD = parseInt(left.teller.val());
    //left.balance.text(trans);
    var newBalanceD = parseInt(left.balance.text().replace("$", "")) + transD;
    left.balance.text(newBalanceD);
    });

  left.withdrawButton.click(function(){
    var transW = parseInt(left.teller.val());
    var newBalanceW = parseInt(left.balance.text().replace("$","")) - transW;
    left.balance.text(newBalanceW);

    if (newBalanceW <= 0) {
      left.balance.addClass("zero");
    }
  });









});
// an eventListerner for each button, each one a "click"
//
