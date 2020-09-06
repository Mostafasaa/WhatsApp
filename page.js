$(document).ready(function () {
    $(".icon-nav").on("click", function () {
        $(".header .links").slideToggle();
        console.log("clik");
    });

    $("a").click(function (e) {
        e.preventDefault();
    });

    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top < 450) {
            $(".up").fadeOut();
        }
        else {
            $(".up").slideDown();
        }
        console.log(top)
    });

    $(".up").click(function () {
        $("body , html").animate({
            scrollTop : 0
        }, 400);
    });
});