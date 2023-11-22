/**
 * @file
 * equalheights module javascript settings.
 */
(function($) {
  Drupal.behaviors.equalHeightsModule = {
    attach: function (context, settings) {
      if (Drupal.settings.equalHeightsModule) {
        var eqClass = Drupal.settings.equalHeightsModule.classes;
      }
      if (eqClass) {
        equalHeightsTrigger();
        $(window).bind('resize', function () {
          equalHeightsTrigger();
        });
      }
      function equalHeightsTrigger() {
        $.each(eqClass, function(eqClass, setting) {
          var target = $(setting.selector);
          var minHeight = setting.minheight;
          var maxHeight = setting.maxheight;
          var overflow = setting.overflow;
          target.css('height', '');
          target.css('overflow', '');

          // Disable equalheights not matching the mediaquery
          var mediaQuery = setting.mediaquery;
          var matchMedia = window.matchMedia;
          if (mediaQuery) {
            if (matchMedia && !matchMedia(mediaQuery).matches) {
                return;
              } else {
                equalHeightsLoad(target, minHeight, maxHeight, overflow);
              }
            } else {
              equalHeightsLoad(target,minHeight, maxHeight, overflow);
          }
        });
      }
      function equalHeightsLoad(target, minHeight, maxHeight, overflow) {
          // disable imagesloaded for IE<=8
          var imagesLoadedIE8 = Drupal.settings.equalHeightsModule.imagesloaded_ie8;
          if (imagesLoadedIE8 && window.attachEvent && !window.addEventListener) {
              target.equalHeights(minHeight, maxHeight).css('overflow', overflow);
          } else {
          // imagesloaded library checks if all images are loaded before callback
           target.imagesLoaded({
           callback: function($images, $proper, $broken) {
             this.equalHeights(minHeight, maxHeight).css('overflow', overflow)
           }
          });
          }
      }

    }
  }
})(jQuery);
;
/* $Id: nvl_modals.,v 1.0 2012/02/06 23:44:00 nvl.sateesh Exp $ */
(function($) {
	
  Drupal.behaviors.nvlModals = {   
    'attach': function(context, settings) {
      
      $('#modal-content #edit-name').focus();

      /*
       *Removed this code as we are applying a dynamic redirect on login links
      $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
        this.href = this.href.replace(/user\/login/,'nvl-modals-login/nojs');
      }).addClass('ctools-use-modal ctools-modal-nvl-modal-style-small');
      */
     
     //lets check if the triggerlogin is true. if yes, then, update the /user/login link
     //to go to the nvl-modals-login/nojs and then add a click event to it so it automatically clicks
     //the click binder is in sites/all/themes/maa/js/custom.js as it works only inside the document.ready
     
      if (getParameter('triggerlogin') == 'true') {
        //let us change the href of Login link to nvl modal js
        $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
          this.href = this.href.replace(/user\/login/,'nvl-modals-login/nojs');
        }).addClass('ctools-use-modal ctools-modal-nvl-modal-style-small');

      }else{
        $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
          this.href = '/login-secure-redirect';
        });
      }

    }
  }
  
  function getParameter(paramName) {
    var searchString = window.location.search.substring(1),
        i, val, params = searchString.split("&");

    for (i=0;i<params.length;i++) {
      val = params[i].split("=");
      if (val[0] == paramName) {
        return unescape(val[1]);
      }
    }
    return null;
  }  
  
}(jQuery));
;
/**
 * @file
 * JavaScript file for the MathJax module.
 */

/**
 * Typeset MathJax if ajax executes.
 */
Drupal.behaviors.mathjaxBehavior = {
  attach: function (context, settings) {
    jQuery(document).ajaxComplete(function() {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    });
  }
};
;
