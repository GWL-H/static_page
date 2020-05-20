var next = document.getElementsByClassName('swiper-button-next')[0];
var prev = document.getElementsByClassName('swiper-button-prev')[0];

getResize();
window.onresize = function() {
    getResize();
}

function getResize() {
    if (document.body.offsetWidth > 1000) {
        next.style.display = 'block';
        prev.style.display = 'block';
    } else {
        next.style.display = 'none';
        prev.style.display = 'none';
    }
}

var search = document.getElementsByClassName('search-wrap')[0];
var content = document.getElementsByClassName('main-content')[0];
var contentTop = content.offsetTop;
getScroll();
window.onscroll = function() {
    getScroll();
}
window.touchmove = function() {
    getScroll();
}

function getScroll() {
    if (window.pageYOffset > contentTop) {
        search.style.position = 'fixed';
        search.style.top = '0'
    } else {
        search.style.position = 'absolute';
        search.style.top = '44px'
    }
}