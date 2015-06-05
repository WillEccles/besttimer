var timeDisplay = "00:00:00";
var timeString = "";
var timeH, timeM, timeS;

var timeSplit;

var display = document.getElementById("display");

function timeAdd(amount) {
	// if the time is still not full
	if (!new RegExp("^[0-9]{6,6}$").test(timeString)) {
		timeString = timeString + amount.toString();
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
	}
}

function clearTime() {
	timeString = "";
	timeDisplay = "00:00:00";
	
	display.innerHTML = timeDisplay;
}