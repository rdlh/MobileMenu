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

// TOUCH DEVICES = FUTURE

var startxposition = 0;
var startyposition = 0;

document.addEventListener('touchstart', function(event) {
    var touch = event.touches[0];
    startxposition = touch.pageX;
    startyposition = touch.pageY;
}, false);

document.addEventListener('touchend', function(event) {
    var difx = startx - event.changedTouches[0].pageX;
    if(difx >= 180) {
        OpenMenu('slide-right');
        startyposition = -999;
    }
    if(difx <= -180) {
        OpenMenu('slide-left');
        startyposition = -999;
    }
}, false);
