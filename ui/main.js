//
var button = document.getElementById('counter');
button.onclick = function () {
  //createreq
  var request = new XMLHttpRequest();
  
  //captres
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
        //actn
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
    //else
  };
  //mkrq
  request.open('GET','http://kambleakash0.imad.hasura-app.io/counter',true);
  request.send(null);
  
};