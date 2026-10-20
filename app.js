var min = document.getElementById("min");
var sec = document.getElementById("sec");
var milisec = document.getElementById("milisec");

var minute = 0;
var second = 0;
var milisecond = 0;
var interVal;

function start() {

    interVal = setInterval(
        function () {
            milisecond++;
            milisec.innerHTML = milisecond;
            if (milisecond >= 100) {
                second++;
                sec.innerHTML = second;
                milisecond = 0;
            }
            else if (second >= 60) {
                minute++;
                min.innerHTML = minute;
                second = 0;
            }
        }
        , 10
    )
    document.getElementById("btn").disabled = true;
}


function stop() {
    clearInterval(interVal);
    document.getElementById("btn").disabled = false;
}

function reset() {
    clearInterval(interVal);
    minute = 0;
    second = 0;
    milisecond = 0;
    min.innerHTML = minute;
    sec.innerHTML = second;
    milisec.innerHTML = milisecond
    document.getElementById("btn").disabled = false;
}


