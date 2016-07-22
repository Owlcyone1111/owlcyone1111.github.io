function myCode() {
	$(".warning").hide().show("slow");
}

// or var myCode = function() { }

// .ready() specifies a function to execute when DOM is fully loaded
$(document).ready(myCode); // or just $(handler);