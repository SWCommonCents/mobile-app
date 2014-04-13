// tracks current state 
var state = {};

$(document).ready(function() {
	// instantiate new player and add him to the state
	var newPlayer = new player();
	newPlayer.setCreditScore(150);
	newPlayer.setExistingLoans(125);
	newPlayer.setBankAccount(100);
	state["player"] = newPlayer;

	$('.car-dealership').on('click', function() {
		hideMap();
		show('car-picker-container');
	})

	// Handle global profile handler
	$('#profile-icon').on('click', function() {
		hideMap();
		show('profile-container');
	})

	$('#go-back').on('click', function() {
		hide('profile-container');
		showMap();
	})

	// set up drag to scroll for the map
	$("#iphone-container").dragscrollable({
		dragSelector: '#city-img',
		acceptPropagatedEvent: false
	});	

	$('#intro-next').on('click', function() {
		hide('intro-container');
		show('profile-container');
		$('.bank').html(newPlayer.getBankAccount());
		$('.loans').html(newPlayer.getExistingLoans());
	});

	$('#profile-next').on('click', function() {
		hide('profile-container');
		show('car-picker-container');
	});

	$("#owl-demo").owlCarousel({
	  navigation : true, // Show next and prev buttons
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true
	});

	$('#review-dialogue').dialog({
		autoOpen: false,
		resizable: true,
		height: 500,
		width: 500,
		modal:true,
		buttons: {
			"Confirm purchase" : function() {
				$( this ).dialog("close");
				hide('car-picker-container')
				showMap();
			},
			Cancel: function() {
				$( this ).dialog("close");
			}
		}
	});

	$('#car-picker-review').on('click', function() {
		// open modal for confirmation dialogue
		$("#review-dialogue").dialog("open");
	});
});

var hide = function(id) {
	var currClass = $('#' + id);
	currClass.removeClass('shown');
	currClass.addClass('hidden');
}

var show = function(id) {
	var currClass = $('#' + id);
	currClass.removeClass('hidden');
	currClass.addClass('shown');
}

// function to hide map-only elements
var hideMap = function(){
	hide('city-container');
	hide('UI-bar');
	hide('car-dealership-tag');
}


var showMap = function() {
	show('city-container');
	show('UI-bar');
	show('car-dealership-tag');
}

function player(){
	var bankAccount = 0;
	var existingLoans = 0;
	var creditScore = 0;

	this.getCreditScore = function(){
		return creditScore;
	}
	this.setCreditScore = function( score ){
		creditScore = score;
	};

	this.getExistingLoans = function(){
		return existingLoans;
	};
	this.setExistingLoans = function( loans ){
		existingLoans = loans;
	}

	this.getBankAccount = function(){
		return bankAccount;
	}
	this.setBankAccount = function( account ){
		bankAccount = account;
	}
}

function car( make, value, loan ){
	var name = make;
	var cost = value;
	var interest = loan;

	this.getName = function(){
		return name;
	}
	this.getCost = function(){
		return cost;
	}
	this.getInterest = function(){
		return interest;
	}
}

// Update state
var updateState = function(key, value) {
	state[key] = value;
}

var getState = function(key) {
	return state[key];
}

var pickCar = function(name) {
	updateState('car', name);
	hide('car-picker-container');
	show('loan-picker-container');
}

var pickLoan = function(id) {
	var text = id == 1 ? "Car Dealership Loan" : "Ameritrabe Bank";
	$('#car-picker-next').text("Loan: " + text);
	hide('loan-picker-container');
	show('car-picker-container');
}