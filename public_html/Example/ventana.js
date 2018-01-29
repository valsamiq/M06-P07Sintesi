function ventanaCargada(){
    window.opener.ventanaNuevaCargada();
}
var cont=0;
var refInterval;
function iniciaContador(){
    refInterval = window.setInterval(augmentaContador,1000);
}
function augmentaContador(){
    document.getElementById("contador").innerHTML=cont;
    cont++;
}
function detieneContador(){
    window.clearInterval(refInterval);
}