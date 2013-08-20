/*document.body.scrollTop = 1;
document.body.scrollTop = 0;*/

function OpenMenu(theTarget) {
    $('.page-wrap').toggleClass(theTarget);
}

function CloseMenu() {
    if ($('.page-wrap').hasClass('slide-left')) {
        $('.page-wrap').toggleClass('slide-left');
    } else if ($('.page-wrap').hasClass('slide-right')) {
        $('.page-wrap').toggleClass('slide-right');
    }
}

$('.handle .left').click(function () {
    OpenMenu('slide-left');
});

$('.handle .right').click(function () {
    OpenMenu('slide-right');
});

$('.slide-menu .menuTop span, .content').click(function () {
    CloseMenu();
});

//OpenMenu('slide-left');
