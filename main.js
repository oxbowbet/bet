let ScreenOne=document.querySelector('#ScreenOne');
let Screentwo=document.querySelector('#Screentwo');
let Screenthree=document.querySelector('#Screenthree');
let Screenfour=document.querySelector('#Screenfour');
let Data=document.querySelector('#Data');

let Login=document.querySelector('.Login');
let Register=document.querySelector('.Register');
let Create=document.querySelector('#Create');
let LOGIN=document.querySelector('#LOGIN');
Create.onclick=()=>{
    Login.style.display="none";
    Register.style.display="block";
}
LOGIN.onclick=()=>{
    Login.style.display="block";
    Register.style.display="none";
}

let Email=document.querySelector('#Email');
let Username=document.querySelector('#Username');
let password=document.querySelector('#password');
let Createe=document.querySelector('#Createe');

function Dta() {
        localStorage.setItem('OxbowBetEmail',Email.value);
        localStorage.setItem('OxbowBetUsername',Username.value);
        localStorage.setItem('OxbowBetPassword',password.value);
        Login.style.display="block";
        Register.style.display="none";  
}

Createe.onclick=()=>{
    Dta() ;
}
let LogIn=document.querySelector('#LogIn');
let Username1=document.querySelector('#Username1');
let password1=document.querySelector('#password1');
LogIn.onclick=()=>{
    if (localStorage.getItem('OxbowBetUsername',Username.value)===Username1.value&&localStorage.getItem('OxbowBetPassword',password.value)===password1.value) {
        ScreenOne.style.display="none"
        Screentwo.style.display="block"
    } else {
        alert('Wrong Username OR Password,Check The Details and Try Again');
    }       
}
Data.innerHTML=Update;

let Home1=document.querySelector('#Home1');
Home1.onclick=()=>{
Data.innerHTML=Watch;
}
let Home=document.querySelector('#Home');
Home.onclick=()=>{
    Data.innerHTML=Update;
}
let Profile=document.querySelector('#Profile');
Profile.onclick=()=>{
    Screenthree.style.display="block";
    Screentwo.style.display="none";
    Screenthree.innerHTML=Three;
    Dsa();
}
function back() {
    Screenthree.style.display="none";
    Screentwo.style.display="block";
}
let Home2=document.querySelector('#Home2');
Home2.onclick=()=>{
    Screenfour.innerHTML=FourData;
    Screenfour.style.display="block";
}
function back1(){
    Screenfour.style.display="none";
    Screentwo.style.display="block"; 
}