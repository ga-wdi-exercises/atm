$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

$('body').css('background','red')


var inputChecking = $('#checking .input');
var inputSaving   = $('#savings .input');
var outputChecking = $('#checking .balance')
var outputSavings = $('#savings .balance')



$('#checking .deposit').on('click',write)

function write ()
{
  console.log(inputChecking.val())
  outputChecking.text("$" + inputChecking.val());

}
