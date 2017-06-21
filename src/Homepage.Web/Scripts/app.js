function Hello () {

    $.ajax({
        url: '/Home/Hello',
        type: 'POST'        
    });

}

$(document).ready(function () {
    Hello();
});

