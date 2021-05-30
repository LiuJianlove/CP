window.onload = function () {
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

