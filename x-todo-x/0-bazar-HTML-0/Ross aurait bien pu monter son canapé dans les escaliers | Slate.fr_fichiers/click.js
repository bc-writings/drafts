function clickToPage(e) {
  var attribute = e.target.getAttribute("data-id");
  if(e.shiftKey || e.ctrlKey || e.metaKey) {
    var newWindow = window.open(decodeURIComponent(window.atob(attribute)), '_blank');
    newWindow.focus();
  } else {
    document.location.href = decodeURIComponent(window.atob(attribute));
  }
}