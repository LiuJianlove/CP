// 显示隐藏
window.onload = function() {

    var mySwiper = new Swiper('.swiper-container', {

        loop: true, // 循环模式选项


        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

    // 显示隐藏
    var img = document.getElementById('img');
    var nav = document.getElementById('nav');
    var tim = 0;
    img.onclick = function() {
        if (tim == 0) {
            nav.style.display = 'block';
            tim = 1
        } else {
            nav.style.display = 'none';
            tim = 0
        }
    }

    window.onmousewheel = function() {
        if (window.scrollY > 100) {
            document.getElementById("nav").style.display = "none";
            tim = 0
        }
    }
}