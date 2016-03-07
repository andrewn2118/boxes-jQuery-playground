console.log("hello world");

// $(document).ready(function(){
//   alert("Ready for DOM manipulation!");
// });

$(function(){
  // Part 1
  /*alert("Ready for DOM manipulation!");*/

  // Part 2
  /*$("#secretBox").css("background", "white");
  $("#secretBox").append("<h1>secret box!</h1>");
  $("#row1").children().addClass("boxType3");
  $("#row4").children().last().css("display", "none");
  $(".boxType1").css("background", "white");
  $("#row2").children().slice(0,2).removeClass();
  $(".box").not("#secretBox").css("width", "2px");*/

  // Part 3
  $("#container").on("click", function(){
    console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
  });
  $(".boxType1").html("<a href='http://www.galvanize.com/'>Galvanize</a>");
  $("a").click(function(event){
    event.preventDefault();
    alert("Gotcha!");
  });
  $(".box").on("click", function(event){
    $(event.target).toggleClass("puppy");
  });
  $("#container").click(function(event){
    if(event.target !== this){
      $(event.target).css("background-color", "white");
      $(this).css("background-color", "black");
    } else {
      $(event.target).css("background-color", "lime");
    }
  });
});