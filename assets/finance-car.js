$(document).ready(function() {
	$('#intro-next').on('click', function() {
		hide('intro-container');
		show('profile-container');
	});

	$('#profile-next').on('click', function() {
		hide('profile-container');
		show('car-picker-container');
	});

	$('#car-picker-next').on('click', function() {
		hide('car-picker-container');
		show('loan-picker-container');
	})
});

var hide = function(id) {
	var currClass = $('#' + id);
	console.log(currClass);
	currClass.removeClass('shown');
	currClass.addClass('hidden');
}

var show = function(id) {
	var currClass = $('#' + id);
	currClass.removeClass('hidden');
	currClass.addClass('shown');
}