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
//submit
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length; i++){
        list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};