$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var savings = {
  balance: $("#savings .balance"),
  putted: $("#savings .input"),
  draw: $("#savings .withdraw").click(function(){
    if ( (savings.balVal - parseInt(savings.putted.val()) ) >= 0){
      savings.balVal = savings.balVal - parseInt(savings.putted.val());
      savings.balance.html("$" + savings.balVal.toString());
      savings.putted.val("");
    }else{
      alert("Not enough BREAD!");
    }
  }),
  depo: $("#savings .deposit").click(function(){
    savings.balVal = savings.balVal + parseInt(savings.putted.val());
    savings.balance.html("$" + savings.balVal.toString());
    savings.putted.val("");
  }),
  balVal: parseInt($("#savings .balance").html().replace("$",""))
};

var checking = {
  balance: $("#checking .balance"),

  putted: $("#checking .input"),

  draw: $("#checking .withdraw").click(function(){
    if( ( checking.balVal- parseInt(checking.putted.val()) ) >= 0){
      checking.balVal = checking.balVal - parseInt(checking.putted.val());
      checking.balance.html("$" +  checking.balVal.toString())
    }else if( bank.moneyExist > parseInt(checking.putted.val()) ){
       var over = parseInt(checking.putted.val()) - checking.balVal;
       savings.balVal = savings.balVal - over ;
       checking.balVal = bank.moneyExist - bank.moneyExist;
       savings.balance.html("$" + savings.balVal.toString() );
       checking.balance.html("$" + checking.balVal.toString());
    }else{
      alert("Not enough BREAD!");
    }
       checking.putted.val("");
  }),

  depo: $("#checking .deposit").click(function(){
    checking.balVal = checking.balVal + parseInt(checking.putted.val());
    checking.balance.html("$" + checking.balVal.toString());
    checking.putted.val("");
  }),

  balVal : parseInt($("#checking .balance").html().replace("$",""))
}

var bank = {

  moneyExist: (checking.balVal + savings.balVal),

};

$("*").hover(function(){

if ( checking.balVal === 0){
  checking.balance.addClass("zero");
}else if( savings.balVal === 0){
  savings.balance.addClass("zero");
}else{
  savings.balance.removeClass("zero");
  checking.balance.removeClass("zero");
}
//alert(checking.balVal)

});




});
