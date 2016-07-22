// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d"); // Or document.getElementsByTagName("canvas")[0]
var lastEvent;
var mouseDown = false;

// When clicking on control list items
// Instead of .click, to bind .controls event handler to li element dynamically
$(".controls").on("click", "li", function() {
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  
  // Select clicked element
  $(this).addClass("selected");
  
  // Cache current color
  color = $(this).css("background-color");
});

// When new color is pressed
$("#revealColorSelect").click(function() {
  changeColor();
  // Show color select or hide selector
  $("#colorSelect").toggle();
});

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// When color slider changes
$("input[type=range]").change(changeColor);
// Update the new color span

// When add color is pressed
$("#addNewColor").click(function() {
  // Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // Select new color
  $newColor.click();
});

// On mouse events on the canvas
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  // Draw lines
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    // context.closePath();
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() { // When mouse leaves DOM element
  $canvas.mouseup();
});