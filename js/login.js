function setFormMessage(){
    var userName = document.getElementById("my__name").value;
    var pwd=document.getElementById("my__password").value;

if(userName!="" && pwd!="" && pwd.length>=5){
  window.location.href="about.html";
// // alert("yes");
 }



}