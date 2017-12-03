function clockAngle(prop) {
    var angle = 360 / 60,
        date = new Date();
    var h = date.getHours();
    if (h > 12) {
        h = h - 12;
    }

    hour = h;
    minute = date.getMinutes(),
        second = date.getSeconds(),
        hourAngle = (360 / 12) * hour + (360 / (12 * 60)) * minute;

    $('#clockHr')[0].style[prop] = 'rotate(' + hourAngle + 'deg)';
    $('#clockMin')[0].style[prop] = 'rotate(' + angle * minute + 'deg)';
    $('#clockSec')[0].style[prop] = 'rotate(' + angle * second + 'deg)';    
}

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
        clockAngle(prop)
    }, 100);
});