function albums(json) {
  var o = document.getElementById("output");
  for(var e=0;e<json.length;e++) {
    o.innerHTML += json[e].album + "<br>";
  }
}

function artistCallback(json){
  alert(JSON.stringify(json));
  var artistPullDown = document.getElementById("select");
  artistPullDown= buildArtistPullDown(json);

  access("select distinct year from collection order by year", yearCallback);
}

function buildArtistPullDown(json){
  var s = document.createElement("select");
  s.setAttribute("id", "artist");

  var h = document.createElement("option");
  h.innerHTML = "<b>Artists</b>";
  s.appendChild(h);
  for(var i=0; i<json.length;i++){
    var v = json[i].artist;
    var q = document.createElement("option");
    q.innerHTML = v;
    s.appendChild(q);
  }
  return s;
}

function yearCallback(json){
  //alert(JSON.stringify(json));


  access("select distinct year from collection order by year", yearCallback);
}

function buildYearPullDown(json){
  var s = document.createElement("select");
  s.setAttribute("id", "artist");

  var h = document.createElement("option");
  h.innerHTML = "<b>Artists</b>";
  s.appendChild(h);
  for(var i=0; i<json.length;i++){
    var v = json[i].artist;
    var q = document.createElement("option");
    q.innerHTML = v;
    s.appendChild(q);
  }
  return s;
}


function go() {
  access("select distinct artist from collection order by artist", artistCallback);
}


var ajax;
var acallback=null;
function access(query, callback)
{
  acallback = callback;
  ajax = new XMLHttpRequest();
  ajax.onreadystatechange = ajaxProcess;
  ajax.open("GET", "http://130.63.131.129:8000/sql?query=" + query);
  ajax.send(null);
}

function ajaxProcess() {
  if((ajax.readyState == 4)&&(ajax.status == 200)){
    ajaxCompleted(ajax.responseText)
  }
}

function ajaxCompleted(text) {
  var output = document.getElementById("output");
  if(acallback != null) {
    var data = JSON.parse(text);
    acallback(data);
  }
}

onload=go;
