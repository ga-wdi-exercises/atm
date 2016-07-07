$(document).ready(function(){
  console.log("Your Mom");

  $("body").on("mouseover", bodyRed);

    function bodyRed() {
      $("body").css("background", "red");
    }

  $(".checking").on("click", hello);

    function hello()  {
      console.log("Hello.");
    }




  // $('someElement').on('click', function(e){
  //     // stop the event from bubbling.
  //     e.stopPropagation();
  // });



















});
