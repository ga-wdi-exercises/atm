$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

//checking change-text
// var checking = $('#checking').children().eq(1).text().val();
// console.log(checking);
//savings change text
// var savings = $('#savings').children().eq(1).text();
// console.log(savings);

$('#checking').children('.deposit').on('click', function(){
  console.log($("input").val());
});
