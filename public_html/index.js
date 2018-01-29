//Info Functions
//------------------------------------------------------------------------------
function screenInfo() {
    var div = document.getElementById("listDisplay");
    var html = "<li>Amplada:" + screen.availHeight + "</li>";
    html += "<li>Alçada:" + window.innerHeight + "</li>";
    var total = window.innerHeight * window.innerWidth;
    html += "<li>Total Pix:" + total + "</li>";
    html += "</li>";
    div.innerHTML = html;
}
function browserInfo(){
    var div = document.getElementById("listBrowser");
    var html = "<li>Navegador:" + navigator.appName + "</li>";
    html += "<li>Codi:" + navigator.appCodeName + "</li>";
    html += "<li>Plataforma:" + navigator.platform + "</li>";
    html += "</li>";
    div.innerHTML = html;
}
function infoUrl(){
    var div = document.getElementById("listUrl");
    var html = "<li>Host: " + location.hostname + "</li>";
    html += "<li>Port: " + location.port + "</li>";
    html += "<li><a href='https://stucom.com/' class='btn btn-info' role='button'>Stucom</a></li>";
    div.innerHTML = html;
}
//Nueva Ventana
//------------------------------------------------------------------------------
function NewWindow(){
    var amplada= (screen.availWidth)/2;
    var altura= (screen.availHeight)/2;
    window.open("window.html","_blank","width="+amplada
            +",height="+altura);
}