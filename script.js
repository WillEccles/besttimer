var timeDisplay = "00:00:00";
var timeString = "";
var timeH, timeM, timeS;

var timeSplit;

var display = document.getElementById("display");
var timeSet = document.getElementById("timeset");

// for just messing with the numbers
var timer = document.getElementById("timer");
// so stuff to the timer
var timerBox = document.getElementById("timer-container");

// do stuff when the page loads
window.onload = function() {
	timeSet.className += " fall-in";
};

// add [amount] to the time in the time setting window
// ex. 00:00:00 + 1 = 00:00:01
//     00:00:50 + 0 = 00:05:00
function timeAdd(amount) {
	// if time is empty and they try to add a 0
	if (timeString == "" && amount.toString() == "0") {
		display.className = "time-set-display flashred";
		
		setTimeout(function() {
			display.className = "time-set-display";
		}, 300);
	}
	// if the time is not full
	else if (!new RegExp("^[0-9]{6,6}$").test(timeString)) {
		timeString = timeString + amount.toString();
	}
	// if the time is full
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
	// "this is not the window you are looking for" - Obi Wan, Star Wars Episode VI
	timeSet.className = "time-set lift-out";
	setTimeout(function() {
		timeSet.className = "time-set disabled";
	}, 700);
	
	// now we will show the timer display and start that up
	
	// first of all, we need to show the timer display.
	// start by setting time, so that it has the right number when it falls in
	
	// indirectly mess with timeString
	var newTime = timeString;
	// # of 0's to add
	var zeroes = 6-(timeString.split("").length);
	// add the zeroes
	if (zeroes > 0) {
		for (var i = 0; i < zeroes; i++) {
			newTime = "0" + newTime;
		}
	}
	
	var newTimeParts = newTime.split("");
	// set the timeDisplay string
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
	
	// finally, set the timer display
	timer.innerHTML = timeDisplay;
	// now show the timer
	timerBox.className = "timer-container";
	timerBox.className += " lift-in";
	//setTimeout(function() {
		// this should happen after the .7s transitions
		timerCountdown();
	//}, 700);
}

// make the timer actually count down
function timerCountdown() {
	var time = timeString;
	// # of 0's to add
	var zeroes = 6-(timeString.length);
	// add the zeroes
	if (zeroes > 0) {
		for (var i = 0; i < zeroes; i++) {
			time = "0" + time;
		}
	}
	
	var t = time.split("");
	var l = t.length;
	
	console.log(timeString);
	
	console.log("l = " + l);
	
	for (var i = 0; i < l; i++) {
		console.log(i + ". " + t[i]);
	}
	
	// seconds, mins, hours
	var s = parseInt((t[l-2] + t[l-1]));
	var m = parseInt((t[l-4] + t[l-3]));
	var h = parseInt((t[l-6] + t[l-5]));
	
	
	// seconds of total time to count down
	var finalTime = s + (m*60) + (h*3600);
	
	// now count down, setting the timer display as we go
	var countDown = setInterval(function() {
		finalTime--;
		
		// seconds remaining
		var remainingTime = finalTime;
		
		// if there is no time remaining
		if (remainingTime == 0) {
			// stop this timer
			clearInterval(countDown);
			// set the 00:00:00 on the display
			timeDisplay = "00:00:00";
			timer.innerHTML = timeDisplay;
		}
		// if there is time left
		else {
			// seconds, mins, hours left
			var sLeft = 0, mLeft = 0, hLeft = 0;
			// set the hours left
			if (remainingTime/3600 >= 1) {
				hLeft = Math.floor(remainingTime/3600);
				
				// leave only minutes/seconds remaining
				remainingTime -= hLeft*3600;
			}
			// set minutes left
			if (remainingTime/60 >= 1) {
				mLeft = Math.floor(remainingTime/60);
				
				// leave only seconds
				remainingTime -= mLeft*60;
			}
			// set seconds left
			if (remainingTime >= 1) {
				sLeft = remainingTime;
				
			}
			
			// update the timer display
			timeDisplay = 
				((hLeft<=9)?"0"+hLeft.toString():hLeft.toString()) +
				":" +
				((mLeft<=9)?"0"+mLeft.toString():mLeft.toString()) +
				":" +
				((sLeft<=9)?"0"+sLeft.toString():sLeft.toString());
			
			timer.innerHTML = timeDisplay;
			
			// one less second remaining
			//finalTime--;
		}
		
	}, 1000 /* do this every second */ );
}