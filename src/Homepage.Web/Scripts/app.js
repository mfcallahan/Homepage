
function Hello () {

    $.ajax({
        url: '/Home/Hello',
        type: 'POST'        
    });

}

$(document).ready(function () {
    Hello();

    //set columns in a row to equal heights
    var heights = $(".equal-heght").map(function () {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".equal-heght").height(maxHeight);

});

