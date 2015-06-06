var timeDisplay = "00:00:00";
var timeString = "";
var timeH, timeM, timeS;

var timeSplit;

var display = document.getElementById("display");
var timeSet = document.getElementById("timeset");

// do stuff when the page loads
window.onload = function() {
	timeSet.className += " fall-in";
};

// add [amount] to the time in the time setting window
// ex. 00:00:00 + 1 = 00:00:01
//     00:00:50 + 0 = 00:05:00
function timeAdd(amount) {
	// if the time is still not full
	if (!new RegExp("^[0-9]{6,6}$").test(timeString)) {
		timeString = timeString + amount.toString();
	}
	else {
		display.className = "time-set-display flashred";
		
		setTimeout(function() {
			display.className = "time-set-display";
		}, 300);
	}
	timeSplit = timeString.split("");
	
	var zeroes = 6-timeSplit.length;
	
	var newTime = timeString;
	
	// if need be, add 0's
	if (zeroes > 0) {
		for (var i = 0; i < zeroes; i++) {
			newTime = "0" + newTime;
		}
	}
	
	var newTimeParts = newTime.split("");
	
	timeDisplay = (
		newTimeParts[0] +
		newTimeParts[1] +
		":" +
		newTimeParts[2] +
		newTimeParts[3] +
		":" +
		newTimeParts[4] +
		newTimeParts[5]
	);
	
	display.innerHTML = timeDisplay;
	
	/*
	// set the timeString to be what it should be (without the leading 0's)
	var significant = false;
	for (var thing in newTimeParts) {
		if (significant == false) {
			if (thing != "0") {
				significant = true;
			}
		}
		else {
			timeString += thing;
		}
	}*/
}

// clear the time in the time setting window
function clearTime() {
	timeString = "";
	timeDisplay = "00:00:00";
	
	display.className = "time-set-display flashwhite";
		
	setTimeout(function() {
		display.className = "time-set-display";
	}, 300);
	
	display.innerHTML = timeDisplay;
}