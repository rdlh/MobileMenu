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
    alert(touch.pageX + ' - ' + touch.pageY);
}, false);

document.addEventListener('touchend', function(event) {
    event.preventDefault();
    touch = event.touches[0];
    alert(touch.pageX + ' - ' + touch.pageY)
    if(touch.pageX + 60 <= startxposition && touch.pageY + 10 <= startyposition && touch.pageY - 10 >= startyposition) {
        OpenMenu('slide-right');
    }
}, false);
