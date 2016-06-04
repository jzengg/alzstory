// on document ready
$(function () {
  $('#search_bar').submit(function (e) {
    e.preventDefault();
    var input = $('.search-input').val();
    if (input === 'beer') {
      $('.default-img').hide();
      $('.beer-img').show();
    }
  });
});
