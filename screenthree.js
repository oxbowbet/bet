let Three='\
<img id="back"src="D:\\Tools\\Web Development\\Icons\\icons2\\3916858.png" onclick="back()">\
<button id="btn3" onclick="Withdraw()">Withdraw</button>\
<div id="ProfileDisplay">\
<p>UserName</p>\
<p id="UserNameEmail"><\p>\
<p>Email</p>\
<p id="EmailHolder"><\p>\
<h1>Notice</h1>\
<p> Email Must Have Details of Payments ,Details Of Bet,Your User Name,Your Email and Contact\
<br><br>\
Due To The Large Number Of Volumes of Clients The Method of Withdraw is to send us a Email in the next Section of Withdraw and processing takes usually a day</p>\
</div>\
'
function Dsa(){
   let UserNameEmail=document.querySelector('#UserNameEmail');
   let EmailHolder=document.querySelector('#EmailHolder');
   UserNameEmail.innerHTML=localStorage.getItem('OxbowBetUsername',Username.value).toUpperCase();
   EmailHolder.innerHTML=localStorage.getItem('OxbowBetEmail',Email.value).toUpperCase(); 
}
function Withdraw(){
   let btn1=document.querySelector('#btn1');
   let btn2=document.querySelector('#btn2');
let b= localStorage.getItem('OxbowBetUsername',Username.value);
confirm(b.toLocaleUpperCase()+" "+'Email Us To Complete Withdraws');
open('go');   
}