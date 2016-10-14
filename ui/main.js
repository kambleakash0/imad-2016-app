console.log('Loaded!');
//change text
var elem = document.getElementById('main-text');
elem.innerHTML="New View";

//move image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.margineLeft=marginLeft+'px';
}
img.onclick = function() {
    img.marginLeft='100px';
    //var interval = setInterval(moveRight,100);
};
