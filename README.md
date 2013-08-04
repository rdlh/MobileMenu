#Slide&Push Mobile Menu#

What is this ?
--------------

*This javascript plugin is an Open-source Javascript mobile app menu*

> ### [DEMO](http://remidelhaye.github.io/MobileMenu)


How it works ?
--------------

First, this plugin is designed only with CSS3 & Javascript, i use [classie](https://github.com/desandro/classie) toggle to change css classes & make it appear & disappear with that toggle only.

##### HTML :

```html


<button id="show-menu">Show/Hide Menu</button>

<nav class="my-responsive-menu" id="menu-left">
  <h3>Menu</h3>
  <a href="#">1st link</a>
  <a href="#">2nd link</a>
  <a href="#">3rd link</a>
</nav>

```

##### Javascript :

```javascript


document.getElementById( 'show-menu' ).onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( document.getElementById( 'menu-left' ), '.my-responsive-menu-open' );
};

```

##### CSS :

```css


.my-responsive-menu {
  position: fixed;
  width: 240px;
  height: 100%;
  top: 0;
  z-index: 1000;
  left: -240px;
}

.my-responsive-menu-open {
  left: 0px;
}

```

Contributors
------------

 * [@RemiDelhaye](https://github.com/RemiDelhaye) ([http://remidelhaye.fr](http://remidelhaye.fr))
