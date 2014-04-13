$(document).ready(function() {
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

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

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

var newPlayer = new player();
newPlayer.setCreditScore(150);
newPlayer.setExistingLoans(125);
newPlayer.setBankAccount(100);