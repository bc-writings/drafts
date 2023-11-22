/***************************************************************************
 *
 *	Cargo Namespace
 *
 **************************************************************************/
var Cargo = { };

// Create a default objects 
Cargo.o 					= { };  // Default object definition (for backbone init)
Cargo.o.model 				= { };  // Default object definition (for backbone init)
Cargo.o.collection 			= { };  // Default object definition (for backbone init)
Cargo.o.view 				= { };  // Default object definition (for backbone init)

Cargo.Router 				= { };	// All main router methods
Cargo.Template 				= { };	// Template controllers
Cargo.Helper 				= { };	// Helper methods
Cargo.API 	 				= { };	// API communication
Cargo.Event  				= { };	// Backbone events (History, close, etc)

Cargo.Collection 			= { };	// Collections base
Cargo.Collection.Page 		= { };	// Project collection pages (for pagination in memory)
Cargo.Collection.NavPage	= { };	// Navigation collection pages (for pagination in memory)
Cargo.Model 				= { };	// Models base
Cargo.View  				= { };	// Views base

/**
 *	Action namespace
 */
var Action = window.Action || { };

 /***************************************************************************
  *
  *	Cargo core functionality
  *	This contains all core functionality native to all Cargo websites
  *	For the most part, these methods are reproductions of the existing
  *	functionality from site.package 
  *
 **************************************************************************/

/*
	- Slideshow		: _cargo/_core/slideshow.js 
	- Handlebars	: _cargo/_core/handlebars.js 
	- Fullscreen  	: freshbox jQuery plugin in this file
	- Lightbox 		: freshbox jQuery plugin in this file
	- Keyboard nav 	: this file
	- Video player	: _cargo/_core/video.js 
	- Log 			: this file
 */

 Cargo.Core = {

 	/**
	 *	Make a safe logging method
	 */
	log : function(args) {
		if (typeof console == 'undefined' || !window.console) {
			return;
		}
		console.log(args);
	},

	/**
	 *	Keyboard shortcuts
	 *	Add and Remove
	 *	Add Usage:
	 *	Cargo.Core.KeyboardShortcut.Add("Shift+F", 70, function(){ });
	 *	Remove Usage:
	 *	Cargo.Core.KeyboardShortcut.Remove("Shift+F");
	 */
	KeyboardShortcut : {
		Add : function(key, keycode, fn) {
			var data = {
				'type'				: 'keydown', 
				'disable_in_input'	: true, 
				'keycode' 			: keycode
			};

			shortcut.add(key, fn, data);
		},

		Remove : function(key) {
			shortcut.remove(key);
		},

		/*
		 *	Base set of keyboard shortcuts
		 */
		InitDefaults : function() {
			this.Add("J", 74, function() { Action.Project.Next() });
			this.Add("K", 75, function() { Action.Project.Prev() });
			this.Add("R", 82, function() { Action.Project.Random() });
			this.Add("X", 88, function() { Action.Project.Index() });
			this.Add("I", 73, function() { Action.Project.Index() });

			this.Add("Shift+F", 70, function() { 
				if ( ! $("body").hasClass("rail_active") ) {
					Cargo.app.Rail.Events.trigger("show_rail_following");
				} else {
					Cargo.app.Rail.Events.trigger("rail:hide");
				}
			});
			this.Add("Shift+G", 71, function() { Cargo.Helper.GoToUrl("images"); });

			this.Add("Shift+A", 65, function() { 
				if(typeof require == "function" && Cargo.API.Config.is_editor) {
					if(parent.location == window.location) {
						Cargo.Event.trigger("add_history", "admin");
					}
				} else {
					Cargo.Helper.GoToUrl("admin"); 
				}
			});
			
			this.Add("Shift+E", 69, function() { 
				if(Cargo.Model.Site.GetIsEditor() && Cargo.Model.Project.GetId() && parent.location == window.location) {
					Cargo.Helper.GoToUrl("admin/"+Cargo.Model.Project.GetId());
				} });

			this.Add("Shift+H", 72, function() { Cargo.Helper.GoToUrl("admin/html"); });
			this.Add("Shift+C", 67, function() { Cargo.Core.loadInspector3(); });
			this.Add("Shift+D", 68, function() { Cargo.Helper.GoToUrl("admin/designs"); });
			this.Add("Shift+X", 88, function() { Cargo.Helper.GoToUrl(""); });
			this.Add("Shift+I", 73, function() { loadInspector(); });
			
			this.Add("Esc", 27, function() { 
				$("a.follow_popup_cancel").click(); 
					if ( ! $("#freshbox").length > 0 ) {
					Cargo.app.Rail.Events.trigger("rail:hide");
				}
			});

		}
	},

	loadEditor: function(){
		var iframe = document.createElement('iframe');

		//Cargo.Rail.Init = function(){};
		

		iframe.setAttribute('id', 'content_frame');

		iframe.src 				= Cargo.Helper.GetBaseUrl(true, true);
		iframe.frameBorder 		= '0';
		iframe.style.display 	= 'none';
		iframe.style.width 		= 'calc(100% - 400px)';
		iframe.style.height 	= '100%';
		iframe.style.left 		= '400px';
		iframe.style.left 		= '0';
		iframe.style.top 		= '0';
		iframe.style.position  	= 'fixed';

		var nodesToRemove = [],
			i;

		for(i = 0; i < document.body.childNodes.length; i++){
			if(document.body.childNodes[i] !== iframe){
				nodesToRemove.push(document.body.childNodes[i]);
			}
		}

		[].forEach.call(document.querySelectorAll('link[rel="stylesheet"], style'), function(node){
			nodesToRemove.push(node);
		});

		require(["/_jsapps/editor/main.bootstrap.js"], function() {

		});

		iframe.onload = function(){
			
			iframe.style.display = '';

			var html = document.getElementsByTagName("html")[0];

			if(html !== undefined){
				html.removeAttribute('style');
			}

			nodesToRemove.forEach(function(node){
				if(node.parentNode !== null){
					node.parentNode.removeChild(node);
				}
			});

		}

		document.body.appendChild(iframe);
	},

	/**
	 *	Replace the old loading animations with retnified versions
	 *	
	 *	Note: This sits in a timeout because it won't fire correctly
	 *		on doc.ready 
	 */
	ReplaceLoadingAnims : {
		init : function(specificSelection) {
			// First, check for existing spinners
			$(".retinaSpinner").each(function() {
				if (window.devicePixelRatio > 1 ){
					$(this).addClass('rotating');
				}
			});

			setTimeout(function() {
				if(Cargo.Helper && !Cargo.Helper.isOldIE()){
				 	var spinnerEl = $('<div></div>');

					for(var i = 0; i < 8; i++){
						spinnerEl.append(
							'<div style="position: absolute; top: -2px;">' +
								'<div class="spinner_circle part' + (i + 1) + '" style="-webkit-transform: rotate(' + (i * 45) +'deg) translate(6px, 0px); transform: rotate(' + (i * 45) +'deg) translate(6px, 0px);"></div>' +
							'</div>');
					}
					
					if(typeof specificSelection == "undefined" && $('img[src$="/loadingAnim.gif"]').length > 0){
						$('img[src$="/loadingAnim.gif"]').each(function(){
							Cargo.Core.ReplaceLoadingAnims.replace(this, spinnerEl);
						});
					} else if(typeof specificSelection != "undefined") {
						specificSelection.each(function(){
							Cargo.Core.ReplaceLoadingAnims.replace(this, spinnerEl);
						});
					}

					Cargo.Event.trigger("loading_anims_replaced");
				}
			}, 100);
		}, 

		replace : function(which, spinnerEl) {
			var thisSpinner = spinnerEl.clone();

			thisSpinner.attr('class', 'retinaSpinner ' + $(which).attr('class'));
			thisSpinner.attr('id', $(which).attr('id'));
			thisSpinner.attr('style', $(which).attr('style'));
			thisSpinner.attr('data-loading', $(which).attr('data-loading'));

			if (window.devicePixelRatio > 1 ){
				thisSpinner.addClass('rotating');
			}

			// replace the old GIF
			$(which).replaceWith(thisSpinner);
		}
	},

	/**
	 *	This method is called by events.js on project_load_complete
	 *	It loads the template, and loads the view into Memory
	 *	The view for the freshbox handles the click events
	 */
	CheckAndInitFreshbox : function() {
		// Remove the fullscreen from offline mode
		if( Cargo.API.Config.offline ) {
			return false;
		}
		
		/* Check for a fullscreen button perpare it */
		if( $("#fullscreen").length > 0 || Cargo.Model.DisplayOptions.GetLightboxView() ) {
			/* Prevent multiple instantiation */
			if(typeof Cargo.View.Fullscreen == "undefined") {
				/* Add the template to the stack */
				Cargo.Template.Add( "Freshbox" );

				/* Make sure we have loaded the freshbox */
				Cargo.Template.Load( "Freshbox", Cargo.API.GetFreshboxPath() );

				/* Initialize the fullscreen view */
				Cargo.View.Fullscreen = new Cargo.o.view.Freshbox({
					el 		:  "body",
					model 	:  Cargo.Model.Project
				});
			}
		}

	},

	/**
	 *	This finds the search data-view and loads the search view 
	 *	if one is not already loaded
	 */
	FindAndLoadSearch : function(first_load) {
		if(typeof Cargo.View.Search != "undefined" && !first_load) {
			return false;
		}

		if($("[data-view='search']").length > 0) {
			Cargo.View.Search = new Cargo.o.view.Search({ 
				el : "[data-view='search']"
			});
		
		} else if($("#search_form").length > 0) {
			Cargo.View.Search = new Cargo.o.view.Search({ 
				el : "#search_form"
			});
		}
	},

	/**
	 *	This method is meant to reseed the project data, rather then refreshing the whole page
	 *	This is called from the admin frameset upon project ordering and toggle
	 */
	ReseedProjectModels : function() {
		// Reset the page and offset count
		Cargo.API.Config.current_offset = 0;
		Cargo.API.Config.current_page = 0;
		Cargo.API.Config.site_recently_created = false;
		
		// Get the URL of the API path
		Cargo.Collection.Navigation.url = Cargo.API.GetNavigationCargoPath( 0 );
		Cargo.Collection.Projects.url = Cargo.API.GetProjectsPath( 0 );
		
		// Fetch the data
		Cargo.Collection.Projects.fetch({reset: true, complete: function() { 
			Cargo.Event.Common(); 
			Cargo.Event.trigger("reseed_project_complete");
		}});
		Cargo.Collection.Navigation.fetch({reset: true, complete: function() { 
			Cargo.Event.trigger("reseed_navigation_complete");
		}});
		
	},

	loadInlineEditor: function(){
		
		console.log('SIKE!');
		
		/*$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/_jsapps/inline-editor/cargoEditor.css') );
		$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/_jsapps/inline-editor/cargoEditor_plugins_all.css') );

		$.getScript( "/_jsapps/inline-editor/cargoEditor.js", function( data, textStatus, jqxhr ) {

			$('head').append( $('<script/>').attr('src', '/_jsapps/inline-editor/cargoEditor_plugins_all.js') );

			// attach editors to projects.
			$('[data-ce-host="true"]').each(function() {
				if (!$(this).is('[contenteditable]')) {
					CargoEditor.addEditor(this);
				}
			});
			
		});*/
 		

	},

	loadInspector3 : function(){

		if(window.editor !== undefined){
			return false;
		}

		if(Cargo.API.Config.network == "Persona") {
			Cargo.Helper.GoToUrl("/admin/design/type-layout/css");
			return;
		}

		Cargo.Core.Inspector3.load({

			onInit: function(inspector){

				function addClickBehavior(){

					// replace all click events handled by Backbone with dblClick events.
					_.each(Cargo.View, function(view){
						if(typeof view.undelegateEvents == "undefined") {
							return;
						}

						// remove all events bound to this view
						view.undelegateEvents();

						_.each(view.events, function(method, key){
							 var match = key.match(delegateEventSplitter);

							if(match !== null) {
								// found a click event. Add a dblclick in place.
								if(match[1] === "click") {
									view.events['dblclick ' + match[2]] = method;
									delete view.events[key];
								}
							}
						});

						// re-attached all events including the modified ones.
						view.delegateEvents();
					});

					$("a:not([rel], #splash)").unbind("click").off('dblclick').on("dblclick", function() {

						var href = this.getAttribute('href');

						if(href !== null && href !== '#' && href !== '' && href.indexOf('javascript:') === -1){

							var cargoURL				= (Cargo.hasOwnProperty('Helper') ? Cargo.Helper.GetUrl() : Cargo.Config.GetCookieUrl()),
								customDomain			= inspector.options.coreWindow.location.hostname.search(/cargocollective\.com/i) === -1,
								sameDomain				= (this.hostname.search(/cargocollective\.com/i) !== -1 ? this.pathname.split('/')[1] === cargoURL : this.hostname === inspector.options.coreWindow.location.hostname),
								subLocation 			= this.pathname.split('/')[(customDomain ? 1 : 2)],
								forbiddenSubLocation	= (subLocation === undefined ? false : subLocation.search(/^(following|admin|images)$/i) !== -1);

							//console.log(cargoURL, customDomain, subLocation, sameDomain, forbiddenSubLocation);

							if(sameDomain && !forbiddenSubLocation) {
								inspector.options.coreDocument.location.href = this.getAttribute('href');
							} else {
								var newTab = inspector.options.coreWindow.open(href, '_blank');
									newTab.focus();
							}

						}
					});

					$('img').unbind('click');

					if(Cargo.Core.Slideshow.hasOwnProperty('SlideshowObjects')){
						$.each(Cargo.Core.Slideshow.SlideshowObjects, function(key, val){
							val.elements.$thumbnails.on('dblclick', function(){
								val.hideThumbnails();
								val.showContainer();
							});
						})
					}
					
				}

				var $ = inspector.options.coreWindow.$,
					Cargo = inspector.options.coreWindow.Cargo,
					delegateEventSplitter = /^(\S+)\s*(.*)$/;

				setTimeout(function(){
					Cargo.app.Rail.Events.on("toolset:loaded", function() { 
						$("#toolset, #toolset *, #toolset_menu, #toolset_menu *, #design_panel, #design_panel *").unbind().off();
						$("#toolset_follow_pair a, #toolset_follow a").unbind();

						$("#toolset").fadeTo('fast', 0.3).css('pointer-events', 'none');

					});

					$("#toolset, #toolset *, #toolset_menu, #toolset_menu *, #design_panel, #design_panel *").unbind().off();
					$("#toolset_follow_pair a, #toolset_follow a").unbind();
					$("#toolset").fadeTo('fast', 0.3).css('pointer-events', 'none');
					
				}, 500);

				$("#toolset").fadeTo('fast', 0.3).css('pointer-events', 'none');


				Cargo.Event.on("pagination_complete", function( new_page ) { 
					addClickBehavior();
				});

				Cargo.Event.on("project_load_complete", function( new_page ) { 
					addClickBehavior();
				});

				$('.slideshow *').unbind().off();

				addClickBehavior();
			}
		}); 
	},

	/**
	 *	Loads the inspector
	 */
	LoadInspector : function() {

		// 302'd
		this.loadInspector3();

	},

	HiRes : {
		active : false,

		Queue : {
			STATE_LOADING: 0,
			STATE_COMPLETE: 1,
			STATE_ERROR: -1,
			ID: 'hi-res-queue',
			FILE_EXTENSION: /(?:\.([^.]+))?$/,
			FILE_NAME: /(?:\/([^\/]+))?$/,
			element: null,

			init: function() {
				$('body').append('<div id="' + this.ID + '" style="display: none;" />');
				this.element = $('#' + this.ID);
			},

			search: function() {
				if ( ! Cargo.Core.HiRes.active) {
					return;
				}

				// $('[data-mid], div.thumb_image img').map(function() {
				$('[data-hi-res]').map(function() {
					// @TODO Determine means to ignore slideshow thumbnails?
					if (this.nodeName === 'IMG') {
						Cargo.Core.HiRes.Queue.push(this);
					}
				});
			},

			push: function(img) {
				var img_src = img.src
				// var hi_res_src = img_src.replace(this.FILE_EXTENSION, '_2x.$1');
				var hi_res_src = $(img).data('hi-res');
				var mid = $(img).data('mid');
				// Hack to support thumbnails
				var queue_id = mid ? 'hi-res-queue-' + mid : 'hi-res-queue-' + (img_src.match(this.FILE_NAME)[1]).replace(/[\W\.(_2x)]/g, '');
				var queue_img = $('#' + queue_id);

				if (queue_img.length) {
					switch (queue_img.attr('data-hi-res-status')) {
						case this.STATE_COMPLETE:
							return this.handleCachedImage(queue_img, img);
						case this.STATE_LOADING:
							return this.handleDuplicateImage(queue_img, img);
						default:
							return;
					}
				} else {
					this.element.append('<img id="' + queue_id + '" data-hi-res-status="' + this.STATE_LOADING + '">');
					queue_img = $('#' + queue_id);
					queue_img.data('lo-res-images', [img]);
					queue_img.one('load', function() {
						Cargo.Core.HiRes.Queue.handleLoad(queue_img);
					}).one('error', function() {
						Cargo.Core.HiRes.Queue.handleError(queue_img);
					}).attr('src', hi_res_src);
				}
			},

			handleCachedImage: function(queue_img, img) {
				img.src = queue_img.attr('src');
			},

			handleDuplicateImage: function(queue_img, img) {
				var lo_res_images = queue_img.data('lo-res-images');
				lo_res_images.push(img);
				queue_img.data('lo-res-images', lo_res_images);
			},

			handleLoad: function(queue_img) {
				var hi_res_src = queue_img.attr('src');
				queue_img.attr('data-hi-res-status', this.STATE_COMPLETE);
				queue_img.data('lo-res-images').map(function(img) {
					img.src = hi_res_src;
				});
			},

			handleError: function(queue_img) {
				queue_img.attr('data-hi-res-status', this.STATE_ERROR);
			}
		},

		Loader : {
			init: function() {
				checkPixelRatio();

				function checkPixelRatio() {
					var prevDevicePixelRatio = parseFloat($.cookie('userPixelRatio'));
					
					if(prevDevicePixelRatio != window.devicePixelRatio) {
						if(window.devicePixelRatio > 1.5) {
							enableHiRes();
						} else {
							disableHiRes();
						}
					}

					$.cookie('userPixelRatio', window.devicePixelRatio, {path: '/'});
				}

				function disableHiRes() {
					$.post("/dispatch/cargosite/cargoUseHiRes", { use : false }, function() {}, "json");
				}

				function enableHiRes() {
					$.post("/dispatch/cargosite/cargoUseHiRes", { use : true }, function() {}, "json");

					$(document).bind("projectLoadComplete", function(e, pid) {
						Cargo.Core.HiRes.Queue.search();
					});

					$(document).bind("pageChangeComplete", function(e, newpage) {  
						Cargo.Core.HiRes.Queue.search();
					});

					$(document).bind("paginationComplete", function(e) {  
						Cargo.Core.HiRes.Queue.search();
					});

					Cargo.Core.HiRes.active = true;
					Cargo.Core.HiRes.Queue.init();
					Cargo.Core.HiRes.Queue.search();
				}

				// listen to changes while page is loaded
				try {
					var MediaQueryList = window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5)");

					if (typeof MediaQueryList.addListener === "function") {
						MediaQueryList.addListener(function(){
							checkPixelRatio();
						});
					}
				} catch(err) {
					// matchMedia does not exist
				}
			}
		}
		
	},

	EU_cookie_notification : function() {
		if($('head meta[name="en_cookie_notification"]').length > 0) {
			if(!localStorage.getItem('eu_cookie_notification')) {
				var class_name = $('head meta[name="en_cookie_notification"]').attr('position'),
					content = $('head meta[name="en_cookie_notification"]').attr('description'),
					link = $('head meta[name="en_cookie_notification"]').attr('policy_link');
				content = content.replace('[policy_link]', '<a href="'+link+'" target="_blank">').replace('[/policy_link]','</a>');

				$('body').prepend('<div id="eu_cookie_notification" class="'+class_name+'">'+content+'</div>');

				$("#eu_cookie_notification").click(function(e) {
					if($(e.target).is('a')){
						return true;
					}
					
					$(this).remove();
					localStorage.setItem('eu_cookie_notification', 'true');
				});
			}
		}
	}
	


 };


 

Cargo.o.analytics = Backbone.View.extend({

	enabled: true,

	Config: {
		id: 'UA-1837333-7',
		name: '__cargo_analytics',
	},

	initialize: function() {
		
		if(Cargo.API) {

			this.enabled = Cargo.API.GetUseGoogleAnalytics();

			if (Cargo.API.Config.is_domain) {
				this.Config.custom_url = '/' + document.location.host;
			}

			if(Cargo.API.Config.network == "Persona") {
				this.Config.id = 'UA-1837333-14';
			}
		} else {
			this.Config.id = 'UA-1837333-14';
		}

		if(this.enabled) {

			// Include analytics.js
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			// Create Google Analytics tracker, send initial pageview
			ga('create', this.Config.id, 'auto', {'name': this.Config.name, 'cookieName': this.Config.name});
			
			this.pageview(false);

		}

	},

	pageview: function(send_to_all_trackers, url) {


		var tracker = this.Config.name,
			pathname = document.location.pathname.replace(/\/$/, '');


		if (typeof url !== 'undefined' && ! send_to_all_trackers) {
			
			if(this.enabled) {
				
				ga(this.Config.name + '.send', 'pageview', {
					'page': url,
					'dimension3': 'Cargo 1'
				});

			}

			return;
		}

		if(this.enabled) {
			
			if (typeof this.Config.custom_url !== 'undefined') {
				ga(this.Config.name + '.send', 'pageview', {
					'page': this.Config.custom_url + pathname,
					'dimension3': 'Cargo 1'
				});
			} else {
				ga(this.Config.name + '.send', 'pageview', {
					'dimension3': 'Cargo 1'
				});
			}

		}

		// Send data for any other trackers
		if (typeof ga == 'function' && send_to_all_trackers) {
			ga(function() {
				ga.getAll().map(function(g) {
					var t = g.get('name');
					if (t != tracker) {
						ga(t + '.send', 'pageview');
					}
				});
			});

			// Push data to legacy trackers
			if (typeof _gaq !== 'undefined') {
				_gaq.push(['_trackPageview', pathname]);
			}
		}
	}
});


/***************************************************************************
 *
 *	API
 *	It contains all methods related to the API
 *
 **************************************************************************/

/**
 * @namespace API
 * @memberOf Cargo
 * @extends {Backbone.View} 
 */

Cargo.o.api = Backbone.View.extend({

	/**
	 *  Set the config values for the API
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 *  @example Cargo.API.Config.api_path;
	 */
	Config : {
		Version 			: "v0",
		api_path 			: "/_api",
		cargo_id 			: "",
		cargo_url 			: "",
		cargo_url_override 	: null,
		filter 				: "",
		search_term 		: "",
		route_name 			: "",
		template_basename 	: "design",
		current_offset 		: 0, // Set in the defaults which is loaded on page load
		current_page 		: 1, // Set in the defaults which is loaded on page load
		start_project 		: null,
		is_filter 			: false,
		is_search 			: false,
		is_editor 			: false,
		is_solo 			: false,
		is_direct_link 		: false,
		is_custom_route 	: false,
		admin_edit_project 	: false,
		first_load_finished : false
	},

	/**
	 *	Load the API defaults by extending the Config vars using underscore
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 */
	initialize : function() {
		_.extend(this.Config, $.parseJSON( $("script[data-set='defaults']").html() ));
	},

	/**
	 *	returns the raw JSON data, just in case you need it
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 *
	 * @param {string} [path] The path to the API endpoint
	 * @param {function} [callback] Callback function to handle return value
	 *
	 * @example Cargo.API.fetch(Cargo.API.GetSitePath(), myCallback);
	 */
	fetch : function( path, callback ) {
		$.getJSON( path, callback );
	},

	GetUseGoogleAnalytics: function(){

		return this.Config._use_google_analytics == 1;

	},

	/*
	 * ######################################################################
	 *
	 *	PATHS
	 *
	 * ######################################################################
	 */
	/**
	 *  Gets the path for the Site API Model
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetSitePath();
	 */
	GetSitePath : function() {
		var c 		= this.Config; // shorthand
		var path 	= c.api_path + "/" + c.Version + "/site/" + c.cargo_url;
		return path;
	},

	/**
	 *  Gets the path for the Design API Model
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetDesignPath();
	 */
	GetDesignPath : function() {
		var c 		= this.Config; // shorthand
		var url 	= (c.cargo_url_override) ? c.cargo_url_override : c.cargo_url;
		var path 	= c.api_path + "/" + c.Version + "/designs/" + url;
		return path;
	},

	/**
	 *  Gets the path for the Files API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {string} [file] The name of the file
	 *  @return {string}
	 *  @example Cargo.API.GetDesignFile(file);
	 */
	GetDesignFile : function(file) {
		var path = this.GetDesignPath() + "?file=" + file;
		return path;
	},

	/**
	 *  Gets the path for the Template files
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetTemplatePath();
	 */
	GetTemplatePath : function() {
		var c = this.Config; // shorthand
		var route_name = (c.route_name) ? c.route_name + "/" : "";
		return this.GetDesignFile(".templates/" + c.template_basename + "/" + route_name);
	},

	/**
	 *  Gets the path for the Fullsreen handlebars
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetFreshboxPath();
	 */
	GetFreshboxPath : function() {
		return '/_jsapps/api/_templates/Freshbox.handlebars';
	},

	/**
	 *	Gets the design path + a file
	 *	optionally adds the "to_var" param to pass to the api
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {string} [file] The name of the file requested
	 *  @param {boolean} [to_var] Optional value to return the content as a javascript var
	 *  @return {string}
	 *  @example Cargo.API.GetDesignAndFile(file, to_var);
	 */
	GetDesignAndFile : function(file, to_var) {
		var file_path = this.GetTemplatePath() + file;
		if( to_var ) {
			file_path += "&to_var=true";
		}

		return file_path;
	},

	/**
	 *  Gets the path for the Display Options API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetDisplayOptionsPath();
	 */
	GetDisplayOptionsPath : function() {
		var c 		= this.Config; // shorthand
		var path 	= c.api_path + "/" + c.Version + "/displayoptions/" + c.cargo_url;
		return path;
	},

	/**
	 *  Gets the path for the Images API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @return {string}
	 *  @example Cargo.API.GetImagesPath();
	 */
	GetImagesPath : function(offset, limit, sort) {
		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		sort   = (sort)  ? sort  : 'newest';

		var path = this.GetSitePath() + "/images";
			path += "?offset=" + offset + "&limit=" + limit + "&sort=" + sort;

		return path;
	},

	/**
	 *  Gets the path for the Projects API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @param {string} [type] Optional type param (page, project)
 	 *  @param {string} [filter] Optional filter name
	 *  @param {string} [set] Optional set name
	 *  @param {string} [route] Optional route name
	 *  @return {string}
	 *  @example Cargo.API.GetProjectsPath(offset, limit, type, filter, set, route);
	 */
	GetProjectsPath : function(offset, limit, type, filter, set, route) {
		/* If this is a solo link, load single project */
		if( Cargo.Helper.IsSololink() ) {
			return this.GetSingleProjectPath( Cargo.Model.Project.GetProjectUrl() );
		}

		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		type   = (type)   ? type   : 'project';
		filter = (filter) ? filter : this.Config.filter;
		set    = (set)    ? set    : this.Config.set;
		route  = (route)  ? route  : Cargo.Helper.GetRouteName();

		// Cargo.Core.log(Cargo.Helper.GetCurrentRoute()+" -- "+Cargo.Helper.GetRouteName());

		var path = this.GetSitePath() + "/projects?type=" + type;
			path += "&offset=" + offset + "&limit=" + limit;

		if( filter != "" && type != "page") {
			path += "&filter=" + encodeURIComponent(filter);
		}

		if( set && type != "page" ) {
			path += "&set=" + encodeURIComponent(set);
		}

		// if( route ) {
		// 	path += "&route=" + encodeURIComponent(route);
		// }

		if( this.Config.site_recently_created ) {
			path += "&site_recently_created=true";
		}

		return path;
	},

	/**
	 *  Gets the path for the Admin Project List API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @return {string}
	 *  @example Cargo.API.GetAdminListPath(offset, limit);
	 */
	GetAdminListPath : function(offset, limit) {
		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		
		var path = this.GetSitePath() + "/admincollection";
			// path += "?offset=" + offset + "&limit=" + limit;

		return path;
	},

	/**
	 *  Gets the path for the Following Rail
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetRailPath();
	 */
	GetRailPath : function() {
		return '/dispatch/rail/getRail/'+this.Config.cargo_url;
	},

	/**
	 *  Gets the path for the Site Search API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @param {string} [term] Search term
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @param {string} [sort] The sort type ("relevant" || "recent" || "mostviewed")
	 *  @return {string}
	 *  @example Cargo.API.GetSearchPath();
	 */
	GetSearchPath : function(term, offset, limit, sort) {
		term 	= (term) ? term : this.Config.search_term;
		offset 	= (offset) ? offset : this.Config.current_offset;
		limit 	= (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		sort 	= (sort)  ? sort  : 'relevant'; // 

		var path = this.GetSitePath() + "/search";
			path += "?term=" + term + "&offset=" + offset + "&limit=" + limit + "&sort=" + sort;

		return path;
	},

	/**
	 *  Gets the path for a single Project API
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {string} [purl] The Project URL
	 *  @param {string} [filter] Optional filter name
	 *  @param {string} [set] Optional set name
	 *  @return {string}
	 *  @example Cargo.API.GetSingleProjectPath(purl, filter, set);
	 */
	GetSingleProjectPath : function(purl, filter, set) {
		var c 		= this.Config; // shorthand
		var path 	= c.api_path + "/" + c.Version + "/projects/";
		filter = (filter) ? filter : this.Config.filter;
		set    = (set)    ? set    : this.Config.set;

		if(typeof purl != "undefined" ) path += purl;
		path += "?url=" + c.cargo_url;
		
		if( filter != "" ) {
			path += "&filter=" + encodeURIComponent(filter);
		}

		if( set ) {
			path += "&set=" + encodeURIComponent(set);
		}

		return path;
	},

	/**
	 *	Cargo navigation uses Display Options as it’s guide. 
	 *	It will pull all pages and links outside of sets and filters. 
	 *	This is the main style of navigation data for every website. 
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @param {string} [set] Optional set name
	 *  @param {string} [filter] Optional filter name
	 *  @return {string}
	 *  @example Cargo.API.GetNavigationCargoPath(offset, limit, set);
	 */
	GetNavigationCargoPath : function(offset, limit, set, filter) {
		/* If this is a solo link, load single project */
		if( Cargo.Helper.IsSololink() ) {
			return this.GetSingleProjectPath( Cargo.Model.Project.GetProjectUrl() );
		}

		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		set    = (set)    ? set    : this.Config.set;
		filter = (filter) ? filter : Cargo.Helper.GetActiveFilter();

		var path = this.GetSitePath() + "/navigation";
			path += "?offset=" + offset + "&limit=" + limit;

		if( set ) {
			path += "&set=" + encodeURIComponent(set);
		}

		if( filter ) {
			path += "&filter=" + encodeURIComponent(filter);
		}

		return path;
	},

	/**
	 *	This method grabs only the exact navigation asked for. 
	 *	This is used when only the data inside of a single set, 
	 *	or single filter are required. 
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @param {string} [set] Optional set name
	 *  @return {string}
	 *  @example Cargo.API.GetNavigationOnlyPath(offset, limit, set);
	 */
	GetNavigationOnlyPath : function(offset, limit, set) {
		/* If this is a solo link, load single project */
		if( Cargo.Helper.IsSololink() ) {
			return this.GetSingleProjectPath( Cargo.Model.Project.GetProjectUrl() );
		}

		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		set    = (set)    ? set    : this.Config.set;

		var path = this.GetSitePath() + "/only_navigation";
			path += "?offset=" + offset + "&limit=" + limit;

		if( set ) {
			path += "&set=" + encodeURIComponent(set);
		}

		return path;
	},

	/**
	 *	This method grabs all set data
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @return {string}
	 *  @example Cargo.API.GetSetsPath(offset, limit);
	 */
	GetSetsPath : function(offset, limit) {
		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();

		var path = this.GetSitePath() + "/sets";
			path += "?offset=" + offset + "&limit=" + limit;

		return path;
	},

	/**
	 *	This method gets the location of the file put path
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @return {string}
	 *  @example Cargo.API.GetSiteFilesPutPath();
	 */
	GetSiteFilesPutPath : function() {
		return '/dispatch/files/putFile';
	},
	
	/*
	 * ######################################################################
	 *
	 *	MODELS AND DATA
	 *
	 * ######################################################################
	 */

	/**
	 *	Helper method to create a data package with the model.
	 *	This binds the Display Options and Site model with the 
	 *	incoming data
	 *	This is used when rendering Handlebars
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {string} [model_name] The name of the model 
	 *  @param {JSON} [model] The raw data to be added to the model
	 *  @return {array}
	 *  @example Cargo.API.GetDataPackage(model_name, model);
	 */
	GetDataPackage : function(model_name, model) {
		var data_package = {
			"site" 				: Cargo.Model.Site.toJSON(),
			"display_options"	: Cargo.Model.DisplayOptions.toJSON(),
			"config" 			: this.Config
		}
		
		data_package[model_name] = model;

		return data_package;
	},

	/*
	 * ######################################################################
	 *
	 *	PROJECTS
	 *
	 * ######################################################################
	 */
	

	/**
	 *	This will fetch a project collection via ajax by re-init a Backbone Collection
	 *	When we re-init, we set the value of the URL to fetch from.
	 *	After the fetch, the Views will update automatically
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @example Cargo.API.FetchProjectCollection(offset, limit);
	 */
	FetchProjectCollection : function(offset, limit) {
		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		
		Cargo.Collection.Projects.url = Cargo.API.GetProjectsPath( offset, limit );

		var total_count = Cargo.Helper.GetTotalProjectsInMemory();

		if( Cargo.Helper.IsAutopaginate() ) {
			/* Auto pagination just adds to the collection */
			Cargo.Collection.Projects.fetch({
				remove: false,
				success: function(collection) {
					// Check to see if there is anything left to load, stop additional loads
					if((Math.floor(limit) + Math.floor(total_count)) >= Cargo.Helper.GetTotalProjectsInMemory()) {
						Cargo.View.Autopaginate.Data.is_updating = false;
					}
					Cargo.Event.trigger("pagination_complete", Cargo.API.Config.current_page );
				}
			});

		} else {
			/* Normal pagination replaces the entire collection */
			Cargo.Collection.Projects.fetch({reset: true});
		}
		
	},

	/**
	 *	This will fetch a Project Collection via ajax by re-init a Backbone Collection
	 *	When we re-init, we set the value of the URL to fetch from.
	 *	After the fetch, the Views will update automatically
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {string} [purl] Project URL
	 *  @param {object} [colletion] Optional collection
	 *  @example Cargo.API.GetSingleProject(purl, collection);
	 */
	GetSingleProject : function(purl, collection) {
		Cargo.Event.trigger("project_load_start", purl);

		if(typeof collection == "undefined") {
			collection = Cargo.Collection.Projects;
		}
		
		/*
		 *	Try and get the model from memory first
		 */
		var project_model = collection.findWhere( { project_url : purl } );
		var page_model = Cargo.Collection.Pages.findWhere( { project_url : purl } );
		var model = (page_model) ? page_model : project_model;

		if( model && !this.Config.site_recently_created ) {
			/*
			 *	This model seems legit
			 */
			Cargo.Model.Project.set(model.toJSON());

		} else {
			Cargo.Core.log("No model found, async");
			/*
			 *	If there is no model, then load one async
			 */
			Cargo.Model.Project.fetch( { data : { purl : purl }} );
		
		}

	},

	/**
	 * Gets a random project by querying the API
	 */
	GetRandomProject : function() {
		Cargo.Model.Project.fetch({
				data : { 
					url : Cargo.API.Config.cargo_url, 
					random : true 
				},
				reset: false,
				success: function(model) {
					/* Navigate to the new URL, but do not trigger */
					Cargo.Router.navigate( Cargo.Model.Project.GetProjectUrl(), { trigger: false });
				}
			});
	},

	/**
	 *	Sets a Project Page Collection
	 *	This will follow this order
	 *	- Save the current collection into a page memory
	 *	- Attempt to load the collection from memory
	 *	- If fail, then ajax load the project collection
	 *	- Set the new page and offset
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [page] Page number changing to
	 *  @param {number} [current_page] Current page number
	 *  @example Cargo.API.SetProjectsPage(page, current_page);
	 */
	SetProjectsPage : function(page, current_page) {
		/* Get the offset and the current page */
		var offset = Cargo.Helper.GetOffsetFromPage( page );
		
		/* Set the config values with the new values */
		this.Config.current_page   = page;
		this.Config.current_offset = offset;

		/* Verify that we are not loading past our max, or pre our min */
		if( offset <= Cargo.Model.DisplayOptions.GetTotalProjects() && offset >= 0 ) {
			/* Put the current collection into memory */
			Cargo.Collection.Page[current_page] = Cargo.Collection.Projects.toJSON();

			/* Check for the new page in memory */
			if( Cargo.Collection.Page[page] ) {
				/* This is in memory, so re-load the project with the stored data */
				Cargo.Collection.Projects.reset( Cargo.Collection.Page[page] );
				
			} else {
				/* Fetch a collection based on the offset */
				this.FetchProjectCollection( offset );
			}

		}
		
	},

	


	/*
	 * ######################################################################
	 *
	 *	NAVIGATION
	 *
	 * ######################################################################
	 */

	/**
	 *	Returns the URL for the following link
	 *	
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *
	 *  @return {string}
	 *  @example Cargo.API.GetFollowingUrl();
	 */
	 GetFollowingUrl : function() {
	 	return Cargo.Model.Site.GetDirectLink() + "/following";
	 },

	/**
	 *	This will fetch a Project Collection via AJAX
	 *	by re-init a Backbone Collection
	 *	When we re-init, we set the value of the URL to fetch from
	 *	After the fetch, the views will update automatically
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [offset] Offset for pagination
	 *  @param {number} [limit] Limit for pagination
	 *  @example Cargo.API.FetchNavigationCollection(offset, limit);
	 */
	FetchNavigationCollection : function(offset, limit) {
		offset = (offset) ? offset : this.Config.current_offset;
		limit  = (limit)  ? limit  : Cargo.Helper.GetPageLimit();
		
		Cargo.Collection.Navigation.url = Cargo.API.GetNavigationCargoPath( offset, limit );
		
		if( Cargo.Helper.IsAutopaginate() ) {
			/* Auto pagination just adds to the collection */
			Cargo.Collection.Navigation.fetch({remove: false});

		} else {
			/* Normal pagination replaces the entire collection */
			Cargo.Collection.Navigation.fetch({reset: true});
		}
		
	},

	/**
	 *	Sets the next page of navigation
	 *	This will follow this order
	 *	- Save the current collection into a page memory
	 *	- Attempt to load the collection from memory
	 *	- If fail, then ajax load the navigation collection
	 *	- Set the new page and offset
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 *  @param {number} [page] Page number changing to
	 *  @param {number} [current_page] Current page number
	 *  @example Cargo.API.SetNavigationPage(page, current_page);
	 */
	SetNavigationPage : function(page, current_page) {
		/* Get the offset and the current page */
		var offset = Cargo.Helper.GetOffsetFromPage( page );
		
		/* Verify that we are not loading past our max, or pre our min */
		if( offset <= Cargo.Model.DisplayOptions.GetTotalProjects() && offset >= 0 ) {
			/* Put the current collection into memory */
			Cargo.Collection.NavPage[current_page] = Cargo.Collection.Navigation.toJSON();

			/* Check for the new page in memory */
			if( Cargo.Collection.NavPage[page] ) {
				/* This is in memory, so re-load the project with the stored data */
				Cargo.Collection.Navigation.reset( Cargo.Collection.NavPage[page] );
			
			} else {
				/* Fetch a collection based on the offset */
				this.FetchNavigationCollection( offset );
			}
		}

	},

	/*
	 * ######################################################################
	 *
	 *	SITE FILES
	 *
	 * ######################################################################
	 */

	 /**
	 *	Save a file to site files
	 *	This method is using ajax for now
	 * 
	 *  @private
	 *  
	 *  @memberOf Cargo.API
	 *  @param {string} [file] Name of the file to save
	 *  @param {string} [data] data of the file to save
	 *  @param {function} [callback] A callback function
	 *  @example Cargo.API.PutSiteFile(file, data, function(data){ console.log(data); });
	 */
	 PutSiteFile : function(file, data, callback) {
	 	$.ajax({
			type: 'POST',
			url: this.GetSiteFilesPutPath(),
			context: this,
			data: {
				file: file,
				data: data,
				uid: Cargo.Model.Site.GetId()
			},
			dataType: 'json',
			success: function(data) {
				if (typeof callback === "function") {
					callback.call(this, data);
				}
			},
			error: function(e) {
				
			}
		});
	 }

});



 /***************************************************************************
  *
  *	Action namespace
  *	This is a shorthand wrapper for view actions and is intended 
  *	to make it easier and more accessible to call a simple action
  *
 **************************************************************************/

Action = {
	/***************************************************************************
	 *
	 *	Project actions
	 *	Usage:
	 *	Action.Project.Close();
	 *
	 **************************************************************************/
	 Project : {
	 	
	 	Index : function() {
	 		Cargo.View.Main.ShowIndex();
	 	},

	 	Close : function() {
	 		Cargo.View.Main.ShowIndex();
	 	},

	 	Next : function() {
	 		Cargo.View.Main.NextProject();
	 	},

	 	Prev : function() {
	 		Cargo.View.Main.PrevProject();
	 	},

	 	Random : function() {
	 		Cargo.View.Main.RandomProject();
	 	}
	 
	 },

	 /***************************************************************************
	  *
	  *	Navigation actions
	  *	Usage
	  *	Action.Navigation.NextPage();
	  *
	  **************************************************************************/
	 Navigation : {

	 	NextPage : function() {
	 		Cargo.View.Main.NextPage();
	 	},

	 	PrevPage : function() {
	 		Cargo.View.Main.PrevPage();
	 	}
	 }

}

/***************************************************************************
 *
 *	Events
 *	This is the events repository
 *	Create events for state change by extending backbone
 * 	DOM manipulation
 *	This file is included in the cargo/init
 *
 **************************************************************************/

/***************************************************************************
 *
 *	Backbone Events
 *
 **************************************************************************/

 	/**
 	 * Example of binding to an event:
 	 * <pre class="prettyprint">
 	 * Cargo.Event.on("project_load_complete", function( pid ) {
 	 *     alert("Project " + pid + " loaded!");
 	 * });
 	 * </pre>
 	 * Example of triggering an event:
 	 * <pre class="prettyprint">
 	 * Cargo.Event.trigger("add_history", "/Project-title");
 	 * </pre>
 	 *
 	 *	@namespace Events
 	 *	@memberOf Cargo
 	 *	@extends {Backbone.Events}
 	 */

	/*
	 *	The history object is created in bootstrap
	 */
	_.extend(Cargo.Event, Backbone.Events);

	/**
	 *	Adding history
	 *	Simply push a single URL onto the history stack
	 *	by navigating to that URL
	 *
	 *	@event add_history
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [url] URL to be added to history
	 *  @param {string} [id] ID of the project (if there is one)
	 *
	 *  @example Cargo.Event.on("add_history", function(url, id) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("add_history", function( url, id ) {
		url = Cargo.Helper.NormalizeRouteLink(url);

		// Whenever you are, we're already there
		if(url === Cargo.Helper.GetCurrentProjectUrl()){
			if( !Cargo.Model.DisplayOptions.GetDisableProjectScroll() ) {
				Cargo.Helper.ScrollToTop();
			}
			return;
		}

		/* Show the loading animation */
		if( !Cargo.Helper.IsCurrentRoute(url) ) {
			id = (id) ? id : Cargo.Helper.GetPidFromPurl(url);
			Cargo.Helper.ShowLoadingAnimation( id, url );
		} else {
			/* Scroll to top */
			if( !Cargo.Model.DisplayOptions.GetDisableProjectScroll() ) {
				Cargo.Helper.ScrollToTop();
			}
		}

		/* Navigate to the new URL */
		Cargo.Router.navigate( url, { trigger: true });

	});

	/**
	 *	Adding history passively
	 *	Change the URL, but don't fire the event
	 *
	 *  @event add_history_passive
	 *  @memberOf Cargo.Events
	 *  @private
	 *
	 *  @param {string} [url] URL to be added to history
	 *
	 *  @example Cargo.Event.on("add_history_passive", function(url) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("add_history_passive", function( url ) {
		url = Cargo.Helper.NormalizeRouteLink(url);

		/* Navigate to the new URL */
		Cargo.Router.navigate( url, { trigger: false });

	});

	/**
	 *	Page load when editing a project
	 *
	 *	@memberOf Cargo.Events
	 *
	 *	@event admin_edit_load_complete
	 *
	 *	@example Cargo.Event.on("admin_edit_load_complete", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("admin_edit_load_complete", function(  ) {

	});

	/**
	 *	When the audio player is started / stopped
	 *
	 *	@event audio_play_pause
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [rel] The rel attribute of the button clicked
	 *  @param {string} [which] Which action: play/pause
	 *
	 *  @example Cargo.Event.on("audio_play_pause", function(rel, which) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("audio_play_pause", function( rel, which ) {

	});

	/**
	 *	Fires after the columnizer is done updating.
	 *	Note this can be triggered often and repeatedly.
	 *
	 *  @event columnizer_update_complete
	 *
	 *  @memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("columnizer_update_complete", function() {
	 *     // Methods after event is triggered
	 *});
	 */

	Cargo.Event.on("columnizer_update_complete", function() {

	});

	/**
	 *	When on a custom route
	 *
	 *	@event custom_route_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [location] The route location
	 *
	 *  @example Cargo.Event.on("custom_route_loaded", function(location) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("custom_route_loaded", function( location ) {

	});

	/**
	 *	When on a direct link
	 *
	 *	@event direct_link_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [location] The link loaded
	 *
	 *  @example Cargo.Event.on("direct_link_loaded", function(location) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("direct_link_loaded", function( location ) {
		$(document).trigger("directLinkLoaded", [ location ]);
	});

	/**
	 *	When the first navigation collection reset event is triggered
	 *
	 *	@event first_navigation_collection_reset
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("first_navigation_collection_reset", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("first_navigation_collection_reset", function(  ) {

	});

	/**
	 *	When the first project collection reset event is triggered
	 *
	 *	@event first_project_collection_reset
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("first_project_collection_reset", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("first_project_collection_reset", function(  ) {
		Cargo.API.Config.first_load_finished = true;
	});

	/**
	 *	When the fullscreen mode is closed
	 *
	 *	@event fullscreen_close
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("fullscreen_close", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("fullscreen_close", function(  ) {

	});

	/**
	 *	When the fullscreen mode destroys the hotkeys
	 *	rebind any design keys
	 *
	 *	@event fullscreen_destroy_hotkeys
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("fullscreen_destroy_hotkeys", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("fullscreen_destroy_hotkeys", function(  ) {
		Cargo.Core.KeyboardShortcut.Add("Esc", 27, function() {
			$("a.follow_popup_cancel").click();
				if ( ! $("#freshbox").length > 0 ) {
				Cargo.app.Rail.Events.trigger("rail:hide");
			}
		});
	});


	/**
	 *	When the fullscreen mode is initialized
	 *
	 *	@event fullscreen_open
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("fullscreen_open", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("fullscreen_open", function(  ) {

	});

	/**
	 *	When the homepage is loaded
	 *
	 *	@event homepage_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("homepage_loaded", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("homepage_loaded", function() {
		if(Cargo.View.Navigation) {
			Cargo.View.Navigation.AddSetActive();
		}

		// Scroll the page back to the top
		if( !Cargo.Model.DisplayOptions.GetDisableProjectScroll() ) {
			Cargo.Helper.ScrollToTop();
		}
	});

	/**
	 *	When the inspector is unloaded
	 *
	 *	@event inspector_unload
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("inspector_unload", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("inspector_unload", function(  ) {
		// Rebind all of the objects again
		Cargo.Collection.Projects.reset( Cargo.Collection.Projects.models );
		Cargo.Event.Common();
	});

	/**
	 *	When a the loading animations have been replaced
	 *
	 *	@event loading_anims_replaced
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("loading_anims_replaced", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("loading_anims_replaced", function( ) {

	});

	/**
	 *	When the freshbox launches
	 *
	 *	@event lightbox_open
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("lightbox_open", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("lightbox_open", function(  ) {

	});

	/**
	 *	When the freshbox is all done
	 *
	 *	@event lightbox_close
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("lightbox_close", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("lightbox_close", function(  ) {

	});

	/**
	 *	When the navigation content has been reset with a new model
	 *
	 *	@event navigation_reset
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("navigation_reset", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("navigation_reset", function() {

	});

	/**
	 *	When the lightbox has been created and is ready in the window
	 *  Triggered by proxying photoswipe events
	 *
	 *	@event lightbox-init
	 *
	 *  @param {object} [lightbox] The photoswipe instance
	 *	 
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("lightbox-init", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on('lightbox-init', function(lightbox){

	  // hack to prevent lightbox from janking on iOS's slow resize
	  if( Cargo.Helper.isMobile()) {
	      var resizeTimeout
		  $(window).on('resize.lightbox', function(){
	          clearTimeout(resizeTimeout);
	          resizeTimeout = setTimeout(function(){
		          lightbox.updateSize(true);
			  }, 500);
		  })
	  }
	});

	/**
	 *	When the lightbox has been destroyed
	 *  Triggered by proxying photoswipe events
	 *
	 *	@event lightbox-destroy
	 *
	 *  @param {object} [lightbox] The photoswipe instance
	 *	 
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("lightbox-init", function() {
	 *     // Methods after event is triggered
	 *});
	 */	
	Cargo.Event.on('lightbox-destroy', function(lightbox){
	  if( Cargo.Helper.isMobile()) {
		  $(window).off('resize.lightbox');
	  }
	});	

	/**
	 *	When a set in the navigation is being opened or closed
	 *
	 *	@event navigation_set_toggle
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("navigation_set_toggle", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("navigation_set_toggle", function() {

	});

	/**
	 *	Go to the next page
	 *
	 *	@event next_page
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [page] Page number
	 *
	 *  @example Cargo.Event.on("next_page", function(page) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("next_page", function( new_page ) {
		$(document).trigger("pageChange", [new_page]);
	});

	/**
	 *	Go to the next project
	 *
	 *	@event next_project
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of the project to be loaded
	 *
	 *  @example Cargo.Event.on("next_project", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("next_project", function( pid ) {
		$(document).trigger("showNextProject", [pid]);
	});

	/**
	 *	When the pagination is done
	 *
	 *	@event pagination_complete
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [page] Page number of the newly loaded page
	 *
	 *  @example Cargo.Event.on("pagination_complete", function(page) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("pagination_complete", function( new_page ) {
		$(document).trigger("pageChangeComplete", [new_page] );
		$(document).trigger("paginationComplete", [new_page] );
		Cargo.Helper.HideLoadingAnimation();

		// Common events that are fired multiple times
		Cargo.Event.Common();

		/* Add an active state to the navigation */
        if(Cargo.View.Navigation) {
            Cargo.View.Navigation.AddActive();
            Cargo.View.Navigation.AddSetActive();
        }

        /* Add an active state to the thumbnail */
        if(Cargo.View.Thumbnail) {
            Cargo.View.Thumbnail.AddActive();
        }

	});

	/**
	 *	When the pagination starts
	 *
	 *	@event pagination_start
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [page] Page number of the page to be loaded
	 *
	 *  @example Cargo.Event.on("pagination_start", function(page) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("pagination_start", function( new_page ) {
		Cargo.Helper.ShowLoadingAnimation();

	});

	/**
	 *	Go to the previous page
	 *
	 *	@event prev_page
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [page] Page number to go back to
	 *
	 *  @example Cargo.Event.on("prev_page", function(page) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("prev_page", function( new_page ) {
		$(document).trigger("pageChange", [new_page]);
	});

	/**
	 *	Go to the previous project
	 *
	 *	@event prev_project
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of the previous project
	 *
	 *  @example Cargo.Event.on("prev_project", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("prev_project", function( pid ) {
		$(document).trigger("showPrevProject", [pid]);
	});

	/**
	 *	Fires whenever a project is closing, either to the index or another page/project
	 *
	 *	@event project_change
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("project_change", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("project_change", function() {

	});

	/**
	 *	When a the project collection has loaded
	 *
	 *	@event project_collection_reset
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @example Cargo.Event.on("project_collection_reset", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("project_collection_reset", function( ) {

	});

	/**
	 *	When the a project is finished loading
	 *
	 *	@event project_load_complete
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of the project to be loaded
	 *
	 *  @example Cargo.Event.on("project_load_complete", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("project_load_complete", function( pid ) {
		$(document).trigger("projectLoadComplete", [ pid ]);

		/* Reset the Project Transition */
		Cargo.Event.ProjectTransition = new $.Deferred();

		/* Common events that are fired multiple times */
		Cargo.Event.Common();

		/* Scroll the page back to the top */
		if( !Cargo.Model.DisplayOptions.GetDisableProjectScroll() ) {
			Cargo.Helper.ScrollToTop();
		}

		/* Change the bg color, if needed */
		if(Cargo.View.ProjectDetail) {
			Cargo.View.ProjectDetail.ChangeBgColorFromModel();
		}

		/* Remove the set class from body */
		if(Cargo.View.Main && !Cargo.Helper.IsOnStartProject()) {
			Cargo.View.Main.RemoveStartProjectClass();
		}


		/* Add an active state to the navigation */
		if(Cargo.View.Navigation) {
			Cargo.View.Navigation.AddActive(pid);
			Cargo.View.Navigation.AddSetActive();
		}

		/* Add an active state to the thumbnail */
		if(Cargo.View.Thumbnail) {
			Cargo.View.Thumbnail.AddActive(pid);
			Cargo.View.Thumbnail.CheckAndHideThumbs();
		}

		/* Hide the loading animations */
		Cargo.Helper.HideLoadingAnimation();

		/* Set the html page title */
		if( !Cargo.Helper.IsOnStartProject() ) {
			Cargo.View.Main.SetWindowTitle();
		}

		/* Set the data-type on the body */
		Cargo.View.Main.SetDataType(Cargo.Model.Project.GetType());

		// Gracefully track project load as a pageview
		if (! Cargo.API.Config.is_direct_link && ! Cargo.Helper.IsOnStartProject()) {
			Cargo.Analytics.pageview(true);
		}
	});

	/**
	 *	When a project starts to load
	 *
	 *	@event project_load_start
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [purl] Project URL about to be loaded
	 *
	 *  @example Cargo.Event.on("project_load_start", function(purl) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("project_load_start", function( purl ) {
		Cargo.Event.trigger('project_change');
		$(document).trigger("startProjectLoaded", [purl]);

		// Set is_direct_link to false once we start loading our projects through JS
		Cargo.API.Config.is_direct_link = false;
	});

	/**
	 *	Go to a random project
	 *
	 *	@event random_project
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of a random project to be loaded
	 *
	 *  @example Cargo.Event.on("random_project", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("random_project", function( pid ) {
		$(document).trigger("showRandomProject", [pid]);
	});

	/**
	 *	Triggered once the navigation reseed is complete
	 *	Reseeding happens when the admin refreshes the front end via frame
	 *
	 *	@event reseed_navigation_complete
	 *
	 *	@memberOf Cargo.Events
	 *
	 *
	 *  @example Cargo.Event.on("reseed_navigation_complete", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("reseed_navigation_complete", function( pid ) {

	});

	/**
	 *	Triggered once the project reseed is complete
	 *	Reseeding happens when the admin refreshes the front end via frame
	 *
	 *	@event reseed_project_complete
	 *
	 *	@memberOf Cargo.Events
	 *
	 *
	 *  @example Cargo.Event.on("reseed_project_complete", function() {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("reseed_project_complete", function( pid ) {

	});

	/**
	 *	When on a set
	 *
	 *	@event set_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [location] The URL of the set
	 *
	 *  @example Cargo.Event.on("set_loaded", function(location) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("set_loaded", function( location ) {

	});

	/**
	 *	When a the index is completely loaded (project is closed)
	 *
	 *	@event show_index_complete
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of the project recently closed
	 *
	 *  @example Cargo.Event.on("show_index_complete", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("show_index_complete", function( pid ) {
		$(document).trigger("projectCloseComplete", [pid]);
		$(document).trigger("projectIndex");

		/* Remove active state to the navigation */
		if(Cargo.View.Navigation) {
			Cargo.View.Navigation.RemoveActive();
		}

		/* Remove active state to the thumbnails */
		if(Cargo.View.Thumbnail) {
			Cargo.View.Thumbnail.RemoveActive();
			Cargo.View.Thumbnail.ShowThumbs();
		}

		/* Set the html page title */
		Cargo.View.Main.SetWindowTitle(true);

		/* Remove the data-type on the body */
		Cargo.View.Main.SetDataType(null);

		/* Remove the start project class */
		Cargo.View.Main.RemoveStartProjectClass();

		/* Reset the Project Transition */
		Cargo.Event.IndexTransition = new $.Deferred();
	});

	/**
	 *	When the index is about to be shown (project is about to close)
	 *
	 *	@event show_index_start
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {number} [pid] PID of the project currently open
	 *
	 *  @example Cargo.Event.on("show_index_start", function(pid) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("show_index_start", function( pid ) {
		Cargo.Event.trigger('project_change')
		$(document).trigger("projectClose", [pid]);
	});

	/**
	 * Slideshow is resizing
	 *
	 *	@event slideshow_resize
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {object} [el] Slideshow Element
	 *  @param {object} [obj] The slideshow instance
	 *
	 *  @example Cargo.Event.on("slideshow_resize", function(el, obj) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("slideshow_resize", function( el, obj ) {

	});

	/**
	 *	Slideshow transition is starting
	 *
	 *	@event slideshow_transition_start
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {object} [el] Slideshow Element
	 *  @param {object} [obj] The slideshow instance
	 *
	 *  @example Cargo.Event.on("slideshow_transition_start", function(el, obj) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("slideshow_transition_start", function( el, obj ) {
		$(document).trigger("slideshowTransitionStart");
	});

	/**
	 *	Slideshow transition is finished
	 *
	 *	@event slideshow_transition_finish
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {object} [el] Slideshow Element
	 *  @param {object} [obj] The slideshow instance
	 *
	 *  @example Cargo.Event.on("slideshow_transition_finish", function(el, obj) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("slideshow_transition_finish", function( el, obj ) {
		$(document).trigger("slideshowTransitionFinish");
	});

	/**
	 * When on a solo link
	 *
	 *	@event solo_link_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [location] URL of the link loaded
	 *
	 *  @example Cargo.Event.on("solo_link_loaded", function(location) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("solo_link_loaded", function( location ) {

	});

	/**
	 *	When a template has been loaded
	 *
	 *	@event template_loaded
	 *
	 *	@memberOf Cargo.Events
	 *
	 *  @param {string} [template] Name of the template loaded
	 *
	 *  @example Cargo.Event.on("template_loaded", function(template) {
	 *     // Methods after event is triggered
	 *});
	 */
	Cargo.Event.on("template_loaded", function( template_name ) {

	});


	/**
	 *	Common events that are fired regularly
	 *
	 *	@method common
	 *	@private
	 *
	 *	@memberOf Cargo.Events
	 */
	Cargo.Event.Common = function() {
		/* Check for, and activate, slideshows */
		if(typeof Cargo.Core.Slideshow.InitSlideshow != "undefined") {
			Cargo.Core.Slideshow.InitSlideshow();
		}

		/* Check for, and activate, video fallback */
		Cargo.Core.Video.CheckForVideo();

		/* Find an init any audio players */
		Cargo.Core.Audio.CheckForAudio();

		/* Look for a search form in a project or on the page */
		Cargo.Core.FindAndLoadSearch();

		/* Check and init freshbox, but only on non-permalink */
		if( !Cargo.Helper.IsPermalink( Cargo.Model.Project.GetProjectUrl() ) ) {
			Cargo.Core.CheckAndInitFreshbox();
		}

		/* Remove the freshbox */
		if( $("#freshbox").length > 0) {
			Cargo.View.Fullscreen.Close();
		}

	}

/***************************************************************************
 *
 *	Project transition event
 *
 **************************************************************************/
 	/**
 	 * A global for holding a jquery Deferred object
 	 * This is used for project and index transitions
 	 *
 	 * @type {jQuery}
 	 * @method common
 	 * @private
 	 *
 	 * @memberOf Cargo.Events
 	 */
 	Cargo.Event.ProjectTransition = new $.Deferred();
 	Cargo.Event.IndexTransition = new $.Deferred();

 	/**
 	 * A global method that is meant to be overwritten by designs
 	 * This is a method that will run while transitioning a project open
 	 * The project opening is deferred until this method resolves itself.
 	 *
 	 * 	@param {String} pid The project ID
 	 * 	@param {String} project_markup The rendered HTML for the requested project
 	 * 	@param {Object} project_model The full project model
 	 *	@method common
	 *	@private
	 *
	 *	@memberOf Cargo.Events
 	 */
	Cargo.Event.ShowProjectTransition = function(pid, project_markup, project_model) {
		 Cargo.Event.ProjectTransition.resolve();
		 return Cargo.Event.ProjectTransition.promise();
	}

	/**
 	 * A global method that is meant to be overwritten by designs
 	 * This is a method that will run while transitioning a project close / show index
 	 * The index showing is deferred until this method resolves itself.
 	 *
 	 * 	@param {String} pid The project ID being closed
 	 * 	@param {Object} project_model The full project model
 	 *	@method common
	 *	@private
	 *
	 *	@memberOf Cargo.Events
 	 */
	Cargo.Event.ShowIndexTransition = function(pid, project_model) {
		Cargo.Event.IndexTransition.resolve();
		return Cargo.Event.IndexTransition.promise();
	}

/***************************************************************************
 *
 *	jQuery Events
 *
 **************************************************************************/


	/*
	 *	This is the close event from Cargo 1.0
	 *	When triggered, it will close a project
	 *	For now, this remains in this file. Probably should move it
	 */
	$(document).bind("closeProject", function(e) {
		Action.Project.Close();
	});



/***************************************************************************
 *
 *	Helpers
 *	This contains various helper methods that are used 
 *		in various views
 *
 **************************************************************************/

/**
 * The Cargo namespace holds all fields and methods
 * @namespace Cargo
 */
 
/**
 * @namespace o 
 * @memberOf Cargo
 */

/**
 * @constructor Cargo.o.Helpers
 * @extends {Backbone.View} 
 * @memberOf Cargo.o
 */



Cargo.o.helpers = Backbone.View.extend({
	Data : {
		is_loading : false,
		loading_timout : 1000
	},

	/**
	 *  Checks to see if the browser allows fullscreen
	 * 
	 *  @public
	 *  
	 *  @memberOf Cargo.o.Helpers
	 *
	 *  @return {boolean} True if fullscreen is supported, false if not.
	 *  @example Cargo.Helper.AllowsFullScreen();
	 */
	AllowsFullScreen : function() {
		var docElem = document.documentElement;
		if (docElem.requestFullscreen || docElem.mozRequestFullScreen || docElem.msRequestFullscreen || docElem.webkitRequestFullScreen) {
			return true;
		} else {
			return false;
		}
	},

	/**
	 *	Find Project Collection based on Project URL
	 *	
	 *	@public 
	 *  @memberOf Cargo.o.Helpers
	 *
	 *	@param {String} [project_url] URL of the Project
	 *	
	 *	@return {object} Project collection
	 *	@example Cargo.Helper.FindCollectionByProjectUrl(url);
	 */
	FindCollectionByProjectUrl : function( project_url ) {
		var found_collection = false;
		_.each(Cargo.Collection.Page, function(collection) {
			if( !found_collection ) {
				var dummy_collection = new Backbone.Collection();
				dummy_collection.reset(collection);
				var model = dummy_collection.where( { project_url : project_url } );

				if(model[0]) {
					found_collection = collection;
				}
			}
		});

		return found_collection;
	},

	/**
	 * 	Get the active Filter 
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  
	 *  @return {string} Filter name
	 *  @example Cargo.Helper.GetActiveFilter();
	 */
	GetActiveFilter : function() {
		return Cargo.API.Config.filter; 
	},

	/**
	 * 	Get the active index. This will return
	 *  /url/filter/cat OR /url/set OR /url
	 *  Whatever the current page's index is
	 *  
	 *  @memberof Cargo.o.Helpers
	 *
	 * @param {Boolean} [full_path] Returns the full http://domain.com/path or http://cargocollective.com/url/path
	 *  @return {string} Index path
	 *  @example Cargo.Helper.GetActiveIndex();
	 */
	GetActiveIndex : function(full_path) {
		var relative_path = Cargo.Helper.GetHomeUrl(true, true);

		return (full_path) ? window.location.protocol + '//'+this.GetBaseDomain()+relative_path : relative_path;
	},

	/**
	 *	This is a way to load backbone collections, models and views
	 *	without knowing the case. It is useful because of the data-view attributes
	 *	that do all the dynamic loading on each page
	 *
	 *  @public
	 *  @memberof Cargo.o.Helpers
	 *  
	 *	@param {object} [obj] backbone object
	 *	@param {string} [model] Name of the requested model
	 *	
	 *	@return {string} Name actual name of the model
	 *	@example Cargo.Helper.GetBackboneCaseInsensitive(obj, model);
	 */
	GetBackboneCaseInsensitive : function(obj, requested_model) {
		var mapped_methods = {};

		for(var f in obj){
			// console.log(f+" -- "+obj.hasOwnProperty(f)+" -- "+typeof obj[f]);
		    if(obj.hasOwnProperty(f) && (typeof obj[f]=='function' || typeof obj[f]=='object')){
		        mapped_methods[f.toLowerCase()] = f;
		    }
		}

		return (requested_model) ? mapped_methods[requested_model.toLowerCase()] : "";
	},

	/**
	 *	Get the base URL
	 *
	 *  @public 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @param {boolean} [force] Always return the Cargo/url
	 *	@param {boolean} [add_slash] If a slash should be returned with Cargo/url
	 *	
	 *	@return {string} If custom domain, return nothing, otherwise return Cargo/url
	 *	@example Cargo.Helper.GetBaseUrl(force, add_slash);
	 */
	GetBaseUrl : function(force_url, add_slash) {
		if( Cargo.API.Config.is_domain ) {
			return (add_slash) ? "/" : "";
		} else {
			var url = (force_url) ? Cargo.API.Config.cargo_url : "";
			return (add_slash) ? "/" + url : url;
		}
	},

	/**
	 *	The base Cargo domain
	 *	
	 *  @memberof Cargo.o.Helpers
	 *
	 *	@return {string} The Cargo root domain
	 *	@example Cargo.Helper.GetBaseCargoDomain();
	 */
	GetBaseCargoDomain : function() {
		return (/cargocollective.com/.test(document.location.host) || /persona.co/.test(document.location.host)) ? document.location.host : 'cargocollective.com';
	},

	/**
	 *	The base domain
	 *	
	 *  @memberof Cargo.o.Helpers
	 *
	 *	@return {string} The active root domain
	 *	@example Cargo.Helper.GetBaseDomain();
	 */
	GetBaseDomain : function() {
		return (/cargocollective.com/.test(document.location.host)) ? 'cargocollective.com' : document.location.host;
	},

	/**
	 *	Gets the current model from the Project collection
	 *	
	 *  @memberof Cargo.o.Helpers
	 *  
	 *	@return {object} The active Project Model
	 *	@example Cargo.Helper.GetCurrentModelFromProjects();
	 */
	GetCurrentModelFromProjects : function() {
		return Cargo.Collection.Projects.where( { project_url : Cargo.Helper.GetCurrentProjectUrl() } );
	},

	/**
	 *  Get the open Project or Page's type
	 *  
	 *  @memberof Cargo.o.Helpers
	 * 
	 *  @return {string/boolean} String of "page" or "project" or false
	 *  @example Cargo.Helper.GetCurrentPageType();
	 */
	GetCurrentPageType : function() {
		return Cargo.Model.Project.GetType();
	},

	/**
	 *  Get the open Project's URL
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @return {string/boolean} String of URL or false
	 *  @example Cargo.Helper.GetCurrentProjectUrl();
	 */
	GetCurrentProjectUrl : function() {
		return Cargo.Model.Project.GetProjectUrl();
	},

	/**
	 *  Get the open project's ID
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @return {string/boolean} String of ID or false
	 *  @example Cargo.Helper.GetCurrentProjectId();
	 */
	GetCurrentProjectId : function() {
		return Cargo.Model.Project.GetId();
	},

	/**
	 *  Get the current Backbone route 
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @return {string} Route name
	 *  @example Cargo.Helper.GetCurrentRoute();
	 */
	GetCurrentRoute : function() {
		return Backbone.history.fragment;
	},

	/**
	 * Gets the name of the Design
	 *
	 *  @memberof Cargo.o.Helpers
	 *  
	 * 	@return {string} Design name
	 *  @example Cargo.Helper.GetDesignName();
	 */
	GetDesignName : function() {
		return Cargo.API.Config.design_name;
	},

	/**
	 *  Get the domain or the Cargo/url
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  
	 *  @return {string} Domain or URL
	 *  @example Cargo.Helper.GetDomainOrUrl();
	 */
	GetDomainOrUrl : function() {
		if( Cargo.API.Config.is_domain ) {
			return this.GetUrl();
		} else {
			return location.pathname.split("/")[1];
		}
	},

	/**
	 *  Gets the homepage URL
	 *  Could be Filter, could be search, could be domain. etc
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @param {boolean} [force] Force return of the Cargo/url
	 *  @param {boolean} [add_slash] Prefix a slash to the result
	 *  
	 *  @return {string} URL
	 *  @example Cargo.Helper.GetHomeUrl(force, add_slash);
	 */ 
	GetHomeUrl : function(force_url, add_slash) {
		var slash = (add_slash) ? "/" : "";

		// Set and Filter
		if( Cargo.API.Config.set && Cargo.API.Config.filter) {
			if( Cargo.API.Config.is_domain ) {
				return slash + Cargo.API.Config.set + "/filter/" + encodeURIComponent(Cargo.API.Config.filter);
			} else {
				return this.GetBaseUrl(force_url, add_slash) + "/" + Cargo.API.Config.set + "/filter/" + encodeURIComponent(Cargo.API.Config.filter);
			}
		}
		// Route and Filter
		else if( Cargo.API.Config.route && Cargo.API.Config.filter) {
			if( Cargo.API.Config.is_domain ) {
				return Cargo.Helper.GetRouteUrl() + "/filter/" + encodeURIComponent(Cargo.API.Config.filter);
			} else {
				return this.GetBaseUrl(force_url, false) + Cargo.Helper.GetRouteUrl() + "/filter/" + encodeURIComponent(Cargo.API.Config.filter);
			}
		}
		// Filter only
		else if( Cargo.API.Config.filter ) {
			if( Cargo.API.Config.is_domain ) {
				return slash + "filter/" + encodeURIComponent(Cargo.API.Config.filter);
			} else {
				return this.GetBaseUrl(force_url, add_slash) + "/filter/" + encodeURIComponent(Cargo.API.Config.filter);
			}
			
		} 
		// Set only
		else if( Cargo.API.Config.set ) {
			if( Cargo.API.Config.is_domain ) {
				return slash + Cargo.API.Config.set;
			} else {
				return this.GetBaseUrl(force_url, add_slash) + "/" + Cargo.API.Config.set;
			}
		} 
		// Route only
		else if( Cargo.API.Config.route ) {
			if( Cargo.API.Config.is_domain ) {
				return Cargo.Helper.GetRouteUrl();
			} else {
				// Note: don't send the route with the base because we don't want to load projects
				// inside of routes. The projects will redirect to the actual links instead
				return this.GetBaseUrl(force_url, add_slash); // + "/" + Cargo.Helper.GetRouteUrl();
			}
		} 
		// Default
		else {
			return this.GetBaseUrl(force_url, add_slash);
		}
		
	},

	/**
	 *	Gets the index from one model from the Project collection
	 *	Returns the index
	 *	
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @param {Backbone.Model} [model] Backbone model
	 *  @return {number} Index of the model
	 *  @example Cargo.Helper.GetIndexFromModel(model);
	 */
	GetIndexFromModel : function( model ) {
		return Cargo.Collection.Projects.indexOf(model[0]); 
	},

	/**
	 *	Grabs the value of the editor
	 *	
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean} 
	 *  @example Cargo.Helper.GetIsEditor();
	 */
	GetIsEditor : function() {
		return Cargo.API.Config.is_editor;
	},

	/**
	 *	returns the next page offset
	 *	Calculates this based on the page * limit
	 *	
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Offset
	 *  @example Cargo.Helper.GetNextPageOffset();
	 */
	GetNextPageOffset : function() {
		var limit 	= this.GetPageLimit();
		var page 	= Cargo.API.Config.current_page;

		return (page*limit);
	},

	/**
	 *	This returns a new Backbone model of the next Project
	 *	It is a convenience method 
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {Backbone.Model} Project model
	 *  @example Cargo.Helper.GetNextProjectModel();
	 */
	GetNextProjectModel : function() {
		return Cargo.Collection.Projects.findWhere( { project_url : Cargo.Helper.GetNextProjectUrl() } );
	},

	/**
	 *	Returns the next Project's purl
	 *	Note: Will wrap the collection back to 0
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {string} URL
	 *  @example Cargo.Helper.GetNextProjectUrl();
	 */
	GetNextProjectUrl : function() {
		var model = this.GetCurrentModelFromProjects();
		var index = this.GetIndexFromModel( model ); 
		var next_index = (index+1) % Cargo.Collection.Projects.length;
		var next_model = Cargo.Collection.Projects.at(next_index);

		return next_model.get('project_url');
	},

	/**
	 *	Calculates the page offset based on page
	 *	Subtract 1 from the page because the offset starts from 0
	 *	but page starts from 1
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Offset
	 *  @example Cargo.Helper.GetOffsetFromPage();
	 */
	GetOffsetFromPage : function( page ) {
		var limit 	= this.GetPageLimit();
		page--;
		return (page*limit);
	},

	/**
	 *	Gets the limit of Projects per page
	 *	Note, when there is an Index page (like Feed) this might be different.
	 *
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Page limit
	 *  @example Cargo.Helper.GetPageLimit();
	 */
	GetPageLimit : function() {
		var option_limit = Cargo.Model.DisplayOptions.GetPaginationCount();

		if(
			option_limit && 
			Cargo.Model.DisplayOptions.GetIndexRouteName() && 
			Cargo.Model.DisplayOptions.GetIndexRouteName().toUpperCase() == Cargo.Helper.GetRouteName().toUpperCase() &&
			Cargo.Model.DisplayOptions.get('index_pagination_count')
		) {
			option_limit = Cargo.Model.DisplayOptions.get('index_pagination_count');
		
		} else if(Cargo.Model.DisplayOptions.get('mobile_pagination_count') && this.isMobile()) {
			option_limit = Cargo.Model.DisplayOptions.get('mobile_pagination_count');	
		}

		return (option_limit) ? option_limit : 10;
	},

	/**
	 *	Return the id from the model based on purl
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [purl] URL for the project
	 *  @return {number} Project ID
	 *  @example Cargo.Helper.GetPidFromPurl(purl);
	 */
	GetPidFromPurl : function( project_url ) {
		// Set the new model
		var model = Cargo.Collection.Projects.where( { project_url : project_url } );
		
		if(model[0]) {
			return model[0].get('id');
		} else {
			return 0;
		}
	},

	/**
	 *	Calculates previous page offset
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Offset
	 *  @example Cargo.Helper.GetPrevPageOffset();
	 */
	GetPrevPageOffset : function() {
		var limit 	= this.GetPageLimit();
		var page 	= Cargo.API.Config.current_page-1;

		return (page*limit);
	},

	/**
	 *	This returns a new backbone model of the previous project
	 *	It is a convenience method 
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {Backbone.Model} Project model
	 *  @example Cargo.Helper.GetPrevProjectModel();
	 */
	GetPrevProjectModel : function() {
		return Cargo.Collection.Projects.findWhere( { project_url : Cargo.Helper.GetPrevProjectUrl() } );
	},

	/**
	 * 	The url for the previous Project
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {string} URL
	 *  @example Cargo.Helper.GetPrevProjectUrl();
	 */
	GetPrevProjectUrl : function() {
		var model = this.GetCurrentModelFromProjects();
		var index = this.GetIndexFromModel( model );
		var next_index = (index > 0) ? index-1 : Cargo.Collection.Projects.length - 1;
		var next_model = Cargo.Collection.Projects.at(next_index);

		return next_model.get('project_url');
	},

	/**
	 *	Returns a page and a single backbone model based on key
	 *	This takes into account the possibility that the model
	 *	exists in a different page then the current one
	 *
	 *  @memberof Cargo.o.Helpers
	 *  @return {Object} { "page" : 3, "model" : [Object] }
	 *  @example Cargo.Helper.GetProjectModelAndPageByKey(key);
	 */
	GetProjectModelAndPageByKey : function( key ) {
		var offset = this.GetPageLimit();
		var current_page =  Cargo.API.Config.current_page;
		var page = Math.ceil(key/offset);
		var page_offset = 0;
		
		if( !Cargo.Helper.IsAutopaginate() ) {
			page_offset = offset - ((page * offset) - key);
			page_offset = (page_offset == offset) ? page_offset-1 : page_offset;
			page_offset = (page_offset == Cargo.Collection.Projects.length) ? 0 : page_offset;
		} else {
			page = 0;
			page_offset = (key == Cargo.Collection.Projects.length) ? 0 : key;
		}

		var model = {};
		
		// Grab from collection ahead of page 1
		if(Cargo.Collection.Page[page] && !Cargo.Helper.IsAutopaginate() ) {
			model = new Cargo.Model.BaseProject( Cargo.Collection.Page[page][page_offset] );
		}
		// Grab from the active collection
		else {
			model = Cargo.Collection.Projects.at(page_offset);
		} 
		
		return {
			"page"  : page,
			"model" : model
		}

	},

	/**
	 *	Return the purl from the model based on pid
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {number} [pid] Project ID
	 *  @return {string} Project URL
	 *  @example Cargo.Helper.GetPurlFromPid(pid);
	 */
	GetPurlFromPid : function( id ) {
		// Set the new model
		var model = Cargo.Collection.Projects.where( { id : id } );
		
		if(model[0]) {
			return model[0].get('project_url');
		} else {
			return 0;
		}
	},

	/**
	 *  Get the route name 
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @return {string} Route name
	 *  @example Cargo.Helper.GetRouteName();
	 */
	GetRouteName : function() {
		var route_name = Cargo.API.Config.route_name;

		if(/display_options/.test(Cargo.API.Config.route)) {
			route_name = (/feed/.test(route_name)) ? Cargo.Model.DisplayOptions.GetFeedRouteName() : Cargo.Model.DisplayOptions.GetIndexRouteName();
		}

		return route_name;
	},

	/**
	 *  Get the route url 
	 * 
	 *  @memberof Cargo.o.Helpers
	 *
	 *  @return {string} Route name
	 *  @example Cargo.Helper.GetRouteUrl();
	 */
	GetRouteUrl : function() {
		var route_url = Cargo.API.Config.route_name;

		if(/display_options/.test(Cargo.API.Config.route) || route_url == "feed" || route_url == "index") {
			route_url = (/feed/.test(route_url)) ? Cargo.Model.DisplayOptions.GetFeedRouteUrl() : Cargo.Model.DisplayOptions.GetIndexRouteUrl();
		}
		
		return route_url;
	},

	/**
	 *	Get the currently active set key
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {string} Current set key
	 *  @example Cargo.Helper.GetCurrentSetKey();
	 */
	GetSetKey : function() {
	 	return Cargo.Model.Site.GetCurrentSetKey();
	},

	/**
	 * Returns the name of the current set
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {string} Set name
	 *  @example Cargo.Helper.GetSetName();
	 */
	GetSetName : function() {
		return Cargo.API.Config.set;
	},

	/**
	 * Returns the start project id
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Start Project ID
	 *  @example Cargo.Helper.GetStartProjectId();
	 */
	GetStartProjectId : function() {
		return Math.floor(Cargo.Model.Site.GetStartProjectId());
	},

	/**
	 *	Get the total amount of pages
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Total pages
	 *  @example Cargo.Helper.GetTotalPages();
	 */
	GetTotalPages : function() {
	 	return Math.ceil( Cargo.Model.DisplayOptions.GetTotalProjects() / Cargo.Helper.GetPageLimit() );
	},

	/**
	 *	Get the total amount of Projects in memory (used for random)
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {number} Total projects in memory
	 *  @example Cargo.Helper.GetTotalProjectsInMemory();
	 */
	GetTotalProjectsInMemory : function() {
	 	var current_count = Cargo.Collection.Projects.length;
	 	if( Cargo.Helper.IsAutopaginate() ) {
	 		return current_count;
	 	}

	 	var stored_count = 0;
	 	$.each(Cargo.Collection.Page, function() { stored_count += this.length; });
	 	return current_count + stored_count;
	},

	/**
	 *	Get the Cargo/url
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {string} This site's Cargo/url
	 *  @example Cargo.Helper.GetUrl();
	 */
	GetUrl : function() {
		// return location.pathname.replace(/^\/([^\/]*).*$/, '$1');
		return Cargo.API.Config.cargo_url;
	},

	/**
	 *	Go to a URL on this site. Does a full page refresh
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {String} [relative_path] The relative path of the URL 
	 *  @example Cargo.Helper.GoToUrl("filter/category");
	 */
	GoToUrl : function(relative_path) {
		relative_path = (relative_path.charAt(0) == "/") ? relative_path.substr(1) : relative_path;
		var baseurl = Cargo.Helper.GetBaseUrl(true, true);
		var location_path = (Cargo.API.Config.is_domain) ? baseurl + relative_path : baseurl + "/" + relative_path;

		top.document.location.href = location_path;
	},
	
	/**
	 *	Hides the loading animation
	 *	Fires an event
	 *	Use with:
	 *	<pre>&lt;div data-loading="12345"&gt;&lt;img src="animation.gif"&gt;&lt;/div&gt;</pre>
	 *	Or:
	 *	<pre>&lt;img src="animation.gif" data-loading="global" /&gt;</pre>
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {number} [pid] Project ID
	 *  @example Cargo.Helper.HideLoadingAnimation(pid);
	 */
	HideLoadingAnimation : function( pid ) {
		this.Data.is_loading = false;
		$("[data-loading]").hide();

		if(typeof Cargo.View.Autopaginate == "object") {
			Cargo.View.Autopaginate.$el.hide();
		}
	},

	/**
	 *	Checks to see if we are in Admin edit mode
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsAdminEdit();
	 */
	IsAdminEdit : function() {
		var is_admin_path = (/\/adminedit/.test(document.location.pathname) || /\/admin/.test(document.location.pathname));
		var has_parent = (parent.location != window.location);
		return (is_admin_path || has_parent);
	},

	/**
	 *	Checks to see if we are in aAdmin edit mode
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsAdminEditProject();
	 */
	IsAdminEditProject : function() {
		return Cargo.API.Config.admin_edit_project;
	},

	/**
	 *	Checks to see if this Design autopaginates
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsAutopaginate();
	 */
	IsAutopaginate : function() {
		return ( Cargo.View.Autopaginate || $("[data-view='Autopaginate']").length > 0 || $("[data-view='autopaginate']").length > 0);
	},

	/**
	 *	Matches an incoming route with the current route
	 *	Used to ensure we are not trying to double load
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [url] URL
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsCurrentRoute(url);
	 */
	IsCurrentRoute : function( url ) {
		// Normalize the url
		url = this.NormalizeRouteLink(url);

		// Now compare
		return (Cargo.Helper.GetCurrentRoute() == url);
	},

	/**
	 *  If we are currently on a custom defined route
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsCustomRoute();
	 */
	IsCustomRoute : function() {
		return Cargo.API.Config.is_custom_route;
	},

	/**
	 * If we are currently on a Direct Link
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsDirectLink();
	 */
	IsDirectLink : function() {
		return Cargo.API.Config.is_direct_link;
	},

	/**
	 * If this is a design without Project history
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsFeedDesign();
	 */
	IsFeedDesign : function() {
		return ($("[rel='history']").length == 0) ? true : false;
	},

	/**
	 * If we are currently on a filter link
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsFilter();
	 */
	IsFilter : function() {
		return (this.GetActiveFilter() && this.GetActiveFilter().trim() != "");
	},

	/**
	 *	Test for Firefox. Return true | false
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isFirefox();
	 */
	isFirefox : function() {
		return (/Firefox\/\d+\.\d+/.test(navigator.userAgent));
	},

	/**
	 *	Test for IE. Return true | false
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isIE();
	 */
	isIE : function() {
		return (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
	},
		
	/**
	 *	Test for IE8. Return true | false
	 *	Actually, this is just a test for anything < 9
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isIE8();
	 */
	isIE8 : function() {
		var rv = -1; // Return value assumes failure.
		if (this.isIE())  {
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(navigator.userAgent) != null) rv = parseFloat( RegExp.$1 );
		}
		
		return (rv < 9 && rv > 0) ? true : false;
	},

	/**
	 *	Test for iOS.
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isIOS();
	 */
	isIOS : function() {
		if (navigator.userAgent.match(/i(Phone|Pod|Pad)/i)) {
			return true;	
		} else {
			return false;
		}
	},

	/**
	 *	Test for all mobile.
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isMobile();
	 */
	isMobile : function() {
		if(this.isIOS()) return true
		else {
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		}
	},

	/**
	 * If we are currently on the homepage
	 *
	 * @memberOf Cargo.o.Helpers
	 * @return {boolean} 
	 * @example Cargo.Helper.IsOnHome();
	 */
	IsOnHome : function() {
		var on_home = (Cargo.API.Config.set || Cargo.API.Config.filter || Cargo.Helper.GetCurrentRoute() != "") ? false : true;
		
		return on_home;
	},

	/**
	 * If we are currently on a set
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsOnSet();
	 */
	IsOnSet : function() {
		return (Cargo.API.Config.set) ? true : false;
	},

	/**
	 * If we are currently on a start project
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsOnStartProject();
	 */
	IsOnStartProject : function() {
		return (Cargo.Helper.GetCurrentRoute() == "" && Cargo.API.Config.start_project != null);
	},

	/**
	 *	Test for anything less then IE10
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isOldIE();
	 */
	isOldIE : function() {
		var rv = -1; // Return value assumes failure.
		if (this.isIE())  {
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(navigator.userAgent) != null) rv = parseFloat( RegExp.$1 );
		}
		
		return (rv <= 9 && rv > 0) ? true : false;
	},

	/**
	 *	Called by the router
	 *	This method tests to see if a given route is a permalink
	 *	(loaded by direct link) or if it is loaded by a click
	 *	To determine this, see if the collection data has been loaded yet
	 *	If it has, then this is not a permalink
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [purl] Project URL
	 *  @param {boolean} [from_router] If we are coming from the router or not
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsPermalink(purl, from_router);
	 */

	IsPermalink : function( purl, from_router ) {
		var project_or_route = false;
		var start_and_no_project = false;
		var collection_loaded = false;
		var strip_url = (this.GetRouteUrl()) ? this.GetRouteUrl().replace(/\//,'') : '';

		// If the incoming PURL is a project or route
		if(
			this.IsCurrentProject(purl) ||
			this.IsCurrentProjectId(purl) ||
			this.IsCurrentRoute(purl) ||
			strip_url == purl ||
			Cargo.Helper.GetRouteName() == strip_url ||
			purl == "Website-Offline-message"
		) {
			project_or_route = true;
		}

		// If this is a start project
		if(
			Cargo.Helper.IsOnStartProject() && 
			Cargo.Model.Project.GetProjectUrl() != purl
		) {
			start_and_no_project = true;
		}

		// If the collection has been loaded from the server yet
		if(
			Cargo.Collection.Projects.models.length >= 1 && 
			Cargo.Collection.Projects.models[0].id
		) {
			collection_loaded = true;
		}

		var project_is_project = (Cargo.Model.Project.GetProjectUrl() == purl || Cargo.Model.Project.GetId() == purl || this.GetRouteName() == purl || this.GetCurrentRoute() == purl || purl == "Website-Offline-message");
		var start_and_no_project = (Cargo.Helper.IsOnStartProject() && Cargo.Model.Project.GetProjectUrl() != purl);
		var _final = (!Cargo.API.Config.first_load_finished && (project_is_project || start_and_no_project) );

		/*
		 * NOTE: If there are issues, it is because of this. Comment the conditional(s) below out to fix
		 */
		var _final_new = (!Cargo.API.Config.first_load_finished && !collection_loaded && (project_or_route || start_and_no_project) );
		if(!_final_new) {
			if(!start_and_no_project && !this.IsAdminEdit() && from_router && !collection_loaded) {
				_final = false;
			}
		}

		return _final;

	},

	/**
	 * If we are on a phone
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isPhone();
	 */
	isPhone : function() {
		var md = new MobileDetect(window.navigator.userAgent);
		return (typeof md.phone() == "string");
	},

	IsCurrentProject : function(purl) {
		return (Cargo.Model.Project.GetProjectUrl() && purl && Cargo.Model.Project.GetProjectUrl().toLowerCase() == purl.toLowerCase());
	},

	IsCurrentProjectId : function(id) {
		return (Cargo.Model.Project.GetId() && id && Cargo.Model.Project.GetProjectUrl() == id);
	},

	IsCurrentRoute : function(route) {
		return (this.GetRouteName() && route && this.GetRouteName().toLowerCase() == route.toLowerCase());
	},

	/**
	 *	A convenience method for determining if this is an HTML 5 browser
	 *	Note: the latest version of jQuery does not support browser.version
	 *	soooo, we need to figure out something else here
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isRecentBrowser();
	 */
	isRecentBrowser : function() {
		// If Firefox, and version 3.6 or less
		if( $.browser.mozilla && $.browser.version.slice(0,3) >= 1.9 ) {
			return true;
		// Check webkit, if version 3 or less
		} else if ( $.browser.webkit && $.browser.version.substr(0,1) >= 4 ) {
			return true;
		} else {
			return false;	
		}
	},

	/**
	 * If we are on the search route
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsSearch();
	 */
	IsSearch : function() {
		return (this.GetRouteName().toLowerCase() == "search");
	},

	/**
	 * If the incoming string is a set
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [set] The name of a set
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsSet(set);
	 */
	IsSet : function(set_name) {
		return (Cargo.API.Config.set && Cargo.API.Config.set.toLowerCase() == set_name.toLowerCase());
	},
	
	/**
	 * If we are on a solo link
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.IsSololink();
	 */
	IsSololink : function() {
		return Cargo.API.Config.is_solo;
	},

	/**
	 * If we are on a tablet
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.isTablet();
	 */
	isTablet : function() {
		var md = new MobileDetect(window.navigator.userAgent);
		return (typeof md.tablet() == "string");
	},

	/**
	 *	If the open project is not in the active collection, put it there
	 *	This is used primarilly for the next/previous project 
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [url] URL
	 *  @return {Backbone.Collection} A collection of projects 
	 *  @example Cargo.Helper.MakeCurrentProjectCollectionActive(url);
	 */
	MakeCurrentProjectCollectionActive : function( url ) {
		var project_url = (url) ? url : Cargo.Helper.GetCurrentProjectUrl();
		var collection_reset = false;

		// If we don't find this project in the collection
		if( Cargo.Helper.GetPidFromPurl( Cargo.Helper.GetCurrentProjectUrl() ) == 0) {
			var found_collection = this.FindCollectionByProjectUrl( project_url );
			if( found_collection ) {
				Cargo.Collection.Projects.reset( found_collection );
				collection_reset = true;
			}
		}

		// Let the updater know if this was reset
		return collection_reset;
	},

	/**
	 *	Makes a direct link to a project from a project URL
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [purl] Project URL
	 *  @return {string} The direct link to the project
	 *  @example Cargo.Helper.MakeDirectLinkFromPurl(purl);
	 */
	MakeDirectLinkFromPurl : function( url ) {
		var base = Cargo.Helper.GetBaseUrl(true, true);
		return  (base == '/') ? base + url : base + '/' + url;
	},

	/**
	 *	Checks to see if getting a next project is possible on this page
	 *	Will return true / false
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.NextProjectNeedsToPaginate();
	 */
	NextProjectNeedsToPaginate : function() {
		var model = this.GetCurrentModelFromProjects();
		var index = this.GetIndexFromModel( model );

		if( (index+1) == Cargo.Collection.Projects.length && this.GetTotalPages() > 1 ) {
			return true;
		} else {
			return false;
		}
	},

	/**
	 *	In order for the router to work with both hash and slash URLs
	 *	It needs to have the same links always. This means that we need
	 *	to normalize the link by removing the site URL before routing
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [url] URL
	 *  @return {string} URL
	 *  @example Cargo.Helper.NormalizeRouteLink(url);
	 */
	NormalizeRouteLink : function( url ) {
		if(!url) {
			return url;
		}

		// Sanitize the url
		url = url.replace(Cargo.Helper.GetBaseDomain(), "").replace(window.location.protocol + "//","");
		if(url.charAt(0) == "/") {
			url = url.replace("/", "");
		}

		/*
		 * We should be left with only the route
		 * now see if we need to remove the Cargo url
		 */
		if(url.search(this.GetHomeUrl(true)) == 0) {
			url = url.replace(this.GetHomeUrl(true)+"/", "");
		}
		
		return url;
	},

	/**
	 *	Checks to see if getting a prev project is possible on this page
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @return {boolean}
	 *  @example Cargo.Helper.PrevProjectNeedsToPaginate();
	 */
	PrevProjectNeedsToPaginate : function() {
		var model = this.GetCurrentModelFromProjects();
		var index = this.GetIndexFromModel( model );

		if( index <= 0 && this.GetTotalPages() > 1 ) {
			return true;
		} else {
			return false;
		}
	},

	/**
	 *	Scroll to the top of the page
	 *	Use a timeout because everything happens too fast without it
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @example Cargo.Helper.ScrollToTop();
	 */
	ScrollToTop : function() {
		setTimeout(function() {
			// If we are further then 50 from the top, jump to 50
			if($(window).scrollTop() > 50) {
				window.scrollTo(0, 50);	
			}

			// Smooth scroll the rest of the way
			doscroll(0,$(window).scrollTop(),0);
		}, 50);
	},

	/**
	 *	Scroll to the left of the page (used for horizontal scroll designs)
	 *	Use a timeout because everything happens too fast without it
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @example Cargo.Helper.ScrollToLeft();
	 */
	ScrollToLeft : function(scroll_obj) {
		setTimeout(function() {
			if(typeof scroll_obj == "object") {
				if(scroll_obj instanceof jQuery) {
					scroll_obj = scroll_obj[0];
				}
				if($(scroll_obj).scrollLeft() > 100) {
					scroll_obj.scrollLeft =100;
				}
			} else {
				if($(window).scrollLeft() > 100) {
					window.scrollTo(100, 0);
					scroll_obj = window;
				}
			}

			// Smooth scroll the rest of the way
			doscroll_left(0, $(scroll_obj).scrollLeft(),0, scroll_obj);
		}, 50);
	},

	/**
	 *	Return the model from the collection based on project id
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {number} [id] ID of the Project
	 *  @return {Backbone.model} Project model
	 *  @example Cargo.Helper.SetActiveProjectFromId(id);
	 */
	SetActiveProjectFromId : function( id ) {
		// remove any appended increments
		var id = id.split('-')[0];

		// Set the new model
		var model = Cargo.Collection.Projects.where( { id : parseInt(id) } );

		// Set the model in the global scope
		Cargo.Model.Project = model[0].toJSON();
		
		return Cargo.Model.Project;
	},
	
	/**
	 *	Return the model from the collection based on purl
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {string} [purl] URL to the project
	 *  @return {Backbone.model} Project model
	 *  @example Cargo.Helper.SetActiveProjectFromPurl(purl);
	 */
	SetActiveProjectFromPurl : function( project_url ) {
		// Set the new model
		var model = Cargo.Collection.Projects.where( { project_url : project_url } );

		// Set the model in the global scope
		Cargo.Model.Project = model[0].toJSON();
		
		return Cargo.Model.Project;
	},

	/**
	 *	Shows the loading animation
	 *	Fires an event
	 *	Usage:
	 *	<pre><div data-loading="12345"><img src="animation.gif"></div></pre>
	 *	Or:
	 *	<pre><img src="animation.gif" data-loading="global"></pre>
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {number} [pid] Project ID
	 *  @param {string} [url] URL to the project
	 *  @example Cargo.Helper.ShowLoadingAnimation(pid, url);
	 */
	ShowLoadingAnimation : function( pid, url ) {
		this.Data.is_loading = true;
		if( pid ) {
			_.delay(function() {
				Cargo.Helper.ShowLoadingAnimationById(pid);
			}, Cargo.Helper.Data.loading_timout);		
		
		} else if(url) {
			_.delay(function() {
				Cargo.Helper.ShowLoadingAnimationById('page');
			}, Cargo.Helper.Data.loading_timout);
		}
		$("*[data-loading=global], *[data-loading=global] .retinaSpinner").show();
	},

	/**
	 *	Shows a specific loading animation based on project ID
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @param {number} [id] ID of the project
	 *  @example Cargo.Helper.ShowLoadingAnimationById(id);
	 */
	ShowLoadingAnimationById : function(id) {
		if(this.Data.is_loading) {
			$("*[data-loading="+id+"], *[data-loading="+id+"] .retinaSpinner").show();
		}
	},

	/**
	 *	For timeing how long things take internally
	 *	Start and stop is the same call Cargo.Helper.Stopwatch()
	 *  
	 *  @memberof Cargo.o.Helpers
	 *  @example Cargo.Helper.Stopwatch();
	 *  @private
	 */
	Stopwatch : function() {
		if( !this.startTime ) {
			this.startTime = new Date().getMilliseconds();
		} else if( !this.endTime ) {
			this.endTime = new Date().getMilliseconds();

			var total = this.endTime - this.startTime;
			Cargo.Core.log(total+"ms");
			this.startTime = false;
			this.endTime = false;
		} 

		
	},

	/**
	 * We can't have wrong case in the URL because all routing is based
	 * on the correct case. If there is a wrong care
	 */
	TestUrlCaseAndRedirect: function() {
		if( !Cargo.API.Config.is_domain ) {

			// Test if the URL is the same case as what we have in the db
			var path_url = document.location.pathname.split('/')[1],
				url = Cargo.API.Config.cargo_url;

			// If there are caps in the url, just keep using what the browser says
			if(path_url != url && path_url.toUpperCase() == url.toUpperCase()) {
				history.replaceState({}, Cargo.Model.Site.GetWebsiteTitle(), document.location.pathname.replace(path_url, url));
			}
		}
	}

});

/***************************************************************************
 *
 *	Router
 *
 **************************************************************************/
Cargo.o.router = Backbone.Router.extend({
	
	// ==========
	// = Routes =
	// ==========
	
	routes: {
		""							: "Home",
		"adminedit"					: "Home",
		"admin"						: "Admin",
		"admin/:section"			: "Admin",
		"preview/:which"			: "Home",
		"filter/:filter"			: "FilterHome",
		"filter/:filter/:purl"		: "FilterProjectDetail",
		":set/filter/:filter"		: "SetFilterHome",
		":set/filter/:filter/:purl"	: "SetFilterProjectDetail",
		":purl" 					: "FirstSlashProxy",
		":purl/solo" 				: "SoloLink",
		":purl/adminedit" 			: "AdminEdit",
		":set/:purl" 				: "SetProjectDetail",
		"*actions"					: "defaultAction"
	},
	
	// =====================
	// = Handler Functions =
	// =====================
	
	
	/*
	 *	Catch all for an unhandled event
	 */
	defaultAction: function(actions) {
		// if( this.default != actions ) {
			// Cargo.Core.log("Default action: "+actions);
			this.route(actions);
		// }
	},

	/*
	 *	This acts as a router for anything past the first slash
	 *	Make sure it's not the URL, needs to be case insensitive
	 *	It could be a custom route, or a set, but most likely
	 *	it is a project
	 *	:purl
	 */
	FirstSlashProxy : function( url ) {
		if( this.RouteIsHome(url) ) {
			this.Home();

		} else if( Cargo.Helper.IsCustomRoute() ) {
			this.CustomRoute( url );
		
		} else if( Cargo.Helper.IsSet(url) ) {
			this.Set( url );
		
		} else {
			this.ProjectDetail( url );
		}
	},
	
	/*
	 *	Matches the homepage link
	 */
	Home : function() {
		/* Check for a start project
		 * Just tell the detail to open */
		if( Cargo.API.Config.start_project && Cargo.API.Config.start_project != 0 ) {
			/* Cargo.View.ProjectDetail.$el.show(); */
			this.ProjectDetail( Cargo.API.Config.start_project );

			if(Cargo.View.Main) {
				Cargo.View.Main.SetStartProjectClass();
			}

		} else if(Cargo.API.Config.offline) {
			/* Offline page, render load complete */
			Cargo.Event.trigger("project_load_complete");

		} else {
			/*
			 *	By setting the id = 0, the project model is changed
			 *	which fires the ProjectDetail render function
			 *	If the id=0, then the render will close instead of open
			 *
			 *	Note: this was changed to "clear" and I am not sure
			 *	what implications it has 6/28/13
			 */
			// Cargo.Model.Project.set( { id : 0 } );
			Cargo.Model.Project.clear();

			Cargo.Event.trigger("homepage_loaded"); 
		}
	},	

	/*
	 *	Helper for filter homepage
	 *	filter/:filter
	 */
	FilterHome : function( filter ) {
		// Cargo.Core.log("Filter: "+filter);
		Cargo.API.Config.filter = filter;
		
		return this.Home( );
	},

	Admin : function(section) {
		if($("#content_frame").length == 0 && typeof require == "function") {
			Cargo.Core.loadEditor();
		}
	},

	/*
	 *	Helper for filter detail link
	 *	filter/:filter/:purl
	 */
	FilterProjectDetail : function( filter, purl ) {
		// Cargo.Core.log("Filter: "+filter);
		Cargo.API.Config.filter = filter;
		
		return this.ProjectDetail( purl );
	},

	/*
	 *	Helper for set filter homepage
	 *	:set/filter/:filter
	 */
	SetFilterHome : function( set, filter ) {
		// Cargo.Core.log("Set: "+set+" Filter: "+filter);
		Cargo.API.Config.filter = filter;
		
		return this.Home( );
	},

	/*
	 *	Helper for set filter detail link
	 *	:set/filter/:filter/:purl
	 */
	SetFilterProjectDetail : function( set, filter, purl ) {
		// Cargo.Core.log("Set: "+set+" Filter: "+filter);
		Cargo.API.Config.filter = filter;
		
		return this.ProjectDetail( purl );
	},

	/*
	 *	Helper for set detail link
	 *	:set/:purl
	 */
	SetProjectDetail : function( set, purl ) {
		// Cargo.Core.log("Set: "+set+" Project: "+purl);
		
		// This may trigger when the case is not correct on the set, in that case, go home
		return ( Cargo.Helper.IsSet(set) || set.toUpperCase() == Cargo.Helper.GetHomeUrl(true).toUpperCase()) ? this.ProjectDetail( purl ) : this.Home();
	},
	

	/* 
	 * 	Project detail 
	 *	:purl 
	 */
	ProjectDetail : function( purl ) {
		// Make sure this is a string
		purl += "";
		
		/* Strip any slashes from the purl */
		purl = purl.replace(/\//g, "");

		// Cargo.Core.log( "Router: ProjectDetail: /"+purl );

		var from_router = true;
		var is_perma = Cargo.Helper.IsPermalink(purl, from_router);

				
		if( is_perma ) {
			/*
			 *	Do the permalink here
			 */
			if( Cargo.View.ProjectDetail ) {
				Cargo.View.ProjectDetail.Permalink(purl);
			}
		
		} else if(purl && purl !== false) {
			/*
			 *	If there is no project detail element on screen
			 *	don't ajax load, direct load by document location
			 */
			if(!Cargo.View.ProjectDetail && !Cargo.API.Config.offline) {
				Cargo.Helper.GoToUrl( purl );
			
			/*
			 *	Get and set the new single project
			 *	This will trigger an event that will automatically
			 *	update the view
			 */
			} else {
				Cargo.API.GetSingleProject( purl );
			}
			
		}
		
	},

	/*
	 *	Custom route
	 *	:route
	 */
	CustomRoute : function( url ) {
		// Cargo.Core.log("Custom route: "+url);
		Cargo.Event.trigger("custom_route_loaded", url);

		if( Cargo.Helper.IsSet(url) ) {
			// Cargo.Core.log("Set on custom route: "+url);
			Cargo.Event.trigger("set_loaded", url);			
		}
	},

	/*
	 *	Set
	 *	:set
	 */
	Set : function( url ) {
		// Cargo.Core.log("Set: "+url);
		Cargo.Event.trigger("set_loaded", url);			
		
	},

	/*
	 *	Solo link is a helper for ProjectDetail
	 *	:purl/solo
	 */
	SoloLink : function( purl ) {
		Cargo.API.Config.is_solo = true;
		Cargo.Event.trigger("solo_link_loaded", location.pathname); 
		return this.ProjectDetail( purl );
	},

	/*
	 *	Admin edit is a helper for ProjectDetail
	 *	:purl/adminedit
	 */
	AdminEdit : function( purl ) {
		Cargo.API.Config.admin_edit_project = true;
		return this.ProjectDetail(  purl );
	},



	/*
	 *	Rewrite the route Regex to allow for case insensitivity and trailing slash support
	 *	Note: This was copied directly from backbone and added the "i" param
	 *		  as well as \/? conditional with the second replace(regex)
	 */
	_routeToRegExp: function (route) {
		route = route.replace(/[-{}[\]+?.,\\^$|#\s]/g, '\\$&')
					 .replace(/\((.*?)\)/g, '(?:$1)?')
					 .replace(/:\w+/g, '([^\/]+\/?)')
					 .replace(/\*\w+/g, '(.*?)');
		
		return new RegExp('^' + route + '$', 'i');
	},

	/*
	 *	Make a shorthand reference for adding a route with Backbone
	 *	Also update this to include all variants possible 
	 *	This includes trailing slash and query strings
	 */
	addroute : function( route, name, callback ) {
		 var variants = [
			'', 				// normal route
			'/', 				// trailing slash
			'?*querystring', 	// querystrings
			'/?*querystring' 	// trailing slash + querystrings
		];
		
		// Bind a route for each of the variants
		for (var i=0; i < variants.length; i++) {
			var variant = variants[i];
			// Backbone.Router.prototype.route.call(this, route+variant, name, callback);
			this.route( route+variant, name, callback );
		}
	},

	RouteIsHome : function(url) {

		var is_home = false;
		// If the incoming url matches the normalized Cargo url
		if( !Cargo.API.Config.is_domain && url.toLowerCase() == Cargo.Helper.GetDomainOrUrl().toLowerCase() ) {
			// Make sure this is not a project called the same as the URL
			if(document.location.pathname.replace("/").split("/").length <= 1) {
				is_home = true;
			}
		}
		
		return is_home;
	}
		
				
});


/***************************************************************************
 *
 *	Templates
 *	This is the template manager function file
 *	It loads and caches tempaltes
 *	Uses require.js to async load in templates
 *
 **************************************************************************/

Cargo.o.templates = Backbone.View.extend({
	/* Data store for templates */
	Data : { },

	/**
	 *	Gets a template based on a name
	 *	If one is not available in memory, async load it
	 */
	Get : function( which, file_path ) {
		which = Cargo.Helper.GetBackboneCaseInsensitive(this.Data, which);

		if( this.Data[which] && this.Data[which].template ) {
			return this.Data[which].template;
		} else {
			this.Load( which, file_path );
		}
	},

	/**
	 *	Gets a template element based on a name
	 *	If one is not available in memory, async load it
	 */
	GetEl : function( which ) {
		which = Cargo.Helper.GetBackboneCaseInsensitive(this.Data, which);
		
		if( this.Data[which] ) {
			return this.Data[which].element;
		} else {
			this.Load( which );
		}
	},

	/**
	 *	Add a template to the list
	 *	Note: This does not load the template view
	 */
	Add : function( template, element, dataset, setname ) {
		Cargo.Template.Data[template] = {
			dataset		: dataset,
			setname		: setname,
			element		: element
		}
	},

	/**
	 *	Loops through the dom to find view stubs
	 *	Seeks out the "data-view" attribute, which can be associated with any
	 *	html element
	 */
	FindAndAddViewStubs : function( ) {
		var self = this;

		$("[data-view]").each(function() {
			var template = $(this).data("view");
			var setname = $(this).data("set");
			var el = ( $(this).attr("id") ) ? "#" + $(this).attr("id") : "." + $(this).attr("class");
			/*
			 *	For the dataset, find if it is collection or model
			 *	If it does not exist, then use Default Collection
			 */
			// var dataset = $(this).data("set");
			var dataset = Cargo.Collection.Default;

			if(setname) {
				var requested_collection = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.Collection, setname);
				var requested_model = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.Model, setname);
				
				if( requested_collection ) {
					dataset = Cargo.Collection[requested_collection];

				} else if( requested_model ) {
					dataset = Cargo.Model[requested_model];
				}
			}
		
			/* Add the template to the stack */
			Cargo.Template.Add( template, el, dataset, setname );
		});
	},

	/**
	 *	Loads a single template into memory
	 *
	 *	Note: For api routes that are not on this domain (ie: api.cargo)
	 *		then we must load the design like a variable with the "true" flag
	 *		Otherwise, load the template like normal.
	 */
	Load : function( which, file_path ) {
		if(!file_path) {
			var file_name = which + ".handlebars";
				// file_path = Cargo.API.GetDesignAndFile(file_name, true);
				file_path = Cargo.API.GetDesignAndFile(file_name, false);
		}

		if( !Cargo.Template.Data[which] || !Cargo.Template.Data[which].loading ) {
			if( !Cargo.Template.Data[which] ) {
				Cargo.Template.Data[which] = { };
			}

			Cargo.Template.Data[which].loading = true;
			
			$.loadFiles( file_path ).done( function( template ) {

				/*
				 *	If no value for template was passed, require loaded it like a script
				 */
				if( template ) {
					/*
					 *	Evaluate the response, it may come as a string
					 */
					try {
						var template = eval(template);
					} catch(err) {
						// nothing
					}
					Cargo.Template.Data[which].template = template;
				} else {
					/*
					 *	The name of the output variable is = to the file name, without / & .
					 */
					var template_var = "templatesdesign" + file_name.replace(/(\/|\.)/g, "");
					Cargo.Template.Data[which].template = window[template_var];
				}

				/* Fire an event notifying of the newly loaded template */
				Cargo.Event.trigger("template_loaded", which );	
				
				return Cargo.Template.Data[which].template;
			});
		}
	},

	/**
	 *	Load all non-loaded template into memory async
	 *	Loops through the template list and loads any template 
	 *	that has yet to be loaded (this is determined if the "template" var is blank)
	 */
	LoadAll : function( ) {
		for(key in this.Data) {
		    if( typeof(this.Data[key].template) == "undefined" ) {
		    	this.Load( key );
		    }
		}
	},

	/**
	 *	Loops through the templates and checks if they have
	 *	A view already loaded for them
	 *	If not, it will load a view
	 *	@note: this is not really ideal like this
	 *	@note: perhaps have a view controller
	 */
	LoadFoundViews : function() {
		/*
		 *	Loop through the templates and check to see if a view
		 *	has been init yet. If not, do it
		 */
		for(key in this.Data) {
			var requested_view = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.o.view, key);
		    if( 
		    	typeof(Cargo.o.view[requested_view]) == "function" && 
		    	typeof(Cargo.View[requested_view]) == "undefined" 
		    ) {

				var self = this;
		    	/* Handle the case for multiple of the same view on the page */
		    	$("[data-view='"+key+"']").each(function(i) {
		    		var el = ( $(this).attr("id") ) ? "#" + $(this).attr("id") : "." + $(this).attr("class");
		    		var final_view = (i>0) ? requested_view+"_"+i: requested_view;

		    		Cargo.View[final_view] = new Cargo.o.view[requested_view]({ 
						el    		: el,
						collection 	: self.Data[key].dataset,
						template 	: self.Data[key].template,
						className	: final_view
					});
		    	});

		    } else {
		    	if( typeof(Cargo.View[requested_view]) == "function" ) {
		    		Cargo.Core.log("A view for "+requested_view+" already loaded");
		    	
		    	} else if(typeof(Cargo.o.view[requested_view]) == "undefined") {
		    		/*	If there is no view, then the user likely
		    		 *	just added data-view="something"
		    		 *	In this case, make a view based on our default */
		    		Cargo.View[key] = new Cargo.o.view.Default({ 
						el    		: this.Data[key].element,
						collection 	: this.Data[key].dataset,
						template 	: key,
						datasetname : this.Data[key].setname,
						className	: key
					});
		    	}
		    }
		}
	}
});


/***************************************************************************
 *
 *	Addition to Cargo core functionality
 *
 *	The slideshow class
 *	Cargo.Core.Slideshow.InitSlideshow();
 *
 *	Created on 6/26/13 for 2.0
 *
 **************************************************************************/

Cargo.Core.Slideshow = {

	uid: 0,

 	InitSlideshow : function() {
 		var self = this;

 		$(".slideshow").not('[data-slideshow-initialized]').each(function() {
 			// Shorthand for display options
 			var dop = Cargo.Model.DisplayOptions;
 			
 			var opts = {
				// Transitions
			    "transition" 			: dop.GetSlideTransition(),
			    "transition_duration"   : dop.GetSlideTransitionDuration(),

			    // Autoplay
			    "autoplay"          	: dop.GetSlideAutoPlay().enabled,
			    "autoplay_duration" 	: dop.GetSlideAutoPlay().delay,

			    // Display
			    "navigation"        	: dop.GetSlideTextNav().enabled,
			    "thumbnails"        	: dop.GetSlideThumbnails().enabled,
			    "toggle_thumbnails" 	: dop.GetSlideToggleThumbLink().enabled,
			    "default_thumbnails"    : dop.GetSlideDefaultThumbs(),
			    "square_thumbnails" 	: false
			};
			
			$(this).attr('data-id', $(this).attr('data-id') + '-' + (self.uid++));
			$(this).cargoSlideshow(opts);

 		});
 	},

 	ShowCaption : function() {

 	},

 	// this is where slideshows register theirselves
 	SlideshowObjects : {

 	}
}

/**************************************************************************
 *
 *	Addition to Cargo core functionality
 *
 *	The handlebars rendering class
 *
 *	Usage: 
 *	Cargo.Core.Handlebars.Render();
 *
 **************************************************************************/

Cargo.Core.Handlebars = {
	/**
	 *	Uses handlebars to render a template and data model
	 *	registers any helpers that need to go with the render
	 *	used by all views that render data
	 *	returns the compiled markup
	 */
	Render : function(template, data_model) {
		// Get the compiled template
		var compiled = Handlebars.compile( template );
		
		/*
		 * Register partials
		 */
		Handlebars.registerPartial("loading_animation", $("#loading_animation").html());

		/*
		 * Register all helpers
		 */
		this.RegisterHelper_Asset();
		this.RegisterHelper_AssetContents();
		this.RegisterHelper_Print();
		this.RegisterHelper_IfAny();
		this.RegisterHelper_IfAll();
		this.RegisterHelper_IfEqual();
		this.RegisterHelper_UnlessAny();
		this.RegisterHelper_UnlessAll();
		this.RegisterHelper_IfOption();
		this.RegisterHelper_UnlessOption();
		this.RegisterHelper_DisplayOptions();
		this.RegisterHelper_Truncate();

		/*
		 *	Finalize with the model
		 */
		var markup = compiled( data_model );

		return markup;
	},

	/**
	 *	This method is just the same as above
	 *	However, this render only uses the assets helper and
	 *	nothing else. It is used for rendering the CSS content
	 *	from the preview panel
	 */
	RenderOnlyAssets : function(template) {
		var compiled = Handlebars.compile( template );
		this.RegisterHelper_Asset();
		var markup = compiled();
		return markup;
	},

	/*
	 * Register a helper for assets
	 */
	RegisterHelper_Asset : function() {
		Handlebars.registerHelper('asset', function(options) {
			var asset = options.fn(this);
			var model = Cargo.Collection.Assets.where( { filename : asset } )[0];
			
			return (model) ? Cargo.Model.Site.GetAssetPath(model.get('filename'), model.get('id')) : "";
		});
	},

	/*
	 * Register a helder for assets
	 */
	RegisterHelper_AssetContents : function() {
		Handlebars.registerHelper('asset_contents', function(options) {
			var asset = options.fn(this);
			var model = Cargo.Collection.Assets.where( { filename : asset } )[0];
			
			var file = (model) ? Cargo.Model.Site.GetAssetPath(model.get('filename'), model.get('id')) : "";

			$.get(file, function(data) {
				// Try to replace immediately	
				$("file[data-url='"+file+"']").after(data).remove();

				// Also try a little later, in case the DOM has not been updated
				setTimeout(function() {
					$("file[data-url='"+file+"']").after(data).remove();
				}, 500);
				
			}, 'text');

			return '<file data-url="'+file+'"></file>';
		});
	},

	/*
	 * Register a helper for print
	 */
	RegisterHelper_Print : function() {
		Handlebars.registerHelper('print', function(context, options) {
			var wrapper_head = wrapper_tail = "";
			if(context == "project.content" || context == "content") {
				wrapper_head = "<projectcontent>";
				wrapper_tail = "</projectcontent>";
			}
			context = context.replace("project.","");

			var model = (typeof this.project == "object") ? this.project : this;

			if(Cargo.Model.Site.GetUseHiRes()) {
				if(model[context + '_2x'] != null){
					context += "_2x";
				}
			}

			return new Handlebars.SafeString(wrapper_head + model[context] + wrapper_tail);
		});
	},

	/*
	 * Register a helper for if_any
	 */
	RegisterHelper_IfAny : function() {
		Handlebars.registerHelper('if_any', function() {
			var any = false;
			var options = arguments[arguments.length-1];
			
			for (var i = arguments.length - 2; i >= 0; i--) {
				if( arguments[i] ) {
					any = true;
					break;
				}
			}
			return (any) ? options.fn(this) : options.inverse(this);
		});
	},

	/*
	 * Register a helper for if_all
	 */
	RegisterHelper_IfAll : function() {
		Handlebars.registerHelper('if_all', function() {
			var all = true;
			var options = arguments[arguments.length-1];
			
			for (var i = arguments.length - 2; i >= 0; i--) {
				if( !arguments[i] ) {
					all = false;
					break;
				}
			}

			return (all) ? options.fn(this) : options.inverse(this);
		});
	},

	/*
	 * Register a helper for if_equal
	 */
	RegisterHelper_IfEqual : function() {
		Handlebars.registerHelper('if_equal', function(value_one, value_two, options) {
			if (arguments.length != 3) {
				return '';
			}
			return (value_one == value_two) ? options.fn(this) : options.inverse(this);
		});
	},

	/*
	 * Register a helper for unless_any
	 */
	RegisterHelper_UnlessAny : function() {
		Handlebars.registerHelper('unless_any', function() {
			var any = false;
			var options = arguments[arguments.length-1];
			
			for (var i = arguments.length - 2; i >= 0; i--) {
				if( !arguments[i] ) {
					any = true;
					break;
				}
			}
			return (any) ? options.fn(this) : options.inverse(this);
		});
	},

	/*
	 * Register a helper for unless_all
	 */
	RegisterHelper_UnlessAll : function() {
		Handlebars.registerHelper('unless_all', function() {
			var all = true;
			var options = arguments[arguments.length-1];
			
			for (var i = arguments.length - 2; i >= 0; i--) {
				if( arguments[i] ) {
					all = false;
					break;
				}
			}
			return (all) ? options.fn(this) : options.inverse(this);
		});
	},

	/*
	 * Register a helper for display options
	 */
	RegisterHelper_DisplayOptions : function() {
		Handlebars.registerHelper('displayoptions', function(context, options) {
			// Split the context into args
			var args = context.replace('display_options.','').split(".");
			// Find out how many options
			var count = args.length;
			// Assume we are not passing this condition
			var condition = false;

			if(count == 1) {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			} else if(count == 2) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]];
			} else if(count == 3) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]][args[2]];
			} else {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			}

			return (condition) ? options.fn(this) : options.inverse(this);
		});

	},

	/*
	 * Register a helper for display options
	 */
	RegisterHelper_IfOption : function() {
		Handlebars.registerHelper('if_option', function(context, options) {
			// Split the context into args
			var args = context.replace('display_options.','').split(".");
			// Find out how many options
			var count = args.length;
			// Assume we are not passing this condition
			var condition = false;

			if(count == 1) {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			} else if(count == 2) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]];
			} else if(count == 3) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]][args[2]];
			} else {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			}

			return (condition) ? options.fn(this) : options.inverse(this);
		});

	},

	/*
	 * Register a helper for display options
	 */
	RegisterHelper_UnlessOption : function() {
		Handlebars.registerHelper('unless_option', function(context, options) {
			// Split the context into args
			var args = context.replace('display_options.','').split(".");
			// Find out how many options
			var count = args.length;
			// Assume we are not passing this condition
			var condition = false;

			if(count == 1) {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			} else if(count == 2) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]];
			} else if(count == 3) {
				condition = Cargo.Model.DisplayOptions.get(args[0])[args[1]][args[2]];
			} else {
				condition = Cargo.Model.DisplayOptions.get(args[0]);
			}

			return (!condition) ? options.fn(this) : options.inverse(this);
		});

	},

	RegisterHelper_Truncate : function() {
		Handlebars.registerHelper ('truncate', function (str, len) {
			if (str.length > len && str.length > 0) {
		        var new_str = str + " ";
		        new_str = str.substr (0, len);
		        new_str = str.substr (0, new_str.lastIndexOf(" "));
		        new_str = (new_str.length > 0) ? new_str : str.substr (0, len);
					
		        return new Handlebars.SafeString ( new_str +'...' ); 
		    }
		    return str;
		});
	}
}

/**************************************************************************
 *
 *	Addition to Cargo core functionality
 *
 *	The video class
 *	This method is a replica of the one found in site.package
 *	The "reverse fallback" -- Flash object and HTML5 video tags are both housed
 *	within a div.video_component. The CheckForVideo() method determines who gets
 *	to stay, in essence, and removes the unused tags.
 *
 *	Usage: 
 *	Cargo.Core.Video.CheckForVideo();
 *
 **************************************************************************/

Cargo.Core.Video = {
	Config: {
		DEBUG: false,
		dependencies: [
			'/_css/mediaplayer.css',
			'/_jsapps/_libs/jquery-ui-1.10.3.custom.min.js',
			'/_js/cargo.video.package.js'
		],
		volume_default: 0.75,
		volume: 1,
		muted: false
	},

/**
 * DEBUG
 *
 * Controlled by Config.DEBUG, MightForceHTML5() and IsForcingHTML5() modify,
 * dependent upon the presence of the cargo.video.forcedHTML5 cookie, the
 * behavior of DetectPlugin() and DestroyFallbackTags() - always displaying
 * the video elements.
 *
 * ForceHTML5() controls the cargo.video.forcedHTML5 cookie and enables video
 * elements accordingly.
 */
	MightForceHTML5: function() {
		return this.Config.DEBUG;
	},

	IsForcingHTML5: function() {
		if (this.Config.is_forcing_HTML5 !== undefined)
			return this.Config.is_forcing_HTML5;

		var forcing_HTML5 = $.cookie('cargo.video.forcedHTML5') || false;
		if (forcing_HTML5)
			this.Config.has_flash_plugin = false;

		this.Config.is_forcing_HTML5 = forcing_HTML5;
		return forcing_HTML5;
	},

	ForceHTML5: function() {
		var should_force_HTML5 = $.cookie('cargo.video.forcedHTML5') || false;
		this.Config.force_HTML5 = ! should_force_HTML5;
		if (this.Config.force_HTML5) {
			$.cookie('cargo.video.forcedHTML5', true, {expires: 30, path: '/'});
			this.Config.has_flash_plugin = false;
			this.CheckForVideo();
		} else {
			$.cookie('cargo.video.forcedHTML5', null, {path: '/'});
			window.location.reload();
		}
	},

/**
 * Primary method, determines if there are videos present and, if so, if there
 * is a need to "reverse fallback" to an HTML5 player. Upon fallback, loads the
 * related CSS and javascript should they not already exist, calling back to
 * itself recursively, rearranging and removing Flash and HTML5 elements, and 
 * finally applying the HTML5 player controls.
 *
 * @param	video_js_has_loaded	Boolean, true on recursive call after load of external CSS and javascript files
 */
	CheckForVideo: function(video_js_has_loaded) {
		if (!this.DetectVideos())
			return;

		if (this.DetectPlugin()) {
			this.DestroyFallbackTags();
			return;
		}

		// Load video-related javascript here, but only once
		if (this.Config.has_video_js === undefined) {
			if (video_js_has_loaded) {
				this.Config.has_video_js = true;
			} else {
				if (this.Config.is_loading_video_js !== undefined)
					return;

				this.Config.is_loading_video_js = true;

				// Actual loading of external dependencies
				$.loadFiles(this.Config.dependencies).done(function() {
					Cargo.Core.Video.CheckForVideo(true);
				});

				return;
			}
		}

		// Culling of the object tags, displaying of the video tags
		$('.video_component').each(function() {
			$(this).children('object').remove();

			var video_tag = $(this).children('.video_tag');
			var player = video_tag.children();
			video_tag.css({
				display: 'inline-block',
				width: player.attr('data-video-width'),
				height: player.attr('data-video-height')
			});

			// Apply jMediaelement controls after javascript has loaded
			if (Cargo.Core.Video.Config.has_video_js)
				Cargo.Core.Video.ConfigureMediaPlayer(player);
		});
	},

/**
 * Application of jMediaelement controls to video tags
 */
	ConfigureMediaPlayer: function(player) {
		// Don't call video player methods more than once
		if (player.attr('data-video-configured') !== undefined)
			return;

		player.attr('data-video-configured', 'true');

		// Grab volume settings from cookies or defaults
		this.Config.volume = $.cookie('cargo.video.volume') || this.Config.volume_default;
		this.Config.muted = ($.cookie('cargo.video.muted')) ? true : false;

		// Apply jMediaelement controls, custom volume logic
		player.jmeInit().jmeProp('controlbar', true);
		player.children('video').each(function(index, video) {
			$(video).bind('volumechange', function() {
				var control = $('.mute-unmute');
				var volume = Number($(this).jmeValue('volume'));
				var muted = $(this).jmeValue('muted');

				if (volume > 0.66) {
					control.removeClass('volume-medium volume-low').addClass('volume-high');
				} else if (volume <= 0.66 && volume > 0.33) {
					control.removeClass('volume-high volume-low state-mute state-unmute').addClass('volume-medium');
				} else if (volume <= 0.33 && volume > 0.01) {
					control.removeClass('volume-high volume-medium state-mute state-unmute').addClass('volume-low');
				} else {
					control.removeClass('volume-high volume-medium volume-low').addClass('state-unmute');
				}
			
				if (muted) {
					control.addClass('state-unmute');
					$.cookie('cargo.video.muted', true, {expires: 30, path: '/'});
				} else {
					$.cookie('cargo.video.muted', null, {path: '/'});
				}
			
				$.cookie('cargo.video.volume', volume, {expires: 30, path: '/'});
			});

			video.volume = Cargo.Core.Video.Config.volume;
			video.muted = Cargo.Core.Video.Config.muted;
		});
	},

/**
 * Determine if the browser supports and has the Flash plugin installed
 *
 * @return	Boolean, whether detected
 */
	DetectPlugin: function() {
		// Only check for Flash once
		if (this.Config.has_flash_plugin !== undefined)
			return this.Config.has_flash_plugin;

		// During debug, always report a lack of Flash
		if (this.MightForceHTML5()) {
			if (this.IsForcingHTML5())
				return false;
		}

		var flash_was_detected = false;
		if (typeof navigator.plugins != 'undefined' && typeof navigator.plugins['Shockwave Flash'] == 'object') {
			var d = navigator.plugins['Shockwave Flash'].description;
			if (d && !(typeof navigator.mimeTypes != 'undefined' && navigator.mimeTypes['application/x-shockwave-flash'] && !navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin))
				flash_was_detected = true;
		} else if (typeof window.ActiveXObject != 'undefined') {
			try {
				if ((new ActiveXObject('ShockwaveFlash.ShockwaveFlash')))
					flash_was_detected = true;
			} catch(e) {}
		}

		this.Config.has_flash_plugin = flash_was_detected;
		return flash_was_detected;
	},

/**
 * Get a count of the div.video_component elements, confirm if there is more
 * than one present
 *
 * @return	Boolean, true if one or more
 */
	DetectVideos: function() {
		return ($('.video_component').length > 0);
	},

/**
 * Remove the video tag parent div, even though it is not displayed, just to be
 * extra, extra safe
 */
	DestroyFallbackTags: function() {
		// During debug, do not remove the video tags
		if (this.MightForceHTML5())
			return;

		if (this.Config.was_destroyed !== undefined)
			return;

		this.Config.was_destroyed = true;
		$('.video_component .video_tag').each(function(index, value) {
			$(this).remove();
		});
	}
}
/*
 * End Cargo.Core.Video
 */
 

/**************************************************************************
 *
 *	Addition to Cargo core functionality
 *
 *	The audio class
 *	This method is a replica of the one found in site.package
 *
 *	Usage: 
 *	Cargo.Core.Audio.CheckForAudio();
 *
 **************************************************************************/

// This value is needed by sound manager and is global because of legacy
var start_sound = 
	this_play = false;

Cargo.Core.Audio = {
	Config: {
		has_audio_js : false,
		dependencies: [
			'/_jsapps/_libs/jquery-ui-1.10.3.custom.min.js',
			'/_js/soundmanager/api/soundmanager2-nodebug-jsmin.js'
		]
	},

	/**
	 * Primary method, determines if there are audio players present and, if so, load them
	 *
	 * @param	audio_js_has_loaded	Boolean, true on recursive call after load of external CSS and javascript files
	 */
	CheckForAudio : function() {
		if (!this.DetectAudioPlayer())
			return;

		this.UnloadAudio();
		this.InitButtons();
		this.InitPlayerSize();
		if(Cargo.Helper.isMobile()){
			// preload audio JS because of IOS issues
			// Sound play() calls are blocked by the OS unless in direct response to a user event like touch or click
			// http://www.schillmania.com/projects/soundmanager2/doc/technotes/#mobile-device-limitations
			Cargo.Core.Audio.LoadDependancies(null, function(){
				$(window).ready(function(){
					setupSoundManager();
				});
			});
		}
	},

	InitButtons : function() {

		$(".audio_component .play_pause").off('click').on('click', function(e) { 
			e.preventDefault();
			
			var force = false;
			if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 
				var ffversion=new Number(RegExp.$1); 
				if(ffversion < 3.6) { force = true; }
			}
			var rel = $(this).attr("rel");
			var which = $(this).attr("class").replace("play_pause ", "");

			// Trigger the event of playing the audio
			Cargo.Event.trigger("audio_play_pause", rel, which );
				
			// Load dependancies, or toggle the sound
			if( !Cargo.Core.Audio.Config.has_audio_js ) {
				// console.log("load");
				Cargo.Core.Audio.LoadDependancies($(this), function(){
					setupSoundManager();
				});
			} else {
				// console.log("toggle");
				Cargo.Core.Audio.ToggleSound($(this));
			}
		});
		
		if($("#DroidFont").length <= 0) {
			 // Load the external font from the google api
			  var droidfont=document.createElement('link');
			  droidfont.id='DroidFont';
			  droidfont.setAttribute('type','text/css');
			  droidfont.setAttribute('rel','stylesheet');
			  droidfont.setAttribute('href','https://fonts.googleapis.com/css?family=Droid+Sans+Mono');
			  
			  var hd=document.getElementsByTagName('head')[0];
			  hd.appendChild(droidfont);
		};

		$(".progress").css("display","none");
	},

	/**
	 *	Set the player size of the audio component
	 *	Also set the position of each element
	 */
	InitPlayerSize : function() {
		var total_players = $(".audio_component").length;
		var zero_count = 0;
		
		$(".audio_component").each(function(){
			if($(this).width() > 0) {
				// Setup playhead/progress width 
			   //$('.Href', this).hide();            
			   var position = $(".position", this);
			   var playhead = $(".playhead", this);
			   // This makes the player correctly sized based on the .Sound width property
			   var soundWidth = $(this).width();
			   var soundBordersWidth = $(".border", this).outerWidth() - $(".border", this).width();
			   var controlsWidth = $(".controls", this).width(soundWidth - soundBordersWidth).width();
			   var volumeWidth = $(".volume", this).width();
			   var playpauseWidth = $(".play_pause", this).width();
			   var spacerWidths = $(".vertical_border", this).width() * 2;
			   $(".border", this).width(soundWidth - soundBordersWidth);
			   $(".info", this).width(controlsWidth - volumeWidth - playpauseWidth - spacerWidths);
			  
			   var refWidth = $(".info", this).width();
			   position.width(refWidth);
				 
			   playhead
				 .css("width", refWidth+"px")
				 .css("left", 0);
		
			   var progressBordersWidth = $(".progress", this).outerWidth() - $(".progress", this).width();
			   $(".progress")
				 .css("width", (refWidth - progressBordersWidth) +"px")
				 .css("left", 0);
				
				if($("#home_content").length > 0) var prog_left = "35px";
				else var prog_left = "0px";
				
			   $(".progress_clip")
				 .css("position", "absolute")
				 .css("overflow", "hidden")
				 .css("width", refWidth+"px")
				 .css("left", prog_left);
			   
			   $(".position")
				 .css("left", prog_left);
		
			   $(".playhead_container", this)
				 .css("position", "relative")
				 .css("width", (playhead.outerWidth() * 2) + "px")
				 .css("left", ((playhead.outerWidth() * -1)) + "px");
		
			   $(".progress_container", this)
				 .css("position", "absolute")
				 .css("z-index", "-1")
				 .css("width", (playhead.outerWidth() * 2) + "px")
				 .css("left", ((playhead.outerWidth() * -1)) + "px");
			
			} // end width check
			else {
				zero_count++;
			}
		});
		
		if( zero_count > 0 && zero_count == total_players) {
			// This content is not yet loaded because the container is faded out
			// Pause for 1 sec, then enable
			setTimeout("Cargo.Core.Audio.InitPlayerSize()", 500);
		}
	},

	/**
	 *	Load all javascript dependancies
	 */
	LoadDependancies : function(el, callback) {
		// Load audio-related javascript here, but only once
		if (this.Config.has_audio_js === false) {
			
			$.loadFiles(this.Config.dependencies).done(function() {
				Cargo.Core.Audio.ToggleSound(el);
				Cargo.Core.Audio.Config.has_audio_js = true;
				if(typeof callback == "function"){
					callback();
				}
			});

			return;
		}

	},

	/**
	 *	When the play/pause button is pressed
	 */
	ToggleSound : function(el) {
		start_sound = $(el).parents(".audio_component").attr("id");
		this_play = $(el);
	},

	/**
	 * Get a count of the div.audio_component elements, confirm if there is more
	 * than one present
	 *
	 * @return	Boolean, true if one or more
	 */
	DetectAudioPlayer: function() {
		return ($('.audio_component').length > 0);
	},

	/**
	 *	Removes any sound object from the page
	 */
	UnloadAudio : function() {
		$(".audio_component").each(function() {
			if(typeof soundManager == "object") {
				soundManager.unload( $(this).attr("id") );
			}
		});
	}

};




/**************************************************************************
 *
 *	Addition to Cargo "core" functionality
 *
 *	The social media class
 *	This method is a replica of the one found in site.package
 *
 *	Usage: 
 *	Cargo.Core.SocialMedia.Init();
 *
 **************************************************************************/

/**
 *	  This is the main social media app
 *    It will contain the various services
 *	NOTE:
 *		The var "Services" sits at the bottom of this method
 *		this defines each socail network and their dependencies
 *		it must sit at the bottom, not the top
 */
Cargo.Core.SocialMedia = {
    
    /*
     *	Pre-define the services and their respective scripts that need loading
     */
    "Services"   : { 
    	"facebook"   : {
    		"script" : false,	// script url for inclusion at write time
    		"inuse"	 : false	// if this is in use or not, always default false
    	},
    	
    	"twitter"    : {
    		"script" : "http://platform.twitter.com/widgets.js",
    		"inuse"	 : false
    	},
    	
    	"pinterest"  : {
    		"script" : false,
    		"inuse"	 : false
    	},
    	
    	"googleplus" : {
    		"script" : "https://apis.google.com/js/plusone.js",
    		"inuse"	 : false
    	},
    	
    	"stumbleupon": {
    		"script" : "http://platform.stumbleupon.com/1/widgets.js",
    		"inuse"	 : false
    	},
    	
    	"reddit"     : {
    		"script" : "http://www.reddit.com/buttonlite.js?i=5",
    		"inuse"	 : false
    	}
    
    
    },
    
    "Options"       	   : { 
    	"element"   	   : ".project_footer",	// The selector element to bind the html to
    	"show_count"       : false,				// Show the "like" count or not
    	"twitter_username" : false				// Twitter username for @reply
    },
    
    "OutputHTML" : "",						// The HTML that will be printed to the element
    
	
	
	/*
	 *	Set the defaults of the socail media elements
	 */
    SetDefaults : function( which, value ) {
        if(which == "element" || which == "show_count" || which == "twitter_username") {
            this.Options[which] = value;
        } else {
        	// set the "inuse" value for the default 
            this.Services[which].inuse = value;
        }
    },
    
    /*
     *	Initialize the services
     */
    Init : function() {
        // Set a delay to listen to the collection loaded
    	if(Cargo.Helper.IsFeedDesign()) {
            Cargo.Event.on('project_collection_reset', function() {
                Cargo.Core.SocialMedia.Start();
            });
        } else {
            this.Start();
        }
    },

    Start : function() {
        // Reset the output values
        this.OutputHTML = "";
        
        // Create the HTML
        this.CreateHTML();
        
        // Write the HTML
        this.WriteHTML();
    },
    
    /*
	 *	Gets a project title
	 */
    AddHTML : function( html ) {
    	this.OutputHTML += html;
    },
    
    /*
     *	Takes the HTML that was created by the methods below
     *	Replaces the stubs with real content
     *	Stubs are for direct link / encoded direct link / title
     *	Input is a PID of the element we are binding
     *	If no PID is passed, it will default to site link / html title
     */
    GetFormattedHTML : function( pid ) {
    	var final_output = this.OutputHTML;
    	var project_model = Cargo.Collection.Projects.where( { id : pid } )[0];

        project_model = (typeof project_model == "undefined") ? Cargo.Model.Project : project_model;
    	
    	// Direct link
    	final_output = final_output.replace(/CARGO_DIRECT_LINK/g, project_model.get('direct_link') );
    	
    	// Encoded direct link
    	final_output = final_output.replace(/CARGO_ENCODED_DIRECT_LINK/g, encodeURIComponent(project_model.get('direct_link')) );

        // Title
    	final_output = final_output.replace(/CARGO_PROJECT_TITLE/g, project_model.get('title_no_html') );
    	
    	// Return the results
    	return final_output;
    },
    
     /*
     *	Write the buttons to the choosen element
     */
    WriteHTML : function() {
    	
    	// Attach the content to the choosen element/selector
    	$(this.Options.element)
	    	.each(function() {
	    		// Add to reclusive elements. Make them social, but skip ones that already are social.
	    		if($(this).data("has_social") !== true) {
		    		$(this)
		    			.append('<div class="social_media">' + Cargo.Core.SocialMedia.GetFormattedHTML( Cargo.Core.SocialMedia.GetNearestPid( $(this) ) ) + '</div>')
		    			.data("has_social", true);
		    	}
	    	});
    	
    	
    	// Loop one more time, this time include scripts
		$.each(this.Services, function(service, options) {
			if( options.inuse === true && options.script !== false ) {
				// Remove any old scripts
				$("script#"+service).remove();
				
				// Add the new script
				addScript( options.script, service );
			}
		});
    
    },
    
    /*
	 *	Quick and dirty. 
	 *	Finds the pid of the most active element
	 *	On feed design, that is probably it's parent. Find the entry
	 */
	GetNearestPid : function( this_elem ) {
		if(Cargo.Helper.IsFeedDesign()) {
			return $(this_elem).closest('[data-id]').attr('data-id');
		} else {
			return Cargo.Helper.GetPidFromPurl(Cargo.Helper.GetCurrentProjectUrl());
		}
	},
    
    /*
     *	Create the final output HTML by adding individual services
     */
    CreateHTML : function() { 
    	// Loop through and add each to the selector
       for (var service in this.Services) {
            // Facebook
            if(service == "facebook" && this.Services[service].inuse ) {
               this.AddHTML( this.Facebook() );
            }
            // Twitter
            else if(service == "twitter" && this.Services[service].inuse ) {
               this.AddHTML( this.Twitter() );
            }
            // Pinterest
            else if(service == "pinterest" && this.Services[service].inuse ) {
               this.AddHTML( this.Pinterest() );
            }
            // Google Plus
            else if(service == "googleplus" && this.Services[service].inuse ) {
               this.AddHTML( this.GooglePlus() );
            }
            // StumbleUpon
            else if(service == "stumbleupon" && this.Services[service].inuse ) {
               this.AddHTML( this.StumbleUpon() );
            }
            // Reddit
            else if(service == "reddit" && this.Services[service].inuse ) {
               this.AddHTML( this.Reddit() );
            }
            
        }
    },
    
    
    /*
     *    All services below here
     *	Note, string replacements are made for the following:
     *		CARGO_DIRECT_LINK
     *		CARGO_ENCODED_DIRECT_LINK
     *		CARGO_PROJECT_TITLE
     */
    Facebook : function() {
    
        // Cargo.log("Should we show comments? "+this.Options.show_count);
        
        return '<div class="facebook_like" style="float: left; margin-right: 8px;"><iframe src="http://www.facebook.com/plugins/like.php?href=CARGO_ENCODED_DIRECT_LINK&amp;send=false&amp;layout=button_count&amp;width=50&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21&amp;appId=150492405019861" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:46px; height:21px;" allowTransparency="true"></iframe></div>';
        
    },
    
    Twitter : function() {
        
        var output = '<div class="tweet_this" style="float: left; margin-right: 8px;"><a href="https://twitter.com/share" class="twitter-share-button"';
        
        if (this.Options.twitter_username !== false) {
        	output += ' data-via="'+ this.Options.twitter_username +'"';
        }
        
        output += ' data-url="CARGO_ENCODED_DIRECT_LINK" data-text="CARGO_PROJECT_TITLE: CARGO_DIRECT_LINK" data-count="none">Tweet</a></div>';
        
        return output;

    },
    
    Pinterest : function() {
    	
    	$("a.pin_it_link")
    		.on("click", function() {
    			addScript("http://assets.pinterest.com/js/pinmarklet.js?r=" + Math.random()*99999999);
    			return false;
    		});
    
    	return '<div class="pin_it" style="float: left; margin-right: 8px;"><a href="#" class="pin_it_link" style="background: none; border: 0;"><img src="/_gfx/pinit.png" /></a></div>';
    	
    },
    
    GooglePlus : function() {
    	
		return '<div class="google_plus" style="float: left; margin-right: 8px;"><g:plusone size="medium" annotation="none" href="CARGO_DIRECT_LINK"></g:plusone></div>';
    	
    },
    
    StumbleUpon : function() {
    
		return '<div class="stumbleupon" style="float: left; margin-right: 8px;"><su:badge layout="4" location ="CARGO_DIRECT_LINK"></su:badge></div>';
    	
    },
    
    Reddit : function() {
    	
    	return '<div class="reddit" style="float: left; margin-right: 8px;"><a href="http://www.reddit.com/submit?url=CARGO_ENCODED_DIRECT_LINK" target="_blank"><img src="http://www.reddit.com/static/spreddit5.gif" alt="submit to reddit" border="0" /></a></div>';
    	
    }
    
    
}; // End SocialMedia

Cargo.Core.Inspector3 = {

	files: {
		corePackage        	: '/_jsapps/inspector/3.0.7/inspector-core.min.js?02.16.17',
		styleSheet 			: '/_jsapps/inspector/3.0.7/inspector-frontend.min.css?02.16.17',
		frontendPackage 	: '/_jsapps/inspector/3.0.7/inspector-frontend.backbone.min.js?02.16.17'
	},
	
	load: function(customOptions){

		var self = this;

		var injectFrontendPackage = function(){
			if(window.frameElement !== null && window.frameElement !== undefined){
					// we're in a frame. That's ok but test if it's
					// not a frame that we just created.
					
					if(window.frameElement.getAttribute('data-inspector') !== null){

						// we are in the frame that we've created in this frame's parent. 
						// No need to do anything.
						return false;
					} else {

						parent.location = document.location.href.replace(/\/adminedit/gi, '') + '?inspector';
						
					}
				}

				var script = document.createElement('script');
				script.src = self.files.frontendPackage;
				document.head.appendChild(script);

				//document.body.style.visibility = 'hidden';

				script.onload = function(){

					setupInspectorFrame();
					
				}
		}

		var setupInspectorFrame = function(){
			// only do this when we're not in an iframe.
			document.body.setAttribute('style', '');
			document.body.innerHTML = '';

			$(document.body).append('<img class="ci-loader" style="left: 40px; top: 40px; position: absolute;" src="/_gfx/loadingAnim.gif" />');

			if(Cargo.ReplaceLoadingAnims === undefined){
				Cargo.Core.ReplaceLoadingAnims.init();
			} else {
				Cargo.ReplaceLoadingAnims();
			}

			// remove styleSheets
			var styles = document.head.querySelectorAll('link, style');

			for(var i = 0; i < styles.length; i++){
				document.head.removeChild(styles[i]);
			}

			// add our styleSheet
			var style = document.createElement('link');
			style.href = self.files.styleSheet;
			style.rel = 'stylesheet';
			document.head.appendChild(style);


			var frame = document.createElement('iframe');

			frame.className = 'bodyframe';
			frame.setAttribute('data-inspector', 'true');
			frame.setAttribute('frameborder', '0');

			document.body.appendChild(frame);

			$(frame).css('opacity', 0);

			// url must be different from the current one to make it work in FF. 
			var newSrc = window.location.href.replace(/\?inspector|\/admin\/css/gi, '');

			if(newSrc.indexOf('?') === -1){
				newSrc += '?inspecting';
			} else {
				newSrc += '&inspecting';
			}

			frame.src = newSrc;

			// frame loaded. We can access it's DOM now.
			frame.onload = function(){

				injectInspectorCore(frame);

				//frame.style.visibility = 'hidden';
			}

		}

		var injectInspectorCore = function(frame){
			// inject the inspector API into the frame
			var script = frame.contentDocument.createElement('script');
			script.src = self.files.corePackage;
			frame.contentDocument.head.appendChild(script);

			// once the API has loaded we can instanciate the editor.
			script.onload = function(){
				
				if(window.editor === undefined){
					initializeInspector(frame);
				} else {
					window.editor.reloadFrameReferences();
				}
			}
		}

		var initializeInspector = function(frame){
			 // instanciate the editor and tell it to inspect the frame instead of the 
			// current document by passing the iframe object.
			
			$("#follow_popup, .ci-loader").remove();

			var options = $.extend({

				iframe: frame,

				styleSheetFilter: function(styleSheet){

					/*if(styleSheet.ownerNode.nodeName === "STYLE"){
						return false;
					}

					// adblock inserts style nodes with script tags in it...
					if(styleSheet.ownerNode !== null){
						if($(styleSheet.ownerNode).find('script').length > 0){
							return false;
						}
					}

					if(styleSheet.href !== null) {
						if(styleSheet.href.indexOf('global.css') !== -1){
							return false;
						}
					}*/

					if(styleSheet.ownerNode !== null){
						if(styleSheet.ownerNode.id.indexOf('member_stylesheet') !== -1 || styleSheet.ownerNode.id.indexOf('user_stylesheet') !== -1 ){
							return true;
						}
					}

					return false;
				},

				styleSheetSavableFilter: function(styleSheet){
					
					if(styleSheet.ownerNode !== null){
						if(styleSheet.ownerNode.id.indexOf('member_stylesheet') !== -1 || styleSheet.ownerNode.id.indexOf('user_stylesheet') !== -1 ){
							return true;
						}
					}
					
					return false;
				},

				onResize: function(){
					$(window).resize();
				},

				onInspectorClick: function(e){

					// don't preventDefault if a splash page has been clicked.
					if(e.target.id !== "splash"){
						e.preventDefault();
					}

					if( $(e.target).closest('#toolset').length > 0 ) {
						return false;
					}

					if(e.target.nodeName === "HTML") {
						e.target = document.body;
					}
					
					// return the element that is going to be inspected.
					return e.target;
				},

				onSave: function(button, modifiedFiles){

					var styleSheetPostArray = [];

					var self = this;

					for(var i = 0; i < modifiedFiles.length; i++){
						styleSheetPostArray.push({
							filename: encodeURIComponent(modifiedFiles[i].filename),
							stylesheet: modifiedFiles[i].cssString,
						});
					}

					$.ajax({
						type: "POST",
						url: '/dispatch/admin/saveInspectorCSS',
						data: {
							stylesheet: JSON.stringify( styleSheetPostArray ),
							url: ( Cargo.Helper ? Cargo.Helper.GetUrl() : frame.contentWindow.Cargo.Location.GetCargoUrl() )
						},
						success: function(response){
							if(response.error.length > 0){
								button.$el.removeClass('saving');
								
								if(response.error[0].message) {
									alert(response.error[0].message);
								} else  {
									alert('Save failed');
								}
							} else {

								for(var i = 0; i < modifiedFiles.length; i++){
									modifiedFiles[i].CSSStyleSheet.markAsSaved();
								}

							}
						},
						always: function(){
							button.$el.removeClass('saving');
						},
						dataType: 'json'
					});

				}

			}, customOptions);

			window.editor = new CSSEditor(options);

			document.body.appendChild(window.editor.getEditorElement());
			
			window.editor.getEditorElement().style.setProperty('visibility', 'hidden', 'important');

			var init = true;

			$(window).resize(function(){
				
				var editorWidth = editor.getEditorElement().offsetWidth;
				windowWidth = document.documentElement.offsetWidth;

				frame.style.width = (windowWidth - editorWidth) + 'px';
				frame.style.left = editorWidth + 'px';

				if(init){
					$(frame).css('opacity', '');
					window.editor.getEditorElement().style.removeProperty('visibility');
					init = false;
				}

			});
			
			$(window).resize();
			//frame.style.visibility = '';
			//
			var c = window.editor.options.coreWindow.Cargo;

			if(c.hasOwnProperty('Event')){
				c.Event.trigger('inspector_open');
			}

		}

		
		var adminURLIndex = document.location.href.indexOf('/admin/css');

		if( (Cargo.Helper ? Cargo.Helper.isMobile() : Cargo.Config.isMobile()) ) {

			alert('Sorry, the Inspector does not support iOS (yet).');

			if(adminURLIndex !== -1){
				document.location.href = document.location.href.substring(0, adminURLIndex);
			}

			return false;
			
		}

		if( (Cargo.Helper ? Cargo.Helper.isIE8() : Cargo.Config.isIE8()) ) {

			alert('Sorry, the Inspector does not support your browser version.');

			if(adminURLIndex !== -1){
				document.location.href = document.location.href.substring(0, adminURLIndex);
			}

			return false;
			
		}

		Cargo.InspectorLoading = true;
		$("#follow_popup").remove();

		$.post("/dispatch/admin/authenticateInspector", {url: ( Cargo.Helper ? Cargo.Helper.GetUrl() : Cargo.Location.GetCargoUrl() ) }, function(authenticationData) {

			if(authenticationData.error.length === 0) {

				injectFrontendPackage();

			} else if(authenticationData.error[0].message) {
				alert(authenticationData.error[0].message);

			} else {
				alert("You must be logged in to use the Inspector.");

				if(adminURLIndex !== -1){
					document.location.href = document.location.href.substring(0, adminURLIndex);
				}
			}
		}, 'json');

		//injectFrontendPackage();

	}
}

Cargo.utils = Cargo.utils || {};

/**
 *	Cargo.Core.CargoXHR wraps the native XMLHttpRequest with some extra features like retry.
 *
 *  Kinda implements the jQuery (http://api.jquery.com/jquery.ajax/) ajax options.
 *
 * @author Aart Röst / Cargo Collective
 * 
 */

Cargo.utils.CargoXHR = function(options){

	var self = this;

	$.extend(this.options = {}, this.defaultOptions, options);

	if(this.options.context === undefined){
		this.options.context = this;
	}

	if(this.options.url === undefined){
		throw 'no URL given, define "url" in the contructor\'s options object';
	}

	this.retries = 0;

	this.xhr = new XMLHttpRequest();

	this.xhr.addEventListener("abort", function(){
		self.options.abort.apply(self.options.context, arguments);
	}, false);
	
	this.xhr.addEventListener("error", function(){
		self.options.error.apply(self.options.context, arguments);
	}, false);
	
	this.xhr.addEventListener("load", function(){
		self.options.success.apply(self.options.context, arguments);
	}, false);

	this.xhr.addEventListener("loadend", function(){
		self.options.always.apply(self.options.context, arguments);
	}, false);

	this.xhr.upload.addEventListener("progress", function(e){
		self.options.progress.apply(self.options.context, arguments);
	}, false);

	this.send();

}

Cargo.utils.CargoXHR.prototype.send = function(){

	this.xhr.open(this.options.type, this.options.url, this.options.async);

	for(var key in this.options.headers){
		this.xhr.setRequestHeader(key, this.options.headers[key]);
	}
	
	this.xhr.responseType = this.options.dataType;

	this.options.beforeSend.call(this, this.xhr);

	this.xhr.send(this.options.data);

}

Cargo.utils.CargoXHR.prototype.retry = function(){

	if(this.retries++ < this.options.maxRetries){

		Cargo.utils.CargoXHR.prototype.send.apply(this, arguments);

	} else {
		
		this.abort();
		return false;

	}

}

Cargo.utils.CargoXHR.prototype.abort = function(){

	if(typeof this.xhr === 'object'){
		this.xhr.abort();
	}

}

Cargo.utils.CargoXHR.prototype.defaultOptions = {
	async: true,
	beforeSend: function(XHR){

	},
	always: function(e){

	},
	success: function(e){

	},
	progress: function(e){

	},
	error: function(e) {

	},
	abort: function(e) {

	},
	type: 'GET',
	url: undefined,
	dataType: 'text',
	headers: {},
	data: null,
	context: undefined,
	maxRetries: 5
}

Cargo.utils = Cargo.utils || {};

/**
 * @todo: process fields: totalBytes, uploadedBytes
 * 		  global progress percentage calculated with the progress from all processes.
 * 
 */

Cargo.utils.ImageUploader = function(options){

	$.extend(this.options = {}, this.defaultOptions, options);

	this.activeProcesses = [];

}

Cargo.utils.ImageUploader.prototype = {

	upload: function(files, pid, customParameters){

		if(files === undefined){
			return undefined;
		}

		// TODO: handle either a single file or an array of files
		if(files.length === 0) {
			return undefined;
		};

		var _this = this;

		// wrap all files in a process. This allows for 
		// global progress tracking when uploading an array
		// of files and easier management of multiple 
		// concurrent processes. Also allows you to swap out processes
		// between uploader instances or re-upload/re-use a certain process.
		
		var uploadProcess = {
			uid: Cargo.Model.Site.GetId(),
			url: Cargo.Helper.GetUrl(),
			pid: (pid !== undefined ? pid : Cargo.Helper.GetCurrentProjectId()),
			fileIndex: -1,
			aborted: false,
			totalBytes: 0,
			uploadedBytes: 0,
			customParameters: customParameters,
			getUploadProgress: function(){
				return (this.uploadedBytes / this.totalBytes) * 100;
			},
			files: [],
			events: {
				onFileComplete: function(file, event){},
				onFileProgress: function(file, event){},
				onFileFail: function(file, event){},
				onFileError: function(file, event){},
				onAbort: function(uploadProcess){},
				onComplete: function(uploadProcess){}
			},
			getNextFile: function(){

				if(this.fileIndex < this.files.length - 1 && this.aborted !== true){
					return this.files[++this.fileIndex];
				} 

				return undefined;
			},
			getCurrentFile: function(){
				return this.files[this.fileIndex];
			},
			abort: function(){

				if(this.xhr !== undefined){

					this.aborted = true;
					this.xhr.abort();
					this.events.onAbort(this);

					var processIndex = _this.activeProcesses.indexOf(this);

					if(processIndex !== -1){
						_this.activeProcesses.splice(processIndex, 1);
					}

				}
				
			},
			addFile: function(file){
				
				if(this.files.indexOf(file) === -1) {

					if(_this.options.acceptFileTypes.test(file.type) && _this.options.acceptFileTypes.test(file.name)){
				
						uploadProcess.files.push(file);

						this.totalBytes += file.size;

					} else {

						// TODO: Think this through again.
						uploadProcess.events.onFileError(file, {
							message: 'File type not allowed'
						});

					}

				}

			}
		};

		[].forEach.call(files, function(file){
			uploadProcess.addFile(file);
		});

		if(uploadProcess.files.length === 0){
			uploadProcess = null;
			return undefined;
		}

		this.activeProcesses.push(uploadProcess);

		this.handleUploadProcess(uploadProcess);

		return uploadProcess;

	},

	handleUploadProcess: function(uploadProcess){

		var file = uploadProcess.getNextFile(),
			_this = this;

		if(file === undefined) {

			// no more files.
			uploadProcess.xhr = undefined;
			uploadProcess.events.onComplete(uploadProcess);

			uploadProcess.fileIndex = -1;

			var processIndex = _this.activeProcesses.indexOf(uploadProcess);

			if(processIndex !== -1){
				_this.activeProcesses.splice(processIndex, 1);
			}

			return;
		}

		file.lastProgress = 0;

		var formData = new FormData();

		formData.append('Filedata[]', file);

		formData.append('pid', uploadProcess.pid);
		formData.append('url', uploadProcess.url);
		formData.append('uid', uploadProcess.uid);

		if(typeof uploadProcess.customParameters === "object"){

			Object.keys(uploadProcess.customParameters).forEach(function(key){
				
				formData.append(key, uploadProcess.customParameters[key]);

			});

		}
		
		uploadProcess.xhr = new Cargo.utils.CargoXHR({

			url: this.options.posturl,
			type: 'POST',
			data: formData,
			progress: function(e){
				
				if(e.lengthComputable){
					
					uploadProcess.uploadedBytes += e.loaded - file.lastProgress;
					file.lastProgress = e.loaded;

				}

				uploadProcess.events.onFileProgress(file, e);

			},
			success: function(e){
				
				if (this.xhr.status == 200) {

					var response = JSON.parse(this.xhr.responseText);
					uploadProcess.events.onFileComplete.call(this, file, e);

				} else {

					uploadProcess.events.onFileFail.call(this, file, e);

				}

				// keep going until we run out of files to upload
				_this.handleUploadProcess(uploadProcess);

			}

		});

	},

	defaultOptions: {
		acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
		posturl: '/dispatch/adminproject/handleMultiFileUpload'
	}
};

 /***************************************************************************
  *
  *	Helper functions that are not in a class
  *
  *	These are one off functions that do something, but are not tied
  *	to any particular class
  *
 **************************************************************************/

/**
 *	Replication of the php in_array function
 *	http://phpjs.org/functions/in_array/
 */
function in_array (needle, haystack, argStrict) {
    var key = '',
        strict = !! argStrict;

    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }

    return false;
}

/**
 *  Return the first letter of a word capitolized 
 */
function ucFirst(str) {
  return (str) ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

/**
 *  Legacy function 
 *  CLoses projects
 */
function closeThisPr() {
  Action.Project.Close();
}

/**
 *  Legacy function 
 *  CLoses projects
 */
Projects = {
  CloseProject :function() {
    Action.Project.Close();
  }
}

/**
 *  Legacy function
 *  Gets a filter
 */
Cargo.Location = {
  GetUserFilter :function() {
    // return Cargo.Model.Site.GetFilter();
    return Cargo.API.Config.filter;
  },
  GetDomainOrUrl : function() {
    return Cargo.Helper.GetUrl();
  }
}

/**
 *  Legacy function 
 *  Loads the inspector
 */
function loadInspector() {
  Cargo.Core.LoadInspector();
}

/**
 *  Toggles the header into hi-res our out
 *  Called from the admin frame
 */
function ToggleHeaderHiRes(which, url, firstval) {
  if($('img[src$="/'+url+'"]').length > 0) {
    if(which == "2x") {
      if(firstval == "2x") {
        $('img[src$="/'+url+'"]').width( $('img[src$="/'+url+'"]').attr('width') );
        $('img[src$="/'+url+'"]').height( $('img[src$="/'+url+'"]').attr('height') );
      } else {
        $('img[src$="/'+url+'"]').width( Math.floor($('img[src$="/'+url+'"]').attr('width') / 2) );
        $('img[src$="/'+url+'"]').height( Math.floor($('img[src$="/'+url+'"]').attr('height') / 2) );
      }
     
    } else {
      if(firstval == "1x") {
        $('img[src$="/'+url+'"]').width( $('img[src$="/'+url+'"]').attr('width') );
        $('img[src$="/'+url+'"]').height( $('img[src$="/'+url+'"]').attr('height') );
      } else {
        $('img[src$="/'+url+'"]').width( Math.floor($('img[src$="/'+url+'"]').attr('width') * 2) );
        $('img[src$="/'+url+'"]').height( Math.floor($('img[src$="/'+url+'"]').attr('height') * 2) );
      }
    }
  }
}

/**
 *    Social media class
 *
 *    This is the main social media function
 *    It will init the rest of the application
 *
 *  Cargo.IncludeSocialMedia( {
 *    element     : ".project_footer",
 *    show_count  : true,
 *
 *    facebook    : true,
 *    twitter     : true,
 *    stumbleupon : false,
 *    pintrest    : true
 *  } );
 *
 *
 *  .social_media {
 *    margin: 30px 0 100px 0; height: 20px;
 *   }
 *
 */
Cargo.IncludeSocialMedia = function( dataObj ) {
    // Loop through each to set the default options
    $.each(dataObj, function(key, value) {
        Cargo.Core.SocialMedia.SetDefaults(key, value);
    });

    // Set the project open/ready states
    $(document).ready(function() { 
        Cargo.Core.SocialMedia.Init(); 
    });

    Cargo.Event.on('project_load_complete', function( pid ) {
        Cargo.Core.SocialMedia.Init();
    });
    
    Cargo.Event.on('pagination_complete', function( new_page ) {
        Cargo.Core.SocialMedia.Init();
    });

};

/**
 *  Legacy function
 *  Smothly scroll
 */
var lastT = 0;
var timer = null;
function doscroll(targetYPos,y,t) {
  var speed = 6;
  var diff = targetYPos - y;
  var steps = diff/(speed*speed);
  t += (t+steps)/diff;
  newY = (t==1) ? y+diff : y + (diff * (-Math.pow(2, -20 * t/1) + 1));
  if(t) window.scrollTo(0, newY);
  
  if(t >= 1 || lastT == t || !t) clearTimeout(timer);
  else timer=setTimeout("doscroll("+targetYPos+","+y+","+t+")",1);
  
  lastT = t;
  
  return false;
}

function doscroll_left(targetXPos,x,t,scroll_obj) {
  var speed = 6;
  var diff = targetXPos - x;
  var steps = diff/(speed*speed);
  t += (t+steps)/diff;
  newX = (t==1) ? x+diff : x + (diff * (-Math.pow(2, -20 * t/1) + 1));
  if(t) {
    if(scroll_obj === window) {
      window.scrollTo(newX, 0);
    } else {
      scroll_obj.scrollLeft = newX;
    }
  }
  
  if(t >= 1 || lastT == t || !t) clearTimeout(timer);
  else timer=setTimeout(function() {
    doscroll_left(targetXPos,x,t,scroll_obj);
  },1);
  
  lastT = t;
  
  return false;
}

/**
 *  Legacy function to add a script into the head
 *  Used by tracemarks
 */
function addScript(script_file, id) {
  script_file = (script_file == "/_js/cargo.tracemarklet.js") ? "/_js/cargo.tracemarklet-api.js" : script_file;
  var scrpt=document.createElement('script');
    scrpt.setAttribute('type','text/javascript');
    scrpt.setAttribute('src',script_file);   
    if( id ) scrpt.setAttribute('id',id);   
  var hd=document.getElementsByTagName('head')[0];
    hd.appendChild(scrpt);
}

/**
 *  Legacy function for adding Facebook comments
 *
 */
/////////////////////////////////////////////////////////////////////////////////////////////////
// Facebook comments
function fbComments(variant, fbwidth, fbnum){
    addScript("http://connect.facebook.net/en_US/all.js#xfbml=1");
    var f_url =
        padding = "";
    var margin = "30px 0 30px 0";
    var colorscheme = (variant == "dark") ? "dark" : "light";

    fbwidth = (!fbwidth) ? 560 : fbwidth;
    fbnum = (!fbnum) ? 15 : fbnum;
    
    Cargo.Event.on("project_load_complete", function( pid ) { 
      fbCommentLoad(pid, variant, fbwidth, fbnum);
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Load FaceBook comments for non-feed designs
function fbCommentLoad(pid, variant, fbwidth, fbnum) {
  var margin = "30px 0 30px 0";
  var timeout = 500;
  var colorscheme = (variant == "dark") ? "dark" : "light";
  var position = "before";
  var element= $("directlink",Cargo.View.ProjectDetail.$el);

  if( !pid ) {
    // get the open project
    if( $("#current_open").length > 0 && $("#current_open").val() != "none") {
      pid = $("#current_open").val();
      
    } else {
      return false;
    }
  }

  // If you're on a project
  if(Cargo.Model.Project.GetType() == "project"){
    // Load the Facebook comments script again, for whatever reason(s)
    $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function() { 
      var f_url = Cargo.Model.Project.GetDirectLink();

      if(position == "after") {
        $(element).after('<div class="fb_comments" style="width: '+fbwidth+'; margin: '+margin+'; padding: '+padding+';"><fb:comments href="'+f_url+'" width="'+fbwidth+'" num_posts="'+fbnum+'" colorscheme="'+colorscheme+'"></fb:comments></div>');
      } else if(position == "inside") {
        $(element).append('<div class="fb_comments" style="width: '+fbwidth+'; margin: '+margin+'; padding: '+padding+';"><fb:comments href="'+f_url+'" width="'+fbwidth+'" num_posts="'+fbnum+'" colorscheme="'+colorscheme+'"></fb:comments></div>');
      } else {
        $(element).before('<div class="fb_comments" style="width: '+fbwidth+'; margin: '+margin+'; padding: '+padding+';"><fb:comments href="'+f_url+'" width="'+fbwidth+'" num_posts="'+fbnum+'" colorscheme="'+colorscheme+'"></fb:comments></div>');
      }
      
      // Force FB to re-parse the comments
      FB.XFBML.parse();
      
    });
  }
}

	
	Cargo.o.model.project = Backbone.Model.extend({
		GetId : function() {
			return this.get("id"); 
		},
		
		GetSiteId : function() {
			return this.get("site_id");
		},
		
		GetUrl : function() {
			return this.get("url"); 
		},
		
		GetProjectUrl : function() {
			return this.get("project_url");
		},
		
		GetDirectLink : function() {
			return this.get("direct_link");
		},
		
		GetType : function() {
			return (this.get("type") && this.get("id") != 0) ? this.get("type") : false; 
		},
		
		GetSetId : function() {
			return this.get("set_id"); 
		},

		GetSetName : function() {
			return this.get("set_name"); 
		},

		GetSetUrl : function() {
			return this.get("set_url"); 
		},

		GetSetCount : function() {
			return this.get("set_count"); 
		},

		GetSetStart : function() {
			return this.get("set_start"); 
		},

		GetSetEnd : function() {
			return this.get("set_end"); 
		},

		GetTitle : function() {
			return this.get("title"); 
		},

		GetTitleNoHtml : function() {
			return this.get("title_no_html"); 
		},

		GetShowTitle : function() {
			return this.get("show_title"); 
		},
		
		GetTags : function() {
			return this.get("tags");
		},
		
		GetDisplay : function() {
			return this.get("display");
		},
		
		GetExcerpt : function() {
			return this.get("excerpt");
		},
		
		GetContent : function() {
			return this.get("content");
		},

		GetContent2x : function() {
			return this.get("content_2x");
		},
		
		GetContentNoHtml : function() {
			return this.get("content_no_html");
		},

		GetContentPartialHtml : function() {
			return this.get("content_partial_html");
		},
		
		GetViews : function() {
			return this.get("views");
		},
		
		GetDate : function() {
			return this.get("date");
		},
		
		GetBgColor : function() {
			return (this.get("bgcolor") == "") ? false : "#"+this.get("bgcolor");
		},

		GetCommentCount : function() {
			return this.get("comment_count");
		},
		
		GetThumbUrl : function() {
			return this.get("thumb_url"); 
		},

		GetThumbUrl2x : function() {
			return this.get("thumb_url_2x"); 
		},
		
		GetThumbWidth : function() {
			return this.get("thumb_width");
		},
		
		GetThumbHeight : function() {
			return this.get("thumb_height");
		},
		
		GetDefaultThumbUrl : function() {
			return this.get("default_thumb_url");
		},

		GetDefaultThumb2xUrl : function() {
			return this.get("default_thumb_url_2x");
		},
		
		GetDefaultThumbWidth : function() {
			return this.get("default_thumb_width");
		},
		
		GetDefaultThumbHeight : function() {
			return this.get("default_thumb_height");
		},
		
		GetCustomThumbUrl : function() {
			return this.get("custom_thumb_url");
		},

		GetCustomThumb2xUrl : function() {
			return this.get("custom_thumb_url_2x");
		},
		
		GetCustomThumbWidth : function() {
			return this.get("custom_thumb_width");
		},
		
		GetCustomThumbHeight : function() {
			return this.get("custom_thumb_height");
		},
		
		GetImages : function() {
			return this.get("images");
		},

		initialize : function() {
			//Cargo.Core.log(this);
			
		},

		fetch : function(options) {
			if ( options.reset && $("script[data-set='ProjectDetail']").html() ) {
				this.set( $.parseJSON( $("script[data-set='ProjectDetail']").html() ), options );

			} else {
				Backbone.Model.prototype.fetch.apply(this, arguments);    
			}
		},

		/**
		 * Update the parent collection model on parse (save response)
		 */
		parse: function(resp, options) {
			var project_model = Cargo.Collection.Projects.findWhere( { project_url : this.GetProjectUrl() } );
			var page_model = Cargo.Collection.Pages.findWhere( { project_url : this.GetProjectUrl() } );
			var model = (page_model) ? page_model : project_model;
			if(model) model.set(resp);
			return resp;
		},

		url : function() {
			return Cargo.API.GetSingleProjectPath();
		}

	});

	

/**
 *	Default model for constructing display options
 *	Because these are nessesary for first load of project collection
 *	This data may be preloaded on the page. For this reason,
 *	we extend the fetch function to check to see if this is the case
 *	If it is not the case, then fetch from the API url
 *
 *	Usage:
 *	<script type="text/json" data-set="DisplayOptions">{options}</script>
 */
	
	Cargo.o.model.display_options = Backbone.Model.extend({
		
		fetch : function(options) {         
			if ( $("script[data-set='DisplayOptions']").html() ) {
				this.set( $.parseJSON( $("script[data-set='DisplayOptions']").html() ), options );

			} else {
				Backbone.Model.prototype.fetch.apply(this, arguments);    
			}
		},

		url : function() {
			return Cargo.API.GetDisplayOptionsPath();
		},

	
		GetUserId : function() {
			return this.get("user_id");
		},

		GetPaginationCount : function() {
			return this.get("pagination_count");
		},

		GetTotalProjects : function() {
			/* Get the total amount of projects, which may be filtered */
			var total = (Cargo.API.Config.filter_total) ? Math.floor(Cargo.API.Config.filter_total) : Math.floor(this.get("total_projects"));
			return total;
		},

		GetFollowLinkInNav : function() {
			return this.get("following_link_in_nav");
		},

		GetDisableProjectScroll : function() {
			return this.get("disable_project_scroll");
		},

		GetHeaderLinkToIndex : function() {
			return this.get("header_link_to_index");
		},

		GetHeader2x : function() {
			return this.get("header_2x");
		},

		GetTagsInThumb : function() {
			return this.get("tags_in_thumb");
		},

		GetTitleInThumb : function() {
			return this.get("title_in_thumb");
		},

		GetThumbSize : function() {
			return this.get("thumb_size");
		},

		GetThumbsBelowProjects : function() {
			return this.get("thumbs_below_projects");
		},

		GetThumbsBelowPages : function() {
			return this.get("thumbs_below_pages");
		},

		GetViewCountInProject : function() {
			return this.get("view_count_in_project");
		},

		GetTitleInProject : function() {
			return this.get("title_in_project");
		},

		GetFooterInProject : function() {
			return this.get("footer_in_project");
		},

		GetPagesInTextNav : function() {
			return this.get("pages_in_text_nav");
		},

		GetProjectsInTextNav : function() {
			return this.get("projects_in_text_nav");
		},

		GetUseSets : function() {
			return this.get("use_sets");
		},

		GetSetsOpenByDefault : function() {
			return this.get("sets_open_by_default");
		},

		GetSetsCanToggle : function() {
			return this.get("sets_can_toggle");
		},

		GetSetsOneAtATime : function() {
			return this.get("sets_one_at_a_time");
		},

		GetUseSetLinks : function() {
			return this.get("use_set_links");
		},

		GetSetLinksPosition : function() {
			return this.get("set_links_position");
		},

		GetRecentProjectAsStart : function() {
			return this.get("recent_project_as_start");
		},

		GetExcerptInThumb : function() {
			return this.get("excerpt_in_thumb");
		},

		GetLightboxView : function() {
			return this.get("lightbox_view");
		},

		GetImageWidth : function() {
			return this.get("image_width");
		},

		// Slideshows
		GetSlideTransition : function() {
			return this.get("slide_transition");
		},

		GetSlideTransitionDuration : function() {
			return this.get("slide_transition_duration");
		},

		GetSlideAutoPlay : function() {
			return this.get("slide_auto_play");
		},

		GetSlideTextNav : function() {
			return this.get("slide_text_nav");
		},

		GetSlideResponsive : function() {
			return this.get("slideshow_responsive");
		},

		GetSlideImagePosition : function() {
			return this.get("slide_image_position");
		},

		GetSlideNavPosition : function() {
			return this.get("slide_nav_position");
		},

		GetSlideThumbnails : function() {
			return this.get("slide_thumbnails");
		},

		GetSlideDefaultThumbs : function() {
			return this.get("slide_default_thumbs");
		},

		GetSlideToggleThumbLink : function() {
			return this.get("slide_toggle_thumb_link");
		},

		GetIndexRouteUrl : function() {
			return this.get("index_route_url");
		},

		GetIndexRouteName : function() {
			return this.get("index_route_name");
		},

		GetFeedRouteUrl : function() {
			return this.get("feed_route_url");
		},

		GetFeedRouteName : function() {
			return this.get("feed_route_name");
		},

		GetHomeRoute : function() {
			return this.get("home_route");
		}

		
	});
	


	
	Cargo.o.model.site = Backbone.Model.extend({
		
		fetch : function(options) {         
			if ( $("script[data-set='Site']").html() ) {
				this.set( $.parseJSON( $("script[data-set='Site']").html() ), options );

			} else {
				Backbone.Model.prototype.fetch.apply(this, arguments);    
			}
		},

		url : function() {
			var path = Cargo.API.GetSitePath();

			if( Cargo.API.Config.filter != "" ) {
				path += "?filter=" + encodeURIComponent(Cargo.API.Config.filter);
			}
			return path;
		},

		GetId : function() {
			return this.get("id");
		},

		GetDirectLink : function() {
			return this.get("direct_link");
		},

		GetDisplayUrl : function() {
			return this.get("display_url");
		},

		GetAssetPath : function(asset, id) {
			if(asset && id) {
				return this.get("asset_path") + "/" + asset + "?" + id;
			} else {
				return this.get("asset_path");
			}
		},

		GetWebsiteTitle : function() {
			return this.get("website_title");
		},

		GetMetaTags : function() {
			return this.get("meta_tags");
		},

		GetMetaDescription : function() {
			return this.get("meta_description");
		},

		GetMetaHead : function() {
			return this.get("meta_head");
		},

		GetStartProjectId : function() {
			return this.get("start_project_id");
		},

		GetThumbUrl : function() {
			return this.get("thumb_url");
		},

		GetCssUrl : function() {
			return this.get("css_url");
		},

		GetFaviconUrl : function() {
			return this.get("favicon_url");
		},

		GetHeaderUrl : function() {
			return this.get("header_url");
		},

		GetHeaderWidth : function() {
			return this.get("header_width");
		},

		GetHeaderHeight : function() {
			return this.get("header_height");
		},
		
		GetFilter : function() {
			return (this.get("filter")) ? this.get("filter") : Cargo.API.Config.filter;
		},

		GetIsEditor : function() {
			return this.get("is_editor");
		},

		GetUseHiRes : function() {
			return this.get("use_hi_res");
		},

		GetDisplayOption : function( which ) {
			if(typeof this.get("display_options") != "undefined" ) {
				return this.get("display_options")[which];	
			} else {
				return false;
			}
			
		},

		GetFileUrl : function( which ) {
			if(typeof this.get("files") != "undefined" ) {
				return this.get("files")[which];	
			} else {
				return false;
			}
			
		},

		GetCurrentSetKey : function() {
			return this.get("current_set_key");
		},

		GetResourceUrl : function() {
			return this.get("resource_url");
		},

		/**
		 *	Overwrite the parse function because the api
		 *	can not return the proper cookie value for editor
		 */
		parse : function (response) {
			if( !Cargo.Helper.IsAdminEdit() ) {
				response.is_editor = Cargo.Helper.GetIsEditor();
			}
			return response;
		}


	});
	

/**
 *	Default model for constructing the Rail content
 */
	
	Cargo.o.model.rail = Backbone.Model.extend({
		
		url : function() {
			return Cargo.API.GetRailPath();
		},

		GetTemplates : function() {
			return this.get('templates');
		},

		GetModels : function() {
			return this.get('models');
		},

		GetPopup : function() {
			return this.get('jdata')['popup'];
		}

		
	});
	


/**
 *	Default model for assets
 */
	
Cargo.o.model.asset = Backbone.Model.extend({
	
});
	


/**
 *	Default model for images
 */
	
Cargo.o.model.images = Backbone.Model.extend({
	
});
	



/**
 *	Default undefined model
 */
	
Cargo.o.model.undefined_default = Backbone.Model.extend({
	
});
	



	Cargo.o.collection.projects =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			return Cargo.API.GetProjectsPath();
		}		
		
	});



	Cargo.o.collection.pages =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			return Cargo.API.GetProjectsPath(null, null, 'page');
		}		
		
	});



	Cargo.o.collection.navigation =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			return Cargo.API.GetNavigationCargoPath();
		}
		
	});



	Cargo.o.collection.assets =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		fetch : function(options) {         
			if ( $("script[data-set='Assets']").html() ) {
				this.set( $.parseJSON( $("script[data-set='Assets']").html() ), options );

			}
		}
		
	});



	Cargo.o.collection.undefined_default =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			
		}		
		
	});



	Cargo.o.collection.sets =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			return Cargo.API.GetSetsPath(0, 9999);
		}		
		
	});



	Cargo.o.collection.images =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url		: function() {
			var offset = this.options.offset;
			var limit = this.options.limit;
			var sort = this.options.sort;
			return Cargo.API.GetImagesPath(offset, limit, sort);
		},

		fetch : function(options) {         
			this.options = options;
			Backbone.Model.prototype.fetch.apply(this, arguments);    
		}
		
	});



	Cargo.o.collection.search =  Backbone.Collection.extend({
		
		initialize : function() {
			
		},

		url	: function() {
			var term = (this.options && this.options.term) ? this.options.term : false;
			return Cargo.API.GetSearchPath(term);
		},

		fetch : function(options) {         
			this.options = options;
			Backbone.Model.prototype.fetch.apply(this, arguments);    
		}
		
	});


	Cargo.o.view.Autopaginate = Backbone.View.extend({
		
		initialize: function() {
			this.Data = {
				"defered_count"		: 0,			// count how many defered events have been fired
				"is_updating"		: false,		// are we currently waiting on ajax?
				"within_bounds"		: false,		// within the bounds of paginating?
				"preload_distance"	: 500,			// Distance before the end of the page to fire
				"model_count" 		: 0,			// How many models do we have
				"direction"			: 'vertical'	// Which direction to check distance - vertical || horizontal
			};

			var self = this;

			self.tallProjectFix = Cargo.Helper.IsFeedDesign() && $('[data-view="Autopaginate"]').length == 1;

			/* Set an event to wait for the model to change */
			this.listenTo(this.collection, "reset", this.reset);
			this.listenTo(this.collection, "add", this.add);

			/* Loop through the data attributes and update the defaults */
			$.each(this.$el.data(), function(i, v) {
			   self.Data[i] = v;
			});

			/* Set the element for the scroll container and the height continer */
			this.Data.scroll_el = (this.Data.container) ? $($("#"+this.Data.container).parents('div')[0]) : $(document);
			this.Data.size_el   = (this.Data.container) ? $("#"+this.Data.container) : $(document);

			this.Data.direction = ($(this.$el).data('direction')) ? $(this.$el).data('direction') : this.Data.direction;


			/* Bind the scroll */
			_.delay(function() {
				self.Data.scroll_el.bind("scroll", function(event) {
					_.delay(function() {  
						self.CheckForPagination();
					}, 100);
				});
			}, 200);

			/* Defer the toggle of the project until after the collection is reset */
			Cargo.Event.on("project_collection_reset", function( ) { 
				/* Tell the updater that we are done */
				self.Data.is_updating = false;

				/* Hide the spinner */
				self.$el.hide();

			});

			/* Defer the checking of the first load pagination until after collection and template */
			Cargo.Event.on("project_collection_reset template_loaded", function(template) {
				/* Check to see if we have enough page 
				 * height to fire pagination right now 
				 * but only do this on first load 
				 * and only after the project collection is reset
				 * and only after the thumbnail template has been loaded */
				if( template == "Thumbnail") {
					_.delay(function() { 
						self.CheckForPagination();
					}, 100);
				}
			});

			$(function(){
				self.last_project = $('.project_container').last();
				self.CheckForPagination();
			});
		},

		reset : function() {
			Cargo.Event.trigger("pagination_complete", Cargo.API.Config.current_page );
			this.last_project = $('.project_container').last();
		},

		add : function() {
			this.Data.model_count++;

			// Make sure we have added all the models before firing the complete event
			if(this.collection.length == this.Data.model_count) {
				Cargo.Event.trigger("pagination_complete", Cargo.API.Config.current_page );
				this.last_project = $('.project_container').last();

				/* Tell the updater that we are done */
				this.Data.is_updating = false;
			}
		},

		
		CheckForPagination : function() {
			if(this.Data.direction == "horizontal") {
				this.CheckPageWidth(); 
			} else {
				this.CheckPageHeight();
			}
		},
		
		/*
		 *	Checks if we are within bounds of paginating
		 */
		CheckPageHeight : function() {
			// Don't do this if we're editing a project
			if( Cargo.Helper.IsAdminEditProject() ) {
				// Do nothing
				return false;
			}

			var last_project_height = 0,
				window_height = $(window).height(),
				window_scroll = this.Data.scroll_el.scrollTop() + window_height,
				document_size = this.Data.size_el.height()-this.Data.preload_distance;

			if(this.last_project && this.last_project.length > 0 && this.tallProjectFix){
				last_project_height = this.last_project.height();
				if(last_project_height > window_height - 10) {
					document_size -= (last_project_height - window_height);
				}
			}

			if( window_scroll > document_size ) {
				this.Data.within_bounds = true;
			} else {
				this.Data.within_bounds = false;
			}
			
			/* Make sure there are more pages and the container is visible */
			if( 
				Cargo.Helper.GetTotalPages() > Cargo.API.Config.current_page &&
				(
					( typeof Cargo.View.Thumbnail != "undefined" && Cargo.View.Thumbnail.$el.is(":visible") ) ||
					typeof Cargo.View.Thumbnail == "undefined" 
				) &&
				!Cargo.Helper.IsSololink()

			) {
				if (this.Data.within_bounds && !this.Data.is_updating) {
					Cargo.Event.trigger("pagination_start");
					this.Data.is_updating 	= true;
					this.Data.within_bounds = false;
					this.$el.show();
					Cargo.View.Main.NextPage();
				}
			}
		
		},

		/*
		 *	Checks if we are within bounds of paginating
		 */
		CheckPageWidth : function() {
			// Don't do this if we're editing a project
			if( Cargo.Helper.IsAdminEditProject() ) {
				// Do nothing
				return false;
			}

			var last_project_width = 0,
				window_width = $(window).width(),
				window_scroll = this.Data.scroll_el.scrollLeft() + window_width,
				document_size = this.Data.size_el.width()-this.Data.preload_distance;

			if(this.last_project.length > 0 && this.tallProjectFix){
				last_project_width = this.last_project.width();
				if(last_project_width > window_width - 10) {
					document_size -= (last_project_width - window_width);
				}
			}

			if( window_scroll > document_size ) {
				this.Data.within_bounds = true;
			} else {
				this.Data.within_bounds = false;
			}

			/* Make sure there are more pages and the container is visible */
			if( 
				Cargo.Helper.GetTotalPages() > Cargo.API.Config.current_page &&
				(
					( typeof Cargo.View.Thumbnail != "undefined" && Cargo.View.Thumbnail.$el.is(":visible") ) ||
					typeof Cargo.View.Thumbnail == "undefined" 
				) &&
				!Cargo.Helper.IsSololink()

			) {
				if (this.Data.within_bounds && !this.Data.is_updating) {
					Cargo.Event.trigger("pagination_start");
					this.Data.is_updating 	= true;
					this.Data.within_bounds = false;
					this.$el.show();
					Cargo.View.Main.NextPage();
				}
			}
		
		}

	});

/**
 *	This view handles the main website's view
 *	It binds to the body element and is loaded only once on page load
 *	This is mostly to handle the global click events for history and close
 *	However, maybe it will handle other things as well
 *	If we would render the entire app from JS, then this would render the init design
 */

	Cargo.o.view.Main =  Backbone.View.extend({
			el: 'body',

			initialize: function() {
				// Set an event to wait for the model to change
				this.collection.bind("change", this.render, this);

				/*
				 *	If there is a custom HTML/CSS preview
				 */
				if( Cargo.API.Config.preview == "html" ) {
					this.WriteCustomHtmlPreview();
				} else if( Cargo.API.Config.preview == "css" ) {
					this.WriteCustomCSSPreview();
				}

				/*
				 *	Init the Rail and Following, but not in admin or mobile mode
				 */
				if( !Cargo.Helper.IsAdminEdit() && typeof Mobile != "object") {
					Cargo.View.Rail = new Cargo.o.view.Rail({ 
						el    		: "body",
						collection 	: Cargo.Model.Rail 
					});

					Cargo.View.Following = new Cargo.o.view.Following({ el : "body" });
				}

			},
			
			events: {
			    "click [rel='history']"			: "HistoryPush",
			    "click [rel='show_index']"		: "ShowIndex",
			    "click [rel='close_project']"	: "ShowIndex", // API 0.1 legacy support
			    "click [rel='show_home']"		: "ShowHome",
			    "click [rel='next_project']"	: "NextProject",
			    "click [rel='prev_project']"	: "PrevProject",
			    "click [rel='random_project']"	: "RandomProject",
			    "click [rel='next_page']" 		: "NextPage",
			    "click [rel='prev_page']" 		: "PrevPage"
			},

			/**
			 *	Site model has loaded, init from here
			 */
			render : function() {
				var model = this.collection;
			},
			
			/*
			 *	Pushes a history item onto the stack by navigating to 
			 *	the url found in the href property
			 *	Triggers the global event history add_history
			 *	Works with any tag
			 *	Usage:
			 *	<div data-href="/some/link" rel="history">Click me</div>
			 */
			HistoryPush : function( e, target ) {
				if( e ) {
					/* Remove default action */
					e.preventDefault();
					target = e.currentTarget;
				}

				/* Get the absolute anchor href */
				var href = ( $(target).attr("href") ) ? $(target).attr("href") : $(target).data("href");
				var id   = ( $(target).attr("data-id") ) ? $(target).attr("data-id") : $(target).data("id");

				/* ctrl+click */
				if (e.metaKey) {
					window.open( href );
				} else {
					/* Navigate to the new URL */
					Cargo.Event.trigger("add_history", href, id);
				}
			},

			/*
			 *	Closes an open project by navigating to the homepage 
			 *	Works with any tag
			 *	Usage:
			 *	<a href="#" rel="show_index">Close</a>
			 *	Or
			 *	Cargo.View.Main.ShowIndex();
			 */
			ShowIndex : function( e ) {
				if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}
				
				/* If this is a feed based design, then there will be an index_route
				 * if that is the case, go there */
				if( Cargo.Model.DisplayOptions.GetIndexRouteName() ) {
					Cargo.Helper.GoToUrl( Cargo.Model.DisplayOptions.GetIndexRouteUrl() );
					return;
				} 

				/* If this project is the start project, close passively
				 * Otherwise, close normally */
				if( Cargo.API.Config.start_project ) {
					Cargo.Event.trigger("add_history_passive", "" );

					Cargo.API.Config.start_project = null;
					
					/* Update the data model to remove the last project */
					Cargo.Model.Project.set( { id : 0, project_url : null } );


				} else {
					/* Navigate to the Home route */
					var home_route = ""; //(Cargo.API.Config.set) ? Cargo.API.Config.set : "";
					Cargo.Event.trigger("add_history", home_route );
				}

			},

			/**
			 * Closes an open project, navigates to the root
			 * and re-opens the start page
			 *	Usage:
			 *	<a href="#" rel="show_home">Home</a>
			 *	Or
			 *	Cargo.View.Main.ShowHome();
			 */
			ShowHome : function(e) {
				if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				/* If this is a feed based design, then there will be an index_route
				 * if that is the case, go there */
				if( Cargo.Model.DisplayOptions.GetIndexRouteName() ) {
					Cargo.Helper.GoToUrl( Cargo.Model.DisplayOptions.GetIndexRouteUrl() );
					return;
				} 

				/* If this project is the start project, close passively
				 * Otherwise, close normally */
				if( Cargo.API.Config.start_project ) {
					Cargo.Event.trigger("add_history_passive", "" );

					/*
					 *	Try and get the model from memory first
					 */
					var project_model = Cargo.Collection.Projects.findWhere( { id : Cargo.Helper.GetStartProjectId() } );
					var page_model = Cargo.Collection.Pages.findWhere( { id : Cargo.Helper.GetStartProjectId() } );
					var home_model = (typeof Persona.Model.HomeProject == "object") ? Persona.Model.HomeProject : false;
					var model = (page_model) ? page_model : (home_model) ? home_model : project_model;

					if(model) {
						Cargo.Model.Project.set( model.toJSON() );

					} else {
						// If there is no model, then load one async
						Cargo.Model.Project.fetch( { data : { pid : Cargo.Helper.GetStartProjectId() }} );
					}


				} else {
					/* Navigate to the Home route */
					var home_route = ""; //(Cargo.API.Config.set) ? Cargo.API.Config.set : "";
					Cargo.Event.trigger("add_history", home_route );
				}
			},

			/**
			 *	Next project
			 *	If we are on the last project of a page, go to the next page
			 *	If we are on the last project of the last page, go to page 1
			 *	Works with any tag
			 *	Usage:
			 *	<a href="#" rel="next_project">Next project</a>
			 *	Or
			 *	Cargo.View.Main.NextProject();
			 */
			 NextProject : function( e, dont_check ) {
			 	if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				/*
				 *	If the next project needs to paginated
				 *	then paginate and delay this method until after 
				 *	the collection resets itself
				 */
				if( Cargo.Helper.NextProjectNeedsToPaginate() && !dont_check ) {
					
					/* Delay this event, but only fire it once, so remove it too  
					 * Note: Stays above the Pagination because memory fires too quick */
					Cargo.Event.on("pagination_complete", function() { 
					   Cargo.View.Main.NextProject();
					   this.off("pagination_complete");
					});	

					if( Cargo.Helper.GetTotalPages() == Cargo.API.Config.current_page ) {
						if( Cargo.Helper.IsAutopaginate() ) {
							/* If we reached the end and it is autopaginated, go back to the start */
							this.NextProject(false, true);
						} else {
							/* If we are on the last page, go to first */
							Cargo.View.Main.GoToPage(1);
						}

					} else {
						/* Get the next page */
						Cargo.View.Main.NextPage();	
					}
					

				} else {
					/* Get the next purl */
					var purl = Cargo.Helper.GetNextProjectUrl();
					var href = "/" + purl;

					/* Navigate to the new route */
					if( Cargo.View.hasOwnProperty('ProjectDetail') ) {
						Cargo.Event.trigger("add_history", href);
					} else {
						document.location.href = Cargo.Helper.GetBaseUrl(true, true) + href;
					}

					/* Cargo events */
					Cargo.Event.trigger("next_project", Cargo.Helper.GetPidFromPurl(purl));	
				}
				
			 },

			 /**
			  *	Previous project
			  *	If we are on the first project of a page, go to the previous page
			  *	If we are on the first project of the first page, go to last page
			  *	Works with any tag
			  *	Usage:
			  *	<a href="#" rel="prev_project">Next project</a>
			  *	Or
			  *	Cargo.View.Main.PrevProject();
			  */
			 PrevProject : function( e, dont_check ) {
			 	if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				/*
				 *	If the next project needs to paginated
				 *	then paginate and delay this method until after 
				 *	the collection resets itself
				 */
				if( Cargo.Helper.PrevProjectNeedsToPaginate() && !dont_check && !Cargo.Helper.IsAutopaginate() ) {
					/* Delay this event, but only fire it once, so remove it too  
					 * Note: Stays above the Pagination because memory fires too quick */
					Cargo.Event.on("pagination_complete", function() { 
						/* Set value to true to not perform this check next time */
					   Cargo.View.Main.PrevProject( e, true );
					   this.off("pagination_complete");
					});	

					if( Cargo.API.Config.current_page == 1 ) {
						/* If we are on the first page, go to last */
						Cargo.View.Main.GoToPage( Cargo.Helper.GetTotalPages() );

					} else {
						/* Get the prev page */
						Cargo.View.Main.PrevPage();
					}


				} else {
					/* Get the prev purl */
					var purl = Cargo.Helper.GetPrevProjectUrl();
					var href = "/" + purl;
					
					/* Navigate to the new route */
					if( Cargo.View.hasOwnProperty('ProjectDetail') ) {
						Cargo.Event.trigger("add_history", href);
					} else {
						document.location.href = Cargo.Helper.GetBaseUrl(true, true) + href;
					}


					/* Cargo events */
					Cargo.Event.trigger("prev_project", Cargo.Helper.GetPidFromPurl(purl));
				}
			 },

			/**
			 *	Random project
			 *	Works with any tag
			 *	Usage:
			 *	<a href="#" rel="random_project">Random project</a>
			 *	Or
			 *	Cargo.View.Main.RandomProject();
			 */
			 RandomProject : function( e ) {
			 	if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				if( Cargo.View.hasOwnProperty('ProjectDetail') ) {
					Cargo.API.GetRandomProject();
					
				} else {
					// Get a random number
					var random = Math.floor(Math.random() * Cargo.Helper.GetTotalProjectsInMemory()) + 1;
					var obj = Cargo.Helper.GetProjectModelAndPageByKey(random);
					var cur_pid = Cargo.Helper.GetPidFromPurl( Cargo.Model.Project.GetProjectUrl() );

					// If there is a project open, make sure this is not that project
					if( obj.model && cur_pid == obj.model.get('id') ) {
						// Randomize agail
						random = Math.floor(Math.random()*Cargo.Helper.GetTotalProjectsInMemory());
						obj = Cargo.Helper.GetProjectModelAndPageByKey(random);
					}
					
					if( obj.model && obj.model.get('id') && cur_pid != obj.model.get('id') ) {
						document.location.href = obj.model.get('url');

						// Cargo events 
						Cargo.Event.trigger("random_project", obj.model.get('id') );
					
					} else {
						this.RandomProject();
					}
				}
			 },


			/**
			  *	Next page
			  *	Works with any tag
			  *	Usage:
			  *	<a href="#" rel="next_page">Next project</a>
			  *	Or
			  *	Cargo.View.Main.NextPage();
			  */
			 NextPage : function( e ) {
			 	if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				var self = this;

				/* Set the next page */
				var current_page 	= Cargo.API.Config.current_page;
				var next_page 		= current_page+1;

				/* Call the API for the next page */
				this.GoToPage(next_page);
				
				/* Cargo events */
				Cargo.Event.trigger("next_page", next_page );

			 },

			 /**
			  *	Previous page
			  *	Works with any tag
			  *	Usage:
			  *	<a href="#" rel="prev_page">Next project</a>
			  *	Or
			  *	Cargo.View.Main.PrevPage();
			  */
			 PrevPage : function( e ) {
			 	if( e ) {
					/* Remove default action (if there is one) */
					e.preventDefault();
				}

				/* Set the prev page */
				var current_page 	= Cargo.API.Config.current_page;
				var prev_page 		= current_page-1;
				
				/* Call the API for the next page */
				this.GoToPage(prev_page);
				
				/* Cargo events */
				Cargo.Event.trigger("prev_page", prev_page );
			 },

			/**
			 *	Get a specific page
			 */
			GoToPage : function( page ) {
				/* Show the loading animation */
				Cargo.Helper.ShowLoadingAnimation( );

			 	/* Set the prev page */
				var current_page 	= Cargo.API.Config.current_page;
				
				/* Call the API for the next page */
				Cargo.API.SetProjectsPage( page, current_page );
				Cargo.API.SetNavigationPage( page, current_page );
			},

			/**
			 *	This method grabs the custom HTML out of the
			 *	edit frame 
			 */
			WriteCustomHtmlPreview : function() {

				if(parent.editframe !== undefined){
					var customhtml = parent.editframe.document.getElementById("syntax_highlight").value;
					customhtml = Cargo.Core.Handlebars.RenderOnlyAssets(customhtml);
					$("customhtml").html(customhtml);
				} else if(typeof parent.Cargo !== "undefined" && parent.Cargo.hasOwnProperty('Editor')) {

					if(parent.Cargo.Editor.previewCustomHTML !== undefined) {

						var customhtml = parent.Cargo.Editor.previewCustomHTML;
						customhtml = Cargo.Core.Handlebars.RenderOnlyAssets(customhtml);
						$("customhtml").html(customhtml);
						
					}

				}

			},

			/**
			 *	This method grabs the CSS out of the
			 *	edit frame 
			 */
			WriteCustomCSSPreview : function() {
				var stylesheet = parent.editframe.document.getElementById("syntax_highlight").value;
				stylesheet = Cargo.Core.Handlebars.RenderOnlyAssets(stylesheet);
				$("body").append('<style>'+stylesheet+'</style>');
				$("head link[rel='stylesheet']").remove();
			},

			/*
			 *	For ajax history, set the title of the page
			 */
			SetWindowTitle : function(is_unload) {
				if(!is_unload) {
					if(Cargo.Model.Project.GetTitleNoHtml()) {
						document.title = Cargo.Model.Project.GetTitleNoHtml() + " - " + Cargo.Model.Site.GetWebsiteTitle();
					}
				
				} else {
					document.title = Cargo.Model.Site.GetWebsiteTitle();	
				}
			},

			/*
			 *	For ajax history, set the title of the page
			 */
			SetDataType : function(type) {
				this.$el.attr("data-pagetype", type);
				if(type) this.$el.addClass("open");
				else this.$el.removeClass("open");
			},

			/**
			 *	Set a class for the start project, if this is one
			 *	Is called from the router when we find out it is the home route
			 *	and this is a start project
			 */
			SetStartProjectClass : function() {
				if( Cargo.API.Config.start_project ) {
					this.$el.addClass('start_project');
				}
			},

			/**
			 *	This method is called every project open
			 */	
			RemoveStartProjectClass : function() {
				this.$el.removeClass('start_project');
			}
			
		});




/**
 *	This Feed view is here to kick ass and chew bubblegum. Let's hope it's not out of bubble gum.
 *
 */

	Cargo.o.view.Feed = Backbone.View.extend({
			
		initialize: function(options) {

			var self = this;

			this.options = options;
			this.initialized = false;

			if( typeof this.collection == "object" ) {

				this.listenTo(this.collection, "add", this.render);
				this.listenTo(this.collection, "change", this.render);
				this.listenTo(this.collection, 'reset', this.reset);

			}

			Cargo.Event.on('first_project_collection_reset', function(){
				self.initialized = true;
			});

		},

		render : function(model) {

			/* Get the template for this view (Prevents first load render) */
			var template 	= Cargo.Template.Get('Feed'),
				pid 		= (model.get('id') !== undefined ? model.get('id') : false),
				projectContainer = $("[data-id='" + pid + "']", this.$el);

			/*
			 *	If a template exists, render it
			 */

			if( template && this.initialized === true) {
				
				/* Render the template and get the markup */
				var data_model = Cargo.API.GetDataPackage( 'projects', model.toJSON() ),
					markup = Cargo.Core.Handlebars.Render( template, data_model);

				if( projectContainer.length > 0 ){
					
					// update project
					projectContainer[0].outerHTML = markup;

				} else {

					// create new project
					this.$el.append(markup);

				}

				// setting outerHTML loses the reference & 
				// creating a new project requires looking up the new el too.
				projectContainer = $("[data-id='" + pid + "']", this.$el);

			}

			this.markNodesAsOriginal(projectContainer, pid);

		},

		reset : function() {
			
			/* Make a reference to self */
			var self 		= this;

			/* Get the template for this view (Prevents first load render) */
			var template 	= Cargo.Template.Get('Feed');

			/*
			 *	If a template exists, render it
			 */
			if( template ) {
				
				/* Create a package of data for the render */
				var data_model = Cargo.API.GetDataPackage( 'projects', this.collection.toJSON() );

				/* Render the template and get the markup */
				var markup = Cargo.Core.Handlebars.Render( template, data_model );

				/* Empty the container */
				this.$el.empty();
				this.$el.append( markup );

				var i, 
					pid;

				for(i = 0; i < data_model.projects.length; i++){
					
					pid = data_model.projects[i].id;
					this.markNodesAsOriginal($("[data-id='" + pid + "']", this.$el), pid);

				}
			} // end template

		},

		markNodesAsOriginal: function(projectContainer, pid){

			var projectContent = projectContainer.find('projectcontent')[0];

			if(projectContent !== undefined){

				if(Node.prototype.hasOwnProperty('setSaveable')){
					this.getAllDescendants(projectContent, function(node){
						node.setSaveable(true);
					});
				}

				var parent = projectContent.parentNode;

				// fyi: ce = cargo editor
				parent.setAttribute('data-ce-host', 'true');
				parent.setAttribute('data-ce-model-id', pid);

				while (projectContent.childNodes.length > 0) {
					parent.insertBefore(projectContent.childNodes[0], projectContent);
				}

				parent.removeChild(projectContent);

			}

		},

		getAllDescendants: function(node, callback) {

			// recursively finds all childnodes and fires a callback for every node found
			for (var i = 0; i < node.childNodes.length; i++) {

				var child = node.childNodes[i],
					result = callback(child);

				if(result === false){
					return false;
				}

				// if "continue" is being returned from the callback we don't go down
				// the subtree of the current child.
				if(result !== "continue"){
					// recursively go down the tree.
					this.getAllDescendants(child, callback);
				}

			}

		}

	});

	Cargo.o.view.ProjectDetail = Backbone.View.extend({
			el: '#maincontainer',

			initialize: function() {
				this.Data = {
					"total_tries" : 0,
					"max_tries" : 5,
					"first_load" : true
				};

				// Set an event to wait for the model to change
				//this.collection.bind("empty", this.CloseProject, this);

				// Set an event to wait for the model to change
				this.collection.bind("change", this.render, this);

				var model = this.collection,
					pid   = (model && model.GetId()) ? model.GetId() : false;

				this.markNodesAsOriginal(pid);

				/*
				 *	If we are editing a project in the admin
				 */
				// if( Cargo.API.Config.adminedit ) {
				// 	this.AdminEditProject();
				// }

			},

			render : function(e) {

				if(this.preventRender === true) {
					console.log('Prevented project render');
					return;
				}

				// Set the model for shorthand
				var model = this.collection,
					_self = this;

				/* If there is no model, and no model.id, close the project */
				if( model && !model.GetId() ) {
					this.CloseProject();
					
					/* Show the loading animations */
					Cargo.Helper.HideLoadingAnimation();

					return;
				}

				/* Make sure we have a model */
				else if( model ) {
					var self 		= this;
					var pid			= (model && model.GetId()) ? model.GetId() : false;
					var template 	= Cargo.Template.Get( "ProjectDetail" );

					this.Data.pid = pid;

					/*
					 *	Probably this is being called before the template has been loaded
					 *	set a timeout and recall this method when the template is loaded
					 *	However, there might be something really wrong here, so keep track
					 *	of how many times we try. If it is too many, reload the whole page
					 *	at the direct link
					 */
					if( !template ) {
						if( Cargo.View.ProjectDetail.Data.total_tries >= Cargo.View.ProjectDetail.Data.max_tries ) {
							document.location.href = model.GetDirectLink();
						
						} else {
							setTimeout(function() {
								Cargo.View.ProjectDetail.Data.total_tries++;
								Cargo.View.ProjectDetail.render();
							},100);

						}
						return false;
					}
					
					/* Create a json object for the model wrapped in the project label */
					var data_model = Cargo.API.GetDataPackage( "project", model.toJSON() );
					
					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Wait for the deferred project transition event to complete */
					$.when( Cargo.Event.ShowProjectTransition(pid, markup, model) ).then(function() {
						/* Write the content */
						self.$el.html( markup ).show();	

						_self.markNodesAsOriginal(pid);

						/* Fire the Cargo event on complete */
						Cargo.Event.trigger("project_load_complete", pid);

						/* Increment the view count */
						self.IncrementView();

						/* Reset the total tries count */
						Cargo.View.ProjectDetail.Data.total_tries = 0;

						self.Data.first_load = false;
					});

				}

			},

			/**
			 *	Remove the main view
			 */
			CloseProject : function() {
				// Set the model for shorthand
				var self = this;
				var model = this.collection;

				// On first load, do not use transitions
				if(this.Data.first_load === true) {
					this.DoCloseActions(this.Data.pid);
				} else {
					/* Wait for the deferred project transition event to complete */
					$.when( Cargo.Event.ShowIndexTransition(this.Data.pid, model) ).then(function() {
						self.DoCloseActions(self.Data.pid);
					});
				}
				
			},

			/**
			 * Do the actions to actually close the project
			 * This is offloaded so there is a way of bypassing the transition deferment 
			 * @param {Number} pid Project ID
			 */
			DoCloseActions: function(pid) {
				/* Before close events */
				Cargo.Event.trigger("show_index_start", pid );  

				this.$el.empty().hide(0);
				
				/* After close events */
				Cargo.Event.trigger("show_index_complete", pid );

				this.Data.first_load = false;
			},


			/**
			 *	This is what happens on a permalink
			 */
			Permalink : function(purl) {
				/*
				 *	If this is an old browser #link, do a different permalink
				 */
				if(Cargo.Helper.isOldIE()) {
					this.IePermalink(purl);
				} else {
					this.el.style.display = "block";
					
					Cargo.Event.trigger("direct_link_loaded", Cargo.Model.Project.GetId(), location.pathname); 
					Cargo.Event.trigger("project_load_complete", Cargo.Model.Project.GetId());
				}

				// Cargo.API.Config.is_direct_link = false;

				this.Data.first_load = false;
			},

			/**
			 *	When an old browser loads a permalink, 
			 *	it comes in the form or #Project and so the data
			 *	is not yet loaded because PHP does not know about it
			 *	So we need to load the data
			 */
			IePermalink : function(purl) {
				/*
				 *	Not sure why, but this has to sit in a timeout
				 */
				setTimeout(function() {					
					/*
					 *	Get and set the new single project
					 *	This will trigger an event that will automatically
					 *	update the view
					 */
					Cargo.API.GetSingleProject( purl );

				}, 500);
			},
			
			/**
			 *	Change the background color based on project model
			 *	This is called from the projectloadcomplete event
			 * 	Inject the project detail element with a style tag
			 *	This is done because when the element is removed on close
			 *	the style tag will go with it. So we don't need to remember
			 *	states
			 */
			ChangeBgColorFromModel : function() {
				var model = this.collection;

				if( model && !model.GetId() ) {
					return;

				} else if( model.GetBgColor() ) {
					var tag = '<style id="site_bg_color"> body { background : ' + model.GetBgColor() + ' } </style>';
					this.$el.append(tag);
				}
			},

			/**
			 *	This method removes all content but the project detail
			 *	It is for when editing a project in the admin
			 */
			AdminEditProject : function() {
				// Find any object with the adminedit flag and include that
				// var options = $("[data-options]").clone();
				// $("body").css("margin", "35px");
				// $("body").html(this.$el).append(options);

				// Cargo.Event.trigger("admin_edit_load_complete");
			},

			/**
			 * This method is triggered by the admin editor
			 * It expects project content to be passed to it
			 */
			SaveContent : function(content) {
				// Set the local content
				var model = this.collection;
				model.set('content', content, { silent : true });

				var collection = null;

				// Get the right collection
				if(model.get('type') == "page") {
					collection = Cargo.Collection.Pages;
				} else {
					collection = Cargo.Collection.Projects;
				}

				// Update the right model in the collection
				var collection_model = collection.where({ id : model.get('id') })[0];

				if(collection_model) {
					collection_model.set('content', content, { silent : true });
				}

			},

			/**
			 *	Increment the view count on project open
			 */
			IncrementView : function() {
				var self = this;

				/* Put a timeout on this so that the browser can do render
				 * before it has to do this ajax
				 */

				setTimeout(function() {
					if( self.collection.GetId() != "none" ) {
						$.post('/dispatch/project/addview', { pid: self.collection.GetId() });
					}
				}, 500);
			},

			markNodesAsOriginal: function(pid){

				var projectContent = this.$el.find('projectcontent')[0];

				if(projectContent !== undefined){

						if(Node.prototype.hasOwnProperty('setSaveable')){
							this.getAllDescendants(projectContent, function(node){
								node.setSaveable(true);
							});
						}

						var parent = projectContent.parentNode;

						// fyi: ce = cargo editor
						parent.setAttribute('data-ce-host', 'true');
						parent.setAttribute('data-ce-model-id', pid);

						while (projectContent.childNodes.length > 0) {
							parent.insertBefore(projectContent.childNodes[0], projectContent);
						}

						parent.removeChild(projectContent);
				}

			},

			getAllDescendants: function(node, callback) {

				// recursively finds all childnodes and fires a callback for every node found
				for (var i = 0; i < node.childNodes.length; i++) {

					var child = node.childNodes[i],
						result = callback(child);

					if(result === false){
						return false;
					}

					// if "continue" is being returned from the callback we don't go down
					// the subtree of the current child.
					if(result !== "continue"){
						// recursively go down the tree.
						this.getAllDescendants(child, callback);
					}

				}

			}
	});




	Cargo.o.view.Pagination = Backbone.View.extend({
			initialize: function() {

				/* Defer the toggle of the project until after the collection is reset */
				Cargo.Event.on("project_collection_reset", function( ) { 
					Cargo.View.Pagination.ChangePage( Cargo.API.Config.current_page );
				});

			},

			/*
			 *	Receives a model input (probably from the ChangePage method)
			 *	Renders the template
			 */
			render : function( model ) {
				
				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Pagination");

				/* Only render if we found a template */
				if( template ) {
					
					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, model );

					this.$el.html( markup ); //.show();
					
				}

				/* Cargo event */
				Cargo.Event.trigger("pagination_complete", Cargo.API.Config.current_page );
			},

			/**
			 *	Handle a page change
			 *
			 */
			ChangePage : function( next_page ) {
				var total = Cargo.Helper.GetTotalPages();

				Cargo.Helper.ShowLoadingAnimation( );

				/*
				 *	Determine what type of pagination message to show
				 */
				// If there is only one page, don't show anything
				if( next_page == 1 && total == 1) {
					pagination = "";
				} 
				// If we are on the first page and more then one page
				else if(next_page == 1 && total > 1) {
					pagination = {
						"next_page" : { 
							"current" : next_page, 
							"total" : total 
						}
					};
				}
				// If we not on the last page
				else if( next_page == total ) {
					pagination = {
						"prev_page" : { 
							"current" : next_page, 
							"total" : total 
						}
					};
				}
				// If we are past the first page, before the last page
				else if( next_page > 1 && next_page < total ) {
					pagination = {
						"next_prev_page" : { 
							"current" : next_page, 
							"total" : total 
						}
					};
				}

				
				this.render(pagination);
			}


		});



	Cargo.o.view.Thumbnail = Backbone.View.extend({
			
			initialize: function() {
				this.Data = {
					/* How many models do we have */
					model_count : 0
				};

				/* Set an event to wait for the model to change */
				this.listenTo(this.collection, "reset", this.render);
				this.listenTo(this.collection, "add", this.add);
			},

			/**
			 *	This method will re-render the entire contents of the container
			 *	this is meant for replacing all content in a standard pagination
			 */
			render : function( ) {

				/* Make a reference to self */
				var self 		= this;

				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Thumbnail");

				/*
				 *	If a template exists, render it
				 */
				if( template ) {
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( "projects", this.collection.toJSON() );
					
					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Empty the container */
					this.$el.empty();
					this.$el.append( markup );

					Cargo.Event.trigger("project_collection_reset");
				} 

			},

			/**
			 *	The add event is for adding a single item into the collection
			 *	this is intended for autopagination
			 */
			add : function( model ) {
				var self = this;
				
				/* Count how many models we have for autopagination */
				this.Data.model_count++;

				/* Get the template for this view  */
				var template 	= Cargo.Template.Get("Thumbnail");

				var in_thumb = ($("[href='"+model.get('url')+"']", self.$el).length > 0);
				var in_data  = ($("[data-id='"+model.get('id')+"']", self.$el).length > 0);

				/* Verify that this model is not already onscreen */
				if( template && !in_thumb && !in_data ) {
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( "projects", model.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Check if this is in a set and needs to be added to one */
					if(
						Cargo.Model.DisplayOptions.GetUseSets() && 
						model.get("set_id") != 0 &&
						$("[data-setid='"+model.get("set_id")+"']", self.$el).length > 0
					) {
						$("[data-setid='"+model.get("set_id")+"']", self.$el).append( markup );
					}
					/* Prepend this to the autopagination handle */
					else {
						this.$el.append( markup );
					}
				}

				/* Only fire this if the Pagination view is not loaded to prevent double calls 
				 * and when the amount of projects on screen is the same as in the collection
				 */
				if( !Cargo.View.Pagination && this.collection.length == this.Data.model_count) {
					Cargo.Event.trigger("project_collection_reset"); 	
				}
			},

			/**
			 *	Add an active state to the navigation
			 *	remove old active states first
			 */
			AddActive : function(pid) {
				var self = this;
				if( !pid ) {
					pid = Cargo.Model.Project.GetId();
				}
				this.RemoveActive();
				$("[data-id='"+pid+"']", self.$el).addClass("active");
			},

			/**
			 *	Remove active state to the navigation
			 */
			RemoveActive : function() {
				var self = this;
				$(".active", self.$el).removeClass("active");
			},

			/**
			 *	Checks the display options for hidden thumbs below projects and/or pages
			 *	and if it is set, then hide them
			 */
			CheckAndHideThumbs : function() {
				var type = Cargo.Helper.GetCurrentPageType(); 
				if( type == "project" && !Cargo.Model.DisplayOptions.GetThumbsBelowProjects() ) {
					this.$el.hide();

				} else if( type == "page" && !Cargo.Model.DisplayOptions.GetThumbsBelowPages() ) {
					this.$el.hide();

				} else {
					this.ShowThumbs();
				}
			},

			/**
			 *	Show the thumbnails again
			 */
			ShowThumbs : function() {
				this.$el.show();
			}
	});

	Cargo.o.view.Navigation = Backbone.View.extend({
			
			Data : {
				first_load_complete : false
			},

			initialize: function() {
				/* Set an event to wait for the model to change */
				this.listenTo(this.collection, "reset", this.render);
				this.listenTo(this.collection, "change", this.render);
				this.listenTo(this.collection, "add", this.add);

				Cargo.Event.on('first_navigation_collection_reset', function() { 
					Cargo.View.Navigation.Data.first_load_complete = true;
				});
			},

			events: {
			    "click .set_link > a[href='#']"	: "setClick"
			},

			/**
			 *	This method will re-render the entire contents of the container
			 *	this is meant for replacing all content in a standard pagination
			 */
			render : function( ) {
				
				/* Make a reference to self */
				var self 		= this;

				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Navigation");

				/*
				 *	If a template exists, render it
				 */
				if( template ) {
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( "navigation", this.collection.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Empty the container */
					this.$el.empty();
					this.$el.append( markup );
					
				}

				Cargo.Event.trigger("navigation_reset");

			},

			/**
			 *	The add event is for adding a single item into the collection
			 *	this is intended for autopagination
			 */
			add : function( model ) {
				var self = this;
				
				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Navigation");

				/* Verify that this model is not already onscreen */
				if( 
					this.Data.first_load_complete && 
					$("[href='"+model.get('url')+"']", self.$el).length == 0 &&
					$("[id$='"+model.get('id')+"']", self.$el).length == 0
				) {
					
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( "navigation", model.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Check if this is in a set and needs to be added to one */
					if(
						Cargo.Model.DisplayOptions.GetUseSets() && 
						model.get("set_id") != 0 &&
						$("[data-setid='"+model.get("set_id")+"']", self.$el).length > 0
					) {
						$("[data-setid='"+model.get("set_id")+"']", self.$el).append( markup );
					}
					/* Prepend this to the autopagination handle */
					else {
						this.$el.append( markup );
					}
				}
			},

			setClick : function(e) {
				
				if( e ) {
					/* Remove default action */
					e.preventDefault();

					if(Cargo.Model.DisplayOptions.GetSetsCanToggle()){
						var set = $(e.currentTarget).closest('li.set_link');
						var nav = this.el;

						if(set.hasClass('open')){
							set.removeClass('open').addClass('closed');
						} else if(set.hasClass('closed')){
							if(Cargo.Model.DisplayOptions.GetSetsOneAtATime()){
								$(nav).find('li.set_link').removeClass('open').addClass('closed');
							}
							set.removeClass('closed').addClass('open');
						} else {
							// assume it's open
							set.addClass('closed');
						}

						Cargo.Event.trigger("navigation_set_toggle");
					}
				}
			},


			/**
			 *	Add an active state to the navigation
			 *	remove old active states first
			 */
			AddActive : function(pid) {
				var self = this;
				if( !pid ) {
					pid = Cargo.Model.Project.GetId();
				}
				this.RemoveActive();
				$("[data-id='"+pid+"']", self.$el).addClass("active");
			},

			/**
			 *	Remove active state to the navigation
			 */
			RemoveActive : function() {
				var self = this;
				$(".active", self.$el).removeClass("active");
			},

			/**
			 *	Add an active state to the set
			 */
			AddSetActive : function() {
				var self = this;
				var set_id = Cargo.API.Config.set_id ? Cargo.API.Config.set_id : Cargo.Model.Project.GetSetId();
				if( set_id ) {
					$("[data-id='"+set_id+"']", self.$el).addClass("active");
				}
			},

			/**
			 *	Add an active state to the set
			 */
			RemoveSetActive : function() {
				var self = this;
				var set_id = Cargo.API.Config.set_id ? Cargo.API.Config.set_id : Cargo.Model.Project.GetSetId();
				if( set_id ) {
					$("[data-id='"+set_id+"']", self.$el).removeClass("active");
				}
			}
	});


	Cargo.o.view.Freshbox = Backbone.View.extend({

		events: {
			"click #fullscreen"			: "InitFullscreen",
			"click #fullscreen_prev"	: "Prev",
			"click #fullscreen_next"	: "Next",
			"click #fullscreen_close" 	: "Close",
			"click #fullscreen_zoom" 	: function(e){
				this.toggleZoom();
				this.Data.zoomEnabled =! this.Data.zoomEnabled;
				return false;
			},
			"click #freshbox"			: "Close",
			"click img"					: "LightboxClick",
			"mouseover img" 			: "LightboxHover"
		},

		prevent_smart_image_picking: false,

		initialize: function() {

			Cargo.Event.on('lightbox-init', function(){

				this.InitKeyboardNav();

				if(this.isFullscreen) {
					Cargo.Event.trigger("fullscreen_open");
				} else {
					Cargo.Event.trigger("lightbox_open");
				}

			}, this);

			Cargo.Event.on('lightbox-destroy', function(){

				this.DestroyKeyboardNav();
				
				Cargo.Event.trigger("fullscreen_destroy_hotkeys");

				if(this.isFullscreen) {
					Cargo.Event.trigger("fullscreen_close");
				} else {
					Cargo.Event.trigger("lightbox_close");
				}

			}, this);

			Cargo.Event.trigger('fullscreen-initialized', this);

		},

		/**
		 *	Write out the freshbox element to the page
		 *	Uses the template that was already loaded
		 */
		render : function() {
			
		},

		/**
		 * Fullscreen
		 *	Called from ProjectDetail
		 *	Opened by clicking the fulllscreen button
		 *	Opens images fullscreen via HTML5
		 */
		InitFullscreen : function( e ) {

			if( e ) {
				e.preventDefault();
				this.clicked_img = $(e.currentTarget);
			}

			this.isFullscreen = true;

			this.InitSlideshow();

			/* Remove default action */
			/*if( e ) e.preventDefault(); 

			this.clicked_img = $(e.currentTarget);

			this.InitSlideshow();

			// Hide until open if not IE or iOS or an old browser
			if( ! Cargo.Helper.isIE() && (! Cargo.Helper.isIOS() || ! Cargo.Helper.AllowsFullScreen()) ) {
				$("#freshbox").css("visibility", "hidden");
			}

			this.OpenFullscreen();

			this.Next();*/

		},

		/**
		 *	Lightbox view
		 *	Opened by clicking on an img tag inside the content
		 */
		LightboxClick : function( e ) {

			this.clicked_img = $(e.currentTarget);

			/* Don't allow this behavior on slideshow thumbs */
			if( $(this.clicked_img).closest('.slideshow_thumbnails').length > 0 ) {
				return false;
			}

			/* Always verify that we want the lightbox */
			if( Cargo.Model.DisplayOptions.GetLightboxView() ) {
				/* Verify there is a larger version available (and is a Cargo image) */
				if( typeof $(this.clicked_img).attr("src_o") != "undefined" ) {
					
					if( $(this.clicked_img).parent("a").length == 0 ) {
						/* Remove default action */
						if( e ) e.preventDefault(); 
						
						this.isFullscreen = false;

						this.InitSlideshow(e.currentTarget);

						var self = this;

						/* Set the first image to be the clicked image 
						 * by looping through all images and finding a match
						 * Any image that is not matched, gets moved to the back of the stack */
						$("#fullscreen_imgs img").each(function() {
							if( $(this).attr("src_o") == $(e.currentTarget).attr("src_o") ) {
								/* Show the first image by going "next" */
								self.Next();
								return false;

							} else {
								/* This is not it, so progress to the next frame */
								self.Next();
							}
							
						});

						Cargo.Event.trigger("lightbox_open");

					}
				}
			}
			
		},

		/**
		 *	Handles the hover over images for the lightbox
		 *	Used the backbone event
		 */
		LightboxHover : function( e ) {
			/* Don't allow this behavior on slideshow thumbs */
			if( $(e.currentTarget).closest('.slideshow_thumbnails').length > 0 || !$(e.currentTarget).attr('src_o') ) {
				return false;
			}
			
			/* Always verify that we want the lightbox */
			if( Cargo.Model.DisplayOptions.GetLightboxView() ) {
				/* Verify there is a larger version available (and is a Cargo image) */
				if( typeof $(e.currentTarget).attr("src_o") != "undefined" ) {
					/* Make sure the is no parent <a> */
					if( $(e.currentTarget).parent("a").length == 0 ) {
						/* Make the hover */
						if($(e.currentTarget).parent("#freshbox").length == 0) {
							/* Normal project view */
							$(e.currentTarget).css("cursor", function() {
								if ($.browser.mozilla) {
									return '-moz-zoom-in';
								} else if(window.navigator.userAgent.indexOf("Edge") > -1) {
									return 'zoom-in'; 
								} else if ($.browser.webkit) {
									return '-webkit-zoom-in';
								} else {
									return 'pointer'; 
								}
							});
						} else {

							$(e.currentTarget).css("cursor", 'pointer');

						}
					}
				}
			}
		},

		/**
		 *	Starts the slideshow inside of the freshbox
		 *	by rendering the freshbox with the current model
		 *	Called by both lightbox click and fullscreen click
		 */
		InitSlideshow : function(clicked_image) {

			var active_container, fullscreenImages, node;

			if(Cargo.View.hasOwnProperty('ProjectDetail')){
				// if we're in a project
				active_container = Cargo.View.ProjectDetail.$el;
			} else {
				// if we're not in a project (index on feed based designs)
				// check if in slideshow
				var slideshowParent = this.clicked_img.closest('.slideshow');

				if(slideshowParent.length > 0){
					active_container = slideshowParent.closest('[data-id]:not(.slideshow)');
				} else {
					active_container = this.clicked_img.closest('[data-id]');
				}
			}

			fullscreenImages = [];

			$("img", active_container).each(function() {
				// If it's a Cargo uploaded image
				if ( $(this).is("[src_o]") && $(this).closest('.slideshow_thumbnails').length === 0 ) {
					
					fullscreenImages.push(this);

				}
			});


			if(clicked_image === undefined && this.prevent_smart_image_picking !== true) {

				var halfScreenHeight = window.innerHeight / 2,
					smallestOffset = 9e9;

				_.each(fullscreenImages, function(img){

					var rect = img.getBoundingClientRect(),
						imgCenter = rect.top + (rect.bottom - rect.top) / 2,
						imgCenterOffset = Math.abs(imgCenter - halfScreenHeight);

					if(rect.width !== 0 && imgCenterOffset < smallestOffset) {
						clicked_image = img;
						smallestOffset = imgCenterOffset;
					}

				});

			}

			if(fullscreenImages.length > 0) {
				var options = {};

				if(this.isFullscreen) {
					options.showAnimationDuration = 0;
				}

				var gallery = lightbox.openImageArray(fullscreenImages, clicked_image, options);

				if(gallery !== undefined && this.isFullscreen) {
					
					gallery.ui.toggleFullscreen();
					
				}
			}


		},

		Remove : function() {
			// Remove the freshbox
			$("#freshbox").remove();
			$("#fullscreen_imgs").remove();

		},

		noop: function(){},

		InitKeyboardNav : function() {

			this.DestroyKeyboardNav();

			Cargo.Core.KeyboardShortcut.Add("Up", 38, this.noop);  
			Cargo.Core.KeyboardShortcut.Add("Down", 36, this.noop);
			Cargo.Core.KeyboardShortcut.Add("Left", 37, this.noop);
			Cargo.Core.KeyboardShortcut.Add("Right", 39, this.noop);
			Cargo.Core.KeyboardShortcut.Add("Esc",  2, this.noop);

		},

		DestroyKeyboardNav : function() {
			Cargo.Core.KeyboardShortcut.Remove("Up");
			Cargo.Core.KeyboardShortcut.Remove("Down"); 
			Cargo.Core.KeyboardShortcut.Remove("Left"); 
			Cargo.Core.KeyboardShortcut.Remove("Right"); 
			Cargo.Core.KeyboardShortcut.Remove("Esc");
		}

	});

/**
 *	This is a dummy default view
 *	The purpose of this is to bind to a model / collection and 
 *	This will be loaded by the template loader if there is no view
 *	already. The reason this may happen is a user adds date-view="something"
 *	But did not create a view for it. In this case, use this default view
 *	Which simply renders on reset
 */
	Cargo.o.view.Default = Backbone.View.extend({
			
			initialize: function(options) {
				this.options = options;

				if( typeof this.collection == "object" ) {
					/* Set an event to wait for the model to change */
					this.listenTo(this.collection, "reset", this.render);
					this.listenTo(this.collection, "add", this.add);
				}
			},

			render : function( ) {
				
				/* Make a reference to self */
				var self 		= this;

				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get(this.options.template);

				/*
				 *	If a template exists, render it
				 */
				if( template ) {
					
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( this.options.datasetname.toLowerCase(), this.collection.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Empty the container */
					this.$el.empty();
					this.$el.append( markup );

				} // end template


			},

			/**
			 *	The add event is for adding a single item into the collection
			 *	this is intended for autopagination
			 */
			add : function( model ) {
				/* Get the template for this view */
				var template 	= Cargo.Template.Get(this.options.template);
				var self = this;
				var in_thumb = ($("[href='"+model.get('url')+"']", self.$el).length > 0);
				var in_data  = ($("[data-id='"+model.get('id')+"']", self.$el).length > 0);

				/* Verify that this model is not already onscreen */
				if( template && !in_thumb && !in_data ) {
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( this.options.datasetname.toLowerCase(), model.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Prepend this to the autopagination handle */
					this.$el.append( markup );
				}
			}
	});


	Cargo.o.view.Rail = Backbone.View.extend({
		
		initialize: function() {
			/*
			 *	Only do this when not in the admin
			 */
			if( !Cargo.Helper.IsAdminEdit() ) {
				/* Set an event to wait for the model to change */
				this.collection.bind("change", this.render, this);

				/* Load in the CSS dependancy */
				var dependencies = [
					"/_jsapps/rail/rail.css"
				];

				$.loadFiles(dependencies).done(function() {
					// Done loading the CSS
				});
			}
			
		},

		
		
		render : function() {
			var templates = this.collection.GetTemplates();
			var models = this.collection.GetModels();
			
			/* Write to the page */
			this.$el.append(templates.masterview_tpl);

			this.$el.append(this.collection.GetPopup());

			/* Preload the templates and model */
			Cargo.app.Rail.Templates = templates;
			Cargo.app.Rail.Model.LoadModels(models);

			$("#rail_wrapper").addClass("api");

			Cargo.Rail.Init();
			Cargo.View.Following.Init();
		}

	});

/**
 *	This is the following toolset that loads in the top left
 *	Depending on what your login status is and where the request
 *	is coming from, will determine which toolset will show up
 *	but that is up to PHP
 *
 *	This is done using the getJSON instead of a backbone model
 *	because of the need to use JSONP, which I don't believe backbone
 *	can do.
 *
 *	This handles all of the click events for the view as well
 *
 *
 */
	Cargo.o.view.Following = Backbone.View.extend({
		
		initialize: function() {
			this.Data = {
				mouse_down : false,
				tool_over : false,
				mouse_down : false,
				mouse_down : false
			};

			var self = this;

			// Don't do this if we are previewing or editing
			if(Cargo.API.Config.preview && !Cargo.Helper.IsAdminEdit()) {
				return false;
			}

			$.getJSON(
				"//"+Cargo.Helper.GetBaseCargoDomain()+"/dispatch/cargosite/cargoToolset/"+Cargo.Helper.GetDomainOrUrl()+"?callback=?", 
				function(data) {
					if( data.error == "nocookie" || Cargo.InspectorLoading === true) {
						/* No cookie found, or we are inspecting */
						return;
					} else {
						if( data.jdata.url ) {
							if( Cargo.API.Config.is_domain ) {
								$.post(
									"/dispatch/cargosite/cargoToolsetLocal", 
									{ token : data.jdata.token, url : data.jdata.url, muid : data.jdata.muid, cv : data.jdata.cv },
									function(dataObj) {
										if($("#follow_popup").length == 0) {
											self.$el.append(dataObj.jdata.html);
										} else {
											$("#follow_popup").replaceWith(dataObj.jdata.html);
										}

										// Init
										self.InitToolset();
										self.Init();
									},
									"json");	
							} 
						} else {
							// Init
							self.InitToolset();
							self.Init();
						}

						if( data.html ) {
							self.$el.prepend( data.html );

							self.InitToolset();
							self.Init();
						}

					}
				}
			);
		},

		/*
		 *	After the toolset is loaded, do this
		 */
		InitToolset : function() {
			/* Fetch the Rail data */
			Cargo.Model.Rail.fetch({reset: true});

			var self = this;

			/* Toolset click */
			$("#toolset_admin").mousedown(function(e) {
				self.Data.mouse_down = true;
				if(e.button == 2){
					self.ShowContextMenu();
				} else{
					setTimeout("Cargo.View.Following.ToolsetToggle('off')", 500);
				}
				
			}).mouseup(function() {
				self.Data.mouse_down = false;
				
			}).mouseover(function() { 
				self.Data.tool_over = true;
				
			}).mouseout(function() {
				self.Data.tool_over = false;
			
			}).click(function() { 
				if ($("#toolset_admin a").attr("href").length > 0 && self.Data.tool_over) {
					document.location.href = $("#toolset_admin a").attr("href");
					self.HideContextMenu();
				}
				return false;
			});
			
			$("#toolset_admin").bind("contextmenu", function(e) {
				return false;
			});
			
			$(document).click(function() { 
				if(!self.Data.mouse_down && !self.Data.tool_over){
					self.HideContextMenu();
				}
		
			}).mouseup(function(e) { 
				if(e.button == 2){
					self.Data.mouse_down = false;
				}
				setTimeout("Cargo.View.Following.ToolsetToggle('on')", 100);
			});
			
			$("#toolset_menu a").bind("click mouseup mouseover", function(e) {
				if(e.type == "mouseover") {
					self.ToolsetToggle("on");
				} else {
					// window.location.href = $(this).attr("href");
					self.HideContextMenu();
				}
			});
			
			$("#toolset_admin a, #toolset_menu a:first").click(function(e) {
				if(e.ctrlKey) { 
					self.ShowContextMenu();
					return false;
				} else if(typeof require == "function") {
					Cargo.Event.trigger("add_history", "admin");
					return false;
				}
			});
			
			Cargo.Event.on("project_load_complete", function( pid ) { 
				self.HideContextMenu();
			});
			
			$("#toolset_menu a:first").addClass("toolset_first");
			$("#toolset_menu a:last").addClass("toolset_last");

			Cargo.app.Rail.Events.trigger("toolset:loaded");
			
		},

		/*
		 *	Hide the content menu
		 */
		HideContextMenu : function() {
			$("#toolset_admin").removeClass("toolset_active");
			$("#toolset_menu").hide();

			Cargo.View.Following.ToolsetToggle("on");
		},

		/*
		 *	Show the context menu
		 */
		ShowContextMenu : function(which) {
			var toolset_top = $("#toolset").css("top");
			var toolset_right = $("#toolset").css("right");	
			$("#toolset_menu").css({"top" : toolset_top , "right" : toolset_right});
			$("#toolset_admin").addClass("toolset_active");
			$("#toolset_menu").show();
			$("#css_inspector_trigger").on("click", function() {
				loadInspector();
				return false;
			});
		},

		/*
		 *	Toggle the toolset menu
		 */
		ToolsetToggle : function(which) {
			if (which == "on") {
				if ($("#toolset_admin a").length > 0 && $("#toolset_admin a").attr("rel") != "undefined") {
					$("#toolset_admin a").attr("href",$("#toolset_admin a").attr("rel")).removeAttr("rel");
				}
			} else if (which == "off") {
				if ($("#toolset_admin a").length > 0 && $("#toolset_admin a").attr("href") != "undefined" && tool_over && mouse_down) {
					$("#toolset_admin a").attr("rel",$("#toolset_admin a").attr("href")).removeAttr("href");
					mouse_down = false;
					Cargo.View.Following.ShowContextMenu();
				}
			}
		},

		/**
		 *	bind all follow/unfollow links	
		 */
		Init : function() {

			$("a[rel='follow']").off('click').on('click', function() {
				Cargo.View.Following.ShowFollowWindow($(this));
				return false;
			});

			$(".follow_popup_ok").off('click').on('click', function() {
				Cargo.View.Following.DoFollow($(this).attr('data-my_uid'), $(this).attr('data-my_cv'), $(this).attr('data-their_uid'), $(this).attr('data-type'));
				return false;
			});

			$(".follow_popup_cancel").off('click').on('click', function() {
				Cargo.View.Following.Hide();
				return false;
			});

		},

		Show : function() {
			$("#follow_popup").show();
			Cargo.Core.KeyboardShortcut.Add("Return", 13, function() { 
				$("a.follow_popup_ok").click(); 
			});

		},

		Hide : function() {

			// Hide the element
			$("#follow_popup").hide();

			// Remove the keys
			Cargo.Core.KeyboardShortcut.Remove("Return");

			if(typeof Cargo.Home == "object") {
				Cargo.Home.Personal.AddEnterShortcut();
			}

		},


		ShowFollowWindow : function(el) {
			Cargo.View.Following.Show();

			$("#follow_popup_note").html(ucFirst($(el).attr("data-type"))+" "+$(el).attr('data-displayurl')+"?");
			$(".follow_popup_ok").attr({
				'data-their_uid': $(el).attr("data-their_uid"),
				'data-my_uid' 	: $(el).attr("data-my_uid"),
				'data-my_cv' 	: $(el).attr("data-my_cv"),
				'data-type'		: $(el).attr("data-type")
			});
			Cargo.View.Following.Data.el = el;

		},

		DoFollow : function(my_uid, my_cv, their_uid, type) {
			$("#following_loadspin").show();
			$.post(
				"/dispatch/user/doFollow", 
				{ my_uid:my_uid, my_cv:my_cv, their_uid:their_uid, type:type }, 
				Cargo.View.Following.FollowResult,
				"json"
			);
			
		},

		FollowResult : function(dataObj) {
			$("#following_loadspin").hide();

			if(typeof Cargo.Home == "object") {
				Cargo.Home.Personal.hideProjectAfterUnfollow(Cargo.View.Following.Data.el);

			} else if(Cargo.View.Following.Data.el.attr("id")) {
				$("#follow_links").html(dataObj.html);
				$("#rail_follow").html(dataObj.html);

				// update "template"
				if(Cargo.app.Rail.view.following) {
					Cargo.app.Rail.Templates.following_tpl = Cargo.app.Rail.view.following.el.innerHTML;
				}
			
			} else {
				Cargo.View.Following.Data.el.replaceWith(dataObj.jdata.tag_html);
			}

			Cargo.View.Following.Hide();
		}



	});

/**
 *	search
 */
Cargo.o.view.Search = Backbone.View.extend({
		events: {
			'keypress input[type=text]' : 'submitOnEnter',
			'focus input[type=text]' : 'focus',
			'blur input[type=text]' : 'blur'
		},

		initialize: function() {
			var rel = $("input[type=text]", this.$el).attr("rel");
			if(rel !== undefined){
				if($("input[type=text]", this.$el).val() == "" && rel.length > 0) {
					$("input[type=text]", this.$el).val( rel );
				}
			}

			// If this is the first load of search, load everything
			if(this.$el.hasClass('search') || $('input#results_search_term', this.$el).length > 0) {
				Cargo.Collection.Search = new Cargo.o.collection.search();
				Cargo.Model.DisplayOptions.set('pagination_count', 9999);
				var _this = this;
				Cargo.Collection.Search.fetch({reset: true, complete: function(data) { 
					_this.render();
				}});
			}
		},

		render : function( ) {
			var template = Cargo.Template.Get('Search');
			var data_model = Cargo.API.GetDataPackage('search', Cargo.Collection.Search.toJSON());
			var markup = Cargo.Core.Handlebars.Render( template, data_model );

			this.$el.empty();
			this.$el.html( markup );

			$('input#results_search_term', this.$el).val(Cargo.API.Config.search_term);
		},

		focus : function(e) {
			var t = e.currentTarget;
			if($(t).val() == $(t).attr("rel")) {
				$(t).val("");
			}
		},

		blur : function(e) {
			var t = e.currentTarget;
			if($(t).val() == "") {
				$(t).val( $(t).attr("rel") );
			}
		},

		submitOnEnter: function(e) {
			if (e.keyCode != 13) return;
			var t = e.currentTarget;
			Cargo.Helper.GoToUrl('search/' + $(t).val());
		},


});

/**
 *	This is a view for sets. It is identical to the default view
 */
	Cargo.o.view.Sets = Backbone.View.extend({
			
			initialize: function(options) {
				this.options = options;

				if( typeof this.collection == "object" ) {
					/* Set an event to wait for the model to change */
					this.listenTo(this.collection, "reset", this.render);
					this.listenTo(this.collection, "add", this.add);

					this.collection.fetch({ reset : true });
				}
			},

			render : function( ) {
				
				/* Make a reference to self */
				var self 		= this;

				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Sets");

				/*
				 *	If a template exists, render it
				 */
				if( template ) {

					var dataset = (this.options.datasetname) ? this.options.datasetname.toLowerCase() : "sets";
					
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( dataset, this.collection.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Empty the container */
					this.$el.empty();
					this.$el.append( markup );

				} // end template


			},

			/**
			 *	The add event is for adding a single item into the collection
			 *	this is intended for autopagination
			 */
			add : function( model ) {
				/* Get the template for this view */
				var template 	= Cargo.Template.Get(this.options.template);
				var self = this;
				var in_thumb = ($("[href='"+model.get('url')+"']", self.$el).length > 0);
				var in_data  = ($("[data-id='"+model.get('id')+"']", self.$el).length > 0);

				/* Verify that this model is not already onscreen */
				if( template && !in_thumb && !in_data ) {
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage( this.options.datasetname.toLowerCase(), model.toJSON() );

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Prepend this to the autopagination handle */
					this.$el.append( markup );
				}
			}
	});

/**
 * 
 */
	Cargo.o.view.Header = Backbone.View.extend({
			
			initialize: function(options) {
				this.options = options;

				this.listenTo(this.collection, "change", this.render);
			},

			render : function( ) {
				/* Make a reference to self */
				var self 		= this;

				/* Get the template for this view (Prevents first load render) */
				var template 	= Cargo.Template.Get("Header");

				/*
				 *	If a template exists, render it
				 */
				if( template ) {
					
					/* Create a package of data for the render */
					var data_model = Cargo.API.GetDataPackage();

					/* Render the template and get the markup */
					var markup = Cargo.Core.Handlebars.Render( template, data_model );

					/* Empty the container */
					this.$el.empty();
					this.$el.append( markup );

				} // end template


			},

	});

/***************************************************************************
 *
 *	Initialize the application
 *	Find template stubs and load them
 *	Start the router
 *
 **************************************************************************/

/*
 *	Start this application 
 *	Initialize all objects
 *	Start the router
 */

$(function() {
	
	/*
	 *	Default data storage
	 */
	Cargo.Data 		= { }; 

	/*
	 *	Init all the backbone things
	 */
	Cargo.API 	 	= new Cargo.o.api();
	Cargo.Helper 	= new Cargo.o.helpers();
	Cargo.Template 	= new Cargo.o.templates();
	Cargo.Router 	= new Cargo.o.router();
	Cargo.Analytics = new Cargo.o.analytics();

	/*
	 *	Create a base class for all the models
	 */
	Cargo.Model.BaseProject		= Cargo.o.model.project;	
	Cargo.Model.Project			= new Cargo.Model.BaseProject();	
	Cargo.Model.DisplayOptions 	= new Cargo.o.model.display_options();
	Cargo.Model.Site 			= new Cargo.o.model.site();
	Cargo.Model.Rail 			= new Cargo.o.model.rail();
	Cargo.Model.Asset 			= new Cargo.o.model.asset();
	Cargo.Model.Images 			= new Cargo.o.model.images();
	Cargo.Model.Default			= new Cargo.o.model.undefined_default();

	/*
	 *	Set the first collection of projects and navigation
	 */
	Cargo.Collection.Projects = new Cargo.o.collection.projects({
		model 	: Cargo.Model.BaseProject
	});

	Cargo.Collection.Pages = new Cargo.o.collection.pages({
		model 	: Cargo.Model.BaseProject
	});

	Cargo.Collection.Navigation	= new Cargo.o.collection.navigation({
		model 	: Cargo.Model.BaseProject
	});

	Cargo.Collection.Sets = new Cargo.o.collection.sets({
		model 	: Cargo.Model.BaseProject
	});

	Cargo.Collection.Assets	= new Cargo.o.collection.assets({
		model 	: Cargo.Model.Asset
	});

	Cargo.Collection.Images = new Cargo.o.collection.images({
		model 	: Cargo.Model.Images
	});

	Cargo.Collection.Default = new Cargo.o.collection.undefined_default({
		model 	: Cargo.Model.Default
	});

	/*
	 *	Bind the reset event on the project collection
	 */
	Cargo.Collection.Projects.on('reset', function(collection) {
		Cargo.Event.trigger("project_collection_reset");
	});

	/*
	 *	Fetch the default data first (pre-populate the page)
	 */
	
	Cargo.Model.DisplayOptions.once('change', function(){

		Cargo.Event.trigger('display_options_available', Cargo.Model.DisplayOptions);

	});

	Cargo.Model.DisplayOptions.fetch({reset: true});
	Cargo.Model.Project.fetch({reset: true});
	Cargo.Collection.Assets.fetch();
	Cargo.Collection.Pages.fetch();
	Cargo.Model.Site.fetch();

	// Check to see if there is a wrong URL case and redirect
	Cargo.Helper.TestUrlCaseAndRedirect();

	/*
	 *	Make sure the main view has been init
	 */
	if( typeof(Cargo.View.Main) == "undefined" ) {
		Cargo.View.Main = new Cargo.o.view.Main({ 
			el    		: "body",
			collection 	: Cargo.Model.Site 
		});
	}

	/*
	 *	Finds all of the view stubs in the DOM
	 */
	Cargo.Template.FindAndAddViewStubs();
	
	/*
	 *	Init all found views
	 */
	Cargo.Template.LoadFoundViews();

	/*
	 *	Fetch the data
	 *	But delay project data if the site was just created
	 */
	if(Cargo.Helper.GetRouteName() != "search") {
		Cargo.Collection.Projects.fetch({
			complete: function() { 
				Cargo.Event.trigger("project_collection_reset"); 
				Cargo.Event.trigger("first_project_collection_reset"); 
			}
		});
	}

	/*
	 * Fetch the navigation data and trigger a reset event
	 */
	Cargo.Collection.Navigation.fetch({
		complete: function() { 
			Cargo.Event.trigger("first_navigation_collection_reset"); 
		}
	});

	/*
	 *	Start the router, if we should
	 */
	if( Cargo.Helper.IsFeedDesign() && Cargo.Helper.isOldIE() ) {
		// Do not start history
	} else {
		// Start backbone history
		Backbone.history.start({
			pushState: true,
			root: Cargo.Helper.GetHomeUrl(true)
		});

		// Trigger set loaded event
		if(Cargo.API.Config.set) {
			Cargo.Event.trigger("set_loaded", Cargo.API.Config.set);	
		}
	}
	
	/*
	 *	Init the default keyboard shortcuts
	 */
	Cargo.Core.KeyboardShortcut.InitDefaults();

	/* 
	 * Dig through the index and find any stubs to add views 
	 *	This will load the templates into memory
	 */
	Cargo.Template.LoadAll();

	/*
	 *	Init all found views (again)
	 *	This time, it is taking into account the design
	 */
	Cargo.Template.LoadFoundViews();


	/* 
	 * Check and init freshbox 
	 *	Must be here because it requires text.js
	 */
	Cargo.Core.CheckAndInitFreshbox();

	/* 
	 * Sniff for inspector
	 */
	if(location.search.replace("?","") == "inspector") {
		Cargo.Core.LoadInspector();
	}

	/*
	 *	Activate the hi-res images if needed
	 */
	Cargo.Core.HiRes.Loader.init();

	/* Common events that are fired multiple times */
	Cargo.Event.Common();

	/* Look for a search form in a project or on the page */
	Cargo.Core.FindAndLoadSearch(true);

	/* Look for a meta tag with the EU cookie notification */
	Cargo.Core.EU_cookie_notification();
	

});

/***************************************************************************
 *
 *	The Rail app is the controller of the right rail housing
 *	following, tracemarks and other things
 *
 *	This is meant to be agnostic to Cargo 1.0 or 2.0
 *	Uses Backbone and Handlebars
 *
 *	Assumes the Cargo namespace exists
 *	Sets the Cargo.app namepsace if one does not exist
 *
 **************************************************************************/
Cargo.app = window.Cargo.app || { };
Cargo.app.Rail = { };

/* Create the default objects */
Cargo.app.Rail.Model 		= { };	// All models base
Cargo.app.Rail.Collection	= { };	// All collections base
Cargo.app.Rail.View  		= { };	// All views base
Cargo.app.Rail.view  		= { };	// instanciated views
Cargo.app.Rail.Events  		= { };	// All events base
Cargo.app.Rail.Templates	= { };	// All templates (these are loaded on init)


/***************************************************************************
 *
 *	Models
 *
 **************************************************************************/

/**
 *	This is the init and loads all models that are passed
 *	Expects an array of models as name => data
 *	name = "masterview_model"
 *	Create the model name for this application like "MasterviewModel"
 */
Cargo.app.Rail.Model.LoadModels = function( models ) {
	
	_( models ).each(function( value, key ) {
		var model_name = ucFirst(key.split("_")[0]) + ucFirst(key.split("_")[1]) + "";
		
		/* Create a new Backbone model based on the data coming in */		
		Cargo.app.Rail.Model[model_name] = new Backbone.Model( value );

	});
};


/***************************************************************************
 *
 *	Events
 *
 **************************************************************************/

/* Init the events */
Cargo.app.Rail.Events = _.extend({}, Backbone.Events);


/**
 *	An event for showing the following
 *	This is triggered when the following icon is clicked
 */
Cargo.app.Rail.Events.on("show_rail_following", function() { 
	
	/* Make sure to destroy old versions */
	Cargo.app.Rail.Events.trigger("following:destroy");
	
	/* Init a new version of this view */
	Cargo.app.Rail.view.following = new Cargo.app.Rail.View.Following({ 
		el : "#rail_following",
		collection: Cargo.app.Rail.Model.FollowingModel 
	});

});


/* 
+ * Event for image drag start 
+ * Init the tracemarks view
+ */
Cargo.app.Rail.Events.on("image_drag_start", function() { 
  
  /* Make sure to destroy old versions */
  Cargo.app.Rail.Events.trigger("selections:destroy");

  /* Init a new version of this view */
  new Cargo.app.Rail.View.Selections({ 
    el : "#rail_selections",
    collection: Cargo.app.Rail.Model.SelectionsModel 
  });

});


/***************************************************************************
 *
 *	Views
 *
 **************************************************************************/

/**************************
 *	Master
 *************************/
Cargo.app.Rail.View.Master = Backbone.View.extend({

	initialize : function() {

		var self = this;

		// Set an event to listen for showing the rail
		Cargo.app.Rail.Events.bind("rail:show", this.Show, this);

		// Set an event to listen for hiding the rail
		Cargo.app.Rail.Events.bind("rail:hide", this.Hide, this);

		// IE check
		if ( $.browser.msie ) {
			$("#rail_wrapper").addClass("rail_ie");
		}

        new Cargo.app.Rail.View.Screen({ 
            el : "#rail_screen"
        });

        if(Cargo.hasOwnProperty('Core')){
        	Cargo.Core.ReplaceLoadingAnims.init();
    	} else {
    		Cargo.ReplaceLoadingAnims();
    	}

	},

	events : {
		
	},

	render : function() {

	},

	/**
	 * Hide the rail and reset the data
	 */
	Show : function() {

		if ( ! $.browser.msie ) {

			_.delay(function() {
				$("body, html").addClass("rail_active");
		        $("#rail_wrapper").addClass("active");
		    }, 1);

		} else {

			$("body, html").addClass("rail_active");
		    $("#rail_wrapper").addClass("active");

		}
	},
	
	Hide : function() {
		$("body, html").removeClass("rail_active");
        $("#rail_wrapper").attr("class", "api");


		// IE check
		if ( $.browser.msie ) {
			$("#rail_wrapper").addClass("rail_ie");
		}

		// Hide the follow popup
		if( typeof Cargo.Follow != "undefined" ) {
			Cargo.Follow.Hide();	
		}
		

        // Trigger the rail hide event
		_.delay(function() { Cargo.app.Rail.Events.trigger("following:hide") }, 300);
	}

});

/**************************
 *	Screen
 *************************/
Cargo.app.Rail.View.Screen = Backbone.View.extend({

	initialize : function() {

	},

	events : {
		"click"     : "clicked",
		"mouseover" : "hovered"
	},

	render : function() {

	},

	clicked : function() {
		Cargo.app.Rail.Events.trigger("rail:hide");
	},

	hovered : function() {
		if ( !Cargo.Rail.Data.dragging && 
			 !Cargo.Rail.Data.is_saving &&
			 $("#rail_selections").is(":visible") 
		) {
		 	Cargo.app.Rail.Events.trigger("rail:hide");
		}
	}

});


/**************************
 *	Following
 *************************/
Cargo.app.Rail.View.Following = Backbone.View.extend({

	initialize : function() {
		// Set the template
		this.template = Cargo.app.Rail.Templates.following_tpl;

		// Set an event to wait for the model to change
		if(this.collection) {
			this.collection.bind("reset", this.render, this);

			// Show the rail
			Cargo.app.Rail.Events.trigger("rail:show");

			// Create an event for the destroy method
			Cargo.app.Rail.Events.bind("following:destroy", this.destroy, this);

			// Set an event to listen for hiding the rail
			Cargo.app.Rail.Events.bind("following:hide", this.Hide, this);

			this.render();
		}
	},


	events: {
		"click #rail_follow a" : "DoFollow"
	},

	render : function() {

		/* Empty the container */
		this.$el.empty();

		var markup = Handlebars.compile( this.template )( this.collection );
		this.$el.append( markup ).show();

		// Active state
		$("#rail_wrapper").addClass("following_active");

		// Close rail when clicking name
		$(".rail_name").click(function() {
			Cargo.app.Rail.Events.trigger("rail:hide");
			return false;
		});

		var self = this;
		this.columns();

		$(window).resize(function() { self.columns() });

	},

	columns : function() {

        var width = $(this.$el).width() - 40;
        var ratio = Math.floor((width / 120));
        var percent = 100 / ratio;

        if ( width < 181 ) {
        	percent = 100;
        }
        
        // $(".rail_module", this.$el).width(percent + "%");

    },

	/* Hide this */
	Hide : function() {
		this.$el.hide();
	},

	/**
	 *  Destroy this view and unbind it's events
	 */
	destroy : function() {
		this.undelegateEvents();
   },

   /*
	 *	This does the actual follow / unfollow action
	 */
	DoFollow : function( e ) {
		e.preventDefault();

		var target 		= e.currentTarget;
		var ftype		= $(target).attr("data-ftype");
		var ucase_which = ucFirst(ftype);

		if(typeof Cargo.Follow == "object") {
			Cargo.Follow.ShowFollowWindow($(target));
			
		} else if(typeof Cargo.View.Following == "object") {
			Cargo.View.Following.ShowFollowWindow($(target));
		}

	}

});



/**************************
 *	Selections
 *************************/
Cargo.app.Rail.View.Selections = Backbone.View.extend({

	last_id_drop : 0,

	initialize : function() {
		// Set the template
		this.template = Cargo.app.Rail.Templates.selections_tpl;

		// Set an event to wait for the model to change
		this.collection.bind("reset", this.render, this);

		// Show the rail
		Cargo.app.Rail.Events.trigger("rail:show");

		// Create an event for the destroy method
		Cargo.app.Rail.Events.bind("selections:destroy", this.destroy, this);

		// Set an event to listen for hiding the rail
		Cargo.app.Rail.Events.bind("rail:hide", this.Hide, this);

		this.render();
	},


	events: {
		"mouseover" : "hovered",
		"mouseout" : "hoverout"
	},

	hovered : function() {
		Cargo.Rail.Data.is_on_screen = false;
	},

	hoverout : function() {
		Cargo.Rail.Data.is_on_screen = true;
	},

	render : function() {
		/* Empty the container */
		this.$el.empty();

		var markup = Handlebars.compile( this.template )( this.collection );
		this.$el.append( markup ).show();

		this.SetDropZone();

		$("#rail_wrapper").addClass("selection_active");
	},

	SetDropZone : function() {
	    var self = this;

	    $("#rail_screen").droppable(
            '*',
            // Drag enter
            function(e) { },
            // Drag leave
            function() { },
            // Drop!
            function(e) {
            	Cargo.app.Rail.Events.trigger("rail:hide");
            }
		);

		$("#selections_login").droppable(
            '*',
            // Drag enter
            function(e) { },
            // Drag leave
            function() { },
            // Drop!
            function(e) {
               Cargo.Rail.Data.dragging = false;
            }
		);

	    $("#rail_droplet").droppable(
            // Accepts
            '*',
            
            // Drag enter
            function(e) {
              $(this).addClass("active");
              Cargo.Rail.Data.is_on_screen = false;
            },
            
            // Drag leave
            function() {
                $(this).removeClass("active");
            },
            
            // Drop!
            function(e) {
                self.HandleImageDrop();
            }

        ); // end drop

	  },

	  HandleImageDrop : function() {
	  	Cargo.Rail.Data.is_saving = true;

	  	var id = this.collection.get("mid");
	  	// don't allow for the image in the rail to be dropped again
	  	if(this.last_id_drop == id) {
	  		return;
	  	}

	  	this.last_id_drop = id;

		$("#rail_save").addClass("active");
		$(".rail_add").addClass("hidden");

		$("#rail_preview").addClass("selection_dropped");
		$("#rail_preview").attr("data-id", id);

		/*
		 * Rail Preview
		 */
		$("#rail_preview img:not(.rail_preview_spinner)").attr("src", this.collection.get("src"));
		$("#rail_preview .rail_preview_spinner").css("top", ( $("#rail_preview img:not(.rail_preview_spinner)").height() / 2 ) + 40 + "px");

		if( typeof Cargo.ReplaceLoadingAnims == "function") {
			Cargo.ReplaceLoadingAnims();
		} else {
			Cargo.Core.ReplaceLoadingAnims.init();
		}
		
		// Save the image
		var cuid = "";

		if(typeof Cargo.Helper == "undefined"){
			cuid = Cargo.Config.GetCookieUid();
		} else {
			cuid = Cargo.Helper.GetUrl();
		}

		$.post("/dispatch/selections/selection", { mid : this.collection.get("mid"), cuid : cuid }, function(server_data) {
			if(server_data.error) {
				$(".rail_preview_spinner").hide();
				alert(server_data.message);
				Cargo.app.Rail.Events.trigger("rail:hide");

			} else {

				// Remove the fake spinner
				_.delay(function() { 
					$("#rail_preview[data-id=" + id + "]").addClass("selection_sent");
				}, 600);

				_.delay(function() {
					if(Cargo.Rail.Data.is_on_screen) {
						Cargo.app.Rail.Events.trigger("rail:hide");
					}
					Cargo.Rail.Data.is_saving = false; 
				}, 1000);

			}
		});

		// Tell the app the dragging has stopped, but give it a beat
		_.delay(function() { Cargo.Rail.Data.dragging = false; }, 500);

	  },

	

	/* Hide this */
	Hide : function() {
		this.last_id_drop = 0;
		this.$el.hide();
	},

	/**
	 *  Destroy this view and unbind it's events
	 */
	destroy : function() {
		this.undelegateEvents();
   }
 

});






/*
 *  Start this backbone application 
 *  Set the jquery dragging
 *  Hijack the following icon click
 */
Cargo.Rail = {

    Data : {
        "dragging"      : false,
        "is_saving"     : false,
        "is_on_screen"  : false
    },

    Init : function() {

        /*
         *  Set the backbone view for the master
         */
        new Cargo.app.Rail.View.Master({ 
            el : "#rail_wrapper"
        });

        /* 
         *  Following icon
         */
        $("#toolset_follow_pair a, #toolset_follow a").click(function(e) {
            e.preventDefault();
            Cargo.app.Rail.Events.trigger("show_rail_following");
            return false;
        });

        /*
         *  Dragging and dropping
         */
        var setDrag = function() {
            // Disallow on mobile
            var is_mobile = (typeof Cargo.Helper == "object") ? Cargo.Helper.isMobile() : Cargo.Config.isMobile();
            if(is_mobile) {
                return false;
            }
            
            // Firefox/IE anchor img slideshow
            if ( $.browser.mozilla || $.browser.msie ) {
                $(".project_content a:has(img[data-mid]), #container a:has(img[data-mid])").dragstart(function(e) {
                    Cargo.Rail.Drag($("img:visible", this));
                });
            }

            // Configure the drag for all other images
            $("img[data-mid]").dragstart(function(e) {
                // console.log("Dragging starting");
                Cargo.Rail.Drag($(this));

            }).dragend(function(e) {

                // Delay unless in webkit
                if ( $.browser.mozilla || $.browser.msie ) {
                    setTimeout(function() { Cargo.Rail.Data.dragging = false }, 100);
                } else {
                    Cargo.Rail.Data.dragging = false
                }

            });
        }

        /**
         * Bind to events
         */

        $(document).bind("projectLoadComplete", function(e, pid) {
            Cargo.app.Rail.Events.trigger("rail:hide");
            setDrag();
        });

        $(document).bind("projectLoadComplete", function(e, pid) {
            setDrag();
        });

        $(document).bind("projectIndex", function(e, pid) {
            Cargo.app.Rail.Events.trigger("rail:hide");
        });

        $(document).bind("paginationComplete", function(e, data) {
            setDrag();
        });

        setDrag();
    },

    Drag : function(element) {

        Cargo.Rail.Data.dragging = true;

        Cargo.app.Rail.Events.trigger("image_drag_start");

        // Set the value of the dragged element in the model
        Cargo.app.Rail.Model.SelectionsModel.set({
             src : $(element).attr('src'),
             mid : $(element).attr('data-mid')
        });

    }
    
};

/*! cargoEditor 05-05-2015 */
!function(){var a=function(a,b,c){return a.prototype.hasOwnProperty(name)!==!1?!1:void(a.prototype[b]=c)};a(Node,"saveable",!1),a(Node,"setSaveable",function(a){return this.saveable=a,this}),a(Node,"isSaveable",function(){return this.saveable}),Node.prototype.persistCloneNode=function(){var a=function(b,c,d){for(var e=0;e<b.childNodes.length;e++)d(b.childNodes[e],c.childNodes[e]),b.childNodes[e].childNodes.length>0&&a(b.childNodes[e],c.childNodes[e],d)},b=Node.prototype.cloneNode.apply(this,arguments);return this.isSaveable()===!0&&b.setSaveable(!0),this.childNodes.length>0&&a(this,b,function(a,b){a.isSaveable()===!0&&b.setSaveable(!0)}),b},this.core={markAsEditable:function(){}}}(window.CargoEditor=window.CargoEditor||{});

