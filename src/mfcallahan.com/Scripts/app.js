// log a user's visit
function Hello() {
    $.ajax({
        url: '/Home/Hello',
        type: 'POST'        
    });
}

// add caption tom image box with 'alt' tag on <img> element
$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};

$(document).ready(function () {
    // disabled becasue SQL serves are expen$ive...
    //Hello();
});

