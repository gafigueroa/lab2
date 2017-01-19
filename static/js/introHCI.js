'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();

	$(this).css("background-color","#7fff00");

	var projectTitle = $(this).find("p").text();
	console.log(projectTitle);
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
}