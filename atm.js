// As a user, I want the color of my back account to reflect its balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
// Tips
//
// Tackle making your accounts work individually first
// Then tackle them working together with overdraft protection
// Only start working with the DOM after you have the logic down

//CheckingAccountVariables
var checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
var checkingNew = Number(parseFloat($(".account input").eq(0).val()));
var checkingDepositButton = $(":button").eq(0);
var checkingWithdrawButton = $(":button").eq(1);

//SavingsAccountVariables

var savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
var savingsNew = Number(parseFloat($(".account input").eq(3).val()));
var savingsDepositButton = $(":button").eq(2);
var savingsWithdrawButton = $(":button").eq(3);

function savingsWithdrawal(){
  savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
  savingsNew = Number(parseFloat($(".account input").eq(3).val()));
  savingsBalance = (savingsBalance - savingsNew);
  $(".balance").eq(1).html("$" + savingsBalance);
  }

function zeroBalance (){
$(".account").eq(0).addClass("zero");
$(".account").eq(1).addClass("zero")
}

zeroBalance()

// an eventListerner for each button, each one a "click"
checkingDepositButton.click(function checkingDeposit(){
  event.preventDefault();
  checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
  checkingNew = Number(parseFloat($(".account input").eq(0).val()));
  checkingBalance = (checkingBalance + checkingNew);
  $(".balance").eq(0).html("$" + checkingBalance);
  $(".account").eq(0).removeClass("zero")})

checkingWithdrawButton.click(function checkingWithdrawal(){
  event.preventDefault();
  checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
  checkingNew = Number(parseFloat($(".account input").eq(0).val()));
  if (checkingBalance >= checkingNew)
  {
  checkingBalance = (checkingBalance - checkingNew);
  $(".balance").eq(0).html("$" + checkingBalance);
  }
  else if ((checkingBalance + savingsBalance) >= savingsNew)
  {
  savingsBalance = (checkingBalance + savingsBalance - checkingNew);
  checkingBalance = 0;
  $(".balance").eq(0).html("$" + checkingBalance);
  $(".balance").eq(1).html("$" + savingsBalance);
  }
  else {
    alert("You do not have sufficient funds to make this transaction.")
  }
  if (checkingBalance > 0)
  {$(".account").eq(0).removeClass("zero")}
  else if (checkingBalance === 0)
{$(".account").eq(0).addClass("zero")}
})

savingsDepositButton.click(function savingsDeposit(){
  event.preventDefault();
  savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
  savingsNew = Number(parseFloat($(".account input").eq(3).val()));
  savingsBalance = (savingsBalance + savingsNew);
  $(".balance").eq(1).html("$" + savingsBalance);
  $(".account").eq(1).removeClass("zero")})

savingsWithdrawButton.click(function savingsWithdrawal(){
  event.preventDefault();
  savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
  savingsNew = Number(parseFloat($(".account input").eq(3).val()));
  if (savingsBalance >= savingsNew)
  {
  savingsBalance = (savingsBalance - savingsNew);
  $(".balance").eq(1).html("$" + savingsBalance);
  }
  else if ((checkingBalance + savingsBalance) >= savingsNew)
  {
  checkingBalance = (checkingBalance + savingsBalance - savingsNew);
  savingsBalance = 0;
  $(".balance").eq(0).html("$" + checkingBalance);
  $(".balance").eq(1).html("$" + savingsBalance);
  }
  else {
    alert("You do not have sufficient funds to make this transaction.")
  }
  if (savingsBalance > 0)
  {$(".account").eq(1).removeClass("zero")}
  else if (savingsBalance === 0)
{$(".account").eq(1).addClass("zero")}
})
