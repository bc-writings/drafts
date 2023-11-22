jQuery(document).ready(function ($) {
  // Use jQuery with the shortcut:
 var author = $('.field-name-field-author .field-item').html();
 if (author) {
     $('.field-name-field-author .field-item').html('<a href="/content/list-by-author/'+author+'">'+author+'</a>');
}

});
;
function timer11(){ga('send', 'event', 'TimeOnPage', '1', '11-30 seconds', { 'nonInteraction': 1 });}
function timer31(){ga('send', 'event', 'TimeOnPage', '2', '31-60 seconds', { 'nonInteraction': 1 });}
function timer61(){ga('send', 'event', 'TimeOnPage', '3', '61-180 seconds', { 'nonInteraction': 1 });}
function timer181(){ga('send', 'event', 'TimeOnPage', '4', '181-600 seconds', { 'nonInteraction': 1 });}
function timer601(){ga('send', 'event', 'TimeOnPage', '5', '601-1800 seconds', { 'nonInteraction': 1 });}
function timer1801(){ga('send', 'event', 'TimeOnPage', '6', '1801+ seconds', { 'nonInteraction': 1 });}
ga('send', 'event', 'TimeOnPage', '0', '0-10 seconds', { 'nonInteraction': 1 });
setTimeout(timer11,11000);
setTimeout(timer31,31000);
setTimeout(timer61,61000);
setTimeout(timer181,181000);
setTimeout(timer601,601000);
setTimeout(timer1801,1801000);
;
