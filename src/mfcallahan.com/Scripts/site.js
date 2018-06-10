// add caption to gallery image using 'alt' tag on <img> element
$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};