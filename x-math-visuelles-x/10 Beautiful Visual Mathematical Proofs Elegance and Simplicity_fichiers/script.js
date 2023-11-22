(function($){
	"use strict"

	$(document).bind('ready', function(){
		/**
		 * Mobile truncate
		 */
		function jeg_custom_mobile_truncate( target ) {
			target.each(function(){
				var element = $(this),
					wrapper = element.parents('.post-autoload')

				if ( element.hasClass('mobile-truncate') ) {
					wrapper.find('.jnews_comment_container').addClass('display-none')
					wrapper.find('.jnews_author_box_container').addClass('display-none')
					wrapper.find('.jnews_prev_next_container').addClass('display-none')
					wrapper.find('.jnews_content_bottom_ads').addClass('display-none')
					wrapper.find('.jnews_related_post_container').addClass('display-none')
					wrapper.find('.jeg_share_bottom_container').addClass('display-none')
					wrapper.find('.jeg_sidebar').addClass('display-none')
				}

				wrapper.find('.truncate-read-more').on('click', function(){
					wrapper.find('.jnews_comment_container').removeClass('display-none')
					wrapper.find('.jnews_author_box_container').removeClass('display-none')
					wrapper.find('.jnews_prev_next_container').removeClass('display-none')
					wrapper.find('.jnews_content_bottom_ads').removeClass('display-none')
					wrapper.find('.jnews_related_post_container').removeClass('display-none')
					wrapper.find('.jeg_share_bottom_container').removeClass('display-none')
				})
			})	
		}

		jeg_custom_mobile_truncate( $('.content-inner') )

		/**
		 * Post title
		 */
		var wrapper = $('.jeg_stickybar').find('.style11').html($('.post-autoload').attr('data-title'))

		$(document).bind('jnews-autoload-change-id', function (event, post_id) {
			var wrapper = $('.post-autoload[data-id="'+post_id+'"]'),
				title = wrapper.attr('data-title'),
				contentWrap = wrapper.find('.entry-content')

			reading_progress_bar( contentWrap )

			jeg_custom_mobile_truncate( wrapper.find('.content-inner') )

			wrapper = $('.jeg_stickybar').find('.style11').html(title)
	    })

		/**
		 * Progress bar
		 */
		reading_progress_bar( $('.entry-content') )

		function reading_progress_bar( contentWrap ) {
			if ( ! $('body').hasClass('single') ) {
				return false;
			}

			$('.jeg_header_sticky .jeg_read_progress_wrapper').remove()

			var bar = $('.jeg_read_progress_wrapper').html(),
				header = $('.jeg_header_sticky .jeg_container')

			header.append('<div class="jeg_read_progress_wrapper">'+bar+'</div>')

			var progressWrap = $('.jeg_header_sticky .jeg_progress_container')

		      if ( progressWrap.length > 0 ) {
		          var didScroll = false,
		              windowWrap = $(window),
		              contentHeight = contentWrap.height(),
		              windowHeight = windowWrap.height() * .85;

		          $(window).scroll(function() {
		              didScroll = true;
		          });

		          $(window).on('resize', function(){
		              windowHeight = windowWrap.height() * .85;
		              progressReading();
		          });

		          setInterval(function() {
		              if ( didScroll ) {
		                  didScroll = false;
		                  progressReading();
		              }
		          }, 150);

		          var progressReading = function() {

		              var windowScroll = windowWrap.scrollTop(),
		                  contentOffset = contentWrap.offset().top,
		                  contentScroll = ( windowHeight - contentOffset ) + windowScroll,
		                  progress = 0;

		              if ( windowHeight > contentHeight + contentOffset ) {
		                  progressWrap.find('.progress-bar').width(0);
		              } else {
		                  if ( contentScroll > contentHeight ) {
		                      progress = 100;
		                  } else if ( contentScroll > 0 ) {
		                      progress = ( contentScroll / contentHeight ) * 100 ;
		                  }

		                  progressWrap.find('.progress-bar').width(progress + '%');
		              }
		          }
		      }
		}
	})
})(jQuery)