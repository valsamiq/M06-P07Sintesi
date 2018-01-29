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
    
}