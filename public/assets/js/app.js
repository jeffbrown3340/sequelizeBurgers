function reloadBurgers() {
	$("#all-burgers").load("/");
	$("#burger-name").val("");
}

function ajaxCall(callingForm, ajaxMethod){
	$.ajax({
		url: callingForm.attr("action"), 
		method: ajaxMethod,
		data: callingForm.serialize()
	}).done(reloadBurgers);
}

$(document).on("submit", ".create-form", function(event){
	event.preventDefault();
	ajaxCall($(this), "POST");
});

$(document).on("submit", ".update-form", function (event) {
	event.preventDefault();
	ajaxCall($(this), "PUT");
});

$(document).on("submit", ".delete-form", function (event) {
	event.preventDefault();
	ajaxCall($(this), "DELETE");
});


