
   function hideFunction(){
       document.getElementById('hide').style.display='none';;
   }

      function yesCheckFunction() {
         var x = document.getElementById("showDOB");
         if (x.style.display === "none") {
           x.style.display = "block";
         } else {
           x.style.display = "none";
         }
       
    }


 function yesFunction2() {
   var x = document.getElementById("fakeID2");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 
}

function yesFunction3() {
   var x = document.getElementById("fakeID");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 
}
function noCheckFunction() {
   var x = document.getElementById("fakeID");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
}
   let point = 0;
 function addPointid(){
point += 10;
document.getElementById("pointText").innerHTML = "Score: " + point;
 }

 function subPointid(){
point -= 10;
document.getElementById("pointText").innerHTML = "Score: " + point;
 }
 sessionStorage.setItem("pointText"); 

