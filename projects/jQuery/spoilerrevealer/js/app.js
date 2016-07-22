//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user ineraction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. Button handler
$("button").click(function() {
  //3.1 Show spoiler
  $(this).prev().show();
  //3.2 Get rid of button
  $(this).remove();
});