jQuery(document).ready(function($){
	// all body links in new windows
	$('.page-content a').attr('target','_blank');
    // sauf liens au sein d'une meme page
	$('.page-content a[href^=#]').attr('target','_self');
	// hide Article Vedette from Volumes list
	$('.widget_categories li.cat-item-45').hide();
    // hide Article Vedette from Post Wrapper
    $('.page-meta-wrapper a[title="Voir tous les articles dans Article vedette"]').hide();
    // boutton pour PDF
    $('.to-pdf').attr('href', $('.pdf-link').attr('href'));
    // style de bouton vers solution aux problemes
    $('.page-content a[title^="Section problèmes : Solutions"]').attr('class','footer-button');
    // afficher et masquer la liste des auteurs
    $('#complete-list').hide();
    $('#showlist').click(function() { $('#complete-list').slideToggle();});
});


// jQuery(window).load(function($){
//  fix flexslider's first slide not showing up
// 	var accroFirstSlide = $('ul.slides li:first-child img').height();
// 	$('.flexslider').css('min-height',accroFirstSlide);
// });