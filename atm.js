$(document).ready(function(){

var checkDeposit = $("#checking .deposit");
var checkWithdraw = $("#checking .withdraw");
var savingDeposit = $("#savings .deposit");
var savingWithdraw = $("#savings .withdraw");
var inputChecking = $("#checking .input");
var inputSaving = $("#savings .input");
var storedChecking = $("#checking .balance");
var storedSaving = $("#savings .balance");

checkDeposit.on("click", function(evt){
 evt.preventDefault();
 var amount = $("#checking .input").val();
 $("#checking .balance").html("$" + amount);
})


checkWithdraw.on("click", function(evt){
 evt.preventDefault();
 var amount = $("#checking .input").val();
 $("#checking .balance").html("$" + amount);
})


savingDeposit.on("click", function(evt){
 evt.preventDefault();
 var amount = $("#savings .input").val();
 $("#savings.balance").html("$" + amount);
})


savingWithdraw.on("click", function(evt){
 evt.preventDefault();
 var amount = $("#savings .input").val();
 $("#savings .balance").html("$" + amount);
})


// var checking =0;
// var saving = 0;
//
//
//
// ('#checking input.deposit').on('click', function(){
//     var deposit = $("#checking input.input").val();
//      var deposit = parseInt(deposit);
//
//    checking = checking + deposit;
//
//   $('#checking div.balance').html("$" + checking);
//  })
//
//    $('#checking input.withdraw').on('click', function(){
//      var withdrawl = $('#checking input.input').val();
//      withdrawl = parseInt(withdrawl);
//
//      var remainder = withdrawl - checking;
//
//      if (remainder < checking){
//        var total = checking - withdrawl;
//        $('#checking div.balance').html("$" + total);
//      }
//        else if(remainder > checking && remainder < savings){
//          checking = 0;
//          savings = savings - remainder;
//        $('#checking div.balance').html("$" + checking);
//        $('#savings div.balance').html("$" + savings);
//      }
//      else if (remainder > checking && remainder > savings){
//          alert("Error! Can't withdraw that much")
//      }
//       else if (withdrawl > checking && withdrawl > savings){        alert("Error! Can't withdraw that much")
//      }
//  })

 //   $('#savings input.deposit').on('click', function(){
 //     var deposit = $("#savings input.input").val();
 //     var deposit = parseInt(deposit);
 //
 //     savings = savings + deposit;
 //
 //   $('#savings div.balance').html("$" + savings);
 // })
 //
 //   $('#savings input.withdraw').on('click', function(){
 //     var withdrawl = $('#savings input.input').val();
 //     withdrawl = parseInt(withdrawl);
 //
 //     var total = savings - withdrawl;
 //
 //     $('#savings div.balance').html("$" + total);
 // })
 // })))
 //


//
//  var checkDeposit = $("#checking .deposit");
//  var checkWithdraw = $("#checking .withdraw");
//  var savingDeposit = $("#savings .deposit");
//  var savingWithdraw = $("#savings .withdraw");
//  var inputChecking = $("#checking .input");
//  var inputSaving = $("#savings .input");
//  var storedChecking = $("#checking .balance");
//  var storedSaving = $("#savings .balance");
//
//
// var checking = 0;
// var saving = 0;
//
// $("checking").on("click"  function(){
//   var = deposit
//   var = deposit
// }
