
let point = 0;

function PlayMusic() {
    play()
}
function play() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
    audio1.loop = true;
}
let timeRem = 15;
let timer;
let transpChange;

function startCountdown() {
    let timeOut = document.getElementById('timeOut');
    timeOut.innerHTML = timeRem;
    timer = setInterval(countdown, 1000);

    transpChange = 1 / timeRem;
    console.log(transpChange);
}

function countdown() {
    if (timeRem > 0) {
        timeRem--;
        let timeOut = document.getElementById('timeOut');
        timeOut.innerHTML = timeRem;

        let front = document.getElementById('frontLevel');
        front.style.opacity = timeRem * transpChange;
        console.log(timeRem * transpChange);


    } else {
        clearInterval(timer);
        let timeOut = document.getElementById('timeOut');
        timeOut.innerHTML = 'END';
        nextLevelDecision();

    }

}

function addPoint() {
    point += 1;
    document.getElementById("text").innerHTML = "Pieces of rubish picked up: " + point;
}

function nextLevelDecision() {
    if (timeOut.innerHTML = 'END' && point == 9) {
        document.getElementById("text").innerHTML = "Great! I managed to clean this place up in time! \n Pieces of rubish picked up: " + point;
        return 'END';
    } else {
        document.getElementById("text").innerHTML = "Oh NO! I'm going to get fired! \n Pieces of rubish picked up: " + point;
        setTimeout(function () {
            window.location.replace("losingpage.html")
        }, 5000);
    }
}

//document.getElementById("text").innerHTML = sessionStorage.getItem("pointText")
  