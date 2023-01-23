let FourData='\
<p id="back1"onclick="back1()"><</p>\
<h1 id="Fixtures">Fixtures</h1>\
<div id="bet">\
<h1>Arsenal Vs ManCity</h1>\
<form action="https://sheetdb.io/api/v1/8sbmu6tygbcrd" method="post"id="sheetdb-form">\
    <button id="btn1" onclick="BetA()" value="Arsenal" name="Team A">Arsenal</button><span id="odds">1.2</span>\
    <br><br>\
    <button id="btn2" onclick="BetB()" value="Mancity" name="Team B">Mancity</button><span id="odds">1.2</span>\
    </form>\
    <br><br>\
    <p>Bets At Oxbow Are From 10$</p>\
</div>\
<div id="betting">\
<h2>Terms And Conditions</h2>\
<p>\
    All the Terms Of Betting For Oxbow Bet\
</p>\
\
</div>\
'
function BetA() {
    let btn1=document.querySelector('#btn1');
    let btn2=document.querySelector('#btn2');
confirm(b.toLocaleUpperCase()+" "+"is betting For"+" "+btn1.value.toLocaleUpperCase());
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    let b= localStorage.getItem('OxbowBetUsername',Username.value);
    window.open('page2.html', '_blank');
  });
});
}
function BetB() {
    let btn1=document.querySelector('#btn1');
    let btn2=document.querySelector('#btn2');
 let b= localStorage.getItem('OxbowBetUsername',Username.value);
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    let b= localStorage.getItem('OxbowBetUsername',Username.value);
    window.open('page2.html', '_blank');
  });
}); 
}


