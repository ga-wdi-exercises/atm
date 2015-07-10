$(document).ready(function)(){
  $("depositButton").on("click", function()){
    var deposit = parseInt($(".depositInput").val());
    var balance = $(".balance.checking").text();
    balance = parseInt(balance.replace("$", ""));
    var newBalance = deposit + balance;
    $(".balance.checking").text("$" + newBalance);

  }
}
