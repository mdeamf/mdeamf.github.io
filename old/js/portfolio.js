$(document).ready(function () {
    $('.header').height($(window).height());

    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - 140
        }, 1000);

    });
});

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > $(window).height() - $(".navbar").height()) {
            $(".navbar").css('background-image', 'linear-gradient(90deg, #281242, #220827)');
        } else {
            $(".navbar").css('background-image', 'unset');
        }
    });
});