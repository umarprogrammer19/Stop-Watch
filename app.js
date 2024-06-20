let hours = 0;
let min = 0;
let sec = 0;
let msec = 0;

let gethours = document.getElementById('hours');
let getmin = document.getElementById('min');
let getsec = document.getElementById('sec');
let getmsec = document.getElementById('msec');

let interval;

function startbtn() {
    interval = setInterval(function () {
        msec++;
        getmsec.innerHTML = msec;

        if (msec > 100) {
            sec++;
            getsec.innerHTML = sec;
            msec = 0;
        }

        else if (sec >= 59) {
            min++;
            getmin.innerHTML = min;
            sec = 0;
        }

        else if (min >= 59) {
            hours++;
            gethours.innerHTML = hours;
            min = 0;
        }

    }, 10)
    document.getElementById('startbtn').disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById('startbtn').disabled = false;
}

function reset() {

    hours = 0;
    min = 0;
    sec = 0;
    msec = 0;

    gethours.innerHTML = hours + '0';
    getmin.innerHTML = min + "0";
    getsec.innerHTML = sec + "0";
    getmsec.innerHTML = msec + "0";
}
