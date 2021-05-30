window.onload = function () {
    var ul = document.getElementById("ul");
    var li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            for (var i = 0; i < li.length; i++) {
                li[i].className = ""
            }
            this.className = "li";
        }
    }

    // 显示隐藏
    var img = document.getElementById('img');
    var nav = document.getElementById('nav');
    var tim = 0;
    img.onclick = function () {
        if (tim == 0) {
            nav.style.display = 'block';
            tim = 1
        } else {
            nav.style.display = 'none';
            tim = 0
        }
    }

    window.onmousewheel = function () {
        if (window.scrollY > 100) {
            document.getElementById("nav").style.display = "none";
            tim = 0
        }
    }

}