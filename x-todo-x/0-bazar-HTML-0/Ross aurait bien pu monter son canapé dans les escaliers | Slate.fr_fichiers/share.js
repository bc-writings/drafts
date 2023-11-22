(function() {
  var shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.getAttribute('data-url'), 'Partager', 'menubar=no, status=no, scrollbars=no, menubar=no, width=500, height=400, resizable=yes').focus();
    });
  });
  var otherLinks = document.querySelectorAll('.other-click');
  otherLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      clickToPage(e);
    });
  });
}).call(this);