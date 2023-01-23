    let Watch='\
<div id="WatchLogin">\
    <input type="code" placeholder="Enter Code" id="Code" >\
    <br><br>\
    <button id=" watch" onclick="WatchMe()">WAtch</button>\
    <br><br>\
    <a href="me">Subscribe to Watch</a>\
</div>\
<div id="VideoHandler">\
    <video controls muted autoplay src="D:\\Vidoes\\Music Videos\\Tems  Try Me Official Video_1080p.mp4"></video>\
</div>\
'
function WatchMe() {
    let Code=document.querySelector('#Code');
    let WatchLogin=document.querySelector('#WatchLogin');
    let VideoHandler=document.querySelector('#VideoHandler');
    if (Code.value==="Music") {
        localStorage.setItem('OxbowWatch',Code.value);
        WatchLogin.style.display="none";
        VideoHandler.style.display="block";
    } else {
      alert('Wrong Code Check The Code Again');
      open('')  
    }
}

