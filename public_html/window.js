function start() {
    var div = document.getElementById("getQuestion");

var questions = Array("Do Animals Matter?","Does God kill people?", "Random?");
        var quest = questions[Math.floor(Math.random()*questions.length)];
        var html = quest;
//    html += "<li>Alçada:" + window.innerHeight + "</li>";
//    var total = window.innerHeight * window.innerWidth;
//    html += "<li>Total Pix:" + total + "</li>";
//    html += "</li>";
    div.innerHTML = html;
}
