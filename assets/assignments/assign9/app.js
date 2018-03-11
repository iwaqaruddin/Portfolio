var min = 0, sec = 0, miliSec = 0, timer;

function stopWatch() {
    for (min = 0; min < 60; min++) {
        for (sec = 0; sec < 60; sec++) {
            for (miliSec = 0; miliSec < 1000; miliSec++) {
                document.getElementById('timer').innerHTML = min + ":" + sec + ":"+miliSec;
            }
        }
    }
}


function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }

        }

    }
    else
    {

        miliSec=0;
    }
    document.getElementById('timer').innerHTML=min + ":" + sec + ":"+miliSec;
}
function start()
{
    timer=setInterval(callTimer,10);
    document.getElementById('startButton').disabled=true;
    document.getElementById('stopButton').disabled=false;
}
function stop()
{
    clearInterval(timer);
    document.getElementById('startButton').disabled=false;
    document.getElementById('stopButton').disabled=true;
}
function reset()
{
    clearInterval(timer);
    document.getElementById('timer').innerHTML="0:0:0";
    miliSec=0, sec=0, min=0;
    document.getElementById('startButton').disabled=false;
    document.getElementById('stopButton').disabled=false;
}