console.log('Loaded!');
//change text
var elem = document.getElementById('main-text');
elem.innerHTML="New View";
//move image
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};
