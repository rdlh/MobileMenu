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
    event.preventDefault();
    var touch = event.touches[0];
    startxposition = touch.pageX;
    startyposition = touch.pageY;
}, false);

document.addEventListener('touchend', function(event) {
    event.preventDefault();
    touch = event.touches[0];
    alert('x1 = ' + startxposition + ' - x2 = ' + touch.pageX);
    if(touch.pageX + 180 <= startxposition && touch.pageY + 50 <= startyposition && touch.pageY - 50 >= startyposition) {
        OpenMenu('slide-right');
    }
    if(touch.pageX - 180 >= startxposition && touch.pageY + 50 <= startyposition && touch.pageY - 50 >= startyposition) {
        OpenMenu('slide-left');
    }
}, false);
