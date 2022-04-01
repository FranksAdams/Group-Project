

function send(){

 var name = document.getElementById('name').value;
 var age = document.getElementById('age').value;
 var drinks = document.getElementsByClassName('drinks').value;
var bar = document.getElementsByClassName('bar').value

 sessionStorage.setItem('name',name);
 sessionStorage.setItem('age',age);
 sessionStorage.setItem('drinks',drinks);
 sessionStorage.setItem('bar',bar);

 window.open('page1.html','_self');
}

function ageFunction() {
  let x = document.getElementById("ageDetail").value;
  let text;
  if (isNaN(x) || x < 18) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("age1").innerHTML = text;
}

function nextFunction() {
  location.replace("page1.html")
}

function succesful(){
  alert("Your application has been succesful! Click the start shift button to begin!");
}

