var checkBal = 0;
var savBal = 0;
var checkDepo = 0;
var checkDraw = 0;
var depoType;
var drawType;

$(document).on("ready", function() {

$("#checking").find(".deposit").on("click", function(){
    checkDepo = parseInt($("#checking").find(".input").val());
    checkBal = parseInt(checkBal + checkDepo);
    $("#checking").find(".balance").text(checkBal);
    checkDepo = null;
    $("#checking").find(".input").val("");
});

$("#checking").find(".withdraw").on("click", function(){
    checkDraw = parseInt($("#checking").find(".input").val());
    checkBal = parseInt(checkBal - checkDraw);
    $("#checking").find(".balance").text(checkBal);
    checkDraw = null;
    $("#checking").find(".input").val("");
});

$(":button").on("click", function() {
    txType = $(this).val();
    txAcct = $(this).parent($(".class")).attr('id');
})

});
