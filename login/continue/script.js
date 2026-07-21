var token=localStorage.getItem("token")

const urlParams = new URLSearchParams(window.location.search);

var website=urlParams.get("continue");
var method=urlParams.get("method");
const btn=document.getElementById("continueBtn");
btn.addEventListener("click",()=>{
  a();
})

document.getElementById("username").innerHTML=localStorage.getItem('username');
if(!website || !method){
   document.write("ACCESS BLOCKED");
}
if(!token){
  var x=window.open("https://sharmapushkar2006.github.io/Login","Login to continue","width=800,height=600,resizable=yes,scrollbars=yes")
  const timer = setInterval(() => {
    if (x && x.closed) {
      clearInterval(timer); 
      location.href=""
      
    }
  }, 500);
}

function a(){
  console.log("User has authorized access!")
  if(method=="Details"){
    location.href=website+"?name="+localStorage.getItem("username")+"&email="+localStorage.getItem("email")
  }
  else if(method=="token"){
    location.href=website+"?authid="+token;
  }
  else{
    document.write("Request incomplete  ERR: RESPONSE_TYPE_NOT_DEFINED")
  }
}