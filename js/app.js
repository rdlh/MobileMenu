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
    touch = event.changedTouches[0];
    if(touch.pageX + 180 <= startxposition && touch.pageY + 50 <= startyposition && touch.pageY - 50 >= startyposition) {
        OpenMenu('slide-right');
        startyposition = -999;
    }
    if(touch.pageX - 180 >= startxposition && touch.pageY + 50 <= startyposition && touch.pageY - 50 >= startyposition) {
        OpenMenu('slide-left');
        startyposition = -999;
    }
}, false);
