(function() {
  $(document).ready(function() {
    $('[data-share]').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.open($(this).data('url'), 'Partager', 'menubar=no, status=no, scrollbars=no, menubar=no, width=500, height=400, resizable=yes').focus();
    });
  });
}).call(this);