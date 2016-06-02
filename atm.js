$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var savings = {
  balance: $("#savings .balance"),
  putted: $("#savings .input"),
  draw: $("#savings .withdraw").click( function(){
    if ( (savings.balVal - parseInt(savings.putted.val()) ) >= 0){
      savings.balVal = savings.balVal - parseInt(savings.putted.val());
      savings.balance.html("$" + savings.balVal.toString());
      savings.putted.val("");

      if(savings.balVal == 0){
        checking.balance.addClass("zero");
      }else{
        checking.balance.removeClass("zero")
      }

    }else{
      alert("Not enough BREAD!");
    }
    }),
  depo: $("#savings .deposit").click(function(){
    savings.balVal = savings.balVal + parseInt(savings.putted.val());
    savings.balance.html("$" + savings.balVal.toString());
    savings.putted.val("");
    if(savings.balVal == 0){
      checking.balance.addClass("zero");
    }else{
      checking.balance.removeClass("zero")
    }
  }),
  balVal: parseInt($("#savings .balance").html().replace("$","")),
};

var checking = {
  balance: $("#checking .balance"),
  putted: $("#checking .input"),
  draw: $("#checking .withdraw").click(function(){
    if( ( checking.balVal - parseInt(checking.putted.val()) ) >= 0){
      checking.balVal = checking.balVal - parseInt(checking.putted.val());
      checking.balance.html("$" +  checking.balVal.toString());

    }else if( (checking.balVal + savings.balVal) > parseInt(checking.putted.val()) ){
       var over = parseInt(checking.putted.val()) - checking.balVal;
       savings.balVal = savings.balVal - over;
       checking.balVal = 0;
       savings.balance.html("$" + savings.balVal.toString());
       checking.balance.html("$" + checking.balVal.toString());

    }else{
      alert("Not enough BREAD!");
    }
       checking.putted.val("");
       if(checking.balVal == 0){
         checking.balance.addClass("zero");
       }else{
         checking.balance.removeClass("zero");
       }
  }),
  depo: $("#checking .deposit").click(function(){
    checking.balVal = checking.balVal + parseInt(checking.putted.val());
    checking.balance.html("$" + checking.balVal.toString());
    checking.putted.val("");

    if(checking.balVal == 0){
      checking.balance.addClass("zero");
    }else{
      checking.balance.removeClass("zero")
    }
  }),

  balVal : parseInt($("#checking .balance").html().replace("$","")),
};

});
