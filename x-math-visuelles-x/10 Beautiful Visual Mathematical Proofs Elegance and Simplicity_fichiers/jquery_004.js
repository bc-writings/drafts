(function($){
    "use strict";

    var Autoload = function(element, options)
    {
        this.content_container   = '.post-wrapper';
        this.content_class       = '.post-autoload';
        this.current_url         = window.location.href;
        this.post_cache          = [];
        this.is_sidefeed         = $("#jeg_sidecontent").length ? true : false;
        this.sidefeed            = $(".jeg_sidefeed");
        this.change_url_locked   = false;

        $(document).bind('jnews-sidefeed-ajax', $.proxy(this.clear_post_cache, this));
        $(document).bind('jnews-sidefeed-ajax-begin', $.proxy(this.lock_change_url, this));
        this.init();
    };

    Autoload.DEFAULTS = {};

    Autoload.prototype.lock_change_url = function()
    {
        this.change_url_locked = true;
    };

    Autoload.prototype.init = function()
    {
        var base = this;

        base.initialise_waypoint();
    };

    Autoload.prototype.clear_post_cache = function()
    {
        var base = this;
        base.change_url_locked = false;
        base.post_cache = [];
        base.initialise_waypoint();

    };

    Autoload.prototype.find_prev_post = function(element)
    {
        var base = this;
        element = $(element).next();

        if(element.length)
        {
            if(element.hasClass('jeg_post')) {
                return element;
            } else {
                return base.find_prev_post(element);
            }
        } else {
            return null;
        }
    };

    Autoload.prototype.get_previous_url = function(element, post_id)
    {
        var base = this;

        if(base.is_sidefeed)
        {
            var post = base.sidefeed.find('[data-id="' + post_id + '"]');
            var prev_post = base.find_prev_post(post);

            if(prev_post) {
                return $(prev_post).find('a.ajax').attr('href');
            } else {
                return null;
            }
        } else {
            return $(element).data('prev');
        }
    };

    Autoload.prototype.initialise_waypoint = function()
    {
        var base = this;

        $( base.content_class ).each(function()
        {
            if(!$(this).hasClass('loaded'))
            {
                $(this).addClass('loaded').waypoint(function(direction)
                {
                    if( ! base.change_url_locked )
                    {
                        var waypoint = this;
                        var func = $.proxy(base.change_url, base, waypoint.element, direction);
                        func.call();
                    }
                }, {
                    offset: '0%',
                    context: window
                });

                $(this).find('.jnews-autoload-splitter').waypoint(function(direction)
                {
                    if( ! base.change_url_locked )
                    {
                        var waypoint = $(this.element).parents('.post-wrap');
                        var func = $.proxy(base.change_url, base, waypoint, direction);
                        func.call();
                    }
                },{
                    offset: '0%',
                    context: window
                });

                $(this).find('.jnews-autoload-splitter').waypoint(function(direction)
                {
                    if( ! base.change_url_locked )
                    {
                        var waypoint = $(this.element).parents('.post-wrap');
                        var func = $.proxy(base.change_url_ajax, base, waypoint, direction);
                        func.call();
                    }
                },{
                    offset: '80%',
                    context: window
                });
            }
        });
    };

    Autoload.prototype.strip_html = function(html){
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    Autoload.prototype.change_url_ajax = function(element, direction)
    {
        var base        = this;
        var el          = $(element);
        var url         = el.data('url');
        var title       = el.data('title');
        var post_id     = el.data('id');
        var prev_url    = base.get_previous_url(el, post_id);

        // If exiting or entering from top, change URL
        if (base.current_url != url)
        {
            base.current_url = url;

            if(history && history.pushState)
            {
                history.pushState(null, title, url);
                document.title = base.strip_html(title);
            }

            // update analytic
            if(window.jnews && window.jnews.ajax_analytic)
            {
                jnews.ajax_analytic.update(url, post_id);
            }

            $(document).trigger('jnews-autoload-change-id', [post_id]);
        }

        // autoload limit
        if ( jnewsoption.autoload_limit && ( $(base.content_class).length > parseInt(jnewsoption.autoload_limit) ) ) {
            return false;
        }

        // Look for the next post to load if any.
        if (prev_url && direction === 'down')
        {
            base.auto_load_prev_post(prev_url, post_id);
        }
    };

    Autoload.prototype.change_url = function(element, direction)
    {
        var base        = this;
        var el          = $(element);
        var url         = el.data('url');
        var title       = el.data('title');
        var post_id     = el.data('id');
        var prev_url    = base.get_previous_url(el, post_id);

        // If exiting or entering from top, change URL
        if (base.current_url != url)
        {
            base.current_url = url;

            if(history && history.pushState)
            {
                history.pushState(null, title, url);
                document.title = base.strip_html(title);
            }

            // update analytic
            if(window.jnews && window.jnews.ajax_analytic)
            {
                jnews.ajax_analytic.update(url, post_id);
            }

            $(document).trigger('jnews-autoload-change-id', [post_id]);
        }

        // autoload limit
        if ( jnewsoption.autoload_limit && ( $(base.content_class).length > parseInt(jnewsoption.autoload_limit) ) ) {
            return false;
        }

        // Look for the next post to load if any.
        // if (prev_url && direction === 'down')
        // {
        //     base.auto_load_prev_post(prev_url, post_id);
        // }
    };

    Autoload.prototype.check_loaded = function(post_id)
    {
        var base = this;
        return base.post_cache.indexOf(post_id) > -1;
    };

    Autoload.prototype.push_post_id = function(post_id)
    {
        var base = this;
        base.post_cache.push(post_id);
    };

    Autoload.prototype.auto_load_prev_post = function(post_url, post_id)
    {
        var base = this,
            np_url = null;

        if ( !post_url || base.check_loaded(post_id) )
        {
            return;
        } else {
            base.push_post_id(post_id);
        }

        // Check to see if pretty permalinks, if not then add partial=1
        if ( post_url.indexOf( '?p=' ) > -1 )
        {
            np_url = post_url + '&autoload=1'
        } else {
            var partial_endpoint = 'autoload/';

            if ( post_url.charAt(post_url.length - 1) != '/' )
                partial_endpoint = '/' + partial_endpoint;

            np_url = post_url + partial_endpoint;
        }

        $.get( np_url , function( data )
        {
            $(base.content_container).append(data);

            // need to set up ScrollSpy on new content
            base.initialise_waypoint();

            // trigger load
            $(document).trigger('jnews-ajax-load', [ $(base.content_container).find(base.content_class).last() ]);
        });
    };

    function Plugin(option)
    {
        return $(this).each(function()
        {
            var $this = $(this);
            var options = $.extend({}, Autoload.DEFAULTS, $this.data(), typeof option == 'object' && option);
            var data = $this.data('jeg.autoload');

            if (!data) $this.data('jeg.autoload', (data = new Autoload(options)));
        });
    }

    var old = $.fn.jautoload;

    $.fn.jautoload = Plugin;
    $.fn.jautoload.Constructor = Autoload;

    $.fn.jautoload.noConflict = function () {
        $.fn.jautoload = old;
        return this
    };

    $(document).ready(function(){
        $('body').jautoload();
    });

})(jQuery);
