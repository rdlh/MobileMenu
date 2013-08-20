#![LOGO](https://cdn3.iconfinder.com/data/icons/eightyshades/512/45_Menu-24.png) Slide&Push Mobile Menu (v2.0) 
![TouchFriendly](http://www.queness.com/resources/images/11755.gif)

What is this ?
--------------

This javascript plugin is an **Open-source** and **TouchFriendly** Javascript mobile app menu

> ## [DEMO v2.0](http://remidelhaye.github.io/MobileMenu)
> #### [DEMO v1.0](http://remidelhaye.github.io/MobileMenu/v1.0)


How it works ?
--------------

**v2.0 is here !** This optimized and light version of MobileMenu is now really more stable and browser-friendly, moreover, the essential css is awesomely more easy too enderstand, modify, and integrate !

##### HTML :

```html

<span class="right"></span>

<div class="slide-menu right-side">
    <div class="menuTop">
         <h2>Push Menu</h2><span></span>
    </div>
    <ul>
        <li class="active"><a href="#">Menu Link 001</a></li>
        <li><a href="#">Menu Link 002</a></li>
        <li><a href="#">Menu Link 003</a></li>
        <li><a href="#">Menu Link 004</a></li>
        <li><a href="#">Menu Link 005</a></li>
    </ul>
</div>

```

##### Javascript :

```javascript

// FUNCTIONS

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

// EVENTS

$('.handle .right').click(function () {
    OpenMenu('slide-right');
});

$('.slide-menu .menuTop span, .content').click(function () {
    CloseMenu();
});

```

##### CSS :

```css

.slide-menu {
    background: #333333;
    height: 100%;
    position: absolute;
}
.slide-menu.right-side {
    right:-220px;
    text-align: right;
}

```

Contributors
------------

 * Creator : [@RemiDelhaye](https://github.com/RemiDelhaye) ([http://remidelhaye.fr](http://remidelhaye.fr))

Good issues
-----------

 * [@Tiste](https://github.com/tiste) ([http://tiste.io](http://tiste.io)) - [Issue #1](https://github.com/RemiDelhaye/MobileMenu/issues/1)
