var hour = document.getElementById("hr");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var milisecond = document.getElementById("count");

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;

function Timer(){
    msec++
    if(msec == 10){
        msec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++
    }
    if(min == 60){
        min = 0;
        hr++;
    }
    hour.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
    milisecond.innerHTML = msec
}

function startBtn(){
    interval = setInterval(function(){
        Timer()
    }, 100)

}

function stopBtn() {
    clearInterval(interval);
}

function resetBtn() {
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hour.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
    milisecond.innerHTML = msec
    stopBtn()
}