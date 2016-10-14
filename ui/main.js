console.log('Loaded!');
//change text
var elem = document.getElementById('main-text');
elem.innerHTML="New View";
//move image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft='100px';
};
