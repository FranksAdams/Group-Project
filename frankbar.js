let lockcount = 0


//Customer1
var a = 0;
var txt1 = 'Manager: Hey! Ready to work at the bar? Tills broken so, you better make sure you know those prices!';
var speed1 = 25;

function typeWriter() {
  if (a < txt1.length) {
    document.getElementById("text1").innerHTML += txt1.charAt(a);
    a++;
    setTimeout(typeWriter, speed1);
  }
}

var b = 0;
var txt2 = 'First Customer: Hello fella! Could you tell me how much two pints of Guinness are?';
var speed2 = 25;

function typeWriter1() {
  if (b < txt2.length) {
    document.getElementById("text2").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(typeWriter1, speed2);
  }
}

var c = 0;
var txt3 = 'First Customer: Yeah, that\'s great thanks.';
var speed3 = 25;

function typeWriter2() {
  if (c < txt3.length) {
    document.getElementById("text3").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(typeWriter2, speed3);
  }
}

var Wrong1 = 0;
var txtWrong1 = 'First Customer: Hey! That doesn\'t sound right at all! Maybe you could look again? I\'m looking at the prices on that board over there. It was two pints of Guinness.';
var speedWrong1 = 25;

function typeWriterWrong1() {
  if (Wrong1 < txtWrong1.length) {
    document.getElementById("text4").innerHTML += txtWrong1.charAt(Wrong1);
    Wrong1++;
    setTimeout(typeWriterWrong1, speedWrong1);
  }
}

var Wrong2 = 0;
var txtWrong2 = 'First Customer: That\'s still not right! Where\'s your manager? You\'ll be fired!';
var speedWrong2 = 25;

function typeWriterWrong2() {
  if (Wrong2 < txtWrong2.length) {
    document.getElementById("text5").innerHTML += txtWrong2.charAt(Wrong2);
    Wrong2++;
    setTimeout(typeWriterWrong2, speedWrong2);
  }
}

var d = 0;
var txt4 = 'First Customer: That seems more right now.';
var speed4 = 25;

function typeWriter3() {
  if (d < txt4.length) {
    document.getElementById("text6").innerHTML += txt4.charAt(d);
    d++;
    setTimeout(typeWriter3, speed4);
    document.getElementById("toilet-door").style.cursor = "pointer";
  }
}
//End Customer 1

//Customer 2
var e = 0;
var txt5 = 'Second Customer: Hey! I want 3 Desperados and I want them now! How much?';
var speed5 = 25;

function typeWriter4() {
  if (e < txt5.length) {
    document.getElementById("text7").innerHTML += txt5.charAt(e);
    e++;
    setTimeout(typeWriter4, speed5);
  }
}

var f = 0;
var txt6 = 'Second Customer: Yeah, that\'s great thanks.';
var speed6 = 25;

function typeWriter5() {
  if (f < txt6.length) {
    document.getElementById("text8").innerHTML += txt6.charAt(f);
    f++;
    setTimeout(typeWriter5, speed6);
  }
}

var Wrong3 = 0;
var txtWrong3 = 'Second Customer: Hey! That doesn\'t sound right at all! Maybe you could look again? I\'m looking at the prices on that board over there. It was three desperados.';
var speedWrong3 = 25;

function typeWriterWrong3() {
  if (Wrong3 < txtWrong3.length) {
    document.getElementById("text9").innerHTML += txtWrong3.charAt(Wrong3);
    Wrong3++;
    setTimeout(typeWriterWrong3, speedWrong3);
  }
}

var Wrong4 = 0;
var txtWrong4 = 'Second Customer: That\'s still not right! Where\'s your manager? I\'m gonna get you fired!';
var speedWrong4 = 25;

function typeWriterWrong4() {
  if (Wrong4 < txtWrong4.length) {
    document.getElementById("text10").innerHTML += txtWrong4.charAt(Wrong4);
    Wrong4++;
    setTimeout(typeWriterWrong4, speedWrong4);
  }
}

var g = 0;
var txt7 = 'Second Customer: Yeah, that sounds better now.';
var speed7 = 25;

function typeWriter6() {
  if (g < txt7.length) {
    document.getElementById("text11").innerHTML += txt7.charAt(g);
    g++;
    setTimeout(typeWriter6, speed7);
  }
}
//End Customer 2

//Customer3
var h = 0;
var txt8 = 'Third Customer: Hey! I want two vodka blackcurrants and a mojito! How much?';
var speed8 = 25;

function typeWriter7() {
  if (h < txt8.length) {
    document.getElementById("text12").innerHTML += txt8.charAt(h);
    h++;
    setTimeout(typeWriter7, speed8);
  }
}

var i = 0;
var txt9 = 'Third Customer: Yeah, that\'s great thanks.';
var speed9 = 25;

function typeWriter8() {
  if (i < txt9.length) {
    document.getElementById("text13").innerHTML += txt9.charAt(i);
    i++;
    setTimeout(typeWriter8, speed9);
  }
}

var Wrong5 = 0;
var txtWrong5 = 'Third Customer: Hey! That doesn\'t sound right at all! Maybe you could look again? I\'m looking at the prices on that board over there. It was two vodka blackcurrants and a mojito.';
var speedWrong5 = 25;

function typeWriterWrong5() {
  if (Wrong5 < txtWrong5.length) {
    document.getElementById("text14").innerHTML += txtWrong5.charAt(Wrong5);
    Wrong5++;
    setTimeout(typeWriterWrong5, speedWrong5);
  }
}

var Wrong6 = 0;
var txtWrong6 = 'Third Customer: That\'s still not right! Where\'s your manager? You\'ll be fired!';
var speedWrong6 = 25;

function typeWriterWrong6() {
  if (Wrong6 < txtWrong6.length) {
    document.getElementById("text15").innerHTML += txtWrong6.charAt(Wrong6);
    Wrong6++;
    setTimeout(typeWriterWrong6, speedWrong6);
  }
}

var j = 0;
var txt10 = 'Third Customer: That seems more right now.';
var speed10 = 25;

function typeWriter9() {
  if (j < txt10.length) {
    document.getElementById("text16").innerHTML += txt10.charAt(j);
    j++;
    setTimeout(typeWriter9, speed10);
  }
}
//End Customer 3

//ManagerTypeWriter
var k = 0;
var txt11 = 'Manager: Hey, good shift! How about you go and clean up the toilets now.';
var speed11 = 25;

function typeWriter10() {
  if (k < txt11.length) {
    document.getElementById("text17").innerHTML += txt11.charAt(k);
    k++;
    setTimeout(typeWriter10, speed11);
    lockcount = 1;
  }
}

//Customer1
function hide(){
    document.getElementById("container").style.display = "none";
    document.getElementById("container1").style.display = "block"; 
}
function hide1(){
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "block";
}

function nextCustomer(){
  document.getElementById("container2").style.display = "none";
  document.getElementById("container5").style.display = "none";
  document.getElementById("container6").style.display = "block";
}
//Customer 2
function hide2(){
  document.getElementById("container6").style.display = "none";
  document.getElementById("container7").style.display = "block";
}
function nextCustomer2(){
  document.getElementById("container7").style.display = "none";
  document.getElementById("container10").style.display = "none";
  document.getElementById("container11").style.display = "block";
}
//Customer 3
function hide3(){
  document.getElementById("container11").style.display = "none";
  document.getElementById("container12").style.display = "block";
}

//Manager Message
function managerMS(){
  document.getElementById("container12").style.display = "none";
  document.getElementById("container15").style.display = "none";
  document.getElementById("container16").style.display = "block";
}
//Manager Hide
function managerHide(){
  document.getElementById("container16").style.display = "none";
}
//Customer1
function validate() {
  var ans1 = "10" || "£10";
  var inputanswer = document.getElementById('ans1').value;
  if (inputanswer != ans1) {
    alert("Incorrect answer!");
    document.getElementById("container2").style.display = "none";
  document.getElementById("container3").style.display = "block";
    typeWriterWrong1();
    subPointBar();
    return false
    
  } else {
    alert("Correcto!");
    typeWriter2();
    addPointBar();
  }
}

function validate2() {
  var ans2 = "10" || "£10";
  var inputanswer = document.getElementById('ans2').value;
  if (inputanswer != ans2) {
    alert("Incorrect answer!");
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "block";
    typeWriterWrong2();
    subPointBar();
    return false
  } else {
    alert("Correcto!");
    document.getElementById("container3").style.display = "none";
    document.getElementById("container5").style.display = "block";
    typeWriter3();
    addPointBar();
  }
}
//Customer 2
function validate3() {
  var ans3 = "7.40" || "£7.40";
  var inputanswer = document.getElementById('ans3').value;
  if (inputanswer != ans3) {
    alert("Incorrect answer!");
    document.getElementById("container6").style.display = "none";
    document.getElementById("container7").style.display = "none";
  document.getElementById("container8").style.display = "block";
    typeWriterWrong3();
    subPointBar();
    return false
  } else {
    alert("Correcto!");
    typeWriter5();
    addPointBar();
  }
}

function validate4() {
  var ans4 = "7.40" || "£7.40";
  var inputanswer = document.getElementById('ans4').value;
  if (inputanswer != ans4) {
    alert("Incorrect answer!");
    document.getElementById("container8").style.display = "none";
    document.getElementById("container9").style.display = "block";
    typeWriterWrong4();
    subPointBar();
    return false
  } else {
    alert("Correcto!");
    document.getElementById("container8").style.display = "none";
    document.getElementById("container9").style.display = "none";
    document.getElementById("container10").style.display = "block";
    typeWriter6();
    addPointBar();
  }
}

//Customer 3
function validate5() {
  var ans5 = "15.80" || "£15.80";
  var inputanswer = document.getElementById('ans5').value;
  if (inputanswer != ans5) {
    alert("Incorrect answer!");
    document.getElementById("container11").style.display = "none";
    document.getElementById("container12").style.display = "none";
  document.getElementById("container13").style.display = "block";
    typeWriterWrong5();
    subPointBar();
    return false
  } else {
    alert("Correcto!");
    typeWriter8();
    addPointBar();
  }
}

function validate6() {
  var ans6 = "15.80" || "£15.80";
  var inputanswer = document.getElementById('ans6').value;
  if (inputanswer != ans6) {
    alert("Incorrect answer!");
    document.getElementById("container13").style.display = "none";
    document.getElementById("container14").style.display = "block";
    typeWriterWrong6();
    subPointBar();
    return false
  } else {
    alert("Correcto!");
    document.getElementById("container13").style.display = "none";
    document.getElementById("container14").style.display = "none";
    document.getElementById("container15").style.display = "block";
    typeWriter9();
    addPointBar();
  }
}


function doorlock () {
  
  if (lockcount === 1) {
    var link = document.getElementById("DoorLink");
    link.setAttribute("href", "toilets.html");
    return false;
  }else{
    document.getElementById("toilet-door").style.cursor = "not-allowed";
  }
    }

function drunkEffect() {
  document.getElementById("keg-one").style.filter = "blur(2px)";
  document.getElementById("keg-two").style.filter = "blur(2px)";
  document.getElementById("price-list").style.filter = "blur(1px)";
  document.getElementById("toilet-door").style.filter = "blur(1px)";
  document.getElementById("container").style.filter = "blur(1px)";
}
  

function play() {
    var audio1 = document.getElementById("audio1");
    audio1.play();
    audio1.loop = true;
}

function clickPlay() {
    play()}
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
    document.getElementById("container6").style.display = "none";
    document.getElementById("container7").style.display = "none";
    document.getElementById("container8").style.display = "none";
    document.getElementById("container9").style.display = "none";
    document.getElementById("container10").style.display = "none";
    document.getElementById("container11").style.display = "none";
    document.getElementById("container12").style.display = "none";
    document.getElementById("container13").style.display = "none";
    document.getElementById("container14").style.display = "none";
    document.getElementById("container15").style.display = "none";
    document.getElementById("container16").style.display = "none";



    let timeRem = 50;
    let timer;
    let transpChange;
    function startCountdown() {
      let timeOut = document.getElementById('timeOut');
      timeOut.innerHTML = timeRem;
      timer = setInterval(countdown, 1000);

      transpChange = 1/timeRem;
      console.log(transpChange);
  }
    function countdown() {
      if (timeRem > 0) {
          timeRem--;
          let timeOut = document.getElementById('timeOut');
          timeOut.innerHTML = timeRem;
        } else {
          clearInterval(timer);
          let timeOut = document.getElementById('timeOut');
          timeOut.innerHTML = 'END';  
          nextLevelDecision1();
    }

    
      function nextLevelDecision1() {
        if (timeOut.innerHTML = 'END') {
          document.getElementById("timeOut").innerHTML = "You ran out of time!";

          setTimeout(function () {
            window.location.replace("losingpage.html")
          }, 5000);
        }
      }
    }
    let point = 0;
    function addPointBar() {
      point += 1;
      document.getElementById("points1").innerHTML = "Points: " + point;
    }
    function subPointBar() {
      point -= 1;
      document.getElementById("points").innerHTML = "Points: " + point;
    }
document.getElementById("points1").innerHTML = sessionStorage.getItem("pointText")