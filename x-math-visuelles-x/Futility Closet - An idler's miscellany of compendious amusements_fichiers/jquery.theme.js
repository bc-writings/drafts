/**
 * Core JS
 */

jQuery( document ).ready( function( $ ) {

    // fit videos to browser window
    $( '#page' ).fitVids();

    $( 'figcaption h3 a' ).hover(
        function() {
            $( this ).parent().parent().parent().find( '.entry-image img' ).addClass( 'img-hover' );
        }, function() {
            $( this ).parent().parent().parent().find( '.entry-image img' ).removeClass( 'img-hover' );
        }
    );

    // toggle search
    $( '.genericon-search' ).click( function() {
        $( '#s' ).toggleClass( 'show' ).focus().parents().find( 'div.support' ).toggleClass( 'pushed' )
        .parents().find( '.header-navigation').removeClass( 'toggled' );
    });

    $( '.menu-toggle' ).click(function() {
         $( 'input.show' ).removeClass( 'show' ).parents().find( 'div.support' ).removeClass( 'pushed' );
    });

    // slideshows
    $( window ).load( function() {
        $i = 1;
        $( '.flexslider' ).each( function(){
            // Get control nav
            $nav_menu = $( this ).find( 'ul.slide-thumbs' );
            // Add unique control nav class
            new_menu = 'slide-thumbs-' + $i;
            $nav_menu.addClass( new_menu );
            new_menu_item = '.' + new_menu + ' li';

            $( this ).flexslider({
                animation: futility_theme.slideshow_animation,
                controlNav: futility_theme.slideshow_dots_nav,
                manualControls: new_menu_item,
                slideshow: futility_theme.slideshow_autostart,
                smoothHeight: futility_theme.slideshow_smooth_height,
                prevText: "",
                nextText: "",
                start: function( slider ) {
                    slider.removeClass( 'loading' );
                }
            } );
            $i++;
        } );
    } );    

} );