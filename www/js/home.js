/**
 * Created by Noam on 27/05/2016.
 */

var onlongtouch;
var timer;
var touchduration = 2000; //length of time we want the user to touch before we do something

var isProcessed = false;
var outputElement = document.getElementById("boop");

//On fingerpring press start
function touchstart() {
    isProcessed = false;
    timer = setTimeout(onlongtouch, touchduration);
    var output = document.getElementById("boop");
    output.setAttribute("style","color:blue, font-size: 2em");
    output.innerText="Scanning...";
}

//On fingerprint press end
function touchend() {
    //stops short touches from firing the event
    if (timer){
        clearTimeout(timer);
        if (!isProcessed){
            outputElement.setAttribute("style","color:red, font-size: 2em");
            outputElement.innerText="Could not asses chicken rates.";
        }

    }
}

//If press was long enough - Modify html content
var onlongtouch = function() {
    isProcessed = true;
    var chickenPercents = calcChickenPercentage();
    outputElement.innerText= chickenPercents + "% Chicken!";
    if (chickenPercents < 20){
        outputElement.setAttribute("style", "color: green; font-size:1em;")
    }
    else if (chickenPercents <60){
        outputElement.setAttribute("style", "color: #ce8340; font-size: 2em;")
    }
    else {
        outputElement.setAttribute("style", "color: red; font-size:3em;")
    }
};

//Return true if chicken, false otherwise
//Simulates real chicken rates with use of statistics
var isChicken  = function() {
    //TODO: replace with real chicken scanner interface
    var randomvalue = Math.random();
    randomvalue = Math.Floor(randomvalue * 9);
    return randomvalue == 8;
}

var calcChickenPercentage = function(){
    var percents = Math.random() * 100;
    return Math.round(percents);
}



// trials
//$('#body').css('min-height', screen.height);
//$('#body').css('min-width', screen.width);
//document.getElementById('body').style.height = window.innerHeight +'px';
