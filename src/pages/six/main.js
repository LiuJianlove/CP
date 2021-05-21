$(document).ready(function () {
    $(".ul li").click(function () {
        // 方法一
        $(".ul li").eq($(this).index()).addClass("act").siblings().removeClass('act');
        $(".show .con").hide().eq($(this).index()).show();
    });
});
