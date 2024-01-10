
var hours = 0
var min = 0
var sec = 0
var msec = 0

var gethours = document.getElementById('hours')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')

var interval;

function startbtn() {
    interval = setInterval(function () {
        msec++
        getmsec.innerHTML = msec

        if (msec >= 100) {
            sec++
            getsec.innerHTML = sec
            msec = 0
        }

        else if (sec >= 60) {
            min++
            getmin.innerHTML = min
            sec = 0
        }

        else if (min >= 60) {
            hours++
            gethours.innerHTML = hours
            min = 0
        }

    }, 10)
    document.getElementById('startbtn').disabled = true
}

function stop() {
    clearInterval(interval)
    document.getElementById('startbtn').disabled = false
}

function reset() {
    
    hours = 0
    min = 0
    sec = 0
    msec = 0

    gethours.innerHTML = hours
    getmin.innerHTML = min
    getsec.innerHTML = sec
    getmsec.innerHTML = msec
}