$(function () {
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for (var i = 0, l = props.length; i < l; i++) {
        if (typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }

    setInterval(function () {
        //clockAngle(prop)
    }, 100);
});

$(document).ready(function () {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
});