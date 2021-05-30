$(function () {
    $("#nav").load("./header.html");
    $("#foot").load("./footer.html");
})

window.onload = function () {
    var ul = document.getElementById("ul");
    var li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            for (var i = 0; i < li.length; i++) {
                li[i].className = "";
            }
            this.className = "li";
        }
    }
}