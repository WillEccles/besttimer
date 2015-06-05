var timeDisplay = "00:00:00";
var timeString = "";
var timeH, timeM, timeS;

var timeSplit;
var tDispSplit;

var display = document.getElementById(display);

function timeAdd(amount) {
	// if the time is still not full
	if (!new RegExp("^[0-9]{6,6}$")) {
		timeString = timeString + amount;
	}
	timeSplit = timeString.split("");
	tDispSplit = timeDisplay.split("");
	
	var zeroes = 6-timeSplit.length();
	
	var newTime = timeString;
	
	// if need be, add 0's
	if (zeroes > 0) {
		for (var i = 0; i < zeroes; i++) {
			newTime = "0" + newTime;
		}
	}
	
	
}

function updateDisplay() {
	
	
	var offset = 0;
	tDispSplit = timeDisplay.split("");
	for (var i = 0; i < timeSplit.length(); i++) {
		if (tDispSplit[i+offset]
	}
}