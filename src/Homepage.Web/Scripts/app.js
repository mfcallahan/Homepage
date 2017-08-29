function Hello () {

    $.ajax({
        url: '/Home/Hello',
        type: 'POST'        
    });

}

$(document).ready(function () {
    //disabled becasue SQL serves are expen$ive...
    //Hello();
});

