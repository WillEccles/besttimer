var timeDisplay = "00:00:00";
var timeString = "";
var timeH, timeM, timeS;

var timeSplit;

var display = document.getElementById("display");
var timeSet = document.getElementById("timeset");

// for moving the whole thing
var timerBox = document.getElementById("timer-container");
// for just messing with the numbers
var timer = document.getElementById("timer");

// do stuff when the page loads
window.onload = function() {
	//timeSet.className += " fall-in";
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

// start the timer, assuming the time has been set
function timego() {
	// if the time has not been set or has been cleared
	if (timeString == "") {
		display.className = "time-set-display flashred";
		
		setTimeout(function() {
			display.className = "time-set-display";
		}, 300);
	}
	// start the timer
	else {
		startTimer();
	}
}

// starts the timer, and does all of the logic to update the display, etc.
function startTimer() {
	// get rid of the time setting window
	// this is not the window you are looking for
	timeSet.className = "timeset lift-out";
	setTimeout(function() {
		timeSet.className = "timeset disabled";
	}, 700);
	
	// now we will show the timer display and start that up
	
	// first of all, we need to show the timer display:
	timerBox.className = "timer-container fall-in";
	setTimeout(function() {
		
	}, 700);
}