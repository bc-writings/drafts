var UUID;UUID=function(e){"use strict";function t(){}function r(e){return 0>e?NaN:30>=e?0|Math.random()*(1<<e):53>=e?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<e-30)):NaN}function n(e,t){for(var r=e.toString(16),n=t-r.length,i="0";0<n;n>>>=1,i+=i)1&n&&(r=i+r);return r}return t.generate=function(){return n(r(32),8)+"-"+n(r(16),4)+"-"+n(16384|r(12),4)+"-"+n(32768|r(14),4)+"-"+n(r(48),12)},t.overwrittenUUID=e,t}(UUID);var adways=adways||{},htmlAddEventListener=function(e,t,r,n){if(arguments.length<4&&(n=!1),"load"===t&&void 0===e.onload){var i=function(t){"loaded"!==e.readyState&&"complete"!==e.readyState||(r.call(),e.removeEventListener?e.removeEventListener("readystatechange",i):e.detachEvent?e.detachEvent("onreadystatechange",i):e.onreadystatechange=null)};e.addEventListener?e.addEventListener("readystatechange",i):e.attachEvent?e.attachEvent("onreadystatechange",i):e.onreadystatechange=i}else e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on"+t,r,n)};adways.AnalyticsTracker=function(e){this.baseProperties=null,this.baseUrl=null,e.creative_format&&e.creative_id?(void 0===e&&(e={}),void 0===e.force_protocol&&void 0!==adways.tweaks&&void 0!==adways.tweaks.forceProtocol&&(e.force_protocol=adways.tweaks.forceProtocol),void 0===e.record_interface&&(e.record_interface="generic"),e.client_start_timestamp=(new Date).getTime(),e.client_session_id=arguments.length>1?arguments[1]:UUID.generate(),this.baseUrl="https://www.adwstats.com/",void 0!==e.force_protocol&&-1===this.baseUrl.search(/^http[s]?\:\/\//)&&(this.baseUrl=e.force_protocol+":"+this.baseUrl),this.skipCookie=0,void 0!==e.nc&&(this.skipCookie=e.nc),this.x_domain="",void 0!==e.x_domain&&(this.x_domain=e.x_domain),this.sendTrackerInit=!0,void 0!==e.send_tracker_init&&(this.sendTrackerInit=e.send_tracker_init),this.macros=new Object,void 0!==e.macros&&(this.macros=e.macros),this.baseProperties=e,this.sendTrackerInit&&this.sendData({event_type:"init",event_name:"tracker"})):console.error("Property 'creative_format' and 'creative_id' must be defined!")},adways.AnalyticsTracker.prototype.evaluateData=function(e){var t={};for(var r in e)if(e.hasOwnProperty(r)&&"cbFunction"!==r){var n=e[r];"function"==typeof n&&(n=n()),null===n||"number"==typeof n&&!isFinite(n)||(t[r]=n)}return t},adways.AnalyticsTracker.prototype._getQueryString=function(e){var t=this.evaluateData(e),r=[];for(var n in t)r.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return r.join("&")},adways.AnalyticsTracker.prototype.isReady=function(){return null!=this.baseProperties},adways.AnalyticsTracker.prototype.initAnalyticsTrackerData=function(e,t,r,n){var i=new Object;for(var a in this.baseProperties)i[a]=this.baseProperties[a];if(void 0!==n&&null!=n)for(var a in n)i[a]=n[a];if("object"==typeof e)for(var a in e)i[a]=e[a];else i.event_type=e,i.event_name=t,void 0!==r&&(i.event_data=r);var s=new Date;return i.client_date_utc=s.toISOString().substr(0,19).replace("T"," "),i.client_date_utc_offset=s.toTimeString().substr(12,3)+":"+s.toTimeString().substr(15,2),i.client_cache_buster=UUID.generate(),i.client_screen_width=window.screen.width,i.client_screen_height=window.screen.height,i.client_window_width=window.innerWidth,i.client_window_height=window.innerHeight,i.client_charset=document.charset,i.client_time_elapsed=s.getTime()-this.baseProperties.client_start_timestamp,i},adways.AnalyticsTracker.prototype.sendData=function(e,t,r,n){if(this.isReady()){var i=this.initAnalyticsTrackerData(e,t,r,n),a=arguments.length>4?arguments[4]:null;"object"==typeof arguments[0]&&"function"==typeof arguments[0].cbFunction&&(a=e.cbFunction),this.callPixel(i,a)}},adways.AnalyticsTracker.prototype.callPixel=function(e){if(this.isReady()){e.x_domain=this.x_domain;var t=this.baseUrl+e.record_interface+".pixel?"+this._getQueryString(e);1===this.skipCookie&&(t=this.baseUrl+e.record_interface+".pixel?nc=1&"+this._getQueryString(e));var r=arguments.length>1?arguments[1]:null,n=new Image;return null!==r&&(htmlAddEventListener(n,"load",r),htmlAddEventListener(n,"error",r)),n.style.display="none",n.src=t,n}return null},adways.AnalyticsTracker.prototype.redirect=function(e,t,r,n,i,a){if(!this.isReady())return null;if(function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE");return t>0?parseInt(e.substring(t+5,e.indexOf(".",t))):navigator.userAgent.match(/Trident\/7\./)?11:0}()>0&&"_parent"==a){var s=document.createElement("a");return s.href=this.getRedirectURL(i,e,t,r,n),document.body.appendChild(s),s.click()}return window.open(this.getRedirectURL(i,e,t,r,n),a)},adways.AnalyticsTracker.prototype.getRedirectURL=function(e,t,r,n,i){if(this.isReady()){var a=e,s={};a.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,r){s[t]=r});if(0===Object.keys(s).length){a.replace(/[/;]+([^=;]+)=([^;]*)/gi,function(e,t,r){s[t]=r})}if(Object.keys(s).length>0)for(var o in s)void 0!==typeof this.macros[o]&&void 0!==this.macros[o]&&"undefined"!==this.macros[o]&&(e=e.replace(s[o],this.macros[o]));var c=this.initAnalyticsTrackerData(t,r,n,i);c.redirect_location=e,c.x_domain=this.x_domain;var d=this.baseUrl+c.record_interface+".redirect?"+this._getQueryString(c);return 1===this.skipCookie&&(d=this.baseUrl+c.record_interface+".redirect?nc=1&"+this._getQueryString(c)),d}return null},adways.AnalyticsTracker.prototype.setTagHref=function(e,t,r,n,i,a){return!!this.isReady()&&(e.href=this.getRedirectURL(t,r,n,i,a),!0)},adways.analytics=adways.analytics||{},adways.analytics.Tracker=adways.AnalyticsTracker;
        if (typeof adpaths == "undefined") {
            adpaths = {};
        }
        (function(adpaths) {
                    //    if (typeof LocatePlayerAlreadyLaunched == "undefined")
        //        LocatePlayerAlreadyLaunched = false;
        var LocatePlayer = function(doc, config, creation, tracker, debug = 0) {
            // console.log("creation", creation, tracker, config);
            this.tracker = tracker;
            this.bridge = new Bridge();
            this.myVastLoaderManager = null;
            this.checked = false;

            if (typeof doc == "undefined")
                this.doc = document;
            else
                this.doc = doc;
            this.debug = debug;

            //si dans le local strorage MC_DEBUG = true alors this.debug = 1;
            this.config = config;
            this.forbiddenPlayers = [];
            this.observers = [];
            this.creation = creation;
            this.playersToCheckAgain = [];
            this.playerToCheckAgainInterval = null;

            if (this.config != null) {
                if (typeof this.config.creation == "object")
                    this.creation = this.config.creation;
                if (typeof this.config.forbiddenPlayers == "object")
                    this.forbiddenPlayers = this.config.forbiddenPlayers;
            }
            this.vastloaders = new Array();
            this.playerAlreadyInteractive = new Array();
            //        this.MyIdentifyPlayer = null;
            //        this.VastLoaderManager = null;
            this.maxInteractivePlayer = 1;
            this.maxInstantiation = 0;
            if(this.debug){
                var allowed = ['creation_autoplay_allowed', 'creation_capping', 'creation_desktoponly', 'creation_minduration_type', 'creation_minwidth', 'creation_mobile_landscape', 
                'creation_mobile_portrait', 'creation_mobileonly', 'creation_prevent_incontent', 'creation_allow_incontent', 'creation_repeat', 'creation_startat_type', 'creation_use_visibility', 'creation_video_analysis', 'creation_visibility_percent', 'creation_visibility_timer', 'creation_startat', 'creation_urls'];
                var filteredCreation = Object.keys(this.creation).filter(key => allowed.includes(key)).reduce((obj, key) => {
                    var item = {};
                    item['adwdebugCreation'] = key;
                    if(key === 'creation_urls'){
                        item['value'] = this.creation[key].map(element => element.placement_id).join(',');
                    }else{
                        item['value'] = this.creation[key];
                    }
                    
                    obj.push(item);
                    return obj;
                }, [])
                console.log('adwdebug %ccreation:', 'background: #222; color: #bada55')
                console.table(filteredCreation, ['adwdebugCreation', 'value']);
            }
        };
        LocatePlayer.prototype.search = function(customDoc) {
            // console.log('test')
            var doc = this.doc;
            var that = this;
            if (typeof customDoc != "undefined") {
                var doc = customDoc;
            }
                                  
                            // console.log('not image')
                var videos = doc.querySelectorAll('video');
                var that = this;
                [].forEach.call(videos, function(video) {
                    //        video.style.border = "5px solid red";
                    that.detectPlayer(video);
                });
                var iframes = doc.querySelectorAll('iframe');
                var that = this;
                [].forEach.call(iframes, function(iframe) {
                    //        iframe.style.border = "5px solid yellow";

                    var hostToCheck = window.location.host.split(".");
                    if (hostToCheck.length > 1) {
                        hostToCheck = hostToCheck[hostToCheck.length - 2] + "\." + hostToCheck[hostToCheck.length - 1];
                    } else {
                        hostToCheck = hostToCheck[0];
                    }
                    eval('var re = /' + hostToCheck + '/;');
                    //        eval('var re = /^' + window.location.protocol + '\\/\\/' + window.location.host.replace(/\./g, "\\.") + '/;');
                    var clientToCheck = iframe.src.split("//");
                    if (clientToCheck.length > 1) {
                        clientToCheck = clientToCheck[1].split("/");
                        clientToCheck = clientToCheck[0];
                    } else {
                        clientToCheck = hostToCheck[0];
                    }
                    var tmp = clientToCheck.match(re);
                    var forcePass = false;
                    try {
                        if (window.location.origin == iframe.contentWindow.location.origin)
                            forcePass = true;
                    } catch (e) {}
                    if (tmp != null || forcePass) {
                        try {
                            // TODO: check later if needed
                            // cross domain error forcing the domain
                            //                document.domain = hostToCheck;
                            var doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
                            that.search(doc);
                            forcePass = false;
                        } catch (e) {
                            console.log("publisher.search in iframe cross domain error: ", iframe);
                        }
                    } else {
                        that.detectPlayer(iframe);
                    }
                });

            var swObjects = doc.querySelectorAll('object');
            var that = this;
            [].forEach.call(swObjects, function(swObject) {
                //        swObject.style.border = "5px solid blue";
                that.detectPlayer(swObject);
            });
                    };

        LocatePlayer.prototype.observePlayer = function(customDoc) {
            var doc = this.doc;
            var that = this;
            if (typeof customDoc !== "undefined") {
                doc = customDoc;
            }
            var that = this;
            MutationObserver = MutationObserver || WebKitMutationObserver;
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if(mutation.target.tagName.toLowerCase().match(/^wrapper\-eplayer\-/) != null)
                    if (typeof mutation.target == 'function' ||
                        (typeof mutation.target == 'object' &&
                            typeof mutation.target.tagName != 'undefined' &&
                            (mutation.target.tagName.toLowerCase() == 'iframe' || mutation.target.tagName.toLowerCase() == 'video' || mutation.target.tagName.toLowerCase() == 'img' ||
                                mutation.target.tagName.toLowerCase().match(/^wrapper\-eplayer\-/) != null))
                    ) {
                        if(mutation.target.tagName.toLowerCase().match(/^wrapper\-eplayer\-/) != null){
                            that.search(mutation.target.contentDocument);
                        }else if (mutation.target.tagName.toLowerCase() == 'iframe' && mutation.target.location == window.location) {
                            var doc = mutation.target.contentDocument ? mutation.target.contentDocument : (mutation.target.contentWindow ? mutation.target.contentWindow.document : mutation.target.document);
                            that.search(doc);
                        } else {
                            // console.log(mutation.target);
                                                        if (mutation.target.tagName.toLowerCase() == 'iframe'  || mutation.target.tagName.toLowerCase() == 'video') {
                                 that.detectPlayer(mutation.target);
                            }
                                                        // if (document.querySelectorAll('article img').includes(mutation.target)) {
                            //     that.detectPlayer(mutation.target);
                            // }
                            for(let key = 0; key < document.querySelectorAll('article img').length; key++){
                                // console.log(mutation.target)
                                if(document.querySelectorAll('article img')[key].isEqualNode(mutation.target)){
                                    
                                    that.detectPlayer(mutation.target);
                                }
                            }
                            // that.detectPlayer(mutation.target);
                        }
                    }
                    if (mutation.type == "childList" && mutation.addedNodes.length > 0) {
                        for (var i = 0; i < mutation.addedNodes.length; i++) {
                            if (typeof mutation.addedNodes[i] == 'function' ||
                                (typeof mutation.addedNodes[i] == 'object' &&
                                    typeof mutation.addedNodes[i].tagName != 'undefined' &&
                                    (mutation.addedNodes[i].tagName.toLowerCase() == 'iframe' || mutation.addedNodes[i].tagName.toLowerCase() == 'video'|| mutation.addedNodes[i].tagName.toLowerCase() == 'img'))
                            ) {
                                if (mutation.addedNodes[i].tagName.toLowerCase() == 'iframe' && mutation.addedNodes[i].location == window.location) {
                                    var doc = mutation.addedNodes[i].contentDocument ? mutation.addedNodes[i].contentDocument : (mutation.addedNodes[i].contentWindow ? mutation.addedNodes[i].contentWindow.document : mutation.addedNodes[i].document);
                                    that.search(doc);
                                } else {
                                                                        // console.log(typeof mutation.addedNodes[i]);
                                    if ((mutation.addedNodes[i].tagName.toLowerCase() == 'iframe'  || mutation.addedNodes[i].tagName.toLowerCase() == 'video')) {
                                        that.detectPlayer(mutation.addedNodes[i]);
                                    }
                                                                        // if (document.querySelectorAll('article img').includes(mutation.addedNodes[i])) {
                                    //     that.detectPlayer(mutation.addedNodes[i]);
                                    // }
                                    // console.log(document.querySelectorAll('article img'));
                                    for(let key = 0; key < document.querySelectorAll('article img').length; key++){
                                        // console.log(document.querySelectorAll('article img')[key], mutation.addedNodes[i])
                                        if(document.querySelectorAll('article img')[key].isEqualNode(mutation.addedNodes[i])){
                                            
                                            that.detectPlayer(mutation.addedNodes[i]);
                                        }
                                    }
                                    // that.detectPlayer(mutation.addedNodes[i]);
                                }
                                //                        mutation.addedNodes[i].style.border = "5px solid blue";
                                //                        if (mutation.addedNodes[i].tagName.toLowerCase() == 'video') {
                                //                            console.log(mutation.addedNodes[i], "--------------------OBJECT OBSERVER");
                                //                        }
                                //if(node.ownerDocument !== document) {
                            } else if (typeof mutation.addedNodes[i] == 'object' &&
                                typeof mutation.addedNodes[i].tagName != 'undefined' &&
                                (mutation.addedNodes[i].tagName.toLowerCase() == 'div'))      
                            {
                                //console.log("adwdebug div added");
                                that.search(mutation.addedNodes[i]);
                            }
                        }
                    }
                });
            });
            // configuration of the observer:
            var configObs = {
                attributes: true,
                childList: true,
                characterData: false,
                subtree: true,
                attributeFilter: ["class", "src"]
            };
            // pass in the target node, as well as the observer options
            this.observers.push(observer);
            observer.observe(doc.body, configObs);
            this.playerToCheckAgainInterval = setInterval(function() {
                that.playerToCheckAgainCB();
            }, 5000);
            setTimeout(
                function() {
                    clearInterval(that.playerToCheckAgainInterval);
                }, 60000);
        };

        LocatePlayer.prototype.playerToCheckAgainCB = function() {
            if (this.playersToCheckAgain.length > 0) {
                for (var i = 0; i < this.playersToCheckAgain.length; i++) {
                    this.detectPlayer(this.playersToCheckAgain[i]);
                }
            }
        };

        LocatePlayer.prototype.detectPlayer = function(jsObject) {
            var that = this;
            var MyIdentifyPlayer = new IdentifyPlayer(this, this.forbiddenPlayers, this.playersToCheckAgain, this.debug);
            var playerIdentity = MyIdentifyPlayer.playerFromJSObject(jsObject);
            // console.log('playerIdentity', playerIdentity)      
            if (playerIdentity.length < 1) {
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        //if (mutation.attributeName == "class" || mutation.attributeName == "src") {
                        playerIdentity = MyIdentifyPlayer.playerFromJSObject(mutation.target);
                        //}
                        that.createInteractivityOnPlayerDetected(playerIdentity);
                        return;
                    });
                });
                // configuration of the observer:
                var config = {
                    attributes: true,
                    childList: false,
                    characterData: true,
                    subtree: false,
                    attributeFilter: ["class", "src"]
                };
                // pass in the target node, as well as the observer options
                this.observers.push(observer);
                observer.observe(jsObject, config);
            } else {
                this.createInteractivityOnPlayerDetected(playerIdentity);
            }
            // if (this.debug == 1 && playerIdentity.length > 0) {
            //         console.log('%c Oh my playerIdentity is %c', 'background: #222; color: #bada55', 'background: #222; color: pink', playerIdentity[0],'%c! Detected from ', 'background: #222; color: pink', 'background: #222; color: #bada55',this.listPlayersInChain);              
            // }
            return playerIdentity;

        };

        LocatePlayer.prototype.instantiateInteractivity = function(playerIdentity) {
            this.playerIdentity = playerIdentity;
                            if (this.tracker !== null) {
                    var completionTime = (Date.now() - this.tracker.timeInitTrackerMC) / 1000;
                    this.tracker.sendData({
                        event_type: 'state',
                        event_name: 'playerDetected',
                        completion_value: completionTime,
                        completion_ref: '9pQFSxC'
                    });
                }
                if (this.bridge.getAdwPBSReceived()) {
                    console.log("getAdwPBSReceived");
                    return;
                }
                var that = this;
                this.adCalls = new Array();
                this.originalAdCalls = new Array();
                var adCall = new Object();
                adCall.url = that.creation.creation_url;
                adCall.urls = that.creation.creation_urls;
                adCall.type = that.creation.creation_type;
                adCall.capping = that.creation.creation_capping;
                adCall.indice = -1;
                this.adCalls.push(adCall);
                if (typeof that.creation.creation_backfills !== "undefined") {
                    if (that.creation.creation_backfills.length > 0) {
                        for (var i = 0; i < that.creation.creation_backfills.length; i++) {
                            var adCall = new Object();
                            adCall.capping = typeof that.creation.creation_backfills[i]["creation_capping"] !== 'undefined' ? that.creation.creation_backfills[i]["creation_capping"] : 0;
                            adCall.url = that.creation.creation_backfills[i]["creation_url"];
                            adCall.urls = that.creation.creation_backfills[i]["creation_urls"];
                            adCall.type = that.creation.creation_backfills[i]["creation_type"];
                            adCall.indice = i;
                            this.adCalls.push(adCall);
                        }
                    }
                }
                this.originalAdCalls = Array.prototype.slice.call(this.adCalls);
                var checkBehaviour = new BehaviourChecker({
                    'playerIdentity': playerIdentity,
                    'cb': function() {
                        that.prepareLoadCreative.apply(that, Array.prototype.slice.call(arguments));
                    },
                    'repeatCb': function() {
                        that.adCalls = Array.prototype.slice.call(that.originalAdCalls);
                    },
                    'creation': that.creation,
                    'debug': that.debug
                });
                    };

        LocatePlayer.prototype.prepareLoadCreative = function() {
            var that = this;
            var delegate = arguments.length > 0 ? arguments[0] : null;
            var s2p = arguments.length > 1 ? arguments[1] : null;
            var p2s = arguments.length > 2 ? arguments[2] : null;
        // console.log('adwdebug prepareLoadCreative', delegate, this.creation.creation_video_analysis /*, delegate.getMediaURL, delegate.getMediaURL(), this.originalAdCalls.length, this.adCalls.length */);
            //debug pour compter les appels
            // this.creation.creation_video_analysis = true;
            // this.creation.creation_va_max_video_duration = 0;
            // this.creation.creation_va_nb_requests = 1000;
            // this.creation.creation_va_score_min = 0.9;
            // this.creation.creation_va_duration_min = 5;
            //fin debug pour compter les appels

            if (delegate && this.creation.creation_video_analysis && typeof delegate.getMediaURL !== 'undefined' && delegate.getMediaURL() !== null && this.originalAdCalls.length === this.adCalls.length) {
                if (p2s && (
                        (this.creation.creation_va_max_video_duration > 0 && this.creation.creation_va_max_video_duration > p2s.getDuration().valueOf()) ||
                        this.creation.creation_va_max_video_duration === 0)) {
                    var videoAnalysis = new VideoAnalysis(
                        delegate.getMediaURL(),
                        this.creation.creation_va_nb_requests,
                        this.creation.creation_va_score_min,
                        this.creation.creation_va_duration_min,
                        function(keywords, topics, iab) {
                            that.creation.videoAnalysisResults = new Object();
                            that.creation.videoAnalysisResults.keywords = keywords;
                            that.creation.videoAnalysisResults.topics = topics;
                            that.creation.videoAnalysisResults.iab = iab;
                            that.loadCreative(delegate, s2p, p2s);
                        },
                        p2s.getDuration().valueOf());
                    videoAnalysis.analyse();
                } else {
                    this.loadCreative(delegate, s2p, p2s);
                }
            } else {
                this.loadCreative(delegate, s2p, p2s);
            }
        };

        LocatePlayer.prototype.loadCreative = function() {
            // console.log('adwdebug loadCreative');
            var that = this;
            var delegate = arguments.length > 0 ? arguments[0] : null;
            var s2p = arguments.length > 1 ? arguments[1] : null;
            var p2s = arguments.length > 2 ? arguments[2] : null;
            if (that.adCalls.length < 1)
                return 0;
            if (typeof ADW_SSP_CFG_RC != "undefined" && ADW_SSP_CFG_RC.type && ADW_SSP_CFG_RC.url && ADW_SSP_CFG_RC.launch) {
                var keyRC = null;
                var tmpAddCall;
                for (var i = 0; that.adCalls.length; i++) {
                    if (that.adCalls[i].type == ADW_SSP_CFG_RC.type) {
                        keyRC = i;
                        tmpAddCall = that.adCalls[i];
                        tmpAddCall.type = ADW_SSP_CFG_RC.type;
                        tmpAddCall.url = ADW_SSP_CFG_RC.url;
                        that.adCalls.splice(keyRC, 0, tmpAddCall);
                        break;
                    }
                }
                if (keyRC == null) {
                    that.adCalls.push(ADW_SSP_CFG_RC);
                }
                delete ADW_SSP_CFG_RC;
            }

            try {
                if(localStorage.getItem("MC_CREA")){
                    that.adCalls[0].url = localStorage.getItem("MC_CREA");
                    that.adCalls[0].type = "vast";
                }  
            } catch (error) {
                console.log(error);
            }
            if(this.debug === 1){
                var ads = Object.assign({}, that.adCalls[0]);
                if(ads.urls && Array.isArray(ads.urls)){
                    ads.urls = ads.urls.reduce((curr, next) => {
                        if(!curr){
                            return curr + next.placement_id
                        }
                        return curr + ',' + next.placement_id
                    }, '');
                }

                var filteredAds = Object.keys(ads).reduce((obj, key) => {
                    var item = {};
                    item['adwdebugAdCalls'] = key;
                    item['value'] = ads[key];
                    obj.push(item);
                    return obj;
                }, [])
                console.log('adwdebug %cadCalls: ', 'background: #222; color: #bada55');
                console.table(filteredAds);
            }
            if (that.adCalls[0].type == "vast" || that.adCalls[0].type == "vast_linear") {
                var vastLoaderTmp = (that.config != null && typeof that.config.VASTLoader == "string") ? that.config.VASTLoader : null;
                if (vastLoaderTmp == null) {
                    if (that.adCalls[0].type == "vast")
                        vastLoaderTmp = "ADWLoader";
                    else
                        vastLoaderTmp = "IMAPlugin";
                }
            // console.log('adwdebug loadCreative ADWLoader');
                that.myVastLoaderManager = new  VastLoaderManager(that.playerIdentity, vastLoaderTmp,
                    that.creation,
                    that.tracker,
                    delegate,
                    s2p,
                    p2s,
                    function() {
                        that.instantiateInteractivity(that.playerIdentity);
                    },
                    that.adCalls,
                    function() {
                        that.prepareLoadCreative(delegate, s2p, p2s);
                    });

            } else if (that.adCalls[0].type == "v2_publication_id") {
                var MyPublicationManager = new PublicationManager(
                    that.playerIdentity,
                    (that.config != null && typeof that.config.studioVersion == "string") ? that.config.studioVersion : "V2",
                    that.creation.creation_url);
            } else if (that.adCalls[0].type == "vpaid") {
                var MyVPAIDManager = new VPAIDManager(
                    that.playerIdentity,
                    that.creation,
                    that.tracker,
                    delegate,
                    s2p,
                    p2s,
                    function() {
                        that.instantiateInteractivity(that.playerIdentity);
                    },
                    that.adCalls,
                    function() {
                        that.prepareLoadCreative(delegate, s2p, p2s);
                    });
            } else if (that.adCalls[0].type == "xandr") {
                // console.log(that);
                var MyAppnexusManager = new AppnexusManager(
                    that.playerIdentity,
                    that.creation,
                    that.tracker,
                    delegate,
                    s2p,
                    p2s,
                    function() {
                        that.instantiateInteractivity(that.playerIdentity);
                    },
                    that.adCalls,
                    function() {
                        that.prepareLoadCreative(delegate, s2p, p2s);
                    });
            }

            return 1;
        };

        LocatePlayer.prototype.buildPlayer = function(playerIdentity) {
            var Experience = function(playerName, options, locatePlayer) {
                this.options = options;
                this.playerName = playerName;
                this.locatePlayer = locatePlayer;
            };
            Experience.prototype.getMediaParams = function() {
                return this.options.mediaParams;
            };
            Experience.prototype.getOptions = function() {
                return this.options.options;
            };
            Experience.prototype.getPlayerParams = function() {
                return this.options.playerParams;
            };
            Experience.prototype.playerCreatedCB = function(playerAPI) {
                            // console.log("MC - playerCreatedCB", playerAPI.getIframe());
                if (this.options &&
                    this.options.playerClassCSS !== null &&
                    this.options.playerClassCSS !== "" &&
                    this.options.playerClassCSS !== undefined
                    ) {
                        playerAPI.getIframe().classList.add(this.options.playerClassCSS);
                    };
                this.locatePlayer.playerAlreadyInteractive.push(playerAPI.getIframe());
            };
            Experience.prototype.playerReady = function(playerAPI) {                                       // console.log("MC - playerReady", playerAPI.getIframe());
                if (this.playerName == 'youtube') {
                    var publisherParamsTMP = null;
                    if (publisherParamsTMP = getPublisherParams()) {
                        if (typeof publisherParamsTMP.youtubeParams !== 'undefined' && typeof publisherParamsTMP.youtubeParams.css !== 'undefined') {
                            var player = playerAPI.getIframe();
                            for (var property1 in publisherParamsTMP.youtubeParams.css) {
                                player.style[property1] = publisherParamsTMP.youtubeParams.css[property1];
                            }
                        }
                    }
                }
                this.locatePlayer.instantiateInteractivity([this.playerName, playerAPI]);
                return 1;
            };
            if (playerIdentity[0] == 'youtube')  {
                var containerDiv = playerIdentity[1].parentNode;

                var iframePosition = null;
                for (var i = 0; i < containerDiv.children.length ; i++) {
                    if (containerDiv.children[i].tagName === "IFRAME" &&
                        containerDiv.children[i].src.includes("youtube")){
                        iframePosition = i;
                    }
                }
                
                playerIdentity[1].remove();
                var exp = new Experience(playerIdentity[0], playerIdentity[2].rebuildPlayer, this);
                if (typeof(adways) != "undefined" && typeof(adways.playerHelpers) != "undefined" && typeof(adways.playerHelpers.YouTubePlayerBuilder) != "undefined") {
                    new adways.playerHelpers.YouTubePlayerBuilder(playerIdentity[2].rebuildPlayer.container, exp, iframePosition);
                } else {
                    var playerBuilderScript = document.createElement('script');
                    playerBuilderScript.type = "text/javascript";
                    playerBuilderScript.src = "https://play.adpaths.com/libs/playerHelpers/builders/youtube.js";
                    playerBuilderScript.addEventListener('load', function() {
                        new adways.playerHelpers.YouTubePlayerBuilder(playerIdentity[2].rebuildPlayer.container, exp, iframePosition);
                    });
                    
                    document.body.appendChild(playerBuilderScript);
                }
            } else {
                return -1;
            }
        };

        LocatePlayer.prototype.createInteractivityOnPlayerDetected = function(playerIdentity) {
            if (playerIdentity.length > 0) {
                //                        console.log("MC - createInteractivityOnPlayerDetected 0", playerIdentity[1], this.playerAlreadyInteractive);
                if (playerIdentity.length == 2 || (playerIdentity.length > 2 && typeof playerIdentity[2] == "object")) {
                    if ((!(this.playerAlreadyInteractive.indexOf(playerIdentity[1]) > -1) && this.maxInteractivePlayer == 0) ||
                        (!(this.playerAlreadyInteractive.indexOf(playerIdentity[1]) > -1) && this.playerAlreadyInteractive.length < this.maxInteractivePlayer)) {
                        //            console.log("MC - createInteractivityOnPlayerDetected 1", playerIdentity[1]);
                        //console.log(playerIdentity);
                        if (playerIdentity.length > 2 && playerIdentity[2] !== null && playerIdentity[2]['rebuildPlayer']) {
                            this.buildPlayer(playerIdentity);
                        } else {
                            this.instantiateInteractivity(playerIdentity);
                        }
                        this.playerAlreadyInteractive.push(playerIdentity[1]);
                        if (this.maxInteractivePlayer > 0 && this.playerAlreadyInteractive.length >= this.maxInteractivePlayer) {
                            var that = this;
                            [].forEach.call(this.observers, function(anObserver) {
                                anObserver.disconnect();
                                if (that.debug == 1) {
                                    console.log("disconnect");
                                }
                            });
                        }
                        return 1;
                    }
                }
            }
            return 0;
        };

        LocatePlayer.prototype.checkPlayerIDs = function() {

            var that = this;

                                                                                                                                    ;
                                };
        var BehaviourChecker = function(params) {
            this.firstCheck = {};
            var detectBlacklist = function(strToCheck) {
                var strToCheck = strToCheck.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                for (var id in adwKeywords) {
                    var keywordsCollection = adwKeywords[id];
                    if (keywordsCollection.keyword === 'blackList') {
                        var keywordsList = keywordsCollection.associated_keywords.split(',');
                        for (var j = 0; j < keywordsList.length; j++) {
                            var keyword = keywordsList[j].trim();
                            if (keyword !== '') {
                                var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                                if (strToCheck.match(re)) {
                                    //re, blaclist
                                    console.log('adwdebug Blacklist detected from this word : %ckeyword', 'background: #222; color: #bada55', re);
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };

            var blacklistDetected = '';
            if (typeof adwKeywords !== 'undefined' && adwKeywords !== null) {
                try {
                    if (typeof WIN != "undefined")
                        blacklistDetected = detectBlacklist(WIN.document.title);
                    else
                        blacklistDetected = detectBlacklist(window.document.title);
                } catch (e) {}
                /**Digiteka**/
                try {
                    blacklistDetected = detectBlacklist(window.parent.dtkPlayer.vinfos.video.title);
                } catch (e) {}
                /**fin Digiteka**/
            }
            //           console.log("blacklistDetected", blacklistDetected);
            if (blacklistDetected)
                return false;

            for (var param in params) {
                this[param] = params[param];
            }
            
            if (!this.creation.creation_use_visibility &&
                !this.creation.creation_minwidth &&
                // !this.creation.creation_startat &&
                typeof this.creation.creation_startat == "undefined" &&
                !this.creation.creation_prevent_incontent &&
                !this.creation.creation_allow_incontent &&
                !this.creation.creation_minduration &&
                !this.creation.creation_if_impactify &&
                !this.creation.creation_if_no_impactify &&
                !this.creation.creation_mobile_landscape &&
                !this.creation.creation_mobile_portrait &&
                !this.creation.creation_autoplay_allowed) {
                this.cb.call();
                if (this.creation.creation_repeat > 0) {
                    setTimeout(function() {
                        that.repeatCb.call(that);
                        var checkBehaviour = new BehaviourChecker(params);
                    }, this.creation.creation_repeat * 1000);
                }
                return true;
            }
            var that = this;
            this.cbLaunched = false;
            this.behaviours = new Object();
            if (typeof this.s2p == "undefined" && this.playerIdentity.length > 1 && typeof this.playerIdentity[1].options !== 'undefined' && typeof this.playerIdentity[1].options.s2p !== 'undefined' && this.playerIdentity[1].options.s2p !== null)
                this.s2p = this.playerIdentity[1].options.s2p;
            else if (typeof this.s2p == "undefined")
                this.s2p = new adways.interactive.SceneControllerWrapper();
            if (typeof this.p2s == "undefined" && this.playerIdentity.length > 1 && typeof this.playerIdentity[1].options !== 'undefined' && typeof this.playerIdentity[1].options.p2s !== 'undefined' && this.playerIdentity[1].options.p2s !== null)
                this.p2s = this.playerIdentity[1].options.p2s;
            else if (typeof this.p2s == "undefined")
                this.p2s = new adways.interactive.SceneControllerWrapper();
            if (typeof this.delegate == "undefined" && this.playerIdentity.length > 1 && typeof this.playerIdentity[1].options !== 'undefined' && typeof this.playerIdentity[1].options.delegate !== 'undefined' && this.playerIdentity[1].options.delegate !== null)
                this.delegate = this.playerIdentity[1].options.delegate;
            else if (typeof this.delegate == "undefined") {
                if (this.playerIdentity[0] === "noplayer") {
                    var videoSlot = new Object();
                    videoSlot.overlay = this.playerIdentity[1];
                    this.playerIdentity[1] = videoSlot;
                    if(this.debug === 1){
                        videoSlot.overlay.style.border = "5px solid red";
                    }                    
                } 
                this.delegate = eval("new " + delegateParams[this.playerIdentity[0]] + "(this.p2s, this.s2p, this.playerIdentity[1])");
            }

            this.delegate.hadPreroll = 0;
            if (this.playerIdentity[0] == 'zoomin' ||
                this.playerIdentity[0] == 'vpl' ||
                this.playerIdentity[0] == 'ooyalav4' ||
                this.playerIdentity[0] == 'youtube') {
                this.delegate.hadPreroll = 2;
            }
            this.p2s.getAdPlayState().addEventListener(adways.type.evt.ENUM, function() {
                if (that.p2s.getAdPlayState().valueOf() == adways.resource.playStates.PLAYING) {
                    that.delegate.hadPreroll = 1;
                }
            });

            this.tryExitCB = function(trigger) {
                for (var ind in that.behaviours) {
                    that.behaviours[ind].reset();
                }
                if(that.debug){
                    console.log("adwdebug %cbehaviour: exit callback",  'background: #222; color: red');
                }
                return false;
            }

            this.tryLaunchCB = function(trigger) {
                // console.log("adwdebug tryLaunchCB trigger", trigger,"dependencies", trigger.dependencies);
                for (var j = 0; j < trigger.dependencies.length; j++) {
                    if (that.behaviours[trigger.dependencies[j]]) {
                        that.behaviours[trigger.dependencies[j]].reset();
                    }
                }
                for (var j = 0; j < trigger.dependencies.length; j++) {
                    if (that.behaviours[trigger.dependencies[j]]) {
                        // console.log('behave dependencies',that.behaviours[trigger.dependencies[j]])
                        that.behaviours[trigger.dependencies[j]].reCheck(false);
                    }
                }
                // console.log(that);
                for (var ind in that.behaviours) {
                    // console.log("adwdebug tryLaunchCB", that.behaviours[ind] , "isChecked",  that.behaviours[ind].isChecked);
                    if (!that.behaviours[ind].isChecked)
                        return false;
                }
                for (var ind in that.behaviours) {
                    
                    if (!that.behaviours[ind].isValid){
                        if(that.debug){
                            // console.log('ind', that.behaviours[ind], that.behaviours[ind].isValid);
                            if(ind === 'visibility'){
                                if(!that.firstCheck[ind]){
                                    console.log("adwdebug %cbehaviour %c" + that.behaviours[ind].constructor.name + " %cis not valid",  'background: #222; color: red', 'background: #222; color: pink', 'background: #222; color: red');
                                }else{
                                    that.firstCheck[ind] = false;
                                }
                            }else{
                                console.log("adwdebug %cbehaviour %c" + that.behaviours[ind].constructor.name + " %cis not valid",  'background: #222; color: red', 'background: #222; color: pink', 'background: #222; color: red');
                            }                                                     
                        }
                        return false;
                    }else{
                        if(that.debug){
                            console.log("adwdebug %cbehaviour %c" + that.behaviours[ind].constructor.name + " %cis valid",  'background: #222; color: #bada55', 'background: #222; color: pink', 'background: #222; color: #bada55');
                        }
                    }                        
                }
                //            try {
                //                if (typeof adways != "undefined" && that.delegate != null) {
                //                    adways.destruct(that.delegate);
                //                    that.delegate = null;
                //                    //                    delete adways;
                //                }
                //            } catch (e) {
                //                console.log(e, "adw destroy delegate");
                //            }
                // console.log(this.playerIdentity, that.cbLaunched)
                if (!that.cbLaunched) {
                    // for (var ind in that.behaviours) {
                    //     that.behaviours[ind].reset();
                    // }
                    that.cbLaunched = true;
                    // console.log("adwdebug cbLaunched");
                    if (that.playerIdentity[0] === "noplayer" && that.debug === 1) {
                        that.playerIdentity[1].overlay.style.border = "5px solid yellow";
                    }
                    if(that.debug){
                        console.log("adwdebug %cAll behaviours are valid",  'background: #222; color: #bada55');
                    }
                    that.cb.call(that, that.delegate, that.s2p, that.p2s);
                    if (this.creation.creation_repeat > 0) {
                        setTimeout(function() {
                            that.repeatCb.call(that);
                            var checkBehaviour = new BehaviourChecker(params);
                        }, this.creation.creation_repeat * 1000);
                    }
                }
                return true;
            };

            if (this.creation.creation_autoplay_allowed) {
                this.behaviours["autoplayallowed"] = new AutoplayAllowedBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": []
                });
            }
            if (this.creation.creation_minduration) {
                this.behaviours["minduration"] = new MinDurationBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": []
                });
            }
            if (this.creation.creation_use_visibility) {
                this.firstCheck["visibility"] = true;
                this.behaviours["visibility"] = new UseVisibilityBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["minwidth"],
                    "playerIdentity": this.playerIdentity
                });
            }
            if (this.creation.creation_minwidth) {
                this.behaviours["minwidth"] = new MinWidthBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["minduration", "visibility", "startat"]
                });
            }
            if (typeof this.creation.creation_startat == "number" && this.creation.creation_startat >= 0) {
                this.behaviours["startat"] = new StartAtBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["minwidth", "visibility", "minduration"]
                });
            }
            if (this.creation.creation_prevent_incontent) {
                this.behaviours["preventincontent"] = new PreventinContentBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryExitCB,
                    "dependencies": []
                });
            }
            if (this.creation.creation_allow_incontent) {
                this.behaviours["allowincontent"] = new AllowinContentBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["startat"]
                });
            }
            if (this.creation.creation_if_impactify) {
                this.behaviours["ifimpactify"] = new IfImpactifyBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": []
                });
            }
            if (this.creation.creation_if_no_impactify) {
                this.behaviours["ifnoimpactify"] = new IfNoImpactifyBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": []
                });
            }
            if (this.creation.creation_mobile_landscape) {
                this.behaviours["mobilelandscape"] = new MobileLandscapeBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["minduration", "visibility", "startat", "minwidth"]
                });
            }
            if (this.creation.creation_mobile_portrait) {
                this.behaviours["mobileportrait"] = new MobilePortraitBehaviour({
                    "s2p": this.s2p,
                    "p2s": this.p2s,
                    "delegate": this.delegate,
                    "creation": this.creation,
                    "cb": this.tryLaunchCB,
                    "dependencies": ["minduration", "visibility", "startat", "minwidth"]
                });
            }
            for (var ind in this.behaviours) {
                this.behaviours[ind].reCheck();
            }
            // this.tryLaunchCB();
            // console.log(this.behaviours["minwidth"]);
        };
        
        var AutoplayAllowedBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.video = document.createElement('video');
            this.video.src = '//videos.adpaths.com/000_v3_encode/video_16x16.mp4';
            this.video.muted = true;
            this.video.setAttribute('webkit-playsinline', true);
            this.video.setAttribute('playsinline', true);
            this.checkAutoplay = function() {
                that.isChecked = true;
                var promise = that.video.play();
                if (promise !== undefined) {
                    promise.then(_ => {
                        //                    console.log("behaviour promise done");
                        that.isValid = true;
                        that.cb(that);
                    }).catch(error => {
                        //                    console.log("behaviour promise error");
                        that.cb(that);
                    });
                } else {
                    //                console.log("behaviour promise undefined");
                    that.cb(that);
                }
            };
            //this.checkAutoplay();
        };

        AutoplayAllowedBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
        };

        AutoplayAllowedBehaviour.prototype.reCheck = function() {
            this.checkAutoplay();
        };

        var StartAtBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.checkDepedencies = true;
            this.isChecked = false;
            this.isValid = false;
            this.currentTimeChangedListener = function() {
                if (isNaN(that.p2s.getCurrentTime().valueOf())) {
                    return;
                }
//                console.log(that.p2s.getCurrentTime().valueOf());
                switch (that.creation.creation_startat_type) {
                    case 'second':
                        if (that.p2s.getCurrentTime().valueOf() < that.creation.creation_startat) {
                            return;
                        }
                        break;
                    case 'percent':
                        if (isNaN(that.p2s.getDuration().valueOf()) ||
                            ((that.p2s.getCurrentTime().valueOf() / that.p2s.getDuration().valueOf()) * 100) < that.creation.creation_startat) {
                            return;
                        }
                        break;
                    case 'second_from_the_end':
                        if (isNaN(that.p2s.getDuration().valueOf()) ||
                            ((that.p2s.getDuration().valueOf() - that.p2s.getCurrentTime().valueOf()) > that.creation.creation_startat)) {
                            return;
                        }
                        break;
                        //                    case 'percent_from_the_end':
                        //                        if (isNaN(that.p2s.getDuration().valueOf()) ||
                        //                            ( ((1-(that.p2s.getCurrentTime().valueOf() / that.p2s.getDuration().valueOf()))*100) > that.creation.creation_startat)) {
                        //                            return;
                        //                        }
                        //                        break;
                }
                that.p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, that.currentTimeChangedListener);
                that.isValid = true;
                that.isChecked = true;
                //                console.log("adwdebug StartAtBehaviour", that.checkDepedencies);
                if (that.checkDepedencies)
                    that.cb(that);
            };
            //this.p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.currentTimeChangedListener);
            //this.currentTimeChangedListener();
        };

        StartAtBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            this.p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.currentTimeChangedListener);
        };

        StartAtBehaviour.prototype.reCheck = function() {
            this.checkDepedencies = arguments.length > 0 ? arguments[0] : true;
            this.p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.currentTimeChangedListener);
            this.currentTimeChangedListener();
            this.checkDepedencies = true;
        };

        var MinWidthBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.checkDepedencies = true;
            this.isChecked = false;
            this.isValid = false;
            //            this.currentTimeChangedListener = function() {
            //                //console.log(that.p2s.getPlayerSize());
            //                if ((isNaN(that.p2s.getCurrentTime().valueOf()) || that.p2s.getCurrentTime().valueOf() == 0) &&
            //                    typeof that.creation.creation_startat != "undefined" && that.creation.creation_startat > 0) {
            //                    return;
            //                } else if (that.p2s.getCurrentTime().valueOf() >= 1) {
            //                    if (!isNaN(that.p2s.getPlayerSize()[0]) && that.p2s.getPlayerSize()[0] >= that.creation.creation_minwidth) {
            //                        that.isValid = true;
            //                    }
            //                    that.p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, that.currentTimeChangedListener);
            //                    that.isChecked = true;
            //                    //                console.log("MinWidthBehaviour", that.checkDepedencies);
            //                    if (that.checkDepedencies)
            //                        that.cb(that);
            //                }
            //            };
            this.playerSizeChangedListener = function() {
                that.isChecked = true;
                // console.log('adwdebug ',that.p2s.getPlayerSize(), that.creation.creation_minwidth, that);
                if(that.delegate.constructor.name == 'NoPlayerDelegate') {
                    if (!isNaN(that.p2s.getPlayerSize()[0]) && that.p2s.getPlayerSize()[0] >= that.creation.creation_minwidth) {
                        // console.log("adwdebug image MinWidthBehaviour", that.checkDepedencies);
                        that.isValid = true;
                        if (that.checkDepedencies)
                            that.cb(that);
                    }  
                }
                else {
                    if (isNaN(that.p2s.getCurrentTime().valueOf()) || that.p2s.getCurrentTime().valueOf() == 0) {
                        return;
                    } else if (that.p2s.getCurrentTime().valueOf() > 0) {
                        if (!isNaN(that.p2s.getPlayerSize()[0]) && that.p2s.getPlayerSize()[0] >= that.creation.creation_minwidth) {
                                            // console.log("adwdebug video MinWidthBehaviour", that.checkDepedencies);
                            that.isValid = true;
                            //                        that.p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, that.currentTimeChangedListener);
                            if (that.checkDepedencies)
                                that.cb(that);
                        }
                    }
                }
            };
        };

        MinWidthBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            //            this.p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.currentTimeChangedListener);
            this.p2s.removeEventListener(adways.resource.events.PLAYER_SIZE_CHANGED, this.playerSizeChangedListener);
        };

        MinWidthBehaviour.prototype.reCheck = function() {
            this.checkDepedencies = arguments.length > 0 ? arguments[0] : true;
            //            this.p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.currentTimeChangedListener);
            //            this.currentTimeChangedListener();
            this.p2s.addEventListener(adways.resource.events.PLAYER_SIZE_CHANGED, this.playerSizeChangedListener);
            this.playerSizeChangedListener();
            this.checkDepedencies = true;
        };

        var MinDurationBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.durationChangedListener = function() {
//                console.log("adwdebug durationChangedListener", that.p2s.getDuration().valueOf(), that.p2s.getCurrentTime().valueOf());
                if (isNaN(that.p2s.getDuration().valueOf()) || isNaN(that.p2s.getCurrentTime().valueOf()) || that.p2s.getDuration().valueOf() < 0.5) {
                    return;
                } else {
                    switch (that.creation.creation_minduration_type) {
                        case 'second':
                            if (that.p2s.getDuration().valueOf() >= that.creation.creation_minduration) {
                                that.isValid = true;
                            }
                            break;
                        case 'remaining':
                            //console.log(that.p2s.getDuration().valueOf(), "duration");
                            if ((that.p2s.getDuration().valueOf() - that.p2s.getCurrentTime().valueOf()) >= that.creation.creation_minduration) {
                                that.isValid = true;
                            }
                            break;
                    }
                    that.p2s.removeEventListener(adways.resource.events.DURATION_CHANGED, that.durationChangedListener);
                    that.isChecked = true;
                    //                console.log("adwdebug MinDurationBehaviour");
                    that.cb(that);
                }
            };
            //this.p2s.addEventListener(adways.resource.events.DURATION_CHANGED, this.durationChangedListener);
            //this.durationChangedListener();
        };

        MinDurationBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            this.p2s.removeEventListener(adways.resource.events.DURATION_CHANGED, this.durationChangedListener);
        };

        MinDurationBehaviour.prototype.reCheck = function() {
            this.p2s.addEventListener(adways.resource.events.DURATION_CHANGED, this.durationChangedListener);
            this.durationChangedListener();
        };


        var PreventinContentBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.isChecked = true;
            this.isValid = true;
            this.adStateChangedListener = function() {
                if (that.p2s.getAdPlayState().valueOf() == adways.resource.playStates.PLAYING) {
                    that.p2s.getAdPlayState().removeEventListener(adways.type.evt.ENUM, that.adStateChangedListener);
                    // that.isChecked = true;
                    // that.isValid = true;
                    that.cb();
                }
            };
        };

        PreventinContentBehaviour.prototype.reset = function() {
            // this.isChecked = false;
            // this.isValid = false;
            this.p2s.getAdPlayState().removeEventListener(adways.type.evt.ENUM, this.adStateChangedListener);
        };

        PreventinContentBehaviour.prototype.reCheck = function() {
            this.p2s.getAdPlayState().addEventListener(adways.type.evt.ENUM, this.adStateChangedListener);
            this.adStateChangedListener();
        };
        var AllowinContentBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            var that = this;
            this.isChecked = true;
            this.isValid = false;
            this.adStateChangedListener = function() {
                if (that.p2s.getAdPlayState().valueOf() == adways.resource.playStates.PLAYING) {
                    that.p2s.getAdPlayState().removeEventListener(adways.type.evt.ENUM, that.adStateChangedListener);
                    // that.isChecked = true;
                    that.isValid = true;
                    that.cb(that);
                }
            };
        };

        AllowinContentBehaviour.prototype.reset = function() {
            // this.isChecked = false;
            // this.isValid = false;
            this.p2s.getAdPlayState().removeEventListener(adways.type.evt.ENUM, this.adStateChangedListener);
        };

        AllowinContentBehaviour.prototype.reCheck = function() {
            this.p2s.getAdPlayState().addEventListener(adways.type.evt.ENUM, this.adStateChangedListener);
            this.adStateChangedListener();
        };

        var UseVisibilityBehaviour = function(params) {
            // console.log('use');
            for (var param in params) {
                this[param] = params[param];
            }
            this.checkDepedencies = true;
            this.isChecked = false;
            this.isValid = false;
            this.tmpVisible = false;
            this.visibleTimer = 0;
            this.visibilityInterval = null;
            this.boxElement = null;
            this.observer = null;
            if (typeof this.delegate.getVideoElement == "function") {
                this.boxElement = this.delegate.getVideoElement();
            } else {
                this.boxElement = this.playerIdentity[1];
            }
            this.tryToObserve();
        };

        UseVisibilityBehaviour.prototype.tryToObserve = function() {
            var that = this;
            try {
                function tryObserve() {
                    var numSteps = 20.0;

                    function createObserver() {
                        var options = {
                            root: null,
                            rootMargin: "0px",
                            threshold: buildThresholdList()
                        };
                        that.observer = new IntersectionObserver(handleIntersect, options);
                        //that.observer.observe(that.boxElement);
                    };

                    function buildThresholdList() {
                        var thresholds = [];
                        for (var i = 1.0; i <= numSteps; i++) {
                            var ratio = i / numSteps;
                            thresholds.push(ratio);
                        }
                        thresholds.push(0);
                        return thresholds;
                    };

                    function handleIntersect(entries, observer) {
                        entries.forEach(function(entry) {
                            var percent = that.creation.creation_visibility_percent;
                            var timer = that.creation.creation_visibility_timer;
                            that.isChecked = true;
                            // console.log('adwdebug visible',entry.intersectionRatio);
                            if ((entry.intersectionRatio + 0.01) >= percent / 100) {
                                if (timer > 0) {
                                    if (!that.isVisible && !that.tmpVisible) {
                                        that.tmpVisible = true;
                                        // console.log("UseVisibilityBehaviour visibilityInterval");
                                        that.visibilityInterval = setInterval(function() {
                                            that.visibleTimer++;
                                            if (that.visibleTimer >= timer) {
                                                that.tmpVisible = false;
                                                that.visibleTimer = 0;
                                                clearInterval(that.visibilityInterval);
                                                that.visibilityInterval = null;
                                                that.observer.unobserve(that.boxElement);
                                                that.isValid = true;
                                                //                                                console.log("adwdebug UseVisibilityBehaviour", that.checkDepedencies);
                                                if (that.checkDepedencies)
                                                    that.cb(that);
                                            }
                                        // that.cb(that);
                                        }, 1000);
                                    }
                                } else {
                                    that.observer.unobserve(that.boxElement);
                                    that.isValid = true;
                                    // console.log("adwdebug UseVisibilityBehaviour", that.isValid, that.checkDepedencies);
                                    if (that.checkDepedencies){
                                        // console.log('test depend');
                                        that.cb(that);
                                    }
                                        
                                }
                            } else {
                                that.tmpVisible = false;
                                clearInterval(that.visibilityInterval);
                                that.visibilityInterval = null;
                                that.visibleTimer = 0;
                            }
                            // console.log("UseVisibilityBehaviour 2", that.checkDepedencies);
                            //                            if (that.checkDepedencies)
                            //                                that.cb(that);
                        });
                    };
                    createObserver();
                }
                if (document.visibilityState == "visible") {
                    tryObserve();
                } else {
                    function handleVisibilityChange() {
                        if (document.visibilityState == "visible") {
                            document.removeEventListener("visibilitychange", handleVisibilityChange);
                            tryObserve();
                        }
                    }
                    document.addEventListener("visibilitychange", handleVisibilityChange);
                }
            } catch (e) {
                this.isValid = true; //pour lancer quand meme si ca bug
                this.isChecked = true;
                this.cb(that);
            }
        };

        UseVisibilityBehaviour.prototype.reset = function() {
            // console.log('reset')
            this.isValid = false;
            this.tmpVisible = false;
            this.visibleTimer = 0;
            clearInterval(this.visibilityInterval);
            this.visibilityInterval = null;
            try {
                this.observer.unobserve(this.boxElement);
            } catch (e) {}
        };

        UseVisibilityBehaviour.prototype.reCheck = function() {
            // console.log('argu', arguments)
            this.checkDepedencies = arguments.length > 0 ? arguments[0] : true;
            var that = this;
            try {
                this.observer.observe(this.boxElement);
            } catch (e) {
                // console.log('test');
                this.isValid = true; //pour lancer quand meme si ca bug
                this.isChecked = true;
                this.cb(that);
            }
            if(that.creation.creation_visibility_timer>0) {
                setTimeout(function() {
                    that.checkDepedencies = true;
                }, (that.creation.creation_visibility_timer) * 1000);
            }
            else {
                    // console.log('test2')
                    that.checkDepedencies = true;
            }
        };

        var IfImpactifyBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            this.check = null;
            this.timeout = null;
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.impactifyDetected = function() {
                if (typeof window._impactify_ != "undefined" && !_impactify_.inDev && !_impactify_.inDemo) {
                    if (that.check != null) {
                        clearInterval(that.check);
                        that.check = null;
                    }
                    if (that.timeout != null) {
                        clearTimeout(this.timeout);
                        that.timeout = null;
                    }
                    that.isChecked = true;
                    that.isValid = true;
                    that.cb(that);
                }
            };
        };

        IfImpactifyBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            if (this.check != null) {
                clearInterval(this.check);
                this.check = null;
            }
            if (this.timeout != null) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };

        IfImpactifyBehaviour.prototype.reCheck = function() {
            var that = this;
            this.check = setInterval(function() {
                that.impactifyDetected();
            }, 200);
            this.timeout = setTimeout(function() {
                if (that.check != null) {
                    clearInterval(that.check);
                    that.check = null;
                    that.isChecked = true;
                    that.isValid = false;
                    that.cb(that);
                }
            }, 5000);
            that.impactifyDetected();
        };

        var IfNoImpactifyBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            this.check = null;
            this.timeout = null;
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.impactifyDetected = function() {
                if (typeof window._impactify_ != "undefined" && !_impactify_.inDev && !_impactify_.inDemo) {
                    if (that.check != null) {
                        clearInterval(that.check);
                        that.check = null;
                    }
                    if (that.timeout != null) {
                        clearTimeout(that.timeout);
                        that.timeout = null;
                    }
                    that.isChecked = true;
                    that.isValid = false;
                    that.cb(that);
                }
            };
        };

        IfNoImpactifyBehaviour.prototype.reset = function() {
            var that = this;
            this.check = setInterval(function() {
                that.impactifyDetected();
            }, 200);
            this.timeout = setTimeout(function() {
                if (that.check != null) {
                    clearInterval(that.check);
                    that.check = null;
                }
            }, 5000);
            that.impactifyDetected();
        };

        IfNoImpactifyBehaviour.prototype.reCheck = function() {
            var that = this;
            this.check = setInterval(function() {
                that.impactifyDetected();
            }, 200);
            this.timeout = setTimeout(function() {
                if (that.check != null) {
                    clearInterval(that.check);
                    that.check = null;
                    that.isChecked = true;
                    that.isValid = true;
                    that.cb(that);
                }
            }, 5000);
            this.impactifyDetected();
        };

        var MobileLandscapeBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            this.check = null;
            this.timeout = null;
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.isPortrait = false;
            this.isLandscape = false;
            if (Targetizer.mobileAndTabletcheck()) {
                this.handleOrientation = function() {
                    setTimeout(function() {
                        that.isChecked = true;
                        that.isLandscape = (window.innerHeight / window.innerWidth) < 1;
                        that.isPortrait = (window.innerHeight / window.innerWidth) > 1;
                        if (that.isLandscape) {
                            that.isValid = true;
                        } else {
                            that.isValid = false;
                        }
                        that.cb(that);
                    }, 50);
                    return;
                };
                if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
                    this.orientationEvent = "orientationchange";
                } else {
                    this.orientationEvent = "resize";
                }
                window.addEventListener(this.orientationEvent, this.handleOrientation, false);
                this.handleOrientation();
            } else {
                this.isChecked = true;
                this.isValid = true;
                that.cb(that);
            }
        };

        MobileLandscapeBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            this.isPortrait = false;
            this.isLandscape = false;
            window.removeEventListener(this.orientationEvent, this.handleOrientation, false);
        };

        MobileLandscapeBehaviour.prototype.reCheck = function() {
            var that = this;
            if (Targetizer.mobileAndTabletcheck()) {
                window.addEventListener(this.orientationEvent, this.handleOrientation, false);
                this.handleOrientation();
            } else {
                this.isChecked = true;
                this.isValid = true;
                that.cb(that);
            }
        };

        var MobilePortraitBehaviour = function(params) {
            for (var param in params) {
                this[param] = params[param];
            }
            this.check = null;
            this.timeout = null;
            var that = this;
            this.isChecked = false;
            this.isValid = false;
            this.isPortrait = false;
            this.isLandscape = false;
            if (Targetizer.mobileAndTabletcheck()) {
                this.handleOrientation = function() {
                    setTimeout(function() {
                        that.isChecked = true;
                        that.isLandscape = (window.innerHeight / window.innerWidth) < 1;
                        that.isPortrait = (window.innerHeight / window.innerWidth) > 1;
                        if (that.isPortrait) {
                            that.isValid = true;
                        } else {
                            that.isValid = false;
                        }
                        that.cb(that);
                    }, 50);
                    return;
                };
                if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
                    this.orientationEvent = "orientationchange";
                } else {
                    this.orientationEvent = "resize";
                }
                window.addEventListener(this.orientationEvent, this.handleOrientation, false);
                this.handleOrientation();
            } else {
                this.isChecked = true;
                this.isValid = true;
                that.cb(that);
            }
        };

        MobilePortraitBehaviour.prototype.reset = function() {
            this.isChecked = false;
            this.isValid = false;
            this.isPortrait = false;
            this.isLandscape = false;
            window.removeEventListener(this.orientationEvent, this.handleOrientation, false);
        };

        MobilePortraitBehaviour.prototype.reCheck = function() {
            var that = this;
            if (Targetizer.mobileAndTabletcheck()) {
                window.addEventListener(this.orientationEvent, this.handleOrientation, false);
                this.handleOrientation();
            } else {
                this.isChecked = true;
                this.isValid = true;
                that.cb(that);
            }
        };
        var Request = function (requestURL, method, dataConfig, cb, contentType, header) {
            var request = new adways.ajax.Request();
            request.setMethod(method);
            request.setURL(requestURL);
            request.setContentType("application/json");
            if (contentType)
                request.setContentType(contentType);
            if (method !== 'GET' && typeof dataConfig === 'object')
                request.setDataObject(dataConfig);
            if (method !== 'GET' && typeof dataConfig === 'string')
                request.setDataText(dataConfig);
            if (typeof header === 'object' && typeof header.key === 'string' && typeof header.value === 'string')
                request.addHeader(header.key, header.value);
            request.getXHR().withCredentials = false;
            var requestDoneListener = function (evt) {
                if (request !== null && request.getState() === adways.ajax.states.DONE) {
                    request.removeEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                    var responseText = request.getResponseText();
                    if (cb)
                        cb(responseText);
                }
            };
            request.addEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
            request.load();
        };

        var uniqid = function () {
            return (new Date().getTime() + Math.floor((Math.random() * 10000) + 1)).toString(16);
        };

        var VideoAnalysis = function (mediaUrl, requestsCountMinToAnalyse, scoreMin, durationMin, callback, videoDuration) {
//            console.log('adwdebug VideoAnalysis', mediaUrl);
            this.mediaUrl = mediaUrl;
            this.videoDuration = videoDuration;
            this.mediaToStore = mediaUrl;
//            this.requestsCountMinToAnalyse = 100;
            this.requestsCountMinToAnalyse = requestsCountMinToAnalyse;
//            this.scoreMin = 0.9;
            this.scoreMin = scoreMin;
//            this.durationMin = 5;
            this.durationMin = durationMin;
            this.keywords = [];
            this.iab = [];
            this.topics = [];
//            this.callback = (arguments.length>1?arguments[1]:null);
//console.log("adwdebug VideoAnalysis mediaUrl :",mediaUrl);
            this.callback = callback;
            
            var r = new RegExp('^(?:[a-z]+:)?//', 'i');
            if(!r.test(this.mediaUrl)) { //url relative 
                this.mediaUrl = window.location.origin + this.mediaUrl;
            }
        
            try {
                this.mediaToStore = this.mediaUrl.substring(0, this.mediaUrl.indexOf(".mp4") + 4);
            } catch (e) {
                console.log(e);
            }
            // special ultimedia
            try {
                if(location.hostname.match('www.ultimedia.com')){
                    this.mediaToStore = this.mediaUrl.substring(this.mediaUrl.lastIndexOf("/") + 1, this.mediaUrl.indexOf(".mp4") + 4);
                }                  
            } catch (e) {
                console.log("VideoAnalysis ultimediahack failed");
            }
            //fin special ultimedia

//console.log("adwdebug VideoAnalysis mediaToStore :",this.mediaToStore);
            this.wearecontextToken = "";
            this.wearecontextURL = 'https://api.wearecontext.com/';
            this.apiGatewayContextPrefix = "https://k516o1xuae.execute-api.eu-west-1.amazonaws.com/prod/";
            this.tags = null;
            this.subjects = null;
        };

        VideoAnalysis.prototype.analyse = function () {
            var requestURL = this.apiGatewayContextPrefix + "valossa-get?media=" + encodeURIComponent(this.mediaToStore);
            var that = this;
            var wearecontextMediaIDCb = function (responseText) {
                // console.log("adwdebug wearecontextMediaIDCb responseText", responseText);
                if (responseText && responseText !== 'Not Found') {
//                    //debug pour compter les appels
                   // if(that.callback && that.callback !== null) {
                   //     that.callback(that.keywords, that.topics, that.iab);
                   // }
                   // return;
//                    //fin debug pour compter les appels
                    var responseParsed = JSON.parse(responseText);
                    var result = responseParsed.result;
                    var context_media_id = responseParsed.valossa_media_id;
                    var nb_requests = responseParsed.nb_requests;
                    var date_last_requested = responseParsed.date_last_requested;
                    var refresh_delay = responseParsed.refresh_delay;

                    if (typeof result !== "undefined" && result !== null && result !== "") {
                    //    console.log("adwdebug wearecontextMediaIDCb result OK");
                        that.computeResult(result);
                    }
                    else {
                    //    console.log("adwdebug wearecontextMediaIDCb result not OK");
                        if ((typeof context_media_id === "undefined" || context_media_id === null || context_media_id === "")) {
                            if (typeof nb_requests !== "undefined" && nb_requests !== null && nb_requests > that.requestsCountMinToAnalyse) {
                                // console.log("adwdebug wearecontextMediaIDCb nb_requests OK");
                                that.checkToken(function(res){
                                    try {
                                        var responseParsed = JSON.parse(res);
                                        if (typeof responseParsed.access_token === 'string') {
                                            that.wearecontextToken = responseParsed.access_token;
                                        }
                                    } catch (error) {
                                    }                                    
                                    that.startUpload();
                                });
                            }
                            if(that.callback && that.callback !== null) {
                                that.callback(that.keywords, that.topics, that.iab);
                            }
                        } else if (typeof date_last_requested !== "undefined" && date_last_requested !== null
                            && typeof refresh_delay !== "undefined" && refresh_delay !== null && refresh_delay !== ""
                            && (Date.now() - date_last_requested) > (refresh_delay * 1000)) {
//                            console.log("adwdebug  wearecontextMediaIDCb refresh_delay OK");
                             //et mise à jour du referesh delay
                            that.checkToken(function(res){
                                try {
                                    var responseParsed = JSON.parse(res);
                                    if (typeof responseParsed.access_token === 'string') {
                                        that.wearecontextToken = responseParsed.access_token;
                                    }
                                    that.resultsReady(context_media_id);
                                } catch (error) {

                                } 
                            });
                        } else {
                            if(that.callback && that.callback !== null) {
                                that.callback(that.keywords, that.topics, that.iab);
                            }
                        }
                    }
                } else {
                    that.createWeAreContextEntity();
                    if(that.callback && that.callback !== null) {
                        that.callback(that.keywords, that.topics, that.iab);
                    }
                }
            };
            Request(requestURL, "GET", null, wearecontextMediaIDCb);
        };

        VideoAnalysis.prototype.resultsReady = function (uuid) {
            var requestURL = this.wearecontextURL + "v2/videos/" + uuid;
            var that = this;
            var header = {key:"Authorization", value: "Bearer " + this.wearecontextToken};

            var jobStatusCb = function (responseText) {
                if (responseText) {
                    try {
                        var responseParsed = JSON.parse(responseText);
                        // console.log("adwdebug jobStatusCb", responseParsed);
                        if (typeof responseParsed.status !== "undefined" && responseParsed.status !== null) {
                            if (responseParsed.status === "done" && typeof responseParsed.results !== "undefined" ) {
                                that.setResults(responseParsed.results);
                            } else {
                                that.setRefreshDelay();                                
                                if(that.callback && that.callback !== null) {
                                    that.callback(that.keywords, that.topics, that.iab);
                                }
                            }
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            };
//            console.log("adwdebug resultsReady");
            Request(requestURL, "GET", null, jobStatusCb, 'application/json', header);
        };

        VideoAnalysis.prototype.checkToken = function (cb) {
            // console.log("adwdebug checkToken");
            if(this.wearecontextToken==="") {
                var requestURL = this.wearecontextURL + "v1/token";
                var that = this;
                var dataConfig = "username=adways.trial%40wearecontext.com&password=~GMF%60X9._wUV_ji%7D~%5EMP%3B%7BouW%265%3D%5E%2C8%5C5%3AbAg-TzUkMv8m";
                Request(requestURL, "POST", dataConfig, cb, "application/x-www-form-urlencoded");
            } else  {
                cb();
            }
        }
        VideoAnalysis.prototype.startUpload = function () {
            // console.log("adwdebug startUpload");
            var requestURL = this.wearecontextURL + "v2/videos";
            var header = {key:"Authorization", value: "Bearer " + this.wearecontextToken};
            var that = this;
            var dataConfig = {};
            dataConfig.url = this.mediaUrl;
            dataConfig.external_id = this.mediaToStore;

            var wearecontextNewJobCb = function (responseText) {
            // console.log("adwdebug wearecontextNewJobCb responseText",responseText);
                if (responseText) {
                    try {
                        var responseParsed = JSON.parse(responseText);
                        if (typeof responseParsed.uuid !== "undefined" && responseParsed.uuid !== null && responseParsed.uuid !== "") {
                            that.setWeAreContextId(responseParsed.uuid);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            };
            Request(requestURL, "POST", dataConfig, wearecontextNewJobCb, "application/json", header);
        };

        VideoAnalysis.prototype.createWeAreContextEntity = function () {
            // console.log("adwdebug createWeAreContextEntity");
            var requestURL = this.apiGatewayContextPrefix + "valossa-post";
            var dataConfig = {};
            dataConfig.media = encodeURIComponent(this.mediaToStore);
            dataConfig.realMedia = encodeURIComponent(this.mediaUrl);
            dataConfig.urlLocation = encodeURIComponent(window.location.href);
            dataConfig.videoDuration = this.videoDuration;
            var createWeAreContextEntityCb = function (responseText) {
                // console.log("adwdebug createWeAreContextEntityCb responseText", responseText);
            };
            Request(requestURL, "POST", dataConfig, createWeAreContextEntityCb);
        };

        VideoAnalysis.prototype.setWeAreContextId = function (uuid) {
            var requestURL = this.apiGatewayContextPrefix + "valossa-put";
            var dataConfig = {};
            dataConfig.media = encodeURIComponent(this.mediaToStore);
            dataConfig.valossa_media_id = uuid;
            dataConfig.date_last_requested = Date.now();
            var storeWeAreContextIdCb = function (responseText) {
//                console.log("adwdebug storeWeAreContextIdCb responseText", responseText);
            };
            Request(requestURL, "PUT", dataConfig, storeWeAreContextIdCb);
        };

        VideoAnalysis.prototype.setRefreshDelay = function (refreshDelay) {
            var requestURL = this.apiGatewayContextPrefix + "valossa-put";
            var dataConfig = {};
            dataConfig.media = encodeURIComponent(this.mediaToStore);
            dataConfig.refresh_delay = refreshDelay;
            dataConfig.date_last_requested = Date.now();
            var setRefreshDelayCb = function (responseText) {
//                console.log("adwdebug setRefreshDelayCb responseText", responseText);
            };
            Request(requestURL, "PUT", dataConfig, setRefreshDelayCb);
        };

        /*VideoAnalysis.prototype.setNbRequests = function (nbRequests) {
         var requestURL = this.apiGatewayContextPrefix + "valossa-put";
         var dataConfig = {};
         dataConfig.media = encodeURIComponent(this.mediaToStore);
         dataConfig.nbRequests = nbRequests;
         var setNbRequestsCb = function (responseText) {
         console.log("adwdebug setNbRequestsCb responseText", responseText);
         };
         Request(requestURL, "PUT", dataConfig, setNbRequestsCb);
         };*/

        VideoAnalysis.prototype.setResults = function (responseParsed) {
//            console.log("adwdebug setResults");
            try {
                var requestURL = this.apiGatewayContextPrefix + "valossa-put";
                var dataConfig = {};
                dataConfig.media = encodeURIComponent(this.mediaToStore);
                dataConfig.result = JSON.stringify(responseParsed);
                var saveResultCb = function (responseText) {
                    // console.log("adwdebug saveResultCb responseText", responseText);
                };
                Request(requestURL, "PUT", dataConfig, saveResultCb);
                this.computeResult(responseParsed);
            } catch (e) {
                console.log(e);
            }

        };

        VideoAnalysis.prototype.computeResult = function (responseParsed) {
            // console.log("adwdebug computeResult", responseParsed);
            if (responseParsed) {
                try {
                    var summary = null;
                    if (typeof responseParsed['summary'] !== 'undefined')
                        summary = responseParsed['summary'];
                    if (summary) {                        
                        if (typeof summary['iab'] !== 'undefined')
                            iabs = summary['iab'];
                        // console.log("adwdebug iabs:", iabs);
                        for (entry in iabs) {
                            this.iab.push(iabs[entry]["label"]);
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            if(this.callback && this.callback !== null) {
                this.callback(this.keywords, this.topics, this.iab);
            }
        };
        
                                
        
        
        
        
        
        
        
                    ShowHeroesIdentifier = function() {
                this._playerClass = "showheroes";
                this._playerAPI = null;
                this._options = null;
                this._playersToCheckAgain = arguments[1];
            };
            ShowHeroesIdentifier.prototype.getPlayerIdentity = function() {
                return Array(this._playerClass, this._playerAPI);
            };
            ShowHeroesIdentifier.prototype.detect = function(playerAPI) {
                if (playerAPI.id.match('duplex-video-') != null &&
                    playerAPI.parentNode.id.match('wrapper-video-') != null &&
                    playerAPI.parentNode.parentNode.id.match('duplex-host') != null &&
                    playerAPI.ownerDocument.defaultView.frameElement.id.match('showheroes-iframe-') != null) {
                    if (typeof SHCore == "object" && typeof SHCore.api != "undefined") {
                        this._playerAPI = playerAPI.ownerDocument.defaultView.frameElement;
                        var index = this._playersToCheckAgain.indexOf(playerAPI);
                        if (index > -1) {
                            this._playersToCheckAgain.splice(index, 1);
                        }
                    } else {
                        if (this._playersToCheckAgain.indexOf(playerAPI) < 0) {
                            this._playersToCheckAgain.push(playerAPI);
                        }
                        return false;
                    }
                    return true;
                }
                return false;
            };
        
        
                                                        
        var IdentifyPlayer = function() {
            this.locatePlayer = arguments[0];
            this._forbiddenPlayers = arguments[1];
            this._playersToCheckAgain = arguments[2];
            this.debug = (arguments.length>3?arguments[3]:0); 
            this._detectors = new Array();

                                                                                                                                                                            this._detectors.push({
                    priority: 100,
                    detector: new ShowHeroesIdentifier(this.locatePlayer, this._playersToCheckAgain)
                });
                                                                                                            
            this._sortDetectors();

            if(this._detectors.length > 0){
                this.listPlayersInChain = this._detectors.map(player => player.detector._playerClass).join(', ');
            }else{
                this.listPlayersInChain = '';
            }
            
            if(!this.locatePlayer.checked){
                if(this.debug === 1){
                    if(this.listPlayersInChain !== ''){
                        console.log('adwdebug %cDetection on these players: %c' + this.listPlayersInChain, 'background: #222; color: #bada55', 'background: #222; color: pink');
                    }else{
                        console.log('adwdebug %cThere is no player', 'background: #222; color: red');
                    }
                }
                this.locatePlayer.checked = true;
            }
            
        };

        IdentifyPlayer.prototype.playerFromJSObject = function(playerAPI) {
            // console.log('adwdebug playerFromJSObject',playerAPI)
            var detected = false;
            // var listPlayersInChain = this._detectors.map(player => player.detector._playerClass).join(', ')
            for (var i = 0; i < this._detectors.length; i++) {
                if (this._forbiddenPlayers.indexOf(this._detectors[i].detector.getPlayerIdentity()[0]) < 0) {
                    detected = this._detectors[i].detector.detect(playerAPI);
                    if (detected){
                        break;
                    }
                }
            }
            if (detected) {
                if(this.debug === 1)
                    console.log('adwdebug %cplayerIdentity is %c' + this._detectors[i].detector.getPlayerIdentity()[0] + '%c. Detected from %c' + this.listPlayersInChain + ' %cand the player is %c' ,'background: #222; color: #bada55', 'background: #222; color: pink', 'background: #222; color: #bada55','background: #222; color: pink', 'background: #222; color: #bada55', 'background: #222; color: pink', playerAPI);
                return this._detectors[i].detector.getPlayerIdentity();
            }
             /*if(this.debug === 1){
                 console.log('adwdebug %cthis player is not compliant', 'background: #222; color: red', playerAPI);
             }*/
            return new Array();
        };

        IdentifyPlayer.prototype._sortDetectors = function() {
            this._detectors.sort(function(a, b) {
                if (a.priority < b.priority) {
                    return 1;
                } else if (a.priority > b.priority) {
                    return -1;
                }
                return 0;
            });
        };
        var CustomIMAPlugin = function(playerIdentity, creation, delegate, s2p, p2s, tracker) {
            var that = this;
            this.tracker = tracker;
            this.adsManager = null;
            this.creation = creation;
            this.playerIdentity = playerIdentity;
            this.adDisplayContainer;
            this.adsLoader;
            this.adsRequest;
            this.delegateClassName = null;
            this.adContainer;
            this.adPlayed = false;
            this.FiFSkip = null;
            this.logo = null;
            this.FiFBar = null;
            this.FiFMute = null;
            this.FiFinfoContainer = null;
            this.layer = null;
            this.delegate = typeof delegate != "undefined" ? delegate : null;
            this.s2p = typeof s2p != "undefined" ? s2p : null;
            this.p2s = typeof p2s != "undefined" ? p2s : null;
            if (this.s2p != null && this.p2s != null && typeof this.creation.creation_startat != "undefined" && this.creation.creation_startat == 0)
                this.s2p.pause(true);

            this.onVolumeChange = function() {
                if (that.adsManager.getVolume() < 0.1) {
                    that.muteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"\
            viewBox="0 0 100 100"><g transform="translate(-314.5 -170.293)"><line y2="18" transform="translate(324 171)"\
            fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>\
            <path d="M324,189l-5.4-5.4H315v-7.2h3.6L324,171" fill="none" stroke="#fff" stroke-linecap="round"\
            stroke-miterlimit="10" stroke-width="1"/><line x2="3.6" y2="3.6" transform="translate(329.4 171)" fill="none"\
            stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/><line x1="3.6" y2="3.6"\
            transform="translate(329.4 171)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/></g></svg>';
                    //that.muteButton.style.backgroundImage = "url(https://assets.adpaths.com/17/2019/11/5dc2f0638438d.png)";
                } else {
                    that.muteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"\
            viewBox="0 0 100 100"><g transform="translate(-197.5 -170.293)"><path d="M207,189l-5.4-5.4H198v-7.2h3.6L207,171"\
            fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/><line y2="18" transform="translate(207 171)"\
            fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/><line x2="3.6" transform="translate(212.4 180)"\
            fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/><line x2="1.8"\
            y2="1.8" transform="translate(212.4 183.6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10"\
            stroke-width="1"/><line y1="1.8" x2="1.8" transform="translate(212.4 174.6)" fill="none" stroke="#fff" stroke-linecap="round"\
            stroke-miterlimit="10" stroke-width="1"/></g></svg>'
                    //that.muteButton.style.backgroundImage = "url(https://assets.adpaths.com/17/2019/11/5dc2f058bbed8.png)";
                }
            }

            this.onAdEvent = function(adEvent) {
                // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
                // don't have ad object associated.
                var ad = adEvent.getAd();
                // console.log(ad, that.adsManager);
                switch (adEvent.type) {
                    case google.ima.AdEvent.Type.LOADED:
                        if (!ad.isLinear()) {
                            that.s2p.play(true);
                        }
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        if (that.creation.creation_linear_ui && ad.isLinear()) {
                            that.buildUI(ad.getDuration());
                        }
                        if (that.creation.creation_skipbutton && ad.isLinear() && ad.getApiFramework() != null && ad.getApiFramework().toUpperCase() == "VPAID" && ad.getSkipTimeOffset() && ad.getSkipTimeOffset() > 1) {
                            that.buildSkip(ad.getSkipTimeOffset());
                        }
                        break;
                    case google.ima.AdEvent.Type.COMPLETE:
                        if (ad.isLinear()) {
                            clearInterval(that.intervalTimer);
                            clearInterval(that.intervalTimer2);
                        }
                        break;
                    case google.ima.AdEvent.Type.VOLUME_CHANGED:
                    case google.ima.AdEvent.Type.VOLUME_MUTED:
                        if (that.creation.creation_linear_ui && ad.isLinear()) {
                            that.onVolumeChange();
                        }
                        break;
                }
            }

            this.onAdsManagerLoaded = function(adsManagerLoadedEvent) {
                that.adsRenderingSettings = new google.ima.AdsRenderingSettings();
                that.adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
                that.SCW2HTMLVideoElement = new adways.interactive.SCW2HTMLVideoElement(that.s2p, that.p2s);
                that.adsManager = adsManagerLoadedEvent.getAdsManager(that.SCW2HTMLVideoElement, that.adsRenderingSettings);
                that.p2s.addEventListener(adways.resource.events.PLAYER_SIZE_CHANGED, function() {
                    var playerSize = that.p2s.getPlayerSize().valueOf();
                    that.adsManager.resize(playerSize[0], playerSize[1], google.ima.ViewMode.NORMAL);
                    that.FiFSkip.style.setProperty("top", playerSize[1] - 110 + "px", "important");
                    that.FiFSkip.style.setProperty("right", -playerSize[0] + 20 + "px", "important");
                });

                // Add listeners to the required events.
                that.adsManager.addEventListener(
                    google.ima.AdErrorEvent.Type.AD_ERROR,
                    that.onAdError);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                    that.onContentPauseRequested);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                    that.onContentResumeRequested);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                    that.onAdEvent);

                // Listen to any additional events, if necessary.
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.LOADED,
                    that.onAdEvent);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.STARTED,
                    that.onAdEvent);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.COMPLETE,
                    that.onAdEvent);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.VOLUME_MUTED,
                    that.onAdEvent);
                that.adsManager.addEventListener(
                    google.ima.AdEvent.Type.VOLUME_CHANGED,
                    that.onAdEvent);

                that.playAds();
                that.p2s.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, function() {
                    that.playAds();
                });
            }

            this.onAdError = function(adErrorEvent) {
                if (that.s2p != null && that.p2s != null)
                    that.s2p.play(true);

                if (that.adsManager != null)
                    that.adsManager.destroy();
                if (that.delegate != null)
                    that.delegate.destroy();
                if (that.layer)
                    adways.destruct(that.layer);
            }

            this.onContentPauseRequested = function() {
                that.adContainer.style.display = "block";
                that.s2p.pause(true);
            }

            this.onContentResumeRequested = function() {
                that.s2p.play(true);
                that.adContainer.style.display = "none";
                that.adPlayed = true;
            }

            this.IMAScriptCB = function() {
                if (!that.s2p || !that.p2s || !that.delegate) {
                    that.s2p = new adways.interactive.SceneControllerWrapper();
                    that.p2s = new adways.interactive.SceneControllerWrapper();
                    that.delegate = eval("new " + that.delegateClassName + "(that.p2s, that.s2p, that.playerIdentity[1])");
                }
                that.layer = new adways.interactive.Layer(adways.hv.layerIds.TOP);
                that.s2p.layerAdded(that.layer);
                that.adContainer = that.layer.getDomElement();
                var playerSize = that.p2s.getPlayerSize().valueOf();
                // to be sure
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
                that.adDisplayContainer = new google.ima.AdDisplayContainer(that.adContainer);
                that.adContainer.style.display = "none";

                that.adsLoader = new google.ima.AdsLoader(that.adDisplayContainer);
                // that.currentVastLoader = that.adsLoader;
                // Listen and respond to ads loaded and error events.
                that.adsLoader.addEventListener(
                    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                    that.onAdsManagerLoaded,
                    false);
                that.adsLoader.addEventListener(
                    google.ima.AdErrorEvent.Type.AD_ERROR,
                    that.onAdError,
                    false);

                // Request video ads.
                that.adsRequest = new google.ima.AdsRequest();
                that.adsRequest.adTagUrl = that.creation.creation_url;

                // Specify the linear and nonlinear slot sizes. This helps the SDK to
                // select the correct creative if multiple are returned.
                that.adsRequest.linearAdSlotWidth = playerSize[0];
                that.adsRequest.linearAdSlotHeight = playerSize[1];

                that.adsRequest.nonLinearAdSlotWidth = playerSize[0];
                that.adsRequest.nonLinearAdSlotHeight = playerSize[1];

                that.adsLoader.requestAds(that.adsRequest);

            };
            this.CallIMAScript = function() {

                var IMAScript = document.createElement("script");
                IMAScript.type = "text/javascript";
                IMAScript.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js";
                IMAScript.addEventListener("load", function() {
                    that.IMAScriptCB();
                });
                document.getElementsByTagName("head")[0].appendChild(IMAScript);
            };
            this.SCWLibCB = function() {
                if (that.delegate == null) {
                    var playerClassGetURL = "https://d1afeohcmx2qm4.cloudfront.net/player-class?filter-js_constant=" + playerIdentity[0].toUpperCase();
                    var playerClassRequest = new adways.ajax.Request();
                    playerClassRequest.setURL(playerClassGetURL.replace("http://", "//"));
                    playerClassRequest.setMethod("GET");
                    playerClassRequest.addHeader("Accept", "application/json");
                    playerClassRequest.setContentType("application/json");
                    var requestDoneListener = function(evt) {
                        if (playerClassRequest != null && playerClassRequest.getState() === adways.ajax.states.DONE) {
                            playerClassRequest.removeEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                            var responseText = playerClassRequest.getResponseText();
                            playerClassRequest = null;
                            var responseParsed = null;
                            responseParsed = JSON.parse(responseText);
                            if (responseParsed['_embedded'] && responseParsed['_embedded']['collection'] &&
                                responseParsed['_embedded']['collection'][0]) {

                                var delegateUrl = responseParsed['_embedded']['collection'][0]["delegate_url"];
                                // fix later the path issue "/"
                                var re = new RegExp('//', 'i');
                                if (delegateUrl.match(re) == null)
                                    delegateUrl = "https://play.adpaths.com/" + delegateUrl.replace("/libs/", "libs/");

                                that.delegateClassName = responseParsed['_embedded']['collection'][0]["delegate_classname"];

                                var delegateScript = document.createElement("script");
                                delegateScript.type = "text/javascript";
                                delegateScript.src = delegateUrl;
                                delegateScript.addEventListener("load", that.CallIMAScript);
                                document.getElementsByTagName("head")[0].appendChild(delegateScript);
                            } else {
                                // empty, not cool
                            }
                        }
                    };
                    playerClassRequest.addEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                    playerClassRequest.load();
                } else {
                    that.CallIMAScript();
                }
            };
            var adwLibScw = document.createElement("script");
            adwLibScw.type = "text/javascript";
            adwLibScw.src = "https://play.adpaths.com/libs/scw/release.min.js";
            adwLibScw.addEventListener("load", that.SCWLibCB);
            document.getElementsByTagName("head")[0].appendChild(adwLibScw);
        };

        CustomIMAPlugin.prototype.buildFiFrame = function(container, cb) {
            var that = this;
            var fiframe = container.ownerDocument.createElement("iframe");
            var fiframeDoc = null;
            fiframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms allow-autoplay";
            fiframe.style.setProperty("border", "0px", "important");
            fiframe.style.setProperty("overflow", "hidden", "important");
            fiframe.style.setProperty("scrolling", "no", "important");
            fiframe.style.setProperty("position", "absolute", "important");
            fiframe.style.setProperty("top", "0px", "important");
            fiframe.style.setProperty("left", "0px", "important");
            fiframe.style.setProperty("width", "0%", "important");
            fiframe.style.setProperty("height", "0%", "important");
            fiframe.style.setProperty("max-width", "none", "important");
            fiframe.style.setProperty("max-height", "none", "important");
            var loadedFunction = function() {
                if (fiframeDoc) {
                    fiframe.removeEventListener("load", loadedFunction);
                    cb(fiframe, fiframeDoc);
                }
            };
            fiframe.addEventListener("load", loadedFunction);
            container.appendChild(fiframe);
            var a = "<html><head></head><body></body></html>";
            fiframeDoc = fiframe.contentDocument ? fiframe.contentDocument : (fiframe.contentWindow ? fiframe.contentWindow.document : fiframe.document);
            fiframeDoc.open("text/html");
            fiframeDoc.write(a);
            fiframeDoc.close();
            fiframeDoc.body.style.margin = 0;
            fiframeDoc.body.style.border = 0;
            fiframeDoc.body.style.padding = 0;
        };

        CustomIMAPlugin.prototype.getCssValuePrefix = function() {
            var rtrnVal = ''; //default to standard syntax
            var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
            // Create a temporary DOM object for testing
            var dom = document.createElement('div');
            for (var i = 0; i < prefixes.length; i++) {
                // Attempt to set the style
                dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
                // Detect if the style was successfully set
                if (dom.style.background) {
                    rtrnVal = prefixes[i];
                }
            }
            dom = null;
            delete dom;
            return rtrnVal;
        }

        CustomIMAPlugin.prototype.buildUI = function(duration) {
            var that = this;

            var infoContainer = function(myFiF, myFiFDoc) {
                that.FiFinfoContainer = myFiF;
                that.FiFinfoContainerDoc = myFiFDoc;
                var playerSize = that.p2s.getPlayerSize().valueOf();
                myFiF.style.setProperty("top", playerSize[1] - 40 + "px", "important");
                myFiF.style.setProperty("width", playerSize[0] + "px", "important");
                myFiF.style.setProperty("height", "40px", "important");
                myFiF.style.setProperty("z-index", "808", "important");
                myFiF.style.setProperty("transition", "bottom 0.2s ease", "important");
                myFiFDoc.body.style.setProperty("background", that.getCssValuePrefix() + "linear-gradient(bottom, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0) 100%)");
                myFiFDoc.body.style.width = "100%";
                myFiFDoc.body.style.height = "100%";
                myFiFDoc.body.style.overflow = "hidden";

                that.logo = myFiFDoc.createElement('div');
                that.logo.style.setProperty("bottom", "11px", "important");
                that.logo.style.setProperty("position", "absolute", "important");
                that.logo.style.setProperty("right", "10px", "important");
                that.logo.style.setProperty("width", "18px", "important");
                that.logo.style.setProperty("height", "13.3px", "important");
                that.logo.style.setProperty("cursor", "pointer", "important");
                that.logo.style.setProperty("z-index", "810", "important");
                that.logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"\
    viewBox="0 0 100 100"><defs><linearGradient id="a" x1="-0.075" y1="0.073" x2="1.098" y2="0.944" gradientUnits="objectBoundingBox">\
    <stop offset="0.18" stop-color="#fff"/><stop offset="0.566" stop-color="#fff"/><stop offset="0.804" stop-color="#fff"/></linearGradient></defs>\
    <g transform="translate(-322.509 -251.006)"><g transform="translate(327.082 251.006)"><path d="M360.932,264.317a1.342,1.342,0,0,1-1.2-.717l-5.527-10.718a1.278,1.278,0,0,1,.6-1.739,1.357,1.357,0,0,1,1.794.58l5.527,10.718a1.278,1.278,0,0,1-.6,1.739A1.364,1.364,0,0,1,360.932,264.317Z" transform="translate(-354.067 -251.006)" fill="url(#a)"/></g>\
    <g transform="translate(332.308 251.006)"><path d="M391.471,264.317a1.363,1.363,0,0,1-.6-.137,1.278,1.278,0,0,1-.6-1.739l5.527-10.718a1.357,1.357,0,0,1,1.794-.58,1.278,1.278,0,0,1,.6,1.739L392.668,263.6A1.342,1.342,0,0,1,391.471,264.317Z" transform="translate(-390.135 -251.006)" fill="#fff"/></g><g transform="translate(327.063 251.006)">\
    <path d="M361.624,253.682h-6.218a1.337,1.337,0,1,1,0-2.674h6.218a1.337,1.337,0,1,1,0,2.674Z" transform="translate(-354.069 -251.008)" fill="#fff"/></g><g transform="translate(322.509 251.006)"><path d="M329.374,264.317a1.342,1.342,0,0,1-1.2-.717l-5.527-10.718a1.278,1.278,0,0,1,.6-1.739,1.356,1.356,0,0,1,1.794.58l5.527,10.718a1.278,1.278,0,0,1-.6,1.739A1.365,1.365,0,0,1,329.374,264.317Z"\
    transform="translate(-322.509 -251.006)" fill="#fff"/></g><g transform="translate(327.735 251.006)"><path d="M359.912,264.317a1.364,1.364,0,0,1-.6-.137,1.278,1.278,0,0,1-.6-1.739l5.527-10.718a1.357,1.357,0,0,1,1.794-.58,1.278,1.278,0,0,1,.6,1.739L361.109,263.6A1.342,1.342,0,0,1,359.912,264.317Z" transform="translate(-358.576 -251.006)" fill="#fff"/></g></g></svg>';
                that.logo.addEventListener("click", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that.tracker.sendData({
                        event_type: 'info',
                        event_name: 'logoclick'
                    });
                    window.open("https://www.adways.com/", '_blank');
                });
                myFiFDoc.body.appendChild(that.logo);

                var robotoFont = document.createElement('link');
                robotoFont.rel = "stylesheet";
                robotoFont.type = "text/css";
                robotoFont.href = "https://fonts.googleapis.com/css?family=Roboto&display=swap";
                myFiFDoc.body.appendChild(robotoFont);

                that.logoText = myFiFDoc.createElement('div');
                that.logoText.style.setProperty("bottom", "12px", "important");
                that.logoText.style.setProperty("position", "absolute", "important");
                that.logoText.style.setProperty("right", "35px", "important");
                that.logoText.style.setProperty("width", "auto", "important");
                that.logoText.style.setProperty("height", "auto", "important");
                that.logoText.style.setProperty("z-index", "2", "important");
                that.logoText.style.fontFamily = '"Roboto", sans-serif, Arial';
                that.logoText.style.color = "#ffffff";
                that.logoText.style.fontSize = "9px";
                that.logoText.innerHTML = 'Ads powered by';
                myFiFDoc.body.appendChild(that.logoText);

                that.muteButton = myFiFDoc.createElement('div');
                that.muteButton.style.setProperty("top", "11px", "important");
                that.muteButton.style.setProperty("left", "10px", "important");
                that.muteButton.style.setProperty("border-radius", "50%", "important");
                that.muteButton.style.setProperty("position", "absolute", "important");
                that.muteButton.style.setProperty("width", "20px", "important");
                that.muteButton.style.setProperty("height", "20px", "important");
                that.muteButton.style.setProperty("z-index", "1", "important");
                that.muteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"\
    viewBox="0 0 100 100"><g transform="translate(-314.5 -170.293)"><line y2="18" transform="translate(324 171)"\
    fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>\
    <path d="M324,189l-5.4-5.4H315v-7.2h3.6L324,171" fill="none" stroke="#fff" stroke-linecap="round"\
    stroke-miterlimit="10" stroke-width="1"/><line x2="3.6" y2="3.6" transform="translate(329.4 171)" fill="none"\
    stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/><line x1="3.6" y2="3.6"\
    transform="translate(329.4 171)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/></g></svg>';
                that.onVolumeChange();
                that.muteButton.style.cursor = "pointer";
                myFiFDoc.body.appendChild(that.muteButton);
                that.muteButton.addEventListener("click", function() {
                    if (that.adsManager.getVolume() < 0.1) {
                        that.adsManager.setVolume(1);
                    } else {
                        that.adsManager.setVolume(0);
                    }
                    that.onVolumeChange();
                });

            };

            var buildBar = function(myFiF, myFiFDoc) {
                that.FiFBar = myFiF;
                var playerSize = that.p2s.getPlayerSize().valueOf();
                myFiF.style.setProperty("top", playerSize[1] - 3 + "px", "important");
                myFiF.style.setProperty("width", playerSize[0] + "px", "important");
                myFiF.style.setProperty("height", "3px", "important");
                myFiF.style.setProperty("z-index", "808", "important");
                myFiFDoc.body.style.backgroundColor = "#b0acac";
                myFiFDoc.body.style.width = "100%";
                myFiFDoc.body.style.height = "100%";

                var progressBar = document.createElement("div");
                progressBar.style.zIndex = 1;
                progressBar.style.background = "#6a33fc";
                progressBar.style.width = "0";
                progressBar.style.transition = "width 0.3s linear";
                progressBar.style.height = "100%";
                progressBar.style.position = "absolute";
                progressBar.style.top = "0px";
                progressBar.style.left = "0px";

                myFiFDoc.body.appendChild(progressBar);
                that.intervalTimer2 = setInterval(
                    function() {
                        progressBar.style.width = 100 - that.adsManager.getRemainingTime() / duration * 100 + "%";
                    }, 300);
            };
            this.buildFiFrame(this.adContainer, infoContainer);
            this.buildFiFrame(this.adContainer, buildBar);
        };

        CustomIMAPlugin.prototype.buildSkip = function(skipOffset) {
            var that = this;

            var buildHTML = function(myFiF, myFiFDoc) {
                this.FiFSkip = myFiF;
                var playerSize = that.p2s.getPlayerSize().valueOf();
                myFiF.style.setProperty("top", playerSize[1] - 90 + "px", "important");
                myFiF.style.setProperty("right", -playerSize[0] + 10 + "px", "important");
                myFiF.style.setProperty("left", "auto", "important");
                myFiF.style.setProperty("width", "110px", "important");
                myFiF.style.setProperty("height", "34px", "important");
                myFiF.style.setProperty("z-index", "999", "important");

                var skipButton = document.createElement("div");
                skipButton.className = "ima-adw-skip-button";
                skipButton.style.zIndex = 10;
                skipButton.style.background = "rgba(0,0,0,0.8)";
                skipButton.style.color = "#e6e6e6";
                skipButton.style.fontSize = "11px";
                skipButton.style.width = "calc(100% - 12px)";
                skipButton.style.fontFamily = "arial, sans-serif";
                skipButton.style.fontWeight = "normal";
                skipButton.style.position = "absolute";
                skipButton.style.textAlign = "center";
                skipButton.style.padding = "6px";

                skipButton.style.top = "0px";
                skipButton.style.right = "0px";

                skipButtonText = document.createElement("span");
                skipButtonText.style.verticalAlign = "middle";
                skipButtonText.style.display = "inline-block";
                skipButtonText.style.width = "100%";
                skipButtonText.style.lineHeight = "21px";

                skipButton.appendChild(skipButtonText);

                skipButtonText.innerHTML = "Ignorer dans " + skipOffset--;
                myFiFDoc.body.appendChild(skipButton);
                that.intervalTimer = setInterval(
                    function() {
                        //remainingTime = that.adsManager.getRemainingTime();
                        //You can skip this ad in 
                        if (skipOffset >= 1)
                            skipButtonText.innerHTML = "Ignorer dans " + skipOffset--;
                        else {
                            // clearInterval(that.intervalTimer);
                            myFiF.style.setProperty("width", "90px", "important");
                            skipButton.addEventListener("click", function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                that.adsManager.skip();
                            });
                            skipButtonText.innerHTML = '<span style="vertical-align: middle;font-size:14px;color:rgb(255, 255, 255);cursor: pointer;">Ignorer</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAKBJREFUOBFjYBgFsBD4////TCBmg/Hx0UB1FUD8CYi7cKoDSoLAMSCWxKkIKgFU8xSkGAh+4VQLkQeTz4CkJU6FQAmg/CuYepzqYAqg9E8gnYZLMVCOZANh5mMNV0oMBBmMEa6UGggyFCVckQ1kwhUuVBcHOQMHoKqXqRYpVE02KBGALWyBQUN0OsQILxwGEpX1sIYXDgNhhUM3NvlhLgYAYuCVi7Jf+AUAAAAASUVORK5CYII=" style="vertical-align:middle;display:inline;cursor:pointer;width:15px;margin-left:5.24px;">'
                        }
                    },
                    1000);
            };
            this.buildFiFrame(this.adContainer, buildHTML);
        };

        CustomIMAPlugin.prototype.playAds = function() {
            window.adsReady = true;
            if (this.adPlayed) {
                this.onAdError();
            } else {
                switch (this.p2s.getPlayState().valueOf()) {
                    case adways.resource.playStates.PLAYING:
                        this.adDisplayContainer.initialize();
                        try {
                            // Initialize the ads manager. Ad rules playlist will start at this time.
                            var playerSize = this.p2s.getPlayerSize().valueOf();
                            this.adsManager.init(playerSize[0], playerSize[1], google.ima.ViewMode.NORMAL);
                            // Call play to start showing the ad. Single video and overlay ads will
                            // start at this time; the call will be ignored for ad rules.
                            function iOS() {
                                var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                                return isIOS
                            }
                            if(iOS()){
                                this.adsManager.setVolume(0);
                            }
                            this.adsManager.start();

                        } catch (adError) {
                            // An error may be thrown if there was a problem with the VAST response.
                            //console.log(adError);
                        }
                        break;
                }
            }
        };

        var VastLoaderManager = function(playerIdentity, currentVastLoaderName, creation, tracker) {
            this.playerIdentity = playerIdentity;
            this.creation = creation;
            this.currentVastLoaderName = typeof currentVastLoaderName == "undefined" ? "IMAPlugin" : currentVastLoaderName;
            this.currentVastLoader = null;
            this.tracker = tracker;
            this.delegate = arguments.length > 4 ? arguments[4] : null;
            this.s2p = arguments.length > 5 ? arguments[5] : null;
            this.p2s = arguments.length > 6 ? arguments[6] : null;
            this.cbFunction = arguments.length > 7 ? arguments[7] : null;
            this.addCalls = arguments.length > 8 ? arguments[8] : new Array();
            this.backfillFunction = arguments.length > 9 ? arguments[9] : null;            

            this.createADWVastLoader = function(playerIdentity, creation, tracker) {
                var vastloader;
                this.tracker = tracker;
                var delegate = arguments.length > 3 ? arguments[3] : null;
                var s2p = arguments.length > 4 ? arguments[4] : null;
                var p2s = arguments.length > 5 ? arguments[5] : null;
                var cbFunction = arguments.length > 6 ? arguments[6] : null;
                var addCalls = arguments.length > 7 ? arguments[7] : new Array();
                var backfillFunction = arguments.length > 8 ? arguments[8] : null;

                var that = this;
                this.consentData = null;                
                try {
                    window.top.__cmp('getConsentData', null, function (result) {
                        if(typeof result.consentData === "string" && that.consentData === null) {
                            that.consentData = result.consentData;
                        }
                    });
                } catch (e) {
                }
                try {
                    window.top.__tcfapi('getTCData', 2, function(TCData,success){
                        if(typeof TCData.tcString === "string") {
                            that.consentData = TCData.tcString;
                        }
                    });
                } catch (e) {
                }
                var adwLibCB = function() {
                    vastloader = new adways.iab.vast.Loader();
                    that.currentVastLoader = vastloader;
                    var videoslot = playerIdentity[1];
                    vastloader.setPlayerClass(playerIdentity[0]);
                    vastloader.setVideoSlot(videoslot);
                    var slot = videoslot;
                    if (s2p !== null) {
                        var layer = new adways.interactive.Layer(adways.hv.layerIds.HOTSPOT);
                        s2p.layerAdded(layer);
                        var adContainer = layer.getDomElement();
                        slot = adContainer;
                    } else if (typeof(videoslot.getContainer) == "function" && videoslot.getContainer() !== null) {
                        slot = videoslot.getContainer();
                    }
                    if (typeof videoslot.adwSlot !== "undefined" && videoslot.adwSlot !== null && videoslot.adwSlot !== videoslot) {
                        slot = videoslot.adwSlot;
                    }
                    /** hack pour appnexus wrapper **/
                    if (typeof slot.style == "undefined") {
                        slot.style = new Object();
                        slot.style.margin = 0;
                        slot.style.padding = 0;
                    }
                    if (typeof slot.ownerDocument == "undefined") {
                        slot.ownerDocument = document;
                    }
                    if (typeof slot.appendChild == "undefined") {
                        slot.appendChild = function(url) {
                            document.getElementsByTagName("head")[0].appendChild(url);
                        };
                    }
                    if (typeof slot.addEventListener == "undefined") {
                        slot.addEventListener = function() {};
                    }
                    if (typeof slot.removeEventListener == "undefined") {
                        slot.removeEventListener = function() {};
                    }
                    if (typeof videoslot.addEventListener == "undefined") {
                        videoslot.addEventListener = function() {};
                    }
                    if (typeof videoslot.removeEventListener == "undefined") {
                        videoslot.removeEventListener = function() {};
                    }
                    /** finhack pour appnexus wrapper **/
                    vastloader.setSlot(slot);
                    vastloader.setAutoShowAds(false);
                    vastloader.setRendererSize(800, 600);
                    if (delegate !== null)
                        vastloader.setDelegate(delegate);
                    if (s2p !== null)
                        vastloader.setS2P(s2p);
                    if (p2s !== null)
                        vastloader.setP2S(p2s);
                    try {
                        if (window.location.hostname != '') {
                            vastloader.setDomain(window.location.hostname);
                        }
                    } catch (e) {
                        console.log('failed to get domain');
                    }
                    if (typeof videoslot.x_domain !== "undefined" && videoslot.x_domain !== "") {
                        vastloader.setDomain(videoslot.x_domain);
                    }
                    var currentFallback = 0;
                    vastloader.addEventListener(adways.iab.vast.loaderEvents.VAST_FILE_STATE_CHANGED, function(e) {
                        switch (vastloader.getVASTFileState().valueOf()) {
                            case adways.iab.vast.vastFileStates.EMPTY:
                            case adways.iab.vast.vastFileStates.ERROR:
                                //that.tracker.sendData({event_type: 'state', event_name: 'adCallEmpty'});
                                if (addCalls && addCalls.length > 0) {
                                    if (s2p !== null) {
                                        var layers = s2p.layersToArray();
                                        while (layers.length > 0) {
                                            var layer = layers.pop();
                                            s2p.layerRemoved(layer);
                                        }
                                    }
                                    backfillFunction();
                                }
                                break;
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_ERROR, function(e) {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdError === 'function') {
                            creation.customCallbacks.dispatchAdError();
                        }
//                        console.log("AD_ERROR fallback", e.getData());
                        if ( /*e.getData() === '901' && */ addCalls && addCalls.length > 0) {
                            if (s2p !== null) {
                                var layers = s2p.layersToArray();
                                while (layers.length > 0) {
                                    var layer = layers.pop();
                                    s2p.layerRemoved(layer);
                                }
                            }
                            backfillFunction();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_IMPRESSION, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdImpression === 'function') {
                            creation.customCallbacks.dispatchAdImpression();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_READY, function(cb) {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdReady === 'function') {
                            creation.customCallbacks.dispatchAdReady(cb);
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_CLICK_THRU, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdClickThru === 'function') {
                            creation.customCallbacks.dispatchAdClickThru();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_START, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdVideoStart === 'function') {
                            creation.customCallbacks.dispatchAdVideoStart();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_FIRST_QUARTILE, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdVideoFirstQuartile === 'function') {
                            creation.customCallbacks.dispatchAdVideoFirstQuartile();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_MIDPOINT, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdVideoMidpoint === 'function') {
                            creation.customCallbacks.dispatchAdVideoMidpoint();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_THIRD_QUARTILE, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdVideoThirdQuartile === 'function') {
                            creation.customCallbacks.dispatchAdVideoThirdQuartile();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_COMPLETE, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdVideoComplete === 'function') {
                            creation.customCallbacks.dispatchAdVideoComplete();
                        }
                    });
                    vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_SKIPPED, function() {
                        if (typeof creation.customCallbacks !== 'undefined' && typeof creation.customCallbacks.dispatchAdSkipped === 'function') {
                            creation.customCallbacks.dispatchAdSkipped();
                        }
                    });
                    // Rajouter les metas des sites
                    var findKeywords = function(strToCheck) {
                        var returnKeyword = '';
                        if (Array.isArray(strToCheck)) {
                            for (var id in adwKeywords) {
                                var keywordsCollection = adwKeywords[id];
                                var keywordsList = keywordsCollection.associated_keywords.split(',');
                                for (var j = 0; j < keywordsList.length; j++) {
                                    var keyword = keywordsList[j].trim();
                                    if (keyword !== '') {
                                        var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                                        for (var k = 0; k < strToCheck.length; k++) {
                                            var str = strToCheck[k].trim();
                                            if (str.match(re)) {
                                                if (returnKeyword !== '') {
                                                    returnKeyword += ',' + keywordsCollection.keyword;
                                                } else {
                                                    returnKeyword = keywordsCollection.keyword;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (typeof strToCheck === 'string') {
                            strToCheck = strToCheck.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            for (var id in adwKeywords) {
                                var keywordsCollection = adwKeywords[id];
                                var keywordsList = keywordsCollection.associated_keywords.split(',');
                                for (var j = 0; j < keywordsList.length; j++) {
                                    var keyword = keywordsList[j].trim();
                                    if (keyword !== '') {
                                        var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                                        if (strToCheck.match(re)) {
                                            if (returnKeyword !== '') {
                                                returnKeyword += ',' + keywordsCollection.keyword;
                                            } else {
                                                returnKeyword = keywordsCollection.keyword;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        return returnKeyword;
                    };

                    var keywordfound = '';
                    if (typeof adwKeywords !== 'undefined' && adwKeywords !== null) {
                        try {
                            if (typeof WIN != "undefined")
                                keywordfound = findKeywords(WIN.document.title);
                            else
                                keywordfound = findKeywords(window.document.title);
                        } catch (e) {}
                        /**Digiteka**/
                        try {
                            if (location.hostname.match('ultimedia'))
                                keywordfound = findKeywords(window.parent.dtkPlayer.vinfos.video.title);
                        } catch (e) {}
                        /**fin Digiteka**/
                        /**Pepsia**/
                        try {
                            if (window.document.title.match('Pepsia'))
                                keywordfound = findKeywords(document.getElementById('player_title').innerText);
                        } catch (e) {}
                        /**fin Pepsia**/
                        if (typeof creation.videoAnalysisResults == 'object') {
                            //                            console.log('adwdebug keywordfound 0 : ', keywordfound, creation.videoAnalysisResults);
                            if (typeof creation.videoAnalysisResults.keywords == 'object') {
                                var newKeywordfound = findKeywords(creation.videoAnalysisResults.keywords);
                                if (newKeywordfound) {
                                    if (keywordfound !== '') {
                                        keywordfound += ',' + newKeywordfound;
                                    } else {
                                        keywordfound = newKeywordfound;
                                    }
                                }
                            }
                            if (typeof creation.videoAnalysisResults.topics == 'object') {
                                var newKeywordfound = findKeywords(creation.videoAnalysisResults.topics);
                                if (newKeywordfound) {
                                    if (keywordfound !== '') {
                                        keywordfound += ',' + newKeywordfound;
                                    } else {
                                        keywordfound = newKeywordfound;
                                    }
                                }
                            }
                            //                            console.log('adwdebug keywordfound 1 : ', keywordfound);
                        }
                    }

                    if (addCalls.length > 0 && addCalls[0]['indice'] > -1) {
                        //                        console.log("adwdebug vast fallback ", addCalls.length, addCalls[0]['indice'], addCalls);
                        that.tracker.sendData({
                            event_type: 'state',
                            event_name: 'fallback' + addCalls[0]['indice']
                        });
                    } else {
                        that.tracker.sendData({
                            event_type: 'state',
                            event_name: 'adCall'
                        });
                        //                        console.log("adwdebug vast addCall ", addCalls);
                    }
                    var creationObj = addCalls.shift();
                    //                    console.log("keywordfound", keywordfound);
                    function getParameterByName(name, url) {
                        if (typeof WIN != "undefined")
                            if (!url) url = WIN.location.href;
                            else
                        if (!url) url = window.location.href;
                        name = name.replace(/[\[\]]/g, '\\$&');
                        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                            results = regex.exec(url);
                        if (!results) return null;
                        if (!results[2]) return '';
                        return decodeURIComponent(results[2].replace(/\+/g, ' '));
                    }
                    var makeCall = function() {
                        var vastURL;
                        var adwLivePreview = getParameterByName('adwLivePreview');
                        /*var recallURL = localStorage.getItem('recallURL');
                        if (recallURL && recallURL !== null && recallURL != '') {
                            localStorage.removeItem('recallURL');
                            //                            console.log("adwdebug sessionStorage.removeItem recallURL", recallURL);
                            vastURL = recallURL;
                        } else */
                        if (adwLivePreview && adwLivePreview !== null && adwLivePreview != '') {
                            vastURL = adwLivePreview;
                        } else {
                            vastURL = creationObj.url;
                            if (keywordfound !== '')
                                vastURL = creationObj.url + '&kw_adways_keywords=' + keywordfound;
                            else
                                vastURL = creationObj.url;
                            if (typeof videoslot.iab !== "undefined" && videoslot.iab !== "") {
                                vastURL += '&iab=' + videoslot.iab + '&kw_adways_iab=' + videoslot.iab;
                            }
                            if (typeof creation.videoAnalysisResults == 'object') {
                                if (typeof creation.videoAnalysisResults.iab == 'object') {
                                    //                                    console.log('adwdebug ',creation.videoAnalysisResults.iab);
                                    if (creation.videoAnalysisResults.iab.length > 0)
                                        vastURL += '&kw_adways_video_analysis_iab=' + encodeURIComponent(creation.videoAnalysisResults.iab[0]);
                                }
                            }
//                            if (typeof videoslot.iab !== "undefined" && videoslot.iab !== "") {
//                                vastURL += '&iab=' + videoslot.iab + '&kw_adways_iab=' + videoslot.iab;
//                            }
//                            if (typeof videoslot.options !== "undefined" && videoslot.options !== null &&
//                                typeof videoslot.options.enableSendDomain !== "undefined" && videoslot.options.enableSendDomain) {
                                if (typeof WIN != "undefined")
                                    var kw_adways_domain = WIN.location.hostname;
                                else
                                    var kw_adways_domain = window.location.hostname;
                                if (typeof videoslot.options !== "undefined" && typeof videoslot.options.sendDomainFromPartners !== "undefined" && videoslot.options.sendDomainFromPartners &&
                                    typeof videoslot.x_domain !== "undefined" && videoslot.x_domain !== "") {
                                    kw_adways_domain = videoslot.x_domain;
                                }
                                vastURL += '&kw_adways_domain=' + encodeURIComponent(kw_adways_domain) + '&referrer=' + encodeURIComponent(kw_adways_domain);
//                            }
                            if (typeof that.consentData !== "undefined" && that.consentData !== null && that.consentData !== '') {
                                vastURL += '&gdpr_consent=' + encodeURIComponent(that.consentData) + '&gdpr=1';
                            }
                            else if (typeof videoslot.gdpr_consent !== "undefined" && videoslot.gdpr_consent !== "") {
                                vastURL += '&gdpr_consent=' + encodeURIComponent(videoslot.gdpr_consent) + '&gdpr=1';
                            }
                            if (p2s !== null) {
                                var playerSize = p2s.getPlayerSize().valueOf();
                                var width = playerSize[0];
                                var height = playerSize[1];
                                if (width !== null && !isNaN(width) && width > 0 && height !== null && !isNaN(height) && height > 0) {
                                    var ratio = "169";
                                    var actualRatio = Math.ceil(width / height * 100) * 1.0 / 100;
                                    if (actualRatio > 1) {
                                        if ((actualRatio) < (16 / 9) && (actualRatio) >= (4 / 3)) {
                                            ratio = "43";
                                        } else if ((actualRatio) < (4 / 3) && (actualRatio) >= (1)) {
                                            ratio = "11";
                                        }
                                    } else if (width === height) {
                                        ratio = "11";
                                    } else {
                                        actualRatio = Math.ceil(height / width * 100) * 1.0 / 100;
                                        ratio = "916";
                                        if ((actualRatio) < (16 / 9) && (actualRatio) >= (4 / 3)) {
                                            ratio = "34";
                                        } else if ((actualRatio) < (4 / 3) && (actualRatio) >= (1)) {
                                            ratio = "11";
                                        }
                                    }
                                    vastURL += '&kw_adways_ratio=' + ratio;
                                }
                                var duration = p2s.getDuration().valueOf();
                                if (duration !== null && !isNaN(duration) && duration > 0) {
                                    var durationIndice = 60;
                                    if (duration <= 60) {
                                        durationIndice = 60;
                                    } else if (duration <= 90) {
                                        durationIndice = 60;
                                    } else if (duration <= 120) {
                                        durationIndice = 120;
                                    } else {
                                        durationIndice = 99999;
                                    }
                                    vastURL += '&kw_adways_duration=' + durationIndice;
                                }
                            }
                        }
                        //                        console.log('adwdebug requestVAST');
                        vastloader.requestVAST(vastURL);
                        if (p2s !== null) {
                            var urChangedCB = function() {
                                p2s.removeEventListener(adways.resource.events.URL_CHANGED, urChangedCB, this);
                                console.log("URL_CHANGED");
                                vastloader.clearAll();
                                if (cbFunction !== null)
                                    cbFunction();
                            };
                            p2s.addEventListener(adways.resource.events.URL_CHANGED, urChangedCB, this);
                        }
                    };

                    var cappingResourceURL = 'https://assets.adpaths.com/capping/capping.html';
                    var domainCapping = 'https://assets.adpaths.com';
                    var prepareCall = function() {
                        if (typeof creationObj !== "undefined" && creationObj.capping > 0) {

                            var ifrm = document.createElement('iframe');

                            function sendMessage() {
                                var message = new Object();
                                message.adwCapping = new Object();
                                message.adwCapping.publicationId = creationObj.url;
                                ifrm.contentWindow.postMessage(message, domainCapping);
                            }

                            function receiveMessage(event) {
                                if (typeof event.data === 'object' && typeof event.data.adwCapping === 'object' &&
                                    typeof event.data.adwCapping.publicationId === 'string' &&
                                    typeof event.data.adwCapping.count === 'number') {
                                    //                                console.log("adwdebug publisher count", event.data.adwCapping.count, ifrm);
                                    window.removeEventListener("message", receiveMessage, false);
                                    if (ifrm.parentNode)
                                        ifrm.parentNode.removeChild(ifrm);
                                    if (event.data.adwCapping.count < creationObj.capping) {
                                        makeCall();
                                    } else {
                                        if (addCalls && addCalls.length > 0) {
                                            if (s2p !== null) {
                                                var layers = s2p.layersToArray();
                                                while (layers.length > 0) {
                                                    var layer = layers.pop();
                                                    s2p.layerRemoved(layer);
                                                }
                                            }
                                            backfillFunction();
                                        }
                                    }
                                }
                            }
                            window.addEventListener("message", receiveMessage, false);
                            ifrm.setAttribute("src", cappingResourceURL);
                            ifrm.style.display = "none";
                            ifrm.style.width = "0px";
                            ifrm.style.height = "0px";
                            ifrm.addEventListener("load", sendMessage, false);
                            //                        console.log("adwdebug publisher appendChild", ifrm);
                            document.body.appendChild(ifrm);
                        } else {
                            makeCall();
                        }
                    }

                    /************************************************************/
                    /*** Début Vérification cookie live preview *****************/
                    /************************************************************/
                    var ifrm = document.createElement('iframe');

                    function sendLivePreviewMessage() {
                        var message = new Object();
                        message.adwLivePreview = new Object();
                        message.adwLivePreview.setCookie = false;
                        ifrm.contentWindow.postMessage(message, domainCapping);
                    }

                    function receiveLivePreviewMessage(event) {
                        if (typeof event.data === 'object' && typeof event.data.cookieExists === 'boolean') {
                            // console.log("receiveLivePreviewMessage", event.data.cookieExists, event.data.adwLivePreviewURL);
                            window.removeEventListener("message", receiveLivePreviewMessage, false);
                            var livePreviewUrl = event.data.adwCapping;
                            if (ifrm.parentNode)
                                ifrm.parentNode.removeChild(ifrm);

                            if (!event.data.cookieExists || !event.data.adwLivePreviewURL || event.data.adwLivePreviewURL === '') {
                                prepareCall();
                            } else { // utilisation du vast en cookie
                                var cookieVastURL = event.data.adwLivePreviewURL;
                                vastloader.requestVAST(decodeURIComponent(cookieVastURL));
                            }
                        } else { // gestion d'erreur
                            prepareCall();
                        }
                    }
                    window.addEventListener("message", receiveLivePreviewMessage, false);
                    ifrm.setAttribute("src", cappingResourceURL);
                    ifrm.style.display = "none";
                    ifrm.style.width = "0px";
                    ifrm.style.height = "0px";
                    ifrm.addEventListener("load", sendLivePreviewMessage, false);
                    //                        console.log("adwdebug publisher appendChild", ifrm);
                    document.body.appendChild(ifrm);

                    /************************************************************/
                    /*** Fin Vérification cookie live preview *******************/
                    /************************************************************/

                    return vastloader;
                };

                if (typeof adways == "undefined" ||
                    typeof adways.iab == "undefined" ||
                    typeof adways.iab.vast == "undefined" ||
                    typeof adways.iab.vast.Loader == "undefined") {
                    var adwLib = document.createElement("script");
                    adwLib.type = "text/javascript";
                    adwLib.src = "https://play.adpaths.com/libs/iAb/vast/loader.js";
                    adwLib.addEventListener("load", function() {
                        adwLibCB();
                    });
                    document.getElementsByTagName("head")[0].appendChild(adwLib);
                } else {
                    adwLibCB();
                }
            };
            this.initVastLoader();
        };

        VastLoaderManager.prototype.initVastLoader = function() {
            if (this.currentVastLoader == null) {
                switch (this.currentVastLoaderName) {
                    case "IMAPlugin":
                        this.currentVastLoader = new CustomIMAPlugin(this.playerIdentity, this.creation, this.delegate, this.s2p, this.p2s, this.tracker);
                        break;
                    case "ADWLoader":
                        this.createADWVastLoader(this.playerIdentity, this.creation, this.tracker, this.delegate, this.s2p, this.p2s, this.cbFunction, this.addCalls, this.backfillFunction);
                        break;
                }
                return 1;
            }
            return 0;
        };

        VastLoaderManager.prototype.clearAll = function() {
            if (this.currentVastLoader !== null) {
                switch (this.currentVastLoaderName) {
                    case "IMAPlugin":
                        //                    this.currentVastLoader.clearAll();
                        break;
                    case "ADWLoader":
                        this.currentVastLoader.clearAll();
                        break;
                }
                return 1;
            }
            return 0;
        };

var VPAIDManager = function (playerIdentity, creation, tracker) {
//    this.playerIdentity = playerIdentity;
    this.creation = creation;
    this.tracker = tracker;
    this.adwConfig = new Object();
    this.adwConfig.delegate = arguments.length > 3 ? arguments[3] : null;
    this.adwConfig.s2p = arguments.length > 4 ? arguments[4] : null;
    this.adwConfig.p2s = arguments.length > 5 ? arguments[5] : null;
    this.adwConfig.cbFunction = arguments.length > 6 ? arguments[6] : null;
    this.adwConfig.addCalls = arguments.length > 7 ? arguments[7] : new Array();
    this.adwConfig.backfillFunction = arguments.length > 8 ? arguments[8] : null;
    this.adwConfig.videoslot = playerIdentity[1];
    this.adwConfig.playerClass = playerIdentity[0];
    this.adwConfig.slot = this.adwConfig.videoslot;
    if (typeof (this.adwConfig.videoslot.getContainer) == "function" && this.adwConfig.videoslot.getContainer() !== null) {
        this.adwConfig.slot = this.adwConfig.videoslot.getContainer();
    }
    if (typeof this.adwConfig.videoslot.adwSlot !== "undefined" && this.adwConfig.videoslot.adwSlot !== null) {
        this.adwConfig.slot = this.adwConfig.videoslot.adwSlot;
    }
    this.iframes = new Array();
    this.currentFallback = 0;
    
    var that = this;
    
    this._loadVPAIDAd = function () {
        var that = this;
        var adwaysTargetId = 'adw-vpaid-' + new Date().getTime();
        var creationObj = this.adwConfig.addCalls.shift();  
        var appNexusId = creationObj.url;  
//        var appNexusId = 16985771;  
        var w = window;
//create empty apntag object if it doesn't exist
        var apntag = /*w.apntag ||*/ {};
//        apntag.debug = true;        
//create a queue on the apntag object       
        apntag.anq = apntag.anq || [];
        apntag.anq.push(function () {            
            apntag.onEvent('adError', adwaysTargetId, function(adError, adObj){
//                console.log('adError');
//                console.log(adObj);
//                console.log(adError);
                w.adwVPAIDReadyCb = null;
                if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                    that.adwConfig.backfillFunction();
                } 
            });
            apntag.onEvent('adBadRequest', adwaysTargetId, function(adError, adObj){
//                console.log('adBadRequest');
//                console.log(adObj);
//                console.log(adError);
                w.adwVPAIDReadyCb = null;
                if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                    that.adwConfig.backfillFunction();
                } 
            });
            apntag.onEvent('adRequestFailure', adwaysTargetId, function(adError, adObj){
//                console.log('adRequestFailure');
//                console.log(adObj);
//                console.log(adError);
                w.adwVPAIDReadyCb = null;
                if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                    that.adwConfig.backfillFunction();
                } 
            });
            apntag.onEvent('adNoBid', adwaysTargetId, function(adError, adObj){
//                console.log('adNoBid');
//                console.log(adObj);
//                console.log(adError);
                w.adwVPAIDReadyCb = null;
                if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                    that.adwConfig.backfillFunction();
                } 
            });
        }); 
        w.adwVPAIDReadyCb = function (window) {
//            console.log('adwdebug adwVPAIDReadyCb');
            var fn = window['getVPAIDAd'];
            if (fn && typeof fn === 'function') {
                var VPAIDCreative = fn();
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdImpression === 'function') {
                        that.creation.customCallbacks.dispatchAdImpression();
                    }
//                console.log("AdImpression");
                }, "AdImpression", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdClickThru === 'function') {
                        that.creation.customCallbacks.dispatchAdClickThru();
                    }
//                console.log("AdClickThru");
                }, "AdClickThru", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoStart === 'function') {
                        that.creation.customCallbacks.dispatchAdVideoStart();
                    }
                }, "AdVideoStart", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoFirstQuartile === 'function') {
                        that.creation.customCallbacks.dispatchAdVideoFirstQuartile();
                    }
                }, "AdVideoFirstQuartile", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoMidpoint === 'function') {
                        that.creation.customCallbacks.dispatchAdVideoMidpoint();
                    }
                }, "AdVideoMidpoint", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoThirdQuartile === 'function') {
                        that.creation.customCallbacks.dispatchAdVideoThirdQuartile();
                    }
                }, "AdVideoThirdQuartile", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoComplete === 'function') {
                        that.creation.customCallbacks.dispatchAdVideoComplete();
                    }
                }, "AdVideoComplete", this);
                VPAIDCreative.subscribe(function () {
                    if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdSkipped === 'function') {
                        that.creation.customCallbacks.dispatchAdSkipped();
                    }
                }, "AdSkipped", this);
                var creativeData = {};
                var environmentVars = new Object();
                if (that.adwConfig.videoslot !== null)
                    environmentVars["videoSlot"] = that.adwConfig.videoslot;
                if (that.adwConfig.playerClass !== null)
                    environmentVars["playerClass"] = that.adwConfig.playerClass;
                if (that.adwConfig.slot !== null)
                    environmentVars["slot"] = that.adwConfig.slot;
                if (that.adwConfig.delegate !== null) {
                    environmentVars["delegate"] = that.adwConfig.delegate;
                    if (that.adwConfig.slot !== null) {
                        environmentVars["slot"]["delegate"] = environmentVars["delegate"];
                    }
                }
                if (that.adwConfig.p2s !== null) {
                    environmentVars["p2s"] = that.adwConfig.p2s;
                    if (that.adwConfig.slot !== null) {
                        environmentVars["slot"]["p2s"] = environmentVars["p2s"];
                    }
                }
                if (that.adwConfig.s2p !== null) {
                    environmentVars["s2p"] = that.adwConfig.s2p;
                    if (that.adwConfig.slot !== null) {
                        environmentVars["slot"]["s2p"] = environmentVars["s2p"];
                    }
                }
                VPAIDCreative.initAd(16, 9, "normal", 3600, creativeData, environmentVars);
            }
        };

//load ast.js - async
        (function (w) {
            w.apntag = apntag;
//            console.log("adwdebug load ast.js - async");
            var d = w.document, e = d.createElement('script'), p = d.getElementsByTagName('head')[0];
            e.type = 'text/javascript';
            e.async = true;
            e.src = '//acdn.adnxs.com/ast/ast.js';
            p.insertBefore(e, p.firstChild);
        })(w);

//push commands to loading queue, to allow for async loading
        apntag.anq.push(function () {              
            var consentManagementObject = {
                timeout: 5000,
                usp : {
                 disabled: true
                }
            };
            //set global page options
            apntag.setPageOpts({
                member: 10653,
                consentManagement: consentManagementObject
            });
            apntag.anq.push(function () {
                apntag.defineTag({
                    tagId: parseInt(appNexusId),
                    sizes: [[160, 90],[16, 9],[640, 363]],
                    targetId: adwaysTargetId,
                    ad_types: ["banner", "video"],
                    allowedFormats : ['banner', 'video']
                });
                apntag.loadTags();
            });
        }); 
        
        apntag.anq.push(function () {      
            /** keywords */
//            apntag.setKeywords(adwaysTargetId,{ adways_debug_kw : 'debug' });
//            var tab = [];
//            tab.push('debug');
//            apntag.setKeywords(adwaysTargetId,{ adways_debug_tab_kw : tab });
            
            var findKeywords = function(strToCheck) {
                var returnKeyword = [];
                var strToCheck = strToCheck.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                for (var id in adwKeywords) {
                    var keywordsCollection = adwKeywords[id];
                    var keywordsList = keywordsCollection.associated_keywords.split(',');
                    for (var j = 0; j < keywordsList.length; j++) {
                        var keyword = keywordsList[j].trim();
                        if (keyword !== '') {
                            var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                            if (strToCheck.match(re)) {
                                returnKeyword.push(keywordsCollection.keyword);
                                break;
                            }
                        }
                    }
                }
                return returnKeyword;
            };
            var keywordfound = [];
            if (typeof adwKeywords !== 'undefined' && adwKeywords !== null) {
                try {
                    if (typeof WIN != "undefined")
                        keywordfound = findKeywords(WIN.document.title);
                    else
                        keywordfound = findKeywords(window.document.title);
                } catch (e) {}
                /**Digiteka**/
                try {
                    if (location.hostname.match('ultimedia'))
                        keywordfound = findKeywords(window.parent.dtkPlayer.vinfos.video.title);
                } catch (e) {}
                /**fin Digiteka**/
                /**Pepsia**/
                try {
                    if (window.document.title.match('Pepsia'))
                        keywordfound = findKeywords(document.getElementById('player_title').innerText);
                } catch (e) {}
                /**fin Pepsia**/
            }
            if (keywordfound.length>0) {                                
                apntag.setKeywords(adwaysTargetId,{adways_keywords: keywordfound});
            }       

            if (typeof that.adwConfig.videoslot !== "undefined" && that.adwConfig.videoslot !== "") {
                var videoslot = that.adwConfig.videoslot;
                if (typeof videoslot.iab !== "undefined" && videoslot.iab !== "") {
                    apntag.setKeywords(adwaysTargetId,{adways_iab: videoslot.iab});
                }
//                if (typeof videoslot.options !== "undefined" && videoslot.options !== null && 
//                    typeof videoslot.options.enableSendDomain !== "undefined" && videoslot.options.enableSendDomain) {
                    if (typeof WIN != "undefined")
                        var kw_adways_domain = WIN.location.hostname;
                    else
                        var kw_adways_domain = window.location.hostname;
                    if (typeof videoslot.options !== "undefined" && typeof videoslot.options.sendDomainFromPartners !== "undefined" && videoslot.options.sendDomainFromPartners
                        && typeof videoslot.x_domain !== "undefined" && videoslot.x_domain !== "") {
                        kw_adways_domain = videoslot.x_domain;
                    }
                    apntag.setKeywords(adwaysTargetId,{adways_domain: encodeURIComponent(kw_adways_domain)});
//                }
            }
            if (that.adwConfig.p2s !== null) {
                var p2s = that.adwConfig.p2s;
                var playerSize = p2s.getPlayerSize().valueOf();
                var width = playerSize[0];
                var height = playerSize[1];
                if(width !== null && !isNaN(width) && width > 0 && height !== null && !isNaN(height) && height > 0) {
                    var ratio = "169";
                    var actualRatio = Math.ceil(width/height*100)*1.0/100;
                    if(actualRatio>1) {
                        if((actualRatio) < (16/9) && (actualRatio) >= (4/3) ) {
                            ratio = "43";
                        } else if((actualRatio) < (4/3) && (actualRatio) >= (1) ) {
                            ratio = "11";
                        }
                    } else if (width === height) {
                        ratio= "11";
                    } else {
                        actualRatio = Math.ceil(height/width*100)*1.0/100;
                        ratio = "916";
                        if((actualRatio) < (16/9) && (actualRatio) >= (4/3) ) {
                            ratio = "34";
                        } else if((actualRatio) < (4/3) && (actualRatio) >= (1) ) {
                            ratio = "11";
                        }                                        
                    }
                    apntag.setKeywords(adwaysTargetId,{adways_ratio: ratio});
                }

                var duration = p2s.getDuration().valueOf();
                if (duration !== null && !isNaN(duration) && duration > 0) {
                    var durationIndice = 60;
                    if (duration <= 60) {
                        durationIndice = 60;
                    } else if (duration <= 90) {
                        durationIndice = 60;
                    } else if (duration <= 120) {
                        durationIndice = 120;
                    } else {
                        durationIndice = 99999;
                    }
                    apntag.setKeywords(adwaysTargetId,{adways_duration: durationIndice});
                }
            }
            /** end keywords */
        }); 
        var myDiv = w.document.createElement('div');
        myDiv.style.position = "absolute";
        myDiv.style.top = "0";
        myDiv.style.left = "0";
        myDiv.style.width = "0%";
        myDiv.style.height = "0%";
        myDiv.id = adwaysTargetId;
        w.document.body.appendChild(myDiv);
        apntag.anq.push(function () {
//            console.log("adwdebug push ");
            apntag.showTag(adwaysTargetId);
            });
    };
    if(this.adwConfig.addCalls.length > 0 && this.adwConfig.addCalls[0]['indice'] > -1) {
//        console.log("adwdebug vpaid fallback",this.adwConfig.addCalls.length, this.adwConfig.addCalls[0]['indice'], this.adwConfig.addCalls);
        this.tracker.sendData({event_type: 'state', event_name: 'fallback' + this.adwConfig.addCalls[0]['indice']});
    }
    else {
//        console.log("adwdebug vpaid adCall",this.adwConfig.addCalls);
        this.tracker.sendData({event_type: 'state', event_name: 'adCall'});
    }
    this._loadVPAIDAd();
};        
var AppnexusManager = function (playerIdentity, creation, tracker) {
    var that = this;

    this.creation = creation;
    this.tracker = tracker;
    this.playerIdentity = playerIdentity;
    this.currentVastLoader = null;
    this.orderedAds = new Array();
    
    //console.log("adwdebug AppnexusManager arguments:",arguments);
    this.adwConfig = new Object();
    this.adwConfig.delegate = arguments.length > 3 ? arguments[3] : null;
    this.adwConfig.s2p = arguments.length > 4 ? arguments[4] : null;
    this.adwConfig.p2s = arguments.length > 5 ? arguments[5] : null;
    this.adwConfig.cbFunction = arguments.length > 6 ? arguments[6] : null;
    this.adwConfig.addCalls = arguments.length > 7 ? arguments[7] : new Array();
    this.adwConfig.backfillFunction = arguments.length > 8 ? arguments[8] : null;
    this.adwConfig.videoslot = playerIdentity[1];
    this.adwConfig.playerClass = playerIdentity[0];
    this.adwConfig.slot = this.adwConfig.videoslot;
    if (typeof (this.adwConfig.videoslot.getContainer) == "function" && this.adwConfig.videoslot.getContainer() !== null) {
        this.adwConfig.slot = this.adwConfig.videoslot.getContainer();
    }
    if (typeof this.adwConfig.videoslot.adwSlot !== "undefined" && this.adwConfig.videoslot.adwSlot !== null) {
        this.adwConfig.slot = this.adwConfig.videoslot.adwSlot;
    }

    if(that.adwConfig.addCalls.length > 0 && that.adwConfig.addCalls[0]['indice'] > -1) {
        that.tracker.sendData({event_type: 'state', event_name: 'fallback' + that.adwConfig.addCalls[0]['indice']});
    }
    else {
        that.tracker.sendData({event_type: 'state', event_name: 'adCall'});
    }

    var creationObj = this.adwConfig.addCalls.shift();
    // console.log(this.adwConfig.addCalls.shift())
    this.impressionsPixel = new Array();
    this.customTrackings = new Object();
    this.referrer = "";
    
    this.macroList = new Array();
    this.macroList.push(
        {
            "macro": "${CACHEBUSTER}",
            "value": function() {
                return Math.floor(Math.random() * 90000000) + 10000000;
            }
        }
    );
    this.macroList.push(
        {
            "macro": "${TIMESTAMP}",
            "value": function() {
                return new Date().getTime();
            }
        }
    );
    this.dealID = '';
    this.macroList.push(
        {
            "macro": "${DEAL_ID}",
            "value": function() {
                return that.dealID;
            }
        }
    );

    this.adwaysMemberID = 10653;
    this.tags_members = new Object();
    for (let i = 0; i < creationObj.urls.length; i++) {
    	let creation_url = creationObj.urls[i];
        var memberId = creation_url.member_id!=""?parseInt(creation_url.member_id):this.adwaysMemberID;
        if(typeof this.tags_members[memberId] === 'undefined') {
            this.tags_members[memberId] = new Array();
        }
        this.tags_members[memberId].push({
            id: parseInt(creation_url.placement_id),
            member: creation_url.member_id!=""?parseInt(creation_url.member_id):this.adwaysMemberID,
            sizes: [{'width':160, 'height':90}],
            primary_size : {'width' : 160, 'height' : 90},
            ad_types: ["banner", "video"],
            allow_media_types  :[1, 2],
            video: {
                frameworks: [
                    1,
                    2
                ]/*,
                context: 4*/
            }
        });
        this.customTrackings[parseInt(creation_url.placement_id)] = {
            impression: creation_url.tag_impression,
        }
    }
    var listPlacements = [];
    for(var member in this.tags_members){
        var idsMember = this.tags_members[member].map(item => item.id);
        listPlacements = listPlacements.concat(idsMember);
    }
    // ZONE ID Sublime
//    var zoneIdDarIdMap = JSON.parse('{"20935":{"1":"","2":"","3":"","4":20321669,"5":20321709,"6":20321724,"7":20321726},"31934":{"1":4407096,"2":19455556,"3":19454946,"4":"","5":"","6":"","7":""},"32030":{"1":5097030,"2":19539708,"3":19539709,"4":"","5":"","6":"","7":""},"32033":{"1":4344094,"2":19539724,"3":19539725,"4":"","5":"","6":"","7":""},"32034":{"1":4344105,"2":19539740,"3":19539741,"4":"","5":"","6":"","7":""},"32035":{"1":4551101,"2":19539710,"3":19539711,"4":"","5":"","6":"","7":""},"32036":{"1":4344101,"2":19539734,"3":19539735,"4":"","5":"","6":"","7":""},"32037":{"1":4344089,"2":19539720,"3":19539721,"4":"","5":"","6":"","7":""},"32038":{"1":4344088,"2":19539722,"3":19539723,"4":"","5":"","6":"","7":""},"32039":{"1":4392564,"2":19539742,"3":19539743,"4":"","5":"","6":"","7":""},"32040":{"1":4344044,"2":19539760,"3":19539761,"4":"","5":"","6":"","7":""},"32041":{"1":4983616,"2":19539766,"3":19539767,"4":"","5":"","6":"","7":""},"32042":{"1":4344111,"2":19539728,"3":19539729,"4":"","5":"","6":"","7":""},"32043":{"1":4385057,"2":19539744,"3":19539745,"4":"","5":"","6":"","7":""},"32044":{"1":4551047,"2":19539712,"3":19539713,"4":"","5":"","6":"","7":""},"32045":{"1":4553403,"2":19539714,"3":19539715,"4":"","5":"","6":"","7":""},"32046":{"1":4551069,"2":19539716,"3":19539717,"4":"","5":"","6":"","7":""},"32047":{"1":4385236,"2":19539746,"3":19539747,"4":"","5":"","6":"","7":""},"32048":{"1":4553493,"2":19539718,"3":19539719,"4":"","5":"","6":"","7":""},"32049":{"1":4344103,"2":19539736,"3":19539737,"4":"","5":"","6":"","7":""},"32050":{"1":4385069,"2":19539748,"3":19539749,"4":"","5":"","6":"","7":""},"32051":{"1":4344102,"2":19539738,"3":19539739,"4":"","5":"","6":"","7":""},"32052":{"1":4384972,"2":19539750,"3":19539751,"4":"","5":"","6":"","7":""},"32053":{"1":4344097,"2":19539726,"3":19539727,"4":"","5":"","6":"","7":""},"32054":{"1":4344110,"2":19539730,"3":19539731,"4":"","5":"","6":"","7":""},"32055":{"1":4344037,"2":19539762,"3":19539763,"4":"","5":"","6":"","7":""},"32056":{"1":4385252,"2":19539752,"3":19539753,"4":"","5":"","6":"","7":""},"32057":{"1":4344117,"2":19539732,"3":19539733,"4":"","5":"","6":"","7":""},"32058":{"1":4414619,"2":19539756,"3":19539757,"4":"","5":"","6":"","7":""},"32059":{"1":4558550,"2":19539758,"3":19539759,"4":"","5":"","6":"","7":""},"32060":{"1":4344021,"2":19539764,"3":19539765,"4":"","5":"","6":"","7":""},"32061":{"1":4385037,"2":19539754,"3":19539755,"4":"","5":"","6":"","7":""},"32062":{"1":4486151,"2":19539770,"3":19539771,"4":"","5":"","6":"","7":""},"32063":{"1":4704589,"2":19539768,"3":19539769,"4":"","5":"","6":"","7":""},"32157":{"1":"","2":"","3":"","4":19692404,"5":19692398,"6":19692405,"7":19692401},"32159":{"1":"","2":"","3":"","4":19692939,"5":19692788,"6":19692945,"7":19692936},"32160":{"1":"","2":"","3":"","4":19692975,"5":19692938,"6":19692971,"7":19692887},"32161":{"1":"","2":"","3":"","4":19693012,"5":19693005,"6":19693015,"7":19693010},"32162":{"1":"","2":"","3":"","4":19693049,"5":19693036,"6":19693043,"7":19693040},"32173":{"1":"","2":"","3":"","4":19712370,"5":19708342,"6":19712412,"7":19708927},"32188":{"1":"","2":"","3":"","4":19735583,"5":19735544,"6":19735584,"7":19735581},"32199":{"1":"","2":"","3":"","4":19750037,"5":19749982,"6":19750049,"7":19750078},"32201":{"1":"","2":"","3":"","4":19741826,"5":19741824,"6":19741827,"7":19741825},"32262":{"1":"","2":"","3":"","4":19749835,"5":19749818,"6":19749837,"7":19749876},"32296":{"1":"","2":"","3":"","4":19845438,"5":19845442,"6":19845534,"7":19845538},"32401":{"1":"","2":"","3":"","4":20068069,"5":20068067,"6":20068071,"7":20068068},"32403":{"1":"","2":"","3":"","4":20068094,"5":20068092,"6":20068095,"7":20068093},"32404":{"1":"","2":"","3":"","4":20068540,"5":20068287,"6":20068570,"7":20068511},"32405":{"1":"","2":"","3":"","4":20067414,"5":20067406,"6":20067416,"7":20067413},"32419":{"1":"","2":"","3":"","4":20075156,"5":20075150,"6":20075162,"7":20075155},"32420":{"1":"","2":"","3":"","4":20075176,"5":20075170,"6":20075179,"7":20075173},"32421":{"1":"","2":"","3":"","4":20075089,"5":20075083,"6":20075094,"7":20075084},"32426":{"1":"","2":"","3":"","4":20087711,"5":20087706,"6":20087713,"7":20087710},"32428":{"1":"","2":"","3":"","4":"","5":"","6":20087771,"7":20087768},"32429":{"1":"","2":"","3":"","4":"","5":"","6":20087743,"7":20087741},"32430":{"1":"","2":"","3":"","4":20095946,"5":20095960,"6":20095956,"7":20095961},"32432":{"1":"","2":"","3":"","4":20104694,"5":20104701,"6":20104711,"7":20104713},"32439":{"1":"","2":"","3":"","4":20120803,"5":20120794,"6":20120804,"7":20120801},"32481":{"1":"","2":"","3":"","4":20224135,"5":20224143,"6":20224145,"7":20224146},"32504":{"1":"","2":"","3":"","4":20174173,"5":20174203,"6":20174249,"7":20120804},"32515":{"1":"","2":"","3":"","4":"","5":"","6":"","7":""},"32516":{"1":"","2":"","3":"","4":20205666,"5":20205796,"6":20205802,"7":20205803},"32524":{"1":"","2":"","3":"","4":20203381,"5":20203439,"6":20203440,"7":20203441},"32529":{"1":"","2":"","3":"","4":20205912,"5":20205989,"6":20205993,"7":20205994},"32568":{"1":"","2":"","3":"","4":20229824,"5":20229980,"6":20229984,"7":20229985},"32575":{"1":"","2":"","3":"","4":20235562,"5":20235573,"6":20235586,"7":20235588},"32590":{"1":"","2":"","3":"","4":20254896,"5":20254939,"6":20254954,"7":20254955},"32592":{"1":"","2":"","3":"","4":20255015,"5":20255062,"6":20255066,"7":20255067},"32600":{"1":"","2":"","3":"","4":20262764,"5":20262787,"6":20262764,"7":20262791},"32601":{"1":"","2":"","3":"","4":20262807,"5":20262844,"6":20262847,"7":20262848},"32606":{"1":"","2":"","3":"","4":20262881,"5":20262891,"6":20262893,"7":20262894},"32628":{"1":"","2":"","3":"","4":20295277,"5":20295279,"6":20295283,"7":20295284},"32637":{"1":"","2":"","3":"","4":20314028,"5":20314039,"6":20314040,"7":19693015},"32652":{"1":"","2":"","3":"","4":20321632,"5":20321647,"6":20321651,"7":20321652},"32787":{"1":"","2":"","3":"","4":20514278,"5":20514264,"6":20514282,"7":20514283},"32823":{"1":"","2":"","3":"","4":20654685,"5":20654687,"6":20654693,"7":20654694},"32824":{"1":"","2":"","3":"","4":20654696,"5":20654697,"6":20654698,"7":20654699},"32979":{"1":"","2":"","3":"","4":"","5":"","6":"","7":""},"33148":{"1":"","2":"","3":"","4":20783767,"5":20783828,"6":20783844,"7":20783845}}');
//    var zoneIdFound = null;
//    var entries = Object.entries(zoneIdDarIdMap);
//    for(const [zoneId, placementIds] of entries) {
//        if(zoneIdFound !== null)
//            break;
//        for(let i = 0; i<listPlacements.length; i++) {
//            if(zoneIdFound !== null)
//                break;
//            var placement = listPlacements[i];
//            for (entry in placementIds) {
//                var placementId = placementIds[entry];
//                if(placementId == placement) {
//                    zoneIdFound = zoneId;
//                    break;
//                }
//            } 
//        } 
//    }    
//    if(zoneIdFound !== null) {
//        console.log("adwdebug zoneIdFound", zoneIdFound);
//        (new Image(0, 0)).src = zoneIdFound + '.gif';
//    }   

    // Fin Zone ID SUblime
    console.log('adwdebug %cIds Appnexus', 'background: #222; color: #bada55', listPlacements.join(','))
    //keywords
    this.keywords = new Array();
    var findKeywords = function(strToCheck) {
        var returnKeyword = [];
        if (Array.isArray(strToCheck)) {
            for (var id in adwKeywords) {
                var keywordsCollection = adwKeywords[id];
                var keywordsList = keywordsCollection.associated_keywords.split(',');
                for (var j = 0; j < keywordsList.length; j++) {
                    var keyword = keywordsList[j].trim();
                    if (keyword !== '') {
                        var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                        for (var k = 0; k < strToCheck.length; k++) {
                            var str = strToCheck[k].trim();
                            if (str.match(re)) {
                                returnKeyword.push(keywordsCollection.keyword);
                                break;
                            }
                        }
                    }
                }
            }
        } else if (typeof strToCheck === 'string') {
            strToCheck = strToCheck.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            for (var id in adwKeywords) {
                var keywordsCollection = adwKeywords[id];
                var keywordsList = keywordsCollection.associated_keywords.split(',');
                for (var j = 0; j < keywordsList.length; j++) {
                    var keyword = keywordsList[j].trim();
                    if (keyword !== '') {
                        var re = new RegExp(keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');
                        if (strToCheck.match(re)) {
                            //re (keywordsCollection.keyword)
                            console.log('adwdebug %ckeyword', 'background: #222; color: #bada55', keywordsCollection.keyword);
                            returnKeyword.push(keywordsCollection.keyword);
                            break;
                        }
                    }
                }
            }
        }
        return returnKeyword;
    };    
    var keywordfound = [];
    var keywordContextIAfound = [];
    if (typeof adwKeywords !== 'undefined' && adwKeywords !== null) {
        try {
            if (typeof WIN != "undefined")
                keywordfound = findKeywords(WIN.document.title);
            else
                keywordfound = findKeywords(window.document.title);
        } catch (e) {}
        /**Digiteka**/
        try {
            if (location.hostname.match('ultimedia'))
                keywordfound = findKeywords(window.parent.dtkPlayer.vinfos.video.title);
        } catch (e) {}
        /**fin Digiteka**/
        /**Pepsia**/
        try {
            if (window.document.title.match('Pepsia'))
                keywordfound = findKeywords(document.getElementById('player_title').innerText);
        } catch (e) {}
        /**fin Pepsia**/
        if (typeof this.creation.videoAnalysisResults == 'object') {
            //                            console.log('adwdebug keywordfound 0 : ', keywordfound, creation.videoAnalysisResults);
            if (typeof this.creation.videoAnalysisResults.keywords == 'object') {
                var newKeywordfound = findKeywords(this.creation.videoAnalysisResults.keywords);
                if (newKeywordfound) {
                    if (keywordContextIAfound !== '') {
                        keywordContextIAfound += ',' + newKeywordfound;
                    } else {
                        keywordContextIAfound = newKeywordfound;
                    }
                }
            }
            if (typeof this.creation.videoAnalysisResults.topics == 'object') {
                var newKeywordfound = findKeywords(this.creation.videoAnalysisResults.topics);
                if (newKeywordfound) {
                    if (keywordContextIAfound !== '') {
                        keywordContextIAfound += ',' + newKeywordfound;
                    } else {
                        keywordContextIAfound = newKeywordfound;
                    }
                }
            }
            //                            console.log('adwdebug keywordfound 1 : ', keywordfound);
        }
    }
    if (keywordfound.length>0) {
        this.keywords.push({"key" : "adways_keywords", "value" : keywordfound});
    } 
    if (keywordContextIAfound.length>0) {
        this.keywords.push({"key" : "adways_context_ia", "value" : keywordContextIAfound});
    } 
    if (typeof that.adwConfig.videoslot !== "undefined" && that.adwConfig.videoslot !== "") {
        var videoslot = that.adwConfig.videoslot;
        if (typeof videoslot.iab !== "undefined" && videoslot.iab !== "") {
            this.keywords.push({"key" : "adways_iab", "value" : videoslot.iab});
        }
        if (typeof this.creation.videoAnalysisResults == 'object') {
            if (typeof this.creation.videoAnalysisResults.iab == 'object') {
                if (this.creation.videoAnalysisResults.iab.length > 0)
                    this.keywords.push({"key" : "kw_adways_video_analysis_iab", "value" : encodeURIComponent(this.creation.videoAnalysisResults.iab[0])});
            }
        }
        if (typeof WIN != "undefined") {
            var kw_adways_domain = WIN.location.hostname;
            this.referrer = encodeURIComponent(WIN.location.href);
        }
        else {
            var kw_adways_domain = window.location.hostname;
            this.referrer = encodeURIComponent(window.location.href);
        }
        if (typeof videoslot.options !== "undefined" && typeof videoslot.options.sendDomainFromPartners !== "undefined" && videoslot.options.sendDomainFromPartners
            && typeof videoslot.x_domain !== "undefined" && videoslot.x_domain !== "") {
            kw_adways_domain = videoslot.x_domain;
            this.referrer = encodeURIComponent(videoslot.x_domain);
        }
        this.keywords.push({"key" : "adways_domain", "value" : encodeURIComponent(kw_adways_domain)});
    }
    if (that.adwConfig.p2s !== null) {
        var p2s = that.adwConfig.p2s;
        var playerSize = p2s.getPlayerSize().valueOf();
        var width = playerSize[0];
        var height = playerSize[1];
        if(width !== null && !isNaN(width) && width > 0 && height !== null && !isNaN(height) && height > 0) {
            var ratio = "169";
            var actualRatio = Math.ceil(width/height*100)*1.0/100;
            if(actualRatio>1) {
                if((actualRatio) < (16/9) && (actualRatio) >= (4/3) ) {
                    ratio = "43";
                } else if((actualRatio) < (4/3) && (actualRatio) >= (1) ) {
                    ratio = "11";
                }
            } else if (width === height) {
                ratio= "11";
            } else {
                actualRatio = Math.ceil(height/width*100)*1.0/100;
                ratio = "916";
                if((actualRatio) < (16/9) && (actualRatio) >= (4/3) ) {
                    ratio = "34";
                } else if((actualRatio) < (4/3) && (actualRatio) >= (1) ) {
                    ratio = "11";
                }                                        
            }
            this.keywords.push({"key" : "adways_ratio", "value" : ratio});
        }

        var duration = p2s.getDuration().valueOf();
        if (duration !== null && !isNaN(duration) && duration > 0) {
            var durationIndice = 60;
            if (duration <= 60) {
                durationIndice = 60;
            } else if (duration <= 90) {
                durationIndice = 60;
            } else if (duration <= 120) {
                durationIndice = 120;
            } else {
                durationIndice = 99999;
            }
            this.keywords.push({"key" : "adways_duration", "value" : durationIndice});
        }
    }

    if (that.adwConfig.delegate !== null) {
        var delegate = that.adwConfig.delegate;
        if(typeof delegate.hadPreroll !== 'undefined') {
            this.keywords.push({"key" : "adways_preroll", "value" : delegate.hadPreroll});
        } else 
        {
            this.keywords.push({"key" : "adways_preroll", "value" : 2});
        }
    }
    //fin keywords
    this.adCallBackCount = 0;
    this.adsAvaliable = new Array();
    this.requestCB = function() {
//        console.log('adwdebug AppnexusManager : requestCB');
        that.adCallBackCount++;
        if (that.adCallBackCount === creationObj.urls.length) {
            processAds();
        }
     };

    var w = window;

    var processAds = function() {
        // console.log(creationObj)
        let found = false;
        for(let i = 0; i < creationObj.urls.length; i++) {
            if(found)
                break
            let tag = creationObj.urls[i];
            for(let j = 0; j < that.adsAvaliable.length; j++) {
                let adAvaliable = that.adsAvaliable[j];
                if(adAvaliable.tag_id == parseInt(tag.placement_id)) {
                    that.orderedAds.push(adAvaliable);
                    that.adsAvaliable.splice(j, 1);
                    found = true;
                    console.log('adwdebug %cId Appnexus qui a gagné l\'impression:', 'background: #222; color: #bada55', tag.placement_id);
                    break;
                }

            }
        }
//        if(that.orderedAds.length > 0 || (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0)) {
//            // console.log(orderedAds);
//            // console.log('adwdebug AppnexusManager : process Adready');
//            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdReady === 'function') {
//                    that.creation.customCallbacks.dispatchAdReady(function () {that.showAd();});
//            }
//        }
        if(that.orderedAds.length > 0) {
            // console.log(orderedAds);
//            console.log('adwdebug AppnexusManager : process Adready');
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdReady === 'function') {
                    that.creation.customCallbacks.dispatchAdReady(function () {that.showAd();});
            }
        } else if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0){            
//            console.log('adwdebug AppnexusManager : No bid, need backfill');
            w.adwVPAIDReadyCb = null;
            if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                that.adwConfig.backfillFunction();
            } 
        }
    }
    this.showAd = function() {
        if(that.orderedAds.length > 0) {
        //    console.log('adwdebug AppnexusManager : process orderedAds', that.orderedAds);
            for(let i = 0; i < that.orderedAds.length; i++) {
                let orderedAd = that.orderedAds[i];
                if(typeof orderedAd.ads !== 'undefined' && orderedAd.ads.length>0) {
                    var adObj = orderedAd.ads[0];
                    if(typeof adObj.ad_type !== 'undefined' && adObj.ad_type == 'video' 
                        && typeof adObj.rtb !== 'undefined' && typeof adObj.rtb.video !== 'undefined'
                        && typeof adObj.rtb.video.content !== 'undefined') {
//                        console.log('adwdebug AppnexusManager : video VAST', adObj.rtb.video.content);
                        if (typeof adways == "undefined" ||
                        typeof adways.iab == "undefined" ||
                        typeof adways.iab.vast == "undefined" ||
                        typeof adways.iab.vast.Loader == "undefined") {
                            if(typeof that.customTrackings[orderedAd.tag_id] !== 'undefined' && typeof that.customTrackings[orderedAd.tag_id].impression !== 'undefined') {
                                that.impressionsPixel.push(that.customTrackings[orderedAd.tag_id].impression);
                            }
                            if(typeof orderedAd.deal_id !== 'undefined') {
                                that.dealID = orderedAd.deal_id;
                            }
                            var adwLib = document.createElement("script");
                            adwLib.type = "text/javascript";
                            adwLib.src = "https://play.adpaths.com/libs/iAb/vast/loader.js";
                            var adObjVideo = adObj.rtb.video;
                            adwLib.addEventListener("load", function() {
                                vastLoaderLibCB(adObjVideo);
                            });
                            document.getElementsByTagName("head")[0].appendChild(adwLib);
                        } else {
                            vastLoaderLibCB(adObj.rtb.video);
                        }
                        w.adwVPAIDReadyCb = null;
                    }
                    if(typeof adObj.ad_type !== 'undefined' && adObj.ad_type == 'banner' 
                        && typeof adObj.rtb !== 'undefined' && typeof adObj.rtb.banner !== 'undefined'
                        && typeof adObj.rtb.banner.content !== 'undefined') {
//                        console.log('adwdebug : banner script', adObj.rtb.banner.content);
                        if (typeof adObj.rtb.trackers !== 'undefined' && adObj.rtb.trackers !== null && adObj.rtb.trackers.length > 0) {
                            for (let j = 0; j < adObj.rtb.trackers.length; j++) {
                                let tracker = adObj.rtb.trackers[j];
                                if (typeof tracker.impression_urls !== 'undefined' && tracker.impression_urls !== null && tracker.impression_urls.length > 0) {
                                    for (let k = 0; k < tracker.impression_urls.length; k++) {
                                        let impression_url = tracker.impression_urls[k];
                                        that.impressionsPixel.push(impression_url);
                                    }
                                }
                            }
                        }
                        if(typeof that.customTrackings[orderedAd.tag_id] !== 'undefined' && typeof that.customTrackings[orderedAd.tag_id].impression !== 'undefined') {
                            that.impressionsPixel.push(that.customTrackings[orderedAd.tag_id].impression);
                        }
                        if(typeof orderedAd.deal_id !== 'undefined') {
                            that.dealID = orderedAd.deal_id;
                        }
                    }
                    if(typeof adObj.ad_type !== 'undefined' && adObj.ad_type == 'banner' 
                        && typeof adObj.rtb !== 'undefined' && typeof adObj.rtb.banner !== 'undefined'
                        && typeof adObj.rtb.banner.content !== 'undefined') {
//                        console.log('adwdebug : banner script', adObj.rtb.banner.content);
                        var fiframe = document.createElement('iframe');       
                        fiframe.style.width = "0px";
                        fiframe.style.height = "0px";
                        fiframe.style.border = "0px";
                        fiframe.style.overflow = "hidden";
                        fiframe.scrolling = "no";
                        document.body.appendChild(fiframe);
                        this.fiframeDoc = fiframe.contentDocument ? fiframe.contentDocument : (fiframe.contentWindow ? fiframe.contentWindow.document : fiframe.document);
                        this.fiframeDoc.open("text/html");
                        this.fiframeDoc.write(adObj.rtb.banner.content);
                        this.fiframeDoc.close();                    
                    } 
                }
            } 
        } else {
            //console.log('adwdebug AppnexusManager : No bid, need backfill');
            window.adwVPAIDReadyCb = null;
            if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                that.adwConfig.backfillFunction();
            } 
        }
     };


///VAST part
    var vastLoaderLibCB = function(adObjVideo) {
        let vastloader = new adways.iab.vast.Loader();
        that.currentVastLoader = vastloader;
        var videoslot = that.playerIdentity[1];
        vastloader.setPlayerClass(that.playerIdentity[0]);
        vastloader.setVideoSlot(videoslot);
        var slot = videoslot;
        if (that.adwConfig.s2p !== null) {
            var layer = new adways.interactive.Layer(adways.hv.layerIds.HOTSPOT);
            that.adwConfig.s2p.layerAdded(layer);
            var adContainer = layer.getDomElement();
            slot = adContainer;
        } else if (typeof(videoslot.getContainer) == "function" && videoslot.getContainer() !== null) {
            slot = videoslot.getContainer();
        }
        if (typeof videoslot.adwSlot !== "undefined" && videoslot.adwSlot !== null && videoslot.adwSlot !== videoslot) {
            slot = videoslot.adwSlot;
        }
        /** hack pour appnexus wrapper **/
        if (typeof slot.style == "undefined") {
            slot.style = new Object();
            slot.style.margin = 0;
            slot.style.padding = 0;
        }
        if (typeof slot.ownerDocument == "undefined") {
            slot.ownerDocument = document;
        }
        if (typeof slot.appendChild == "undefined") {
            slot.appendChild = function(url) {
                document.getElementsByTagName("head")[0].appendChild(url);
            };
        }
        if (typeof slot.addEventListener == "undefined") {
            slot.addEventListener = function() {};
        }
        if (typeof slot.removeEventListener == "undefined") {
            slot.removeEventListener = function() {};
        }
        if (typeof videoslot.addEventListener == "undefined") {
            videoslot.addEventListener = function() {};
        }
        if (typeof videoslot.removeEventListener == "undefined") {
            videoslot.removeEventListener = function() {};
        }
        /** finhack pour appnexus wrapper **/
        vastloader.setSlot(slot);
        vastloader.setRendererSize(800, 600);
        if (that.adwConfig.delegate !== null)
            vastloader.setDelegate(that.adwConfig.delegate);
        if (that.adwConfig.s2p !== null)
            vastloader.setS2P(that.adwConfig.s2p);
        if (that.adwConfig.p2s !== null)
            vastloader.setP2S(that.adwConfig.p2s);   
        try {
            if (window.location.hostname != '') {
                vastloader.setDomain(window.location.hostname);
            }
        } catch (e) {
//            console.log('failed to get domain');
        }
        if (typeof videoslot.x_domain !== "undefined" && videoslot.x_domain !== "") {
            vastloader.setDomain(videoslot.x_domain);
        }
        vastloader.addEventListener(adways.iab.vast.loaderEvents.VAST_FILE_STATE_CHANGED, function(e) {
            switch (vastloader.getVASTFileState().valueOf()) {
                case adways.iab.vast.vastFileStates.EMPTY:
                case adways.iab.vast.vastFileStates.ERROR:
                    //that.tracker.sendData({event_type: 'state', event_name: 'adCallEmpty'});
                    if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                        if (that.adwConfig.s2p !== null) {
                            var layers = that.adwConfig.s2p.layersToArray();
                            while (layers.length > 0) {
                                var layer = layers.pop();
                                that.adwConfig.s2p.layerRemoved(layer);
                            }
                        }
                        that.adwConfig.backfillFunction();
                    }
                    break;
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_ERROR, function(e) {
            //                                    console.log("AD_ERROR fallback", e.getData());
            if ( /*e.getData() === '901' && */ that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                if (that.adwConfig.s2p !== null) {
                    var layers = that.adwConfig.s2p.layersToArray();
                    while (layers.length > 0) {
                        var layer = layers.pop();
                        that.adwConfig.s2p.layerRemoved(layer);
                    }
                }
                that.adwConfig.backfillFunction();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_IMPRESSION, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdImpression === 'function') {
                that.creation.customCallbacks.dispatchAdImpression();
            }
//            console.log("adwdebug AdImpression video", that.impressionsPixel);
            for(let i=0; i<that.impressionsPixel.length; i++) {
                var impressionPixel = that.impressionsPixel[i];
                if(typeof impressionPixel === 'string') {
//                    (new Image(0, 0)).src = impressionPixel;
                    (new Image(0, 0)).src = window.adways.misc.string.macroReplacer(impressionPixel, that.macroList);
                }
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_CLICK_THRU, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdClickThru === 'function') {
                that.creation.customCallbacks.dispatchAdClickThru();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_START, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoStart === 'function') {
                that.creation.customCallbacks.dispatchAdVideoStart();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_FIRST_QUARTILE, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoFirstQuartile === 'function') {
                that.creation.customCallbacks.dispatchAdVideoFirstQuartile();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_MIDPOINT, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoMidpoint === 'function') {
                that.creation.customCallbacks.dispatchAdVideoMidpoint();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_THIRD_QUARTILE, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoThirdQuartile === 'function') {
                that.creation.customCallbacks.dispatchAdVideoThirdQuartile();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_VIDEO_COMPLETE, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoComplete === 'function') {
                that.creation.customCallbacks.dispatchAdVideoComplete();
            }
        });
        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_SKIPPED, function() {
            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdSkipped === 'function') {
                that.creation.customCallbacks.dispatchAdSkipped();
            }
        });     
        videoslot.adwAutoLoad = true;
//        vastloader.setAutoloadCb(true);
//        vastloader.addEventListener(adways.iab.vast.VPAIDWrapperEvents.AD_LOADED, function(evt) {
//            console.log('appnexus AD_LOADED',evt);
//            if (typeof (evt) !== "undefined" && typeof (evt.getData) === "function") {
//                cbFunction = evt.getData();
//                if (typeof cbFunction === 'function') {
//                    cbFunction();
//                }
//            }
//        });
        
        var videoslot = playerIdentity[1];
        vastloader.setPlayerClass(playerIdentity[0]);
        vastloader.setVideoSlot(videoslot);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(adObjVideo.content,"text/xml");
        vastloader.setVASTXML(xmlDoc);
        
        if (that.adwConfig.p2s !== null) {
            var urChangedCB = function() {
                that.adwConfig.p2s.removeEventListener(adways.resource.events.URL_CHANGED, urChangedCB, this);
//                console.log("URL_CHANGED");
                vastloader.clearAll();
                if (that.adwConfig.cbFunction !== null)
                    that.adwConfig.cbFunction();
            };
            that.adwConfig.p2s.addEventListener(adways.resource.events.URL_CHANGED, urChangedCB, this);
        }
    };
///fin VAST part
///VPAID part
    w.adwVPAIDReadyCb = function (window) {
        // console.log('adwdebug : adwVPAIDReadyCb');
        let fn = window['getVPAIDAd'];
        if (fn && typeof fn === 'function') {
            let VPAIDCreative = fn();  
            //console.log('adwdebug VPAIDCreative :', VPAIDCreative);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdImpression === 'function') {
                    that.creation.customCallbacks.dispatchAdImpression();
                }
//                console.log("adwdebug AdImpression display", that.impressionsPixel);
                for(let i=0; i<that.impressionsPixel.length; i++) {
                    var impressionPixel = that.impressionsPixel[i];
                    if(typeof impressionPixel === 'string') {
//                        (new Image(0, 0)).src = impressionPixel;
                        (new Image(0, 0)).src = window.adways.misc.string.macroReplacer(impressionPixel, that.macroList);
                    }
                }
            }, "AdImpression", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdClickThru === 'function') {
                    that.creation.customCallbacks.dispatchAdClickThru();
                }
//                console.log("AdClickThru");
            }, "AdClickThru", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoStart === 'function') {
                    that.creation.customCallbacks.dispatchAdVideoStart();
                }
            }, "AdVideoStart", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoFirstQuartile === 'function') {
                    that.creation.customCallbacks.dispatchAdVideoFirstQuartile();
                }
            }, "AdVideoFirstQuartile", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoMidpoint === 'function') {
                    that.creation.customCallbacks.dispatchAdVideoMidpoint();
                }
            }, "AdVideoMidpoint", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoThirdQuartile === 'function') {
                    that.creation.customCallbacks.dispatchAdVideoThirdQuartile();
                }
            }, "AdVideoThirdQuartile", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdVideoComplete === 'function') {
                    that.creation.customCallbacks.dispatchAdVideoComplete();
                }
            }, "AdVideoComplete", this);
            VPAIDCreative.subscribe(function () {
                if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdSkipped === 'function') {
                    that.creation.customCallbacks.dispatchAdSkipped();
                }
            }, "AdSkipped", this);
            VPAIDCreative.subscribe(function (cb) {
//                console.log("VPAIDCreative AdReady",cb);
                if (typeof cb === 'function') {
                    cb();
                }
            }, "AdReady", this);
            var creativeData = {};
            var environmentVars = new Object();
            if (that.adwConfig.videoslot !== null)
                environmentVars["videoSlot"] = that.adwConfig.videoslot;
            if (that.adwConfig.playerClass !== null)
                environmentVars["playerClass"] = that.adwConfig.playerClass;
            if (that.adwConfig.slot !== null)
                environmentVars["slot"] = that.adwConfig.slot;
            if (that.adwConfig.delegate !== null) {
                environmentVars["delegate"] = that.adwConfig.delegate;
                if (that.adwConfig.slot !== null) {
                    environmentVars["slot"]["delegate"] = environmentVars["delegate"];
                }
            }
            if (that.adwConfig.p2s !== null) {
                environmentVars["p2s"] = that.adwConfig.p2s;
                if (that.adwConfig.slot !== null) {
                    environmentVars["slot"]["p2s"] = environmentVars["p2s"];
                }
            }
            if (that.adwConfig.s2p !== null) {
                environmentVars["s2p"] = that.adwConfig.s2p;
                if (that.adwConfig.slot !== null) {
                    environmentVars["slot"]["s2p"] = environmentVars["s2p"];
                }
            }
            VPAIDCreative.initAd(16, 9, "normal", 3600, creativeData, environmentVars);
        }
    };
///fin VPAID part

    this.consentData = null;
    try {
        window.top.__cmp('getConsentData', null, function (result) {
            if(typeof result.consentData === "string" && that.consentData === null) {
                that.consentData = result.consentData;
            }
        });
    } catch (e) {
    }
    try {
        window.top.__tcfapi('getTCData', 2, function(TCData,success){
            if(typeof TCData.tcString === "string") {
                that.consentData = TCData.tcString;
                that.callTags();
            }
        });
    } catch (e) {
        that.callTags();
    }
};

AppnexusManager.prototype.callTags = function() {
    var that = this;    
    try {
        if(typeof window.ADW_CURRENT_SCRIPT_URL !== "undefined" && window.ADW_CURRENT_SCRIPT_URL !== null && window.ADW_CURRENT_SCRIPT_URL !== "") {
            var urlParams = new URLSearchParams(window.ADW_CURRENT_SCRIPT_URL);
            this.consentData = urlParams.get('gdpr_consent');
        }
    } catch (e) {
        
    }
//    console.log('adwdebug : this.tags_members', this.tags_members);
    for (let tag_member in this.tags_members) {
        let memberID = tag_member;
        let tags = this.tags_members[memberID];

        let req = new window.adways.ajax.Request();
        req.setURL("https://ib.adnxs.com/ut/v3/prebid");
        req.setContentType("text/plain");
        req.getXHR().withCredentials = true;
        req.setMethod("POST");
        let reqData = {};
        if(this.consentData!==null) {
            reqData.gdpr_consent = {
                consent_required: true,
                consent_string: that.consentData
            }
        }
        reqData.sdk = {
            source: "pbjs",
            version: "3.24.0"
        }
        
        reqData.referrer_detection = {
            rd_ifs: 0,
            rd_ref: this.referrer,
            rd_stk: this.referrer,
            rd_top: true,
        }
        reqData.member_id = memberID;
        for (let i = 0; i < tags.length; i++) {
            if (typeof reqData.tags === 'undefined') 
                reqData.tags = [];
            tags[i].keywords = this.keywords;
            tags[i].prebid = true;
            reqData.tags.push(tags[i]);
        }
        req.setDataObject(reqData);
        let requestDoneListener = function(evt) {
            if (req.getState() === window.adways.ajax.states.DONE) {
                var xhr = req.getXHR();
                var reqStatus = xhr["status"];
                switch (reqStatus) {
                    case 200:
                        var rawResponseText = req.getResponseText();
                        var responseObject = JSON.parse(rawResponseText);
                        //console.log(responseObject);
                        if(typeof responseObject.error !== 'undefined') {
                            if (typeof that.creation.customCallbacks !== 'undefined' && typeof that.creation.customCallbacks.dispatchAdReady === 'function') {
                                that.creation.customCallbacks.dispatchAdError();
                            }
                            if (that.adwConfig.addCalls && that.adwConfig.addCalls.length > 0) {
                                that.adwConfig.backfillFunction();
                            }
                        }
                        if(typeof responseObject.tags !== 'undefined') {
                            for (let i = 0; i < responseObject.tags.length; i++) {
                                let tag = responseObject.tags[i];
                                if(typeof tag['nobid'] !== 'boolean' || tag['nobid'] == false)
                                    that.adsAvaliable.push(tag);
                                that.requestCB();
                            }
                        }
                        break;
                    default:
                        that.requestCB();
                }
            }
        };
        req.addEventListener(window.adways.ajax.events.STATE_CHANGED, requestDoneListener);
        req.load();
    }
};

AppnexusManager.prototype.clearAll = function() {
    if (this.currentVastLoader !== null) {
        this.currentVastLoader.clearAll();
        return 1;
    }
    return 0;
};
var CreateStudioPublication = function(playerIdentity, defaultPublication) {
    // TODO
};

var CreateExperience = function(playerIdentity, defaultPublication) {
    var experience;
    var adwLibCB = function() {
        experience = new adways.interactive.Experience();
        experience.setPlayerClass(playerIdentity[0]);
        experience.setPlayerAPI(playerIdentity[1]);
        experience.setPublicationID(defaultPublication);
        experience.load();
        return experience;
    };

    if (typeof adways == "undefined" ||
            typeof adways.interactive == "undefined" ||
            typeof adways.interactive.experience == "undefined") {
        var adwLib = document.createElement("script");
        adwLib.type = "text/javascript";
        adwLib.src = "https://play.adpaths.com/libs/interactive/loader.js";
        adwLib.addEventListener("load", function() {
            adwLibCB();
        });
        document.getElementsByTagName("head")[0].appendChild(adwLib);
    } else {
        adwLibCB();
    }
};

var PublicationManager = function(playerIdentity, studioVersion, defaultPublication) {
    this.playerIdentity = playerIdentity;
    this.defaultPublication = defaultPublication;
    this.studioVersion = typeof studioVersion == "undefined" ? "V3" : studioVersion;
    this.currentPublicationManager = null;
    this.initPublication();
};

PublicationManager.prototype.initPublication = function() {
    if (this.currentPublicationManager == null) {
        switch (this.studioVersion) {
            case "V3":
                //
                break;
            case "V2":
                this.currentPublicationManager = new CreateExperience(this.playerIdentity, this.defaultPublication);
                break;
        }
        return 1;
    }
    return 0;
};
// return type + tag | emplacement ID
var Targetizer = function(win, targTab, domain = '', debug = 0) {
    //getTopParent
    try {
        var topWindow = win;
        while (topWindow !== topWindow.parent) {
            var topLocation = topWindow.parent.location.href;
            topWindow = topWindow.parent;
        }
    } catch (err) {

    }
    
//console.log("adwdebug Targetizer",targTab );
    var returnInventories = new Array();
    for (var i = 0; i < targTab.length; i++) {
        // we check first if the domain is ok
        // console.log(targTab);
        var domainToCheck = win.location.hostname;
        if(domain !== '')
            domainToCheck = domain;
        if (domainToCheck.match(targTab[i].domain) != null) {
            if(debug){
                console.log('adwdebug %cWe have tested %c' + targTab[i].domain +  '%c in ' + domainToCheck + ' with %csuccess. ', 'background: #222; color: #bada55', 'background: #222; color: white', 'background: #222; color: #bada55', 'background: #222; color: pink');
            }           
            // we sort URLs to check the biggest before
            var inventories = targTab[i]['inventories'];
            for (var l = 0; l < inventories.length; l++) {
                var subPageFound = false;
                var inventory = inventories[l];
                if (inventory.nb_sub_pages && inventory.nb_sub_pages > 0) {
                    inventory.sub_pages.sort(function(a, b) {
                        return b.url.length - a.url.length;
                    });
                    for (var j = 0; j < inventory.sub_pages.length; j++) {
                        var subPageToCheck = '';
                        try {
                            subPageToCheck = topWindow.location.href;
                        } catch(e) {
                        }
                        if(domain !== '')
                            subPageToCheck = domain;
                        if (subPageToCheck.match(inventory.sub_pages[j].url) != null || topWindow.location.href.match(inventory.sub_pages[j].url) != null) {
                            if ((inventory.sub_pages[j].creation_mobileonly && Targetizer.mobileAndTabletcheck() && !inventory.sub_pages[j].creation_desktoponly)
                                    || (inventory.sub_pages[j].creation_desktoponly && !Targetizer.mobileAndTabletcheck() && !inventory.sub_pages[j].creation_mobileonly)
                                    || (!inventory.sub_pages[j].creation_desktoponly && !inventory.sub_pages[j].creation_mobileonly)
                                    || (inventory.sub_pages[j].creation_desktoponly && inventory.sub_pages[j].creation_mobileonly)) {
                                if (inventory.sub_pages[j].creation_type != '' && inventory.sub_pages[j].creation_url != '') {
                                    returnInventories.push(inventory.sub_pages[j]);
                                    subPageFound = true;
                                }
                            }
                        }
                    }
                }
                if(subPageFound)
                    continue;
                if ((inventory.creation_mobileonly && Targetizer.mobileAndTabletcheck() && !inventory.creation_desktoponly)
                        || (inventory.creation_desktoponly && !Targetizer.mobileAndTabletcheck() && !inventory.creation_mobileonly)
                        || (!inventory.creation_desktoponly && !inventory.creation_mobileonly)
                        || (inventory.creation_desktoponly && inventory.creation_mobileonly)) {
                    if (inventory.creation_type != '' && inventory.creation_url != '') {
                        returnInventories.push(inventory);
                    }
                }
            }
        }else{
            if(debug){
                console.log('adwdebug %cWe have tested %c' + targTab[i].domain +  '%c in ' + domainToCheck + ' with %cfail ', 'background: #222; color: #bada55', 'background: #222; color: white', 'background: #222; color: #bada55', 'background: #222; color: red');
            }
        }
    }
    return returnInventories;
};

Targetizer.createFiFrame = function(doc) {
    var fif = doc.createElement("iframe");
    fif.webkitAllowFullscreen = true;
    fif.mozAllowFullscreen = true;
    fif.msAllowFullscreen = true;
    fif.allowFullscreen = true;
    fif.style.margin = 0;
    fif.style.padding = 0;
    fif.style.border = 0;
    fif.style.width = "0";
    fif.style.height = "0";
    if(arguments.length>1) {
        var cb = arguments[1];
        fif.addEventListener("load", function() {
            cb(fif);
        });
    }
    doc.body.appendChild(fif);
    return fif;
};

Targetizer.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var Bridge = function () {
    this.source = null;
    this.origin = null;
    this.adwPBSReceived = false;
    this.intervalChecker = null;
    this.init = false;
    
    var that = this;
    this.postMessageListener = function (e) {
        if (e.origin === "http://www.dailymotion.com" || e.origin === "https://www.dailymotion.com") {
            if (that.source === null) {
                that.source = e.source;
                that.origin = e.origin;
                that.intervalChecker = setInterval(function () {
                    if(that.init) {
//                        console.log("publisher adwpbs");
                        that.source.postMessage("adwpbs", that.origin);
                    }
                }, 1000);
            }
        } else {
            if (typeof e.data == "string" && e.data === "adwpbs") {
//                console.log("postMessageListener Player", e);
                that.adwPBSReceived = true;
            }
        }
    };
    var win = document.defaultView || document.parentWindow;
    win.addEventListener("message", this.postMessageListener, false);
};

Bridge.prototype.getAdwPBSReceived = function () {
    return this.adwPBSReceived;
};

Bridge.prototype.initMessage = function () {
//    console.log("initMessage");
    this.init = true;
};

Bridge.prototype.destroy = function () {
    var win = document.defaultView || document.parentWindow;
    win.removeEventListener("message", this.postMessageListener, false);    
    clearInterval(this.intervalChecker);
    this.intervalChecker = null;
};"undefined"!=typeof JSON&&null!=JSON||function(){var t="function"==typeof define&&define.t,Z={function:!0,object:!0},i=Z[typeof exports]&&exports&&!exports.nodeType&&exports,C=Z[typeof window]&&window||this,n=i&&Z[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;function B(t,f){t||(t=C.Object()),f||(f=C.Object());var o=t.Number||C.Number,a=t.String||C.String,i=t.Object||C.Object,c=t.Date||C.Date,n=t.SyntaxError||C.SyntaxError,p=t.TypeError||C.TypeError,s=t.Math||C.Math,h=t.JSON||C.JSON;"object"==typeof h&&h&&(f.stringify=h.stringify,f.parse=h.parse);var g,M,k,r=i.prototype,x=r.toString,l=new c(-0xc782b5b800cec);try{l=-109252==l.getUTCFullYear()&&0===l.getUTCMonth()&&1===l.getUTCDate()&&10==l.getUTCHours()&&37==l.getUTCMinutes()&&6==l.getUTCSeconds()&&708==l.getUTCMilliseconds()}catch(t){}function w(t){if(w[t]!==k)return w[t];var i;if("bug-string-char-index"==t)i="a"!="a"[0];else if("json"==t)i=w("json-stringify")&&w("json-parse");else{var n,s='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var h=f.stringify,r="function"==typeof h&&l;if(r){(n=function(){return 1}).toJSON=n;try{r="0"===h(0)&&"0"===h(new o)&&'""'==h(new a)&&h(x)===k&&h(k)===k&&h()===k&&"1"===h(n)&&"[1]"==h([n])&&"[null]"==h([k])&&"null"==h(null)&&"[null,null,null]"==h([k,x,null])&&h({a:[n,!0,!1,null,"\0\b\n\f\r\t"]})==s&&"1"===h(null,n)&&"[\n 1,\n 2\n]"==h([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==h(new c(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==h(new c(864e13))&&'"-000001-01-01T00:00:00.000Z"'==h(new c(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==h(new c(-1))}catch(t){r=!1}}i=r}if("json-parse"==t){var e=f.parse;if("function"==typeof e)try{if(0===e("0")&&!e(!1)){var u=5==(n=e(s)).a.length&&1===n.a[0];if(u){try{u=!e('"\t"')}catch(t){}if(u)try{u=1!==e("01")}catch(t){}if(u)try{u=1!==e("1.")}catch(t){}}}}catch(t){u=!1}i=u}}return w[t]=!!i}if(!w("json")){var v="[object Function]",S="[object Number]",_="[object String]",I="[object Array]",u=w("bug-string-char-index");if(!l)var z=s.floor,e=[0,31,59,90,120,151,181,212,243,273,304,334],F=function(t,i){return e[i]+365*(t-1970)+z((t-1969+(i=+(1<i)))/4)-z((t-1901+i)/100)+z((t-1601+i)/400)};if((g=r.hasOwnProperty)||(g=function(t){var n,i={};return g=(i.__proto__=null,i.__proto__={toString:1},i).toString!=x?function(t){var i=this.__proto__,n=t in(this.__proto__=null,this);return this.__proto__=i,n}:(n=i.constructor,function(t){var i=(this.constructor||n).prototype;return t in this&&!(t in i&&this[t]===i[t])}),i=null,g.call(this,t)}),M=function(t,i){var n,e,s,h=0;for(s in(n=function(){this.valueOf=0}).prototype.valueOf=0,e=new n)g.call(e,s)&&h++;return n=e=null,(M=h?2==h?function(t,i){var n,s={},h=x.call(t)==v;for(n in t)h&&"prototype"==n||g.call(s,n)||!(s[n]=1)||!g.call(t,n)||i(n)}:function(t,i){var n,s,h=x.call(t)==v;for(n in t)h&&"prototype"==n||!g.call(t,n)||(s="constructor"===n)||i(n);(s||g.call(t,n="constructor"))&&i(n)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],function(t,i){var n,s,h=x.call(t)==v,r=!h&&"function"!=typeof t.constructor&&Z[typeof t.hasOwnProperty]&&t.hasOwnProperty||g;for(n in t)h&&"prototype"==n||!r.call(t,n)||i(n);for(s=e.length;n=e[--s];r.call(t,n)&&i(n));}))(t,i)},!w("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},E=function(t,i){return("000000"+(i||0)).slice(-t)},T=function(t){for(var i='"',n=0,s=t.length,h=!u||10<s,r=h&&(u?t.split(""):t);n<s;n++){var e=t.charCodeAt(n);switch(e){case 8:case 9:case 10:case 12:case 13:case 34:case 92:i+=N[e];break;default:if(e<32){i+="\\u00"+E(2,e.toString(16));break}i+=h?r[n]:t.charAt(n)}}return i+'"'},D=function(t,i,n,s,h,r,e){var u,f,o,a,c,l,w,v,N,b,y,A,d,j,O,m;try{u=i[t]}catch(t){}if("object"==typeof u&&u)if("[object Date]"!=(f=x.call(u))||g.call(u,"toJSON"))"function"==typeof u.toJSON&&(f!=S&&f!=_&&f!=I||g.call(u,"toJSON"))&&(u=u.toJSON(t));else if(-1/0<u&&u<1/0){if(F){for(c=z(u/864e5),o=z(c/365.2425)+1970-1;F(o+1,0)<=c;o++);for(a=z((c-F(o,0))/30.42);F(o,a+1)<=c;a++);c=1+c-F(o,a),w=z((l=(u%864e5+864e5)%864e5)/36e5)%24,v=z(l/6e4)%60,N=z(l/1e3)%60,b=l%1e3}else o=u.getUTCFullYear(),a=u.getUTCMonth(),c=u.getUTCDate(),w=u.getUTCHours(),v=u.getUTCMinutes(),N=u.getUTCSeconds(),b=u.getUTCMilliseconds();u=(o<=0||1e4<=o?(o<0?"-":"+")+E(6,o<0?-o:o):E(4,o))+"-"+E(2,a+1)+"-"+E(2,c)+"T"+E(2,w)+":"+E(2,v)+":"+E(2,N)+"."+E(3,b)+"Z"}else u=null;if(n&&(u=n.call(i,t,u)),null===u)return"null";if("[object Boolean]"==(f=x.call(u)))return""+u;if(f==S)return-1/0<u&&u<1/0?""+u:"null";if(f==_)return T(""+u);if("object"==typeof u){for(j=e.length;j--;)if(e[j]===u)throw p();if(e.push(u),y=[],O=r,r+=h,f==I){for(d=0,j=u.length;d<j;d++)A=D(d,u,n,s,h,r,e),y.push(A===k?"null":A);m=y.length?h?"[\n"+r+y.join(",\n"+r)+"\n"+O+"]":"["+y.join(",")+"]":"[]"}else M(s||u,function(t){var i=D(t,u,n,s,h,r,e);i!==k&&y.push(T(t)+":"+(h?" ":"")+i)}),m=y.length?h?"{\n"+r+y.join(",\n"+r)+"\n"+O+"}":"{"+y.join(",")+"}":"{}";return e.pop(),m}};f.stringify=function(t,i,n){var s,h,r,e;if(Z[typeof i]&&i)if((e=x.call(i))==v)h=i;else if(e==I){r={};for(var u,f=0,o=i.length;f<o;u=i[f++],((e=x.call(u))==_||e==S)&&(r[u]=1));}if(n)if((e=x.call(n))==S){if(0<(n-=n%1))for(s="",10<n&&(n=10);s.length<n;s+=" ");}else e==_&&(s=n.length<=10?n:n.slice(0,10));return D("",((u={})[""]=t,u),h,r,s,"",[])}}if(!w("json-parse")){var b,y,A=a.fromCharCode,d={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},j=function(){throw b=y=null,n()},O=function(){for(var t,i,n,s,h,r=y,e=r.length;b<e;)switch(h=r.charCodeAt(b)){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=u?r.charAt(b):r[b],b++,t;case 34:for(t="@",b++;b<e;)if((h=r.charCodeAt(b))<32)j();else if(92==h)switch(h=r.charCodeAt(++b)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=d[h],b++;break;case 117:for(i=++b,n=b+4;b<n;b++)48<=(h=r.charCodeAt(b))&&h<=57||97<=h&&h<=102||65<=h&&h<=70||j();t+=A("0x"+r.slice(i,b));break;default:j()}else{if(34==h)break;for(h=r.charCodeAt(b),i=b;32<=h&&92!=h&&34!=h;)h=r.charCodeAt(++b);t+=r.slice(i,b)}if(34==r.charCodeAt(b))return b++,t;j();default:if(i=b,45==h&&(s=!0,h=r.charCodeAt(++b)),48<=h&&h<=57){for(48==h&&(48<=(h=r.charCodeAt(b+1))&&h<=57)&&j(),s=!1;b<e&&(48<=(h=r.charCodeAt(b))&&h<=57);b++);if(46==r.charCodeAt(b)){for(n=++b;n<e&&(48<=(h=r.charCodeAt(n))&&h<=57);n++);n==b&&j(),b=n}if(101==(h=r.charCodeAt(b))||69==h){for(43!=(h=r.charCodeAt(++b))&&45!=h||b++,n=b;n<e&&(48<=(h=r.charCodeAt(n))&&h<=57);n++);n==b&&j(),b=n}return+r.slice(i,b)}if(s&&j(),"true"==r.slice(b,b+4))return b+=4,!0;if("false"==r.slice(b,b+5))return b+=5,!1;if("null"==r.slice(b,b+4))return b+=4,null;j()}return"$"},m=function(t){var i,n;if("$"==t&&j(),"string"==typeof t){if("@"==(u?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(i=[];"]"!=(t=O());n||(n=!0))n&&(","==t?"]"==(t=O())&&j():j()),","==t&&j(),i.push(m(t));return i}if("{"==t){for(i={};"}"!=(t=O());n||(n=!0))n&&(","==t?"}"==(t=O())&&j():j()),","!=t&&"string"==typeof t&&"@"==(u?t.charAt(0):t[0])&&":"==O()||j(),i[t.slice(1)]=m(O());return i}j()}return t},J=function(t,i,n){var s=R(t,i,n);s===k?delete t[i]:t[i]=s},R=function(t,i,n){var s,h=t[i];if("object"==typeof h&&h)if(x.call(h)==I)for(s=h.length;s--;)J(h,s,n);else M(h,function(t){J(h,t,n)});return n.call(t,i,h)};f.parse=function(t,i){var n,s;return b=0,y=""+t,n=m(O()),"$"!=O()&&j(),b=y=null,i&&x.call(i)==v?R(((s={})[""]=n,s),"",i):n}}}return f.runInContext=B,f}if(!n||n.global!==n&&n.window!==n&&n.self!==n||(C=n),i&&!t)B(C,i);else{var s=C.JSON,h=C.JSON3,r=!1,e=B(C,C.JSON3={noConflict:function(){return r||(r=!0,C.JSON=s,C.JSON3=h,s=h=null),e}});C.JSON={parse:e.parse,stringify:e.stringify}}t&&define(function(){return e})}.call(this),function(v){"use strict";void 0===v.adways&&(v.adways=new Object);var e=v.adways;void 0===e.tweaks&&(e.tweaks=new Object);var r=v.console;if(void 0!==r&&null!=r||(v.console=new Object,r=v.console),"function"!=typeof r.log)if(void 0===r.log||null==r.log)r.log=function(){};else if("object"!=typeof r.log)throw"console.log is not a function";if("function"!=typeof r.warn)if(void 0===r.warn||null==r.warn)r.warn=function(){};else if("object"!=typeof r.warn)throw"console.warn is not a function";if("indexOf"in Array.prototype||(Array.prototype.indexOf=function(t,i){void 0===i&&(i=0),i<0&&(i+=this.length),i<0&&(i=0);for(var n=this.length;i<n;i++)if(i in this&&this[i]===t)return i;return-1}),void 0===e&&(e=new Object),void 0===e.i){e.i=new Object,e.i.s=0,e.i.h=document.createElement("div"),e.i.h.style.display="block",e.i.h.style.position="fixed",e.i.h.style.bottom="0%",e.i.h.style.width="100%",e.i.h.style.height="70px",e.i.u=document.createElement("div"),e.i.u.id="adways-tracer-resize-div",e.i.u.style.position="absolute",e.i.u.style.top="0px",e.i.u.style.height="5px",e.i.u.style.left="0px",e.i.u.style.width="100%",e.i.u.style.overflow="hidden",e.i.u.style.backgroundColor="rgb(0,255,0)";var t="#adways-tracer-resize-div:hover{cursor:ns-resize;}",n=document.createElement("style");n.setAttribute("type","text/css"),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(n),e.i.l=document.createElement("div"),e.i.l.style.position="absolute",e.i.l.style.top="5px",e.i.l.style.bottom="0px",e.i.l.style.left="0px",e.i.l.style.width="100%",e.i.l.style.overflow="scroll",e.i.l.style.color="rgb(0,255,0)",e.i.l.style.fontSize="12px";var s=document.createElement("div");s.innerHTML="\x3c!--[if lt IE 9]><i></i><![endif]--\x3e",0<s.getElementsByTagName("i").length?(e.i.l.style.backgroundColor="black",e.i.l.style.opacity=.8,e.i.l.style.o="progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",e.i.l.style.filter="alpha(opacity=80)"):e.i.l.style.backgroundColor="rgba(0,0,0,0.8)",e.i.h.appendChild(e.i.u),e.i.h.appendChild(e.i.l),e.i.v=document.createElement("div"),e.i.v.style.display="block",e.i.v.style.position="fixed",e.i.v.style.top="0%",e.i.v.style.left="0%",e.i.v.style.width="100%",e.i.v.style.height="100%",e.i.v.style.cursor="ns-resize",e.i.N=function(t){t.stopPropagation(),t.preventDefault(),e.i.m=t.screenY,e.i.p=e.i.h.offsetHeight,v.addEventListener?(v.addEventListener("mousemove",e.i.O,!0),v.addEventListener("mouseup",e.i.j,!0)):(v.attachEvent("onmousemove",e.i.O,!0),v.attachEvent("onmouseup",e.i.j,!0)),document.getElementsByTagName("body")[0].appendChild(e.i.v)},e.i.O=function(t){t.stopPropagation(),t.preventDefault();var i=t.screenY-e.i.m;e.i.h.style.height=e.i.p-i+"px"},e.i.j=function(t){t.stopPropagation(),t.preventDefault(),document.getElementsByTagName("body")[0].removeChild(e.i.v),v.removeEventListener?(v.removeEventListener("mousemove",e.i.O,!0),v.removeEventListener("mouseup",e.i.j,!0)):(v.detachEvent("onmousemove",e.i.O,!0),v.detachEvent("onmouseup",e.i.j,!0))},v.addEventListener?e.i.u.addEventListener("mousedown",e.i.N,!0):e.i.u.attachEvent("onmousedown",e.i.N,!0),e.trace=function(t){var i=++e.i.s+" - ",n="<pre>"+i+t.replace("\n","<br>")+"</pre>",s=i+t;void 0!==r&&r.log(s),e.i.l.innerHTML=n+"<br>"+e.i.l.innerHTML},e.k=function(){e.i.l.innerHTML=""}}e.lib=new Object,e.lib.ready=!1,e.lib.error=null,e.lib.version=2;try{void 0===e.g&&(e.g=!1,v.addEventListener?v.addEventListener("load",function(){e.g=!0}):v.attachEvent("onload",function(){e.g=!0}),e.isPageLoaded=function(){return e.g}),void 0===e.construct&&(e.construct=function(t,i){function n(){return t.apply(this,i)}return n.prototype=t.prototype,new n}),void 0===e.destruct&&(e.destruct=function(){if(arguments[0]){var t=1;return"function"==typeof arguments[0].preDestroy?arguments[0].preDestroy():"function"==typeof arguments[0].M&&arguments[0].M(),"function"==typeof arguments[0].destroy&&(t=arguments[0].destroy()),t}return 0});new Object;var f=new Object;f._=function(){var t=arguments[0];t._ti_=new Array;for(var i=0,n=0;i<arguments.length;++i)null!=arguments[i]&&(t._ti_[n++]=arguments[i]);if(1<arguments.length&&null!=arguments[1]){var s=function(){};s.prototype=arguments[1].prototype,t.prototype=new s}if(2<arguments.length){var h=new Array,r=new Array(arguments.length-2);for(i=2;i<arguments.length;++i){(u=new Object).S=arguments[i],u.I=!1,r[i-2]=u}for(;0<r.length;){var e=r[r.length-1];if(e.I){for(i=0;i<h.length&&h[i]!==e.S;)++i;if(i>=h.length){for(var i in e.S)"_ti_"!=i&&(t.prototype[i]=e.S[i]);h.push(e.S)}r.pop()}else{e.I=!0;for(i=1;i<e.S._ti_.length;++i){var u;(u=new Object).S=e.S._ti_[i],u.I=!1,r.push(u)}}}}"function"!=typeof t.prototype.F&&(t.prototype.F=f.F),"function"!=typeof t.prototype.destroy&&(t.prototype.destroy=f.destroy),"function"!=typeof t.prototype.M&&(t.prototype.M=f.M),t.prototype.T=t},f.J=function(){var t=arguments[0];t._ti_=new Array;for(var i=0,n=0;i<arguments.length;++i)null!=arguments[i]&&(t._ti_[n++]=arguments[i])},f.R=function(){for(var t=1,i=arguments[0]._ti_.length;t<arguments.length;++t)null!=arguments[t]&&(arguments[0]._ti_[i++]=arguments[t])},f.F=function(t){return"function"==typeof t&&this instanceof t||f.U(this.T,t)},f.destroy=function(){return 2},f.M=function(){return 1},f.U=function(t,i){if(t._ti_ instanceof Array){for(var n=1;n<t._ti_.length&&t._ti_[n]!==i&&!f.U(t._ti_[n],i);)++n;return n<t._ti_.length}return!1},f.Z=function(t,i){return"function"==typeof i&&t instanceof i||void 0!==t&&null!=t&&(void 0!==t.T&&null!=t.T?f.U(t.T,i):t===i||f.U(t,i))};var h=new Object;h.P="exception.UNKNOWN",h.K="exception.ASSERT",h.L="exception.obf_MODULE_MISSING",h.q="exception.BAD_ARGS",h.G=new Object,f.J(h.G);var x=new Object;x.H=function(t,i){this.kind=0<arguments.length?t:h.P,this.V=1<arguments.length?i:"";var n=new Error;this.stack=n.stack},f._(x.H,null,h.G),x.H.prototype.W=function(){return"Exception: "+this.V+"\nKind: "+this.$()},x.H.prototype.$=function(){return this.kind},x.H.prototype.tt=function(){return this.V},x.H.prototype.it=function(){return this.stack};var u=new Object;u.st=new Object,u.st.nt="flag.MAX_FLAG_NUMBER_REACHED";var o=new Object;o.ht=function(){void 0!==arguments[0]?f.Z(arguments[0],o.ht)?this.rt=arguments[0].ut():"number"==typeof arguments[0]?this.rt=2*arguments[0]:this.rt=1:this.rt=1},f._(o.ht),o.ht.et=4294967295,o.ht.lt=function(){throw new x.H(u.st.nt)},o.ht.prototype.ut=function(){var t=this.rt;return this.rt*=2,this.rt>o.ht.et&&o.ht.lt(this),t};var a=new Object;a.ft=0,a.ot=++a.ft,a.at=new Object,a.at.ct=1,a.at.wt=2,a.vt=new Object,f.J(a.vt),a.bt=new Object,f.J(a.bt,a.vt),a.At=new Object,f.J(a.At,a.vt),a.dt=new Object,f.J(a.dt,a.vt),a.pt=new Object,f.J(a.pt,a.bt),a.Ot=new Object,f.J(a.Ot);var c=new Object;c.A=new Object,f.J(c.A,a.vt),c.jt=function(t){this.kind=t,this.D=null},f._(c.jt,null,c.A),c.jt.prototype.rz=function(){return this.D},c.jt.prototype.$=function(){return this.kind},c.jt.prototype.C=function(t){return this.D=t,1},c.kt=function(t,i){c.jt.call(this,t),this.oldValue=i},f._(c.kt,c.jt,a.bt),c.kt.prototype.Zr=function(){return this.oldValue},a.gt=++a.ft,c.xt=function(t,i){c.jt.call(this,a.gt),this.errorCode=t,this.B=i},f._(c.xt,c.jt,a.dt),c.xt.prototype.X=function(){return this.errorCode},c.xt.prototype.Y=function(){return this.B},c.Mt=function(t,i){c.jt.call(this,t),this.data=i},f._(c.Mt,c.jt,a.At),c.Mt.prototype.On=function(){return this.data},c._t=function(t,i,n){c.kt.call(this,t,n),this.key=i},f._(c._t,c.kt,a.pt),c._t.prototype.tq=function(){return this.key},c.Et=function(){this.iq=new Array,this.nq=a.at.ct,this.sq=!0},f._(c.Et,null,a.Ot),c.Et.prototype.M=function(){return this.zs(new c.jt(a.ot)),2},c.Et.prototype.destroy=function(){return this.hq(),2},c.Et.prototype.Ti=function(){var t=arguments[0],i=arguments[1].valueOf(),n=null,s=0;switch(arguments.length){case 5:arguments[4];case 4:s=arguments[3];case 3:n=arguments[2]}switch(this.rq(t,i,n)){case-2:this.iq[t]=new Array;case-1:var h=new Object;return h.listener=i,h.eq=n,h.uq=s,this.iq[t].push(h),this.iq[t].sort(function(t,i){return i.uq-t.uq}),1;default:return 0}},c.Et.prototype.Ci=function(){var t=arguments[0],i=arguments[1],n=null;3<=arguments.length&&(n=arguments[2]);var s=this.rq(t,i,n);return 0<=s?(this.iq[t].splice(s,1),1):0},c.Et.prototype.hq=function(){return this.iq=new Array,1},c.Et.prototype.fq=function(){return void 0===this.iq[arguments[0]]?0:this.iq[arguments[0]].length},c.Et.prototype.oq=function(){var t=null;return 3<=arguments.length&&(t=arguments[2]),-1<this.rq(arguments[0],arguments[1],t)},c.Et.prototype.aq=function(){throw"not implemented yet"},c.Et.prototype.cq=function(){throw"not implemented yet"},c.Et.prototype.lq=function(){return this.sq},c.Et.prototype.wq=function(){var t=arguments[0].valueOf();return t!==this.sq?(this.sq=t,1):0},c.Et.prototype.Pr=function(){return this.nq},c.Et.prototype.vq=function(){return arguments[0]!=this.nq?(this.nq=arguments[0],1):0},c.Et.prototype.zs=function(){var t=arguments[0].$();if(0<this.fq(t)){for(var i,n=new Array(this.iq[t].length),s=0;s<this.iq[t].length;++s)n[s]=this.iq[t][s];if(arguments.length<=1||!this.sq)if(this.nq==a.at.ct)arguments[0].C(this),c.Et.Nq(n,arguments[0]);else(i=arguments[0]).C(this),setTimeout(function(){c.Et.Nq(n,i)},0);else if(arguments[1]==a.at.ct)arguments[0].C(this),c.Et.Nq(n,arguments[0]);else(i=arguments[0]).C(this),setTimeout(function(){c.Et.Nq(n,i)},0);return 2}return 1},c.Et.Nq=function(t,i){for(var n=0;n<t.length;++n)try{t[n].listener.call(t[n].eq,i)}catch(t){void 0!==r&&(r.log("error(s) in a listener: "+t),r.log(t),void 0!==t.stack&&r.log(t.stack))}},c.Et.prototype.rq=function(){if(void 0===this.iq[arguments[0]])return-2;for(var t=0;t<this.iq[arguments[0]].length&&(this.iq[arguments[0]][t].listener!=arguments[1]||this.iq[arguments[0]][t].eq!==arguments[2]);)++t;return t==this.iq[arguments[0]].length?-1:t};var w=new Object;w.St=new Object,w.St.zt=function(){var n={It:function(){var t=n.Ft,i=n.Dt;return i(t(32),8)+"-"+i(t(16),4)+"-"+i(16384|t(12),4)+"-"+i(32768|t(14),4)+"-"+i(t(48),12)},Ft:function(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN},Dt:function(t,i){for(var n=t.toString(16),s=i-n.length,h="0";0<s;s>>>=1,h+=h)1&s&&(n=h+n);return n}},t=n.It();return w.St.Tt(t)},w.St.Tt=function(){return 0<arguments.length?w.St.Ct(arguments[0])?w.St.Jt(arguments[0]):(w.St.Rt.push(arguments[0]),arguments[0]):w.St.zt()},w.St.Jt=function(){return w.St.Tt()},w.St.Rt=new Array,w.St.Ct=function(){for(var t=0;t<w.St.Rt.length&&w.St.Rt[t]!==arguments[0];)++t;return t<w.St.Rt.length},w.Ut=function(){return arguments[0]instanceof Array||"function"==typeof Array.isArray&&Array.isArray(arguments[0])},w.Bt=new Object,w.Bt.Zt=function(t,i){if("number"!=typeof i)return i;var n=new Object;return isNaN(i)?n.isNN="n":i==Number.NEGATIVE_INFINITY?n.isNN="-":i==Number.POSITIVE_INFINITY?n.isNN="+":(n.isNN="y",n.val=i.toString()),n},w.Bt.Pt=function(t,i){if("object"!=typeof i||null===i||"string"!=typeof i.isNN)return i;switch(i.isNN){case"n":return Number.NaN;case"-":return Number.NEGATIVE_INFINITY;case"+":return Number.POSITIVE_INFINITY;case"y":default:return parseFloat(i.val)}};var l=new Object;l.Kt=new Object,f.J(l.Kt);var N=new Object;N.Lt=function(t,i,n,s,h){if(void 0===t||void 0===i)return r.warn("Adways Button Helpe: no base or target container given."),0;this.qt=new Array,this.qt.position="position",this.qt.display="display",this.qt.margin="margin",this.qt.marginLeft="margin-left",this.qt.marginRight="margin-right",this.qt.marginTop="margin-top",this.qt.marginBottom="margin-bottom",this.qt.padding="padding",this.qt.paddingLeft="padding-left",this.qt.paddingRight="padding-right",this.qt.paddingTop="padding-top",this.qt.paddingBottom="padding-bottom",this.qt.width="width",this.qt.height="height",this.qt.top="top",this.qt.bottom="bottom",this.qt.left="left",this.qt.right="right",this.qt.zIndex="z-index",this.qt.cursor="cursor",this.qt.backgroundColor="background-color",this.qt.backgroundImage="background-image",this.qt.backgroundRepeat="background-repeat",this.Gt="string"==typeof h?h:"adways-custom-button",this.bq=t,this.target=i,this.button=document.createElement("div"),this.button.className=this.Gt,this.bq.appendChild(this.button),this.Ht={mode:"css-like",reference:new Array(1,1),bottom:"10px",right:"10px",width:"30px",height:"30px"},this.Xt={zIndex:"90000",display:"block",cursor:"pointer",position:"absolute",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=)",backgroundColor:"transparent",backgroundRepeat:"repeat"},this.Qt(n),this.Vt(s)},f._(N.Lt,null,l.Kt),N.Lt.prototype.destroy=function(){return this.bq.removeChild(this.button),delete this.button,1},N.Lt.prototype.Yt=function(){return this.button},N.Lt.prototype.Wt=function(){return this.Ht},N.Lt.prototype.$t=function(){return this.Xt},N.Lt.prototype.ti=function(t){for(var i in t)"display"!=i&&"position"!=i&&(this.Xt[i]=t[i]);return 1},N.Lt.prototype.ii=function(t,i){if(null==i||"object"!=typeof i)return 0;for(var n in i)void 0!==this.qt[n]&&t.style.setProperty(n,i[n],"important");return 1},N.Lt.prototype.si=function(t){switch(t.mode){case"css-like":default:this.ii(this.button,this.ni(t))}},N.Lt.prototype.hi=function(t){if(!t)return Number.NaN;var i=t.indexOf("px");return-1==i?(-1==(i=t.indexOf("%"))?r.warn("Button Helper: no units for button size or position"):r.warn("Button Helper: % on button size not yet supported"),0):0==i?(r.warn("Button Helper: no value for button position or button size"),0):parseFloat(t)},N.Lt.prototype.ni=function(t){var i=new Object;i.left=this.hi(t.left),i.top=this.hi(t.top),i.right=this.hi(t.right),i.bottom=this.hi(t.bottom),i.width=this.hi(t.width),i.height=this.hi(t.height);var n=new Object,s=this.target.offsetTop,h=this.target.offsetLeft,r=this.target.offsetWidth,e=this.target.offsetHeight;return this.target!==this.bq||"static"==this.bq.style&&""==this.bq.style||(h=s=0),isNaN(i.left)?n.left=h+t.reference[0]*r-i.right-i.width:n.left=h+t.reference[0]*r+i.left,isNaN(i.top)?n.top=s+t.reference[1]*e-i.bottom-i.height:n.top=s+t.reference[1]*e+i.top,n.width=i.width+"px",n.height=i.height+"px",n.left+="px",n.top+="px",n},N.Lt.prototype.Qt=function(t){return void 0!==t&&null!=t&&(t.reference&&(this.Ht.reference=t.reference),t.left&&(this.Ht.left=t.left,delete this.Ht.right),t.right&&(this.Ht.right=t.right,delete this.Ht.left),t.top&&(this.Ht.top=t.top,delete this.Ht.bottom),t.bottom&&(this.Ht.bottom=t.bottom,delete this.Ht.top),t.width&&(this.Ht.width=t.width),t.height&&(this.Ht.height=t.height),isNaN(this.hi(this.Ht.left))&&isNaN(this.hi(this.Ht.right))||isNaN(this.hi(this.Ht.top))&&isNaN(this.hi(this.Ht.bottom))||isNaN(this.hi(this.Ht.width))&&isNaN(this.hi(this.Ht.height)))?(r.warn("Button position invalid!"),null):(this.si(this.Ht),1)},N.Lt.prototype.Vt=function(t){if(void 0!==t&&null!=t)for(var i in t)this.Xt[i]=t[i];return this.ii(this.button,this.Xt),1},N.ri=new Object,N.ri.P=0,N.ri.ui=1,N.ri.ei=2,N.ri.li=3,N.ri.fi=4,N.ri.oi=5,N.ri.ai=6,N.ri.ci=7,N.ri.wi=8,N.ri.vi=9,N.ri.Ni=10,N.ri.bi=11,N.ri.yi=12,N.ri.mi=13,N.ri.Ai=14,N.ri.di=15,N.ri.pi=16,N.ri.Oi=17,N.ri.ji=18,N.ri.ki=19,N.ri.gi=20,N.ri.xi=function(){try{var t=navigator.userAgent,i=new Array(1);i[0]=new Object;var n=new RegExp("opera","i");if(t.match(n)){if(i[0].name="Opera",i[0].identifier=N.ri.ai,n.compile("version/[0-9.]+","i"),null!=(u=n.exec(t))&&0<u.length){var s=(u=u[0].split("/"))[1].split(".");i[0].version=new Array(s.length+1),i[0].version[0]=u[1];for(var h=0;h<s.length;++h)i[0].version[h+1]=s[h]}else i[0].version=new Array(1),i[0].version[0]="unknown";n.compile("opera mobi/[0-9a-zA-Z._-]*","i");var r=n.exec(t);null!=r&&0<r.length?(i[1]=new Object,i[1].name="Opera Mobile",i[1].identifier=N.ri.bi,r=r[0].split("/"),i[1].version=new Array(1),i[1].version[0]=r[1]):(n.compile("opera mini/[0-9a-zA-Z._-]*/[0-9a-zA-Z._-]*","i"),null!=(r=n.exec(t))&&0<r.length&&(i[1].name="Opera Mini",i[1].identifier=N.ri.Ni,r=r[0].split("/"),i[1].version=new Array(1),i[1].version[0]=r[1]))}else{if(n.compile("MSIE [0-9a-zA-Z.]+","i"),null!=(e=n.exec(t))&&0<e.length){i[0].name="Internet Explorer",i[0].identifier=N.ri.ci;s=(u=e[0].split(" "))[1].split(".");i[0].version=new Array(s.length+1),i[0].version[0]=u[1];for(h=0;h<s.length;++h)i[0].version[h+1]=s[h]}else{if(n.compile("chrome/[0-9a-zA-Z.]+","i"),null!=(e=n.exec(t))&&0<e.length){i[0].name="Chrome",i[0].identifier=N.ri.wi;s=(u=e[0].split("/"))[1].split(".");i[0].version=new Array(s.length+1),i[0].version[0]=u[1];for(h=0;h<s.length;++h)i[0].version[h+1]=s[h]}else{if(n.compile("safari","i"),t.match(n))if(i[0].name="Safari",i[0].identifier=N.ri.fi,n.compile("version/[0-9.]+","i"),null!=(u=n.exec(t))&&0<u.length){s=(u=u[0].split("/"))[1].split(".");i[0].version=new Array(s.length+1),i[0].version[0]=u[1];for(h=0;h<s.length;++h)i[0].version[h+1]=s[h]}else i[0].version=new Array(1),i[0].version[0]="unknown";else if(n.compile("firefox/[0-9a-zA-Z.]+","i"),null!=(e=n.exec(t))&&0<e.length){i[0].name="Firefox",i[0].identifier=N.ri.oi;var e;s=(u=e[0].split("/"))[1].split(".");i[0].version=new Array(s.length+1),i[0].version[0]=u[1];for(h=0;h<s.length;++h)i[0].version[h+1]=s[h];if(n.compile("fennec/[0-9a-zA-Z.]+","i"),null!=(e=n.exec(t))&&0<e.length){i[1]=new Object,i[1].name="Fennec",i[1].identifier=N.ri.vi;var u;s=(u=e[0].split("/"))[1].split(".");i[1].version=new Array(s.length+1),i[1].version[0]=u[1];for(h=0;h<s.length;++h)i[1].version[h+1]=s[h]}}else i[0].name="unknown",i[0].identifier=N.ri.P,i[0].version=new Array(1),i[0].version[0]="unknown"}}}var f=new Array;if(f[0]=new Object,n.compile("applewebkit","i"),t.match(n))if(f[0].name="AppleWebkit",f[0].identifier=N.ri.yi,n.compile("applewebkit/[0-9a-zA-Z.]+","i"),null!=(l=n.exec(t))&&0<l.length){s=(l=l[0].split("/"))[1].split(".");f[0].version=new Array(s.length+1),f[0].version[0]=l[1];for(h=0;h<s.length;++h)f[0].version[h+1]=s[h]}else f[0].version=new Array(1),f[0].version[0]="unknown";else if(n.compile("presto","i"),t.match(n))if(f[0].name="Presto",f[0].identifier=N.ri.mi,n.compile("presto/[0-9a-zA-Z.]+","i"),null!=(l=n.exec(t))&&0<l.length){s=(l=l[0].split("/"))[1].split(".");f[0].version=new Array(s.length+1),f[0].version[0]=l[1];for(h=0;h<s.length;++h)f[0].version[h+1]=s[h]}else f[0].version=new Array(1),f[0].version[0]="unknown";else if(n.compile("trident","i"),t.match(n))if(f[0].name="Trident",f[0].identifier=N.ri.di,n.compile("trident/[0-9a-zA-Z.]+","i"),null!=(l=n.exec(t))&&0<l.length){s=(l=l[0].split("/"))[1].split(".");f[0].version=new Array(s.length+1),f[0].version[0]=l[1];for(h=0;h<s.length;++h)f[0].version[h+1]=s[h]}else f[0].version=new Array(1),f[0].version[0]="unknown";else if(n.compile("gecko","i"),t.match(n))if(f[0].name="Gecko",f[0].identifier=N.ri.Ai,n.compile("rv:[0-9a-zA-Z.]+","i"),null!=(l=n.exec(t))&&0<l.length){s=(l=l[0].split(":"))[1].split(".");f[0].version=new Array(s.length+1),f[0].version[0]=l[1];for(h=0;h<s.length;++h)f[0].version[h+1]=s[h]}else f[0].version=new Array(1),f[0].version[0]="unknown";else f[0].name="unknown",f[0].identifier=N.ri.P,f[0].version=new Array(1),f[0].version[0]="unknown";var o,a=new Array;if(a[0]=new Object,n.compile("ipad","i"),t.match(n))a[0].name="iPad",a[0].identifier=N.ri.pi,n.compile("mobile/[0-9a-zA-Z]+","i"),null!=(o=n.exec(t))&&0<o.length&&(o=o[0].split("/"),a[0].Mi=o[1]),a[0].version=new Array(1),a[0].version[0]="unknown";else if(/iPhone/.test(t)&&!v._i)a[0].name="iPhone",a[0].identifier=N.ri.Oi,n.compile("mobile/[0-9a-zA-Z]+","i"),null!=(o=n.exec(t))&&0<o.length&&(o=o[0].split("/"),a[0].Mi=o[1]),a[0].version=new Array(1),a[0].version[0]="unknown";else if(n.compile("ipod","i"),t.match(n))a[0].name="iPod",a[0].identifier=N.ri.ji,n.compile("mobile/[0-9a-zA-Z]+","i"),null!=(o=n.exec(t))&&0<o.length&&(o=o[0].split("/"),a[0].Mi=o[1]),a[0].version=new Array(1),a[0].version[0]="unknown";else n.compile("macintosh","i"),t.match(n)?(a[0].name="Macintosh",a[0].identifier=N.ri.ki):(a[0].name="unknown",a[0].identifier=N.ri.P),a[0].version=new Array(1),a[0].version[0]="unknown";var c=new Array;switch(c[0]=new Object,a[0].name){case"iPhone":case"iPad":case"iPod":var l;if(c[0].name="iOS",c[0].identifier=N.ri.ui,n.compile("CPU[ a-zA-Z]*OS[ ][0-9_]*","i"),null!=(l=n.exec(t))&&0<l.length){n.compile("[0-9_]+","i");s=(l=n.exec(l[0]))[0].split("_");c[0].version=new Array(s.length+1),c[0].version[0]=l[0];for(h=0;h<s.length;++h)c[0].version[h+1]=s[h]}else c[0].version=new Array(1),c[0].version[0]="unknown";break;default:n.compile("windows","i"),t.match(n)?(c[0].name="Windows",c[0].identifier=N.ri.ei):(n.compile("android","i"),t.match(n)?(c[0].name="Android",c[0].identifier=N.ri.gi):(n.compile("mac os x","i"),t.match(n)?(c[0].name="MacOSX",c[0].identifier=N.ri.li):(c[0].name="unknown",c[0].identifier=N.ri.P))),c[0].version=new Array(1),c[0].version[0]="unknown"}return(w=new Object).Ei=1,w.Si=1,w.browser=i,w.renderer=f,w.device=a,w.os=c,w}catch(t){var w;return(w=new Object).Ei=1,w.Si=0,w.browser=new Array(1),w.browser[0]=new Object,w.browser[0].name="unknown",w.browser[0].identifier=N.ri.P,w.browser[0].version=new Array,w.browser[0].version[0]="unknown",w.renderer=new Array(1),w.renderer[0]=new Object,w.renderer[0].name="unknown",w.renderer[0].identifier=N.ri.P,w.renderer[0].version=new Array,w.renderer[0].version[0]="unknown",w.device=new Array(1),w.device[0]=new Object,w.device[0].name="unknown",w.device[0].identifier=N.ri.P,w.device[0].version=new Array,w.device[0].version[0]="unknown",w.os=new Array(1),w.os[0]=new Object,w.os[0].name="unknown",w.os[0].identifier=N.ri.P,w.os[0].version=new Array,w.os[0].version[0]="unknown",w}},N.ri.zi=N.ri.xi(),"number"!=typeof e.tweaks.isIE&&N.ri.zi.browser[0].identifier==N.ri.ci&&(e.tweaks.isIE=parseInt(N.ri.zi.browser[0].version[1])),N.Ii=function(){var t=document.defaultView.getComputedStyle(arguments[0],null).getPropertyValue("z-index");if("auto"!=t)return parseInt(t);for(var i=arguments[0].parentNode,n=0;n<i.children.length&&p_children[n]!==arguments[0];)++n},N.Fi=function(){return document.defaultView.getComputedStyle(arguments[0],null).getPropertyValue("z-index")},N.Di=function(){for(var t=Number.NEGATIVE_INFINITY,i=0;i<arguments[0].children.length;++i){var n=document.defaultView.getComputedStyle(arguments[0].children[i],null).getPropertyValue("z-index");t<n&&"auto"!=n&&(t=parseInt(n))}return t==Number.NEGATIVE_INFINITY?0:t},N.Ti=function(i,t,n,s){if(arguments.length<4&&(s=!1),void 0===i.addEventListener&&"load"==t&&void 0===i.onload){var h=function(t){"loaded"!=i.readyState&&"complete"!=i.readyState||(n.call(),i.removeEventListener?i.removeEventListener("readystatechange",h):i.detachEvent?i.detachEvent("onreadystatechange",h):i.onreadystatechange=null)};i.addEventListener?i.addEventListener("readystatechange",h):i.attachEvent?i.attachEvent("onreadystatechange",h):i.onreadystatechange=h}else i.addEventListener?i.addEventListener(t,n,s):i.attachEvent&&i.attachEvent("on"+t,n,s)},N.Ci=function(t,i,n,s){arguments.length<4&&(s=!1),t.removeEventListener?t.removeEventListener(i,n,s):t.detachEvent&&t.detachEvent("on"+i,n,s)},N.Ji=function(t){var i=new Object;return t.offsetX?(i.x=t.offsetX,i.y=t.offsetY):t.layerX?(i.x=t.layerX,i.y=t.layerY):(i.x=Number.NaN,i.y=Number.NaN),i},N.Ri=function(){return"ontouchstart"in v},N.Ui=N.Ri(),N.Bi=function(t,i,n){return N.Ui?N.Ti(t,"touchend",i,n):N.Ti(t,"mouseup",i,n)},N.Zi=function(t,i,n){return N.Ui?N.Ci(t,"touchend",i,n):N.Ci(t,"mouseup",i,n)},N.Pi=function(t,i,n){return N.Ui?N.Ti(t,"touchstart",i,n):N.Ti(t,"mousedown",i,n)},N.Ki=function(t,i,n){return N.Ui?N.Ci(t,"touchstart",i,n):N.Ci(t,"mousedown",i,n)},N.Li=function(t,i,n){return N.Ui?N.Ti(t,"touchmove",i,n):N.Ti(t,"mousemove",i,n)},N.qi=function(t,i,n){return N.Ui?N.Ci(t,"touchmove",i,n):N.Ci(t,"mousemove",i,n)},N.Gi=function(t,i,n){return N.Ui&&N.ri.zi.os[0].identifier==N.ri.ui?N.Ti(t,"touchend",i,n):N.Ti(t,"click",i,n)},N.Hi=function(t,i,n){return N.Ui,N.Ci(t,"click",i,n)},N.Xi=function(t){return N.Ui?t.touches&&0<t.touches.length?[t.touches[0].screenX,t.touches[0].screenY]:[Number.NaN,Number.NaN]:[t.screenX,t.screenY]},N.Qi=function(t){var i=document.createElement("div");return i.innerHTML=t,0===i.childNodes.length?"":i.childNodes[0].nodeValue},N.Vi=function(t,i){N.Yi(t,i)||(t.className+=" "+i)},N.Wi=function(t,i){if(N.Yi(t,i)){var n=2<arguments.length&&arguments[2],s=new RegExp("(?:^|\\s)"+i+"(?!\\S)");n&&(s=new RegExp("(?:^|\\s)"+i+"(?!\\S)","g")),t.className=t.className.replace(s,"")}},N.Yi=function(t,i){var n=new RegExp("(?:^|\\s)"+i+"(?!\\S)");return t.className.match(n)},N.$i=function(t){var i=v.getComputedStyle(t,null);if(null===i)return new Array(1,0,0,1,0,0);var n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("-moz-transform")||i.getPropertyValue("-ms-transform")||i.getPropertyValue("-o-transform")||i.getPropertyValue("transform")||"";return""==n||"none"==n?new Array(1,0,0,1,0,0):N.ts(n)},N.ss=function(t){var i=v.getComputedStyle(t,null),n=i.getPropertyValue("-webkit-transform-origin")||i.getPropertyValue("-moz-transform-origin")||i.getPropertyValue("-ms-transform-origin")||i.getPropertyValue("-o-transform-origin")||i.getPropertyValue("transform-origin")||"";if(""==n)return new Array(0,0);var s=n.split(" ");return new Array(parseFloat(s[0].substr(0,s[0].indexOf("px"))),parseFloat(s[1].substr(0,s[1].indexOf("px"))))},N.ns=function(){var t=1<arguments.length?arguments[1]:new Array(6),i=N.$i(arguments[0]),n=N.ss(arguments[0]);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=-i[0]*n[0]-i[1]*n[1]+i[2]+n[0],t[5]=-i[3]*n[0]-i[4]*n[1]+i[5]+n[1],t},N.ts=function(t){var i=t.split("(")[1];i=(i=i.split(")")[0]).split(",");var n=1<arguments.length?arguments[1]:new Array(6);return n[0]=parseFloat(i[0]),n[1]=parseFloat(i[2]),n[2]=parseFloat(i[1]),n[3]=parseFloat(i[3]),n[4]=parseFloat(i[4]),n[5]=parseFloat(i[5]),n},N.hs=function(){var t,i,n,s,h,r;if(w.Ut(arguments[0])){var e=1<arguments.length?arguments[1]:3;t=arguments[0][0].valueOf(),i=arguments[0][1].valueOf(),n=arguments[0][2].valueOf(),s=arguments[0][3].valueOf(),h=arguments[0][4].valueOf().toFixed(e),r=arguments[0][5].valueOf().toFixed(e)}else{e=6<arguments.length?arguments[6]:3;t=arguments[0].valueOf(),i=arguments[1].valueOf(),n=arguments[2].valueOf(),s=arguments[3].valueOf(),h=arguments[4].valueOf().toFixed(e),r=arguments[5].valueOf().toFixed(e)}return"matrix("+t+","+n+","+i+","+s+","+h+","+r+")"},N.rs=function(){var t,i,n,s;if(w.Ut(arguments[0])){var h=1<arguments.length?arguments[1]:3;t=arguments[0][0].valueOf().toFixed(h),i=arguments[0][1].valueOf().toFixed(h),n=arguments[0][2].valueOf().toFixed(h),s=arguments[0][3].valueOf().toFixed(h)}else{h=6<arguments.length?arguments[6]:3;t=arguments[0].valueOf().toFixed(h),i=arguments[1].valueOf().toFixed(h),n=arguments[2].valueOf().toFixed(h),s=arguments[3].valueOf().toFixed(h)}return"progid:DXImageTransform.Microsoft.Matrix(M11="+t+", M12="+i+", M21="+n+", M22="+s+", SizingMethod = 'auto expand')"},N.us=function(){var t=v.getComputedStyle(arguments[0],null),i=1<arguments.length?arguments[1]:new Array(2);return i[0]=t.getPropertyValue("width"),i[1]=t.getPropertyValue("height"),i[0]=parseFloat(i[0].substr(0,i[0].indexOf("px"))),i[1]=parseFloat(i[1].substr(0,i[1].indexOf("px"))),i},N.es=function(){var t=v.getComputedStyle(arguments[0],null),i=1<arguments.length?arguments[1]:new Array(2);return i[0]=t.getPropertyValue("left"),i[1]=t.getPropertyValue("top"),i[0]=parseFloat(i[0].substr(0,i[0].indexOf("px"))),i[1]=parseFloat(i[1].substr(0,i[1].indexOf("px"))),i},N.ls=function(){var t=v.getComputedStyle(arguments[0],null),i=1<arguments.length?arguments[1]:new Object;return i.top=t.getPropertyValue("border-top-width"),i.left=t.getPropertyValue("border-left-width"),i.right=t.getPropertyValue("border-right-width"),i.bottom=t.getPropertyValue("border-bottom-width"),i.top=parseFloat(i.top.substr(0,i.top.indexOf("px"))),i.left=parseFloat(i.left.substr(0,i.left.indexOf("px"))),i.right=parseFloat(i.right.substr(0,i.right.indexOf("px"))),i.bottom=parseFloat(i.bottom.substr(0,i.bottom.indexOf("px"))),i},N.fs=function(){var t=v.getComputedStyle(arguments[0],null),i=1<arguments.length?arguments[1]:new Object;return i.top=t.getPropertyValue("padding-top"),i.left=t.getPropertyValue("padding-left"),i.right=t.getPropertyValue("padding-right"),i.bottom=t.getPropertyValue("padding-bottom"),i.top=parseFloat(i.top.substr(0,i.top.indexOf("px"))),i.left=parseFloat(i.left.substr(0,i.left.indexOf("px"))),i.right=parseFloat(i.right.substr(0,i.right.indexOf("px"))),i.bottom=parseFloat(i.bottom.substr(0,i.bottom.indexOf("px"))),i},N.as=function(t){var i={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return void 0!==i[t.toLowerCase()]&&i[t.toLowerCase()]};var b=new Object;b.cs=new Object,b.cs.ws=++a.ft,b.cs.vs=++a.ft,b.cs.Ns=++a.ft,b.cs.bs=++a.ft,b.ys=new Object,b.ys.ms=1,b.ys.As=2,b.ds=new Object,f.J(b.ds,a.Ot),b.ps=new Object,f.J(b.ps,a.Ot);var y=new Object;y.Os=function(){c.Et.call(this);var n=this;this.js=new Array,this.ks=new Array,this.gs=null,this.xs=null,this.Ms={padding:0,top:0,position:"absolute",left:0,right:"inherit",width:"100%",height:"100%",margin:0},this._s={padding:0,top:0,position:"fixed",left:0,right:"inherit",width:"100%",height:"100%",margin:0},this.qt=new Array,this.qt.position="position",this.qt.display="display",this.qt.margin="margin",this.qt.marginLeft="margin-left",this.qt.marginRight="margin-right",this.qt.marginTop="margin-top",this.qt.marginBottom="margin-bottom",this.qt.padding="padding",this.qt.paddingLeft="padding-left",this.qt.paddingRight="padding-right",this.qt.paddingTop="padding-top",this.qt.paddingBottom="padding-bottom",this.qt.width="width",this.qt.height="height",this.qt.top="top",this.qt.bottom="bottom",this.qt.left="left",this.qt.right="right",this.qt.zIndex="z-index",this.qt.cursor="cursor",this.qt.backgroundColor="background-color",this.qt.backgroundImage="background-image",this.qt.backgroundRepeat="background-repeat",this.Es=function(){for(var t=n.Ss=null,i=0;i<n.js.length;i++)if(null!=(t=n.js[i].fullscreenElement||n.js[i].mozFullScreenElement||n.js[i].webkitFullscreenElement||n.js[i].msFullscreenElement)){n.Ss=t;break}null!=n.Ss?n.zs(new c.jt(b.cs.Ns)):(n.Is=null,n.zs(new c.jt(b.cs.bs)))},this.Ss=null,this.Is=null,this.Fs()===b.ys.ms&&this.Ds(document)},f._(y.Os,c.Et,b.ds),y.Os.prototype.destroy=function(){return(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments))+1},y.Os.prototype.Ts=function(t){return this.ks.push(t),this.Fs()===b.ys.ms&&this.Ds(t.Cs().ownerDocument),1},y.Os.prototype.Js=function(t){for(var i=new Array,n=null,s=0;s<this.ks.length;s++)this.Fs()===b.ys.ms&&(n=this.ks[s].Cs().ownerDocument,-1<i.indexOf(n)?i[i.indexOf(n)].nb+=1:(i.push(n),i[i.length-1].nb=1)),this.ks[s]===t&&this.ks.splice(s,1);if(this.Fs()===b.ys.ms)for(s=0;s<this.js.length;s++)-1<i.indexOf(this.js[s])&&1==i[i.indexOf(this.js[s])].nb&&i[i.indexOf(this.js[s])]!==document&&(this.js[s].removeEventListener("MSFullscreenChange",this.Es,!1),this.js[s].removeEventListener("webkitfullscreenchange",this.Es,!1),this.js[s].removeEventListener("mozfullscreenchange",this.Es,!1),this.js[s].removeEventListener("fullscreenchange",this.Es,!1),this.js.splice(s,1));return 1},y.Os.prototype.Ds=function(t){return-1==this.js.indexOf(t)?(this.Es(),this.js.push(t),t.addEventListener("MSFullscreenChange",this.Es,!1),t.addEventListener("webkitfullscreenchange",this.Es,!1),t.addEventListener("mozfullscreenchange",this.Es,!1),t.addEventListener("fullscreenchange",this.Es,!1),1):0},y.Os.prototype.Us=function(){return this.qt},y.Os.prototype.ii=function(t,i){if(null==i||"object"!=typeof i)return 0;for(var n in i)void 0!==this.qt[n]&&(t.style[n]=i[n]);return 1},y.Os.prototype.Bs=function(n){return this.el=n,this.getPropertyValue=function(t){var i=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),i.test(t)&&(t=t.replace(i,function(){return arguments[2].toUpperCase()})),n.currentStyle[t]?n.currentStyle[t]:null},this},y.Os.prototype.Ps=function(t){var i=new Object;for(var n in this.qt)if("number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=8){var s=this.Bs(t,null);i[n]=s.getPropertyValue(this.qt[n])}else{var h=t.ownerDocument,r=h.defaultView||h.parentWindow;i[n]=r.getComputedStyle(t,null).getPropertyValue(this.qt[n])}return i},y.Os.prototype.Ks=function(t){return this.gs=this.Ps(t),1},y.Os.prototype.Ls=function(t){if(""==this.gs.position||"static"==this.gs.position?this.Ms.position="absolute":"relative"==this.gs.position&&(this.Ms.position=this.gs.position),this.ii(t,this.Ms),this.getMode()===b.ys.As){t.style.setProperty("top",-t.offsetParent.offsetTop+"px","important"),t.style.setProperty("left",-t.offsetParent.offsetLeft+"px","important");var i=v.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=v.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;t.style.setProperty("width",i+"px","important"),t.style.setProperty("height",n+"px","important")}return 1},y.Os.prototype.qs=function(){return 1},y.Os.prototype.Gs=function(t){return this.ii(t,this.gs),1},y.Os.prototype.Fs=function(){var t=document;return null!==this.Ss&&(t=this.Ss.ownerDocument),t.fullscreenEnabled||t.webkitFullscreenEnabled||t.mozFullScreenEnabled||t.msFullscreenEnabled?b.ys.ms:b.ys.As},y.Os.prototype.Hs=function(){return null!=this.Ss},y.Os.prototype.Xs=function(){if(this.Hs()){var t=document;if(null!==this.Ss&&(t=this.Ss.ownerDocument),this.zs(new c.jt(b.cs.vs)),this.getMode()===b.ys.ms)return t.Qs?t.Qs():t.exitFullscreen?t.exitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitCancelFullScreen?t.webkitCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen(),1;this.ii(this.Ss,this.xs),this.Ss=null,this.Is=null,this.zs(new c.jt(b.cs.bs))}return 0},y.Os.prototype.Cs=function(){return this.Ss},y.Os.prototype.Vs=function(){return this.Is},y.Os.prototype.Ys=function(t){return null!=this.Ss?0:(this.Is=t,this.zs(new c.jt(b.cs.ws)),this.getMode()===b.ys.ms?this.Is.Ss.requestFullscreen?this.Is.Ss.requestFullscreen():this.Is.Ss.mozRequestFullScreen?this.Is.Ss.mozRequestFullScreen():this.Is.Ss.webkitRequestFullscreen?(this.Is.Ss.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT),document.webkitCurrentFullScreenElement||this.Is.Ss.webkitRequestFullScreen()):this.Is.Ss.msRequestFullscreen&&this.Is.Ss.msRequestFullscreen():(this.Ss=this.Is.Ss,this.xs=this.Ps(this.Ss),this.ii(this.Ss,this._s),this.zs(new c.jt(b.cs.Ns))),1)},y.Ws=function(t){c.Et.call(this),void 0!==t?(this.Ss=t,e.fullscreenManager.setHelper(this)):r.warn("Adways Fullscreen Helper: no container DOM Element given")},f._(y.Ws,c.Et,b.ps),y.Ws.prototype.destroy=function(){e.fullscreenManager.Js(this);return(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments))+1},y.Ws.prototype.Hs=function(){return e.fullscreenManager.Is===this},y.Ws.prototype.Ys=function(){return e.fullscreenManager.Ys(this)},y.Ws.prototype.Cs=function(){return this.Ss};var A=new Object;if(A.$s=new Array,A.$s.push({macro:"%%timestamp%%",value:function(){return(new Date).getTime()}}),A.$s.push({macro:"%%random%%",value:function(){return Math.floor(1e8*Math.random())}}),A.tn=function(){for(var t=arguments[0],i=1<arguments.length?arguments[1]:A.$s,n=0;n<i.length;n++)for(var s=i[n].macro,h=i[n].value;-1<t.indexOf(s);)t=t.replace(s,h.call(s).toString());return t},void 0!==e.fullscreenManager&&null!=e.fullscreenManager)throw new Error("adways.fullscreenManager already exist");e.fullscreenManager=new y.Os,N.Ti(v,"unload",function(){e.destruct(e.fullscreenManager)},!0);var d=new Object;d.in=new Object,d.in.sn=++a.ft,d.in.nn=++a.ft,d.in.hn=++a.ft,d.rn=new Object,d.rn.un=++a.ft,d.rn.en=++a.ft,d.ln=new Object,f.J(d.ln),d.fn=new Object,f.J(d.fn,a.vt),d.on=new Object,f.J(d.on,a.vt),d.an=new Object,f.J(d.an),"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&("undefined"!=typeof JSON&&null!=JSON||r.warn('"JSON" object unavailable, some operations will fail...'));var j=new Object;if(j.cn=new Object,j.cn.en=0,j.cn.wn=1,j.cn.vn=2,j.cn.Nn=3,j.cn.bn=4,j.cn.yn=5,j.mn=function(t){var i=0;switch(void 0!==e.tweaks&&"number"==typeof e.tweaks.yq&&(i=e.tweaks.yq),i){case 1:return!1;case 2:return!0;default:var n=null;try{n=t.document.body.innerHTML}catch(t){}return null!==n}},j.An=function(t,i,n,s){c.jt.call(this,t),this.window=i,this.domain=n,this.data=s},f._(j.An,c.jt,d.fn),j.An.prototype.dn=function(){return this.window},j.An.prototype.pn=function(){return this.domain},j.An.prototype.On=function(){return this.data},j.jn=function(t,i,n,s,h){c.jt.call(this,t),this.Aq=i,this.kn=n,this.gn=s,this.data=h},f._(j.jn,c.jt,d.on),j.jn.prototype.xn=function(){return this.Aq},j.jn.prototype.Mn=function(){return this.kn},j.jn.prototype._n=function(){return this.gn},j.jn.prototype.On=function(){return this.data},j.En=function(){c.Et.call(this),this.Sn=new Object,2<arguments.length?(this.Sn.fcn=arguments[2].fcn,void 0!==arguments[2].inst&&(this.Sn.inst=arguments[2].inst)):(this.Sn.fcn=function(){return null},this.Sn.inst=null),this.zn=new Array,this.In=new Array,this.bridge=arguments[0],this.port=arguments[1]},f._(j.En,c.Et),j.En.prototype.destroy=function(){this.Fn();var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),this.In=null,"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=8||(this.zn=null),t+1},j.En.prototype.Dn=function(t){for(var i=this.zn.length-1;-1<i&&this.zn[i].Tn!==t;)--i;return i},j.En.prototype.Cn=function(t){for(var i=this.In.length-1;-1<i&&this.In[i].id!==t;)--i;return i},j.En.prototype.Jn=function(){var t=this.Dn(arguments[3]);if(-1<t){for(var i=this.zn[t].Rn,n=0;n<i.length&&i[n].window!==arguments[4];)++n;if(n<i.length){if(void 0===i[n].Un[arguments[0]]&&(i[n].Un[arguments[0]]=0),arguments[2]>i[n].Un[arguments[0]]){i[n].Un[arguments[0]]=arguments[2];var s=this.Cn(arguments[0]);if(-1<s){var h=this.In[s];return h.method.apply(h.inst,arguments[1]),1}return-4}return-3}return-2}return-1},j.En.prototype.Bn=function(){var t=0;if(null===this.zn)return t;for(var i=this.zn.length-1;-1<i;--i)for(var n=this.zn[i].Rn,s=0;s<n.length;++s)void 0===n[s].Zn[arguments[0]]&&(n[s].Zn[arguments[0]]=0),++n[s].Zn[arguments[0]],this.bridge.Pn(arguments[0],1<arguments.length?arguments[1]:null,n[s].Zn[arguments[0]],this.port,this.zn[i].Tn,n[s].window,n[s].domain,n[s].Kn),++t;return t},j.En.prototype.Ln=function(){return this.qn(arguments[0],arguments[1])?-1:this.bridge.Gn(this,arguments[0],arguments[1],null!=arguments[2]?arguments[2]:"*",arguments[3])},j.En.prototype.Hn=function(){if(this.qn(arguments[0],arguments[1]))return-1;var t=new Object;t.window=arguments[1],t.domain=arguments[2],t.Kn=arguments[3],t.Zn=new Array,t.Un=new Array;var i=this.Dn(arguments[0]),n=null;return-1==i?((n=new Object).Tn=arguments[0],n.Rn=new Array,this.zn.push(n)):n=this.zn[i],n.Rn.push(t),this.zs(new j.jn(d.in.hn,arguments[0],arguments[1],arguments[2])),this.bridge.Xn(this,arguments[0],arguments[1],null!=arguments[2]?arguments[2]:"*",arguments[3],this.Sn.fcn.call(this.Sn.inst))},j.En.prototype.Qn=function(){if(this.qn(arguments[0],arguments[1]))return-1;var t=new Object;t.window=arguments[1],t.domain=arguments[2],t.Kn=arguments[3],t.Zn=new Array,t.Un=new Array;var i=this.Dn(arguments[0]),n=null;return-1==i?((n=new Object).Tn=arguments[0],n.Rn=new Array,this.zn.push(n)):n=this.zn[i],n.Rn.push(t),this.zs(new j.jn(d.in.sn,arguments[0],arguments[1],arguments[2],arguments[4])),1},j.En.prototype.Vn=function(){var t=this.Dn(arguments[0]);if(-1<t){for(var i=this.zn[t].Rn,n=0;n<i.length&&i[n].window!==arguments[1];)++n;return n<i.length?(i.splice(n,1),this.zs(new j.jn(d.in.nn,arguments[0],arguments[1],null)),1):-1}return-1},j.En.prototype.Yn=function(){for(var t=0,i=this.zn.length-1;-1<i;--i)0<this.Vn(this.zn[i].Tn,arguments[0])&&++t;return t},j.En.prototype.Fn=function(){if(null==this.zn)return 0;for(var t=this.zn.length-1;-1<t;--t)for(var i=this.zn[t].Rn,n=0;n<i.length;++n){var s=i[n];this.bridge.Wn(this,this.zn[t].Tn,s.window,s.domain,s.Kn)}return this.zn=new Array,1},j.En.prototype.$n=function(){for(var t=this.zn.length-1;-1<t;--t){for(var i=this.zn[t].Rn,n=0;n<i.length&&i[n].window!==arguments[0];)++n;if(n<i.length){var s=i[n];this.bridge.Wn(this,this.zn[t].Tn,s.window,s.domain,s.Kn),i.splice(n,1)}}return 1},j.En.prototype.qn=function(){var t=this.Dn(arguments[0]);if(-1<t){for(var i=this.zn[t].Rn,n=0;n<i.length&&i[n].window!==arguments[1];)++n;return n<i.length}return!1},j.En.prototype.th=function(){return this.Sn},j.En.prototype.ih=function(){return this.Sn=new Object,this.Sn.fcn=arguments[2].fcn,void 0!==arguments[2].inst?this.Sn.inst=arguments[2].inst:this.Sn.inst=null,1},j.En.prototype.sh=function(){for(var t=0,i=this.zn.length-1;-1<i;--i)t+=this.zn[i].Rn.length;return t},j.En.prototype.nh=function(){return this.port},j.En.prototype.hh=function(){return this.bridge},j.En.prototype.rh=function(){if(-1!=this.Cn(arguments[0]))return 0;var t=new Object;return t.id=arguments[0],t.method=arguments[1],t.inst=2<arguments.length?arguments[2]:null,this.In.push(t),1},j.En.prototype.uh=function(){var t=this.Cn(arguments[0]);return-1<t?(this.In.splice(t,1),1):0},j.En.prototype.eh=function(){return-1<this.Cn(arguments[0])},j.En.prototype.lh=function(){var t=this.Cn(arguments[0]);return-1<t?this.In[t]:null},j.En.prototype.fh=function(){for(var t=function(t,i){for(var n=0;n<t.length&&t[n].window!==i;)++n;return n<t.length},i=new Array,n=this.zn.length-1;-1<n;--n)for(var s=this.zn[n].Rn,h=0;h<s.length;++h){var r=s[h];if(!t(i,r.window)){var e=new Object;e.window=r.window,e.domain=r.domain,e.Kn=r.Kn,i.push(e)}}return i},j.oh=function(){c.Et.call(this),this.receivers=new Array,this.ah=!1,this.wh=new Array,this.vh=!1,this.Nh=new Array,this.bh=0;var n=this;this.yh=function(t){if(n.mh(t.origin)||n.Ah(t.source)){var i=t.data;if("number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9)try{i=JSON.parse(i)}catch(t){return}if("object"==typeof i&&"number"==typeof i.kind)switch(i.kind){case j.cn.wn:"number"==typeof i.dq&&"number"==typeof i.Aq&&n.jq(i,t.source,t.origin);break;case j.cn.vn:"number"==typeof i.dq&&"number"==typeof i.Aq&&n.Oq(i,t.source,t.origin,null);break;case j.cn.Nn:"number"==typeof i.dq&&"number"==typeof i.Aq&&n.mq(i,t.source,t.origin,null);break;case j.cn.bn:"number"==typeof i.dq&&"number"==typeof i.Aq&&n.pq(i,t.source);break;case j.cn.yn:n.gq(t.source);break;case j.cn.en:n.dh(i,t.source,t.origin,null)}}},N.Ti(v,"message",this.yh,!0)},f._(j.oh,c.Et),j.oh.prototype.destroy=function(){N.Ci(v,"message",this.yh,!0);for(var t=this.receivers.length-1;-1<t;--t)for(var i=this.receivers[t].fh(),n=i.length-1;-1<n;--n)this.receivers[t].Yn(i[n].window,i[n].domain,i[n].Kn),this.ph(i[n].window,i[n].domain,i[n].Kn);for(t=this.receivers.length-1;-1<t;--t)e.destruct(this.receivers[t]);this.receivers=null;return(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments))+1},j.oh.prototype.Oh=function(t){if(null==this.receivers)return 0;for(var i=this.receivers.length-1;-1<i&&this.receivers[i].nh()!==t;)--i;return i},j.oh.prototype.jh=function(){var t,i=this.kh();return t=0<arguments.length?new j.En(this,i,arguments[0]):new j.En(this,i),this.receivers.push(t),t},j.oh.prototype.gh=function(){if(null==this.receivers)return 0;if(arguments[0].hh()!==this)return 0;var t=this.Oh(arguments[0].nh());return this.receivers.splice(t,1),e.destruct(arguments[0]),1},j.oh.prototype.Pn=function(){var t=new Object;if(t.kind=j.cn.wn,t.Mq=arguments[0],t.kq=arguments[1],t.xq=arguments[2],t.dq=arguments[3],t.Aq=arguments[4],null!=arguments[7])arguments[7].jq(t,v,v.document.domain);else{"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t));var i=arguments[6];"null"===i&&(i="*"),null!==arguments[5]&&void 0!==arguments[5].postMessage&&arguments[5].postMessage(t,i)}return 1},j.oh.prototype.Gn=function(){var t=new Object;if(t.kind=j.cn.vn,t.dq=arguments[0].nh(),t.Aq=arguments[1],j.mn(arguments[2])&&null!=arguments[4]){for(var i,n=arguments[4].split("."),s=arguments[2],h=0;h<n.length;++h)s=s[n[h]];return s?s.Oq(t,v,v.document.domain,this):("number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[3])&&(i="*"),null!==arguments[2]&&void 0!==arguments[2].postMessage&&arguments[2].postMessage(t,i)),1}return"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[3])&&(i="*"),null!==arguments[2]&&void 0!==arguments[2].postMessage&&arguments[2].postMessage(t,i),1},j.oh.prototype.Xn=function(){var t=new Object;if(t.kind=j.cn.Nn,t.dq=arguments[0].nh(),t.Aq=arguments[1],5<arguments.length&&(t.initData=arguments[5]),null!=arguments[4])arguments[4].mq(t,v,v.document.domain,this);else{"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t));var i=arguments[3];"null"===i&&(i="*"),null!==arguments[2]&&void 0!==arguments[2].postMessage&&arguments[2].postMessage(t,i)}return 1},j.oh.prototype.Wn=function(){var t=new Object;if(t.kind=j.cn.bn,t.dq=arguments[0].nh(),t.Aq=arguments[1],j.mn(arguments[2])&&null!=arguments[4]){for(var i,n=arguments[4].split("."),s=arguments[2],h=0;h<n.length;++h)s=s[n[h]];return s?s.pq(t,v):("number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[3])&&(i="*"),null!==arguments[2]&&void 0!==arguments[2].postMessage&&arguments[2].postMessage(t,i)),1}return"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[3])&&(i="*"),null!==arguments[2]&&void 0!==arguments[2].postMessage&&arguments[2].postMessage(t,i),1},j.oh.prototype.ph=function(){var t=new Object;if(t.kind=j.cn.yn,j.mn(arguments[0])&&null!=arguments[2]){var i,n=arguments[2];return n?n.gq(v):("number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[1])&&(i="*"),null!==arguments[0]&&void 0!==arguments[0].postMessage&&arguments[0].postMessage(t,i)),1}return"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t)),"null"===(i=arguments[1])&&(i="*"),null!==arguments[0]&&void 0!==arguments[0].postMessage&&arguments[0].postMessage(t,i),1},j.oh.prototype.kh=function(){return++this.bh},j.oh.prototype.jq=function(){if(void 0!==arguments[0].Mq&&"number"==typeof arguments[0].xq){var t=this.receivers[this.Oh(arguments[0].Aq)];if(void 0!==t){var i=null;if(arguments[0].kq)if(arguments[0].kq instanceof Array)i=arguments[0].kq;else for(var n in i=new Array,arguments[0].kq)i.push(arguments[0].kq[n]);t.Jn(arguments[0].Mq,i,arguments[0].xq,arguments[0].dq,arguments[1],arguments[2])}}},j.oh.prototype.Oq=function(){var t=this.Oh(arguments[0].Aq);if(-1!==t)this.receivers[t].Hn(arguments[0].dq,arguments[1],arguments[2],arguments[3])},j.oh.prototype.mq=function(){var t=this.Oh(arguments[0].Aq);if(-1!==t)this.receivers[t].Qn(arguments[0].dq,arguments[1],arguments[2],arguments[3],arguments[0].initData)},j.oh.prototype.pq=function(){var t=this.Oh(arguments[0].Aq);if(-1!==t)this.receivers[t].Vn(arguments[0].dq,arguments[1])},j.oh.prototype.gq=function(){if(void 0!==arguments[0]&&null!=arguments[0]){for(var t=this.receivers.length-1;-1<t;--t)this.receivers[t].Yn(arguments[0]);this.zs(new j.An(d.rn.un,arguments[0],null))}},j.oh.prototype.xh=function(){var t=new Object;if(t.kind=j.cn.en,t.message=arguments[0],null!=arguments[3])arguments[3].dh(t,v,v.document.domain,this);else{"number"==typeof e.tweaks.isIE&&e.tweaks.isIE<=9&&(t=JSON.stringify(t));var i=arguments[2];"null"===i&&(i="*"),null!==arguments[1]&&void 0!==arguments[1].postMessage&&arguments[1].postMessage(t,i)}return 1},j.oh.prototype.dh=function(){this.zs(new j.An(d.rn.en,arguments[1],arguments[2],arguments[0].message))},j.oh.prototype.mh=function(){return!this.ah||this.Mh(arguments[0])<this.wh.length},j.oh.prototype._h=function(){return this.Eh(arguments[0])<this.wh.length?0:(this.wh.push(win),1)},j.oh.prototype.Sh=function(){var t=this.Eh(arguments[0]);return t<this.wh.length?(this.wh.splice(t,1),1):0},j.oh.prototype.Eh=function(){for(var t=0;t<this.wh.length&&this.wh[t]!=win;)++t;return t},j.oh.prototype.Ah=function(t){return!this.vh||this.zh(t)<this.Nh.length},j.oh.prototype.Ih=function(t){return this.Fh(t)<this.Nh.length?0:(this.Nh.push(t),1)},j.oh.prototype.Dh=function(t){var i=this.Fh(t);return i<this.Nh.length?(this.Nh.splice(i,1),1):0},j.oh.prototype.Fh=function(t){for(var i=0;i<this.Nh.length&&this.Nh[i]!==t;)++i;return i},void 0!==e.currentBridge&&null!=e.currentBridge)throw new Error("adways.currentBridge already exist");e.currentBridge=new j.oh,N.Ti(v,"unload",function(){e.destruct(e.currentBridge)},!0);var O=new Object;O.Th=Math.log(10),O.Ch=function(){for(var t=1;1+(t/=2)/2!=1;);return t},O.Jh=1e-6,O.Rh=Math.abs(Math.floor(Math.log(O.Jh)/O.Th)),O.Uh=Math.pow(10,O.Rh),O.Bh=function(){return Math.round(arguments[0]*O.Uh)/O.Uh},O.Zh=function(){var t=2<arguments.length?arguments[2]:O.Jh;return arguments[0]<arguments[1]-t?-1:arguments[0]>arguments[1]+t?1:0},O.Ph=function(){return 0==O.Zh.apply(null,arguments)},O.Kh=function(t,i,n){return i+t*(n-i)},O.Lh=function(t,i,n,s){var h=1-t;return h*h*i+2*t*h*n+t*t*s},O.qh=function(t,i,n,s,h){var r=1-t;return r*r*r*i+3*t*r*r*n+3*t*t*r*s+t*t*t*h},O.Gh=function(){for(var t=0,i=0,n=arguments[0].length-1;-1<n;--n)t+=(i=arguments[0][n])*i;return Math.sqrt(t)},O.Hh=function(){var t=arguments[0][0],i=arguments[0][1];return Math.sqrt(t*t+i*i)},O.Xh=function(){var t=2<arguments.length?arguments[2]:new Array(2);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][1],t[1]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][1],t},O.Qh=function(){var t=2<arguments.length?arguments[2]:new Array(4);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][2],t[1]=arguments[0][0]*arguments[1][1]+arguments[0][1]*arguments[1][3],t[2]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][2],t[3]=arguments[0][2]*arguments[1][1]+arguments[0][3]*arguments[1][3],t},O.Vh=function(){return arguments[0][0]*arguments[0][3]-arguments[0][1]*arguments[0][2]},O.Yh=function(){var t=2<arguments.length?arguments[2]:O.Vh(arguments[0]);if(0==O.Zh(t,0))return null;var i=1<arguments.length?arguments[1]:new Array(4);return i[0]=arguments[0][3]/t,i[1]=-arguments[0][1]/t,i[2]=-arguments[0][2]/t,i[3]=arguments[0][0]/t,i};var m=new Object;m.st=new Object,m.st.Wh="type.exceptions.ENUM",m.$h=new Object,f.J(m.$h),m.tr=new Object,f.J(m.tr,m.$h),m.ir=new Object,f.J(m.ir),m.sr=new Object,f.J(m.sr,m.ir),m.nr=new Object,f.J(m.nr),m.hr=new Object,f.J(m.hr,m.nr),m.rr=new Object,f.J(m.rr),m.ur=new Object,f.J(m.ur,m.rr),m.er=new Object,f.J(m.er),m.lr=new Object,f.J(m.lr,m.er);var p=new Object;p.or=function(){return("object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf()).toString()},p.ar=function(){var t,i=Number.NaN;switch(typeof(t="object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf())){case"boolean":i=t?1:0;break;case"number":i=t;break;case"string":switch(t.toLowerCase()){case"true":i=1;break;case"false":i=0;break;case"inf":case"+inf":case"infinity":case"+infinity":i=Number.POSITIVE_INFINITY;break;case"-inf":case"-infinity":i=Number.NEGATIVE_INFINITY;break;case"nan":i=Number.NaN;break;default:i=parseFloat(t)}}return i},p.cr=function(t){var i=new Object;return i.isSpecial=0,i.value=-1,isNaN(t)?i.isSpecial=3:t.valueOf()==Number.POSITIVE_INFINITY?i.isSpecial=2:t.valueOf()==Number.NEGATIVE_INFINITY&&(i.isSpecial=1),i.value=t.valueOf(),i},p.wr=function(t){return void 0===t.isSpecial||void 0===t.value?Number.NaN:3==t.isSpecial?Number.NaN:2==t.isSpecial?Number.POSITIVE_INFINITY:1==t.isSpecial?Number.NEGATIVE_INFINITY:0==t.isSpecial?t.value:void 0},p.vr=function(){var t,i=!1;switch(typeof(t="object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf())){case"boolean":i=t;break;case"number":i=!isNaN(t)&&0!=t;break;case"string":switch(t.toLowerCase()){case"true":i=!0;break;case"false":i=!1;break;default:t=parseFloat(t),i=!isNaN(t)&&0!=t}}return i},p.Nr=function(){for(var t=1<arguments.length?arguments[1]:0,i=new Array(arguments[0].length),n=0;n<t;++n)i[n]=arguments[0][n];i[t]=p.or(arguments[0][t]);for(n=t+1;n<arguments[0].length;++n)i[n]=arguments[0][n];return i},p.br=function(){for(var t=1<arguments.length?arguments[1]:0,i=new Array(arguments[0].length),n=0;n<t;++n)i[n]=arguments[0][n];i[t]=p.ar(arguments[0][t]);for(n=t+1;n<arguments[0].length;++n)i[n]=arguments[0][n];return i},p.yr=function(){for(var t=1<arguments.length?arguments[1]:0,i=new Array(arguments[0].length),n=0;n<t;++n)i[n]=arguments[0][n];i[t]=p.vr(arguments[0][t]);for(n=t+1;n<arguments[0].length;++n)i[n]=arguments[0][n];return i},p.mr=function(){var t,i=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),w.Ut(t)&&1<t.length){i.push(new Array(p.ar(t[0]),p.ar(t[1])));for(var n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t){i.push(new Array(p.ar(t.x),p.ar(t.y)));for(n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if(1<arguments[0].length){i.push(new Array(p.ar(arguments[0][0]),p.ar(arguments[0][1])));for(n=2;n<arguments[0].length;++n)i.push(arguments[0][n])}else i.push(new Array(Number.NaN,Number.NaN));return i},p.Ar=function(){var t,i=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),w.Ut(t)&&2<t.length){i.push(new Array(p.ar(t[0]),p.ar(t[1]),p.ar(t[2])));for(var n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t&&"z"in t){i.push(new Array(p.ar(t.x),p.ar(t.y),p.ar(t.z)));for(n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if(2<arguments[0].length){i.push(new Array(p.ar(arguments[0][0]),p.ar(arguments[0][1]),p.ar(arguments[0][2])));for(n=3;n<arguments[0].length;++n)i.push(arguments[0][n])}else i.push(new Array(Number.NaN,Number.NaN,Number.NaN));return i},p.dr=function(){var t,i=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),w.Ut(t)&&3<t.length){i.push(new Array(p.ar(t[0]),p.ar(t[1]),p.ar(t[2]),p.ar(t[3])));for(var n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t&&"z"in t&&"w"in t){i.push(new Array(p.ar(t.x),p.ar(t.y),p.ar(t.z),p.ar(t.w)));for(n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if("object"==typeof t&&"a"in t&&"b"in t&&"c"in t&&"d"in t){i.push(new Array(p.ar(t.a),p.ar(t.b),p.ar(t.c),p.ar(t.d)));for(n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if(3<arguments[0].length){i.push(new Array(p.ar(arguments[0][0]),p.ar(arguments[0][1]),p.ar(arguments[0][2]),p.ar(arguments[0][3])));for(n=4;n<arguments[0].length;++n)i.push(arguments[0][n])}else i.push(new Array(Number.NaN,Number.NaN,Number.NaN,Number.NaN));return i},p.pr=function(){var t,i=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),w.Ut(t)&&5<t.length){i.push(new Array(p.ar(t[0]),p.ar(t[1]),p.ar(t[2]),p.ar(t[3]),p.ar(t[4]),p.ar(t[5])));for(var n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if("object"==typeof t&&"a"in t&&"b"in t&&"c"in t&&"d"in t&&"x"in t&&"y"in t){i.push(new Array(p.ar(t.a),p.ar(t.b),p.ar(t.c),p.ar(t.d),p.ar(t.x),p.ar(t.y)));for(n=1;n<arguments[0].length;++n)i.push(arguments[0][n])}else if(5<arguments[0].length){i.push(new Array(p.ar(arguments[0][0]),p.ar(arguments[0][1]),p.ar(arguments[0][2]),p.ar(arguments[0][3]),p.ar(arguments[0][4]),p.ar(arguments[0][5])));for(n=6;n<arguments[0].length;++n)i.push(arguments[0][n])}else i.push(new Array(Number.NaN,Number.NaN,Number.NaN,Number.NaN,Number.NaN,Number.NaN));return i};var g=new Object;g.Or=++a.ft,g.jr=++a.ft,g.Wh=++a.ft,g.kr=++a.ft,g.gr=++a.ft,g.$h=new Object,f.J(g.$h,m.$h),g.tr=new Object,f.J(g.tr,g.$h,m.tr),g.ir=new Object,f.J(g.ir,m.ir),g.sr=new Object,f.J(g.sr,g.ir,m.sr),g.nr=new Object,f.J(g.nr,m.nr),g.hr=new Object,f.J(g.hr,g.nr,m.hr),g.rr=new Object,f.J(g.rr,m.rr),g.ur=new Object,f.J(g.ur,g.rr,m.ur),g.er=new Object,f.J(g.er,m.er),g.lr=new Object,f.J(g.lr,g.er,m.lr);var M=new Object;M.xr=function(){c.Et.call(this),this.Mr=null,this._r=!1,this.value=0<arguments.length&&p.yr(arguments)[0]},f._(M.xr,c.Et,g.ir),M.xr.prototype.valueOf=function(){return this.value},M.xr.prototype.Er=function(){return this.Sr.apply(this,p.yr(arguments))},M.xr.prototype.Sr=function(){if(this.value==arguments[0])return 0;var t=this.value;return this.value=arguments[0],null==this.Mr&&this.zs(new c.kt(g.jr,t,1<arguments.length?arguments[1]:null)),1},M.xr.prototype.zr=function(){return this.Ir.apply(this,p.yr(arguments))},M.xr.prototype.Ir=function(){var t=new Array(arguments.length);t[0]=this.value&&arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.xr.prototype.Fr=function(){return this.Dr.apply(this,p.yr(arguments))},M.xr.prototype.Dr=function(){var t=new Array(arguments.length);t[0]=this.value||arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.xr.prototype.Tr=function(){return this.Cr.apply(this,p.yr(arguments))},M.xr.prototype.Cr=function(){var t=new Array(arguments.length);t[0]=this.value?!arguments[0]:arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.xr.prototype.Jr=function(){var t=new Array;t.push(!this.value);for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.xr.prototype.Rr=function(){return null==this.Mr?(this._r=0<arguments.length&&arguments[0].valueOf(),this.Mr=new c.kt(g.jr,this.valueOf()),1):0},M.xr.prototype.Ur=function(){if(null==this.Mr)return-1;var t=this.Mr;return(arguments.length<=2||arguments[2])&&this.Br(),this._r||this.value!=t.Zr()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.xr.prototype.Br=function(){return null!=this.Mr?(this.Mr=null,1):0},M.xr.prototype.Kr=function(){return this.Mr},M.xr.prototype.Lr=function(){return null!=this.Mr&&(fireArmedBooleanEventAnyway||this.value!=this.Mr.Zr())},M.qr=function(){c.Et.call(this),this.Mr=null,this._r=!1,this.value=0<arguments.length&&p.yr(arguments)[0]},f._(M.qr,c.Et,g.sr),M.qr.prototype.valueOf=function(){return this.value},M.qr.prototype.Er=function(){return this.Sr.apply(this,p.yr(arguments))},M.qr.prototype.Sr=function(){if(this.value==arguments[0])return 0;var t=this.value;return this.value=arguments[0],null==this.Mr&&this.zs(new c.kt(g.jr,t,1<arguments.length?arguments[1]:null)),1},M.qr.prototype.zr=function(){return this.Ir.apply(this,p.yr(arguments))},M.qr.prototype.Ir=function(){var t=new Array(arguments.length);t[0]=this.value&&arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.qr.prototype.Fr=function(){return this.Dr.apply(this,p.yr(arguments))},M.qr.prototype.Dr=function(){var t=new Array(arguments.length);t[0]=this.value||arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.qr.prototype.Tr=function(){return this.Cr.apply(this,p.yr(arguments))},M.qr.prototype.Cr=function(){var t=new Array(arguments.length);t[0]=this.value?!arguments[0]:arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.qr.prototype.Jr=function(){var t=new Array;t.push(!this.value);for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.qr.prototype.Rr=function(){return null==this.Mr?(this._r=0<arguments.length&&arguments[0].valueOf(),this.Mr=new c.kt(g.jr,this.valueOf()),1):0},M.qr.prototype.Ur=function(){if(null==this.Mr)return-1;var t=this.Mr;return(arguments.length<=2||arguments[2])&&this.Br(),this._r||this.value!=t.Zr()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.qr.prototype.Br=function(){return null!=this.Mr?(this.Mr=null,1):0},M.qr.prototype.Kr=function(){return this.Mr},M.qr.prototype.Lr=function(){return null!=this.Mr&&(fireArmedBooleanEventAnyway||this.value!=this.Mr.Zr())},M.Gr=function(){c.Et.call(this),this.Hr=null,this.Xr=!1,this.value=0<arguments.length?p.br(arguments)[0]:0},f._(M.Gr,c.Et,g.$h),M.Gr.prototype.valueOf=function(){return this.value},M.Gr.prototype.Er=function(){return this.Sr.apply(this,p.br(arguments))},M.Gr.prototype.Sr=function(){if(isNaN(arguments[0])&&isNaN(this.value))return 0;if(isNaN(arguments[0])||isNaN(this.value)||0!=O.Zh(this.value,arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Hr&&this.zs(new c.kt(g.Or,t,1<arguments.length?arguments[1]:null)),1}return 0},M.Gr.prototype.Qr=function(){return this.Vr.apply(this,p.br(arguments))},M.Gr.prototype.Vr=function(){var t=new Array(arguments.length);t[0]=this.value+arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.Yr=function(){return this.Wr.apply(this,p.br(arguments))},M.Gr.prototype.Wr=function(){var t=new Array(arguments.length);t[0]=this.value-arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.$r=function(){return this.tu.apply(this,p.br(arguments))},M.Gr.prototype.tu=function(){var t=new Array(arguments.length);t[0]=this.value*arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.iu=function(){return this.su.apply(this,p.br(arguments))},M.Gr.prototype.su=function(){var t=new Array(arguments.length);t[0]=this.value/arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.nu=function(){return this.hu.apply(this,p.br(arguments))},M.Gr.prototype.hu=function(){var t=new Array(arguments.length);t[0]=Math.min(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.ru=function(){return this.uu.apply(this,p.br(arguments))},M.Gr.prototype.uu=function(){var t=new Array(arguments.length);t[0]=Math.max(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.eu=function(){return this.lu.apply(this,p.br(arguments))},M.Gr.prototype.lu=function(){var t=new Array(arguments.length);t[0]=this.value%arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.fu=function(){return this.ou.apply(this,p.br(arguments))},M.Gr.prototype.ou=function(){var t=new Array(arguments.length);t[0]=Math.pow(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.au=function(){var t=new Array;t.push(Math.round(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.cu=function(){var t=new Array;t.push(Math.ceil(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.wu=function(){var t=new Array;t.push(Math.floor(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.vu=function(){var t=new Array;t.push(Math.abs(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.Nu=function(){var t=new Array;t.push(Math.exp(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.bu=function(){var t=new Array;t.push(Math.acos(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.yu=function(){var t=new Array;t.push(Math.asin(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.mu=function(){var t=new Array;t.push(Math.atan(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.Au=function(){var t=new Array;t.push(Math.cos(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.du=function(){var t=new Array;t.push(Math.sin(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.pu=function(){var t=new Array;t.push(Math.tan(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.Ou=function(){var t=new Array;t.push(Math.sqrt(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.ju=function(){var t=new Array;t.push(Math.log(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Gr.prototype.ku=function(){var t=new Array(arguments.length+1);t[0]=this.value*Math.random();for(var i=0;i<arguments.length;++i)t[i+1]=arguments[i];return this.Sr.apply(this,t),this},M.Gr.prototype.gu=function(){return null==this.Hr?(this.Xr=0<arguments.length&&arguments[0].valueOf(),this.Hr=new c.kt(g.Or,this.valueOf()),1):0},M.Gr.prototype.xu=function(){if(null==this.Hr)return-1;var t=this.Hr;(arguments.length<=2||arguments[2])&&this.Mu();var i=t.Zr(),n=isNaN(i),s=isNaN(this.value);return this.Xr||n&&!s||!n&&s||!n&&!s&&0!=O.Zh(this.value,i)||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.Gr.prototype.Mu=function(){return null!=this.Hr?(this.Hr=null,1):0},M.Gr.prototype._u=function(){return this.Hr},M.Gr.prototype.Eu=function(){if(null==this.Hr)return!1;var t=this.Hr.Zr(),i=isNaN(t),n=isNaN(this.value);return this.Xr||i&&!n||!i&&n||!i&&!n&&0!=O.Zh(this.value,t)},M.Su=function(){c.Et.call(this),this.Hr=null,this.Xr=!1,this.value=0<arguments.length?p.br(arguments)[0]:0},f._(M.Su,c.Et,g.tr),M.Su.prototype.valueOf=function(){return this.value},M.Su.prototype.Er=function(){return this.Sr.apply(this,p.br(arguments))},M.Su.prototype.Sr=function(){if(isNaN(arguments[0])&&isNaN(this.value))return 0;if(isNaN(arguments[0])||isNaN(this.value)||0!=O.Zh(this.value,arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Hr&&this.zs(new c.kt(g.Or,t,1<arguments.length?arguments[1]:null)),1}return 0},M.Su.prototype.Qr=function(){return this.Vr.apply(this,p.br(arguments))},M.Su.prototype.Vr=function(){var t=new Array(arguments.length);t[0]=this.value+arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.Yr=function(){return this.Wr.apply(this,p.br(arguments))},M.Su.prototype.Wr=function(){var t=new Array(arguments.length);t[0]=this.value-arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.$r=function(){return this.tu.apply(this,p.br(arguments))},M.Su.prototype.tu=function(){var t=new Array(arguments.length);t[0]=this.value*arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.iu=function(){return this.su.apply(this,p.br(arguments))},M.Su.prototype.su=function(){var t=new Array(arguments.length);t[0]=this.value/arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.nu=function(){return this.hu.apply(this,p.br(arguments))},M.Su.prototype.hu=function(){var t=new Array(arguments.length);t[0]=Math.min(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.ru=function(){return this.uu.apply(this,p.br(arguments))},M.Su.prototype.uu=function(){var t=new Array(arguments.length);t[0]=Math.max(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.eu=function(){return this.lu.apply(this,p.br(arguments))},M.Su.prototype.lu=function(){var t=new Array(arguments.length);t[0]=this.value%arguments[0];for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.fu=function(){return this.ou.apply(this,p.br(arguments))},M.Su.prototype.ou=function(){var t=new Array(arguments.length);t[0]=Math.pow(this.value,arguments[0]);for(var i=1;i<arguments.length;++i)t[i]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.au=function(){var t=new Array;t.push(Math.round(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.cu=function(){var t=new Array;t.push(Math.ceil(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.wu=function(){var t=new Array;t.push(Math.floor(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.vu=function(){var t=new Array;t.push(Math.abs(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.Nu=function(){var t=new Array;t.push(Math.exp(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.bu=function(){var t=new Array;t.push(Math.acos(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.yu=function(){var t=new Array;t.push(Math.asin(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.mu=function(){var t=new Array;t.push(Math.atan(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.Au=function(){var t=new Array;t.push(Math.cos(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.du=function(){var t=new Array;t.push(Math.sin(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.pu=function(){var t=new Array;t.push(Math.tan(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.Ou=function(){var t=new Array;t.push(Math.sqrt(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.ju=function(){var t=new Array;t.push(Math.log(this.value));for(var i=0;i<arguments.length;++i)t.push(arguments[i]);return this.Sr.apply(this,t),this},M.Su.prototype.ku=function(){var t=new Array(arguments.length+1);t[0]=this.value*Math.random();for(var i=0;i<arguments.length;++i)t[i+1]=arguments[i];return this.Sr.apply(this,t),this},M.Su.prototype.gu=function(){return null==this.Hr?(this.Xr=0<arguments.length&&arguments[0].valueOf(),this.Hr=new c.kt(g.Or,this.valueOf()),1):0},M.Su.prototype.xu=function(){if(null==this.Hr)return-1;var t=this.Hr;(arguments.length<=2||arguments[2])&&this.Mu();var i=t.Zr(),n=isNaN(i),s=isNaN(this.value);return this.Xr||n&&!s||!n&&s||!n&&!s&&0!=O.Zh(this.value,i)||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.Su.prototype.Mu=function(){return null!=this.Hr?(this.Hr=null,1):0},M.Su.prototype._u=function(){return this.Hr},M.Su.prototype.Eu=function(){if(null==this.Hr)return!1;var t=this.Hr.Zr(),i=isNaN(t),n=isNaN(this.value);return this.Xr||i&&!n||!i&&n||!i&&!n&&0!=O.Zh(this.value,t)},M.zu=function(){if(c.Et.call(this),this.Iu=null,this.Fu=arguments[0],!this.Du(arguments[1]))throw new x.H(m.st,"enum state not in enum values");this.value=arguments[1]},f._(M.zu,c.Et,g.nr),M.zu.prototype.Du=function(){if(w.Ut(this.Fu))return 0<=this.Fu.indexOf(arguments[0]);var t=!1;for(var i in this.Fu)t=t||this.Fu[i]===arguments[0];return t},M.zu.prototype.valueOf=function(){return this.value},M.zu.prototype.Tu=function(){return this.Fu},M.zu.prototype.Cu=function(){if(this.Fu=arguments[0],w.Ut(this.Fu))this.value=this.Fu[this.Fu.length-1];else{for(var t in this.Fu)t;this.value=this.Fu[t]}return 1},M.zu.prototype.Er=function(){return this.Sr.apply(this,arguments)},M.zu.prototype.Sr=function(){if(!this.Du(arguments[0]))return 0;if(this.value===arguments[0])return 0;var t=this.value;return this.value=arguments[0],null==this.Iu&&this.zs(new c.kt(g.Wh,t,1<arguments.length?arguments[1]:null)),1},M.zu.prototype.Ju=function(){return null==this.Iu?(this.Iu=new c.kt(g.Wh,this.valueOf(),0<arguments.length?arguments[0]:null),1):0},M.zu.prototype.Ru=function(){if(null==this.Iu)return-1;var t=this.Iu;return(arguments.length<=2||arguments[2])&&this.Uu(),this.value!==t.Zr()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.zu.prototype.Uu=function(){return null!=this.Iu?(this.Iu=null,1):0},M.zu.prototype.Bu=function(){return this.Iu},M.zu.prototype.Zu=function(){return null!=this.Iu&&this.value!==this.Iu.Zr()},M.Pu=function(){if(c.Et.call(this),this.Iu=null,this.Fu=arguments[0],!this.Du(arguments[1]))throw new x.H(m.st,"enum state not in enum values");this.value=arguments[1]},f._(M.Pu,c.Et,g.hr),M.Pu.prototype.Du=function(){if(w.Ut(this.Fu))return 0<=this.Fu.indexOf(arguments[0]);var t=!1;for(var i in this.Fu)t=t||this.Fu[i]===arguments[0];return t},M.Pu.prototype.valueOf=function(){return this.value},M.Pu.prototype.Tu=function(){return this.Fu},M.Pu.prototype.Cu=function(){if(this.Fu=arguments[0],w.Ut(this.Fu))this.value=this.Fu[this.Fu.length-1];else{for(var t in this.Fu)t;this.value=this.Fu[t]}return 1},M.Pu.prototype.Er=function(){return this.Sr.apply(this,arguments)},M.Pu.prototype.Sr=function(){if(!this.Du(arguments[0]))return 0;if(this.value===arguments[0])return 0;var t=this.value;return this.value=arguments[0],null==this.Iu&&this.zs(new c.kt(g.Wh,t,1<arguments.length?arguments[1]:null)),1},M.Pu.prototype.Ju=function(){return null==this.Iu?(this.Iu=new c.kt(g.Wh,this.valueOf(),0<arguments.length?arguments[0]:null),1):0},M.Pu.prototype.Ru=function(){if(null==this.Iu)return-1;var t=this.Iu;return(arguments.length<=2||arguments[2])&&this.Uu(),this.value!==t.Zr()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.Pu.prototype.Uu=function(){return null!=this.Iu?(this.Iu=null,1):0},M.Pu.prototype.Bu=function(){return this.Iu},M.Pu.prototype.Zu=function(){return null!=this.Iu&&this.value!==this.Iu.Zr()},M.Ku=function(){c.Et.call(this),this.Lu=null,this.value=0<arguments.length?p.Nr(arguments)[0]:0},f._(M.Ku,c.Et,g.er),M.Ku.prototype.valueOf=function(){return this.value},M.Ku.prototype.Er=function(){return this.Sr.apply(this,p.Nr(arguments))},M.Ku.prototype.Sr=function(){if(0==this.value.localeCompare(arguments[0]))return 0;var t=this.value;return this.value=arguments[0],null==this.Lu&&this.zs(new c.kt(g.gr,t,1<arguments.length?arguments[1]:null)),1},M.Ku.prototype.qu=function(){return null==this.Lu?(this.Lu=new c.kt(g.gr,this.valueOf(),0<arguments.length?arguments[0]:null),1):0},M.Ku.prototype.Gu=function(){if(null==this.Lu)return-1;var t=this.Lu;return(arguments.length<=2||arguments[2])&&this.Hu(),0!=this.value.localeCompare(t.Zr())||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.Ku.prototype.Hu=function(){return null!=this.Lu?(this.Lu=null,1):0},M.Xu=function(){c.Et.call(this),this.Lu=null,this.value=0<arguments.length?p.Nr(arguments)[0]:0},f._(M.Xu,c.Et,g.lr),M.Xu.prototype.valueOf=function(){return this.value},M.Xu.prototype.Er=function(){return this.Sr.apply(this,p.Nr(arguments))},M.Xu.prototype.Sr=function(){if(0==this.value.localeCompare(arguments[0]))return 0;var t=this.value;return this.value=arguments[0],null==this.Lu&&this.zs(new c.kt(g.gr,t,1<arguments.length?arguments[1]:null)),1},M.Xu.prototype.qu=function(){return null==this.Lu?(this.Lu=new c.kt(g.gr,this.valueOf(),0<arguments.length?arguments[0]:null),1):0},M.Xu.prototype.Gu=function(){if(null==this.Lu)return-1;var t=this.Lu;return(arguments.length<=2||arguments[2])&&this.Hu(),0!=this.value.localeCompare(t.Zr())||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},M.Xu.prototype.Hu=function(){return null!=this.Lu?(this.Lu=null,1):0};var S=new Object;S.Qu=new Object,S.Qu.Vu=0,S.Qu.Yu=1,S.Qu.Wu=2,S.Qu.$u=3,S.Qu.te=4,S.Qu.ie=5,S.Qu.se=6,S.Qu.ne=7,S.st=new Object,S.st.he="time.BAD_UNIT";var _=new Object;_.re=function(){var t,i=new Object;if(2==arguments.length)i.ue=arguments[0][S.Qu.Yu].valueOf(),i.ee=arguments[0][S.Qu.Wu].valueOf(),i.le=arguments[0][S.Qu.$u].valueOf(),i.fe=arguments[0][S.Qu.te].valueOf(),i.oe=arguments[0][S.Qu.ie].valueOf(),t=arguments[1].valueOf();else{var n=arguments[0].valueOf(),s=arguments[1].valueOf();if(s==(t=arguments[2].valueOf()))return arguments[0].valueOf();switch(s){case S.Qu.Yu:i=_.ae(n);break;case S.Qu.Wu:i=_.ce(n);break;case S.Qu.$u:i=_.we(n);break;case S.Qu.te:i=_.ve(n);break;case S.Qu.ie:i=_.Ne(n);break;default:throw"not implemented yet"}}switch(t){case S.Qu.Yu:return i.ue+1e3*i.ee+6e4*i.le+36e5*i.fe+864e5*i.oe;case S.Qu.Wu:return i.ue/1e3+i.ee+60*i.le+3600*i.fe+86400*i.oe;case S.Qu.$u:return i.ue/6e4+i.ee/60+i.le+60*i.fe+1440*i.oe;case S.Qu.te:return i.ue/36e5+i.ee/3600+i.le/60+i.fe+24*i.oe;case S.Qu.ie:return i.ue/864e5+i.ee/86400+i.le/1440+i.fe/24+i.oe;default:throw"not implemented yet"}},_.ae=function(t){var i=1<arguments.length?arguments[1]:Number.NEGATIVE_INFINITY,n=2<arguments.length?arguments[2]:Number.POSITIVE_INFINITY;n<i&&(n=i);var s=new Object;return isNaN(t)?null:(i<=S.Qu.Yu&&(s.ue=Math.floor(t)),n>S.Qu.Yu&&(void 0!==s.ue&&(s.ue%=1e3),i<=S.Qu.Wu&&(s.ee=Math.floor(t/1e3)),n>S.Qu.Wu&&(void 0!==s.ee&&(s.ee%=60),i<=S.Qu.$u&&(s.le=Math.floor(t/6e4)),n>S.Qu.$u&&(void 0!==s.le&&(s.le%=60),i<=S.Qu.te&&(s.fe=Math.floor(t/36e5)),n>S.Qu.te&&(void 0!==s.fe&&(s.fe%=24),s.oe=Math.floor(t/864e5))))),s)},_.ce=function(t){var i=1<arguments.length?arguments[1]:Number.NEGATIVE_INFINITY,n=2<arguments.length?arguments[2]:Number.POSITIVE_INFINITY;n<i&&(n=i);var s=new Object;return isNaN(t)?null:(i<=S.Qu.Yu&&(s.ue=Math.floor(1e3*t)),n>S.Qu.Yu&&(void 0!==s.ue&&(s.ue%=1e3),i<=S.Qu.Wu&&(s.ee=Math.floor(t)),n>S.Qu.Wu&&(void 0!==s.ee&&(s.ee%=60),i<=S.Qu.$u&&(s.le=Math.floor(t/60)),n>S.Qu.$u&&(void 0!==s.le&&(s.le%=60),i<=S.Qu.te&&(s.fe=Math.floor(t/3600)),n>S.Qu.te&&(void 0!==s.fe&&(s.fe%=24),s.oe=Math.floor(t/86400))))),s)},_.we=function(t){var i=1<arguments.length?arguments[1]:Number.NEGATIVE_INFINITY,n=2<arguments.length?arguments[2]:Number.POSITIVE_INFINITY;n<i&&(n=i);var s=new Object;return isNaN(t)?null:(i<=S.Qu.Yu&&(s.ue=Math.floor(6e4*t)),n>S.Qu.Yu&&(void 0!==s.ue&&(s.ue%=1e3),i<=S.Qu.Wu&&(s.ee=Math.floor(60*t)),n>S.Qu.Wu&&(void 0!==s.ee&&(s.ee%=60),i<=S.Qu.$u&&(s.le=Math.floor(t)),n>S.Qu.$u&&(void 0!==s.le&&(s.le%=60),i<=S.Qu.te&&(s.fe=Math.floor(t/60)),n>S.Qu.te&&(void 0!==s.fe&&(s.fe%=24),s.oe=Math.floor(t/1440))))),s)},_.ve=function(t){var i=1<arguments.length?arguments[1]:Number.NEGATIVE_INFINITY,n=2<arguments.length?arguments[2]:Number.POSITIVE_INFINITY;n<i&&(n=i);var s=new Object;return isNaN(t)?null:(i<=S.Qu.Yu&&(s.ue=Math.floor(36e5*t)),n>S.Qu.Yu&&(void 0!==s.ue&&(s.ue%=1e3),i<=S.Qu.Wu&&(s.ee=Math.floor(3600*t)),n>S.Qu.Wu&&(void 0!==s.ee&&(s.ee%=60),i<=S.Qu.$u&&(s.le=Math.floor(60*t)),n>S.Qu.$u&&(void 0!==s.le&&(s.le%=60),i<=S.Qu.te&&(s.fe=Math.floor(t)),n>S.Qu.te&&(void 0!==s.fe&&(s.fe%=24),s.oe=Math.floor(t/24))))),s)},_.Ne=function(t){var i=1<arguments.length?arguments[1]:Number.NEGATIVE_INFINITY,n=2<arguments.length?arguments[2]:Number.POSITIVE_INFINITY;n<i&&(n=i);var s=new Object;return isNaN(t)?null:(i<=S.Qu.Yu&&(s.ue=Math.floor(864e5*t)),n>S.Qu.Yu&&(void 0!==s.ue&&(s.ue%=1e3),i<=S.Qu.Wu&&(s.ee=Math.floor(86400*t)),n>S.Qu.Wu&&(void 0!==s.ee&&(s.ee%=60),i<=S.Qu.$u&&(s.le=Math.floor(1440*t)),n>S.Qu.$u&&(void 0!==s.le&&(s.le%=60),i<=S.Qu.te&&(s.fe=Math.floor(24*t)),n>S.Qu.te&&(void 0!==s.fe&&(s.fe%=24),s.oe=Math.floor(t))))),s)},_.be=function(t){var i,n=1<arguments.length?arguments[1]:S.Qu.Wu,s="d",h="h",r="m",e="s",u="ms",f=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=!1,w=!1,v=!1,N=!1,b=!1,y=!1,A=!1,d=!1,j=!1,O="";if(2<arguments.length&&null!=arguments[2]){"string"==typeof arguments[2].dSym&&(s=arguments[2].dSym),"string"==typeof arguments[2].hSym&&(h=arguments[2].hSym),"string"==typeof arguments[2].mSym&&(r=arguments[2].mSym),"string"==typeof arguments[2].sSym&&(e=arguments[2].sSym),"string"==typeof arguments[2].msSym&&(u=arguments[2].msSym),"boolean"==typeof arguments[2].forceDisplayDay&&(b=arguments[2].forceDisplayDay),"boolean"==typeof arguments[2].forceDisplayHour&&(N=arguments[2].forceDisplayHour),"boolean"==typeof arguments[2].forceDisplayMinute&&(v=arguments[2].forceDisplayMinute),"boolean"==typeof arguments[2].forceDisplaySecond&&(w=arguments[2].forceDisplaySecond),"boolean"==typeof arguments[2].forceDisplayMillisecond&&(l=arguments[2].forceDisplayMillisecond),"boolean"==typeof arguments[2].allDigitsDay&&arguments[2].allDigitsDay,"boolean"==typeof arguments[2].allDigitsHour&&(j=arguments[2].allDigitsHour),"boolean"==typeof arguments[2].allDigitsMinute&&(d=arguments[2].allDigitsMinute),"boolean"==typeof arguments[2].allDigitsSecond&&(A=arguments[2].allDigitsSecond),"boolean"==typeof arguments[2].allDigitsMillisecond&&(y=arguments[2].allDigitsMillisecond),"string"==typeof arguments[2].spacer&&(O=arguments[2].spacer);var m=arguments[2].cutFrom;if("number"==typeof m)switch(m){case S.Qu.ie:case S.Qu.te:case S.Qu.$u:case S.Qu.Wu:case S.Qu.Yu:a=m}if("number"==typeof(m=arguments[2].cutTo))switch(m){case S.Qu.ie:case S.Qu.te:case S.Qu.$u:case S.Qu.Wu:case S.Qu.Yu:c=m}if("number"==typeof(m=arguments[2].low))switch(m){case S.Qu.ie:case S.Qu.te:case S.Qu.$u:case S.Qu.Wu:case S.Qu.Yu:f=m}if("number"==typeof(m=arguments[2].high))switch(m){case S.Qu.ie:case S.Qu.te:case S.Qu.$u:case S.Qu.Wu:case S.Qu.Yu:o=m}}switch(a<c&&(c=a),n){case S.Qu.Yu:i=_.ae(t,f,o);break;case S.Qu.Wu:i=_.ce(t,f,o);break;case S.Qu.$u:i=_.we(t,f,o);break;case S.Qu.te:i=_.ve(t,f,o);break;case S.Qu.ie:i=_.Ne(t,f,o);break;default:throw new x.H(S.st.he)}if(null==i)return"??";var p="",g=!1,M=!1;void 0===i.oe||!b&&0==i.oe||(g||(g=a==S.Qu.ie),p+=i.oe,p+=s,M=!0);var k=!1;if(g&&(k=c>S.Qu.te),k||(void 0===i.fe||!N&&0==i.fe||(g||(g=a==S.Qu.te),M&&(p+=O),j&&i.fe<10&&(p+="0"),p+=i.fe,p+=h,M=!0),k=!1,g&&(k=c>S.Qu.$u),k||(void 0===i.le||!v&&0==i.le||(g||(g=a==S.Qu.$u),M&&(p+=O),d&&i.le<10&&(p+="0"),p+=i.le,p+=r,M=!0),k=!1,g&&(k=c>S.Qu.Wu),k||(void 0===i.ee||!w&&0==i.ee||(g||(g=a==S.Qu.Wu),M&&(p+=O),A&&i.ee<10&&(p+="0"),p+=i.ee,p+=e,M=!0),k=!1,g&&(k=c>S.Qu.Yu),k||void 0===i.ue||!l&&0==i.ue||(M&&(p+=O),y&&i.ue<100&&(p+="0",i.ue<10&&(p+="0")),p+=i.ue,p+=u)))),""==p)switch(f){case S.Qu.Yu:p="0"+u;break;case S.Qu.Wu:p="0"+e;break;case S.Qu.$u:p="0"+r;break;case S.Qu.te:p="0"+h;break;case S.Qu.ie:p="0"+s;break;default:p="00"}return p};var k=new Object;k.ye=new Object,k.ye.me=1,k.ye.Ae=2,k.de=new Object,f.J(k.de),k.pe=new Object,f.J(k.pe,k.de),k.Oe=new Object,f.J(k.Oe),k.je=new Object,f.J(k.je,k.Oe),k.ke=new Object,f.J(k.ke,k.de),k.ge=new Object,f.J(k.ge,k.de),k.xe=new Object,f.J(k.xe,k.ge,k.ke);var I=new Object;I.Me=function(){this.elements=new Array},f._(I.Me,null,k.ke),I.Me.prototype.destroy=function(){this.elements=null},I.Me.prototype._e=function(){return this.Ee.apply(this,p.br(arguments))},I.Me.prototype.Ee=function(){return this.elements.length>arguments[0]?this.elements[arguments[0]]:null},I.Me.prototype.Se=function(){return 0<this.elements.length?this.elements[0]:null},I.Me.prototype.ze=function(){return 0<this.elements.length?this.elements[this.elements.length-1]:null},I.Me.prototype.Ie=function(){return this.elements.indexOf(arguments[0])},I.Me.prototype.Fe=function(){throw"not implemented yet"},I.Me.prototype.De=function(){throw"not implemented yet"},I.Me.prototype.Te=function(){throw"not implemented yet"},I.Me.prototype.Ce=function(){return this.elements.length},I.Me.prototype.Je=function(){if(!(this.elements.length<=0)){var t=0,i=this.elements.length;return 0<arguments.length&&null!=arguments[0]&&(t=arguments[0]),1<arguments.length&&null!=arguments[1]&&(i=arguments[1]+1),this.elements.splice(t,i-t)}},I.Me.prototype.Re=function(){this.elements.push(arguments[0])},I.Me.prototype.Ue=I.Me.prototype.ze,I.Me.prototype.Be=function(){this.elements.pop(arguments[0])};var z=new Object;z.Ze=++a.ft,z.Pe=++a.ft,z.Ke=new Object,z.Ke.Le=new o.ht,z.Ke.qe=z.Ke.Le.ut(),z.Ke.Ge=z.Ke.Le.ut(),z.He=new Object,z.He.Le=new o.ht,z.He.Xe=z.He.Le.ut(),z.He.Qe=z.He.Le.ut(),z.He.Ve=z.He.Le.ut(),z.He.Ye=z.He.Le.ut(),z.He.We=z.He.Le.ut(),z.de=new Object,f.J(z.de,a.Ot,k.de),z.ke=new Object,f.J(z.ke,z.de,k.ke),z.ge=new Object,f.J(z.ge,z.de,k.ge),z.xe=new Object,f.J(z.xe,z.ke,z.ge,k.xe),z.$e=new Object,f.J(z.$e),z.Oe=new Object,f.J(z.Oe,a.Ot),z.je=new Object,f.J(z.je,z.Oe,k.je),z.tl=new Object,f.J(z.tl),z.il=new Object,f.J(z.il,z.tl);var F=new Object;F.sl=function(t){c.jt.call(this,t),this.nl=null,this.hl=null,this.Ke=0},f._(F.sl,c.jt,z.$e),F.sl.prototype.rl=function(){return null==this.nl&&(this.nl=new Array),this.nl},F.sl.prototype.ul=function(){return null==this.nl&&(this.nl=new Array),this.nl.push(arguments[0]),1},F.sl.prototype.el=function(){return null!=this.nl?(this.nl=this.nl.concat(arguments[0]),2):(this.nl=arguments[0].concat(),1)},F.sl.prototype.ll=function(){return null==this.hl&&(this.hl=new Array),this.hl},F.sl.prototype.fl=function(){return null==this.hl&&(this.hl=new Array),this.hl.push(arguments[0]),1},F.sl.prototype.ol=function(){return null!=this.hl?(this.hl=this.hl.concat(arguments[0]),2):(this.hl=arguments[0].concat(),1)},F.sl.prototype.al=function(){return this.Ke},F.sl.prototype.cl=function(){this.Ke=this.Ke|arguments[0]},F.wl=function(t,i){c.jt.call(this,t),this.Sq=i,this.vl=0},f._(F.wl,c.jt,z.tl),F.wl.prototype.Nl=function(){return this.Sq},F.wl.prototype.bl=function(){return this.vl},F.wl.prototype.yl=function(){return this.vl=this.vl|arguments[0],1},F.ml=function(t,i,n,s,h){F.wl.call(this,t,h),this.Al=i,this.dl=n,this.pl=s,this.Sq=h,this.vl=0},f._(F.ml,F.wl,z.il),F.ml.prototype.Ol=function(){return this.Al},F.ml.prototype.jl=function(){return this.dl},F.ml.prototype.kl=function(){return this.pl},F.gl=function(){c.Et.call(this),this.xl=null,this.Sq=null},f._(F.gl,c.Et,z.Oe),F.gl.prototype.Ml=function(){return this.Sq},F.gl.prototype._l=function(t){if(null!=this.Sq)return 0;if(null!=this.xl)this.xl.yl(z.He.Xe);else{var i=new F.wl(z.Pe,null);i.yl(z.He.Xe)}return this.Sq=t,i.yl(z.He.Xe),this.zs(i),1},F.gl.prototype.El=function(t){if(this.Sq!=t)return 0;if(null!=this.xl)this.xl.yl(z.He.Qe);else{var i=new F.wl(z.Pe,t);i.yl(z.He.Qe)}return this.Sq=null,this.zs(i),1},F.gl.prototype.Sl=function(){return null==this.xl?(this.xl=new F.wl(z.Pe,this.Ml()),1):0},F.gl.prototype.zl=function(){if(null==this.xl)return-1;var t=this.xl;return(arguments.length<=2||arguments[2])&&this.Il(),0!=t.bl()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},F.gl.prototype.Il=function(){return null!=this.xl?(this.xl=null,1):0},F.Fl=function(){F.gl.call(this),this.index=-1,this.Dl=null,this.next=null},f._(F.Fl,F.gl,z.je),F.Fl.prototype.Tl=function(){return this.index},F.Fl.prototype.Cl=function(){return this.Dl},F.Fl.prototype.Jl=function(){return this.next},F.Fl.prototype.Rl=function(){return null!=this.Dl},F.Fl.prototype.Ul=function(){return null!=this.next},F.Bl=function(){c.Et.call(this),this.Zl=null,this.elements=new Array},f._(F.Bl,c.Et,z.ge),F.Bl.prototype.Pl=function(){for(var t=0;t<this.elements.length&&this.elements[t]!==arguments[0];)++t;return t},F.Bl.prototype._e=function(){return this.elements[arguments[0]]},F.Bl.prototype.Kl=function(){return this.Pl(arguments[0])<this.elements.length},F.Bl.prototype.Ce=function(){return this.elements.length},F.Bl.prototype.Ll=function(){return this.elements.concat()},F.Bl.prototype.Qr=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n)this.Kl(arguments[n])||(this.elements.push(arguments[n]),f.Z(arguments[n],k.Oe)&&arguments[n]._l(this),i.push(arguments[n]),++t);return 0<t&&this.ql(i),t}return 0},F.Bl.prototype.Gl=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=null;if(f.Z(arguments[n],k.de)?s=arguments[n].Ll():w.Ut(arguments[n])&&(s=arguments[n]),null!=s)for(var h=0;h<s.length;++h)this.Kl(s[h])||(this.elements.push(s[h]),f.Z(s[h],k.Oe)&&s[h]._l(this),i.push(s[h]),++t)}return 0<t&&this.ql(i),t}return 0},F.Bl.prototype.Hl=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=this.Pl(arguments[n]);s<this.elements.length&&(this.elements.splice(s,1),f.Z(arguments[n],k.Oe)&&arguments[n].El(this),i.push(arguments[n]),++t)}return 0<t&&this.Xl(i),t}return 0},F.Bl.prototype.Ql=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=null;if(f.Z(arguments[n],k.de)?s=arguments[n].Ll():w.Ut(arguments[n])&&(s=arguments[n]),null!=s)for(var h=0;h<s.length;++h){var r=this.Pl(s[h]);r<this.elements.length&&(this.elements.splice(r,1),f.Z(s[h],k.Oe)&&s[h].El(this),i.push(s[h]),++t)}}return 0<t&&this.Xl(i),t}return 0},F.Bl.prototype.Vl=function(){return null==this.Zl?(this.Zl=new F.sl(z.Ze),1):0},F.Bl.prototype.Yl=function(){if(null==this.Zl)return 0;var t=this.Zl;return(arguments.length<=2||arguments[2])&&this.Wl(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},F.Bl.prototype.Wl=function(){return null!=this.Zl?(this.Zl=null,1):0},F.Bl.prototype.$l=function(){if(null!=this.Zl)this.Zl.ul(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.Bl.prototype.ql=function(){if(null!=this.Zl)this.Zl.el(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.el(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.Bl.prototype.tf=function(){if(null!=this.Zl)this.Zl.fl(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.fl(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.Bl.prototype.Xl=function(){if(null!=this.Zl)this.Zl.ol(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ol(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.if=function(){c.Et.call(this),this.Zl=null,this.elements=new Array},f._(F.if,c.Et,z.ge,k.pe),F.if.prototype.Pl=function(){for(var t=0;t<this.elements.length&&this.elements[t]!==arguments[0];)++t;return t},F.if.prototype._e=function(){return this.elements[arguments[0]]},F.if.prototype.Kl=function(){return this.Pl(arguments[0])<this.elements.length},F.if.prototype.Ce=function(){return this.elements.length},F.if.prototype.Ll=function(){return this.elements.concat()},F.if.prototype.Qr=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n)this.Kl(arguments[n])||(this.elements.push(arguments[n]),f.Z(arguments[n],k.Oe)&&arguments[n]._l(this),i.push(arguments[n]),++t);return 0<t&&this.ql(i),t}return 0},F.if.prototype.Gl=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=null;if(f.Z(arguments[n],k.de)?s=arguments[n].Ll():w.Ut(arguments[n])&&(s=arguments[n]),null!=s)for(var h=0;h<s.length;++h)this.Kl(s[h])||(this.elements.push(s[h]),f.Z(s[h],k.Oe)&&s[h]._l(this),i.push(s[h]),++t)}return 0<t&&this.ql(i),t}return 0},F.if.prototype.Hl=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=this.Pl(arguments[n]);s<this.elements.length&&(this.elements.splice(s,1),f.Z(arguments[n],k.Oe)&&arguments[n].El(this),i.push(arguments[n]),++t)}return 0<t&&this.Xl(i),t}return 0},F.if.prototype.Ql=function(){if(0<arguments.length){for(var t=0,i=new Array,n=0;n<arguments.length;++n){var s=null;if(f.Z(arguments[n],k.de)?s=arguments[n].Ll():w.Ut(arguments[n])&&(s=arguments[n]),null!=s)for(var h=0;h<s.length;++h){var r=this.Pl(s[h]);r<this.elements.length&&(this.elements.splice(r,1),f.Z(s[h],k.Oe)&&s[h].El(this),i.push(s[h]),++t)}}return 0<t&&this.Xl(i),t}return 0},F.if.prototype.Vl=function(){return null==this.Zl?(this.Zl=new F.sl(z.Ze),1):0},F.if.prototype.Yl=function(){if(null==this.Zl)return 0;var t=this.Zl;return(arguments.length<=2||arguments[2])&&this.Wl(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},F.if.prototype.Wl=function(){return null!=this.Zl?(this.Zl=null,1):0},F.if.prototype.$l=function(){if(null!=this.Zl)this.Zl.ul(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.if.prototype.ql=function(){if(null!=this.Zl)this.Zl.el(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.el(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.if.prototype.tf=function(){if(null!=this.Zl)this.Zl.fl(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.fl(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},F.if.prototype.Xl=function(){if(null!=this.Zl)this.Zl.ol(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ol(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1};var E=new Object;E.st=new Object,E.st.sf="math.MATRIX_DIM_MISMATCH",E.st.nf="math.MATRIX_DIM_SIZE_MISMATCH",E.hf=new Object,E.hf.rf=1,E.hf.uf=2,E.hf.ef=3,E.hf.lf=4,E.hf.ff=5,E.hf.af=6,E.hf.cf=7,E.hf.wf=8,E.vf=new Object,E.vf.Le=new o.ht,E.vf.Nf=E.vf.Le.ut(),E.vf.bf=E.vf.Le.ut(),E.vf.yf=E.vf.Le.ut(),E.vf.mf=E.vf.Le.ut(),E.vf.Af=E.vf.Le.ut(),E.vf.df=E.vf.Le.ut(),E.vf.pf=E.vf.Le.ut(),E.vf.Of=E.vf.Le.ut(),E.vf.jf=E.vf.Le.ut(),E.vf.kf=E.vf.Le.ut(),E.vf.gf=E.vf.Le.ut(),E.vf.xf=E.vf.Le.ut(),E.vf.Mf=E.vf.Le.ut(),E._f=new Object,f.J(E._f,m.$h),E.Ef=new Object,f.J(E.Ef,E._f),E.Sf=new Object,f.J(E.Sf,m.$h),E.zf=new Object,f.J(E.zf,E.Sf),E.If=new Object,f.J(E.If),E.Ff=new Object,f.J(E.Ff,E.If),E.Df=new Object,f.J(E.Df,E.If),E.Tf=new Object,f.J(E.Tf,E.Df),E.Cf=new Object,f.J(E.Cf,E.If),E.Jf=new Object,f.J(E.Jf,E.If),E.Rf=new Object,f.J(E.Rf,E.If),E.Uf=new Object,f.J(E.Uf,E.Cf),E.Bf=new Object,f.J(E.Bf,E.Uf,E.Ff),E.Zf=new Object,f.J(E.Zf,E.Uf),E.Pf=new Object,f.J(E.Pf,E.Zf),E.Kf=new Object,f.J(E.Kf,E.Cf),E.Lf=new Object,f.J(E.Lf,E.Kf,E.Ff),E.qf=new Object,f.J(E.qf,E.Cf),E.Gf=new Object,f.J(E.Gf,E.qf,E.Ff),E.Hf=new Object,f.J(E.Hf,E.Jf,E.Rf),E.Xf=new Object,f.J(E.Xf,E.Jf,E.Rf);var T=new Object;T.Qf=++a.ft,T.Vf=++a.ft,T.Yf=++a.ft,T.Wf=++a.ft,T.$f=++a.ft,T.to=++a.ft,T.so=++a.ft,T.no=++a.ft,T.ho=++a.ft,T._f=new Object,f.J(T._f,E._f,g.$h),T.Ef=new Object,f.J(T.Ef,T._f,E.Ef),T.Sf=new Object,f.J(T.Sf,E.Sf,g.$h),T.zf=new Object,f.J(T.zf,T.Sf,E.zf),T.If=new Object,f.J(T.If,a.Ot,E.If),T.Df=new Object,f.J(T.Df,E.Df,T.If),T.Tf=new Object,f.J(T.Tf,T.Df,E.Tf),T.Uf=new Object,f.J(T.Uf,T.If,E.Uf),T.Bf=new Object,f.J(T.Bf,T.Uf,E.Bf),T.Zf=new Object,f.J(T.Zf,T.Uf,E.Zf),T.Pf=new Object,f.J(T.Pf,T.Zf,E.Pf),T.Kf=new Object,f.J(T.Kf,T.If,E.Kf),T.Lf=new Object,f.J(T.Lf,T.Kf,E.Lf),T.qf=new Object,f.J(T.qf,T.If,E.qf),T.Gf=new Object,f.J(T.Gf,T.qf,E.Gf),T.Hf=new Object,f.J(T.Hf,T.If,E.Hf),T.Xf=new Object,f.J(T.Xf,T.If,E.Xf);var D=new Object;D.ro=function(){M.Gr.call(this),0<arguments.length&&("number"==typeof arguments[0]||arguments[0]instanceof Number||f.Z(arguments[0],m.$h))?this._q=arguments[0]:this._q=0,this.operator=1<arguments.length?arguments[1]:E.hf.rf,2<arguments.length&&("number"==typeof arguments[2]||arguments[2]instanceof Number||f.Z(arguments[2],m.$h))?this.Iq=arguments[2]:this.Iq=0,f.Z(this._q,g.$h)&&this._q.Ti(g.Or,this.uo,this),f.Z(this.operator,g.nr)&&this.operator.Ti(g.Wh,this.eo,this),f.Z(this.Iq,g.$h)&&this.Iq.Ti(g.Or,this.lo,this),this.fo()},f._(D.ro,M.Gr,T._f),D.ro.prototype.destroy=function(){var t=null;return t=(M.Gr.prototype.destroy,M.Gr.prototype.destroy.apply(this,arguments)),f.Z(this._q,g.$h)&&this._q.Ci(g.Or,this.uo,this),f.Z(this.operator,g.nr)&&this.operator.Ci(g.Wh,this.eo,this),f.Z(this.Iq,g.$h)&&this.Iq.Ci(g.Or,this.lo,this),t+1},D.ro.prototype.uo=function(){this.Iq.Eu&&this.Iq.Eu()||this.operator.Zu&&this.operator.Zu()||this.fo()},D.ro.prototype.eo=function(){this._q.Eu&&this._q.Eu()||this.Iq.Eu&&this.Iq.Eu()||this.fo()},D.ro.prototype.lo=function(){this._q.Eu&&this._q.Eu()||this.operator.Zu&&this.operator.Zu()||this.fo()},D.ro.prototype.fo=function(){switch(this.operator.valueOf()){default:case E.hf.rf:this.Sr(this._q.valueOf()+this.Iq.valueOf());break;case E.hf.uf:this.Sr(this._q.valueOf()-this.Iq.valueOf());break;case E.hf.ef:this.Sr(this._q.valueOf()*this.Iq.valueOf());break;case E.hf.lf:this.Sr(this._q.valueOf()/this.Iq.valueOf());break;case E.hf.ff:this.Sr(this._q.valueOf()%this.Iq.valueOf());break;case E.hf.af:this.Sr(Math.pow(this._q.valueOf(),this.Iq.valueOf()));break;case E.hf.cf:this.Sr(Math.min(this._q.valueOf(),this.Iq.valueOf()));break;case E.hf.wf:this.Sr(Math.max(this._q.valueOf(),this.Iq.valueOf()))}},D.ro.prototype.oo=function(){return this._q},D.ro.prototype.ao=function(){return this.operator},D.ro.prototype.co=function(){return this.Iq},D.ro.prototype.wo=function(){if(arguments[0]===this._q)return 0;var t=this._q;return f.Z(this._q,g.$h)&&this._q.Ci(g.Or,this.uo,this),this._q=arguments[0],f.Z(this._q,g.$h)&&this._q.Ti(g.Or,this.uo,this),this.zs(new c.kt(T.so,t)),this.fo(),1},D.ro.prototype.vo=function(){if(arguments[0]===this.operator)return 0;var t=this.operator;return f.Z(this.operator,g.nr)&&this.operator.Ci(g.Wh,this.eo,this),this.operator=arguments[0],f.Z(this.operator,g.nr)&&this.operator.Ti(g.Wh,this.eo,this),this.zs(new c.kt(T.ho,t)),this.fo(),1},D.ro.prototype.No=function(){if(arguments[0]===this.Iq)return 0;var t=this.Iq;return f.Z(this.Iq,g.$h)&&this.Iq.Ci(g.Or,this.lo,this),this.Iq=arguments[0],f.Z(this.Iq,g.$h)&&this.Iq.Ti(g.Or,this.lo,this),this.zs(new c.kt(T.no,t)),this.fo(),1},D.ro.prototype.bo=function(){var t=arguments[0].valueOf();switch(this.operator.valueOf()){default:case E.hf.rf:return this.yo(t);case E.hf.uf:return this.mo(t);case E.hf.ef:return this.Ao(t);case E.hf.lf:return this.do(t);case E.hf.ff:return this.po(t);case E.hf.af:return this.Oo(t);case E.hf.cf:case E.hf.wf:return this.jo(t)}},D.ro.prototype.ko=function(t){return f.Z(this._q,g.$h)?this._q.Sr(t):this.wo(t)},D.ro.prototype.yo=function(t){return this.ko(this.valueOf()+t-this.Iq.valueOf())},D.ro.prototype.mo=function(t){return this.ko(this.valueOf()+t+this.Iq.valueOf())},D.ro.prototype.Ao=function(t){return this.ko((this.valueOf()+t)/this.Iq.valueOf())},D.ro.prototype.do=function(t){return this.ko((this.valueOf()+t)*this.Iq.valueOf())},D.ro.prototype.po=function(t){var i=this._q.valueOf(),n=this.Iq.valueOf();return this.ko(i+(n+(this.valueOf()+t)/Math.xo(i,n)))},D.ro.prototype.Oo=function(t){return this.ko(Math.pow(this.valueOf()+t,1/this.Iq.valueOf()))},D.ro.prototype.jo=function(t){return this.ko(this._q.valueOf()+t)},D.Mo=function(){M.Gr.call(this),0<arguments.length&&("number"==typeof arguments[0]||arguments[0]instanceof Number||f.Z(arguments[0],m.$h))?this._q=arguments[0]:this._q=0,this.operator=1<arguments.length?arguments[1]:E.hf.rf,2<arguments.length&&("number"==typeof arguments[2]||arguments[2]instanceof Number||f.Z(arguments[2],m.$h))?this.Iq=arguments[2]:this.Iq=0,f.Z(this._q,g.$h)&&this._q.Ti(g.Or,this.uo,this),f.Z(this.operator,g.nr)&&this.operator.Ti(g.Wh,this.eo,this),f.Z(this.Iq,g.$h)&&this.Iq.Ti(g.Or,this.lo,this),this.fo()},f._(D.Mo,M.Gr,T.Ef),D.Mo.prototype.destroy=function(){var t=null;return t=(M.Gr.prototype.destroy,M.Gr.prototype.destroy.apply(this,arguments)),f.Z(this._q,g.$h)&&this._q.Ci(g.Or,this.uo,this),f.Z(this.operator,g.nr)&&this.operator.Ci(g.Wh,this.eo,this),f.Z(this.Iq,g.$h)&&this.Iq.Ci(g.Or,this.lo,this),t+1},D.Mo.prototype.uo=function(){this.Iq.Eu&&this.Iq.Eu()||this.operator.Zu&&this.operator.Zu()||this.fo()},D.Mo.prototype.eo=function(){this._q.Eu&&this._q.Eu()||this.Iq.Eu&&this.Iq.Eu()||this.fo()},D.Mo.prototype.lo=function(){this._q.Eu&&this._q.Eu()||this.operator.Zu&&this.operator.Zu()||this.fo()},D.Mo.prototype.fo=function(){switch(this.operator.valueOf()){default:case E.hf.rf:this.Sr(this._q.valueOf()+this.Iq.valueOf());break;case E.hf.uf:this.Sr(this._q.valueOf()-this.Iq.valueOf());break;case E.hf.ef:this.Sr(this._q.valueOf()*this.Iq.valueOf());break;case E.hf.lf:this.Sr(this._q.valueOf()/this.Iq.valueOf());break;case E.hf.ff:this.Sr(this._q.valueOf()%this.Iq.valueOf());break;case E.hf.af:this.Sr(Math.pow(this._q.valueOf(),this.Iq.valueOf()));break;case E.hf.cf:this.Sr(Math.min(this._q.valueOf(),this.Iq.valueOf()));break;case E.hf.wf:this.Sr(Math.max(this._q.valueOf(),this.Iq.valueOf()))}},D.Mo.prototype.oo=function(){return this._q},D.Mo.prototype.ao=function(){return this.operator},D.Mo.prototype.co=function(){return this.Iq},D.Mo.prototype.wo=function(){if(arguments[0]===this._q)return 0;var t=this._q;return f.Z(this._q,g.$h)&&this._q.Ci(g.Or,this.uo,this),this._q=arguments[0],f.Z(this._q,g.$h)&&this._q.Ti(g.Or,this.uo,this),this.zs(new c.kt(T.so,t)),this.fo(),1},D.Mo.prototype.vo=function(){if(arguments[0]===this.operator)return 0;var t=this.operator;return f.Z(this.operator,g.nr)&&this.operator.Ci(g.Wh,this.eo,this),this.operator=arguments[0],f.Z(this.operator,g.nr)&&this.operator.Ti(g.Wh,this.eo,this),this.zs(new c.kt(T.ho,t)),this.fo(),1},D.Mo.prototype.No=function(){if(arguments[0]===this.Iq)return 0;var t=this.Iq;return f.Z(this.Iq,g.$h)&&this.Iq.Ci(g.Or,this.lo,this),this.Iq=arguments[0],f.Z(this.Iq,g.$h)&&this.Iq.Ti(g.Or,this.lo,this),this.zs(new c.kt(T.no,t)),this.fo(),1},D.Mo.prototype.bo=function(){var t=arguments[0].valueOf();switch(this.operator.valueOf()){default:case E.hf.rf:return this.yo(t);case E.hf.uf:return this.mo(t);case E.hf.ef:return this.Ao(t);case E.hf.lf:return this.do(t);case E.hf.ff:return this.po(t);case E.hf.af:return this.Oo(t);case E.hf.cf:case E.hf.wf:return this.jo(t)}},D.Mo.prototype.ko=function(t){return f.Z(this._q,g.$h)?this._q.Sr(t):this.wo(t)},D.Mo.prototype.yo=function(t){return this.ko(this.valueOf()+t-this.Iq.valueOf())},D.Mo.prototype.mo=function(t){return this.ko(this.valueOf()+t+this.Iq.valueOf())},D.Mo.prototype.Ao=function(t){return this.ko((this.valueOf()+t)/this.Iq.valueOf())},D.Mo.prototype.do=function(t){return this.ko((this.valueOf()+t)*this.Iq.valueOf())},D.Mo.prototype.po=function(t){var i=this._q.valueOf(),n=this.Iq.valueOf();return this.ko(i+(n+(this.valueOf()+t)/Math.xo(i,n)))},D.Mo.prototype.Oo=function(t){return this.ko(Math.pow(this.valueOf()+t,1/this.Iq.valueOf()))},D.Mo.prototype.jo=function(t){return this.ko(this._q.valueOf()+t)},D._o=function(){M.Gr.call(this,arguments),0<arguments.length&&("number"==typeof arguments[0]||arguments[0]instanceof Number||f.Z(arguments[0],m.$h))?this.zq=arguments[0]:this.zq=0,this.Eo=1,this.origin=0,f.Z(this.zq,g.$h)&&this.zq.Ti(g.Or,this.So,this)},f._(D._o,M.Gr,T.Sf),D._o.prototype.destroy=function(){var t=null;return t=(M.Gr.prototype.destroy,M.Gr.prototype.destroy.apply(this,arguments)),f.Z(this.Eo,g.$h)&&this.Eo.Ci(g.Or,this.zo,this),f.Z(this.origin,g.$h)&&this.origin.Ci(g.Or,this.Io,this),f.Z(this.zq,g.$h)&&this.zq.Ci(g.Or,this.So,this),t+1},D._o.prototype.zo=function(){this.zq.Eu&&this.zq.Eu()||this.origin.Eu&&this.origin.Eu()||this.fo()},D._o.prototype.So=function(){this.Eo.Eu&&this.Eo.Eu()||this.origin.Eu&&this.origin.Eu()||this.fo()},D._o.prototype.Io=function(){this.zq.Eu&&this.zq.Eu()||this.Eo.Eu&&this.Eo.Eu()||this.fo()},D._o.prototype.fo=function(){this.Sr(this.Eo.valueOf()*this.zq.valueOf()+this.origin.valueOf())},D._o.prototype.Fo=function(){return this.Eo},D._o.prototype.Do=function(){return this.origin},D._o.prototype.To=function(){return this.zq},D._o.prototype.Co=function(){if(arguments[0]===this.Eo)return 0;var t=this.Eo;return f.Z(this.Eo,g.$h)&&this.Eo.Ci(g.Or,this.zo,this),this.Eo=arguments[0],f.Z(this.Eo,g.$h)&&this.Eo.Ti(g.Or,this.zo,this),this.zs(new c.kt(T.Vf,t)),this.fo(),1},D._o.prototype.Jo=function(){if(arguments[0]===this.zq)return 0;var t=this.zq;return f.Z(this.zq,g.$h)&&this.zq.Ci(g.Or,this.So,this),this.zq=arguments[0],f.Z(this.zq,g.$h)&&this.zq.Ti(g.Or,this.So,this),this.zs(new c.kt(T.Wf,t)),this.fo(),1},D._o.prototype.Ro=function(){if(arguments[0]===this.origin)return 0;var t=this.origin;return f.Z(this.origin,g.$h)&&this.origin.Ci(g.Or,this.Io,this),this.origin=arguments[0],f.Z(this.origin,g.$h)&&this.origin.Ti(g.Or,this.Io,this),this.zs(new c.kt(T.Yf,t)),this.fo(),1},D.Uo=function(){M.Gr.call(this,arguments),0<arguments.length&&("number"==typeof arguments[0]||arguments[0]instanceof Number||f.Z(arguments[0],m.$h))?this.zq=arguments[0]:this.zq=0,this.Eo=1,this.origin=0,f.Z(this.zq,g.$h)&&this.zq.Ti(g.Or,this.So,this)},f._(D.Uo,M.Gr,T.zf),D.Uo.prototype.destroy=function(){var t=null;return t=(M.Gr.prototype.destroy,M.Gr.prototype.destroy.apply(this,arguments)),f.Z(this.Eo,g.$h)&&this.Eo.Ci(g.Or,this.zo,this),f.Z(this.origin,g.$h)&&this.origin.Ci(g.Or,this.Io,this),f.Z(this.zq,g.$h)&&this.zq.Ci(g.Or,this.So,this),t+1},D.Uo.prototype.zo=function(){this.zq.Eu&&this.zq.Eu()||this.origin.Eu&&this.origin.Eu()||this.fo()},D.Uo.prototype.So=function(){this.Eo.Eu&&this.Eo.Eu()||this.origin.Eu&&this.origin.Eu()||this.fo()},D.Uo.prototype.Io=function(){this.zq.Eu&&this.zq.Eu()||this.Eo.Eu&&this.Eo.Eu()||this.fo()},D.Uo.prototype.fo=function(){this.Sr(this.Eo.valueOf()*this.zq.valueOf()+this.origin.valueOf())},D.Uo.prototype.Fo=function(){return this.Eo},D.Uo.prototype.Do=function(){return this.origin},D.Uo.prototype.To=function(){return this.zq},D.Uo.prototype.Co=function(){if(arguments[0]===this.Eo)return 0;var t=this.Eo;return f.Z(this.Eo,g.$h)&&this.Eo.Ci(g.Or,this.zo,this),this.Eo=arguments[0],f.Z(this.Eo,g.$h)&&this.Eo.Ti(g.Or,this.zo,this),this.zs(new c.kt(T.Vf,t)),this.fo(),1},D.Uo.prototype.Jo=function(){if(arguments[0]===this.zq)return 0;var t=this.zq;return f.Z(this.zq,g.$h)&&this.zq.Ci(g.Or,this.So,this),this.zq=arguments[0],f.Z(this.zq,g.$h)&&this.zq.Ti(g.Or,this.So,this),this.zs(new c.kt(T.Wf,t)),this.fo(),1},D.Uo.prototype.Ro=function(){if(arguments[0]===this.origin)return 0;var t=this.origin;return f.Z(this.origin,g.$h)&&this.origin.Ci(g.Or,this.Io,this),this.origin=arguments[0],f.Z(this.origin,g.$h)&&this.origin.Ti(g.Or,this.Io,this),this.zs(new c.kt(T.Yf,t)),this.fo(),1},D.Bo=function(t,i){c.kt.call(this,T.Qf,t),this.flags=i},f._(D.Bo,c.kt),D.Bo.prototype.Zo=function(){return this.flags},D.Bo.prototype.Po=function(){this.flags=this.flags|arguments[0]},D.Ko=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.mr(arguments)[0]:new Array(0,0),this.Go=null},f._(D.Ko,c.Et,T.Uf),D.Ko.prototype.Ho=function(){return 1},D.Ko.prototype.Xo=function(){var t=new Array(1);return t[0]=2,t},D.Ko.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.Ko.prototype.Vo=function(){return 0==arguments[0]?2:0},D.Ko.prototype.Yo=function(){return 2},D.Ko.prototype.Wo=function(){throw"not implemented yet"},D.Ko.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1])},D.Ko.prototype.valueOf=function(){return this.values.concat()},D.Ko.prototype.ta=function(){return this.values[0]},D.Ko.prototype.ia=function(){return this.values[1]},D.Ko.prototype.Er=function(){return this.Sr.apply(this,p.mr(arguments))},D.Ko.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.Ko.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.Ko.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.Ko.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.Ko.prototype.ea=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=2;i<arguments.length;++i)t[i-1]=arguments[i];return this.Sr.apply(this,t)},D.Ko.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.Ko.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.Ko.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;return(arguments.length<=2||arguments[2])&&this.oa(),this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.Ko.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.Ko.prototype.aa=function(){return this.Lo},D.Ko.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.wa=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.mr(arguments)[0]:new Array(0,0),this.Go=null},f._(D.wa,c.Et,T.Bf),D.wa.prototype.Ho=function(){return 1},D.wa.prototype.Xo=function(){var t=new Array(1);return t[0]=2,t},D.wa.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.wa.prototype.Vo=function(){return 0==arguments[0]?2:0},D.wa.prototype.Yo=function(){return 2},D.wa.prototype.Wo=function(){throw"not implemented yet"},D.wa.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1])},D.wa.prototype.valueOf=function(){return this.values.concat()},D.wa.prototype.ta=function(){return this.values[0]},D.wa.prototype.ia=function(){return this.values[1]},D.wa.prototype.Er=function(){return this.Sr.apply(this,p.mr(arguments))},D.wa.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.wa.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.wa.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.wa.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.wa.prototype.ea=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=2;i<arguments.length;++i)t[i-1]=arguments[i];return this.Sr.apply(this,t)},D.wa.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.wa.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.wa.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;return(arguments.length<=2||arguments[2])&&this.oa(),this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.wa.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.wa.prototype.aa=function(){return this.Lo},D.wa.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.va=function(){D.Ko.call(this),this.Na=0<arguments.length?arguments[0]:0,this.ba=1<arguments.length?arguments[1]:0,f.Z(this.Na,g.$h)&&this.Na.Ti(g.Or,this.ya,this),f.Z(this.ba,g.$h)&&this.ba.Ti(g.Or,this.ma,this),this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},f._(D.va,D.Ko,T.Zf),D.va.prototype.destroy=function(){var t=null;return t=(D.Ko.prototype.destroy,D.Ko.prototype.destroy.apply(this,arguments)),f.Z(this.Na,g.$h)&&this.Na.Ci(g.Or,this.ya,this),f.Z(this.ba,g.$h)&&this.ba.Ci(g.Or,this.ma,this),t+1},D.va.prototype.ya=function(){this.ba.Eu&&this.ba.Eu()?this.na(this.Na.valueOf()):this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},D.va.prototype.ma=function(){this.Na.Eu&&this.Na.Eu()?this.ra(this.ba.valueOf()):this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},D.va.prototype.Aa=function(){if(arguments[0]===this.Na)return 0;var t=this.Na;return f.Z(this.Na,g.$h)&&this.Na.Ci(g.Or,this.ya,this),this.Na=arguments[0],f.Z(this.Na,g.$h)&&this.Na.Ti(g.Or,this.ya,this),this.zs(new c.kt(T.$f,t)),this.na(this.Na.valueOf()),1},D.va.prototype.da=function(){return this.Na},D.va.prototype.pa=function(){if(arguments[0]===this.ba)return 0;var t=this.ba;return f.Z(this.ba,g.$h)&&this.ba.Ci(g.Or,this.ma,this),this.ba=arguments[0],f.Z(this.ba,g.$h)&&this.ba.Ti(g.Or,this.ma,this),this.zs(new c.kt(T.to,t)),this.ra(this.ba.valueOf()),1},D.va.prototype.Oa=function(){return this.ba},D.ja=function(){D.Ko.call(this),this.Na=0<arguments.length?arguments[0]:0,this.ba=1<arguments.length?arguments[1]:0,f.Z(this.Na,g.$h)&&this.Na.Ti(g.Or,this.ya,this),f.Z(this.ba,g.$h)&&this.ba.Ti(g.Or,this.ma,this),this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},f._(D.ja,D.Ko,T.Pf),D.ja.prototype.destroy=function(){var t=null;return t=(D.Ko.prototype.destroy,D.Ko.prototype.destroy.apply(this,arguments)),f.Z(this.Na,g.$h)&&this.Na.Ci(g.Or,this.ya,this),f.Z(this.ba,g.$h)&&this.ba.Ci(g.Or,this.ma,this),t+1},D.ja.prototype.ya=function(){this.ba.Eu&&this.ba.Eu()?this.na(this.Na.valueOf()):this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},D.ja.prototype.ma=function(){this.Na.Eu&&this.Na.Eu()?this.ra(this.ba.valueOf()):this.Sr(new Array(this.Na.valueOf(),this.ba.valueOf()))},D.ja.prototype.Aa=function(){if(arguments[0]===this.Na)return 0;var t=this.Na;return f.Z(this.Na,g.$h)&&this.Na.Ci(g.Or,this.ya,this),this.Na=arguments[0],f.Z(this.Na,g.$h)&&this.Na.Ti(g.Or,this.ya,this),this.zs(new c.kt(T.$f,t)),this.na(this.Na.valueOf()),1},D.ja.prototype.da=function(){return this.Na},D.ja.prototype.pa=function(){if(arguments[0]===this.ba)return 0;var t=this.ba;return f.Z(this.ba,g.$h)&&this.ba.Ci(g.Or,this.ma,this),this.ba=arguments[0],f.Z(this.ba,g.$h)&&this.ba.Ti(g.Or,this.ma,this),this.zs(new c.kt(T.to,t)),this.ra(this.ba.valueOf()),1},D.ja.prototype.Oa=function(){return this.ba},D.ka=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.Ar(arguments)[0]:new Array(0,0,0),this.Go=null},f._(D.ka,c.Et,T.Kf),D.ka.prototype.Ho=function(){return 1},D.ka.prototype.Xo=function(){var t=new Array(1);return t[0]=3,t},D.ka.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.ka.prototype.Vo=function(){return 0==arguments[0]?3:0},D.ka.prototype.Yo=function(){return 3},D.ka.prototype.Wo=function(){throw"not implemented yet"},D.ka.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2])},D.ka.prototype.valueOf=function(){return this.values.concat()},D.ka.prototype.ta=function(){return this.values[0]},D.ka.prototype.ia=function(){return this.values[1]},D.ka.prototype.ga=function(){return this.values[2]},D.ka.prototype.Er=function(){return this.Sr.apply(this,p.Ar(arguments))},D.ka.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.ka.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.ka.prototype.xa=function(){return this.Ma.apply(this,p.br(arguments))},D.ka.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.ka.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.ka.prototype.Ma=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){var t=this.values.concat();return this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Mf),1}return 0},D.ka.prototype._a=function(){var t=new Array(arguments.length-2);t[0]=new Array(arguments[0],arguments[1],arguments[2]);for(var i=3;i<arguments.length;++i)t[i-2]=arguments[i];return this.Sr.apply(this,t)},D.ka.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.Mf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.ka.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.ka.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;(arguments.length<=2||arguments[2])&&this.oa();t.Zr();return this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.ka.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.ka.prototype.aa=function(){return this.Lo},D.ka.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.Ea=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.Ar(arguments)[0]:new Array(0,0,0),this.Go=null},f._(D.Ea,c.Et,T.Lf),D.Ea.prototype.Ho=function(){return 1},D.Ea.prototype.Xo=function(){var t=new Array(1);return t[0]=3,t},D.Ea.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.Ea.prototype.Vo=function(){return 0==arguments[0]?3:0},D.Ea.prototype.Yo=function(){return 3},D.Ea.prototype.Wo=function(){throw"not implemented yet"},D.Ea.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2])},D.Ea.prototype.valueOf=function(){return this.values.concat()},D.Ea.prototype.ta=function(){return this.values[0]},D.Ea.prototype.ia=function(){return this.values[1]},D.Ea.prototype.ga=function(){return this.values[2]},D.Ea.prototype.Er=function(){return this.Sr.apply(this,p.Ar(arguments))},D.Ea.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.Ea.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.Ea.prototype.xa=function(){return this.Ma.apply(this,p.br(arguments))},D.Ea.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.Ea.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.Ea.prototype.Ma=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){var t=this.values.concat();return this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Mf),1}return 0},D.Ea.prototype._a=function(){var t=new Array(arguments.length-2);t[0]=new Array(arguments[0],arguments[1],arguments[2]);for(var i=3;i<arguments.length;++i)t[i-2]=arguments[i];return this.Sr.apply(this,t)},D.Ea.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.Mf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.Ea.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.Ea.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;(arguments.length<=2||arguments[2])&&this.oa();t.Zr();return this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.Ea.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.Ea.prototype.aa=function(){return this.Lo},D.Ea.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.Sa=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.dr(arguments)[0]:new Array(0,0,0,0),this.Go=null},f._(D.Sa,c.Et,T.qf),D.Sa.prototype.Ho=function(){return 1},D.Sa.prototype.Xo=function(){var t=new Array(1);return t[0]=4,t},D.Sa.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.Sa.prototype.Vo=function(){return 0==arguments[0]?4:0},D.Sa.prototype.Yo=function(){return 4},D.Sa.prototype.Wo=function(){throw"not implemented yet"},D.Sa.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2]+this.values[3]*this.values[3])},D.Sa.prototype.valueOf=function(){return this.values.concat()},D.Sa.prototype.ta=function(){return this.values[0]},D.Sa.prototype.ia=function(){return this.values[1]},D.Sa.prototype.ga=function(){return this.values[2]},D.Sa.prototype.za=function(){return this.values[3]},D.Sa.prototype.Er=function(){return this.Sr.apply(this,p.dr(arguments))},D.Sa.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.Sa.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.Sa.prototype.xa=function(){return this.Ma.apply(this,p.br(arguments))},D.Sa.prototype.Ia=function(){return this.Fa.apply(this,p.br(arguments))},D.Sa.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.Sa.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.Sa.prototype.Ma=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){var t=this.values.concat();return this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Mf),1}return 0},D.Sa.prototype.Fa=function(){if(isNaN(arguments[0])&&isNaN(this.values[3]))return 0;if(isNaN(arguments[0])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0])){var t=this.values.concat();return this.values[3]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.kf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.kf),1}return 0},D.Sa.prototype.Da=function(){var t=new Array(arguments.length-2);t[0]=new Array(arguments[0],arguments[1],arguments[2],arguments[3]);for(var i=4;i<arguments.length;++i)t[i-3]=arguments[i];return this.Sr.apply(this,t)},D.Sa.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.Mf),isNaN(arguments[0][3])&&isNaN(this.values[3])||(isNaN(arguments[0][3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0][3]))&&(this.values[3]=arguments[0][3],t|=E.vf.kf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.Sa.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.Sa.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;return(arguments.length<=1||arguments[1])&&this.oa(),this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.Sa.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.Sa.prototype.aa=function(){return this.Lo},D.Sa.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.Ta=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.dr(arguments)[0]:new Array(0,0,0,0),this.Go=null},f._(D.Ta,c.Et,T.Gf),D.Ta.prototype.Ho=function(){return 1},D.Ta.prototype.Xo=function(){var t=new Array(1);return t[0]=4,t},D.Ta.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.Ta.prototype.Vo=function(){return 0==arguments[0]?4:0},D.Ta.prototype.Yo=function(){return 4},D.Ta.prototype.Wo=function(){throw"not implemented yet"},D.Ta.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2]+this.values[3]*this.values[3])},D.Ta.prototype.valueOf=function(){return this.values.concat()},D.Ta.prototype.ta=function(){return this.values[0]},D.Ta.prototype.ia=function(){return this.values[1]},D.Ta.prototype.ga=function(){return this.values[2]},D.Ta.prototype.za=function(){return this.values[3]},D.Ta.prototype.Er=function(){return this.Sr.apply(this,p.dr(arguments))},D.Ta.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},D.Ta.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},D.Ta.prototype.xa=function(){return this.Ma.apply(this,p.br(arguments))},D.Ta.prototype.Ia=function(){return this.Fa.apply(this,p.br(arguments))},D.Ta.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf),1}return 0},D.Ta.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf),1}return 0},D.Ta.prototype.Ma=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){var t=this.values.concat();return this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Mf),1}return 0},D.Ta.prototype.Fa=function(){if(isNaN(arguments[0])&&isNaN(this.values[3]))return 0;if(isNaN(arguments[0])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0])){var t=this.values.concat();return this.values[3]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.kf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.kf),1}return 0},D.Ta.prototype.Da=function(){var t=new Array(arguments.length-2);t[0]=new Array(arguments[0],arguments[1],arguments[2],arguments[3]);for(var i=4;i<arguments.length;++i)t[i-3]=arguments[i];return this.Sr.apply(this,t)},D.Ta.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.gf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.xf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.Mf),isNaN(arguments[0][3])&&isNaN(this.values[3])||(isNaN(arguments[0][3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0][3]))&&(this.values[3]=arguments[0][3],t|=E.vf.kf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.Ta.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.Ta.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;return(arguments.length<=1||arguments[1])&&this.oa(),this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.Ta.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.Ta.prototype.aa=function(){return this.Lo},D.Ta.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},D.Ca=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.dr(arguments)[0]:new Array(1,0,0,1)},f._(D.Ca,c.Et,T.Hf,E.Ff),D.Ca.prototype.Ho=function(){return 2},D.Ca.prototype.Xo=function(){var t=new Array(2);return t[0]=2,t[1]=2,t},D.Ca.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},D.Ca.prototype.Vo=function(){return 0==arguments[0]||1==arguments[0]?2:0},D.Ca.prototype.Yo=function(){return 4},D.Ca.prototype.Wo=function(){throw"not implemented yet"},D.Ca.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2]+this.values[3]*this.values[3])},D.Ca.prototype.Ja=function(){return O.Vh(this.values)},D.Ca.prototype.Ra=function(){return O.Yh(this.values)},D.Ca.prototype.valueOf=function(){return this.values.concat()},D.Ca.prototype.Ua=function(){return this.values[0]},D.Ca.prototype.Ba=function(){return this.values[1]},D.Ca.prototype.Za=function(){return this.values[2]},D.Ca.prototype.Pa=function(){return this.values[3]},D.Ca.prototype.Er=function(){return this.Sr.apply(this,p.dr(arguments))},D.Ca.prototype.Ka=function(){return this.La.apply(this,p.br(arguments))},D.Ca.prototype.qa=function(){return this.Ga.apply(this,p.br(arguments))},D.Ca.prototype.Ha=function(){return this.Xa.apply(this,p.br(arguments))},D.Ca.prototype.Qa=function(){return this.Va.apply(this,p.br(arguments))},D.Ca.prototype.La=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){var t=this.values.concat();return this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Nf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Nf),1}return 0},D.Ca.prototype.Ga=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){var t=this.values.concat();return this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.bf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.bf),1}return 0},D.Ca.prototype.Xa=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){var t=this.values.concat();return this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.yf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.yf),1}return 0},D.Ca.prototype.Va=function(){if(isNaN(arguments[0])&&isNaN(this.values[3]))return 0;if(isNaN(arguments[0])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0])){var t=this.values.concat();return this.values[3]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.mf),1}return 0},D.Ca.prototype.Da=function(){var t=new Array(arguments.length-2);t[0]=new Array(arguments[0],arguments[1],arguments[2],arguments[3]);for(var i=4;i<arguments.length;++i)t[i-3]=arguments[i];return this.Sr.apply(this,t)},D.Ca.prototype.Sr=function(){var t=0,i=this.values.concat();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.Nf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.bf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.yf),isNaN(arguments[0][3])&&isNaN(this.values[3])||(isNaN(arguments[0][3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0][3]))&&(this.values[3]=arguments[0][3],t|=E.vf.mf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},D.Ca.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.values.concat(),0),1):0},D.Ca.prototype.fa=function(){if(null==this.Lo)return-1;var t=this.Lo;return(arguments.length<=1||arguments[1])&&this.oa(),this.qo||0!=t.Zo()||1<arguments.length&&arguments[1]?(this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1):0},D.Ca.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},D.Ca.prototype.aa=function(){return this.Lo},D.Ca.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())};var J=new Object;J.Ya=new Object,f.J(J.Ya),J.Wa=new Object,f.J(J.Wa,J.Ya),J.$a=new Object,f.J(J.$a,J.Ya),J.tc=new Object,f.J(J.tc,J.$a),J.ic=new Object,f.J(J.ic,J.Ya),J.sc=new Object,f.J(J.sc),J.nc=new Object,f.J(J.nc,J.sc),J.hc=new Object,f.J(J.hc,J.nc),J.rc=new Object,f.J(J.rc,J.sc),J.uc=new Object,f.J(J.uc),J.ec=new Object,f.J(J.ec,J.uc),J.lc=new Object,f.J(J.lc,J.ec),J.fc=new Object,f.J(J.fc),J.oc=new Object,f.J(J.oc,J.uc);var R=new Object;R.ac=++a.ft,R.cc=++a.ft,R.wc=++a.ft,R.vc=new Object,R.vc.Le=new o.ht,R.vc.Nc=R.vc.Le.ut(),R.sc=new Object,f.J(R.sc,J.sc,a.Ot),R.nc=new Object,f.J(R.nc,J.nc,R.sc),R.uc=new Object,f.J(R.uc,J.uc,a.Ot),R.ec=new Object,f.J(R.ec,J.ec,R.uc),R.bc=new Object,f.J(R.bc),R.jc=R.ac,R.kc=++a.ft,R.gc=++a.ft,R.xc=++a.ft,R.Mc=++a.ft,R._c=++a.ft,R.Ec=R.vc,R.Ec.Sc=R.Ec.Le.ut(),R.Ec.zc=R.Ec.Le.ut(),R.Ic=new Object,R.Ic.Le=new o.ht,R.Ic.Fc=R.Ic.Le.ut(),R.Ic.Dc=R.Ic.Le.ut(),R.Ya=new Object,f.J(R.Ya,J.Ya,a.Ot),R.$a=new Object,f.J(R.$a,R.Ya,J.$a),R.ic=new Object,f.J(R.ic,R.Ya,J.ic),R.hc=new Object,f.J(R.hc,J.hc,R.nc),R.rc=new Object,f.J(R.rc,J.rc,R.sc),R.lc=new Object,f.J(R.lc,J.lc,R.ec),R.Tc=new Object,f.J(R.Tc,R.bc),R.oc=new Object,f.J(R.oc,J.oc,R.uc),R.Cc=new Object,f.J(R.Cc);var Z=new Object;Z.Pb=new Object,Z.Pb.Kb=1,Z.Pb.Lb=2,Z.qb=new Object,f.J(Z.qb,E.Rf,E.Jf),Z.Gb=new Object,f.J(Z.Gb,Z.qb,E.Xf),Z.Hb=new Object,f.J(Z.Hb,Z.Gb),Z.Ya=new Object,f.J(Z.Ya),Z.$a=new Object,f.J(Z.$a,Z.Ya),Z.tc=new Object,f.J(Z.tc,Z.$a),Z.ic=new Object,f.J(Z.ic,Z.Ya),Z.Xb=new Object,f.J(Z.Xb,Z.ic);var C=new Object;C.Qb=function(){var t=2<arguments.length&&null!=arguments[2]?arguments[2]:new Array(2);t[0]=arguments[0][0],t[1]=arguments[0][1];arguments[1];if(!(isNaN(arguments[1])||O.Zh(arguments[1],0)<=0)){var i=t[0]/arguments[1],n=t[1]*arguments[1];n<i?t[1]=i:t[0]=n}return t},C.Vb=function(){var t=2<arguments.length&&null!=arguments[2]?arguments[2]:new Array(2);t[0]=arguments[0][0],t[1]=arguments[0][1];arguments[1];if(!(isNaN(arguments[1])||O.Zh(arguments[1],0)<=0)){var i=new Array(t[1]*arguments[1],t[0]/arguments[1]),n=O.Zh(i[0],t[0]);O.Zh(i[1],t[1]);n<0?t[0]=i[0]:t[1]=i[1]}return t},C.Yb=function(){var t=2<arguments.length?arguments[2]:new Array(2);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][1]+arguments[0][4],t[1]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][1]+arguments[0][5],t},C.Wb=function(){var t=2<arguments.length?arguments[2]:new Array(2);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][1],t[1]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][1],t},C.$b=function(){var t=2<arguments.length?arguments[2]:new Array(6);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][2],t[1]=arguments[0][0]*arguments[1][1]+arguments[0][1]*arguments[1][3],t[2]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][2],t[3]=arguments[0][2]*arguments[1][1]+arguments[0][3]*arguments[1][3],t[4]=arguments[0][0]*arguments[1][4]+arguments[0][1]*arguments[1][5]+arguments[0][4],t[5]=arguments[0][2]*arguments[1][4]+arguments[0][3]*arguments[1][5]+arguments[0][5],t},C.ty=function(){return arguments[0][0]*arguments[0][3]-arguments[0][1]*arguments[0][2]},C.iy=function(){var t=2<arguments.length?arguments[2]:C.ty(arguments[0]);if(0==O.Zh(t,0))return null;var i=1<arguments.length?arguments[1]:new Array(6);return i[0]=arguments[0][3]/t,i[1]=-arguments[0][1]/t,i[2]=-arguments[0][2]/t,i[3]=arguments[0][0]/t,i[4]=(arguments[0][1]*arguments[0][5]-arguments[0][3]*arguments[0][4])/t,i[5]=(arguments[0][2]*arguments[0][4]-arguments[0][0]*arguments[0][5])/t,i},C.sy=function(t,i,n){var s=new Array(0,0),h=new Array(t[0],0),r=new Array(t[0],t[1]),e=new Array(0,t[1]),u=new Array(n[0],n[1],n[2],n[3],i[0],i[1]),f=C.Yb(u,s),o=C.Yb(u,h),a=C.Yb(u,r),c=C.Yb(u,e),l=new Array(Math.min(f[0],o[0],a[0],c[0]),Math.min(f[1],o[1],a[1],c[1]),Math.max(f[0],o[0],a[0],c[0]),Math.max(f[1],o[1],a[1],c[1])),w=new Array(u[0],u[1],u[2],u[3],f[0]-l[0],f[1]-l[1]);return new Array(l,w)},C.ny=function(t,i,n){var s=3<arguments.length&&w.Ut(arguments[3])?arguments[3]:new Array(4),h=new Array(0,0),r=new Array(t[0],0),e=new Array(t[0],t[1]),u=new Array(0,t[1]),f=new Array(n[0],n[1],n[2],n[3],i[0],i[1]),o=C.Yb(f,h),a=C.Yb(f,r),c=C.Yb(f,e),l=C.Yb(f,u);return s[0]=Math.min(o[0],a[0],c[0],l[0]),s[1]=Math.min(o[1],a[1],c[1],l[1]),s[2]=Math.max(o[0],a[0],c[0],l[0]),s[3]=Math.max(o[1],a[1],c[1],l[1]),s},C.hy=function(t,i){var n=t[0]/t[1],s=i[0]/i[1],h=0,r=0,e=i[0],u=i[1];return n<s?(e=i[1]*n,r=(i[0]-e)/2):(u=i[0]/n,h=(i[1]-u)/2),new Array(r,h,e,u)};var B=new Object;B.uy=++a.ft,B.ey=++a.ft,B.ly=++a.ft,B.oy=++a.ft,B.ay=++a.ft,B.wy=++a.ft,B.vy=++a.ft,B.Ny=++a.ft,B.qb=new Object,f.J(B.qb,Z.qb,T.If),B.Gb=new Object,f.J(B.Gb,Z.Gb,B.qb,T.Xf),B.Ya=new Object,f.J(B.Ya,Z.Ya),B.$a=new Object,f.J(B.$a,B.Ya,Z.$a),B.ic=new Object,f.J(B.ic,B.Ya,Z.ic);var q=new Object;q.by=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.pr(arguments)[0]:new Array(1,0,0,1,0,0)},f._(q.by,c.Et,B.Gb),q.by.prototype.Ho=function(){return 2},q.by.prototype.Xo=function(){var t=new Array(2);return t[0]=3,t[1]=3,t},q.by.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},q.by.prototype.Vo=function(){return 0==arguments[0]||1==arguments[0]?3:0},q.by.prototype.Yo=function(){return 9},q.by.prototype.Wo=function(){throw"not implemented yet"},q.by.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2]+this.values[3]*this.values[3]+this.values[4]*this.values[4]+this.values[5]*this.values[5])},q.by.prototype.Ja=function(){return C.ty(this.values)},q.by.prototype.Ra=function(){return C.iy(this.values)},q.by.prototype.valueOf=function(){switch(0<arguments.length?arguments[0]:Z.Pb.Kb){case Z.Pb.Kb:return new Array(this.values[0],this.values[1],this.values[4],this.values[2],this.values[3],this.values[5],0,0,1);default:return this.values.concat()}},q.by.prototype.Ua=function(){return this.values[0]},q.by.prototype.Ba=function(){return this.values[1]},q.by.prototype.Za=function(){return this.values[2]},q.by.prototype.Pa=function(){return this.values[3]},q.by.prototype.ta=function(){return this.values[4]},q.by.prototype.ia=function(){return this.values[5]},q.by.prototype.yy=function(){return new Array(this.values[0],this.values[1],this.values[2],this.values[3])},q.by.prototype.my=function(){return new Array(this.values[4],this.values[5])},q.by.prototype.Ka=function(){return this.La.apply(this,p.br(arguments))},q.by.prototype.qa=function(){return this.Ga.apply(this,p.br(arguments))},q.by.prototype.Ha=function(){return this.Xa.apply(this,p.br(arguments))},q.by.prototype.Qa=function(){return this.Va.apply(this,p.br(arguments))},q.by.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},q.by.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},q.by.prototype.La=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Nf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Nf)}else this.values[0]=arguments[0];return 1}return 0},q.by.prototype.Ga=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.bf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.bf)}else this.values[1]=arguments[0];return 1}return 0},q.by.prototype.Xa=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.yf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.yf)}else this.values[2]=arguments[0];return 1}return 0},q.by.prototype.Va=function(){if(isNaN(arguments[0])&&isNaN(this.values[3]))return 0;if(isNaN(arguments[0])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[3]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.mf)}else this.values[3]=arguments[0];return 1}return 0},q.by.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[4]))return 0;if(isNaN(arguments[0])||isNaN(this.values[4])||0!=O.Zh(this.values[4],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[4]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf)}else this.values[4]=arguments[0];return 1}return 0},q.by.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[5]))return 0;if(isNaN(arguments[0])||isNaN(this.values[5])||0!=O.Zh(this.values[5],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[5]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf)}else this.values[5]=arguments[0];return 1}return 0},q.by.prototype.py=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);for(var i=6;i<arguments.length;++i)t[i-5]=arguments[i];return this.Oy.apply(this,t)},q.by.prototype.Oy=function(){var t=0,i=this.Ay();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.Nf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.bf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.yf),isNaN(arguments[0][3])&&isNaN(this.values[3])||(isNaN(arguments[0][3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0][3]))&&(this.values[3]=arguments[0][3],t|=E.vf.mf),isNaN(arguments[0][4])&&isNaN(this.values[4])||(isNaN(arguments[0][4])||isNaN(this.values[4])||0!=O.Zh(this.values[4],arguments[0][4]))&&(this.values[4]=arguments[0][4],t|=E.vf.gf),isNaN(arguments[0][5])&&isNaN(this.values[5])||(isNaN(arguments[0][5])||isNaN(this.values[5])||0!=O.Zh(this.values[5],arguments[0][5]))&&(this.values[5]=arguments[0][5],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.by.prototype.jy=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=2;i<arguments.length;++i)t[i-1]=arguments[i];return this.ky.apply(this,t)},q.by.prototype.ky=function(){var t=0,i=this.Ay();return 0!=O.Zh(this.values[4],arguments[0][0])&&(this.values[4]=arguments[0][0],t|=E.vf.gf),0!=O.Zh(this.values[5],arguments[0][1])&&(this.values[5]=arguments[0][1],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.by.prototype.gy=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=4;i<arguments.length;++i)t[i-3]=arguments[i];return this.ky.apply(this,t)},q.by.prototype.xy=function(){var t=0,i=this.Ay();return 0!=O.Zh(this.values[0],arguments[0][0])&&(this.values[0]=arguments[0][0],t|=E.vf.Nf),0!=O.Zh(this.values[1],arguments[0][1])&&(this.values[1]=arguments[0][1],t|=E.vf.bf),0!=O.Zh(this.values[2],arguments[0][2])&&(this.values[2]=arguments[0][2],t|=E.vf.yf),0!=O.Zh(this.values[3],arguments[0][3])&&(this.values[3]=arguments[0][3],t|=E.vf.mf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.by.prototype.Ay=function(){var t=new Array(9);return t[0]=this.values[0],t[1]=this.values[1],t[2]=this.values[4],t[3]=this.values[2],t[4]=this.values[3],t[5]=this.values[5],t[6]=0,t[7]=0,t[8]=1,t},q.by.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.Ay(),0),1):0},q.by.prototype.fa=function(){if(null==this.Lo)return 0;var t=this.Lo;(arguments.length<=2||arguments[2])&&this.oa();t.Zr();return(this.qo||0!=t.Zo()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},q.by.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},q.by.prototype.aa=function(){return this.Lo},q.by.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},q.My=function(){c.Et.call(this),this.Lo=null,this.qo=!1,this.values=0<arguments.length?p.pr(arguments)[0]:new Array(1,0,0,1,0,0)},f._(q.My,c.Et,B.Gb),q.My.prototype.Ho=function(){return 2},q.My.prototype.Xo=function(){var t=new Array(2);return t[0]=3,t[1]=3,t},q.My.prototype.Qo=function(){return this.Vo.apply(this,p.br(arguments))},q.My.prototype.Vo=function(){return 0==arguments[0]||1==arguments[0]?3:0},q.My.prototype.Yo=function(){return 9},q.My.prototype.Wo=function(){throw"not implemented yet"},q.My.prototype.$o=function(){return Math.sqrt(this.values[0]*this.values[0]+this.values[1]*this.values[1]+this.values[2]*this.values[2]+this.values[3]*this.values[3]+this.values[4]*this.values[4]+this.values[5]*this.values[5])},q.My.prototype.Ja=function(){return C.ty(this.values)},q.My.prototype.Ra=function(){return C.iy(this.values)},q.My.prototype.valueOf=function(){switch(0<arguments.length?arguments[0]:Z.Pb.Kb){case Z.Pb.Kb:return new Array(this.values[0],this.values[1],this.values[4],this.values[2],this.values[3],this.values[5],0,0,1);default:return this.values.concat()}},q.My.prototype.Ua=function(){return this.values[0]},q.My.prototype.Ba=function(){return this.values[1]},q.My.prototype.Za=function(){return this.values[2]},q.My.prototype.Pa=function(){return this.values[3]},q.My.prototype.ta=function(){return this.values[4]},q.My.prototype.ia=function(){return this.values[5]},q.My.prototype.yy=function(){return new Array(this.values[0],this.values[1],this.values[2],this.values[3])},q.My.prototype.my=function(){return new Array(this.values[4],this.values[5])},q.My.prototype.Ka=function(){return this.La.apply(this,p.br(arguments))},q.My.prototype.qa=function(){return this.Ga.apply(this,p.br(arguments))},q.My.prototype.Ha=function(){return this.Xa.apply(this,p.br(arguments))},q.My.prototype.Qa=function(){return this.Va.apply(this,p.br(arguments))},q.My.prototype.sa=function(){return this.na.apply(this,p.br(arguments))},q.My.prototype.ha=function(){return this.ra.apply(this,p.br(arguments))},q.My.prototype.La=function(){if(isNaN(arguments[0])&&isNaN(this.values[0]))return 0;if(isNaN(arguments[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[0]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.Nf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.Nf)}else this.values[0]=arguments[0];return 1}return 0},q.My.prototype.Ga=function(){if(isNaN(arguments[0])&&isNaN(this.values[1]))return 0;if(isNaN(arguments[0])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[1]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.bf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.bf)}else this.values[1]=arguments[0];return 1}return 0},q.My.prototype.Xa=function(){if(isNaN(arguments[0])&&isNaN(this.values[2]))return 0;if(isNaN(arguments[0])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[2]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.yf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.yf)}else this.values[2]=arguments[0];return 1}return 0},q.My.prototype.Va=function(){if(isNaN(arguments[0])&&isNaN(this.values[3]))return 0;if(isNaN(arguments[0])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[3]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.mf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.mf)}else this.values[3]=arguments[0];return 1}return 0},q.My.prototype.na=function(){if(isNaN(arguments[0])&&isNaN(this.values[4]))return 0;if(isNaN(arguments[0])||isNaN(this.values[4])||0!=O.Zh(this.values[4],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[4]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.gf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.gf)}else this.values[4]=arguments[0];return 1}return 0},q.My.prototype.ra=function(){if(isNaN(arguments[0])&&isNaN(this.values[5]))return 0;if(isNaN(arguments[0])||isNaN(this.values[5])||0!=O.Zh(this.values[5],arguments[0])){if(null==this.Lo){var t=this.Ay();this.values[5]=arguments[0],null==this.Lo?this.zs(new D.Bo(t,E.vf.xf,1<arguments.length?arguments[1]:null)):this.Lo.Po(E.vf.xf)}else this.values[5]=arguments[0];return 1}return 0},q.My.prototype.py=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);for(var i=6;i<arguments.length;++i)t[i-5]=arguments[i];return this.Oy.apply(this,t)},q.My.prototype.Oy=function(){var t=0,i=this.Ay();return isNaN(arguments[0][0])&&isNaN(this.values[0])||(isNaN(arguments[0][0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],arguments[0][0]))&&(this.values[0]=arguments[0][0],t|=E.vf.Nf),isNaN(arguments[0][1])&&isNaN(this.values[1])||(isNaN(arguments[0][1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],arguments[0][1]))&&(this.values[1]=arguments[0][1],t|=E.vf.bf),isNaN(arguments[0][2])&&isNaN(this.values[2])||(isNaN(arguments[0][2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],arguments[0][2]))&&(this.values[2]=arguments[0][2],t|=E.vf.yf),isNaN(arguments[0][3])&&isNaN(this.values[3])||(isNaN(arguments[0][3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],arguments[0][3]))&&(this.values[3]=arguments[0][3],t|=E.vf.mf),isNaN(arguments[0][4])&&isNaN(this.values[4])||(isNaN(arguments[0][4])||isNaN(this.values[4])||0!=O.Zh(this.values[4],arguments[0][4]))&&(this.values[4]=arguments[0][4],t|=E.vf.gf),isNaN(arguments[0][5])&&isNaN(this.values[5])||(isNaN(arguments[0][5])||isNaN(this.values[5])||0!=O.Zh(this.values[5],arguments[0][5]))&&(this.values[5]=arguments[0][5],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.My.prototype.jy=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=2;i<arguments.length;++i)t[i-1]=arguments[i];return this.ky.apply(this,t)},q.My.prototype.ky=function(){var t=0,i=this.Ay();return 0!=O.Zh(this.values[4],arguments[0][0])&&(this.values[4]=arguments[0][0],t|=E.vf.gf),0!=O.Zh(this.values[5],arguments[0][1])&&(this.values[5]=arguments[0][1],t|=E.vf.xf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.My.prototype.gy=function(){var t=new Array(arguments.length-1);t[0]=new Array(arguments[0],arguments[1]);for(var i=4;i<arguments.length;++i)t[i-3]=arguments[i];return this.ky.apply(this,t)},q.My.prototype.xy=function(){var t=0,i=this.Ay();return 0!=O.Zh(this.values[0],arguments[0][0])&&(this.values[0]=arguments[0][0],t|=E.vf.Nf),0!=O.Zh(this.values[1],arguments[0][1])&&(this.values[1]=arguments[0][1],t|=E.vf.bf),0!=O.Zh(this.values[2],arguments[0][2])&&(this.values[2]=arguments[0][2],t|=E.vf.yf),0!=O.Zh(this.values[3],arguments[0][3])&&(this.values[3]=arguments[0][3],t|=E.vf.mf),0!=t&&(null==this.Lo?this.zs(new D.Bo(i,t,1<arguments.length?arguments[1]:null)):this.Lo.Po(t)),t},q.My.prototype.Ay=function(){var t=new Array(9);return t[0]=this.values[0],t[1]=this.values[1],t[2]=this.values[4],t[3]=this.values[2],t[4]=this.values[3],t[5]=this.values[5],t[6]=0,t[7]=0,t[8]=1,t},q.My.prototype.la=function(){return null==this.Lo?(this.qo=0<arguments.length&&arguments[0].valueOf(),this.Lo=new D.Bo(this.Ay(),0),1):0},q.My.prototype.fa=function(){if(null==this.Lo)return 0;var t=this.Lo;(arguments.length<=2||arguments[2])&&this.oa();t.Zr();return(this.qo||0!=t.Zo()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},q.My.prototype.oa=function(){return null!=this.Lo?(this.Lo=null,1):0},q.My.prototype.aa=function(){return this.Lo},q.My.prototype.ca=function(){return null!=this.Lo&&(this.qo||0!=this.Lo.Zo())},q._y=function(){c.Et.call(this),this.scale=new Array(1,1),this.rotation=0,this.Ey=new Array(0,0),this.Fq=new Array(0,0),this.qo=!1,this.Lo=null,this.values=new Array(1,0,0,1,0,0),this.Sy=!0,this.zy=new M.xr(!1)},f._(q._y,c.Et,B.Gb,Z.Hb),q._y.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),f.Z(this.Sy,g.ir)&&this.Sy.Ci(g.jr,this.Iy,this),f.Z(this.scale,T.Uf)&&this.scale.Ci(T.Qf,this.Fy,this),f.Z(this.rotation,g.$h)&&this.rotation.Ci(g.Or,this.Fy,this),f.Z(this.Ey,T.Uf)&&this.Ey.Ci(T.Qf,this.Fy,this),f.Z(this.Fq,T.Uf)&&this.Fq.Ci(T.Qf,this.Fy,this),t+1},q._y.prototype.Iy=function(){this.Sy.valueOf()&&this.zy.valueOf()&&this.Dy()},q._y.prototype.Fy=function(){this.Sy.valueOf()?this.Dy():this.zy.Sr(!0)},q._y.prototype.Ty=function(){return this.zy},q._y.prototype.Dy=function(){var t=this.scale.valueOf(),i=this.rotation.valueOf(),n=Math.cos(i),s=Math.sin(i),h=this.Fq.valueOf(),r=this.Ey.valueOf(),e=new Array(6);e[0]=t[0]*n,e[1]=-t[0]*s,e[2]=t[1]*s,e[3]=t[1]*n,e[4]=-h[0]*e[0]+-h[1]*e[1]+(r[0]+h[0]),e[5]=-h[0]*e[2]+-h[1]*e[3]+(r[1]+h[1]);var u=0,f=this.Ay();return isNaN(e[0])&&isNaN(this.values[0])||(isNaN(e[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],e[0]))&&(this.values[0]=e[0],u|=E.vf.Nf),isNaN(e[1])&&isNaN(this.values[1])||(isNaN(e[1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],e[1]))&&(this.values[1]=e[1],u|=E.vf.bf),isNaN(e[2])&&isNaN(this.values[2])||(isNaN(e[2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],e[2]))&&(this.values[2]=e[2],u|=E.vf.yf),isNaN(e[3])&&isNaN(this.values[3])||(isNaN(e[3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],e[3]))&&(this.values[3]=e[3],u|=E.vf.mf),isNaN(e[4])&&isNaN(this.values[4])||(isNaN(e[4])||isNaN(this.values[4])||0!=O.Zh(this.values[4],e[4]))&&(this.values[4]=e[4],u|=E.vf.gf),isNaN(e[5])&&isNaN(this.values[5])||(isNaN(e[5])||isNaN(this.values[5])||0!=O.Zh(this.values[5],e[5]))&&(this.values[5]=e[5],u|=E.vf.xf),this.zy.Sr(!1),0!=u&&(null==this.Lo?this.zs(new D.Bo(f,u,1<arguments.length?arguments[1]:null)):this.Lo.Po(u)),u},q._y.prototype.Cy=function(){if(arguments[0]===this.Sy)return 0;var t=this.Sy;return f.Z(this.Sy,g.ir)&&this.Sy.Ci(g.jr,this.Iy,this),this.Sy=arguments[0],f.Z(this.Sy,g.ir)&&this.Sy.Ti(g.jr,this.Iy,this),this.zs(new c.kt(B.ay,t)),this.Sy.valueOf()&&this.zy.valueOf()&&this.Dy(),1},q._y.prototype.Jy=function(){return this.Sy},q._y.prototype.Ry=function(){if(arguments[0]===this.scale)return 0;var t=this.scale;return f.Z(this.scale,T.Uf)&&this.scale.Ci(T.Qf,this.Fy,this),this.scale=arguments[0],f.Z(this.scale,T.Uf)&&this.scale.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.uy,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q._y.prototype.Uy=function(){return this.scale},q._y.prototype.By=function(){if(arguments[0]===this.rotation)return 0;var t=this.rotation;return f.Z(this.rotation,g.$h)&&this.rotation.Ci(g.Or,this.Fy,this),this.rotation=arguments[0],f.Z(this.rotation,g.$h)&&this.rotation.Ti(g.Or,this.Fy,this),this.zs(new c.kt(B.ey,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q._y.prototype.Zy=function(){return this.rotation},q._y.prototype.Py=function(){if(arguments[0]===this.Ey)return 0;var t=this.Ey;return f.Z(this.Ey,T.Uf)&&this.Ey.Ci(T.Qf,this.Fy,this),this.Ey=arguments[0],f.Z(this.Ey,T.Uf)&&this.Ey.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.ly,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q._y.prototype.Ky=function(){return this.Ey},q._y.prototype.Ly=function(){if(arguments[0]===this.Fq)return 0;var t=this.Fq;return f.Z(this.Fq,T.Uf)&&this.Fq.Ci(T.Qf,this.Fy,this),this.Fq=arguments[0],f.Z(this.Fq,T.Uf)&&this.Fq.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.oy,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q._y.prototype.qy=function(){return this.Fq},q._y.prototype.Ho=q.My.prototype.Ho,q._y.prototype.Xo=q.My.prototype.Xo,q._y.prototype.Qo=q.My.prototype.Qo,q._y.prototype.Vo=q.My.prototype.Vo,q._y.prototype.Yo=q.My.prototype.Yo,q._y.prototype.Wo=q.My.prototype.Wo,q._y.prototype.$o=q.My.prototype.$o,q._y.prototype.Ja=q.My.prototype.Ja,q._y.prototype.Ra=q.My.prototype.Ra,q._y.prototype.valueOf=q.My.prototype.valueOf,q._y.prototype.Ua=q.My.prototype.Ua,q._y.prototype.Ba=q.My.prototype.Ba,q._y.prototype.Za=q.My.prototype.Za,q._y.prototype.Pa=q.My.prototype.Pa,q._y.prototype.ta=q.My.prototype.ta,q._y.prototype.ia=q.My.prototype.ia,q._y.prototype.yy=q.My.prototype.yy,q._y.prototype.my=q.My.prototype.my,q._y.prototype.Ay=q.My.prototype.Ay,q._y.prototype.la=q.My.prototype.la,q._y.prototype.fa=q.My.prototype.fa,q._y.prototype.oa=q.My.prototype.oa,q._y.prototype.aa=q.My.prototype.aa,q._y.prototype.ca=q.My.prototype.ca,q.Gy=function(){c.Et.call(this),this.scale=new Array(1,1),this.rotation=0,this.Ey=new Array(0,0),this.Fq=new Array(0,0),this.qo=!1,this.Lo=null,this.values=new Array(1,0,0,1,0,0),this.Sy=!0,this.zy=new M.xr(!1)},f._(q.Gy,c.Et,B.Gb,Z.Hb),q.Gy.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),f.Z(this.Sy,g.ir)&&this.Sy.Ci(g.jr,this.Iy,this),f.Z(this.scale,T.Uf)&&this.scale.Ci(T.Qf,this.Fy,this),f.Z(this.rotation,g.$h)&&this.rotation.Ci(g.Or,this.Fy,this),f.Z(this.Ey,T.Uf)&&this.Ey.Ci(T.Qf,this.Fy,this),f.Z(this.Fq,T.Uf)&&this.Fq.Ci(T.Qf,this.Fy,this),t+1},q.Gy.prototype.Iy=function(){this.Sy.valueOf()&&this.zy.valueOf()&&this.Dy()},q.Gy.prototype.Fy=function(){this.Sy.valueOf()?this.Dy():this.zy.Sr(!0)},q.Gy.prototype.Ty=function(){return this.zy},q.Gy.prototype.Dy=function(){var t=this.scale.valueOf(),i=this.rotation.valueOf(),n=Math.cos(i),s=Math.sin(i),h=this.Fq.valueOf(),r=this.Ey.valueOf(),e=new Array(6);e[0]=t[0]*n,e[1]=-t[0]*s,e[2]=t[1]*s,e[3]=t[1]*n,e[4]=-h[0]*e[0]+-h[1]*e[1]+(r[0]+h[0]),e[5]=-h[0]*e[2]+-h[1]*e[3]+(r[1]+h[1]);var u=0,f=this.Ay();return isNaN(e[0])&&isNaN(this.values[0])||(isNaN(e[0])||isNaN(this.values[0])||0!=O.Zh(this.values[0],e[0]))&&(this.values[0]=e[0],u|=E.vf.Nf),isNaN(e[1])&&isNaN(this.values[1])||(isNaN(e[1])||isNaN(this.values[1])||0!=O.Zh(this.values[1],e[1]))&&(this.values[1]=e[1],u|=E.vf.bf),isNaN(e[2])&&isNaN(this.values[2])||(isNaN(e[2])||isNaN(this.values[2])||0!=O.Zh(this.values[2],e[2]))&&(this.values[2]=e[2],u|=E.vf.yf),isNaN(e[3])&&isNaN(this.values[3])||(isNaN(e[3])||isNaN(this.values[3])||0!=O.Zh(this.values[3],e[3]))&&(this.values[3]=e[3],u|=E.vf.mf),isNaN(e[4])&&isNaN(this.values[4])||(isNaN(e[4])||isNaN(this.values[4])||0!=O.Zh(this.values[4],e[4]))&&(this.values[4]=e[4],u|=E.vf.gf),isNaN(e[5])&&isNaN(this.values[5])||(isNaN(e[5])||isNaN(this.values[5])||0!=O.Zh(this.values[5],e[5]))&&(this.values[5]=e[5],u|=E.vf.xf),this.zy.Sr(!1),0!=u&&(null==this.Lo?this.zs(new D.Bo(f,u,1<arguments.length?arguments[1]:null)):this.Lo.Po(u)),u},q.Gy.prototype.Cy=function(){if(arguments[0]===this.Sy)return 0;var t=this.Sy;return f.Z(this.Sy,g.ir)&&this.Sy.Ci(g.jr,this.Iy,this),this.Sy=arguments[0],f.Z(this.Sy,g.ir)&&this.Sy.Ti(g.jr,this.Iy,this),this.zs(new c.kt(B.ay,t)),this.Sy.valueOf()&&this.zy.valueOf()&&this.Dy(),1},q.Gy.prototype.Jy=function(){return this.Sy},q.Gy.prototype.Ry=function(){if(arguments[0]===this.scale)return 0;var t=this.scale;return f.Z(this.scale,T.Uf)&&this.scale.Ci(T.Qf,this.Fy,this),this.scale=arguments[0],f.Z(this.scale,T.Uf)&&this.scale.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.uy,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q.Gy.prototype.Uy=function(){return this.scale},q.Gy.prototype.By=function(){if(arguments[0]===this.rotation)return 0;var t=this.rotation;return f.Z(this.rotation,g.$h)&&this.rotation.Ci(g.Or,this.Fy,this),this.rotation=arguments[0],f.Z(this.rotation,g.$h)&&this.rotation.Ti(g.Or,this.Fy,this),this.zs(new c.kt(B.ey,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q.Gy.prototype.Zy=function(){return this.rotation},q.Gy.prototype.Py=function(){if(arguments[0]===this.Ey)return 0;var t=this.Ey;return f.Z(this.Ey,T.Uf)&&this.Ey.Ci(T.Qf,this.Fy,this),this.Ey=arguments[0],f.Z(this.Ey,T.Uf)&&this.Ey.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.ly,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q.Gy.prototype.Ky=function(){return this.Ey},q.Gy.prototype.Ly=function(){if(arguments[0]===this.Fq)return 0;var t=this.Fq;return f.Z(this.Fq,T.Uf)&&this.Fq.Ci(T.Qf,this.Fy,this),this.Fq=arguments[0],f.Z(this.Fq,T.Uf)&&this.Fq.Ti(T.Qf,this.Fy,this),this.zs(new c.kt(B.oy,t)),this.Sy.valueOf()?this.Dy():this.zy.Sr(!0),1},q.Gy.prototype.qy=function(){return this.Fq},q.Gy.prototype.Ho=q.My.prototype.Ho,q.Gy.prototype.Xo=q.My.prototype.Xo,q.Gy.prototype.Qo=q.My.prototype.Qo,q.Gy.prototype.Vo=q.My.prototype.Vo,q.Gy.prototype.Yo=q.My.prototype.Yo,q.Gy.prototype.Wo=q.My.prototype.Wo,q.Gy.prototype.$o=q.My.prototype.$o,q.Gy.prototype.Ja=q.My.prototype.Ja,q.Gy.prototype.Ra=q.My.prototype.Ra,q.Gy.prototype.valueOf=q.My.prototype.valueOf,q.Gy.prototype.Ua=q.My.prototype.Ua,q.Gy.prototype.Ba=q.My.prototype.Ba,q.Gy.prototype.Za=q.My.prototype.Za,q.Gy.prototype.Pa=q.My.prototype.Pa,q.Gy.prototype.ta=q.My.prototype.ta,q.Gy.prototype.ia=q.My.prototype.ia,q.Gy.prototype.yy=q.My.prototype.yy,q.Gy.prototype.my=q.My.prototype.my,q.Gy.prototype.Ay=q.My.prototype.Ay,q.Gy.prototype.la=q.My.prototype.la,q.Gy.prototype.fa=q.My.prototype.fa,q.Gy.prototype.oa=q.My.prototype.oa,q.Gy.prototype.aa=q.My.prototype.aa,q.Gy.prototype.ca=q.My.prototype.ca,q.Hy=function(){q.by.apply(this),this.Xy=null,this.Eq=new Array,this.Qy=null,this.Vy=0<arguments.length?arguments[0]:new Array(1,0,0,1,0,0),f.Z(this.Vy,B.Gb)&&this.Vy.Ti(T.Qf,this.Yy,this),this.Wy(!1)},f._(q.Hy,q.by,B.ic,Z.tc),q.Hy.prototype.destroy=function(){var t=null;return t=(q.by.prototype.destroy,q.by.prototype.destroy.apply(this,arguments)),f.Z(this.Vy,B.Gb)&&this.Vy.Ci(T.Qf,this.Yy,this),t+1},q.Hy.prototype.Yy=function(){this.Wy(!0)},q.Hy.prototype.Wy=function(){if(0<arguments.length&&arguments[0]){var t=new Array;for(t.push(this);0<t.length;){var i=t.pop();i.Wy(!1),t=t.concat(i.$y())}}else null!=this.Qy?this.Oy(C.$b(this.Qy.valueOf(Z.Pb.Lb),this.Vy.valueOf(Z.Pb.Lb))):this.Oy(this.Vy.valueOf(Z.Pb.Lb))},q.Hy.prototype.tm=function(){if(arguments[0]===this.Vy)return 0;var t=this.Vy;return f.Z(this.Vy,B.Gb)&&this.Vy.Ci(T.Qf,this.Yy,this),this.Vy=arguments[0],f.Z(this.Vy,B.Gb)&&this.Vy.Ti(T.Qf,this.Yy,this),this.Wy(!0),this.zs(new c.kt(B.wy,t)),1},q.Hy.prototype.im=function(){return this.Vy},q.Hy.prototype.sm=function(){return this.Qy},q.Hy.prototype.nm=function(){var t=this.Qy;return this.Qy=arguments[0],this.zs(new c.kt(B.Ny,t)),1},q.Hy.prototype.hm=function(){if(null!=arguments[0].sm())return-1;if(this.Eq.indexOf(arguments[0])<0){if(this.Eq.push(arguments[0]),arguments[0].nm(this),arguments[0].Wy(!0),null!=this.Xy)this.Xy.ul(arguments[0]),this.Xy.cl(z.Ke.qe);else{var t=new F.sl(B.vy);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1}return 0},q.Hy.prototype.rm=function(){if(arguments[0].sm()!==this)return-1;var t=this.Eq.indexOf(arguments[0]);if(-1<t){if(arguments[0].nm(null),this.Eq.splice(t,1),null!=this.Xy)this.Xy.fl(arguments[0]),this.Xy.cl(z.Ke.qe);else{var i=new F.sl(B.vy);i.fl(arguments[0]),i.cl(z.Ke.qe),this.zs(i)}return 1}return 0},q.Hy.prototype.um=function(){return-1<this.Eq.indexOf(arguments[0])},q.Hy.prototype.em=function(){return this.Eq.length},q.Hy.prototype.$y=function(){return this.Eq.concat()},q.Hy.prototype.lm=function(){return null==this.Xy?(this.Xy=new F.sl(B.vy),1):0},q.Hy.prototype.fm=function(){if(null==this.Xy)return 0;var t=this.Xy;return(arguments.length<=2||arguments[2])&&this.om(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},q.Hy.prototype.om=function(){return null!=this.Xy?(this.Xy=null,1):0},q.am=function(){q.by.apply(this),this.Xy=null,this.Eq=new Array,this.Qy=null,this.Vy=0<arguments.length?arguments[0]:new Array(1,0,0,1,0,0),f.Z(this.Vy,B.Gb)&&this.Vy.Ti(T.Qf,this.Yy,this),this.Wy(!1)},f._(q.am,q.by,B.ic,Z.Xb,Z.tc),q.am.prototype.destroy=function(){var t=null;return t=(q.by.prototype.destroy,q.by.prototype.destroy.apply(this,arguments)),f.Z(this.Vy,B.Gb)&&this.Vy.Ci(T.Qf,this.Yy,this),t+1},q.am.prototype.Yy=function(){this.Wy(!0)},q.am.prototype.Wy=function(){if(0<arguments.length&&arguments[0]){var t=new Array;for(t.push(this);0<t.length;){var i=t.pop();i.Wy(!1),t=t.concat(i.$y())}}else null!=this.Qy?this.Oy(C.$b(this.Qy.valueOf(Z.Pb.Lb),this.Vy.valueOf(Z.Pb.Lb))):this.Oy(this.Vy.valueOf(Z.Pb.Lb))},q.am.prototype.tm=function(){if(arguments[0]===this.Vy)return 0;var t=this.Vy;return f.Z(this.Vy,B.Gb)&&this.Vy.Ci(T.Qf,this.Yy,this),this.Vy=arguments[0],f.Z(this.Vy,B.Gb)&&this.Vy.Ti(T.Qf,this.Yy,this),this.Wy(!0),this.zs(new c.kt(B.wy,t)),1},q.am.prototype.im=function(){return this.Vy},q.am.prototype.sm=function(){return this.Qy},q.am.prototype.nm=function(){var t=this.Qy;return this.Qy=arguments[0],this.zs(new c.kt(B.Ny,t)),1},q.am.prototype.hm=function(){if(null!=arguments[0].sm())return-1;if(this.Eq.indexOf(arguments[0])<0){if(this.Eq.push(arguments[0]),arguments[0].nm(this),arguments[0].Wy(!0),null!=this.Xy)this.Xy.ul(arguments[0]),this.Xy.cl(z.Ke.qe);else{var t=new F.sl(B.vy);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1}return 0},q.am.prototype.rm=function(){if(arguments[0].sm()!==this)return-1;var t=this.Eq.indexOf(arguments[0]);if(-1<t){if(arguments[0].nm(null),this.Eq.splice(t,1),null!=this.Xy)this.Xy.fl(arguments[0]),this.Xy.cl(z.Ke.qe);else{var i=new F.sl(B.vy);i.fl(arguments[0]),i.cl(z.Ke.qe),this.zs(i)}return 1}return 0},q.am.prototype.um=function(){return-1<this.Eq.indexOf(arguments[0])},q.am.prototype.em=function(){return this.Eq.length},q.am.prototype.$y=function(){return this.Eq.concat()},q.am.prototype.lm=function(){return null==this.Xy?(this.Xy=new F.sl(B.vy),1):0},q.am.prototype.fm=function(){if(null==this.Xy)return 0;var t=this.Xy;return(arguments.length<=2||arguments[2])&&this.om(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},q.am.prototype.om=function(){return null!=this.Xy?(this.Xy=null,1):0};var H=new Object;H.cs=new Object,H.cs.zm=++a.ft,H.cs.Im=++a.ft,H.cs.Fm=++a.ft,H.cs.Dm=++a.ft,H.cs.Tm=++a.ft,H.cs.Cm=++a.ft,H.cs.Jm=++a.ft,H.cs.Rm=++a.ft,H.cs.Um=++a.ft,H.cs.Bm=++a.ft,H.cs.Zm=++a.ft,H.cs.Pm=++a.ft,H.cs.Km=++a.ft,H.cs.Lm=++a.ft,H.cs.qm=++a.ft,H.cs.Gm=++a.ft,H.cs.Hm=++a.ft,H.cs.Xm=++a.ft,H.cs.Qm=++a.ft,H.cs.Vm=++a.ft,H.cs.Ym=++a.ft,H.cs.Wm=++a.ft,H.cs.$m=++a.ft,H.cs.tA=++a.ft,H.cs.iA=++a.ft,H.cs.sA=++a.ft,H.cs.nA=++a.ft,H.cs.hA=++a.ft,H.cs.rA=++a.ft,H.cs.uA=++a.ft,H.cs.eA=++a.ft,H.cs.lA=++a.ft,H.cs.fA=++a.ft,H.cs.oA=++a.ft,H.cs.aA=++a.ft,H.cA=new Object,H.cA.wA=1,H.cA.vA=2,H.cA.NA=3,H.bA=new Object,f.J(H.bA,a.Ot),H.yA=new Object,f.J(H.yA,H.bA),H.mA=new Object,f.J(H.mA,H.bA),H.AA=new Object,f.J(H.AA,H.bA),H.dA=new Object,f.J(H.dA,H.bA),H.pA=new Object,f.J(H.pA,H.yA,H.mA),H.OA=new Object,f.J(H.OA),H.jA=new Object,f.J(H.jA,H.bA),H.kA=new Object,f.J(H.kA),H.gA=new Object,f.J(H.gA,a.Ot),H.xA=new Object,f.J(H.xA,H.gA),H.MA=new Object,f.J(H.MA,H.gA),H._A=new Object,f.J(H._A,H.gA),H.EA=new Object,f.J(H.EA,H.xA),H.SA=new Object,f.J(H.SA,H.MA),H.zA=new Object,f.J(H.zA,H._A),H.IA=new Object,f.J(H.IA),H.FA=new Object,f.J(H.FA,H.IA);var U=new Object;U.DA=function(t,i,n){c.Et.call(this),this.url=t,this.TA=1<arguments.length?i:null,this.CA=2<arguments.length?n:Number.NaN},f._(U.DA,c.Et,H.bA),U.DA.prototype.JA=function(){if(arguments[0]===this.TA)return 0;var t=this.TA;return this.TA=arguments[0],this.dispatchEvent(new e.event.ValueEvent(H.cs.zm,t)),1},U.DA.prototype.RA=function(){return this.TA},U.DA.prototype.On=function(){throw"abstract method call"},U.DA.prototype.BA=function(){if(arguments[0]===this.CA)return 0;var t=this.CA;return this.CA=arguments[0],this.dispatchEvent(new e.event.ValueEvent(H.cs.Fm,t)),1},U.DA.prototype.ZA=function(){return this.CA},U.DA.prototype.PA=function(){return this.url},U.DA.prototype.KA=function(){if(this.url===arguments[0])return 0;var t=this.url;return this.url=arguments[0],this.zs(new c.kt(H.cs.Dm,t)),1},U.LA=function(t){c.Et.call(this),this.resource=0<arguments.length?t:null},f._(U.LA,c.Et,H.FA),U.LA.prototype.valueOf=function(){return this.resource},U.LA.prototype.Er=function(){return this.Sr.apply(this,arguments)},U.LA.prototype.Sr=function(){if(this.resource===arguments[0])return 0;var t=this.resource;return this.resource=arguments[0],this.zs(new c.kt(H.cs.fA,t)),1};var P=new Object;P.Ud=new Object,P.Ud.Bd=1,P.Ud.Zd=2,P.Pd=new Object,P.Pd.Kd=1,P.Pd.Ld=2,P.Pd.qd=3,P.Gd=new Object,P.Gd.Hd=1,P.Gd.Xd=1,P.Gd.Qd=2,P.Gd.Vd=3,P.Gd.Yd=3,P.Wd=new Object,P.Wd.$d=1,P.Wd.tp=2,P.ip=new Object,P.ip.sp=1,P.ip.np=2,P.VA=new Object,P.VA.hp=1,P.VA.rp=2,P.VA.mm=3,P.cs=new Object,P.cs.up=++a.ft,P.cs.ep=++a.ft,P.cs.lp=++a.ft,P.cs.fp=++a.ft,P.cs.op=++a.ft,P.cs.ap=++a.ft,P.cs.cp=++a.ft,P.cs.wp=++a.ft,P.cs.vp=++a.ft,P.cs.Np=++a.ft,P.cs.bp=++a.ft,P.cs.yp=++a.ft,P.cs.mp=++a.ft,P.cs.Ap=++a.ft,P.cs.dp=++a.ft,P.cs.pp=++a.ft,P.cs.Op=++a.ft,P.cs.jp=++a.ft,P.cs.kp=++a.ft,P.cs.gp=++a.ft,P.cs.xp=++a.ft,P.cs.Mp=++a.ft,P.cs._p=++a.ft,P.cs.Ep=++a.ft,P.cs.Sp=++a.ft,P.cs.ot=++a.ft,P.cs.zp=++a.ft,P.cs.Ip=++a.ft,P.cs.Fp=++a.ft,P.cs.Dp=++a.ft,P.cs.Tp=++a.ft,P.cs.Cp=++a.ft,P.cs.Jp=++a.ft,P.cs.Rp=++a.ft,P.cs.Up=++a.ft,P.cs.Bp=++a.ft,P.cs.Zp=++a.ft,P.cs.Pp=++a.ft,P.cs.Kp=++a.ft,P.cs.Lp=++a.ft,P.cs.qp=++a.ft,P.cs.Gp=++a.ft,P.cs.fA=++a.ft,P.cs.Hp=++a.ft,P.Xp=new Object,f.J(P.Xp,a.Ot),P.Qp=new Object,f.J(P.Qp,P.Xp),P.Vp=new Object,f.J(P.Vp,P.Qp),P.Yp=new Object,f.J(P.Yp,P.Vp),P.Wp=new Object,f.J(P.Wp,P.Xp),P.$p=new Object,f.J(P.$p,P.Wp),P.tO=new Object,f.J(P.tO,P.Wp),P.iO=new Object,f.J(P.iO,P.Wp),P.sO=new Object,f.J(P.sO,P.Wp),P.nO=new Object,f.J(P.nO,P.Wp),P.hO=new Object,f.J(P.hO,P.Wp),P.rO=new Object,f.J(P.rO,P.Wp),P.uO=new Object,f.J(P.uO,P.Qp,z.ge),P.eO=new Object,f.J(P.eO,P.uO,z.xe),P.lO=new Object,f.J(P.lO,P.uO,z.xe),P.fO=new Object,f.J(P.fO,P.uO),P.oO=new Object,f.J(P.oO,P.Qp),P.aO=new Object,f.J(P.aO,P.Qp),P.cO=new Object,f.J(P.cO,P.Qp,z.xe),P.cO.wO=new Object,f.J(P.cO.wO),P.vO=new Object,f.J(P.vO,P.Qp),P.NO=new Object,f.J(P.NO,P.Qp),P.bO=new Object,f.J(P.bO,P.NO);var L=new Object;L.yO=function(){this.mO=arguments[0],this.AO=arguments[1],this.dO=arguments[2],this.pO=3<arguments.length&&arguments[3]},f._(L.yO),L.yO.prototype.OO=function(){return this.mO},L.yO.prototype.jO=function(){this.mO=arguments[0]},L.yO.prototype.kO=function(){return this.AO},L.yO.prototype.gO=function(){this.AO=arguments[0]},L.yO.prototype.xO=function(){return this.dO},L.yO.prototype.MO=function(){this.dO=arguments[0]},L.yO.prototype._O=function(){return this.pO},L.yO.prototype.EO=function(){this.pO=arguments[0]},P.cs.ay=++a.ft,L.SO=new Object,f.J(L.SO,P.Xp),L.zO=new Object,f.J(L.zO,P.oO),L.IO=new Object,f.J(L.IO,P.vO),L.FO=new Object,f.J(L.FO,P.eO),L.DO=new Object,f.J(L.DO,P.aO),L.TO=new Object,f.J(L.TO,P.Yp),L.CO=function(){c.Et.call(this),this.parent=null,this.Sy=!0,this.JO=null,this.state=new M.zu(P.VA,P.VA.rp),this.visibility=P.ip.sp},f._(L.CO,c.Et,L.SO),L.CO.prototype.M=function(){this.zs(new c.jt(P.cs.ot));return("function"==typeof c.Et.prototype.preDestroy?c.Et.prototype.preDestroy.apply(this,arguments):c.Et.prototype.M.apply(this,arguments))+1},L.CO.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),this.parent=null,t+1},L.CO.prototype.Dd=function(){return this.state},L.CO.prototype.RO=function(){var t=arguments[1].valueOf();return this.state.Sr(t)},L.CO.prototype.UO=function(){if(arguments[1]===this.visibility)return 0;var t=this.visibility;return this.visibility=arguments[1],this.zs(new c.kt(P.cs.qp,t)),1},L.CO.prototype.Dy=function(){this.BO(this)},L.CO.prototype.Jy=function(){return this.Sy},L.CO.prototype.Cy=function(){if(arguments[0]===this.Sy)return 0;var t=this.Sy;return f.Z(this.Sy,g.ir)&&this.Sy.Ci(g.jr,this.Iy,this),this.Sy=arguments[0],f.Z(this.Sy,g.ir)&&this.Sy.Ti(g.jr,this.Iy,this),this.zs(new c.kt(P.cs.ay,t)),this.Sy.valueOf()&&this.BO(this),1},L.CO.prototype.ZO=function(){this.parent=arguments[0]},L.CO.prototype.PO=function(){this.parent=null},L.CO.prototype.KO=function(){return this.parent},L.CO.prototype.LO=function(){var t=this.KO();return null!=t?t.LO(this):new Array(1,0,0,1,0,0)},L.CO.prototype.BO=function(t){null!=this.parent?this.parent.BO(this):(this.JO=this.qO(this,null,null,null),null!=this.JO?this.GO(this,this.JO.OO(),this.JO.kO(),this.JO.xO(),!1):this.RO(this,P.VA.mm))},L.HO=function(){L.CO.apply(this,arguments),this.XO=new q.by,this.QO=new D.Ko,this.VO=new D.Sa,this.YO=!1},f._(L.HO,L.CO,P.Qp),L.HO.prototype.destroy=function(){var t=null;return t=(L.CO.prototype.destroy,L.CO.prototype.destroy.apply(this,arguments)),e.destruct(this.XO),delete this.XO,e.destruct(this.QO),delete this.QO,e.destruct(this.VO),delete this.VO,t+1},L.HO.prototype.WO=function(){return this.XO},L.HO.prototype.$O=function(){return this.VO},L.HO.prototype.tj=function(){return this.QO},L.HO.prototype.ij=function(){var t=this.XO.valueOf(Z.Pb.Lb),i=this.VO.valueOf();t[4]+=i[0],t[5]+=i[1];var n=this.QO.ta(),s=this.QO.ia(),h=C.sj(t,new Array(0,0)),r=C.sj(t,new Array(n,0)),e=C.sj(t,new Array(n,s)),u=C.sj(t,new Array(0,s));return new Array(h,r,e,u)},L.HO.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.QO.Sr(arguments[1]),this.RO(this,P.VA.hp)},L.HO.prototype.qO=function(){if(null==arguments[1]||null==arguments[2]||null==arguments[3])return null;var t=C.sy(arguments[1],arguments[2],arguments[3]);return new L.yO(arguments[1],t[1],t[0])},L.HO.prototype.LO=function(){var t=this.KO(),i=this.XO.valueOf(Z.Pb.Lb),n=this.VO.valueOf();return i[4]+=n[0],i[5]+=n[1],null!=t?C.$b(t.LO(this),i):i},L.HO.prototype.nj=function(){return this.visibility},L.HO.prototype.hj=function(){return this.YO},L.HO.prototype.rj=function(){if(arguments[0]===this.YO)return 0;var t=this.YO;return this.YO=arguments[0],this.zs(new c.kt(P.cs.Hp,t)),1},L.uj=function(){L.HO.apply(this,arguments),this.ej=null},f._(L.uj,L.HO,P.Vp),L.uj.prototype.lj=function(){return this.ej},L.uj.prototype.fj=function(){return this.ej!==arguments[0]?(this.ej=arguments[0],1):0},L.oj=function(){L.uj.call(this),this.YO=!0},f._(L.oj,L.uj),L.aj=function(){L.CO.apply(this,arguments),this.cj=null},f._(L.aj,L.CO,P.Wp),L.aj.prototype.wj=function(){return this.cj},L.aj.prototype.vj=function(){if(null!=arguments[0]&&null!=arguments[0].KO())return-1;if(this.cj===arguments[0])return 0;var t=this.cj;return this.cj=arguments[0],null!=this.cj&&this.cj.UO(this,this.visibility),null!=t&&t.PO(),null==arguments[0]||1<arguments.length&&!arguments[1]||arguments[0].ZO(this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.up,t)),1},L.aj.prototype.GO=function(){null!=this.cj&&this.cj.GO(this,arguments[1],arguments[2],arguments[3],arguments[4]),this.RO(this,P.VA.hp)},L.aj.prototype.UO=function(){var t=null;return t="function"==typeof L.CO.prototype.Nj?L.CO.prototype.Nj.apply(this,arguments):L.CO.prototype.UO.apply(this,arguments),null!=this.cj&&this.cj.UO(this,arguments[1]),t+1},L.aj.prototype.RO=function(){var t=null;return t="function"==typeof L.CO.prototype.bj?L.CO.prototype.bj.apply(this,arguments):L.CO.prototype.RO.apply(this,arguments),null!=this.cj&&this.cj.RO(this,arguments[1]),t},L.yj=function(){L.HO.apply(this,arguments),this.children=new Array,this.mj=null,this.Zl=null},f._(L.yj,L.HO,P.uO),L.yj.prototype.BO=function(t){this.mj=t;"function"==typeof L.HO.prototype.Aj?L.HO.prototype.Aj.apply(this,arguments):L.HO.prototype.BO.apply(this,arguments)},L.yj.prototype.Qr=function(){return null!=arguments[0].KO()?-1:this.children.indexOf(arguments[0])<0?(this.children.push(arguments[0]),arguments[0].ZO(this),this.Sy.valueOf()&&this.BO(this),this.$l(arguments[0]),1):0},L.yj.prototype.Hl=function(){if(arguments[0].KO()!==this)return-1;var t=this.children.indexOf(arguments[0]);return-1<t?(arguments[0].PO(),this.children.splice(t,1),this.Sy.valueOf()&&this.BO(this),this.tf(arguments[0]),1):0},L.yj.prototype.Kl=function(){return-1<this.cj.children.indexOf(arguments[0])},L.yj.prototype.Ce=function(){return this.children.length},L.yj.prototype.Ll=function(){return this.children.concat()},L.yj.prototype.Vl=function(){return null==this.Zl?(this.Zl=new F.sl(z.Ze),1):0},L.yj.prototype.Yl=function(){if(null==this.Zl)return 0;var t=this.Zl;return(arguments.length<=2||arguments[2])&&this.Wl(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},L.yj.prototype.Wl=function(){return null!=this.Zl?(this.Zl=null,1):0},L.yj.prototype.$l=function(){if(null!=this.Zl)this.Zl.ul(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.yj.prototype.ql=function(){throw"not implemented yet"},L.yj.prototype.tf=function(){if(null!=this.Zl)this.Zl.fl(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.fl(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.yj.prototype.Xl=function(){if(null!=this.Zl)this.Zl.ol(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ol(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.dj=function(){L.aj.call(this),this.Tq=0<arguments.length?arguments[0]:new Array(0,0),f.Z(this.Tq,T.Uf)&&this.Tq.Ti(T.Qf,this.pj,this)},f._(L.dj,L.aj,P.sO),L.dj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.pj,this),t+1},L.dj.prototype.pj=function(){this.Sy.valueOf()&&this.BO(this)},L.dj.prototype.Oj=function(){if(arguments[0]===this.Tq)return 0;var t=this.Tq;return f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.pj,this),this.Tq=arguments[0],f.Z(this.Tq,T.Uf)&&this.Tq.Ti(T.Qf,this.pj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.op,t)),1},L.dj.prototype.jj=function(){return this.Tq},L.dj.prototype.qO=function(){if(null==this.cj)return null;var t=this.Tq.valueOf().concat();return null!=arguments[2]&&(isNaN(arguments[2][0])||(t[0]=arguments[2][0]),isNaN(arguments[2][1])||(t[1]=arguments[2][1])),this.cj.qO(this,arguments[1],t,arguments[3])},L.kj=function(){L.aj.call(this),this.gj=arguments[0],f.Z(this.gj,T.qf)&&this.gj.Ti(T.Qf,this.xj,this)},f._(L.kj,L.aj,P.nO),L.kj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.gj,T.qf)&&this.gj.Ci(T.Qf,this.xj,this),t+1},L.kj.prototype.xj=function(){this.Sy.valueOf()&&this.BO(this)},L.kj.prototype.Mj=function(){if(arguments[0]===this.gj)return 0;var t=this.gj;return f.Z(this.gj,T.qf)&&this.gj.Ci(T.Qf,this.xj,this),this.gj=arguments[0],f.Z(this.gj,T.qf)&&this.gj.Ti(T.Qf,this.xj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.Gp,t)),1},L.kj.prototype._j=function(){return this.gj},L.kj.prototype.qO=function(){if(null==this.cj)return null;var t=this.cj.qO(this,arguments[1],arguments[2],arguments[3]);if(null==t)return null;var i=t.kO().valueOf(),n=t.xO().valueOf();(s=i.concat())[4]=0,s[5]=0;var s=C.iy(s),h=new Array(this.gj.valueOf()[0],this.gj.valueOf()[1]),r=new Array(this.gj.valueOf()[2],this.gj.valueOf()[3]),e=C.Yb(s,h),u=C.Yb(s,r),f=arguments[1].concat();return f[0]-=e[0]+u[0],f[1]-=e[1]+u[1],n[0]+=this.gj.valueOf()[0],n[1]+=this.gj.valueOf()[1],n[2]-=this.gj.valueOf()[2],n[3]-=this.gj.valueOf()[3],this.cj.JO=new L.yO(f,i,n),t},L.kj.prototype.GO=function(){this.RO(this,P.VA.hp),null!=this.cj&&(null!=this.cj.JO?this.cj.GO(this,this.cj.JO.OO(),this.cj.JO.kO(),this.cj.JO.xO(),!1):this.cj.RO(this,P.VA.mm))},L.Ej=function(){L.aj.call(this),this.Dq=0<arguments.length?arguments[0]:new Array(1,0,0,1),f.Z(this.Dq,T.Hf)&&this.Dq.Ti(T.Qf,this.Sj,this)},f._(L.Ej,L.aj,P.$p),L.Ej.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Dq,T.Hf)&&this.Dq.Ci(T.Qf,this.Sj,this),t+1},L.Ej.prototype.Sj=function(){this.Sy.valueOf()&&this.BO(this)},L.Ej.prototype.zj=function(){if(arguments[0]===this.Dq)return 0;var t=this.Dq;return f.Z(this.Dq,T.Hf)&&this.Dq.Ci(T.Qf,this.Sj,this),this.Dq=arguments[0],f.Z(this.Dq,T.Hf)&&this.Dq.Ti(T.Qf,this.Sj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.ap,t)),1},L.Ej.prototype.Ij=function(){return this.Dq},L.Ej.prototype.qO=function(){if(null==this.cj)return null;var t=this.Dq.valueOf().concat();return null!=arguments[3]&&(isNaN(arguments[3][0])||(t[0]=arguments[3][0]),isNaN(arguments[3][1])||(t[1]=arguments[3][1]),isNaN(arguments[3][2])||(t[2]=arguments[3][2]),isNaN(arguments[3][3])||(t[3]=arguments[3][3])),this.cj.qO(this,arguments[1],arguments[2],t)},L.Fj=function(){L.aj.call(this),this.Jq=0<arguments.length?arguments[0]:new Array(0,0),f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Dj,this)},f._(L.Fj,L.aj,P.iO),L.Fj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Dj,this),t+1},L.Fj.prototype.Dj=function(){this.Sy.valueOf()&&this.BO(this)},L.Fj.prototype.Tj=function(){if(arguments[0]===this.Jq)return 0;var t=this.Jq;return f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Dj,this),this.Jq=arguments[0],f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Dj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.fp,t)),1},L.Fj.prototype.Cj=function(){return this.Jq},L.Fj.prototype.qO=function(){if(null==this.cj)return null;var t=this.Jq.valueOf().concat();return null!=arguments[1]&&(isNaN(arguments[1][0])||(t[0]=arguments[1][0]),isNaN(arguments[1][1])||(t[1]=arguments[1][1])),this.cj.qO(this,t,arguments[2],arguments[3])},L.Jj=function(){L.aj.call(this),this.Rj=0<arguments.length?arguments[0]:new Array(1,0,0,1,0,0),f.Z(this.Rj,B.Gb)&&this.Rj.Ti(T.Qf,this.Uj,this)},f._(L.Jj,L.aj,P.tO),L.Jj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Rj,B.Gb)&&this.Rj.Ci(T.Qf,this.Uj,this),t+1},L.Jj.prototype.Uj=function(){this.Sy.valueOf()&&this.BO(this)},L.Jj.prototype.Bj=function(){if(arguments[0]===this.Rj)return 0;var t=this.Rj;return f.Z(this.Rj,B.Gb)&&this.Rj.Ci(T.Qf,this.Uj,this),this.Rj=arguments[0],f.Z(this.Rj,B.Gb)&&this.Rj.Ti(T.Qf,this.Uj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.cp,t)),1},L.Jj.prototype.Zj=function(){return this.Rj},L.Jj.prototype.qO=function(){if(null==this.cj)return null;var t=this.Rj.valueOf(Z.Pb.Lb).concat(),i=new Array(t[4],t[5]),n=new Array(t[0],t[1],t[2],t[3]);return null!=arguments[2]&&(isNaN(arguments[2][0])||(i[0]=arguments[2][0]),isNaN(arguments[2][1])||(i[1]=arguments[2][1])),null!=arguments[3]&&(isNaN(arguments[3][0])||(n[0]=arguments[3][0]),isNaN(arguments[3][1])||(n[1]=arguments[3][1]),isNaN(arguments[3][2])||(n[2]=arguments[3][2]),isNaN(arguments[3][3])||(n[3]=arguments[3][3])),this.cj.qO(this,arguments[1],i,n)},L.Pj=function(){L.aj.apply(this,arguments),this.Kj=!1,this.Jq=0<arguments.length?arguments[0]:new Array(0,0),f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Lj,this),this.Tq=1<arguments.length?arguments[1]:new Array(0,0),f.Z(this.Tq,T.Uf)&&this.Tq.Ti(T.Qf,this.Lj,this),this.Dq=2<arguments.length?arguments[2]:new Array(1,0,0,1),f.Z(this.Dq,T.Hf)&&this.Dq.Ti(T.Qf,this.Lj,this)},f._(L.Pj,L.aj,P.sO,P.iO,P.$p),L.Pj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Lj,this),f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.Lj,this),f.Z(this.Dq,T.Hf)&&this.Dq.Ci(T.Qf,this.Lj,this),t+1},L.Pj.prototype.Lj=function(){this.Sy.valueOf()&&this.BO(this)},L.Pj.prototype.Tj=function(){if(arguments[0]===this.Jq)return 0;var t=this.Jq;return f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Lj,this),this.Jq=arguments[0],f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Lj,this),!this.Kj&&this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.fp,t)),1},L.Pj.prototype.Cj=function(){return this.Jq},L.Pj.prototype.Oj=function(){if(arguments[0]===this.Tq)return 0;var t=this.Tq;return f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.Lj,this),this.Tq=arguments[0],f.Z(this.Tq,T.Uf)&&this.Tq.Ti(T.Qf,this.Lj,this),!this.Kj&&this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.op,t)),1},L.Pj.prototype.jj=function(){return this.Tq},L.Pj.prototype.zj=function(){if(arguments[0]===this.Dq)return 0;var t=this.Dq;return f.Z(this.Dq,T.Hf)&&this.Dq.Ci(T.Qf,this.Lj,this),this.Dq=arguments[0],f.Z(this.Dq,T.Hf)&&this.Dq.Ti(T.Qf,this.Lj,this),!this.Kj&&this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.ap,t)),1},L.Pj.prototype.Ij=function(){return this.Dq},L.Pj.prototype.qj=function(){var t=arguments[0].valueOf(),i=null,n=null;return n=6<t.length?(i=new Array(t[0],t[1],t[3],t[4]),new Array(t[2],t[5])):(i=t.slice(0,4),t.slice(4,6)),this.Kj=!0,this.zj(i),this.Kj=!1,this.Gj(n),1},L.Pj.prototype.qO=function(){if(null==this.cj)return null;var t=this.Jq.valueOf().concat();null!=arguments[1]&&(isNaN(arguments[1][0])||(t[0]=arguments[1][0]),isNaN(arguments[1][1])||(t[1]=arguments[1][1]));var i=this.Tq.valueOf().concat();null!=arguments[2]&&(isNaN(arguments[2][0])||(i[0]=arguments[2][0]),isNaN(arguments[2][1])||(i[1]=arguments[2][1]));var n=this.Dq.valueOf().concat();return null!=arguments[3]&&(isNaN(arguments[3][0])||(n[0]=arguments[3][0]),isNaN(arguments[3][1])||(n[1]=arguments[3][1]),isNaN(arguments[3][2])||(n[2]=arguments[3][2]),isNaN(arguments[3][3])||(n[3]=arguments[3][3])),this.cj.qO(this,t,i,n)},L.Hj=function(){L.aj.call(this),this.Jq=0<arguments.length?arguments[0]:new Array(0,0),f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Lj,this),this.Rj=1<arguments.length?arguments[1]:new Array(1,0,0,1,0,0),f.Z(this.Rj,B.Gb)&&this.Rj.Ti(T.Qf,this.Lj,this)},f._(L.Hj,L.aj,P.iO,P.tO),L.Hj.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Lj,this),f.Z(this.Rj,B.Gb)&&this.Rj.Ci(T.Qf,this.Lj,this),t+1},L.Hj.prototype.Lj=function(){this.Sy.valueOf()&&this.BO(this)},L.Hj.prototype.Tj=function(){if(arguments[0]===this.Jq)return 0;var t=this.Jq;return f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Lj,this),this.Jq=arguments[0],f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Lj,this),!this.Kj&&this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.fp,t)),1},L.Hj.prototype.Cj=function(){return this.Jq},L.Hj.prototype.Bj=function(){if(arguments[0]===this.Rj)return 0;var t=this.Rj;return f.Z(this.Rj,B.Gb)&&this.Rj.Ci(T.Qf,this.Lj,this),this.Rj=arguments[0],f.Z(this.Rj,B.Gb)&&this.Rj.Ti(T.Qf,this.Lj,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.cp,t)),1},L.Hj.prototype.Zj=function(){return this.Rj},L.Hj.prototype.qO=function(){if(null==this.cj)return null;var t=this.Jq.valueOf().concat();null!=arguments[1]&&(isNaN(arguments[1][0])||(t[0]=arguments[1][0]),isNaN(arguments[1][1])||(t[1]=arguments[1][1]));var i=this.Rj.valueOf(Z.Pb.Lb).concat(),n=new Array(i[4],i[5]),s=new Array(i[0],i[1],i[2],i[3]);return null!=arguments[2]&&(isNaN(arguments[2][0])||(n[0]=arguments[2][0]),isNaN(arguments[2][1])||(n[1]=arguments[2][1])),null!=arguments[3]&&(isNaN(arguments[3][0])||(s[0]=arguments[3][0]),isNaN(arguments[3][1])||(s[1]=arguments[3][1]),isNaN(arguments[3][2])||(s[2]=arguments[3][2]),isNaN(arguments[3][3])||(s[3]=arguments[3][3])),this.cj.qO(this,t,n,s)},L.Xj=function(){L.yj.apply(this,arguments),this.Qj=new F.if,this.Qj.Ti(z.Ze,this.Vj,this)},f._(L.Xj,L.yj,P.lO),L.Xj.prototype.destroy=function(){var t=null;return t=(L.yj.prototype.destroy,L.yj.prototype.destroy.apply(this,arguments)),this.Qj.Ci(z.Ze,this.Vj,this),e.destruct(this.Qj),delete this.Qj,t+1},L.Xj.prototype.Vj=function(){this.update()},L.Xj.prototype.Yj=function(){return this.Qj},L.Xj.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.QO.Sr(arguments[1]),this.RO(this,P.VA.hp);for(var t=0;t<this.children.length;t++){var i=this.children[t];null!=i.JO?i.GO(this,i.JO.OO(),i.JO.kO(),i.JO.xO(),!1):i.RO(this,P.VA.mm)}},L.Xj.prototype.qO=function(){var t=new Array(0,0,0,0);null!=this.mj&&(this.mj.JO=null);var i=new Array(1,0,0,1,0,0);null!=arguments[2]&&(i[4]=arguments[2][0],i[5]=arguments[2][1]),null!=arguments[3]&&(i[0]=arguments[3][0],i[1]=arguments[3][1],i[2]=arguments[3][2],i[3]=arguments[3][3]);for(var n=0;n<this.children.length&&this.Qj.Kl(this.children[n]);)++n;if(n<this.children.length){if(null==this.children[n].JO&&(this.children[n].JO=this.children[n].qO(this,null,null,null)),null!=this.children[n].JO){var s=this.children[n].JO.xO(),h=new Array(s[0],s[1]),r=new Array(s[2],s[1]),e=new Array(s[2],s[3]),u=new Array(s[0],s[3]),f=C.Yb(i,h),o=C.Yb(i,r),a=C.Yb(i,e),c=C.Yb(i,u);t[0]=Math.min(f[0],o[0],a[0],c[0]),t[1]=Math.min(f[1],o[1],a[1],c[1]),t[2]=Math.max(f[0],o[0],a[0],c[0]),t[3]=Math.max(f[1],o[1],a[1],c[1])}for(var l=n+1;l<this.children.length;++l)if(!this.Qj.Kl(this.children[l])&&(null==this.children[l].JO&&(this.children[l].JO=this.children[l].qO(this,null,null,null)),null!=this.children[l].JO)){s=this.children[l].JO.xO(),h=new Array(s[0],s[1]),r=new Array(s[2],s[1]),e=new Array(s[2],s[3]),u=new Array(s[0],s[3]),f=C.Yb(i,h),o=C.Yb(i,r),a=C.Yb(i,e),c=C.Yb(i,u);t[0]=Math.min(t[0],f[0],o[0],a[0],c[0]),t[1]=Math.min(t[1],f[1],o[1],a[1],c[1]),t[2]=Math.max(t[2],f[0],o[0],a[0],c[0]),t[3]=Math.max(t[3],f[1],o[1],a[1],c[1])}}return i[4]-=t[0],i[5]-=t[1],new L.yO(new Array(t[2]-t[0],t[3]-t[1]),i,t)},L.Xj.prototype._e=function(){return this.Ee.apply(this,p.br(arguments))},L.Xj.prototype.Ee=function(){return this.children.length>arguments[0]?this.children[arguments[0]]:null},L.Xj.prototype.Se=function(){return 0<this.children.length?this.children[0]:null},L.Xj.prototype.ze=function(){return 0<this.children.length?this.children[this.children.length-1]:null},L.Xj.prototype.Fe=function(){throw"layoutI.obf_Rooter.prototype.obf_getHeadSet: not implemented yet"},L.Xj.prototype.De=function(){throw"layoutI.obf_Rooter.prototype.obf_getTailSet: not implemented yet"},L.Xj.prototype.Te=function(){throw"layoutI.obf_Rooter.prototype.obf_getSubSet: not implemented yet"},L.Xj.prototype.Ie=function(){return this.children.indexOf(arguments[0])},L.Xj.prototype.Wj=function(t,i){return this.$j.call(this,t,p.ar(i))},L.Xj.prototype.$j=function(t,i){var n=this.children.indexOf(t);return n<0?-1:(n==i||(i>=this.children.length&&(i=this.children.length-1),i<0&&(i=0),this.children.splice(i,0,this.children.splice(n,1)[0]),this.tk()),i)},L.Xj.prototype.tk=function(){if(null!=this.Zl)this.Zl.cl(z.Ke.Ge);else{var t=new F.sl(z.Ze);t.cl(z.Ke.Ge),this.zs(t)}return 1},L.ik=function(){L.yj.call(this),this.orientation=P.Ud.Bd,this.sk=!1,this.nk=0,this.hk=0,this.collapsed=new Array},f._(L.ik,L.yj,L.FO),L.ik.prototype.destroy=function(){var t=null;return t=(L.yj.prototype.destroy,L.yj.prototype.destroy.apply(this,arguments)),e.destruct(this.orientation),delete this.orientation,f.Z(this.sk,g.ir)&&this.sk.Ci(g.jr,this.rk,this),t+1},L.ik.prototype.Qr=function(){var t=null;return t="function"==typeof L.yj.prototype.add?L.yj.prototype.add.apply(this,arguments):L.yj.prototype.Qr.apply(this,arguments),this.collapsed.push(!1),t&&this.rk(),t},L.ik.prototype.Hl=function(){if(arguments[0].KO()!==this)return-1;var t=this.children.indexOf(arguments[0]);-1<t&&this.collapsed.splice(t,1);var i=null;return(i="function"==typeof L.yj.prototype.remove?L.yj.prototype.remove.apply(this,arguments):L.yj.prototype.Hl.apply(this,arguments))&&this.rk(),i},L.ik.prototype.uk=function(){return this.collapsed.length>arguments[0].valueOf()&&this.collapsed[arguments[0].valueOf()]},L.ik.prototype.ek=function(){if(this.collapsed.length>arguments[0].valueOf()){var t=this.collapsed[arguments[0].valueOf()];this.collapsed[arguments[0].valueOf()]=arguments[1].valueOf();var i=t!=arguments[1].valueOf();return i&&this.rk(),i?1:0}return-1},L.ik.prototype.lk=function(){if(arguments[0]===this.sk)return 0;var t=this.sk;return f.Z(this.sk,g.ir)&&this.sk.Ci(g.jr,this.rk,this),this.sk=arguments[0],f.Z(this.sk,g.ir)&&this.sk.Ti(g.jr,this.rk,this),this.rk(),this.zs(new c.kt(P.cs.Bp,t)),1},L.ik.prototype.fk=function(){if(arguments[0]===this.nk)return 0;var t=this.nk;return f.Z(this.nk,g.$h)&&this.nk.Ci(g.Or,this.rk,this),this.nk=arguments[0],f.Z(this.nk,g.$h)&&this.nk.Ti(g.Or,this.rk,this),this.rk(),this.zs(new c.kt(P.cs.Zp,t)),1},L.ik.prototype.ak=function(){if(arguments[0]===this.hk)return 0;var t=this.hk;return f.Z(this.hk,g.$h)&&this.hk.Ci(g.Or,this.rk,this),this.hk=arguments[0],f.Z(this.hk,g.$h)&&this.hk.Ti(g.Or,this.rk,this),this.rk(),this.zs(new c.kt(P.cs.Pp,t)),1},L.ik.prototype.ck=function(){return this.sk},L.ik.prototype.wk=function(){return this.nk},L.ik.prototype.vk=function(){return this.hk},L.ik.prototype.rk=function(){this.Sy.valueOf()&&this.Dy()},L.ik.prototype.Nk=function(){if(arguments[0]===this.orientation)return 0;var t=this.orientation;return f.Z(this.orientation,g.nr)&&this.orientation.Ci(g.Wh,this.Dy,this),this.orientation=arguments[0],f.Z(this.orientation,g.nr)&&this.orientation.Ti(g.Wh,this.Dy,this),this.Sy.valueOf()&&this.Dy(),this.zs(new c.kt(P.cs.Mp,t)),1},L.ik.prototype.bk=function(){return this.orientation},L.ik.prototype.qO=function(){if(!this.sk.valueOf()&&null!=arguments[2]&&null!=arguments[3]||this.sk.valueOf()&&null!=arguments[1]&&null!=arguments[2]&&null!=arguments[3]){var t,i=new Array(0,0,0,0),n=null,s=null;this.sk.valueOf()?(t=new Array(0,0),s=this.orientation.valueOf()==P.Ud.Bd?(t[1]=this.nk.valueOf(),new Array(Number.NaN,arguments[1][1]-this.nk.valueOf()-this.hk.valueOf())):(t[0]=this.nk.valueOf(),new Array(arguments[1][0]-this.nk.valueOf()-this.hk.valueOf(),Number.NaN)),n=new Array(1,0,0,1)):t=this.orientation.valueOf()==P.Ud.Bd?new Array(0,Number.NaN):new Array(Number.NaN,0);var h=this.children.length,r=arguments[3].concat(arguments[2]),e=0;for(e=0;e<h;e++){var u=this.children[e];if(0==this.collapsed[e]&&(u.JO=u.qO(this,s,t.concat(),n)),null!=u.JO&&1!=this.collapsed[e]){var f=u.JO.xO(),o=u.JO.kO();this.orientation.valueOf()==P.Ud.Bd?(f[0]+=o[4],f[2]+=o[4],f[1]+=o[5],f[3]+=o[5],this.sk.valueOf()&&(t[1]=this.nk.valueOf()),t[0]=f[2]):(f[0]+=o[4],f[2]+=o[4],f[1]+=o[5],f[3]+=o[5],this.sk.valueOf()&&(t[0]=this.nk.valueOf()),t[1]=f[3]);var a=new Array(f[0],f[1]),c=new Array(f[2],f[1]),l=new Array(f[2],f[3]),w=new Array(f[0],f[3]),v=C.Yb(r,a),N=C.Yb(r,c),b=C.Yb(r,l),y=C.Yb(r,w);i[0]=Math.min(v[0],N[0],b[0],y[0]),i[1]=Math.min(v[1],N[1],b[1],y[1]),i[2]=Math.max(v[0],N[0],b[0],y[0]),i[3]=Math.max(v[1],N[1],b[1],y[1]);break}}for(var A=++e;A<h;A++){u=this.children[A];if(0==this.collapsed[A]&&(u.JO=u.qO(this,s,t.concat(),n)),null!=u.JO&&!this.collapsed[A]){f=u.JO.xO(),o=u.JO.kO();this.orientation.valueOf()==P.Ud.Bd?(f[0]+=o[4],f[2]+=o[4],f[1]+=o[5],f[3]+=o[5],t[1]=this.nk.valueOf(),t[0]=f[2]):(f[0]+=o[4],f[2]+=o[4],f[1]+=o[5],f[3]+=o[5],t[0]=this.nk.valueOf(),t[1]=f[3]);a=new Array(f[0],f[1]),c=new Array(f[2],f[1]),l=new Array(f[2],f[3]),w=new Array(f[0],f[3]),v=C.Yb(r,a),N=C.Yb(r,c),b=C.Yb(r,l),y=C.Yb(r,w);i[0]=Math.min(i[0],v[0],N[0],b[0],y[0]),i[1]=Math.min(i[1],v[1],N[1],b[1],y[1]),i[2]=Math.max(i[2],v[0],N[0],b[0],y[0]),i[3]=Math.max(i[3],v[1],N[1],b[1],y[1])}}return this.orientation.valueOf()==P.Ud.Bd?(i[1]-=this.nk.valueOf(),i[3]+=this.hk.valueOf()):(i[0]-=this.nk.valueOf(),i[2]+=this.hk.valueOf()),r[4]-=i[0],r[5]-=i[1],new L.yO(new Array(i[2]-i[0],i[3]-i[1]),r,i)}return null},L.ik.prototype.GO=function(t,i,n,s){this.VO.Sr(s),this.XO.Oy(n),this.QO.Sr(i),this.RO(this,P.VA.hp);for(var h=0;h<this.children.length;h++){var r=this.children[h];r.UO(this,this.collapsed[h]?P.ip.np:P.ip.sp),null!=r.JO?0==this.collapsed[h]&&r.GO(this,r.JO.OO(),r.JO.kO(),r.JO.xO(),!1):r.RO(this,P.VA.mm)}},L.ik.prototype._e=function(){return this.Ee.apply(this,p.br(arguments))},L.ik.prototype.Ee=function(){return this.children.length>arguments[0]?this.children[arguments[0]]:null},L.ik.prototype.Se=function(){return 0<this.children.length?this.children[0]:null},L.ik.prototype.ze=function(){return 0<this.children.length?this.children[this.children.length-1]:null},L.ik.prototype.Fe=function(){throw"layoutI.obf_Lister.prototype.obf_getHeadSet: not implemented yet"},L.ik.prototype.De=function(){throw"layoutI.obf_Lister.prototype.obf_getTailSet: not implemented yet"},L.ik.prototype.Te=function(){throw"layoutI.obf_Lister.prototype.obf_getSubSet: not implemented yet"},L.ik.prototype.Ie=function(){return this.children.indexOf(arguments[0])},L.ik.prototype.Wj=function(t,i){return this.$j.call(this,t,p.ar(i))},L.ik.prototype.$j=function(t,i){var n=this.children.indexOf(t);return n<0?-1:(n==i||(i>=this.children.length&&(i=this.children.length-1),i<0&&(i=0),this.children.splice(i,0,this.children.splice(n,1)[0]),this.tk(),this.Sy.valueOf()&&this.BO(this)),i)},L.ik.prototype.tk=function(){if(null!=this.Zl)this.Zl.cl(z.Ke.Ge);else{var t=new F.sl(z.Ze);t.cl(z.Ke.Ge),this.zs(t)}return 1},L.yk=function(){L.yj.call(this),this.selectedIndex=new M.Gr(-1)},f._(L.yk,L.yj,P.fO),L.yk.prototype.destroy=function(){var t=null;return t=(L.yj.prototype.destroy,L.yj.prototype.destroy.apply(this,arguments)),e.destruct(this.selectedIndex),delete this.selectedIndex,t+1},L.yk.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.QO.Sr(arguments[1]),this.RO(this,P.VA.hp);for(var t=this.children.length,i=0;i<t;i++){var n=this.children[i];if(n.UO(this,i!=this.selectedIndex.valueOf()?P.ip.np:P.ip.sp),i==this.selectedIndex.valueOf()){if(null==n.JO){var s=C.sy(arguments[1],new Array(0,0),new Array(1,0,0,1));n.JO=new L.yO(arguments[1],s[1],s[0])}null!=n.JO?n.GO(this,arguments[1],n.JO.kO(),n.JO.xO(),!1):n.RO(this,P.VA.mm)}}},L.yk.prototype.qO=function(){if(null==arguments[1]||null==arguments[2]||null==arguments[3])return null;0<this.children.length&&-1<this.selectedIndex.valueOf()&&this.children[this.selectedIndex.valueOf()].qO(this,arguments[1],new Array(0,0),new Array(1,0,0,1));var t=C.sy(arguments[1],arguments[2],arguments[3]);return new L.yO(arguments[1],t[1],t[0])},L.yk.prototype.mk=function(){var t=this.selectedIndex.Er(arguments[0].valueOf());return t&&this.Sy.valueOf()&&this.BO(this),t},L.yk.prototype.Ak=function(){return this.selectedIndex},L.yk.prototype.Qr=function(){var t=!1;0==this.Ce()&&(t=!0,this.selectedIndex.Sr(0));var i=null;return i="function"==typeof L.yj.prototype.add?L.yj.prototype.add.apply(this,arguments):L.yj.prototype.Qr.apply(this,arguments),t&&this.Sy.valueOf()&&this.BO(this),i},L.yk.prototype.Hl=function(){if(arguments[0].KO()!==this)return-1;var t=this.children.indexOf(arguments[0]);this.selectedIndex.valueOf()>=t&&0<this.selectedIndex.valueOf()&&this.selectedIndex.Sr(this.selectedIndex.valueOf()-1);return"function"==typeof L.yj.prototype.remove?L.yj.prototype.remove.apply(this,arguments):L.yj.prototype.Hl.apply(this,arguments)},L.dk=function(){L.aj.call(this),this.Rq=0<arguments.length?arguments[0]:new Array(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),f.Z(this.Rq,T.qf)&&this.Rq.Ti(T.Qf,this.pk,this)},f._(L.dk,L.aj,P.hO),L.dk.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Rq,T.qf)&&this.Rq.Ci(T.Qf,this.pk,this),t+1},L.dk.prototype.pk=function(){this.Sy.valueOf()&&this.BO(this)},L.dk.prototype.Ok=function(){if(arguments[0]===this.Rq)return 0;var t=this.Rq;return f.Z(this.Rq,T.qf)&&this.Rq.Ci(T.Qf,this.pk,this),this.Rq=arguments[0],f.Z(this.Rq,T.qf)&&this.Rq.Ti(T.Qf,this.pk,this),this.Sy.valueOf()&&this.BO(this),this.zs(new c.kt(P.cs.wp,t)),1},L.dk.prototype.jk=function(){return this.Rq},L.dk.prototype.qO=function(){var t=arguments[1],i=arguments[2],n=arguments[3];if(null==this.cj)return null;var s=this.cj.qO(this,t,i,n);if(null==s)return null;var h=s.xO(),r=this.Rq.valueOf(),e=new Array(r[2]-r[0],r[3]-r[1]),u=t.concat(),f=1,o=1;O.Zh(e[0],h[2]-h[0])<0&&(f=e[0]/(h[2]-h[0])),O.Zh(e[1],h[3]-h[1])<0&&(o=e[1]/(h[3]-h[1]));var a=Math.min(f,o);if(a<1){if(u[0]=a*u[0],u[1]=a*u[1],null==(s=this.cj.qO(this,u,i,n)))return null;h=s.xO()}if(h[0]<r[0]){var c=r[0]-h[0];h[0]+=c,h[2]+=c}else if(h[2]>r[2]){c=h[2]-r[2];h[0]-=c,h[2]-=c}if(h[1]<r[1]){c=r[1]-h[1];h[1]+=c,h[3]+=c}else if(h[3]>r[3]){c=h[3]-r[3];h[1]-=c,h[3]-=c}return s.EO(!0),s},L.kk=function(){L.aj.call(this),this.Zq=0<arguments.length?arguments[0]:new Array(0,0),f.Z(this.Zq,T.Uf)&&this.Zq.Ti(T.Qf,this.gk,this),this.Cq=1<arguments.length?arguments[1]:new Array(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),f.Z(this.Cq,T.Uf)&&this.Cq.Ti(T.Qf,this.xk,this),this.Mk=new Array(0,0),this._k=new Array(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),this.Bq=2<arguments.length?arguments[2]:null,null!=this.Bq&&f.Z(this.Bq,m.$h)&&this.Bq.Ti(g.Or,this.Ek,this),this.qq=3<arguments.length?arguments[3]:P.Pd.Kd,f.Z(this.qq,g.nr)&&this.qq.Ti(g.Wh,this.Sk,this),this.Hq=4<arguments.length?arguments[4]:P.Gd.Qd,f.Z(this.Hq,g.nr)&&this.Hq.Ti(g.Wh,this.Sk,this),this.Uq=5<arguments.length?arguments[5]:P.Gd.Qd,f.Z(this.Uq,g.nr)&&this.Uq.Ti(g.Wh,this.Sk,this)},f._(L.kk,L.aj,P.rO),L.kk.prototype.destroy=function(){var t=null;return t=(L.aj.prototype.destroy,L.aj.prototype.destroy.apply(this,arguments)),f.Z(this.Zq,T.Uf)&&this.Zq.Ci(T.Qf,this.xk,this),f.Z(this.Cq,T.Uf)&&this.Cq.Ci(T.Qf,this.xk,this),f.Z(this.Bq,g.$h)&&null!=this.Bq&&this.Bq.Ci(g.Or,this.Ek,this),f.Z(this.qq,g.nr)&&this.qq.Ci(g.Wh,this.Sk,this),f.Z(this.Hq,g.nr)&&this.Hq.Ci(g.Wh,this.Sk,this),f.Z(this.Uq,g.nr)&&this.Uq.Ci(g.Wh,this.Sk,this),t+1},L.kk.prototype.gk=function(){C.Qb(this.Zq.valueOf(),null!=this.Bq?this.Bq.valueOf():Number.NaN,this.Mk),this.Mk[0]>this._k[0]&&(this._k[0]=this.Mk[0]),this.Mk[1]>this._k[1]&&(this._k[1]=this.Mk[1]),this.Sy.valueOf()&&this.BO(this)},L.kk.prototype.xk=function(){C.Vb(this.Cq.valueOf(),null!=this.Bq?this.Bq.valueOf():Number.NaN,this._k),this._k[0]<this.Mk[0]&&(this.Mk[0]=this._k[0]),this._k[1]<this.Mk[1]&&(this.Mk[1]=this._k[1]),this.Sy.valueOf()&&this.BO(this)},L.kk.prototype.Ek=function(){C.Vb(this.Cq.valueOf(),null!=this.Bq?this.Bq.valueOf():Number.NaN,this._k),C.Qb(this.Zq.valueOf(),null!=this.Bq?this.Bq.valueOf():Number.NaN,this.Mk),this.Mk[0]>this._k[0]&&(this._k[0]=this.Mk[0]),this.Mk[1]>this._k[1]&&(this._k[1]=this.Mk[1]),this.Sy.valueOf()&&this.BO(this)},L.kk.prototype.Sk=function(){this.Sy.valueOf()&&this.BO(this)},L.kk.prototype.zk=function(){if(arguments[0]===this.Zq)return 0;var t=this.Zq;return f.Z(this.Zq,T.Uf)&&this.Zq.Ci(T.Qf,this.gk,this),this.Zq=arguments[0],f.Z(this.Zq,T.Uf)&&this.Zq.Ti(T.Qf,this.gk,this),this.zs(new c.kt(P.cs.Np,t)),this.gk(),1},L.kk.prototype.Ik=function(){return this.Zq},L.kk.prototype.Fk=function(){if(arguments[0]===this.Cq)return 0;var t=this.Cq;return f.Z(this.Cq,T.Uf)&&this.Cq.Ci(T.Qf,this.xk,this),this.Cq=arguments[0],f.Z(this.Cq,T.Uf)&&this.Cq.Ti(T.Qf,this.xk,this),this.zs(new c.kt(P.cs.bp,t)),this.xk(),1},L.kk.prototype.Dk=function(){return this.Cq},L.kk.prototype.Tk=function(){if(arguments[0]===this.Bq)return 0;var t=this.Bq;return f.Z(this.Bq,g.$h)&&this.Bq.Ci(g.Or,this.Ek,this),this.Bq=arguments[0],f.Z(this.Bq,g.$h)&&this.Bq.Ti(g.Or,this.Ek,this),this.zs(new c.kt(P.cs.vp,t)),this.Ek(),1},L.kk.prototype.Ck=function(){return this.Bq},L.kk.prototype.Jk=function(){if(arguments[0]===this.qq)return 0;var t=this.qq;return f.Z(this.qq,g.nr)&&this.qq.Ci(g.Wh,this.Sk,this),this.qq=arguments[0],f.Z(this.qq,g.nr)&&this.qq.Ti(g.Wh,this.Sk,this),this.zs(new c.kt(P.cs.yp,t)),this.Sk(),1},L.kk.prototype.Rk=function(){return this.qq},L.kk.prototype.Uk=function(){if(arguments[0]===this.Hq)return 0;var t=this.Hq;return f.Z(this.Hq,g.nr)&&this.Hq.Ci(g.Wh,this.Sk,this),this.Hq=arguments[0],f.Z(this.Hq,g.nr)&&this.Hq.Ti(g.Wh,this.Sk,this),this.zs(new c.kt(P.cs.mp,t)),this.Sk(),1},L.kk.prototype.Bk=function(){return this.Hq},L.kk.prototype.Zk=function(){if(arguments[0]===this.Uq)return 0;var t=this.Uq;return f.Z(this.Uq,g.nr)&&this.Uq.Ci(g.Wh,this.Sk,this),this.Uq=arguments[0],f.Z(this.Uq,g.nr)&&this.Uq.Ti(g.Wh,this.Sk,this),this.zs(new c.kt(P.cs.Ap,t)),this.Sk(),1},L.kk.prototype.Pk=function(){return this.Uq},L.kk.prototype.qO=function(){var t=arguments[1],i=arguments[2],n=arguments[3];if(null==this.cj)return null;var s=this.cj.qO(this,t,i,n);if(null==s)return null;s.xO(),s.OO();var h=null!=this.Bq?this.Bq.valueOf():Number.NaN,r=new Array(1,0,0,1),e=t.concat(),u=new Array(2),f=i.concat(),o=n.concat();if(isNaN(h)&&(u=e),!isNaN(h)&&0<O.Zh(h,0)&&this.qq.valueOf()!=P.Pd.qd)switch(this.qq.valueOf()){case P.Pd.Kd:var a=t[0]/h,c=t[1]*h;t[0]<c?e[1]=a:e[0]=c;break;case P.Pd.Ld:a=t[0]/h,c=t[1]*h;a>t[1]?e[1]=a:e[0]=c}switch(u[0]=Math.min(Math.max(e[0],this.Mk[0]),this._k[0]),u[1]=Math.min(Math.max(e[1],this.Mk[1]),this._k[1]),r[0]=0==O.Zh(u[0],0)||0==O.Zh(e[0],0)?0:u[0]/e[0],r[3]=0==O.Zh(u[1],0)||0==O.Zh(e[1],0)?0:u[1]/e[1],o=O.Qh(n,r),this.Hq.valueOf()){case P.Gd.Xd:break;case P.Gd.Qd:f[0]+=(t[0]-e[0]*r[0])/2;break;case P.Gd.Yd:f[0]+=t[0]-e[0]*r[0]}switch(this.Uq.valueOf()){case P.Gd.Hd:break;case P.Gd.Qd:f[1]+=(t[1]-e[1]*r[3])/2;break;case P.Gd.Vd:f[1]+=t[1]-e[1]*r[3]}var l=C.sy(e,f,o);return new L.yO(e,l[1],l[0],!0)},L.Kk=function(){L.HO.apply(this,arguments),0<arguments.length&&(this.cj=arguments[0],arguments[0].ZO(this)),this.Lk=new Array(0,0),this.qk=new Array(0,0),this.Gk=new D.Ko(0,0),this.Hk=new Array(0,0),this.Xk=!0,this.Qk=!1,this.Vk=15,this.Yk=15,this.Wk=P.Gd.Yd,this.$k=P.Gd.Vd,this.tg=!1,this.ig=!1,this.sg=P.Gd.Xd,this.ng=P.Gd.Hd,this.hg=new M.xr(!1),this.rg=new M.xr(!1),this.ug=!1,this.eg=new Array(0,0,0,0),this.Sy.valueOf()&&this.BO(this)},f._(L.Kk,L.HO,L.IO),L.Kk.prototype.destroy=function(){var t=null;return t=(L.HO.prototype.destroy,L.HO.prototype.destroy.apply(this,arguments)),f.Z(this.Xk,g.ir)&&this.Xk.Ci(g.jr,this.lg,this),f.Z(this.Vk,g.$h)&&this.Vk.Ci(g.Or,this.fg,this),f.Z(this.Yk,g.$h)&&this.Yk.Ci(g.Or,this.fg,this),f.Z(this.Wk,g.nr)&&this.Wk.Ci(g.Wh,this.fg,this),f.Z(this.$k,g.nr)&&this.$k.Ci(g.Wh,this.fg,this),f.Z(this.sg,g.nr)&&this.sg.Ci(g.Wh,this.fg,this),f.Z(this.ng,g.nr)&&this.ng.Ci(g.Wh,this.fg,this),f.Z(this.tg,g.ir)&&this.tg.Ci(g.jr,this.fg,this),f.Z(this.ig,g.ir)&&this.ig.Ci(g.jr,this.fg,this),e.destruct(this.hg),delete this.hg,e.destruct(this.rg),delete this.rg,e.destruct(this.Gk),delete this.Gk,e.destruct(this.Hk),delete this.Hk,e.destruct(this.Lk),delete this.Lk,e.destruct(this.qk),delete this.qk,t+1},L.Kk.prototype.Dy=function(){null!=this.parent&&this.parent.BO(this)},L.Kk.prototype.og=function(){return this.Xk},L.Kk.prototype.lg=function(){!this.Xk.valueOf()&&this.Qk&&this.ag()},L.Kk.prototype.cg=function(){if(arguments[0]===this.Xk)return 0;var t=this.Xk;return f.Z(this.Xk,g.ir)&&this.Xk.Ci(g.jr,this.lg,this),this.Xk=arguments[0],f.Z(this.Xk,g.ir)&&this.Xk.Ti(g.jr,this.lg,this),this.lg(),this.zs(new c.kt(P.cs.zp,t)),1},L.Kk.prototype.fg=function(){this.BO(this)},L.Kk.prototype.wj=function(){return this.cj},L.Kk.prototype.vj=function(){if(this.cj===arguments[0])return 0;if(null!=arguments[0]&&null!=arguments[0].KO())return-1;this.ag();var t=this.cj;return null!=this.cj&&this.cj.PO(),this.cj=arguments[0],null!=this.cj&&(this.cj.ZO(this),1<arguments.length&&!arguments[1]||this.BO(this)),this.zs(new c.kt(P.cs.up,t)),1},L.Kk.prototype.wg=function(){return this.hg},L.Kk.prototype.vg=function(){return this.rg},L.Kk.prototype.Ng=function(){return this.Vk},L.Kk.prototype.bg=function(){if(arguments[0]===this.Vk)return 0;var t=this.Vk;return f.Z(this.Vk,g.$h)&&this.Vk.Ci(g.$h,this.fg,this),this.Vk=arguments[0],f.Z(this.Vk,g.$h)&&this.Vk.Ti(g.$h,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Cp,t)),1},L.Kk.prototype.yg=function(){return this.Yk},L.Kk.prototype.mg=function(){if(arguments[0]===this.Yk)return 0;var t=this.Yk;return f.Z(this.Yk,g.$h)&&this.Yk.Ci(g.$h,this.fg,this),this.Yk=arguments[0],f.Z(this.Yk,g.$h)&&this.Yk.Ti(g.$h,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Jp,t)),1},L.Kk.prototype.Ag=function(){return this.tg},L.Kk.prototype.dg=function(){if(arguments[0]===this.tg)return 0;var t=this.tg;return f.Z(this.tg,g.ir)&&this.tg.Ci(g.ir,this.fg,this),this.tg=arguments[0],f.Z(this.tg,g.ir)&&this.tg.Ti(g.ir,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Rp,t)),1},L.Kk.prototype.pg=function(){return this.ig},L.Kk.prototype.Og=function(){if(arguments[0]===this.ig)return 0;var t=this.ig;return f.Z(this.ig,g.ir)&&this.ig.Ci(g.ir,this.fg,this),this.ig=arguments[0],f.Z(this.ig,g.ir)&&this.ig.Ti(g.ir,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Up,t)),1},L.Kk.prototype.jg=function(){if(arguments[0]===this.sg)return 0;var t=this.sg;return f.Z(this.sg,g.nr)&&this.sg.Ci(g.Wh,this.fg,this),this.sg=arguments[0],f.Z(this.sg,g.nr)&&this.sg.Ti(g.Wh,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.mp,t)),1},L.Kk.prototype.kg=function(){return this.sg},L.Kk.prototype.gg=function(){if(arguments[0]===this.ng)return 0;var t=this.ng;return f.Z(this.ng,g.nr)&&this.ng.Ci(g.Wh,this.fg,this),this.ng=arguments[0],f.Z(this.ng,g.nr)&&this.ng.Ti(g.Wh,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Ap,t)),1},L.Kk.prototype.xg=function(){return this.ng},L.Kk.prototype.Mg=function(){if(arguments[0]===this.Wk)return 0;var t=this.Wk;return f.Z(this.Wk,g.nr)&&this.Wk.Ci(g.Wh,this.fg,this),this.Wk=arguments[0],f.Z(this.Wk,g.nr)&&this.Wk.Ti(g.Wh,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Dp,t)),1},L.Kk.prototype._g=function(){return this.Wk},L.Kk.prototype.Eg=function(){if(arguments[0]===this.$k)return 0;var t=this.$k;return f.Z(this.$k,g.nr)&&this.$k.Ci(g.Wh,this.fg,this),this.$k=arguments[0],f.Z(this.$k,g.nr)&&this.$k.Ti(g.Wh,this.fg,this),1<arguments.length&&!arguments[1].valueOf()||this.BO(this),this.zs(new c.kt(P.cs.Tp,t)),1},L.Kk.prototype.Sg=function(){return this.$k},L.Kk.prototype.BO=function(t){this.zg(this.Gk.valueOf())},L.Kk.prototype.qO=function(){if(null==arguments[2]||null==arguments[3])return null;var t=C.sy(arguments[1],arguments[2],arguments[3]);return null!=this.cj&&(this.cj.JO=this.Ig(arguments[1],this.Gk.valueOf(),new Array(1,0,0,1))),new L.yO(arguments[1],t[1],t[0])},L.Kk.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.QO.Sr(arguments[1])&&this.zg(this.Gk.valueOf()),this.RO(this,P.VA.hp)},L.Kk.prototype.Fg=function(){if(null!=this.cj&&this.Xk.valueOf()){if(this.Qk)return 0;this.Qk=!0;var t=this.Gk.valueOf();return this.Hk[0]=t[0],this.Hk[1]=t[1],1}return-1},L.Kk.prototype.Dg=function(){if(this.Qk){var t=new Array(0,0),i=this.cj.$O().valueOf(),n=i[2]-i[0],s=i[3]-i[1];return n<this.qk[0]?t[0]=this.Hk[0]+arguments[0][0]:t[0]=this.Hk[0]+arguments[0][0]*n/this.qk[0],s<this.qk[1]?t[1]=this.Hk[1]+arguments[0][1]:t[1]=this.Hk[1]+arguments[0][1]*s/this.qk[1],this.zg(t),1}return 0},L.Kk.prototype.ag=function(){return this.Qk?(this.Qk=!1,1):0},L.Kk.prototype.Tg=function(){if(null==this.cj)return new Array(1,0,0,1,0,0,0,0);var t=this.cj.XO.valueOf(Z.Pb.Lb),i=this.cj.VO.valueOf();t[4]+=i[0],t[5]+=i[1];var n=C.iy(t);(t=n.concat())[4]=0,t[5]=0;var s=C.Yb(t,this.qk);return n.concat(s)},L.Kk.prototype.Cg=function(){if(null==this.cj)return new Array(1,1);var t=this.cj.$O().valueOf();return new Array((t[2]-t[0])/this.qk[0],(t[3]-t[1])/this.qk[1])},L.Kk.prototype.Jg=function(){if(null==this.cj)return new Array(0,0);var t=this.cj.$O().valueOf(),i=t[2]-t[0],n=t[3]-t[1];return i<this.qk[0]&&(i=this.qk[0]),n<this.qk[1]&&(n=this.qk[1]),new Array((t[0]-this.Lk[0])/i,(t[1]-this.Lk[1])/n)},L.Kk.prototype.Rg=function(){return this.Gk},L.Kk.prototype.Ug=function(){return this.ug!=arguments[0]?(this.ug=arguments[0],this.ug||this.BO(this),1):0},L.Kk.prototype.Bg=function(){return this.ug},L.Kk.prototype.Zg=function(){return this.eg[0]=arguments[0][0],this.eg[1]=arguments[0][1],this.eg[2]=arguments[0][2],this.eg[3]=arguments[0][3],this.BO(this),1},L.Kk.prototype.Pg=function(){return this.eg.concat()},L.Kk.prototype.zg=function(){if(null==this.cj)return-2;var t=arguments[0].valueOf().concat();if(this.cj.JO=this.Ig(this.QO.valueOf(),t.concat(),new Array(1,0,0,1)),null==this.cj.JO)return this.cj.RO(this,P.VA.mm),-1;var i=this.cj.JO.xO();if(!this.ug){var n=this.Kg(t,i);this.hg.Sr(n[0]),this.rg.Sr(n[1])}this.cj.GO(this,new Array(i[2]-i[0],i[3]-i[1]),this.cj.JO.kO(),i,!0);var s=this.Gk.Sr(t);return this.zs(new c.jt(P.cs.Fp)),s},L.Kk.prototype.Lg=function(t){var i=new Array(this.tg.valueOf()||null==this.ng,this.ig.valueOf()||null==this.sg),n=this.QO.valueOf();return!i[0]&&t[1]>n[1]&&(i[0]=!0),!i[1]&&t[0]>n[0]&&(i[1]=!0),i[1]||i[0]&&t[0]>n[0]-this.Vk.valueOf()&&(i[1]=!0),i[0]||i[1]&&t[1]>n[1]-this.Yk.valueOf()&&(i[0]=!0),i},L.Kk.prototype.Ig=function(t,i,n){return this.cj.JO=this.cj.qO(this,t,i,n),this.cj.JO.dO[0]-=this.eg[0],this.cj.JO.dO[2]+=this.eg[2],this.cj.JO.dO[1]-=this.eg[1],this.cj.JO.dO[3]+=this.eg[3],this.cj.JO.AO[4]+=this.eg[0],this.cj.JO.AO[5]+=this.eg[1],this.cj.JO.mO[0]+=this.eg[0]+this.eg[2],this.cj.JO.mO[1]+=this.eg[1]+this.eg[3],this.cj.JO},L.Kk.prototype.Kg=function(t,i){var n=new Array(i[2]-i[0],i[3]-i[1]),s=this.Lg(n);this.Lk[0]=0,this.Lk[1]=0,this.qk=this.QO.valueOf(),s[0]&&(this.qk[0]-=this.Vk.valueOf(),this.Wk.valueOf()==P.Gd.Xd&&(this.Lk[0]+=this.Vk.valueOf())),s[1]&&(this.qk[1]-=this.Yk.valueOf(),this.$k.valueOf()==P.Gd.Hd&&(this.Lk[1]+=this.Yk.valueOf()));var h=null;if(null==this.sg){if(h=i.concat(),n[0]<this.qk[0]){var r=this.qk[0]-n[0];h[0]-=r,h[2]+=r}if(h[2]<this.Lk[0]+this.qk[0]){r=this.Lk[0]+this.qk[0]-h[2];i[0]+=r,i[2]+=r,t[0]+=r}else if(h[0]>this.Lk[0]){r=h[0]-this.Lk[0];i[0]-=r,i[2]-=r,t[0]-=r}}else if(n[0]<this.qk[0])switch(this.sg.valueOf()){case P.Gd.Yd:if(i[2]<this.Lk[0]+this.qk[0]){r=this.Lk[0]+this.qk[0]-i[2];i[0]+=r,i[2]+=r,t[0]+=r}else if(i[2]>this.Lk[0]+this.qk[0]){r=i[2]-this.qk[0]-this.Lk[0];i[0]-=r,i[2]-=r,t[0]-=r}break;case P.Gd.Qd:var e=this.qk[0]/2+this.Lk[0],u=(i[2]-i[0])/2;i[0]=e-u,i[2]=e+u,t[0]=i[0];break;default:if(i[0]<this.Lk[0]){r=this.Lk[0]-i[0];i[0]+=r,i[2]+=r,t[0]+=r}else if(i[0]>this.Lk[0]){r=i[0]-this.Lk[0];i[0]-=r,i[2]-=r,t[0]-=r}}else if(i[2]<this.Lk[0]+this.qk[0]){r=this.Lk[0]+this.qk[0]-i[2];i[0]+=r,i[2]+=r,t[0]+=r}else if(i[0]>this.Lk[0]){r=i[0]-this.Lk[0];i[0]-=r,i[2]-=r,t[0]-=r}if(null==this.ng){if(null==h&&(h=i.concat()),n[1]<this.qk[1]){r=this.qk[1]-n[1];h[1]-=r,h[3]+=r}if(h[3]<this.Lk[1]+this.qk[1]){r=this.Lk[1]+this.qk[1]-h[3];i[1]+=r,i[3]+=r,t[1]+=r}else if(h[1]>this.Lk[1]){r=h[1]-this.Lk[1];i[1]-=r,i[3]-=r,t[1]-=r}}else if(n[1]<this.qk[1])switch(this.ng.valueOf()){case P.Gd.Vd:if(i[3]<this.Lk[1]+this.qk[1]){r=this.Lk[1]+this.qk[1]-i[3];i[1]+=r,i[3]+=r,t[1]+=r}else if(i[3]>this.Lk[1]+this.qk[1]){r=i[3]-this.qk[1]-this.Lk[1];i[1]-=r,i[3]-=r,t[1]-=r}break;case P.Gd.Qd:e=this.qk[1]/2+this.Lk[1],u=(i[3]-i[1])/2;i[1]=e-u,i[3]=e+u,t[1]=i[1];break;default:if(i[1]<this.Lk[1]){r=this.Lk[1]-i[1];i[1]+=r,i[3]+=r,t[1]+=r}else if(i[1]>this.Lk[1]){r=i[1]-this.Lk[1];i[1]-=r,i[3]-=r,t[1]-=r}}else if(i[3]<this.Lk[1]+this.qk[1]){r=this.Lk[1]+this.qk[1]-i[3];i[1]+=r,i[3]+=r,t[1]+=r}else if(i[1]>this.Lk[1]){r=i[1]-this.Lk[1];i[1]-=r,i[3]-=r,t[1]-=r}return s},L.qg=function(){L.HO.call(this),this.firstChild=null,this.Gg=null,this.Hg=!1,this.Xg=new Object,this.Xg.value=new M.Gr(Number.NEGATIVE_INFINITY),this.Xg.mode=P.Wd.tp,this.Xg.Qg=!0,this.Xg.origin=0,this.Xg.zq=1,this.Xg.Eo=0,this.Vg=new Object,this.Vg.value=new M.Gr(Number.POSITIVE_INFINITY),this.Vg.mode=P.Wd.tp,this.Vg.Qg=!0,this.Vg.origin=0,this.Vg.zq=1,this.Vg.Eo=1,this.Yg=new M.Gr(0),this.Wg=new M.Gr(10),this.$g=P.Ud.Bd,this.tx=P.Wd.tp,this.Qg=!0,this.ix=!0,this.sx=!1,this.nx=new Array(2),this.origin=0,this.zq=1,this.Eo=0,this.QO.Ti(T.Qf,this.hx,this),this.hx()},f._(L.qg,L.HO,L.zO),L.qg.prototype.destroy=function(){this.sx&&this.ux(),this.QO.Ci(T.Qf,this.hx,this);var t=null;return t=(L.HO.prototype.destroy,L.HO.prototype.destroy.apply(this,arguments)),f.Z(this.ix,g.ir)&&this.ix.Ci(g.jr,this.ex,this),f.Z(this.$g,g.nr)&&this.$g.Ci(g.Wh,this.hx,this),f.Z(this.tx,g.nr)&&this.tx.Ci(g.Wh,this.hx,this),f.Z(this.Qg,g.ir)&&this.Qg.Ci(g.jr,this.hx,this),e.destruct(this.Wg),delete this.Wg,t+1},L.qg.prototype.lx=function(){this.tx.valueOf()==P.Wd.tp?this.Qg.valueOf()?(this.origin=0,this.$g.valueOf()==P.Ud.Bd?this.zq=this.tj().ta():this.zq=this.tj().ia()):(this.$g.valueOf()==P.Ud.Bd?this.origin=this.tj().ta():this.origin=this.tj().ia(),this.zq=-1*this.origin):this.Qg.valueOf()?(this.origin=0,this.zq=1):(this.zq=-1,this.$g.valueOf()==P.Ud.Bd?this.origin=this.tj().ta():this.origin=this.tj().ia())},L.qg.prototype.ox=function(){this.Xg.mode.valueOf()==P.Wd.tp?this.Xg.Qg.valueOf()?(this.Xg.origin=0,this.$g.valueOf()==P.Ud.Bd?this.Xg.zq=this.tj().ta():this.Xg.zq=this.tj().ia()):(this.$g.valueOf()==P.Ud.Bd?this.Xg.origin=this.tj().ta():this.Xg.origin=this.tj().ia(),this.Xg.zq=-1*this.Xg.origin):this.Xg.Qg.valueOf()?(this.Xg.origin=0,this.Xg.zq=1):(this.Xg.zq=-1,this.$g.valueOf()==P.Ud.Bd?this.Xg.origin=this.tj().ta():this.Xg.origin=this.tj().ia())},L.qg.prototype.ax=function(){this.Vg.mode.valueOf()==P.Wd.tp?this.Vg.Qg.valueOf()?(this.Vg.origin=0,this.$g.valueOf()==P.Ud.Bd?this.Vg.zq=this.tj().ta():this.Vg.zq=this.tj().ia()):(this.$g.valueOf()==P.Ud.Bd?this.Vg.origin=this.tj().ta():this.Vg.origin=this.tj().ia(),this.Vg.zq=-1*this.Vg.origin):this.Vg.Qg.valueOf()?(this.Vg.origin=0,this.Vg.zq=1):(this.Vg.zq=-1,this.$g.valueOf()==P.Ud.Bd?this.Vg.origin=this.tj().ta():this.Vg.origin=this.tj().ia())},L.qg.prototype.hx=function(){this.lx(),this.ox(),this.ax(),this.wx(),this.vx(),this.Nx(),this.Sy.valueOf()&&this.bx()},L.qg.prototype.Nx=function(){var t=this.Eo*this.zq+this.origin;return t=Math.max(t,this.Xg.value.valueOf()),t=Math.min(t,this.Vg.value.valueOf()),t=this.$g.valueOf()==P.Ud.Bd?Math.min(t,this.QO.ta()-this.Wg.valueOf()/2):Math.min(t,this.QO.ia()-this.Wg.valueOf()/2),t=Math.max(t,this.Wg.valueOf()/2),this.Yg.Sr(t)},L.qg.prototype.wx=function(){var t=this.Xg.Eo*this.Xg.zq+this.Xg.origin;return this.Xg.value.Sr(t)},L.qg.prototype.vx=function(){var t=this.Vg.Eo*this.Vg.zq+this.Vg.origin;return this.Vg.value.Sr(t)},L.qg.prototype.yx=function(){if(arguments[0].valueOf()<0)return-1;if(1<arguments.length&&arguments[1].valueOf()!=this.Xg.mode.valueOf()||2<arguments.length&&arguments[2].valueOf()!=this.Xg.Qg.valueOf()){var t,i=this.Xg.mode,n=this.Xg.Qg;return this.Xg.mode=arguments[1],2<arguments.length&&(this.Xg.Qg=arguments[2]),this.Xg.Eo=arguments[0],this.ox(),0<(t=this.wx())&&this.Sy.valueOf()&&this.hx(),this.Xg.mode=i,2<arguments.length&&(this.Xg.Qg=n),this.ox(),this.Xg.Eo=(this.Xg.value.valueOf()-this.Xg.origin)/this.Xg.zq,t}return this.Xg.Eo=arguments[0].valueOf(),this.ox(),0<(t=this.wx())&&this.Sy.valueOf()&&this.hx(),t},L.qg.prototype.mx=function(){if(arguments[0].valueOf()<0)return-1;if(1<arguments.length&&arguments[1].valueOf()!=this.Vg.mode.valueOf()||2<arguments.length&&arguments[2].valueOf()!=this.Vg.Qg.valueOf()){var t,i=this.Vg.mode,n=this.Vg.Qg;return this.Vg.mode=arguments[1],2<arguments.length&&(this.Vg.Qg=arguments[2]),this.Vg.Eo=arguments[0],this.ax(),0<(t=this.vx())&&this.Sy.valueOf()&&this.hx(),this.Vg.mode=i,2<arguments.length&&(this.Vg.Qg=n),this.ax(),this.Vg.Eo=(this.Vg.value.valueOf()-this.Vg.origin)/this.Vg.zq,t}return this.Vg.Eo=arguments[0].valueOf(),this.ax(),0<(t=this.vx())&&this.Sy.valueOf()&&this.hx(),t},L.qg.prototype.Ax=function(){return this.ix},L.qg.prototype.ex=function(){!this.ix.valueOf()&&this.sx&&this.ux()},L.qg.prototype.px=function(){if(arguments[0]===this.ix)return 0;var t=this.ix;return f.Z(this.ix,g.ir)&&this.ix.Ci(g.jr,this.ex,this),this.ix=arguments[0],f.Z(this.ix,g.ir)&&this.ix.Ti(g.jr,this.ex,this),this.zs(new c.kt(P.cs.jp,t)),1},L.qg.prototype.Ox=function(){return this.Xg.value},L.qg.prototype.jx=function(){return this.Vg.value},L.qg.prototype.kx=function(){if(arguments[0].valueOf()<0)return-1;if(1<arguments.length&&arguments[1].valueOf()!=this.tx.valueOf()||2<arguments.length&&arguments[2].valueOf()!=this.Qg.valueOf()){var t,i=this.tx,n=this.Qg;return this.tx=arguments[1],2<arguments.length&&(this.Qg=arguments[2]),this.Eo=arguments[0],this.lx(),0<(t=this.Nx())&&this.Sy.valueOf()&&this.bx(),this.tx=i,2<arguments.length&&(this.Qg=n),this.lx(),this.Eo=(this.Yg.valueOf()-this.origin)/this.zq,t}return this.Eo=arguments[0].valueOf(),0<(t=this.Nx())&&this.Sy.valueOf()&&this.bx(),t},L.qg.prototype.gx=function(){return this.Yg},L.qg.prototype.xx=function(){return arguments[0].valueOf()<0?-1:0<this.Wg.Er(arguments[0])?(this.Sy.valueOf()&&this.hx(),1):0},L.qg.prototype.Mx=function(){return this.Wg},L.qg.prototype._x=function(){if(arguments[0]===this.Qg)return 0;var t=this.Qg;return f.Z(this.Qg,g.ir)&&this.Qg.Ci(g.jr,this.hx,this),this.Qg=arguments[0],f.Z(this.Qg,g.ir)&&this.Qg.Ti(g.jr,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.kp,t)),1},L.qg.prototype.Ex=function(){if(arguments[0]===this.Xg.Qg)return 0;var t=this.Xg.Qg;return f.Z(this.Xg.Qg,g.ir)&&this.Xg.Qg.Ci(g.jr,this.hx,this),this.Xg.Qg=arguments[0],f.Z(this.Xg.Qg,g.ir)&&this.Xg.Qg.Ti(g.jr,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.gp,t)),1},L.qg.prototype.Sx=function(){if(arguments[0]===this.Vg.Qg)return 0;var t=this.Vg.Qg;return f.Z(this.Vg.Qg,g.ir)&&this.Vg.Qg.Ci(g.jr,this.hx,this),this.Vg.Qg=arguments[0],f.Z(this.Vg.Qg,g.ir)&&this.Vg.Qg.Ti(g.jr,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.xp,t)),1},L.qg.prototype.zx=function(){return this.Qg},L.qg.prototype.Ix=function(){return this.Xg.Qg},L.qg.prototype.Fx=function(){return this.Vg.Qg},L.qg.prototype.Dx=function(){if(arguments[0]===this.$g)return 0;var t=this.$g;return f.Z(this.$g,g.nr)&&this.$g.Ci(g.Wh,this.hx,this),this.$g=arguments[0],f.Z(this.$g,g.nr)&&this.$g.Ti(g.Wh,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.Mp,t)),1},L.qg.prototype.Tx=function(){return this.$g},L.qg.prototype.Cx=function(){if(arguments[0]===this.tx)return 0;var t=this.tx;return f.Z(this.tx,g.nr)&&this.tx.Ci(g.Wh,this.hx,this),this.tx=arguments[0],f.Z(this.tx,g.nr)&&this.tx.Ti(g.Wh,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs._p,t)),1},L.qg.prototype.Jx=function(){if(arguments[0]===this.Xg.mode)return 0;var t=this.Xg.mode;return f.Z(this.Xg.mode,g.nr)&&this.Xg.mode.Ci(g.Wh,this.hx,this),this.Xg.mode=arguments[0],f.Z(this.Xg.mode,g.nr)&&this.Xg.mode.Ti(g.Wh,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.Ep,t)),1},L.qg.prototype.Rx=function(){if(arguments[0]===this.Vg.mode)return 0;var t=this.Vg.mode;return f.Z(this.Vg.mode,g.nr)&&this.Vg.mode.Ci(g.Wh,this.hx,this),this.Vg.mode=arguments[0],f.Z(this.Vg.mode,g.nr)&&this.Vg.mode.Ti(g.Wh,this.hx,this),this.Sy.valueOf()&&this.hx(this),this.zs(new c.kt(P.cs.Sp,t)),1},L.qg.prototype.Ux=function(){return this.tx},L.qg.prototype.Bx=function(){return this.Xg.mode},L.qg.prototype.Zx=function(){return this.Vg.mode},L.qg.prototype.BO=function(t){if(t===this){"function"==typeof L.HO.prototype.Aj?L.HO.prototype.Aj.apply(this,arguments):L.HO.prototype.BO.apply(this,arguments)}else t===this.firstChild?this.Px():t===this.Gg?this.Kx():this.Lx()},L.qg.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.Hg=!0,this.QO.Sr(arguments[1]),this.Hg=!1,this.RO(this,P.VA.hp)},L.qg.prototype.qx=function(){if(this.firstChild===arguments[0])return 0;if(null!=arguments[0]&&null!=arguments[0].KO())return-1;var t=this.firstChild;return null!=this.firstChild&&this.firstChild.PO(),this.firstChild=arguments[0],null!=this.firstChild&&(this.firstChild.ZO(this),1<arguments.length&&!arguments[1]||this.Px()),this.zs(new c.kt(P.cs.ep,t)),1},L.qg.prototype.Gx=function(){return this.firstChild},L.qg.prototype.Hx=function(){if(this.Gg===arguments[0])return 0;if(null!=arguments[0]&&null!=arguments[0].KO())return-1;var t=this.Gg;return null!=this.Gg&&this.Gg.PO(),this.Gg=arguments[0],null!=this.Gg&&(this.Gg.ZO(this),1<arguments.length&&!arguments[1]||this.Kx()),this.zs(new c.kt(P.cs.lp,t)),1},L.qg.prototype.Xx=function(){return this.Gg},L.qg.prototype.Qx=function(){return this.ix.valueOf()?this.sx?0:(this.sx=!0,this.nx=(this.Yg.valueOf()-this.origin)/this.zq,1):-1},L.qg.prototype.Vx=function(){if(this.sx){var t=this.Qg.valueOf()?1:-1,i=this.nx+t*arguments[0];if(this.tx.valueOf()==P.Wd.tp)if(this.$g.valueOf()==P.Ud.Bd){this.Wg.valueOf(),this.tj().ta(),this.Wg.valueOf(),this.tj().ta();i=Math.min(Math.max(i,this.Wg.valueOf()/this.tj().ta()/2),1-this.Wg.valueOf()/this.tj().ta()/2)}else i=Math.min(Math.max(i,this.Wg.valueOf()/this.tj().ia()/2),1-this.Wg.valueOf()/this.tj().ia()/2);else i=this.$g.valueOf()==P.Ud.Bd?(i=this.nx+t*arguments[0]*this.tj().ta(),Math.min(Math.max(i,this.Wg.valueOf()/2),this.tj().ta()-this.Wg.valueOf()/2)):(i=this.nx+t*arguments[0]*this.tj().ia(),Math.min(Math.max(i,this.Wg.valueOf()/2),this.tj().ia()-this.Wg.valueOf()/2));return this.kx(i),1}return 0},L.qg.prototype.ux=function(){return this.sx?(this.sx=!1,1):0},L.qg.prototype.bx=function(){null!=this.firstChild&&this.Px(),null!=this.Gg&&this.Kx()},L.qg.prototype.Px=function(){var t=null,i=this.QO.ia(),n=this.QO.ta(),s=this.Yg.valueOf(),h=this.Wg.valueOf()/2;switch(this.$g.valueOf()){case P.Ud.Zd:if(this.Wg.valueOf()>i)return;t=new Array(n,s-h);break;case P.Ud.Bd:if(this.Wg.valueOf()>n)return;t=new Array(s-h,i)}var r=C.sy(t,new Array(0,0),new Array(1,0,0,1));this.firstChild.qO(this,t,new Array(0,0),new Array(1,0,0,1)),this.firstChild.JO=new L.yO(t,r[1],r[0]),null!=this.firstChild.JO?this.firstChild.GO(this,this.firstChild.JO.OO(),this.firstChild.JO.kO(),this.firstChild.JO.xO(),!1):this.firstChild.RO(this,P.VA.mm)},L.qg.prototype.Kx=function(){var t=null,i=null,n=this.QO.ia(),s=this.QO.ta(),h=this.Yg.valueOf(),r=this.Wg.valueOf()/2;switch(this.$g.valueOf()){case P.Ud.Zd:if(this.Wg.valueOf()>n)return;t=new Array(s,n-h-r),i=Array(0,h+r);break;case P.Ud.Bd:if(this.Wg.valueOf()>s)return;t=new Array(s-h-r,n),i=Array(h+r,0)}var e=C.sy(t,i,new Array(1,0,0,1));this.Gg.qO(this,t,i,new Array(1,0,0,1)),this.Gg.JO=new L.yO(t,e[1],e[0]),null!=this.Gg.JO?this.Gg.GO(this,this.Gg.JO.OO(),this.Gg.JO.kO(),this.Gg.JO.xO(),!1):this.Gg.RO(this,P.VA.mm)},L.Yx=function(){L.HO.call(this),this.Wx=!1,this.$x=new M.Gr(0),this.selectedIndex=new M.Gr(0),this.tM=new L.Kk(new L.ik),this.tM.wj().Nk(P.Ud.Bd),this.tM.ZO(this),this.iM=new L.yk,this.iM.ZO(this),this.children=new Array,this.Zl=null,this.sM(),this.tM.bg(15),this.tM.mg(15)},f._(L.Yx,L.HO,P.cO,k.pe),L.Yx.prototype.destroy=function(){var t=null;return t=(wgI.HO.prototype.destroy,wgI.HO.prototype.destroy.apply(this,arguments)),e.destruct(this.$x),delete this.$x,e.destruct(this.selectedIndex),delete this.selectedIndex,e.destruct(this.tM),delete this.tM,e.destruct(this.iM),delete this.iM,t+1},L.Yx.prototype.sM=function(){this.Sy.valueOf()&&this.Dy()},L.Yx.prototype.nM=function(){return this.$x},L.Yx.prototype.hM=function(){return this.tM},L.Yx.prototype.rM=function(){return this.iM},L.Yx.prototype.Ak=function(){return this.selectedIndex},L.Yx.prototype.mk=function(){var t=this.selectedIndex.Er(arguments[0].valueOf());return this.iM.mk(arguments[0].valueOf()),t},L.Yx.prototype.uM=function(){var t=this.$x.Er(arguments[0].valueOf());return t&&this.Sy.valueOf()&&this.sM(),t},L.Yx.prototype.eM=function(){return this.Ee(this.selectedIndex.valueOf())},L.Yx.prototype.Dy=function(){this.lM(),this.fM()},L.Yx.prototype.BO=function(t){this.Dy()},L.Yx.prototype.GO=function(){this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),0<this.QO.Sr(arguments[1])&&this.sM(),this.RO(this,P.VA.hp)},L.Yx.prototype.$l=function(){if(null!=this.Zl)this.Zl.ul(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ul(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.Yx.prototype.ql=function(){throw"not implemented yet"},L.Yx.prototype.tf=function(){if(null!=this.Zl)this.Zl.fl(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.fl(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.Yx.prototype.Xl=function(){if(null!=this.Zl)this.Zl.ol(arguments[0]),this.Zl.cl(z.Ke.qe);else{var t=new F.sl(z.Ze);t.ol(arguments[0]),t.cl(z.Ke.qe),this.zs(t)}return 1},L.Yx.prototype.Qr=function(t){var i=t.oM(),n=t.aM();if(null==i)return null;if(null==n)return null;if(null!=i.KO())return null;if(null!=n.KO())return null;if(this.children.indexOf(t)<0){var s=this.children.length;return this.children.push(t),this.iM.Qr(n),this.tM.wj().Qr(i),0==s&&this.mk(0),this.Sy.valueOf()&&this.BO(this),t}return 0},L.Yx.prototype.Hl=function(){var t=this.children.indexOf(arguments[0]);if(arguments[0].oM().KO()!==this.tM.wj())return-1;if(arguments[0].aM().KO()!==this.iM)return-1;if(-1<t){this.children.length;return this.tM.wj().Hl(arguments[0].oM()),this.iM.Hl(arguments[0].aM()),this.children=Array().concat(this.children.slice(0,t),this.children.slice(t+1,this.children.length)),t==this.selectedIndex.valueOf()&&0<t&&this.mk(this.selectedIndex.valueOf()-1),this.Sy.valueOf()&&this.BO(this),this.tf(arguments[0].aM()),1}return 0},L.Yx.prototype.Kl=function(){return-1<this.children.indexOf(arguments[0])},L.Yx.prototype.Ce=function(){return this.children.length},L.Yx.prototype.Ll=function(){return this.children.concat()},L.Yx.prototype._e=function(){return this.Ee.apply(this,p.br(arguments))},L.Yx.prototype.Ee=function(){return this.children.length>arguments[0]?this.children[arguments[0]]:null},L.Yx.prototype.Se=function(){return 0<this.children.length?this.children[0]:null},L.Yx.prototype.ze=function(){return 0<this.children.length?this.children[this.children.length-1]:null},L.Yx.prototype.Fe=function(){throw"not implemented yet"},L.Yx.prototype.De=function(){throw"not implemented yet"},L.Yx.prototype.Te=function(){throw"not implemented yet"},L.Yx.prototype.Ie=function(){return this.children.indexOf(arguments[0])},L.Yx.prototype.Vl=function(){return null==this.Zl?(this.Zl=new F.sl(z.Ze),1):0},L.Yx.prototype.Yl=function(){if(null==this.Zl)return 0;var t=this.Zl;return(arguments.length<=2||arguments[2])&&this.Wl(),(0!=t.al()||1<arguments.length&&arguments[1])&&this.zs(t,0<arguments.length?arguments[0]:this.Pr()),1},L.Yx.prototype.Wl=function(){return null!=this.Zl?(this.Zl=null,1):0},L.Yx.prototype.lM=function(){this.QO.ia();var t=this.QO.ta(),i=this.$x.valueOf(),n=new Array(t,i);this.tM.JO=this.tM.qO(this,n,new Array(0,0),new Array(1,0,0,1)),null!=this.tM.JO?this.tM.GO(this,n,this.tM.JO.kO(),this.tM.JO.xO(),!0):this.tM.RO(this,P.VA.mm)},L.Yx.prototype.fM=function(){var t,i,n=this.QO.ia(),s=this.QO.ta(),h=this.$x.valueOf();t=new Array(s,n-h),i=Array(0,h),this.iM.JO=this.iM.qO(this,t,i,new Array(1,0,0,1)),null!=this.iM.JO?this.iM.GO(this,t,this.iM.JO.kO(),this.iM.JO.xO(),!1):this.iM.RO(this,P.VA.mm)},L.Yx.prototype.cM=function(){if(arguments[0]===this.Wx)return 0;var t=this.Wx;return f.Z(this.Wx,g.ir)&&this.Wx.Ci(g.jr,this.wM,this),this.Wx=arguments[0],f.Z(this.Wx,g.ir)&&this.Wx.Ti(g.jr,this.wM,this),this.wM(this),this.zs(new c.kt(P.cs.Lp,t)),1},L.Yx.prototype.vM=function(){return this.Wx},L.Yx.prototype.wM=function(){this.tM.wj().lk(this.Wx),this.Sy.valueOf()&&this.lM()},L.Yx.NM=function(){this.bM=arguments[0],this.content=arguments[1]},f._(L.Yx.NM,null,P.cO.wO),L.Yx.NM.prototype.oM=function(){return this.bM},L.Yx.NM.prototype.aM=function(){return this.content},L.yM=function(){L.HO.call(this),this.mM=!1,this.AM=new Array(0,0),this.dM=new Array(0,0),this.pM=new L.Pj(new Array(0,0),new Array(0,0),new Array(1,0,0,1)),this.pM.Cy(!1),this.pM.Ti(P.cs.ap,this.OM,this),this.jM=new L.dk(new Array(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)),this.jM.Cy(!1),this.jM.Ti(P.cs.wp,this.OM,this),this.kM=new L.kk(new Array(0,0),new Array(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),null,P.Pd.Kd,P.Gd.Qd,P.Gd.Qd),this.kM.Cy(!1),this.kM.Ti(P.cs.vp,this.OM,this),this.kM.Ti(P.cs.Np,this.OM,this),this.kM.Ti(P.cs.bp,this.OM,this),this.kM.Ti(P.cs.yp,this.OM,this),this.kM.Ti(P.cs.mp,this.OM,this),this.kM.Ti(P.cs.Ap,this.OM,this),this.content=null,this.background=null,this.Pq=null,this.Tq=new Array(0,0),this.Jq=new Array(0,0),this.pM.ZO(this),this.pM.vj(this.jM),(this.jM.cj=this).kM.ZO(this)},f._(L.yM,L.HO,P.bO),L.yM.prototype.destroy=function(){var t=null;return t=(L.HO.prototype.destroy,L.HO.prototype.destroy.apply(this,arguments)),f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Dj,this),f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.pj,this),this.kM.Ci(P.cs.vp,this.OM,this),this.kM.Ci(P.cs.Np,this.OM,this),this.kM.Ci(P.cs.bp,this.OM,this),this.kM.Ci(P.cs.yp,this.OM,this),this.kM.Ci(P.cs.mp,this.OM,this),this.kM.Ci(P.cs.Ap,this.OM,this),e.destruct(this.kM),delete this.kM,this.jM.Ci(P.cs.wp,this.OM,this),e.destruct(this.jM),delete this.jM,this.pM.Ci(P.cs.ap,this.OM,this),e.destruct(this.pM),delete this.pM,t+1},L.yM.prototype.OM=function(t){this.zs(t)},L.yM.prototype.pj=function(){var t=this.Tq.valueOf().concat();t[0]-=this.AM[0],t[1]-=this.AM[1],this.pM.Oj(t),this.Sy.valueOf()&&this.BO(this.pM)},L.yM.prototype.Dj=function(){var t=this.Jq.valueOf().concat();t[0]+=2*this.AM[0],t[1]+=2*this.AM[1],this.pM.Tj(t),this.Sy.valueOf()&&this.BO(this.pM)},L.yM.prototype.qj=function(){var t=arguments[0].valueOf(),i=null,n=null;return n=6<t.length?(i=new Array(t[0],t[1],t[3],t[4]),new Array(t[2],t[5])):(i=t.slice(0,4),t.slice(4,6)),this.mM=!0,this.zj(i),this.mM=!1,this.Oj(n),1},L.yM.prototype.aM=function(){return this.content},L.yM.prototype.gM=function(){if(null!=arguments[0]&&null!=arguments[0].KO())return-1;if(this.content===arguments[0])return 0;var t=this.content;return this.content=arguments[0],null!=t&&t.PO(),null!=arguments[0]&&(this.kM.vj(arguments[0],!1),arguments[0].ZO(this)),this.zs(new c.kt(P.cs.dp,t)),this.Sy.valueOf()&&(null!=this.content?this.BO(this.content):this.Dy()),1},L.yM.prototype.xM=function(){return this.background},L.yM.prototype.MM=function(){if(null!=arguments[0]&&null!=arguments[0].KO())return-1;if(this.background===arguments[0])return 0;var t=this.background;return this.background=arguments[0],null!=t&&t.PO(),null!=arguments[0]&&arguments[0].ZO(this),this.zs(new c.kt(P.cs.pp,t)),this.Sy.valueOf()&&(null!=this.background?this.BO(this.background):this.Dy()),1},L.yM.prototype._M=function(){return this.Pq},L.yM.prototype.EM=function(){if(null!=arguments[0]&&null!=arguments[0].KO())return-1;if(this.Pq===arguments[0])return 0;var t=this.Pq;return this.Pq=arguments[0],null!=t&&t.SM(),null!=arguments[0]&&arguments[0].ZO(this),this.zs(new c.kt(P.cs.Op,t)),this.Sy.valueOf()&&(null!=this.Pq?this.BO(this.Pq):this.Dy()),1},L.yM.prototype.Cj=function(){return this.Jq},L.yM.prototype.Tj=function(){if(arguments[0]===this.Jq)return 0;var t=this.Jq;return f.Z(this.Jq,T.Uf)&&this.Jq.Ci(T.Qf,this.Dj,this),this.Jq=arguments[0],f.Z(this.Jq,T.Uf)&&this.Jq.Ti(T.Qf,this.Dj,this),this.Dj(),this.zs(new c.kt(P.cs.fp,t)),1},L.yM.prototype.jj=function(){return this.Tq},L.yM.prototype.Oj=function(){if(arguments[0]===this.Tq)return 0;var t=this.Tq;return f.Z(this.Tq,T.Uf)&&this.Tq.Ci(T.Qf,this.pj,this),this.Tq=arguments[0],f.Z(this.Tq,T.Uf)&&this.Tq.Ti(T.Qf,this.pj,this),this.pj(),this.zs(new c.kt(P.cs.op,t)),1},L.yM.prototype.Ij=function(){return this.pM.Ij.apply(this.pM,arguments)},L.yM.prototype.zj=function(){var t=this.pM.zj.apply(this.pM,arguments);return!this.mM&&this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.jk=function(){return this.jM.jk.apply(this.jM,arguments)},L.yM.prototype.Ok=function(){var t=this.jM.Ok.apply(this.jM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Ik=function(){return this.kM.Ik.apply(this.kM,arguments)},L.yM.prototype.zk=function(){var t=this.kM.zk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Dk=function(){return this.kM.Dk.apply(this.kM,arguments)},L.yM.prototype.Fk=function(){var t=this.kM.Fk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Ck=function(){return this.kM.Ck.apply(this.kM,arguments)},L.yM.prototype.Tk=function(){var t=this.kM.Tk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Rk=function(){return this.kM.Rk.apply(this.kM,arguments)},L.yM.prototype.Jk=function(){var t=this.kM.Jk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Bk=function(){return this.kM.Bk.apply(this.kM,arguments)},L.yM.prototype.Uk=function(){var t=this.kM.Uk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.Pk=function(){return this.kM.Pk.apply(this.kM,arguments)},L.yM.prototype.Zk=function(){var t=this.kM.Zk.apply(this.kM,arguments);return this.Sy.valueOf()&&this.Dy(),t},L.yM.prototype.BO=function(t){t===this.content?this.kM.BO(t):"function"==typeof L.HO.prototype.Aj?L.HO.prototype.Aj.apply(this,arguments):L.HO.prototype.BO.apply(this,arguments)},L.yM.prototype.GO=function(){arguments[0]===this.jM?(this.VO.Sr(arguments[3]),this.XO.Oy(arguments[2]),this.QO.Sr(arguments[1]),this.RO(this,P.VA.hp),null!=this.content&&(null!=this.kM.JO?this.kM.GO(this,this.kM.JO.OO(),this.kM.JO.kO(),this.kM.JO.xO()):this.kM.RO(this,P.VA.mm)),null!=this.background&&(null!=this.background.JO?this.background.GO(this,this.background.JO.OO(),this.background.JO.kO(),this.background.JO.xO()):this.background.RO(this,P.VA.mm)),null!=this.Pq&&(null!=this.Pq.JO?this.Pq.GO(this,this.Pq.JO.OO(),this.Pq.JO.kO(),this.Pq.JO.xO()):this.Pq.RO(this,P.VA.mm))):this.pM.GO(this,1<arguments.length?arguments[1]:null,2<arguments.length?arguments[2]:null,3<arguments.length?arguments[3]:null,4<arguments.length&&arguments[4])},L.yM.prototype.qO=function(){if(arguments[0]!==this.jM)return this.pM.JO=this.pM.qO(this,arguments[1],arguments[2],arguments[3]),this.pM.JO;if(null==arguments[1]||null==arguments[2]||null==arguments[3])return null;var t=C.sy(arguments[1],arguments[2],arguments[3]),i=new L.yO(arguments[1],t[1],t[0]),n=arguments[1].concat(),s=new Array(0,0);if(null!=this.background&&(this.background.JO=this.background.qO(this,arguments[1],new Array(0,0),new Array(1,0,0,1))),n[0]-=2*this.AM[0],n[1]-=2*this.AM[1],s[0]+=this.AM[0],s[1]+=this.AM[1],this.kM.JO=this.kM.qO(this,n,s,new Array(1,0,0,1)),null!=this.Pq){var h=new Array((arguments[1][0]-this.dM[0])/2,arguments[1][1]-this.AM[1]-this.dM[1]);this.Pq.JO=this.Pq.qO(this,this.dM,h,new Array(1,0,0,1))}return i},L.yM.prototype.LO=function(){var t=0<arguments.length?arguments[0]:null;if(t===this.pM){return"function"==typeof L.HO.prototype.zM?L.HO.prototype.zM.apply(this,arguments):L.HO.prototype.LO.apply(this,arguments)}if(t===this.content)return this.kM.LO(this.content);if(null!=this.Pq&&t===this.Pq)throw"todo";if(null!=this.background&&t===this.background)throw"todo";return"function"==typeof L.HO.prototype.zM?L.HO.prototype.zM.apply(this,arguments):L.HO.prototype.LO.apply(this,arguments)},L.IM=function(){L.oj.call(this),this.resource=0<arguments.length?arguments[0]:null},f._(L.IM,L.oj,L.TO),L.IM.prototype.FM=function(){return this.resource},L.IM.prototype.DM=function(){if(this.resource===arguments[0])return 0;var t=this.resource;return this.resource=arguments[0],this.zs(new c.kt(P.cs.fA,t)),1};var X=new Object;X.st=new Object,X.st.TM="exception.obf_DOM_ELEMENT_NOT_FOUND",X.CM=new Object,f.J(X.CM),X.JM=new Object,X.JM.Vu=1,X.JM.RM=2;var G=new Object;G.UM=function(){this.Lq=arguments[0],this.BM=!0,this.Lq.Ti(P.cs.ot,this.ZM,this),this.Lq.PM=this},f._(G.UM,null,X.CM),G.UM.prototype.destroy=function(){return this.Lq.Ci(P.cs.ot,this.ZM,this),delete this.Lq.PM,2},G.UM.prototype.ZM=function(){e.destruct(this)},G.UM.prototype.KM=function(){return arguments[0].valueOf()!==this.BM?(this.BM=arguments[0].valueOf(),1):0},G.UM.prototype.LM=function(){return this.BM?this.qM.apply(this,arguments):0},G.UM.prototype.GM=function(){return this.Lq},G.UM.HM=new Array,G.UM.XM=function(){for(var t=arguments[0].PM,i=G.UM.HM.length-1;0<=i&&null==t;)f.Z(arguments[0],G.UM.HM[i].type)&&(t=e.construct(G.UM.HM[i].constructor,arguments)),--i;return null==t&&(t=f.Z(arguments[0],P.vO)?e.construct(G.Kk,arguments):f.Z(arguments[0],P.oO)?e.construct(G.qg,arguments):f.Z(arguments[0],P.cO)?e.construct(G.Yx,arguments):f.Z(arguments[0],P.NO)?e.construct(G.yM,arguments):f.Z(arguments[0],P.Yp)?e.construct(G.IM,arguments):f.Z(arguments[0],P.Qp)?e.construct(G.HO,arguments):new G.QM(arguments[0])),t};var K=new Object;K.cs=new Object,K.cs.dm=++a.ft,K.VA=new Object,K.VA.rp=0,K.VA.mS=1,K.VA.AS=2,K.VA.dS=3,K.VA.pS=4,K.VA.OS=5,"undefined"!=typeof JSON&&null!=JSON||r.warn('"JSON" object unavailable, some operations will fail...');var Q=new Object;Q.jS=function(){c.Et.call(this),this.url=null,this.method="GET",this.headers=new Object,this.data=null,this.responseText="",this.contentType="text/html",this.kS=null,this.gS=0,this.xS=!0,this.MS=new XMLHttpRequest,"withCredentials"in this.MS||("undefined"!=typeof XDomainRequest?(this.xS=!1,this.MS=new XDomainRequest):this.MS=null),null!=this.MS?this.state=K.VA.mS:this.state=K.VA.rp;var t=this;this._S=function(){t.xS?N.ri.zi.browser[0].identifier==N.ri.fi?t.MS.onload=null:N.Ci(t.MS,"loadend",t._S):t.MS.onload=null,t.responseText=t.MS.responseText,t.gS=new Date-t.kS,t.state=K.VA.OS,t.zs(new c.jt(K.cs.dm))}},f._(Q.jS,c.Et),Q.jS.ES=function(t,i){return null!=t&&(-1<t.indexOf("?")?t+="&"+i:t+="?"+i),t},Q.jS.SS=function(t,i){return"number"==typeof i?i==Number.POSITIVE_INFINITY?"Infinity":i==Number.NEGATIVE_INFINITY?"-Infinity":isNaN(i)?"NaN":i:i},Q.jS.zS=function(t,i){return"string"==typeof i?"Infinity"===i?Number.POSITIVE_INFINITY:"-Infinity"===i?Number.NEGATIVE_INFINITY:"NaN"===i?Number.NaN:"obf_+inf"===i?Number.POSITIVE_INFINITY:"obf_-inf"===i?Number.NEGATIVE_INFINITY:"obf_nan"===i?Number.NaN:i:i},Q.jS.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),this.xS?N.ri.zi.browser[0].identifier==N.ri.fi?this.MS.onload=null:N.Ci(this.MS,"loadend",this._S):this.MS.onload=null,t+1},Q.jS.prototype.KA=function(t){return this.url=t,1},Q.jS.prototype.IS=function(){return this.contentType=arguments[0],1},Q.jS.prototype.FS=function(t){return this.method=t,1},Q.jS.prototype.DS=function(t){return this.headers=t,1},Q.jS.prototype.TS=function(t,i){return this.headers[t]=i,1},Q.jS.prototype.CS=function(t){this.data=JSON.stringify(t,Q.jS.SS)},Q.jS.prototype.JS=function(t){this.data=t},Q.jS.prototype.RS=function(){return this.responseText},Q.jS.prototype.Dd=function(){return this.state},Q.jS.prototype.US=function(){return void 0!==this.responseText&&null!=this.responseText&&""!=this.responseText?JSON.parse(this.responseText,Q.jS.zS):null},Q.jS.prototype.BS=function(){return this.gS},Q.jS.prototype.ZS=function(){return this.MS},Q.jS.prototype.PS=function(t){return void 0!==t.split("?")[1]},Q.jS.prototype.KS=function(){return this.state==K.VA.mS?(this.state=K.VA.AS,this.zs(new c.jt(K.cs.dm)),this.kS=new Date,this.LS(),1):0},Q.jS.prototype.LS=function(){this.state=K.VA.dS,this.zs(new c.jt(K.cs.dm)),this.qS()},Q.jS.prototype.qS=function(){var t=this.url;if(this.xS){for(var i in this.MS.open(this.method,t,!0),this.headers)this.MS.setRequestHeader(i,this.headers[i]);null!=this.contentType&&this.MS.setRequestHeader("Content-Type",this.contentType),N.ri.zi.browser[0].identifier==N.ri.fi?this.MS.onload=this._S:N.Ti(this.MS,"loadend",this._S)}else this.MS.onload=this._S,this.MS.open(this.method,t);var n=this,s=function(){n.MS.send(n.data),n.state=K.VA.pS,n.zs(new c.jt(K.cs.dm))};this.xS?s():setTimeout(function(){s()},0)};var V=new Object;V.bz=new Object,f.J(V.bz),V.yz=new Object,f.J(V.yz),V.yz.mz={0:"enrichmentClick",1:"enrichmentDisplay",2:"percentConsumed",3:"state"};var W=new Object;W.Az=function(){this.dz=new Array},f._(W.Az,null,V.bz),W.Az.prototype.pz=function(){return this.Oz(arguments[0])?0:(this.dz.push(arguments[0]),1)},W.Az.prototype.jz=function(t){for(var i=this.dz.length-1;-1<i;--i)this.dz[i].kz(t.trackers);return 1},W.Az.prototype.gz=function(){for(var t=0;t<this.dz.length&&this.dz[t]!==arguments[0];)++t;return t},W.Az.prototype.Oz=function(){return this.gz(arguments[0])<this.dz.length},W.Az.prototype.xz=function(){return this.dz.concat()},W.Az.prototype.Mz=function(t,i,n){for(var s=this.dz.length-1;-1<s;--s)this.dz[s].Mz(t,i,n);return 1},W.Az.prototype._z=function(t,i,n){for(var s=this.dz.length-1;-1<s;--s)this.dz[s]._z(t,i,n);return 1},W.Az.prototype.Ez=function(t,i,n){for(var s=this.dz.length-1;-1<s;--s)this.dz[s].Ez(t,i,n);return 1},W.Az.prototype.Sz=function(t,i,n){for(var s=this.dz.length-1;-1<s;--s)this.dz[s].Sz(t,i,n);return 1};var Y=new Object;Y.zz=function(){this.Iz=null,this.ua=null,this.Fz=null},f._(Y.zz,null,V.yz),Y.zz.Dz="GoogleAnalytics",Y.zz.Tz="//www.google-analytics.com/analytics.js",Y.zz.Cz="inexistingUA",Y.zz.prototype.kz=function(t){this.ua=Y.zz.Cz;for(var i,n,s,h,r,e,u=t.length-1;-1<u;--u)t[u].kind==Y.zz.Dz&&(this.ua=t[u].conf.ua);i=v,n=document,s=Y.zz.Tz,h="__gaTracker",i.GoogleAnalyticsObject=h,i[h]=i[h]||function(){(i[h].q=i[h].q||[]).push(arguments)},i[h].l=1*new Date,r=n.createElement("script"),e=n.getElementsByTagName("script")[0],r.async=1,r.src=s,e.parentNode.insertBefore(r,e);var f=this;__gaTracker(function(){f.Iz=__gaTracker.create(f.ua),f.Uz()&&f.Bz()})},Y.zz.prototype.Uz=function(){return null!=this.ua&&null!=this.Iz&&this.ua!=Y.zz.Cz},Y.zz.prototype.Mz=function(t,i,n){this.Uz()?this.Iz.send("event",t,V.yz.mz[0],i,n):this.Zz(this.Mz,new Array(t,i,n))},Y.zz.prototype._z=function(t,i,n){this.Uz()?this.Iz.send("event",t,V.yz.mz[1],i,n):this.Zz(this._z,new Array(t,i,n))},Y.zz.prototype.Ez=function(t,i,n){this.Uz()?this.Iz.send("event",t,V.yz.mz[2],i,n):this.Zz(this.Ez,new Array(t,i,n))},Y.zz.prototype.Sz=function(t,i,n){this.Uz()?this.Iz.send("event",t,V.yz.mz[3],i,n):this.Zz(this.Sz,new Array(t,i,n))},Y.zz.prototype.Zz=function(t,i){this.ua!=Y.zz.Cz&&(null==this.Fz&&(this.Fz=new Array),this.Fz.push(new Array(t,i)))},Y.zz.prototype.Bz=function(){if(null!=this.Fz){for(var t=0,i=this.Fz.length;t<i;t++)this.Fz[t][0].apply(this,this.Fz[t][1]);this.Fz=null}},Y.Pz=function(){this.Fz=null,this.url=null},f._(Y.Pz,null,V.yz),Y.Pz.Dz="AdwaysAnalytics",Y.Pz.Kz="inexistingURL",Y.Pz.prototype.kz=function(t){this.url=Y.Pz.Kz;for(var i=t.length-1;-1<i;--i)if(t[i].kind==Y.Pz.Dz)return this.url=t[i].conf.url,this.Bz(),1;return 0},Y.Pz.prototype.Uz=function(){return null!=this.url&&this.url!=Y.zz.Cz},Y.Pz.prototype.Lz=function(t,i,n,s){this.Uz()?(new Image).src=this.url+"?category="+t+"&action="+i+"&label="+n+"&value="+s+"&rn="+w.St.Tt():this.Zz(this.Lz,new Array(t,i,n,s))},Y.Pz.prototype.Mz=function(t,i,n){this.Lz(t,V.yz.mz[0],i,n)},Y.Pz.prototype._z=function(t,i,n){this.Lz(t,V.yz.mz[1],i,n)},Y.Pz.prototype.Ez=function(t,i,n){this.Lz(t,V.yz.mz[2],i,n)},Y.Pz.prototype.Sz=function(t,i,n){this.Lz(t,V.yz.mz[3],i,n)},Y.Pz.prototype.Zz=function(t,i){this.url!=Y.Pz.Kz&&(null==this.Fz&&(this.Fz=new Array),this.Fz.push(new Array(t,i)))},Y.Pz.prototype.Bz=function(){if(null!=this.Fz){for(var t=0,i=this.Fz.length;t<i;t++)this.Fz[t][0].apply(this,this.Fz[t][1]);this.Fz=null}};var $=new Object;$.cs=new Object,$.cs.qz=++a.ft,$.cs.Gz=++a.ft,$.cs.Hz=++a.ft,$.cs.HA=++a.ft,$.cs.Xz=++a.ft,$.cs.Qz=++a.ft,$.cs.Vz=++a.ft,$.cs.uz=++a.ft,$.cs.Yz=++a.ft,$.cs.Wz=++a.ft,$.cs.$z=++a.ft,$.cs.tI=++a.ft,$.cs.iI=++a.ft,$.cs.Gp=++a.ft,$.cs.sI=++a.ft,$.cs.nI=++a.ft,$.cs.hI=++a.ft,$.cs.rI=++a.ft,$.cs.uI=++a.ft,$.cs.eI=++a.ft,$.cs.lI=++a.ft,$.cs.oA=++a.ft,$.cs.fI=++a.ft,$.cs.oI=++a.ft,$.cs.aI=++a.ft,$.cs.cI=++a.ft,$.cs.wI=++a.ft,$.vI=new Object,$.vI.NI=0,$.vI.bI=1,$.vI.yI=2,$.vI.mI=3,$.vI.Hd=4,$.vI.AI=5,$.dI=new Object,$.dI.pI=1,$.dI.OI=2,$.dI.jI=3,$.dI.kI=4,$.gI=new Object,$.gI.xI=1,$.gI.MI=2,$._I=new Object,$._I.NI=0,$._I.bI=3,$._I.yI=4,$._I.EI=5,$._I.mI=6,$.SI=new Object,$.SI.zI=1,$.SI.II=2,$.FI=new Object,$.FI.Vu=1,$.DI=new Object,$.DI.TI=1,$.DI.Zd=2,$.DI.Bd=3,$.CI=new Object,$.CI.JI=1,$.RI=new Object,$.RI.UI=1,$.RI.BI=2,$.RI.ZI=3,$.RI.KI=4,$.RI.LI=5,$.RI.qI=6,$.RI.GI=7,$.RI.HI=8,$.RI.XI=9,$.QI=new Object,$.QI.VI=1,$.QI.YI=2,$.WI=new Object,$.WI.$I=1,$.WI.tF=2,$.WI.iF=3,$.WI.sF=4,$.WI.nF=5,$.hF=new Object,$.hF.rF=2,$.hF.uF=3,$.eF=new Object,f.J($.eF),$.lF=new Object,f.J($.lF),$.fF=new Object,f.J($.fF,$.lF),$.oF=new Object,$.oF.aF=1,$.oF.cF=2,$.oF.wF=3,$.oF.vF=4,$.NF=new Object,$.NF.bF=1,$.NF.yF=2,$.NF.mF=3,$.NF.AF=4,$.dF=new Object,f.J($.dF),$.pF=new Object,f.J($.pF),$.OF=new Object,$.jF=new Object,$.jF.np=1,$.jF.kF=2,$.jF.sp=3,$.jF.gF=4,$.xF=new Object,$.xF.MF=1,$.xF._F=2,$.xF.EF=3,$.SF=new Object,f.J($.SF,P.lO),$.zF=new Object,f.J($.zF,$.SF),$.IF=new Object,f.J($.IF,a.vt),$.FF=new Object,f.J($.FF,P.NO),$.DF=new Object,f.J($.DF,$.FF),$.TF=new Object,f.J($.TF,R.$a,$.pF),$.CF=new Object,f.J($.CF,$.TF,J.tc),$.JF=new Object,f.J($.JF,H.EA,H.zA,H.SA),$.Yp=new Object,f.J($.Yp,P.Yp,$.pF),$.TO=new Object,f.J($.TO,$.Yp),$.RF=new Object,f.J($.RF,a.Ot,$.pF),$.UF=new Object,f.J($.UF,$.RF),$.BF=new Object,f.J($.BF,$.RF),$.ZF=new Object,f.J($.ZF,$.BF,$.UF),$.PF=new Object,f.J($.PF,Z.tc),$.KF=new Object,f.J($.KF,$.PF),$.ec=new Object,f.J($.ec,J.ec,$.pF),$.LF=new Object,f.J($.LF),$.qF=new Object,f.J($.qF,$.LF),$.GF=new Object,$.GF.HF=1,$.GF.XF=2,$.QF=new Object,f.J($.QF,a.Ot);var tt=new Object;tt.VF=function(){L.Xj.call(this),this.Xq=arguments[0],this.YF=null,this.WF=null,this.Gq=new Array},f._(tt.VF,L.Xj,$.zF),tt.VF.prototype.destroy=function(){var t=null;for(t=(L.Xj.prototype.destroy,L.Xj.prototype.destroy.apply(this,arguments)),null!=this.WF&&this.WF.$F(this);0<this.Gq.length;)this.tD(this.Gq[i]);return delete this.Gq,t+1},tt.VF.prototype.iD=function(){return this.sD(arguments[0])?0:(this.Gq.push(arguments[0]),arguments[0].nD(this),null!=this.WF&&this.WF.hD().Qr(arguments[0]),f.Z(arguments[0],$.BF)&&this.Qr(arguments[0].GM()),1)},tt.VF.prototype.rD=function(){var t=this.uD(arguments[0]);return t<this.Gq.length?(this.Gq.splice(t,1),f.Z(arguments[0],$.BF)&&this.Hl(arguments[0].GM()),arguments[0].eD(),1):0},tt.VF.prototype.uD=function(){for(var t=0;t<this.Gq.length&&this.Gq[t]!==arguments[0];)++t;return t},tt.VF.prototype.sD=function(){return this.uD(arguments[0])<this.Gq.length},tt.VF.prototype.lD=function(){return this.Gq.length},tt.VF.prototype.fD=function(){return this.Gq.concat()},tt.VF.prototype.oD=function(){return this.Xq},tt.VF.prototype.aD=function(){throw"not implemneted yet"},tt.VF.prototype.cD=function(){return this.YF},tt.VF.prototype.wD=function(){return this.WF},tt.VF.prototype.vD=function(){if(this.WF=arguments[0],null!=this.WF)for(var t=0;t<this.Gq.length;++t)this.Gq[t].ND(),this.WF.hD().Qr(this.Gq[t]);return 1},tt.VF.prototype.bD=function(){if(null!=this.WF)for(var t=0;t<this.Gq.length;++t)this.WF.hD().Hl(this.Gq[t]);return this.WF=null,1},tt.yD=function(t,i){c.jt.call(this,t),this.mD=i},f._(tt.yD,c.jt,$.IF),tt.yD.prototype.AD=function(){return this.mD},tt.PD=function(){c.Et.apply(this,arguments),this.WF=null,0<arguments.length&&this.KD(arguments[0]),this.LD=new Object,this.LD.fcn=null,this.LD.inst=null,this.qD=new Object,this.qD.fcn=null,this.qD.inst=null,this.GD=!1,this.mode=tt.PD.XD.HD},f._(tt.PD,c.Et,$.QF),tt.PD.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),null!==this.WF&&(this.WF.Ci($.cs.Hz,this.QD,this),null!=this.WF.VD()&&(this.WF.VD().Ci(H.cs.oA,this.YD,this),this.WF.VD().Ci(H.cs.aA,this.WD,this),this.WF.VD().Ci($.cs.fI,this.$D,this),this.WF.VD().Ci($.cs.oI,this.tT,this),this.WF.VD().Ci($.cs.aI,this.iT,this))),t+1},tt.PD.prototype.KD=function(){return this.WF!==arguments[0]?(null!=this.WF&&(this.WF.Ci($.cs.Hz,this.QD,this),null!=this.WF.VD()&&(this.WF.VD().Ci(H.cs.oA,this.YD,this),this.WF.VD().Ci(H.cs.aA,this.WD,this),this.WF.VD().Ci($.cs.fI,this.$D,this),this.WF.VD().Ci($.cs.oI,this.tT,this),this.WF.VD().Ci($.cs.aI,this.iT,this))),this.WF=arguments[0],null!=this.WF&&(null!=this.WF.VD()&&(this.LD=this.WF.VD().sT(),this.qD=this.WF.VD().nT(),this.GD=this.WF.VD().hT(),this.mode=this.WF.VD().rT(),this.WF.VD().Ti(H.cs.oA,this.YD,this),this.WF.VD().Ti(H.cs.aA,this.WD,this),this.WF.VD().Ti($.cs.fI,this.$D,this),this.WF.VD().Ti($.cs.oI,this.tT,this),this.WF.VD().Ti($.cs.aI,this.iT,this)),this.WF.Ti($.cs.Hz,this.QD,this)),1):0},tt.PD.prototype.QD=function(t){var i=t.Zr();null!=i&&(i.Ci(H.cs.oA,this.YD,this),i.Ci(H.cs.aA,this.WD,this),i.Ci($.cs.fI,this.$D,this),i.Ci($.cs.oI,this.tT,this),i.Ci($.cs.aI,this.iT,this)),null!=this.WF.VD()&&(this.LD=this.WF.VD().sT(),this.qD=this.WF.VD().nT(),this.GD=this.WF.VD().hT(),this.mode=this.WF.VD().rT(),this.WF.VD().Ti(H.cs.oA,this.YD,this),this.WF.VD().Ti(H.cs.aA,this.WD,this),this.WF.VD().Ti($.cs.fI,this.$D,this),this.WF.VD().Ti($.cs.oI,this.tT,this),this.WF.VD().Ti($.cs.aI,this.iT,this))},tt.PD.prototype.$D=function(){this.LD=this.WF.VD().sT(),this.zs(new c.jt($.cs.oA))},tt.PD.prototype.tT=function(){this.qD=this.WF.VD().nT(),this.zs(new c.jt($.cs.oA))},tt.PD.prototype.YD=function(){this.zs(new c.jt($.cs.oA))},tt.PD.prototype.WD=function(){this.GD=this.WF.VD().hT(),this.zs(new c.jt($.cs.oA))},tt.PD.prototype.iT=function(){this.mode=this.WF.VD().rT(),this.zs(new c.jt($.cs.oA))},tt.PD.prototype.hT=function(){return this.GD},tt.PD.prototype.Fs=function(){return this.mode},tt.PD.prototype.uT=function(){return null!==this.qD.fcn?this.qD.fcn.call(this.qD.inst,arguments[0],arguments[1]):null},tt.PD.prototype.eT=function(){return null!==this.LD.fcn?3<arguments.length?this.LD.fcn.call(this.qD.inst,arguments[0],arguments[1],arguments[2],arguments[3]):this.LD.fcn.call(this.LD.inst,arguments[0],arguments[1],arguments[2]):null},tt.PD.lT=new Object,tt.PD.lT.Xd=1,tt.PD.lT.Yd=2,tt.PD.XD=new Object,tt.PD.XD.HD=1,tt.PD.XD.fT=2,tt.CJ=function(){c.Et.call(this),this.JJ=null,this.RJ=0,this.UJ=0,this.currentTime=Number.NaN,this.BJ=H.cA.vA,this.ZJ=new M.Pu(H.cA,H.cA.vA),this.ended=!1,this.playbackRate=1,this.fullscreen=!1,this.muted=!1,this.volume=1,this.PJ=0,this.KJ=!1,this.Kq=new Array,this.LJ=!1,this.qJ=!1,this.GJ=!1,this.HJ=!1,this.XJ=!1,this.QJ=!1,this.duration=Number.NaN,this.bT=new Array(Number.NaN,Number.NaN),this.VJ=new Array(1,0,0,1,0,0),this.YJ=new Array(1,0,0,1,0,0),this.AT=new Array(Number.NaN,Number.NaN),this.WJ=new Array(1,0,0,1,0,0),this.$J=new Array(Number.NaN,Number.NaN),this.tR=new Object,this.tR.wT=!1,this.tR.iR=null,this.tR.sR=new Date,this.tR.nR=this.currentTime,this.tR.hR=40,this.tR.rR=null;var n=this;this.tR.uR=function(){null!=n.tR.rR&&null!=n.tR.rR.fcn&&n.tR.rR.fcn.call(n.tR.rR.inst);var t=n.currentTime;n.currentTime=n.eR();var i=new Array(n.currentTime,!0);n.gv.Bn(4,i),n.zs(new c.kt(H.cs.Qm,t))},this.gv=e.currentBridge.jh({fcn:this._v,inst:this}),this.gv.rh(1,this.lR,this),this.gv.rh(2,this.gd,this),this.gv.rh(3,this.fR,this),this.gv.rh(8,this.oR,this),this.gv.rh(9,this.aR,this),this.gv.rh(10,this.cR,this),this.gv.rh(4,this.wR,this),this.gv.rh(16,this.vR,this),this.gv.rh(5,this.NR,this),this.gv.rh(34,this.bR,this),this.gv.rh(35,this.yR,this),this.LD=new Object,this.LD.fcn=null,this.LD.inst=null,this.qD=new Object,this.qD.fcn=null,this.qD.inst=null,this.GD=!1,this.Qq=tt.PD.XD.HD},f._(tt.CJ,c.Et,$.JF),tt.CJ.prototype.destroy=function(){clearInterval(this.tR.iR),e.currentBridge.gh(this.gv);return(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments))+1},tt.CJ.prototype._v=function(){var t=new Object;return t[1]=this.BJ,t[2]=this.currentTime,t[3]=this.muted,t[4]=this.volume,t[5]=this.duration,t[6]=this.playbackRate,t[8]=this.tR.wT,t[22]=this.YJ.valueOf(),t[11]=this.WJ.valueOf(),t[20]=this.$J.concat(),t[21]=this.AT.concat(),t[23]=this.bT.concat(),t[18]=this.XJ,t[24]=this.QJ,t[25]=this.RJ,t},tt.CJ.prototype.Ev=function(){return this.gv},tt.CJ.prototype.yR=function(){if(0<arguments.length&&arguments[0].valueOf()){var t=this.RJ;return this.RJ++,this.gv.Bn(35,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Dm,t)),1}return 0},tt.CJ.prototype.mR=function(){return this.RJ},tt.CJ.prototype.oC=function(){return this.WF!==arguments[0]?(this.WF=arguments[0],1):0},tt.CJ.prototype.eR=function(){return this.tR.nR+(new Date-this.tR.sR)*this.playbackRate.valueOf()/1e3},tt.CJ.prototype.AR=function(){return this.tR.wT},tt.CJ.prototype.dR=function(){return this.pR.apply(this,p.yr(arguments))},tt.CJ.prototype.pR=function(){if(arguments[0]==this.tR.wT)return 0;var t=this.tR.wT;return this.tR.wT?clearInterval(this.tR.iR):this.BJ.valueOf()==H.cA.wA&&(this.tR.sR=new Date,this.tR.nR=this.currentTime,this.tR.iR=setInterval(this.tR.uR,this.tR.hR)),this.tR.wT=arguments[0],this.gv.Bn(12,Array.prototype.slice.call(arguments)),this.zs(new c.kt($.cs.Vz,t)),1},tt.CJ.prototype.OR=function(){return null==arguments[0]?this.tR.rR=null:(this.tR.rR=new Object,this.tR.rR.fcn=arguments[0],this.tR.rR.inst=1<arguments.length?arguments[1]:null),1},tt.CJ.prototype.jR=function(){return this.kR.apply(this,p.mr(arguments))},tt.CJ.prototype.kR=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=0,n=this.bT.concat();return this.bT[0]!=arguments[0][0]&&(this.bT[0]=arguments[0][0],i|=E.vf.gf),this.bT[1]!=arguments[0][1]&&(this.bT[1]=arguments[0][1],i|=E.vf.xf),(t||0!=i)&&(this.gv.Bn(31,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Gm,n))),i},tt.CJ.prototype.gR=function(){return this.xR.apply(this,p.mr(arguments))},tt.CJ.prototype.xR=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=0,n=this.AT.concat();return this.AT[0]!=arguments[0][0]&&(this.AT[0]=arguments[0][0],i|=E.vf.gf),this.AT[1]!=arguments[0][1]&&(this.AT[1]=arguments[0][1],i|=E.vf.xf),(t||0!=i)&&(this.gv.Bn(13,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.qm,n))),i},tt.CJ.prototype.MR=function(){return this._R.apply(this,p.pr(arguments))},tt.CJ.prototype._R=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=0,n=this.YJ.concat();return this.YJ[0]!=arguments[0][0]&&(this.YJ[0]=arguments[0][0],i|=E.vf.Nf),this.YJ[1]!=arguments[0][1]&&(this.YJ[1]=arguments[0][1],i|=E.vf.bf),this.YJ[2]!=arguments[0][2]&&(this.YJ[2]=arguments[0][2],i|=E.vf.yf),this.YJ[3]!=arguments[0][3]&&(this.YJ[3]=arguments[0][3],i|=E.vf.mf),this.YJ[4]!=arguments[0][4]&&(this.YJ[4]=arguments[0][4],i|=E.vf.gf),this.YJ[5]!=arguments[0][5]&&(this.YJ[5]=arguments[0][5],i|=E.vf.xf),(t||0!=i)&&(this.gv.Bn(32,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Pm,n))),i},tt.CJ.prototype.ER=function(){return this.SR.apply(this,p.mr(arguments))},tt.CJ.prototype.SR=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=0,n=this.$J.concat();return this.$J[0]!=arguments[0][0]&&(this.$J[0]=arguments[0][0],i|=E.vf.gf),this.$J[1]!=arguments[0][1]&&(this.$J[1]=arguments[0][1],i|=E.vf.xf),(t||0!=i)&&(this.gv.Bn(14,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Lm,n))),i},tt.CJ.prototype.zR=function(){return this.IR.apply(this,p.pr(arguments))},tt.CJ.prototype.IR=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=0,n=this.WJ.concat();return this.WJ[0]!=arguments[0][0]&&(this.WJ[0]=arguments[0][0],i|=E.vf.Nf),this.WJ[1]!=arguments[0][1]&&(this.WJ[1]=arguments[0][1],i|=E.vf.bf),this.WJ[2]!=arguments[0][2]&&(this.WJ[2]=arguments[0][2],i|=E.vf.yf),this.WJ[3]!=arguments[0][3]&&(this.WJ[3]=arguments[0][3],i|=E.vf.mf),this.WJ[4]!=arguments[0][4]&&(this.WJ[4]=arguments[0][4],i|=E.vf.gf),this.WJ[5]!=arguments[0][5]&&(this.WJ[5]=arguments[0][5],i|=E.vf.xf),(t||0!=i)&&(this.gv.Bn(15,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Km,n))),i},tt.CJ.prototype.vz=function(){return this.vR.apply(this,p.br(arguments))},tt.CJ.prototype.vR=function(){if(1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.duration){var t=this.duration;return this.duration=arguments[0],this.gv.Bn(16,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Cm,t)),1}return 0},tt.CJ.prototype.FR=function(){return this.DR.apply(this,p.yr(arguments))},tt.CJ.prototype.DR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.HJ?(this.HJ=arguments[0],this.gv.Bn(17,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Xm,!arguments[0])),1):0},tt.CJ.prototype.TR=function(){return this.CR.apply(this,p.yr(arguments))},tt.CJ.prototype.CR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.LJ?(this.LJ=arguments[0],this.gv.Bn(18,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Vm,!arguments[0])),1):0},tt.CJ.prototype.JR=function(){return this.RR.apply(this,p.yr(arguments))},tt.CJ.prototype.RR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.qJ?(this.qJ=arguments[0],this.gv.Bn(19,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.sA,!arguments[0])),1):0},tt.CJ.prototype.UR=function(){return this.BR.apply(this,p.yr(arguments))},tt.CJ.prototype.BR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.GJ?(this.GJ=arguments[0],this.gv.Bn(20,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Wm,!arguments[0])),1):0},tt.CJ.prototype.ZR=function(){return this.PR.apply(this,p.yr(arguments))},tt.CJ.prototype.PR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.XJ?(this.XJ=arguments[0],this.gv.Bn(21,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.eA,!arguments[0])),1):0},tt.CJ.prototype.KR=function(){return this.LR.apply(this,p.yr(arguments))},tt.CJ.prototype.LR=function(){return 1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.QJ?(this.QJ=arguments[0],this.gv.Bn(33,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.lA,!arguments[0])),1):0},tt.CJ.prototype.Nz=function(){return this.duration},tt.CJ.prototype.gT=function(){var t=!(1<arguments.length)||arguments[1].valueOf();return this.ST(arguments[0])?0:(this.Kq.push(arguments[0]),t&&this.zs(new tt.yD($.cs.rI,arguments[0])),1)},tt.CJ.prototype.MT=function(){var t=!(1<arguments.length)||arguments[1].valueOf(),i=this.zT(arguments[0]);return i<this.Kq.length?(this.Kq.splice(i,1),t&&this.zs(new tt.yD($.cs.uI,arguments[0])),1):0},tt.CJ.prototype.zT=function(){for(var t=0;t<this.Kq.length&&this.Kq[t]!==arguments[0];)++t;return t},tt.CJ.prototype.ST=function(){return this.zT(arguments[0])<this.Kq.length},tt.CJ.prototype.DT=function(){return this.Kq.concat()},tt.CJ.prototype.qR=function(){return this.GR.apply(this,p.pr(arguments))},tt.CJ.prototype.GR=function(){var t=0,i=this.VJ.concat();return this.VJ[0]!=arguments[0][0]&&(this.VJ[0]=arguments[0][0],t|=E.vf.Nf),this.VJ[1]!=arguments[0][1]&&(this.VJ[1]=arguments[0][1],t|=E.vf.bf),this.VJ[2]!=arguments[0][2]&&(this.VJ[2]=arguments[0][2],t|=E.vf.yf),this.VJ[3]!=arguments[0][3]&&(this.VJ[3]=arguments[0][3],t|=E.vf.mf),this.VJ[4]!=arguments[0][4]&&(this.VJ[4]=arguments[0][4],t|=E.vf.gf),this.VJ[5]!=arguments[0][5]&&(this.VJ[5]=arguments[0][5],t|=E.vf.xf),0!=t&&(this.gv.Bn(22,Array.prototype.slice.call(arguments)),this.zs(new c.kt($.cs.Qz,i))),t},tt.CJ.prototype.HR=function(){return this.VJ.concat()},tt.CJ.prototype.XR=function(){this.PJ++;var t=this.KJ;return this.KJ=!0,t||this.zs(new c.kt($.cs.Xz,t)),1},tt.CJ.prototype.QR=function(){this.PJ--,this.PJ<0&&(this.PJ=0);var t=this.KJ;return this.KJ=0<this.PJ,t!=this.KJ&&this.zs(new c.kt($.cs.Xz,t)),1},tt.CJ.prototype.VR=function(){return this.KJ},tt.CJ.prototype.eC=function(){return this.currentTime},tt.CJ.prototype.YR=function(){return this.BJ},tt.CJ.prototype.WR=function(){return this.ended},tt.CJ.prototype.$R=function(){return this.playbackRate},tt.CJ.prototype.tU=function(){return r.warn("not implemented yet"),new Array},tt.CJ.prototype.iU=function(){return r.warn("not implemented yet"),new Array},tt.CJ.prototype.sU=function(){return r.warn("not implemented yet"),new Date},tt.CJ.prototype.lR=function(){var t=0<arguments.length&&arguments[0].valueOf();if(0!=this.PJ)return-1;var i=this.BJ;return t||i!=H.cA.wA?(this.BJ=H.cA.wA,this.tR.wT&&i!=H.cA.wA&&(this.tR.sR=new Date,this.tR.nR=this.currentTime,this.tR.iR=setInterval(this.tR.uR,this.tR.hR)),this.gv.Bn(1,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Ym,i)),1):0},tt.CJ.prototype.gd=function(){var t=0<arguments.length&&arguments[0].valueOf(),i=this.BJ;if(t||i!=H.cA.vA){if(this.BJ=H.cA.vA,this.tR.wT&&i!=H.cA.vA){clearInterval(this.tR.iR);var n=this.currentTime;this.currentTime=this.eR(),(isNaN(n)||isNaN(this.currentTime)||.001<Math.abs(this.currentTime-n))&&this.zs(new c.kt(H.cs.Qm,n))}return this.gv.Bn(2,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Ym,i)),1}return 0},tt.CJ.prototype.fR=function(){0<arguments.length&&arguments[0].valueOf();var t=this.ended;return this.ended=!0,this.gv.Bn(3,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.$m,t)),1},tt.CJ.prototype.nU=function(){return this.wR.apply(this,p.br(arguments))},tt.CJ.prototype.wR=function(){var t,i=1<arguments.length&&arguments[1].valueOf();if(t=this.tR.wT?this.tR.nR:this.currentTime,i||isNaN(arguments[0])||isNaN(t)||.001<Math.abs(t-arguments[0])){var n=this.currentTime;return this.currentTime=arguments[0],this.tR.wT&&(this.tR.sR=new Date,this.tR.nR=arguments[0]),this.gv.Bn(4,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Qm,n)),1}return 0},tt.CJ.prototype.hU=function(){return this.NR.apply(this,p.br(arguments))},tt.CJ.prototype.NR=function(){if(1<arguments.length&&arguments[1].valueOf()||arguments[0]!=this.playbackRate){if(this.tR.wT){var t=this.currentTime;this.currentTime=this.eR(),(isNaN(t)||isNaN(this.currentTime)||.001<Math.abs(this.currentTime-t))&&this.zs(new c.kt(H.cs.Qm,t)),this.tR.sR=new Date,this.tR.nR=this.currentTime}var i=this.playbackRate;return this.playbackRate=arguments[0],this.gv.Bn(5,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.iA,i)),1}return 0},tt.CJ.prototype.bR=function(){return this.gv.Bn(34,Array.prototype.slice.call(arguments)),this.zs(new c.xt(arguments[0],arguments[1])),1},tt.CJ.prototype.rU=function(){return this.LJ},tt.CJ.prototype.uU=function(){return this.qJ},tt.CJ.prototype.eU=function(){return this.GJ},tt.CJ.prototype.CT=function(){return this.bT.concat()},tt.CJ.prototype.KT=function(){return this.AT.concat()},tt.CJ.prototype.ZT=function(){return this.YJ.concat()},tt.CJ.prototype.WT=function(){return this.$J.concat()},tt.CJ.prototype.PT=function(){return this.WJ.concat()},tt.CJ.prototype.lU=function(){return this.fullscreen},tt.CJ.prototype.Ys=function(){return 0<arguments.length&&arguments[0].valueOf()||!this.fullscreen?(this.fullscreen=!0,this.gv.Bn(6,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Hm,!1)),1):0},tt.CJ.prototype.Xs=function(){return 0<arguments.length&&arguments[0].valueOf()||this.fullscreen?(this.fullscreen=!1,this.gv.Bn(7,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.Hm,!0)),1):0},tt.CJ.prototype.fU=function(){return this.HJ},tt.CJ.prototype.oU=function(){return this.muted},tt.CJ.prototype.aU=function(){return this.volume},tt.CJ.prototype.oR=function(){return 0<arguments.length&&arguments[0].valueOf()||!this.muted?(this.muted=!0,this.gv.Bn(8,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.rA,!1)),1):0},tt.CJ.prototype.aR=function(){return 0<arguments.length&&arguments[0].valueOf()||this.muted?(this.muted=!1,this.gv.Bn(9,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.rA,!0)),1):0},tt.CJ.prototype.cU=function(){return this.cR.apply(this,p.br(arguments))},tt.CJ.prototype.cR=function(){var t=1<arguments.length&&arguments[1].valueOf(),i=arguments[0];if(arguments[0]<0?i=0:1<arguments[0]&&(i=1),t||i!=this.volume){var n=this.volume;return this.volume=i,this.gv.Bn(10,Array.prototype.slice.call(arguments)),this.zs(new c.kt(H.cs.uA,n)),1}return 0},tt.CJ.prototype.wU=function(){return this.XJ},tt.CJ.prototype.vU=function(){return this.QJ},tt.CJ.prototype.NU=function(){throw"not implemented yet"},tt.CJ.prototype.bU=function(){return this.JJ},tt.CJ.prototype.yU=function(){return r.warn("deprecated call"),this.readyState},tt.CJ.prototype.mU=function(){this.zs(new c.jt(H.cs.oA))},tt.CJ.prototype.AU=function(){return this.qD.fcn!==arguments[0]?(this.qD.fcn=arguments[0],1<arguments.length&&(this.qD.inst=arguments[1]),this.zs(new c.jt($.cs.oI)),1):0},tt.CJ.prototype.nT=function(){return this.qD},tt.CJ.prototype.dU=function(){return this.LD.fcn!==arguments[0]?(this.LD.fcn=arguments[0],1<arguments.length&&(this.LD.inst=arguments[1]),this.zs(new c.jt($.cs.fI)),1):0},tt.CJ.prototype.sT=function(){return this.LD},tt.CJ.prototype.pU=function(){return this.GD!==arguments[0].valueOf()?(this.GD=arguments[0].valueOf(),this.zs(new c.jt(H.cs.aA)),1):0},tt.CJ.prototype.hT=function(){return this.GD},tt.CJ.prototype.FJ=function(){return arguments[0].valueOf()!==this.Qq?(this.Qq=arguments[0].valueOf(),this.zs(new c.jt($.cs.aI)),1):0},tt.CJ.prototype.rT=function(){return this.Qq},tt.CJ.prototype.OU=function(){return this.ZJ};new Object;e.lib.ready=!0}catch(t){e.lib.ready=!1,e.lib.error=t}void 0===e.interactive&&(e.interactive=new Object),void 0===e.scw&&(e.scw=new Object),e.interactive.ready=!1,e.interactive.error=null,e.interactive.version=1;try{if(e.lib.ready){var it=new Object;it.cs=new Object,it.cs.vB=++a.ft,it.Vq=new Object,f.J(it.Vq),it.Wq=new Object,f.J(it.Wq);var nt=new Object;nt.VF=function(){tt.VF.apply(this,arguments),this.BP=null},f._(nt.VF,tt.VF),nt.VF.prototype.destroy=function(){return(tt.VF.prototype.destroy,tt.VF.prototype.destroy.apply(this,arguments))+1},nt.VF.prototype.XP=function(){return this.BP},nt.VF.prototype.QP=function(){return this.BP!==arguments[0]?(this.BP=arguments[0],1):0},nt.VF.prototype.vD=function(){if("function"==typeof tt.VF.prototype.VP?tt.VF.prototype.VP.apply(this,arguments):tt.VF.prototype.vD.apply(this,arguments),this.WF=arguments[0],null!=this.WF)for(var t=0;t<this.Gq.length;++t)this.Gq[t].eP();return 1},nt.CJ=function(){tt.CJ.apply(this,arguments),this.wK=!0,this.gv.rh(6,this.Ys,this),this.gv.rh(7,this.Xs,this)},f._(nt.CJ,tt.CJ,it.Vq),nt.CJ.prototype.gT=function(){if(0<("function"==typeof tt.CJ.prototype.layerAdded?tt.CJ.prototype.layerAdded.call(this,arguments[0],!1):tt.CJ.prototype.gT.call(this,arguments[0],!1))){var t=arguments[0].XP();return null==t&&((t=document.createElement("div")).style.setProperty("width","0px","important"),t.style.setProperty("height","0px","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("overflow","visible","important"),arguments[0].QP(t)),this.zs(new tt.yD($.cs.rI,arguments[0])),1}return 0},nt.CJ.prototype.MT=function(){if(!(0<("function"==typeof tt.CJ.prototype.layerRemoved?tt.CJ.prototype.layerRemoved.call(this,arguments[0],!1):tt.CJ.prototype.MT.call(this,arguments[0],!1))))return 0;this.zs(new tt.yD($.cs.uI,arguments[0]))},nt.CJ.prototype.oC=function(){var t=0;return 0<(t="function"==typeof tt.CJ.prototype.vK?tt.CJ.prototype.vK.apply(this,arguments):tt.CJ.prototype.oC.apply(this,arguments))&&null!=this.WF&&(this.wK?this.WF.kT():this.WF.xT()),t},nt.CJ.prototype.NK=function(){var t=null!=this.WF?this.WF.zD().valueOf():this.wK;return this.wK?0:(this.wK=!0,null!=this.WF&&this.WF.kT(),this.zs(new c.kt(it.cs.vB,t)),1)},nt.CJ.prototype.bK=function(){var t=null!=this.WF?this.WF.zD().valueOf():this.wK;return this.wK?(this.wK=!0,null!=this.WF&&this.WF.xT(),this.zs(new c.kt(it.cs.vB,t)),1):0},nt.CJ.prototype.yK=function(){return null!=this.WF?this.WF.zD().valueOf():this.wK},nt.Yq=function(){c.Et.call(this),this.BB=arguments[0],this.ZB=arguments[1],this.currentTime=this.ZB.eC().valueOf(),this.duration=this.ZB.Nz().valueOf();var i=this;this.$q=function(t){i.currentTime=i.ZB.eC().valueOf(),i.zs(new c.kt(H.cs.Qm,t.Zr()))},this.ZB.Ti(H.cs.Qm,this.$q,this),this.tH=function(t){i.duration=i.ZB.Nz().valueOf(),i.zs(new c.kt(H.cs.Cm,t.Zr()))},this.ZB.Ti(H.cs.Cm,this.tH,this),this.iH=function(t){i.zs(new c.kt(H.cs.Ym,t.Zr()))},this.ZB.Ti(H.cs.Ym,this.iH,this),this.nH=function(t){i.zs(new c.kt(it.cs.vB,t.Zr()))},this.ZB.Ti(it.cs.vB,this.nH,this)},f._(nt.Yq,c.Et,it.Wq),nt.Yq.prototype.destroy=function(){var t=null;return t=(c.Et.prototype.destroy,c.Et.prototype.destroy.apply(this,arguments)),this.ZB.Ci(H.cs.Qm,this.$q,this),this.ZB.Ci(H.cs.Cm,this.tH,this),this.ZB.Ci(H.cs.Ym,this.iH,this),this.ZB.Ci(it.cs.vB,this.nH,this),t+1},nt.Yq.prototype.lR=function(){this.BB.lR(!0)},nt.Yq.prototype.gd=function(){this.BB.gd(!0)},nt.Yq.prototype.nU=function(){this.BB.nU(arguments[0],!0)},nt.Yq.prototype.YR=function(){this.ZB.YR()},nt.Yq.prototype.eC=function(){this.ZB.eC()},nt.Yq.prototype.yK=function(){return this.ZB.yK().valueOf()},nt.Yq.prototype.NK=function(){return this.ZB.NK()},nt.Yq.prototype.bK=function(){return this.ZB.bK()},void 0===e.event&&(e.event=new Object),e.event.kindCounter=a.ft,e.event.Nt=a.vt,e.event.yt=a.bt,e.event.IErrorEventR=a.dt,e.event.IEventDispatcherR=a.Ot,e.event.EventDispatcher=c.Et,e.event.EventDispatcher.prototype.dispatchEvent=c.Et.prototype.zs,e.event.EventDispatcher.prototype.zs=function(){return this.dispatchEvent.apply(this,arguments)},e.event.EventDispatcher.prototype.isInstanceOf=c.Et.prototype.F,e.event.EventDispatcher.prototype.F=function(){return this.isInstanceOf.apply(this,arguments)},e.event.EventDispatcher.prototype.addEventListener=c.Et.prototype.Ti,e.event.EventDispatcher.prototype.Ti=function(){return this.addEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.removeEventListener=c.Et.prototype.Ci,e.event.EventDispatcher.prototype.Ci=function(){return this.removeEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.removeAllEventListeners=c.Et.prototype.hq,e.event.EventDispatcher.prototype.hq=function(){return this.removeAllEventListeners.apply(this,arguments)},e.event.EventDispatcher.prototype.nbEventListeners=c.Et.prototype.fq,e.event.EventDispatcher.prototype.fq=function(){return this.nbEventListeners.apply(this,arguments)},e.event.EventDispatcher.prototype.hasEventListener=c.Et.prototype.oq,e.event.EventDispatcher.prototype.oq=function(){return this.hasEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.sH=c.Et.prototype.aq,e.event.EventDispatcher.prototype.aq=function(){return this.sH.apply(this,arguments)},e.event.EventDispatcher.prototype.isRegisteredEvent=c.Et.prototype.cq,e.event.EventDispatcher.prototype.cq=function(){return this.isRegisteredEvent.apply(this,arguments)},e.event.Event=c.jt,e.event.Event.prototype.isInstanceOf=c.jt.prototype.F,e.event.Event.prototype.F=function(){return this.isInstanceOf.apply(this,arguments)},e.event.Event.prototype.getDispatcher=c.jt.prototype.rz,e.event.Event.prototype.rz=function(){return this.getDispatcher.apply(this,arguments)},e.event.Event.prototype.getKind=c.jt.prototype.$,e.event.Event.prototype.$=function(){return this.getKind.apply(this,arguments)},e.event.ValueEvent=c.kt,e.event.ValueEvent.prototype.getOldValue=c.kt.prototype.Zr,e.event.ValueEvent.prototype.Zr=function(){return this.getOldValue.apply(this,arguments)},e.event.KeyValueEvent=c._t,e.event.KeyValueEvent.prototype.getKey=c._t.prototype.tq,e.event.KeyValueEvent.prototype.tq=function(){return this.getKey.apply(this,arguments)},e.event.DataEvent=c.Mt,e.event.DataEvent.prototype.getData=c.Mt.prototype.On,e.event.DataEvent.prototype.On=function(){return this.getData.apply(this,arguments)},e.event.ERROR_EVENT=a.gt,e.event.ErrorEvent=c.xt,e.event.ErrorEvent.prototype.getErrorCode=c.xt.prototype.X,e.event.ErrorEvent.prototype.X=function(){return this.getErrorCode.apply(this,arguments)},e.event.ErrorEvent.prototype.getErrorMessage=c.xt.prototype.Y,e.event.ErrorEvent.prototype.Y=function(){return this.getErrorMessage.apply(this,arguments)},void 0===e.event.kindCounter&&(e.event.kindCounter=a.ft),void 0===e.geom&&(e.geom=new Object),e.geom.evaluateContentRect=C.hy,void 0===e.resource&&(e.resource=new Object),e.resource.events=new Object,e.resource.events.CURRENT_TIME_CHANGED=H.cs.Qm,e.resource.events.PLAY_STATE_CHANGED=H.cs.Ym,e.resource.events.MUTED_CHANGED=H.cs.rA,e.resource.events.VOLUME_CHANGED=H.cs.uA,e.resource.events.PLAYBACK_RATE_CHANGED=H.cs.iA,e.resource.events.FULLSCREEN_CHANGED=H.cs.Hm,e.resource.events.RENDER_SIZE_CHANGED=H.cs.qm,e.resource.events.PLAYER_SIZE_CHANGED=H.cs.Gm,e.resource.events.STREAM_TRANSFORM_CHANGED=H.cs.Km,e.resource.events.RENDER_TRANSFORM_CHANGED=H.cs.Pm,e.resource.events.STREAM_SIZE_CHANGED=H.cs.Lm,e.resource.events.ENDED_CHANGED=H.cs.$m,e.resource.events.READY_STATE_CHANGED=H.cs.Zm,e.resource.events.DURATION_CHANGED=H.cs.Cm,e.resource.events.CAN_CHANGE_FULLSCREEN_CHANGED=H.cs.Xm,e.resource.events.CAN_CHANGE_CURRENT_TIME_CHANGED=H.cs.Vm,e.resource.events.CAN_CHANGE_PLAYBACK_RATE_CHANGED=H.cs.sA,e.resource.events.CAN_CHANGE_PLAY_STATE_CHANGED=H.cs.Wm,e.resource.events.CAN_CHANGE_VOLUME_CHANGED=H.cs.eA,e.resource.events.CAN_TRANSFORM_RENDERER_CHANGED=H.cs.lA,e.resource.events.URL_CHANGED=H.cs.Dm,e.resource.playStates=new Object,e.resource.playStates.PLAYING=H.cA.wA,e.resource.playStates.PAUSED=H.cA.vA,e.resource.playStates.SEEKING=H.cA.NA,void 0===e.misc&&(e.misc=new Object),void 0===e.misc.html&&(e.misc.html=new Object),e.misc.html.getCssTransformGTA=N.$i,e.misc.html.gtToCSSMatrix=N.hs,e.misc.html.userAgent=new Object,e.misc.html.userAgent.UNKNOWN=N.ri.P,e.misc.html.userAgent.IOS=N.ri.ui,e.misc.html.userAgent.WINDOWS=N.ri.ei,e.misc.html.userAgent.MACOSX=N.ri.li,e.misc.html.userAgent.SAFARI=N.ri.fi,e.misc.html.userAgent.FIREFOX=N.ri.oi,e.misc.html.userAgent.OPERA=N.ri.ai,e.misc.html.userAgent.IE=N.ri.ci,e.misc.html.userAgent.CHROME=N.ri.wi,e.misc.html.userAgent.FENNEC=N.ri.vi,e.misc.html.userAgent.OPERA_MINI=N.ri.Ni,e.misc.html.userAgent.OPERA_MOBILE=N.ri.bi,e.misc.html.userAgent.APPLE_WEBKIT=N.ri.yi,e.misc.html.userAgent.PRESTO=N.ri.mi,e.misc.html.userAgent.GECKO=N.ri.Ai,e.misc.html.userAgent.TRIDENT=N.ri.di,e.misc.html.userAgent.IPAD=N.ri.pi,e.misc.html.userAgent.IPHONE=N.ri.Oi,e.misc.html.userAgent.IPOD=N.ri.ji,e.misc.html.userAgent.MAC=N.ri.ki,e.misc.html.userAgent.ANDROID=N.ri.gi,e.misc.html.userAgent.UA=N.ri.zi,e.misc.html.TargetBaseButton=N.Lt,e.misc.html.TargetBaseButton.prototype.setButtonPosition=N.Lt.prototype.Qt,e.misc.html.TargetBaseButton.prototype.Qt=function(){return this.setButtonPosition.apply(this,arguments)},e.misc.html.TargetBaseButton.prototype.setButtonDesign=N.Lt.prototype.Vt,e.misc.html.TargetBaseButton.prototype.Vt=function(){return this.setButtonDesign.apply(this,arguments)},e.misc.html.TargetBaseButton.prototype.getButtonElement=N.Lt.prototype.Yt,e.misc.html.TargetBaseButton.prototype.Yt=function(){return this.getButtonElement.apply(this,arguments)},e.misc.html.TargetBaseButton.prototype.getButtonPosition=N.Lt.prototype.Wt,e.misc.html.TargetBaseButton.prototype.Wt=function(){return this.getButtonPosition.apply(this,arguments)},e.misc.html.TargetBaseButton.prototype.getButtonDesign=N.Lt.prototype.$t,e.misc.html.TargetBaseButton.prototype.$t=function(){return this.getButtonDesign.apply(this,arguments)},e.misc.html.addEventListener=N.Ti,e.misc.html.removeEventListener=N.Ci,e.misc.html.addCSSClass=N.Vi,e.misc.html.removeCSSClass=N.Wi,e.misc.html.checkCSSClass=N.Yi,e.misc.html.addClickListener=N.Gi,e.misc.html.removeClickListener=N.Hi,e.misc.html.isTouchDevice=N.Ui,void 0===e.misc.html.fullscreen&&(e.misc.html.fullscreen=new Object),e.misc.html.fullscreen.events=new Object,e.misc.html.fullscreen.events.WILL_ENTER=b.cs.ws,e.misc.html.fullscreen.events.WILL_EXIT=b.cs.vs,e.misc.html.fullscreen.events.ENTERED=b.cs.Ns,e.misc.html.fullscreen.events.EXITED=b.cs.bs,e.misc.html.fullscreen.modes=new Object,e.misc.html.fullscreen.modes.FULLSCREEN=b.ys.ms,e.misc.html.fullscreen.modes.FULLBROWSER=b.ys.As,e.misc.html.fullscreen.Manager=y.Os,e.misc.html.fullscreen.Manager.prototype.preEnterFullscreen=y.Os.prototype.Ks,e.misc.html.fullscreen.Manager.prototype.Ks=function(){return this.preEnterFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.postEnterFullscreen=y.Os.prototype.Ls,e.misc.html.fullscreen.Manager.prototype.Ls=function(){return this.postEnterFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.preExitFullscreen=y.Os.prototype.qs,e.misc.html.fullscreen.Manager.prototype.qs=function(){return this.preExitFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.postExitFullscreen=y.Os.prototype.Gs,e.misc.html.fullscreen.Manager.prototype.Gs=function(){return this.postExitFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.getMode=y.Os.prototype.Fs,e.misc.html.fullscreen.Manager.prototype.Fs=function(){return this.getMode.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.isFullscreen=y.Os.prototype.Hs,e.misc.html.fullscreen.Manager.prototype.Hs=function(){return this.isFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.exitFullscreen=y.Os.prototype.Xs,e.misc.html.fullscreen.Manager.prototype.Xs=function(){return this.exitFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.getFullscreenDomElement=y.Os.prototype.Cs,e.misc.html.fullscreen.Manager.prototype.Cs=function(){return this.getFullscreenDomElement.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.getFullscreenHelper=y.Os.prototype.Vs,e.misc.html.fullscreen.Manager.prototype.Vs=function(){return this.getFullscreenHelper.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.setOwnerDocument=y.Os.prototype.Ds,e.misc.html.fullscreen.Manager.prototype.Ds=function(){return this.setOwnerDocument.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.setHelper=y.Os.prototype.Ts,e.misc.html.fullscreen.Manager.prototype.Ts=function(){return this.setHelper.apply(this,arguments)},e.misc.html.fullscreen.Manager.prototype.removeHelper=y.Os.prototype.Js,e.misc.html.fullscreen.Manager.prototype.Js=function(){return this.removeHelper.apply(this,arguments)},e.misc.html.fullscreen.Helper=y.Ws,e.misc.html.fullscreen.Helper.prototype.isFullscreen=y.Ws.prototype.Hs,e.misc.html.fullscreen.Helper.prototype.Hs=function(){return this.isFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Helper.prototype.enterFullscreen=y.Ws.prototype.Ys,e.misc.html.fullscreen.Helper.prototype.Ys=function(){return this.enterFullscreen.apply(this,arguments)},e.misc.html.fullscreen.Helper.prototype.getFullscreenDomElement=y.Ws.prototype.Cs,e.misc.html.fullscreen.Helper.prototype.Cs=function(){return this.getFullscreenDomElement.apply(this,arguments)},void 0===e.misc.string&&(e.misc.string=new Object),e.misc.string.defaultMacroList=A.$s,e.misc.string.macroReplacer=A.tn,void 0===e.hv&&(e.hv=new Object),e.hv.events=new Object,e.hv.events.NAME_CHANGED=$.cs.HA,e.hv.events.P2S_CONTROLLER_CHANGED=$.cs.Hz,e.hv.events.PAUSE_LOCKED_CHANGED=$.cs.Xz,e.hv.events.ID_CHANGED=$.cs.uz,e.hv.events.LAYOUT_CHANGED=$.cs.sI,e.hv.events.LAYER_ADDED=$.cs.rI,e.hv.events.LAYER_REMOVED=$.cs.uI,e.hv.events.ACTIVATED_STATE_CHANGED=$.cs.lI,e.hv.events.BL=$.cs.cI,e.hv.events.ZL=$.cs.wI,e.hv.layerIds=new Object,e.hv.layerIds.UNDEFINED=$.vI.NI,e.hv.layerIds.HOTSPOT=$.vI.bI,e.hv.layerIds.CONTROLLER=$.vI.yI,e.hv.layerIds.POPUP=$.vI.mI,e.hv.layerIds.TOP=$.vI.Hd,e.hv.layerIds.BACKGROUND=$.vI.AI,e.hv.enrichmentKinds=new Object,e.hv.enrichmentKinds.NI=$._I.NI,e.hv.enrichmentKinds.HOTSPOT=$._I.bI,e.hv.enrichmentKinds.CONTROLLER=$._I.yI,e.hv.enrichmentKinds.POPUP=$._I.mI,e.hv.actionKinds=new Object,e.hv.actionKinds.URL=$.oF.aF,e.hv.actionKinds.SEEK_TO=$.oF.cF,e.hv.actionKinds.ACTIVATION=$.oF.wF,e.hv.actionKinds.PLAYPAUSE=$.oF.vF,e.hv.targetURLModes=new Object,e.hv.targetURLModes.BLANK=$.gI.xI,e.hv.targetURLModes.SELF=$.gI.MI,e.hv.actionTriggerKinds=new Object,e.hv.actionTriggerKinds.HUMAN_CLICK=$.NF.bF,e.hv.actionTriggerKinds.BOT_ACTIVATE=$.NF.yF,e.hv.actionTriggerKinds.BOT_DEACTIVATE=$.NF.mF,e.hv.IActionOriginR=$.pF,e.hv.IActionTriggerR=$.dF,e.hv.IEnrichmentR=$.RF,e.hv.IDELayoutR=$.FF,tt.yD.prototype.getLayer=tt.yD.prototype.AD,tt.yD.prototype.AD=function(){return this.getLayer.apply(this,arguments)},e.hv.SceneControllerWrapper=tt.CJ,void 0===e.type&&(e.type=new Object),void 0===e.type.evt&&(e.type.evt=new Object),e.type.evt.ENUM=g.Wh,e.type.evt.BOOLEAN=g.jr,e.type.evt.IEnumR=g.nr,e.type.evt.Enum=M.Pu,e.type.evt.Enum.prototype.setV=M.Pu.prototype.Sr,e.type.evt.Enum.prototype.Sr=function(){return this.setV.apply(this,arguments)},e.type.evt.Enum.prototype.set=M.Pu.prototype.Er,e.type.evt.Enum.prototype.Er=function(){return this.set.apply(this,arguments)},e.interactive.events=new Object,e.interactive.events.INTERACTIVITY_ACTIVATED_CHANGED=it.cs.vB,e.interactive.Layer=nt.VF,e.interactive.Layer.prototype.getDomElement=nt.VF.prototype.XP,e.interactive.Layer.prototype.XP=function(){return this.getDomElement.apply(this,arguments)},e.interactive.Layer.prototype.getLayerId=nt.VF.prototype.oD,e.interactive.Layer.prototype.oD=function(){return this.getLayerId.apply(this,arguments)},e.interactive.SceneControllerWrapper=nt.CJ,e.interactive.SceneControllerWrapper.prototype.activateInteractivity=nt.CJ.prototype.NK,e.interactive.SceneControllerWrapper.prototype.NK=function(){return this.activateInteractivity.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.deactivateInteractivity=nt.CJ.prototype.bK,e.interactive.SceneControllerWrapper.prototype.bK=function(){return this.deactivateInteractivity.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getInteractivityIsActivated=nt.CJ.prototype.yK,e.interactive.SceneControllerWrapper.prototype.yK=function(){return this.getInteractivityIsActivated.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.play=nt.CJ.prototype.lR,e.interactive.SceneControllerWrapper.prototype.lR=function(){return this.play.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.pause=nt.CJ.prototype.gd,e.interactive.SceneControllerWrapper.prototype.gd=function(){return this.pause.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.end=nt.CJ.prototype.fR,e.interactive.SceneControllerWrapper.prototype.fR=function(){return this.end.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getPlayState=nt.CJ.prototype.YR,e.interactive.SceneControllerWrapper.prototype.YR=function(){return this.getPlayState.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getEnded=nt.CJ.prototype.WR,e.interactive.SceneControllerWrapper.prototype.WR=function(){return this.getEnded.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCurrentTime=nt.CJ.prototype.eC,e.interactive.SceneControllerWrapper.prototype.eC=function(){return this.getCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCurrentTime=nt.CJ.prototype.nU,e.interactive.SceneControllerWrapper.prototype.nU=function(){return this.setCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.mute=nt.CJ.prototype.oR,e.interactive.SceneControllerWrapper.prototype.oR=function(){return this.mute.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.unmute=nt.CJ.prototype.aR,e.interactive.SceneControllerWrapper.prototype.aR=function(){return this.unmute.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getMuted=nt.CJ.prototype.oU,e.interactive.SceneControllerWrapper.prototype.oU=function(){return this.getMuted.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setVolume=nt.CJ.prototype.cU,e.interactive.SceneControllerWrapper.prototype.cU=function(){return this.setVolume.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getVolume=nt.CJ.prototype.aU,e.interactive.SceneControllerWrapper.prototype.aU=function(){return this.getVolume.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getDuration=nt.CJ.prototype.Nz,e.interactive.SceneControllerWrapper.prototype.Nz=function(){return this.getDuration.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setPlaybackRate=nt.CJ.prototype.hU,e.interactive.SceneControllerWrapper.prototype.hU=function(){return this.setPlaybackRate.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getPlaybackRate=nt.CJ.prototype.$R,e.interactive.SceneControllerWrapper.prototype.$R=function(){return this.getPlaybackRate.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.enterFullscreen=nt.CJ.prototype.Ys,e.interactive.SceneControllerWrapper.prototype.Ys=function(){return this.enterFullscreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.exitFullscreen=nt.CJ.prototype.Xs,e.interactive.SceneControllerWrapper.prototype.Xs=function(){return this.exitFullscreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getFullscreen=nt.CJ.prototype.lU,e.interactive.SceneControllerWrapper.prototype.lU=function(){return this.getFullscreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getExtrapolateCurrentTime=nt.CJ.prototype.AR,e.interactive.SceneControllerWrapper.prototype.AR=function(){return this.getExtrapolateCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getRenderSize=nt.CJ.prototype.KT,e.interactive.SceneControllerWrapper.prototype.KT=function(){return this.getRenderSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getPlayerSize=nt.CJ.prototype.CT,e.interactive.SceneControllerWrapper.prototype.CT=function(){return this.getPlayerSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getStreamSize=nt.CJ.prototype.WT,e.interactive.SceneControllerWrapper.prototype.WT=function(){return this.getStreamSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getStreamTransform=nt.CJ.prototype.PT,e.interactive.SceneControllerWrapper.prototype.PT=function(){return this.getStreamTransform.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getRenderTransform=nt.CJ.prototype.ZT,e.interactive.SceneControllerWrapper.prototype.ZT=function(){return this.getRenderTransform.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanChangeVolume=nt.CJ.prototype.wU,e.interactive.SceneControllerWrapper.prototype.wU=function(){return this.getCanChangeVolume.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanTransformRenderer=nt.CJ.prototype.vU,e.interactive.SceneControllerWrapper.prototype.vU=function(){return this.getCanTransformRenderer.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanChangePlayState=nt.CJ.prototype.eU,e.interactive.SceneControllerWrapper.prototype.eU=function(){return this.getCanChangePlayState.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanChangePlaybackRate=nt.CJ.prototype.uU,e.interactive.SceneControllerWrapper.prototype.uU=function(){return this.getCanChangePlaybackRate.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanChangeCurrentTime=nt.CJ.prototype.rU,e.interactive.SceneControllerWrapper.prototype.rU=function(){return this.getCanChangeCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getCanChangeFullscreen=nt.CJ.prototype.fU,e.interactive.SceneControllerWrapper.prototype.fU=function(){return this.getCanChangeFullscreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getReadyState=nt.CJ.prototype.yU,e.interactive.SceneControllerWrapper.prototype.yU=function(){return this.getReadyState.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.layersToArray=nt.CJ.prototype.DT,e.interactive.SceneControllerWrapper.prototype.DT=function(){return this.layersToArray.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setRenderSize=nt.CJ.prototype.gR,e.interactive.SceneControllerWrapper.prototype.gR=function(){return this.setRenderSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setPlayerSize=nt.CJ.prototype.jR,e.interactive.SceneControllerWrapper.prototype.jR=function(){return this.setPlayerSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setStreamSize=nt.CJ.prototype.ER,e.interactive.SceneControllerWrapper.prototype.ER=function(){return this.setStreamSize.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setStreamTransform=nt.CJ.prototype.zR,e.interactive.SceneControllerWrapper.prototype.zR=function(){return this.setStreamTransform.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setRenderTransform=nt.CJ.prototype.MR,e.interactive.SceneControllerWrapper.prototype.MR=function(){return this.setRenderTransform.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setDuration=nt.CJ.prototype.vz,e.interactive.SceneControllerWrapper.prototype.vz=function(){return this.setDuration.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setExtrapolateCurrentTime=nt.CJ.prototype.dR,e.interactive.SceneControllerWrapper.prototype.dR=function(){return this.setExtrapolateCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanTransformRenderer=nt.CJ.prototype.KR,e.interactive.SceneControllerWrapper.prototype.KR=function(){return this.setCanTransformRenderer.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanChangeVolume=nt.CJ.prototype.ZR,e.interactive.SceneControllerWrapper.prototype.ZR=function(){return this.setCanChangeVolume.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanChangePlayState=nt.CJ.prototype.UR,e.interactive.SceneControllerWrapper.prototype.UR=function(){return this.setCanChangePlayState.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanChangePlaybackRate=nt.CJ.prototype.JR,e.interactive.SceneControllerWrapper.prototype.JR=function(){return this.setCanChangePlaybackRate.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanChangeCurrentTime=nt.CJ.prototype.TR,e.interactive.SceneControllerWrapper.prototype.TR=function(){return this.setCanChangeCurrentTime.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCanChangeFullscreen=nt.CJ.prototype.FR,e.interactive.SceneControllerWrapper.prototype.FR=function(){return this.setCanChangeFullscreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.notifyCameraChanged=nt.CJ.prototype.mU,e.interactive.SceneControllerWrapper.prototype.mU=function(){return this.notifyCameraChanged.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setFlatToSphere=nt.CJ.prototype.AU,e.interactive.SceneControllerWrapper.prototype.AU=function(){return this.setFlatToSphere.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setSphereToScreen=nt.CJ.prototype.dU,e.interactive.SceneControllerWrapper.prototype.dU=function(){return this.setSphereToScreen.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setStereo=nt.CJ.prototype.pU,e.interactive.SceneControllerWrapper.prototype.pU=function(){return this.setStereo.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.setCameraMode=nt.CJ.prototype.FJ,e.interactive.SceneControllerWrapper.prototype.FJ=function(){return this.setCameraMode.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.layerAdded=nt.CJ.prototype.gT,e.interactive.SceneControllerWrapper.prototype.gT=function(){return this.layerAdded.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.layerRemoved=nt.CJ.prototype.MT,e.interactive.SceneControllerWrapper.prototype.MT=function(){return this.layerRemoved.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.dispatchError=nt.CJ.prototype.bR,e.interactive.SceneControllerWrapper.prototype.bR=function(){return this.dispatchError.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getResourceChanged=nt.CJ.prototype.mR,e.interactive.SceneControllerWrapper.prototype.mR=function(){return this.getResourceChanged.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.changeResource=nt.CJ.prototype.yR,e.interactive.SceneControllerWrapper.prototype.yR=function(){return this.changeResource.apply(this,arguments)},e.interactive.SceneControllerWrapper.prototype.getAdPlayState=nt.CJ.prototype.OU,e.interactive.SceneControllerWrapper.prototype.OU=function(){return this.getAdPlayState.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement=nt.Yq,e.interactive.SCW2HTMLVideoElement.prototype.play=nt.Yq.prototype.lR,e.interactive.SCW2HTMLVideoElement.prototype.lR=function(){return this.play.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.pause=nt.Yq.prototype.gd,e.interactive.SCW2HTMLVideoElement.prototype.gd=function(){return this.pause.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.setCurrentTime=nt.Yq.prototype.nU,e.interactive.SCW2HTMLVideoElement.prototype.nU=function(){return this.setCurrentTime.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.getPlayState=nt.Yq.prototype.YR,e.interactive.SCW2HTMLVideoElement.prototype.YR=function(){return this.getPlayState.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.getCurrentTime=nt.Yq.prototype.eC,e.interactive.SCW2HTMLVideoElement.prototype.eC=function(){return this.getCurrentTime.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.getInteractivityIsActivated=nt.Yq.prototype.yK,e.interactive.SCW2HTMLVideoElement.prototype.yK=function(){return this.getInteractivityIsActivated.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.activateInteractivity=nt.Yq.prototype.NK,e.interactive.SCW2HTMLVideoElement.prototype.NK=function(){return this.activateInteractivity.apply(this,arguments)},e.interactive.SCW2HTMLVideoElement.prototype.deactivateInteractivity=nt.Yq.prototype.bK,e.interactive.SCW2HTMLVideoElement.prototype.bK=function(){return this.deactivateInteractivity.apply(this,arguments)},void 0===e.ajax&&(e.ajax=new Object),e.ajax.states=new Object,e.ajax.states.INVALID=K.VA.rp,e.ajax.states.READY=K.VA.mS,e.ajax.states.STARTED=K.VA.AS,e.ajax.states.INITIALIZING=K.VA.dS,e.ajax.states.DOING=K.VA.pS,e.ajax.states.DONE=K.VA.OS,e.ajax.events=new Object,e.ajax.events.STATE_CHANGED=K.cs.dm,e.ajax.Request=Q.jS,e.ajax.Request.prototype.setURL=Q.jS.prototype.KA,e.ajax.Request.prototype.KA=function(){return this.setURL.apply(this,arguments)},e.ajax.Request.prototype.setContentType=Q.jS.prototype.IS,e.ajax.Request.prototype.IS=function(){return this.setContentType.apply(this,arguments)},e.ajax.Request.prototype.setMethod=Q.jS.prototype.FS,e.ajax.Request.prototype.FS=function(){return this.setMethod.apply(this,arguments)},e.ajax.Request.prototype.setHeaders=Q.jS.prototype.DS,e.ajax.Request.prototype.DS=function(){return this.setHeaders.apply(this,arguments)},e.ajax.Request.prototype.addHeader=Q.jS.prototype.TS,e.ajax.Request.prototype.TS=function(){return this.addHeader.apply(this,arguments)},e.ajax.Request.prototype.setDataObject=Q.jS.prototype.CS,e.ajax.Request.prototype.CS=function(){return this.setDataObject.apply(this,arguments)},e.ajax.Request.prototype.setDataText=Q.jS.prototype.JS,e.ajax.Request.prototype.JS=function(){return this.setDataText.apply(this,arguments)},e.ajax.Request.prototype.getResponseText=Q.jS.prototype.RS,e.ajax.Request.prototype.RS=function(){return this.getResponseText.apply(this,arguments)},e.ajax.Request.prototype.getState=Q.jS.prototype.Dd,e.ajax.Request.prototype.Dd=function(){return this.getState.apply(this,arguments)},e.ajax.Request.prototype.getResponseObject=Q.jS.prototype.US,e.ajax.Request.prototype.US=function(){return this.getResponseObject.apply(this,arguments)},e.ajax.Request.prototype.getRequestDuration=Q.jS.prototype.BS,e.ajax.Request.prototype.BS=function(){return this.getRequestDuration.apply(this,arguments)},e.ajax.Request.prototype.getXHR=Q.jS.prototype.ZS,e.ajax.Request.prototype.ZS=function(){return this.getXHR.apply(this,arguments)},e.ajax.Request.prototype.load=Q.jS.prototype.KS,e.ajax.Request.prototype.KS=function(){return this.load.apply(this,arguments)},e.interactive.ready=!0}else e.interactive.ready=!1,e.interactive.error="lib error"}catch(t){e.interactive.ready=!1,e.interactive.error=t}}(window);
if (typeof (adways.resource.playStates.SEEKING) == "undefined")
    throw new Error("\"adways.resource.playStates.SEEKING\" is missing.");
if (typeof (adways.resource.playStates.PAUSED) == "undefined")
    throw new Error("\"adways.resource.playStates.PAUSED\" is missing.");
if (typeof (adways.resource.playStates.PLAYING) == "undefined")
    throw new Error("\"adways.resource.playStates.PLAYING\" is missing.");
if (typeof (adways.resource.events.VOLUME_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.VOLUME_CHANGED\" is missing.");
if (typeof (adways.resource.events.CURRENT_TIME_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.CURRENT_TIME_CHANGED\" is missing.");
if (typeof (adways.resource.events.MUTED_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.MUTED_CHANGED\" is missing.");
if (typeof (adways.resource.events.PLAYBACK_RATE_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.PLAYBACK_RATE_CHANGED\" is missing.");
if (typeof (adways.resource.events.FULLSCREEN_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.FULLSCREEN_CHANGED\" is missing.");
if (typeof (adways.resource.events.STREAM_SIZE_CHANGED) == "undefined")
    throw new Error("\"adways.resource.events.STREAM_SIZE_CHANGED\" is missing.");
if (typeof (adways.hv.events.PAUSE_LOCKED_CHANGED) == "undefined")
    throw new Error("\"adways.hv.events.PAUSE_LOCKED_CHANGED\" is missing.");
if (typeof (adways.hv.events.LAYER_ADDED) == "undefined")
    throw new Error("\"adways.hv.events.LAYER_ADDED\" is missing.");
if (typeof (adways.hv.events.LAYER_REMOVED) == "undefined")
    throw new Error("\"adways.hv.events.LAYER_REMOVED\" is missing.");
if (typeof (adways.geom.evaluateContentRect) == "undefined")
    throw new Error("\"adways.geom.evaluateContentRect\" is missing.");
if (typeof (adways.hv.layerIds.HOTSPOT) == "undefined")
    throw new Error("\"adways.hv.layerIds.HOTSPOT\" is missing.");
if (typeof (adways.hv.layerIds.POPUP) == "undefined")
    throw new Error("\"adways.hv.layerIds.POPUP\" is missing.");
if (typeof (adways.hv.layerIds.CONTROLLER) == "undefined")
    throw new Error("\"adways.hv.layerIds.CONTROLLER\" is missing.");
if (typeof (adways.hv.layerIds.UNDEFINED) == "undefined")
    throw new Error("\"adways.hv.layerIds.UNDEFINED\" is missing.");
ShowHeroesDelegate = function (p2s, s2p, iframeElement, delegateParams) {

    this.iframeId = iframeElement.id;
    this.iframeElement = iframeElement;
    this.videoElements = [];
    this.fullscreenChecker = this.iframeElement.contentDocument.getElementById('controls-host');
    var videoElements = this.iframeElement.contentDocument.getElementsByTagName('video');
    this.cssTextDefault = this.iframeElement.parentNode.style.cssText;

    this.currentVideo = this.iframeElement.contentDocument.getElementById('duplex-host'); // .className to get element video playing
    for (var i = 0; i < videoElements.length; i++) {
        // tab with videoElements and id as a key to get it easily via this.currentVideo
        this.videoElements[videoElements[i].id] = videoElements[i];
    }
    this.isFullscreen = false;

    this.p2s = p2s;
    this.s2p = s2p;

    this.zIndexLayers = 1;

    this.savePlayState = null;

    this.isPlayingAd = false;
    this.backgroundDiv = null;
    this.hotspotDiv = null;
    this.topDiv = null;
    this.popupDiv = null;
    this.controllerDiv = null;

    this.streamWidth = Number.NaN;
    this.streamHeight = Number.NaN;
    this.renderTransform = new Array(Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN);
    this.renderSize = new Array(Number.NaN, Number.NaN);

    var that = this;

    this.p2s.setExtrapolateCurrentTime(true);
    this.videoDurationListener = function () {
        that.p2s.setDuration(that.getCurrentVideo().duration);
    };
    this.videoDurationListener();

    this.videoTimeUpdateListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        if (that.isPlayingAd) return;
        that.p2s.setCurrentTime(event.target.currentTime);
        if (typeof event.target.duration != "undefined")
            that.p2s.setDuration(event.target.duration);
    };
    this.videoTimeUpdateListener(null, { target: { currentTime: 0 } }, this.iframeId);

    this.videoPlayStateListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        if (!that.isPlayingAd) {
            if (eventType == "video.playing") {
                that.p2s.play();
            } else {
                that.p2s.pause();
            }
        }
    };
    this.videoPlayStateListener(this.getCurrentVideo().paused ? 'video.pause' : 'video.playing', null, this.iframeId);

    this.isSeeking = false;
    this.videoSeekingListener = function () {
        if (!that.isSeeking && !that.isPlayingAd) {
            that.isSeeking = true;
            that.savePlayState = that.getCurrentVideo().paused;
            that.p2s.pause();
        }
    };

    this.videoSeekedListener = function () {
        if (that.isPlayingAd) return;
        that.isSeeking = false;
        if (that.savePlayState)
            that.p2s.pause();
        else
            that.p2s.play();
        if (!that.savePlayState)
            that.p2s.play();
    };

    this.videoEndedListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        if (that.isPlayingAd) return;
        that.p2s.end();
    };

    this.videoVolumeListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        if (that.isPlayingAd) return;
        if (that.getCurrentVideo().muted)
            that.p2s.mute();
        else
            that.p2s.unmute();
        that.p2s.setVolume(that.getCurrentVideo().volume);
    };
    this.videoVolumeListener(null, null, this.iframeId);

    if (typeof (this.videoElements.length > 0) === "object") {
        this.streamWidth = this.getCurrentVideo().videoWidth;
        this.streamHeight = this.getCurrentVideo().videoHeight;
        this.updateStreamRect();
    }
    var MEDIA_ERR_SRC_NOT_SUPPORTED = 403;
    this.videoErrorListener = function () {
        that.p2s.dispatchError(MEDIA_ERR_SRC_NOT_SUPPORTED, "The media resource specified by src was not usable.");
    };

    this.adImpressionListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        that.isPlayingAd = true;
        that.p2s.pause();
        if (that.backgroundDiv) {
            that.backgroundDiv.style.display = "none";
        }
        if (that.hotspotDiv) {
            that.hotspotDiv.style.display = "none";
        }
        if (that.controllerDiv) {
            that.controllerDiv.style.display = "none";
        }
        if (that.popupDiv) {
            that.popupDiv.style.display = "none";
        }
        if (that.topDiv) {
            that.topDiv.style.display = "none";
        }
    };

    this.adCompleteListener = function (eventType, event, iframeId) {
        if (typeof iframeId != "undefined" && iframeId != that.iframeId)
            return;
        if (that.backgroundDiv) {
            that.backgroundDiv.style.display = "block";
        }
        if (that.hotspotDiv) {
            that.hotspotDiv.style.display = "block";
        }
        if (that.controllerDiv) {
            that.controllerDiv.style.display = "block";
        }
        if (that.popupDiv) {
            that.popupDiv.style.display = "block";
        }
        if (that.topDiv) {
            that.topDiv.style.display = "block";
        }
        that.isPlayingAd = false;
        that.videoPlayStateListener(that.getCurrentVideo().paused ? 'video.pause' : 'video.playing', null, that.iframeId);
    };

    this.sizeWatcherListener = function () {
        var playerDiv = that.iframeElement.parentNode;

        var w = playerDiv.offsetWidth;
        var h = playerDiv.offsetHeight;

        var returnValue = that.updateRenderRect();
        returnValue += that.p2s.setPlayerSize(new Array(w, h));
        if (returnValue > 0) {
            that.updateStreamRect();
        }
        if (that.fullscreenChecker.className.match('is-fullscreen') != null && !that.isFullscreen) {
            that.isFullscreen = true;
            that.iframeElement.parentNode.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;padding-bottom:''";
            if (that.backgroundDiv) {
                that.backgroundDiv.style.setProperty('position', 'fixed', 'important');
            }
            if (that.hotspotDiv) {
                that.hotspotDiv.style.setProperty('position', 'fixed', 'important');
                that.hotspotDiv.style.setProperty('z-index', '100000000', 'important');
            }
            if (that.controllerDiv) {
                that.controllerDiv.style.setProperty('position', 'fixed', 'important');
                that.controllerDiv.style.setProperty('z-index', '100000001', 'important');
            }
            if (that.popupDiv) {
                that.popupDiv.style.setProperty('position', 'fixed', 'important');
                that.popupDiv.style.setProperty('z-index', '100000002', 'important');
            }
            if (that.topDiv) {
                that.topDiv.style.setProperty('position', 'fixed', 'important');
                that.topDiv.style.setProperty('z-index', '100000020', 'important');
            }
        } else if (that.fullscreenChecker.className.match('is-fullscreen') == null && that.isFullscreen) {
            that.isFullscreen = false;
            that.iframeElement.parentNode.style.cssText = that.cssTextDefault;
            if (that.backgroundDiv) {
                that.backgroundDiv.style.setProperty('position', 'absolute', 'important');
            }
            if (that.hotspotDiv) {
                that.hotspotDiv.style.setProperty('position', 'absolute', 'important');
                that.hotspotDiv.style.setProperty('z-index', that.zIndexLayers + 2, 'important');
            }
            if (that.controllerDiv) {
                that.controllerDiv.style.setProperty('position', 'absolute', 'important');
                that.controllerDiv.style.setProperty('z-index', that.zIndexLayers + 4, 'important');
            }
            if (that.popupDiv) {
                that.popupDiv.style.setProperty('position', 'absolute', 'important');
                that.popupDiv.style.setProperty('z-index', that.zIndexLayers + 5, 'important');
            }
            if (that.topDiv) {
                that.topDiv.style.setProperty('position', 'absolute', 'important');
                that.topDiv.style.setProperty('z-index', that.zIndexLayers + 20, 'important');
            }
        }
    };
    this.sizeWatcherListener();

    this.videoFullscreenListener = function (e) {
        that.sizeWatcherListener();
        // if (SHCore.api.isFullscreen()) {
        //     that.p2s.enterFullscreen();
        // }
        // else {
        //     that.p2s.exitFullscreen();
        // }
    };
    this.videoFullscreenListener();


    this.p2s.setCanChangeVolume(true);
    this.p2s.setCanChangeFullscreen(true);
    this.p2s.setCanChangePlaybackRate(true);
    this.p2s.setCanChangePlayState(true);
    this.p2s.setCanChangeCurrentTime(true);
    this.p2s.setCanTransformRenderer(true);
    //SHCore.api.subscribe("fullscreenchange", this.videoFullscreenListener);

    SHCore.api.subscribe("video.timeupdate", this.videoTimeUpdateListener);
    SHCore.api.subscribe("video.playing", this.videoPlayStateListener);
    SHCore.api.subscribe("video.pause", this.videoPlayStateListener);
    SHCore.api.subscribe("video.ended", this.videoEndedListener);
    SHCore.api.subscribe("video.volumechange", this.videoVolumeListener);
    SHCore.api.subscribe("video.error", this.videoErrorListener);
    SHCore.api.subscribe("ad.started", this.adImpressionListener);
    SHCore.api.subscribe("ad.ended", this.adCompleteListener);


    this.getCurrentVideo().addEventListener("seeking", this.videoSeekingListener);
    this.getCurrentVideo().addEventListener("seeked", this.videoSeekedListener);
    this.getCurrentVideo().addEventListener("durationchange", this.videoDurationListener);
    this.sizeWatcherTimer = setInterval(this.sizeWatcherListener, 250);
    //SHCore.api.subscribe("fullscreenchange", this.videoFullscreenListener);

    this.s2p.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.s2pPlayStateChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.VOLUME_CHANGED, this.s2pVolumeChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.MUTED_CHANGED, this.s2pMutedChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.s2pCurrentTimeChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.PLAYBACK_RATE_CHANGED, this.s2pPlaybackRateChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.FULLSCREEN_CHANGED, this.s2pFullscreenChangedListener, this);
    this.s2p.addEventListener(adways.hv.events.LAYER_ADDED, this.s2pLayerAddedListener, this);
    this.s2p.addEventListener(adways.hv.events.LAYER_REMOVED, this.s2pLayerRemovedListener, this);
    this.s2p.addEventListener(adways.resource.events.STREAM_SIZE_CHANGED, this.s2pStreamSizeChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.RENDER_SIZE_CHANGED, this.s2pRenderSizeChangedListener, this);
    this.s2p.addEventListener(adways.resource.events.RENDER_TRANSFORM_CHANGED, this.s2pRenderTransformChangedListener, this);



    var layers = this.s2p.layersToArray();
    for (var i = 0; i < layers.length; ++i) {
        this.s2pAddLayer(layers[i]);
    }

    this.s2pStreamSizeChangedListener();
};

ShowHeroesDelegate.prototype.getCurrentVideo = function () {
    return this.videoElements[this.currentVideo.className.trim().replace("visible", "video")];
};

ShowHeroesDelegate.prototype.getVideoElement = function () {
    return this.iframeElement;
};

ShowHeroesDelegate.prototype.destroy = function () {
    this.iframeElement.parentNode.style.cssText = this.cssTextDefault;
    this.iframeElement.style.setProperty("width", "100%", "important");
    this.iframeElement.style.setProperty("height", "100%", "important");
    this.iframeElement.style.removeProperty('transform');
    this.iframeElement.style.removeProperty('transformOrigin');
    this.iframeElement.style.removeProperty('msTransform');
    this.iframeElement.style.removeProperty('msTransformOrigin');

    if (this.iframeElement.getAttribute('data-prev-style') != null) {
        this.iframeElement.setAttribute('data-prev-style', 'position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;overflow:hidden;box-shadow:none !important;');
    };

    //Listener from scene
    this.s2p.removeEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.s2pPlayStateChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.VOLUME_CHANGED, this.s2pVolumeChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.MUTED_CHANGED, this.s2pMutedChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.s2pCurrentTimeChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.PLAYBACK_RATE_CHANGED, this.s2pPlaybackRateChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.FULLSCREEN_CHANGED, this.s2pFullscreenChangedListener, this);
    this.s2p.removeEventListener(adways.hv.events.LAYER_ADDED, this.s2pLayerAddedListener, this);
    this.s2p.removeEventListener(adways.hv.events.LAYER_REMOVED, this.s2pLayerRemovedListener, this);
    this.s2p.removeEventListener(adways.resource.events.STREAM_SIZE_CHANGED, this.s2pStreamSizeChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.RENDER_SIZE_CHANGED, this.s2pRenderSizeChangedListener, this);
    this.s2p.removeEventListener(adways.resource.events.RENDER_TRANSFORM_CHANGED, this.s2pRenderTransformChangedListener, this);

    SHCore.api.unsubscribe("video.timeupdate", this.videoTimeUpdateListener);
    SHCore.api.unsubscribe("video.playing", this.videoPlayStateListener);
    SHCore.api.unsubscribe("video.pause", this.videoPlayStateListener);
    SHCore.api.unsubscribe("video.ended", this.videoEndedListener);
    SHCore.api.unsubscribe("video.volumechange", this.videoVolumeListener);
    SHCore.api.unsubscribe("video.error", this.videoErrorListener);
    SHCore.api.unsubscribe("ad.started", this.adImpressionListener);
    SHCore.api.unsubscribe("ad.ended", this.adCompleteListener);


    this.getCurrentVideo().removeEventListener("seeking", this.videoSeekingListener);
    this.getCurrentVideo().removeEventListener("seeked", this.videoSeekedListener);
    this.getCurrentVideo().removeEventListener("durationchange", this.videoDurationListener);
    this.sizeWatcherTimer = setInterval(this.sizeWatcherListener, 250);

    clearInterval(this.sizeWatcherTimer);

};

ShowHeroesDelegate.prototype.getMediaURL = function () {
    if (typeof this.getCurrentVideo() !== "undefined" && typeof this.getCurrentVideo().currentSources === "function") {
        var currentSrcs = this.getCurrentVideo().currentSources();
        for (var i = 0; i < currentSrcs.length; i++) {
            if (currentSrcs[i].type === "video/mp4")
                return currentSrcs[i].src;
        }
    }
    return null;
};

ShowHeroesDelegate.prototype.s2pPlayStateChangedListener = function () {
    switch (this.s2p.getPlayState().valueOf()) {
        case adways.resource.playStates.PLAYING:
            SHCore.api.intentPlay(this.iframeId);
            break;
        case adways.resource.playStates.PAUSED:
            SHCore.api.intentPause(this.iframeId);
            break;
    }
};

ShowHeroesDelegate.prototype.s2pVolumeChangedListener = function () {
    if (!isNaN(this.s2p.getVolume().valueOf()))
        this.getCurrentVideo().volume = this.s2p.getVolume().valueOf();
};

ShowHeroesDelegate.prototype.s2pMutedChangedListener = function () {
    if (this.s2p.getMuted().valueOf())
        SHCore.api.intentMute(this.iframeId);
    else
        SHCore.api.intentUnmute(this.iframeId);
};

ShowHeroesDelegate.prototype.s2pCurrentTimeChangedListener = function () {
    if (!isNaN(this.s2p.getCurrentTime().valueOf()))
        this.getCurrentVideo().currentTime = this.s2p.getCurrentTime().valueOf();
    //        console.log("s2pCurrentTimeChangedListener : "+this.s2p.getCurrentTime().valueOf());
};

ShowHeroesDelegate.prototype.s2pPlaybackRateChangedListener = function () {
    //SHCore.api.playbackRate = this.s2p.getPlaybackRate().valueOf();
};

ShowHeroesDelegate.prototype.s2pFullscreenChangedListener = function () {
    if (this.s2p.getFullscreen().valueOf()) {
        //SHCore.api.requestFullscreen();
    }
    else {
        //SHCore.api.exitFullscreen();
    }
};

ShowHeroesDelegate.prototype.s2pLayerAddedListener = function (evt) {
    this.s2pAddLayer(evt.getLayer());
};

ShowHeroesDelegate.prototype.s2pAddLayer = function (layer) {
    var d = layer.getDomElement();
    d.style.position = "absolute";
    var top = 0;
    var left = 0;


    d.style.top = top + "px";
    d.style.left = left + "px";

    if (layer.getLayerId() == adways.hv.layerIds.TOP) {
        this.topDiv = d;
        this.topDiv.className = "adways-top-layer";
        this.topDiv.style.zIndex = this.zIndexLayers + 99;
        this.iframeElement.parentNode.appendChild(d);
    } else if (layer.getLayerId() == adways.hv.layerIds.BACKGROUND) {
        this.backgroundDiv = d;
        this.backgroundDiv.className = "adways-background-layer";
        this.iframeElement.parentNode.insertBefore(d, this.iframeElement);
    } else if (layer.getLayerId() == adways.hv.layerIds.HOTSPOT) {
        this.hotspotDiv = d;
        d.className = "adways-hotspot-layer";
        //d.style.zIndex = this.zIndexLayers;
        this.iframeElement.parentNode.appendChild(d);
    } else if (layer.getLayerId() == adways.hv.layerIds.POPUP) {
        this.popupDiv = d;
        d.className = "adways-popup-layer";
        d.style.zIndex = this.zIndexLayers + 2;
        this.iframeElement.parentNode.appendChild(d);
    } else if (layer.getLayerId() == adways.hv.layerIds.CONTROLLER) {
        this.controllerDiv = d;
        d.className = "adways-controller-layer";
        if (this.popupDiv != null) {
            this.iframeElement.parentNode.insertBefore(d, this.popupDiv);
        }
        else {
            this.iframeElement.parentNode.appendChild(d);
        }
    }
};

ShowHeroesDelegate.prototype.s2pLayerRemovedListener = function (evt) {
    var layer = evt.getLayer();
    var d = layer.getDomElement();
    this.iframeElement.parentNode.removeChild(d);
    switch (layer.getLayerId()) {
        case adways.hv.layerIds.BACKGROUND:
            this.backgroundDiv = null;
            break;
        case adways.hv.layerIds.HOTSPOT:
            this.hotspotDiv = null;
            break;
        case adways.hv.layerIds.POPUP:
            this.popupDiv = null;
            break;
        case adways.hv.layerIds.CONTROLLER:
            this.controllerDiv = null;
            break;
        case adways.hv.layerIds.TOP:
            this.topDiv = null;
            break;
    }
};

ShowHeroesDelegate.prototype.s2pStreamSizeChangedListener = function (evt) {
    if (isNaN(this.streamWidth) || isNaN(this.streamHeight)) {
        var streamSize = this.s2p.getStreamSize();

        //console.log("s2pStreamSizeChangedListener ", streamSize);
        if ((streamSize[0] !== this.streamWidth || streamSize[1] !== this.streamHeight)) {
            this.streamWidth = streamSize[0];
            this.streamHeight = streamSize[1];
            this.updateStreamRect();
        }
    }
};
ShowHeroesDelegate.prototype.s2pRenderSizeChangedListener = function (evt) {
    var newRenderSize = this.s2p.getRenderSize();

    this.iframeElement.style.setProperty("width", newRenderSize[0] * 100 / this.iframeElement.parentNode.offsetWidth + "%", "important");
    this.iframeElement.style.setProperty("height", newRenderSize[1] * 100 / this.iframeElement.parentNode.offsetHeight + "%", "important");
};
ShowHeroesDelegate.prototype.s2pRenderTransformChangedListener = function (evt) {
    var newRenderTransform = this.s2p.getRenderTransform();
    var cssTransform = adways.misc.html.gtToCSSMatrix(newRenderTransform);
    this.iframeElement.style.transform = cssTransform;
    this.iframeElement.style.transformOrigin = "top left";
    this.iframeElement.style.msTransform = cssTransform;
    this.iframeElement.style.msTransformOrigin = "top left";
};

ShowHeroesDelegate.prototype.updateRenderRect = function () {
    var res = 0;

    var newSize = new Array(this.getCurrentVideo().offsetWidth, this.getCurrentVideo().offsetHeight);
    if (this.renderSize[0] !== newSize[0] || this.renderSize[1] !== newSize[1]) {
        //        console.log("update Render Size", this.renderSize," !== ", newSize);
        res += this.p2s.setRenderSize(newSize);
        this.renderSize = newSize;
    }

    var transformMatrix = adways.misc.html.getCssTransformGTA(this.getCurrentVideo());
    if (this.renderTransform.join(",") !== transformMatrix.join(",")) { // Fragile but sufficient for matrix comparison
        //        console.log("update Render Transform", this.renderTransform.join(",")," !== ", transformMatrix.join(","));
        res += this.p2s.setRenderTransform(transformMatrix);
        this.renderTransform = transformMatrix;
    }
    return res;
};

ShowHeroesDelegate.prototype.updateStreamRect = function () {
    //    console.log("updateStreamRect w", this.streamWidth, "h", this.streamHeight);
    if (!isNaN(this.streamWidth) && !isNaN(this.streamHeight) && !isNaN(this.getCurrentVideo().offsetWidth) && !isNaN(this.getCurrentVideo().offsetHeight)) {
        var streamSize = new Array(this.streamWidth, this.streamHeight);
        var tmp = adways.geom.evaluateContentRect(streamSize, new Array(this.getCurrentVideo().offsetWidth, this.getCurrentVideo().offsetHeight));
        this.p2s.setStreamSize(new Array(tmp[2], tmp[3]));

        if (this.playerSizeIncludesControllerSize && !SHCore.api.isFullscreen()) {
            var cbDiv = SHCore.api.controlBar.el();
            var cp = this.evaluateControlBarPosition();
            if (cp == 4)
                tmp[0] -= cbDiv.offsetLeft;
            if (cp == 1)
                tmp[1] -= cbDiv.offsetTop;
            // not exact: when going through the "else if(playerDiv.offsetParent===cbDiv.offsetParent)" in "evaluateControlBarPosition", then tmp[0] += playerDiv.offsetLeft-cbDiv.offsetLeft;
        }
        this.p2s.setStreamTransform(new Array(1, 0, 0, 1, tmp[0], tmp[1]));
        //        console.log("updateStreamRect : ", new Array(1,0,0,1,tmp[0],tmp[1]));
    }
    else {
        if (!isNaN(this.streamWidth) && !isNaN(this.streamHeight)) {
            //console.warn("ShowHeroes is not able to determine the container size, positions and sizes may be wrong");
            this.p2s.setStreamSize(new Array(this.streamWidth, this.streamHeight));
        }
        else {
            //console.warn("ShowHeroes is not able to determine the native stream size, positions and sizes may be wrong");
            this.p2s.setStreamSize(new Array(this.getCurrentVideo().offsetWidth, this.getCurrentVideo().offsetHeight)); // we can set (NaN,NaN) but setting the offsets is preferable
        }
        this.p2s.setStreamTransform(new Array(1, 0, 0, 1, 0, 0));
    }
};
var publisherParams = [
    {'domain':'motomag.com',
    'youtubeParams': 
        {'playerParams':
                {'width':'100%', 'height':'100%'}
        },
    },
    {'domain':'infos-dijon.com',
    'youtubeParams': 
        {'css':
            {
                'position': 'absolute',
                'width': '100%',
                'height': '100%',
                'left': '0',
            }
        }
    },
    {'domain':'bleachmx.fr',
    'youtubeParams': 
        {'forceRebuild': true}
    },
]; 
                    var getPublisherParams = function() {
                        try {
                            window.topEl = window.top;
                        } catch (e) {
                            window.topEl = window.parent;
                        }
                        for (var i = 0; i < publisherParams.length; i++) {            
                            try {
                                if (window.topEl.location.hostname.match(publisherParams[i].domain) != null || publisherParams[i].domain.match(window.topEl.location.hostname) != null) {                                    
                                    return publisherParams[i];
                                    break;
                                }
                            } catch (e) {
                                console.warn(e);
                                continue;
                            }
                        }
                        return null;
                    };var adwKeywordsCollection = {"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords?filter-online=1\u0026page=1"},"first":{"href":"https:\/\/services.adways.com\/keywords?filter-online=1"},"last":{"href":"https:\/\/services.adways.com\/keywords?filter-online=1\u0026page=1"}},"_embedded":{"collection":[{"name":"Hoover - Animaux","keyword":"hoovermai2021","value":"1","associated_keywords":"chat, chien, hamster, lapin, souris, perroquet, oiseau, chaton, chiot","balises":"","online":"1","state":1,"id":"73","created":"2021-05-25 16:48:50","author":2758,"updated":"2021-05-25 16:48:50","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/73"}}},{"name":"Mercedes - Daimler - Mai Juin 2021","keyword":"mercedesmai2021","value":"1","associated_keywords":"malus, bonus, assurance, credit, prevention, citadine, renault, peugeot, permis, v\u00e9hicule, garage, voiture, moto, scooter, automobile, trajet, accrochage, pneu, auto, carburant, decapotable, break, camion, berline, cabriolet, covoiturage, monospace, depanneuse, immatriculation, stationnement, remorque, parking, concessionnaire, camionette, jante, peage, honda, volvo, jeep, citroen, volkswagen,ford, opel,dacia, audi, bmw, mercedes benz, nissan, suzuki, audi, chrysler, amg, fiat, clio, twingo, mazda, saab, lexus, vespa, toyota, kia, land rover, test, elle, il, melty","balises":"","online":"1","state":1,"id":"72","created":"2021-05-06 09:24:29","author":2758,"updated":"2021-05-06 09:24:29","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/72"}}},{"name":"Canon - Redline - Mots cl\u00e9s High Tech - 2021","keyword":"canonredlinehightech2021","value":"1","associated_keywords":"high-tech, high tech, technologie, iphone, smartphone, android, Ipad, macbook, Huawei, samsung, geek, intelligence artificielle, telecommunication, multimedia, consortium, domotique, adtech, smartech, biotech, technophile, hacking, telephone, iphone, samsung,  huawei, xiaomi, dell, ordinateur, portable, le, la","balises":"","online":"1","state":1,"id":"71","created":"2021-04-23 08:58:02","author":2758,"updated":"2021-05-06 09:23:15","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/71"}}},{"name":"Canon - Redline - Mots cl\u00e9s Camera","keyword":"canonredlinecamera2021","value":"0","associated_keywords":"photographe, portrait, macro, photographique, gravure, illustration, cadrage, appareil, daguerreotype, pellicule, peinture, argentique, reproduction, Daguerre, exposition, instantane, paysage, photogrammetrie, estampe, tirage, Nadar, photomaton, radiographie, photogravure, phototypie, architecture, Arles, cinema, cinematographie, heliographique, aeriennes, photomontage, retouche, sculpture, flash, Kodak, agrandisseur, autochrome, hologramme, photorealisme, phototheque, holographie, Man Ray, objectif, photogramme, retrospective, archives, artistique, contemporaine, Nikon,  Canon, Kodak, photography, belinographe,chronophotographie, macrophotographie, albertypie, ambrotypie, aristotypie, autotypie, bertillonnage, cadreur, calotypie, contretypie, cyanotypie, daguerreotypie, eclairage, enluminure, ferrotypie, heliotypie, kallitypie, lithographie, pannotypie, photofilmeur, photo filmeur, photographie instantanee, photomicrographie, photoreporter, photostop, photostoppeur, phototype, platinotypie, portraitiste, stereogramme, stereoscope, stereotypie, talbotypie, tintypie, woodburytypie, reflex, focale fixe","balises":"","online":"1","state":1,"id":"70","created":"2021-04-23 08:53:42","author":2758,"updated":"2021-04-23 08:54:20","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/70"}}},{"name":"Marionnaud - Blacklist - Mars 2021","keyword":"sublimemarionnaudblacklist","value":"1","associated_keywords":"ppda, patrick poivre arvor, pierre menes, anal, anale, anals, anales, anulingus, anus, BDSM, bite, bites, bondage, branle, branlees, branlees, branler, branlette, branlettes, bukake, capote, chatte, chattes, clitoris, connotation sexuelle, connotations sexuelles, contenu adulte, contenus adulte, culotte, culottes, cunnilingus, cyber sex, cyberpornographie, cyberpornographies, cyberpornographique, cybersex, decollete, decolletes, doighte, doightee, doighter, doigtage, echangisme, echangisme, echangismes, echangismes, echangiste, ejaculation, ejaculation, ejaculations, ejaculations, ejaculer, ejaculer, en chaleur, erection, erection, erections, erections, excreement, excrement, excrements, excrements, fellation, fellations, fesse, fessee, fessees, fesses, fetiche, fetiche, fetiches, fetiches, fetichisme, fetichisme, fetichismes, fetichismes, fetichiste, fetichiste, fetichistes, fetichistes, foutre, fuck, fuckme, fuckyou, gang bang, gang bangs, gangbang, gland, glands, god, godemiche, godemiche, godemiches, godemiches, gouine, gouines, hard, hards, hardcore, hardcores, inceste, incestes, lesbienne, lesbiennes, levrette, levrettes, lupanar, lupanars, maison close, tolerance, maisons closes, maisons tolerance, masochisme, masochismes, masochiste, masochistes, masturbation, masturbations, masturbe, masturbent, milf, milfs, nichon, nichons, nique, niquee, niquees, niquer, orgasme, orgasmes, orgie, orgies, partouse, partouses, partouze, partouzes, peep, penetration, penetrations, penis, pine, porn, porno, pornographie, pornographies, pornographique, pornographiques, pornos, porns, prepuce, prostitue, prostituee, prostituees, prostitues, prostitution, pute, putes, queue, queues, rectum, rectums, sadique, sadiques, sadisme, sado, sado masochisme, sadomasochiste, sadomasochistes, sados, salope, salopes, scato, scatos, se caresser, sein nu, seins nus, sex, sexe, sexuelle, sexuelles, sexuel, sexuels, site adulte, sites adulte, sodomie, sodomies, sodomise, softcore, sperme, striptease, strip tease, stripteases, strip teases, stripteaseur, strip teaseur, stripteaseurs, strip teaseurs, stripteaseuses, strip teaseuses, sucer , suce, pipe, teton, tetons, topless, transsexuel, transsexuels, sexe, vagins, vagin, vaginal, vaginale, vaginales, verge, verges, video adulte, video adulte, videos adulte, voyeurisme, voyeuriste, voyeuristes, vulve, vulves, agresse, agresse, agressee, agressees, agresser, agresses, agresseur, agresseurs, agression, agressions, airsoft, AK47, AK 47, AR15, AR 15, arme, arme, armee, armees, armement, armes, armes, arsenal, artillerie, artilleries, assaut, assauts, ba\u00efonnette, ba\u00efonnettes, balle, balles, beretta, berettas, blesse, blessee, blessees, blesses, blessure, braquage, braquages, braquer, calibre, calibres, carabine, carabines, champ bataille, champs batailles, cocktail Molotov, Colt, feu, couteau, couteau, couteaux, Desert Eagle, DesertEagle, Desert Eagle, explosif, explosifs, fusil, fusillade, fusillades, fusils, gang, gangs, Glock, grenade, grenades, Gun, Heckler, hold up, holdup, hold up, illegale, kalachnikov, kalachnikovs, Kalashnikov, Kalashnikovs, Koch, letales, M16, M 16, Missile, Missiles, mitraillette, mitraillettes, mitrailleur, mitrailleurs, mitrailleuse, mitrailleuses, Mortier, Mortiers, munition, munitions, nikolas cruz, ouvre le feu, paintball, Parkland, pistolet, Pistolet mitrailleur, Pistolet mitrailleurs, pistolets, poignard, poignardait, poignarde, poignarder , poignardes, poignards, revolver, revolvers, SA80, sniper, snipers, taser, tasers, accidentel, tireur elite, touche par balles, trafic armes, trafiquant, trafiquants, tue par balle, tue, tuee, tuees, tuer, tues, Uzi, abus, abuse, abusee, abusees, abuser, abuses, affaire gregory , affaire ma\u00eblys, affaire merah, agresse, agressee, agressees, agresser, agresses, allen, amedy coulibaly, antisocial, arnaque, arnaques, arnaqueur, arnaqueurs, assassin, assassinat, assassinats, assassine, assassinee, assassinees, assassiner, assassines, assassins, bagarre, bagarres, balance ton, balance ton porc, balancetonporc, bandit, bandits, Berkane Makhlouf, bertrand cantat, braquage, braquages, braque, braquee, braquees, braquer, braques, braqueur, braqueurs, brigand, brigands, brigitte lahaie, bruce weber, cambriolage, cambriolages, cambrioleurs, carjacking, car jacking, carnage, carnages, catherine deneuve, catherine millet, catherine robbe grillet, Cecile Bourgeon, chantage, chantages, chauffard, chauffards, commerces pilles, contrebande, contrebandes, contrefacon, contrefacons, corrompu, corrompus, corruption, corruptions, blessures, crime, crimes, criminalite, criminel, criminelle, criminelles, criminels, Daphne Caruana Galizia, darmanin, david hamilton, delinquance, delinquant sexuel, delit, delits, denis baupin, derobe, derobee, derobees, derober, derobes, detournement de fonds, devin kelley, disparition, disparitions, dommage corporel, ed westwick, emeute, emeutes, emile louis, emploi fictif, empoisonne, empoisonnee, empoisonnees, empoisonnement, empoisonnements, empoisonner, empoisonnes, enlevement, enlevement, enlevements, enlevements, ensanglante, ensanglantee, ensanglantees, Epstein, esclavage, esclave, esclaves, escroc, escrocs, evasion fiscale, extorsion, extorsions, extroque, extroquee, extroquees, extroquer, extroques, Fiona, fraude, fraudes, fugitif, fugitifs, fugitive, fugitives, gang, gang des barbares, gangs, gangster, gangsters, grand banditisme, guetapan, harcele, harcelee, harcelees, harcelement, harcelements, harceles, harvey weinstein, hold up, holdup, hold up, homicide, homicides, hooliganisme, hulot, ilan halimi, illegal, illegale, illegales, illegals, incendie, incendies, indecent, indecente, indecentes, indecents, innocent, intimidation, intimidations, Jeffrey Epstein, jonathann daval, kevin spacey, kidnap, laurent wauquiez, lesion, lesions, loubard, loubards, maelys, ma\u00eblys, mafia, mafias, mafieu, mafieux, mafioso, mafiosos, maltraitance, maltraitances, mario testino, massacre, massacres, matricide, mauvaise conduite, menace, menace, menacee, menacees, menacer, menaces, menaces, merah, meurtre, meurtres, meurtrier, meurtriers, michael fallon, Nordahl Lelandais, omar raddad, ordre public, paradise paper, paradise papers, parricide, parricides, patrick demarchelier, pedo, pedo, pedocriminel, pedocriminels, pedophile, pedophiles, pedopornographie, pedopornographique, pedopornographiques, pervert, perverts, poignard, poignarde, poignardee, poignardees, poignardes, poignards, polansky, police, polices, prejudice corporel, premeditation, Racket, racketter, compte, passeurs, passeurs, rixe, rixes, roman polansky, sang, sanglant, sevices corporels, Sutherland Springs, tariq ramadan, torture, tortures, tribune, truand, truands, tue, tuee, tuees, tuer, tues, vandalisme, vice, vices, villemin, viol, viole, violee, violees, violence, violences, violent, violents, violer, violeur, violeurs, viols, voleur, voyou, voyous, weinstein, wikileaks, woody allen, ghetto, ghettos, isabelle fouillot, 4U 9525, 4U9525, abattre, abattu, abattus, accident, accidente, accidentee, accidentees, accidentes, accidentogene, accidents, AH 5017, AH5017, Andreas Guenter Lubitz, Andreas G\u00fcnter Lubitz, Andreas Lubitz, asphyxie, asphyxie, asphyxiee, asphyxiees, asphyxier, asphyxies, attaque, attaque, attaque Charlie, Attaque contre Charlie, attaque Charlie, attaquee, attaquees, attaquer, attaques, aucun survivant, avalanche, avalanches, avion disparu, avion s ecrase, Bataclan, bebe secoue, bebes secoues, blesse grave, blesse leger, blesse par balle, blessee grave, blessee leger, blessee par balle, blessees grave, blessees leger, blessees par balle, blesses grave, blesses leger, blesses par balle, blessure, blessures, boite noire, bo\u00eete noire, boites noire, bo\u00eetes noires, brule vif, brulee vive, brulees vives, brules vifs, Brussels explosions, Bryce Williams, catastrophe aerienne, catastrophe Airbus, catastrophes aeriennes, catastrophe naturelle, deces, charlie hebdo, chute, chute avion, cockpit voice recorder, collision, collision , collision ferroviere, collision frontale, Costa Concordia, Crash, debris, decapite, decapitee, decapitees, decapiter, decapites, decede, decedee, decedees, decedes, deces, deflagration, deflagrations, demembre, demembrees, demembrees, demembrer, demembres, demembreur, depeceur, deraille, deraillee, deraillees, derailles, deraillr, dislocation, dislocations, disparu , disparu , dramatique accident, drame, ecrase, ecrasee, ecrasees, ecraser, ecrases, effondrement, empoisonne, empoisonnee, empoisonnees, empoisonnement, empoisonnements, empoisonner, empoisonnes, entorse, etat grave, explosion, explosion batterie, explosions, fatal, fatale, fauche, fauchee, fauchees, faucher, fauches, fracture, fractures, Francisco Garzon, Francisco Jose Garzon, genocide, genocides, gravement blesse, gravement blessees, gravement blessees, gravement blesser, gravement blesses, grievement blesse, grievement blessees, grievement blessees, grievement blesser, grievement blesses, helicoptere ecrase, holocauste, hospitalise, hospitalisee, hospitalisees, hospitaliser, hospitalises, Incendie, Incendie, Incendiee, Incendies, Incendiees, Incendier, infecte, infectee, infectees, infecter, infectes, infeste, infestee, infestees, infester, infestes, morts, Katmandou, Kermanshah, crash, l massacre, massacres, Membres humains retrouves, detresse, messages de detresse, meurent, meurt, MH17, MH370, mort, morte, mortel, mortel, mortelle, mortellement, mortellements, mortelles, mortels, mortes, morts, MS804, Norman Atlantic, noyade, noyades, noye, noyee, noyees, noyer, noyes, overdose, overdoses, papouasie, papouasie nouvelle guinee, parricides, patrick demarchelier, pedo, pedo, pedocriminel, pedocriminels, pedophile, pedophiles, pedopornographie, pedopornographique, pedopornographiques, pervert, perverts, plaie, plaies, poison, polansky, police, polices, post mortem, prejudice corporel, premeditation, premeditations, pris feu, QZ 8501, QZ8501, Racket, racketter, reglement , reglements comptes, retrouvees mortes, rixe, rixes, roman polansky, sang, sanglant, sanglante, sanglantes, sanglants, sans abri, sans abris, sans papiers, sdf, seisme, seismes, br\u00fbles, sevices corporels, crash, SpaceShipTwo, suicide, suicides, survivant, survivants, Sutherland Springs, tabasse, tabassee, tabassees, tabasser, tabasses, tariq ramadan, terrible accident, torture, tortures, tragedie, tragedies, trauma, traumatisme, traumatismes,des enfants,  force, tremblement tremblements , tribune, truand, truands, tuait, tuant, tue, tue, tuerie, tueries, tuez, US Bangla Airlines, vandalisme, vandalismes, Vester Flanagan, Vester L Flanagan, Vester Lee Flanagan, vice, vices, victime, victimes, villemin, viol, viole, violee, violees, Violence, violence, Violences, violences, violences, violent, violente, violente, violentee, violentees, violenter, violentes, violentes, violents, violents, violer, violeur, violeurs, viols, virus zika, voleur, voyou, voyous, weinstein, wikileaks, woody allen, Zika, crash, 1337X, Bittorrent, blueray rip, blue ray rip, bluerayrip, blue rayrip, cpasbien, DDL, Demonoid, direct download, directdownload, downlod, dvd rip, dvd screen, dvd src, DVDR, dvdrip, dvdscreen, dvdsrc, eDonkey2000, eMule, etree, ExoSee, ExtraTorrent, FileHippo, FlixFlux, Freenet, FrostWire, Gnucleus, GNUnet, gnutella, gtk gnutella, HDTV Rip, HDTVRip, I2Phex, I2PSnark, iMesh, iMule, isoHunt, pirates, Kazaa, Kazaa Lite, KCeasy, keygen, keygens, LimeWire, loi anti piratage, Manolito, Megaupload, Mininova, MLDonkey, MonoTorrent, Napster, Nodezilla, OpenBitTorrent, P2P, peer to peer, piratage , piratage , piratage , piratage , pirate, Pirate Bay, Pirater, proxybay, qBittorrent, R5 Rip, R5Rip, Retroshare, RipBot, RShare, Screener, Shareaza, ShareReactor, Sharing Max, skidrow, SoMud, SOPA, Soulseek, SourceForge, StealthNet, T411, telechargement illegal, telecharger, The Pirate Bay, thepiratebay, torrent, torrent, Torrent9, TorrentFreak, torrents, Torrentz, Torrentz2, TPB, TrustyFiles, TV Rip, TVRip, upload, Vizeus, Vuze, Warez, WinMX, Wuala, xvid, Yggtorrent, addicte, addictes, addiction, addictions, algodystrophie, AMA, amphetamine, amphetamines, angel dust, antidopage, antidopage positif, barbituriques, cannabis, cartel, cartels, Champignon , Champignons , Clenbuterol, Cocaine, coca\u00efne, Coca\u00efne, contr\u00f4le positif, contr\u00f4le positifs, contr\u00f4lee positive, contr\u00f4lee positives, crystal meth, Crystal meth, Danabol, dealeur, dealeurs, dopage, dopamine, drogue, drogue, drogue, droguee, droguees, droguer, drogues, drogues, drogues, ecstasy, fumette, germer, GHB, Guizmo, haschich, hero\u00efne, hero\u00efnes, joint, junky, ketamine, khat, LSD, marijuana, MDMA, mescaline, methadone, methamphetamine, Methamphetamine, methamphetamines, Methamphetamines, morphine, narcotique, narcotiques, narcotrafiquant, narcotrafiquante, narcotrafiquantes, narcotrafiquants, opiace, Opium, overdose, overdoses, PCP, PCP, penicilline, penicillines, peyolt, peyote, phencyclidine, phencyclidine, positive au Meldonium, PrixMoinsCherprohibes, psilocybe, psychotrope, Rohypnol, se droguer, shit, splif, stero\u00efdes, stupefiants, substance hallucinogene, substance psychoactive, substances illicites, substances interdites, Temazepam, Toxico, Toxicoman, Toxicomane, Toxicomanes, Toxicomanie, Toxicomanie, Toxicomans, Toxicos, Trenbolone, Vulgaris, Weed, alain finkielkraut, alain soral, alexia daval, antisemite, antisemites, antisemitisme, Aryen, Asiate, Asiates, associations ecologistes, battre, battu, battue, battues, battus, ch\u00eanes centenaires, chinetoque, chinetoques, chintok, chintoks, defenseurs  dieudonne, eric zemmour, extr\u00eame droite, extr\u00eamisme, extr\u00eamismes, fanatique, fanatiques, fanatisme, fanatismes, federation France Nature Environnement, FN, fne, fondamentalisme, fondamentalismes, fondamentaliste, fondamentalistes, front national, gay, gays, genocide, genocides, gouine, gouines, greenwashing, groupe ethnique, groupes ethniques, homophobe, homophobes, homophobie, homosexuel, homosexuels, isabelle fouillot, islamophobe, islamophobes, islamophobie, islamophobies, islamophobique, islamophobiques, jonathann daval, KKK, Ku Klux Klan, KuKluxKlan, Lutz Bachmann, Mein Kampf, meteque, nazi, nazis, nazisme, negre, negres, negresse, negresses, negritude, negro, negros, neonazi, neo nazi, neonazis, neo nazis, pd, pede, PEGIDA, portail handi, prejuges raciaux, racime, racisme, raciste, racistes, Rassemblement national, rassemblement national, sectarisme, segregation, skinhead, supremaciste, supremacistes, tantouse, tantouses, tapette, tapettes, tarlouse, tarlouses, t\u00eate  citron, xenophobe, xenophobes, xenophobie, arme, Armee, Armees, armes, artillerie, artillerieur, artillerieurs, avion bombardier, avionchasse, avioncombat, avions bombardier, avions  chasse, avions combat, Bachar al Assad, Benyamin Netanyahu, Casques bleus, combat, combats, combattants, commemoratif  guerre, conflict, Conflit syrien, damas, dissuasion nucleaire, donald trump, Douma, drone militaire, Enduring Freedom, enrichissement , epuration ethnique, famas, forces speciales, frappe aerienne, frappes aeriennes, ghouta, ghouta orientale, GIGN, Guerilla, guerre, guerres, Hezbollah, intifada, jerusalem, les republicains, les troupes, maduro, mayotte, millitaire, millitaires, Navy, nucleaire, Occupe par Isra\u00ebl, Operation Serval, Opposition syrienne, sensibles, porte avion, purge, purges, rafale, Raid, raids, Rebelles syriens, regime syrien, Robert Mugabe, rohingya, rohingyas, separatistes prorusses, nucleaire, Syrie, trump, vigipirate, wauquiez, zimbabwe, zimbabwe, Operation millitaire, Operations millitaires, b\u00e2tard, b\u00e2tarde, b\u00e2tardes, b\u00e2tards, couillon, couillons, couillonne, couillonnes, merde, merdes, faire enculer, enculee, enculees, encules, peter, pete, petee, petees, emmerde, emmerde, emmerdee, emmerdes, conne, connes, grognasse, grognasses, debile, debiles, faire foutre, mongole, mongoles, mongols, mongol, casse, pouffiasse, pouffiasses, poufiasse, poufiasses, bite, bites, pedes, pede, pd, pds, connasse, connasses, conasse, conasses, branleur, branleurs, branleuses, branleuse, ovidie, ovidies, enculer, encules, encule, enculee, enculees, connard, connards, conard, conards, gouine, gouines, niquer ta mere, niques ta mere, nique ta mere, nique, niquee, niquer, nique, porno, pornographique, pornographiques, pornos, je t emmerde, je t emmerdes, cul, culs, couilles, couille, pute, pute, putes, pute, putes, salope, salopes, sheitan, sheitans, ta gueule, ta guele, ta geule, tantouse, tantouses, tantouz, tantouze, tantouzes, tapette, tapettes, tare, taree, tarees, tares, tarlouse, tarlouses, tarlouzes, tarlouze, tarlouz, anti terroristes, anti terroristes, al Qa ida, alQa ida, alQaida, alkaida, attaques kamikazes, attaque kamikazes, attaque kamikaze, attaques kamikaz, al quaida, al quaida, attaque Paris, Anis Amri, actes terroristes, acte terroristes, acte terroriste, actes terroriste, Ansar Dine, assaillants abattus, assaillant abattu, assaillants abattu, assaillant abattus, abattus, abattu, Abdel Malik Petitjean, attentat, attentats, atentat, atentats, 13 novembre 2015, 43782, 42321, attaques djihadistes, attaque djihadiste, attaques djihadiste, attaque djihadistes, Abdeslam, Abaaoud, meurtrier, meurtriere, meurtriere, meurtrier, meurtriers, meurtieres, meurtrieres, Al Mourabitoune, Abdelhamid Abaaoud, Ansar al Charia, Al Mourabitoune, Ansar al Charia, Bataclan, suicide, suicides, antiterroriste, antiterrorisme, antiterrorismes, antiterroristes, anti anti terroristes, anti terrorisme, anti terrorismes, Al Qaeda, Al Qaeda, Adel Kermiche, Amedy Coulibaly, Kermiche, Coulibaly, Charlie, Charlie Hebdo, base jumper, Ben Laden, Bilal Hadfi, Boko Haram, bombe, bombes, Brahim Abdeslam, explosifs, explosif, explosive, explosives, Cherif  Sa\u00efd, Cherif Kouachi, Daech, Daesh, Daguestan, jihadiste, djihadiste, jihadistes, djihadistes, otage, otages, deflagration, deflagrations, etat Etat islmamique, extr\u00eamiste, extr\u00eamistes, extr\u00eamisme, extr\u00eamismes, fanatique, fanatiques, fanatisme, fanatismes, fanatic, fascisme, fascismes, fascistes, fascite, fatwa, fondamentalisme, fondamentalismes, fondamentaliste, fondamentalistes, integriste, integriste, integrisme, integrismes, freres El Bakraoui, freres Kouachi, Front al Nosra, fusillade, fusillades, guerre, guerres, gueurre, gueurres, Hamas, Ibrahim El Bakraoui, IRA, islam radical, islamistes integristes, Je suis Charlie, kamikaz, kamikaze, kamikazes, Khalid El Bakraoui, Khalid Ibrahim, Kizliar, horreur, horreurs, Maxime Hauchard, Mohamed Lahouaiej Bouhlel, Mohamed Lahouaiej Bouhlel, Mokhtar Belmokhtar, Najim Laachraoui, Omar Isma\u00ebl Mostefa\u00ef, Omar Isma\u00efl Mostefa\u00ef, Omar Mateen, ouzbekistan, ouzbekistan, Patrick Prejean, Raqqa, Raka, Raqua, Raqa, Said Kouachi, Salah Abdeslam, Samy Amimour, sayfullo saipov, sectarisme, sectaire, separatiste, separatistes, Sid Ahmed Ghlam, explosion, exploser, explosee, explose, Syed Farook, Syrie, Taliban, Tashfeen Malik, criminelle, criminel, criminelles, criminels, vigipirate, vigipirates, piege, pieges, piegee, piegees, World Trade Center, Yusuf Mohamed, cigarte, cancer","balises":"","online":"1","state":1,"id":"68","created":"2021-03-18 17:03:44","author":2758,"updated":"2021-04-23 09:02:18","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/68"}}},{"name":"Sublime - KW Auto","keyword":"sublimekwauto","value":"1","associated_keywords":"auto , achat auto electrique, achat d\u0027une voiture \u00e9lectrique, achat de voiture electrique, achat vehicule electrique, achat vehicule electrique neuf, achat v\u00e9hicule \u00e9lectrique prime, achat vehicule electrique societe, achat voiture ecologique, achat voiture electrique avec batterie, achat voiture electrique bonus, achat voiture electrique neuve, achat voiture electrique pas cher, achat voiture electrique prime, achat voiture electrique prix, achat voiture electrique societe, achat voiture neuve electrique, achat voiture propre, acheter une voiture electrique, acheter voiture electrique, aide \u00e0 l\u0027achat d\u0027une voiture \u00e9lectrique, aide achat v\u00e9hicule electrique, aide achat voiture electrique ile de france, aide departementale vehicule electrique, aide entreprise achat vehicule electrique, aide etat achat vehicule electrique, aide etat achat voiture hybride, aide financiere achat vehicule, aide financiere achat voiture electrique, aide financi\u00e8re voiture \u00e9lectrique, aide gouvernementale achat voiture electrique, aide installation borne recharge vehicule electrique, aide pour achat vehicule electrique, aide pour achat voiture, aide pour vehicule electrique, aide region voiture electrique, aides vehicule electrique, auto \u00e9lectrique subvention, avantage achat voiture \u00e9lectrique, avantage achat voiture electrique entreprise, avantage voiture electrique, bonus achat v\u00e9hicule \u00e9lectrique, bonus \u00e9cologique v\u00e9hicule \u00e9lectrique, bonus ecologique voiture hybride, bonus pour achat voiture electrique, bonus pour voiture \u00e9lectrique, bonus v\u00e9hicule \u00e9lectrique, borne de recharge subvention, borne \u00e9lectrique subvention, break electrique, citadine electrique, combien coute recharge voiture electrique, combien coute une voiture electrique, combien coute une voiture electrique neuve, combien coute voiture electrique, comparatif prix vehicule electrique, comparatif suv \u00e9lectrique, cout achat voiture electrique, cout charge vehicule electrique, cout chargement voiture electrique, cout consommation vehicule electrique, cout consommation voiture electrique, cout d une voiture electrique, cout d\u0027un vehicule electrique, cout electricite vehicule electrique, cout entretien vehicule electrique, cout entretien voiture electrique, cout immatriculation vehicule electrique, cout plein voiture electrique, cout recharge vehicule electrique, cout recharge voiture electrique, cout reel voiture electrique, cout usage voiture electrique, cout utilisation voiture electrique, cout v\u00e9hicule \u00e9lectrique, cout vehicule electrique vs essence, cout voiture \u00e9lectrique, cout voiture electrique au 100 km, cout voiture electrique au km, cout voiture electrique km, cout voiture electrique par mois, cout voiture electrique vs diesel, cout voiture \u00e9lectrique vs essence, credit achat voiture electrique, futur suv electrique, guide achat voiture electrique, leasing voiture electrique, les suv electrique, lld voiture electrique sans apport, meilleur suv electrique 2020, meilleure voiture electrique, nouveau suv 2020, nouveau suv electrique, nouvelle voiture electrique, nouvelle voiture electrique 2020, offre vehicule electrique, offre voiture electrique, prime a l\u0027achat d\u0027une voiture electrique, prime a la voiture electrique, prime achat voiture electrique neuve, prime auto electrique, prime casse comment faire, prime eco voiture electrique, prime eco voiture neuve, prime \u00e9cologique pour un v\u00e9hicule particulier propre, prime ecologique vehicule, prime ecologique voiture, prime \u00e9cologique voiture \u00e9lectrique, prime gouvernementale achat voiture, prime pour voiture neuve, prime voiture, prime voiture ecologique, prime voiture propre, primes gouvernementales voitures, primes voitures electriques, prix achat voiture electrique, prix carte grise pour vehicule electrique, prix d une voiture electrique la moins chere, prix d\u0027achat d\u0027une voiture electrique, prix de la voiture electrique, prix de recharge v\u00e9hicule \u00e9lectrique, prix de revient voiture electrique, prix des voiture electrique, prix vehicule electrique, promo voiture electrique, promotion voiture electrique, quel est le meilleur suv electrique, quel suv electrique choisir, quelle aide pour achat voiture electrique, quelle prime pour achat voiture electrique, recharger voiture \u00e9lectrique prix, subvention achat v\u00e9hicule \u00e9lectrique, subvention achat voiture \u00e9lectrique, subvention auto electrique, subvention borne de recharge voiture electrique, subvention borne \u00e9lectrique, subvention borne recharge, subvention chargeur auto \u00e9lectrique, subvention gouvernementale voiture \u00e9lectrique, subvention installation borne \u00e9lectrique, subvention installation borne recharge vehicule electrique, subvention pour borne de recharge voiture electrique, subvention pour borne \u00e9lectrique, subvention pour installation borne recharge vehicule electrique, subvention pour l\u0027achat d\u0027une voiture electrique, subvention pour v\u00e9hicule \u00e9lectrique, subvention pour voiture electrique, subvention prise voiture electrique, subvention vehicule electrique, suv 100 electrique 2020, suv 2008 electrique prix, suv 4x4 electrique 2020, suv compact electrique, suv \u00e9lectrique, suv electrique 2018, suv \u00e9lectrique 2020, suv electrique 7 places, suv electrique autonomie, suv \u00e9lectrique chinois, suv electrique comparatif, suv electrique grande autonomie, suv electrique hybride, suv electrique le moins cher, suv electrique ou hybride, suv \u00e9lectrique prix, suv electrique rechargeable, suv full electrique, suv hybride essence electrique, suv tout electrique, suv urbain electrique, test achat voiture electrique, vehicule bonus ecologique, vehicule electrique, vehicule electrique adulte, vehicule electrique pas cher, vehicule electrique prime, v\u00e9hicule \u00e9lectrique prix d\u0027achat, vehicule suv electrique, voiture avec bonus \u00e9cologique, voiture citadine electrique, voiture electrique, voiture electrique 2020, voiture electrique 2020 suv, voiture electrique adulte, voiture electrique aide, voiture electrique aide etat, voiture electrique avantage, voiture electrique bonus, voiture electrique bonus ecologique, voiture electrique citadine, voiture \u00e9lectrique cout, voiture electrique de luxe, voiture electrique familiale, voiture electrique haut de gamme, voiture electrique leasing, voiture electrique loa, voiture electrique luxe, voiture electrique neuve, voiture electrique pas cher, voiture \u00e9lectrique prime gouvernementale, voiture electrique rechargeable, voiture electrique subvention, voiture eligible bonus ecologique, voiture familiale electrique, voiture suv electrique 2020,","balises":"","online":"1","state":1,"id":"67","created":"2021-03-08 14:51:21","author":2758,"updated":"2021-03-08 14:51:21","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/67"}}},{"name":"IPB D\u00e9coration","keyword":"ipbdecoration","value":"1","associated_keywords":"peinture, d\u00e9cor, ornement, ameublement, d\u00e9corer, d\u00e9coratif, d\u00e9co, m\u00e9daille, plafond, ruban, architecture, croix, sculpture, guirlande, tapisserie, l\u00e9gion d\u0027honneur, mosa\u00efque, mobilier, ornementation, lambris, motif, architecte, int\u00e9rieure, stuc, appartement, \u00e9difice, retable, insigne, mural, construction, ext\u00e9rieure, fa\u00e7ade, textile, salle, cordon, fresque, broderie, d\u00e9corateur, l\u00e9gion, sculpteur, boutonni\u00e8re, honorifique, jardin, r\u00e9cipiendaire, chevalier, maison, architectural, fourrag\u00e8re, monument, mur, vitrail, coupole, dorure, grand-croix, marbre, moulure, pavillon, agencement, art d\u00e9co, baroque, bas-relief, bravoure, bricolage, c\u00e9ramique, chamarrer, \u00e9mail, frise, atelier, boutique, distinction, gothique, rocaille, tatouage, arbre de No\u00ebl, chapiteau, embellissement, palais, soubassement, commandeur, design, monumental, tenture, crachat, enluminure, objet, orf\u00e8vrerie, peintre, statue, autocollant, citation, fronton, gravure, parure, remise, vaisselle, color\u00e9, corinthien, dor\u00e9, feutrine, florale, luminaire, picturale, repr\u00e9sentant, rosette, accessoires, balcon, \u00e9l\u00e9ment, fa\u00efence, Halloween, meuble, pilastre, porte, sapin, splendide, b\u00e2timent, entablement, entrelacs, fleurie, g\u00e2teaux, Medal, No\u00ebl, remarquable, signe, vase, collier, dorique, phal\u00e9ristique, Pomp\u00e9i, sobre, accessit, am\u00e9lioration, apparat, arabesque, artisanat, attribut, banane, barrette, b\u00e9n\u00e9fice, bijou, blondel, bosse, bride, broche, buste, Casa, cha\u00eene, chamarrure, d\u00e9corativement, d\u00e9corativisme, d\u00e9corativiste, d\u00e9corativit\u00e9, d\u00e9corum, dipl\u00f4me, \u00e9maillure, embl\u00e8me, \u00e9m\u00e9rite, enjolivement, enjolivure, enlumineur, escalier, \u00e9tage, \u00e9toile, Falbala, feston, feuille, fioriture, francisque, garniture, gratification, important, installation, joyau, luxueuse, mannequinage, marque, mention, nielle, nielles, orangerie, Oscar, palme, parement, plaque, polychromie, pourboire, prime, prix, r\u00e9compense, renommer, r\u00e9puter, salon, satisfecit, sculpturale, symbole, Vasari, V\u00e9ron\u00e8se","balises":"","online":"1","state":1,"id":"63","created":"2020-11-25 10:41:10","author":2426,"updated":"2021-02-04 10:29:34","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/63"}}},{"name":"Sublime - KW - Auto","keyword":"sublimekwauto2021","value":"0","associated_keywords":"4 roues motrices, 4 x 4, 4x4, M-Class, X-Trail, BMW X3, camionnette, Cayenne, Duster, Evoque, Freelander, Grand Cherokee, Grand Vitara, Jeep, Juke, Kadjar, Kuga, Land Rover, LandRover, Mitsubishi Shogun, Murano, Overfinch, pick-up, pickup, position conduite haute, Q7, Qashqai, quatre quatre, quatre x quatre, Range Rover, SUV, tout terrain, Toyota Landcruiser, traction integrale, voiture tout-terrain, Volkswagen Touareg, vehicule tout terrain, X5, X6, XC90, auto 4wd, Ford Transit, Renault Master, gros vehicule, poids lourd, vehicule commercial, vehicule de transport, vehicule industriel, vehicule semi lourd, vehicule sur plateforme, vehicule utilitaire, semi-remorque, camionneur, Iveco, Kenworth, Peterbilt, Scania, Vivaro, camion, camionnette, fourgon, fourgonette, fourgonnette, minibus, pick-up, remorque, tracteur, utilitaire, van, auto commercial, coussin d\u0027appoint, Euro NCAP, Isofix, minivan, monospace, NCAP, NHTSA, Renault Espace, siege de voiture, siege enfant, siege pour bebe, siege pour enfant, SUV, securite enfant, securite routiere, voiture familiale, vehicule familial, auto family, ActiveHybrid, Auris, biocarburants, biodiesel, carburants alternatifs, Civic Hybrid, Honda Insight, hybride, LS 600h, moteur electrique, Nissan Leaf, PHEV, Prius, RX 400h, Tesla, voiture hybride, voiture rechargeable, voiture ecologique, voiture economique, voiture ecoenergetique, voiture electrique, vehicule hybride, vehicule non polluant, vehicule economique, vehicule electrique, economie d\u0027essence, economie de carburant, auto hybrid, Aston Martin, McLaren F1, Rolls Royce, grand tourer, voiture de fonction, voiture de luxe, voiture de sport, vehicule de luxe, Acura, Ascari, Bentley, Bugatti, Cadillac, Carrera, Caterham, Corvette, Ferrari, Gallardo, Jaguar, Koenigsegg, Lamborghini, Lexus, Lotus, Maserati, Maybach, Murcielago, Pagani, Porsche, Spyder, TVR, V12, V6, V8, Vanquish, Veyron, Volante, Zonda, roadster, supervoiture, suralimentation, turbo, auto luxury, amortisseurs, assistance depannage, assurance AA, batterie auto, bougie d\u0027allumage, carrosserie, changer l\u0027huile, clignotants, concessionnaire auto, controle technique, courroie de distribution, depannage, depannage routier, embrayage, entretien auto, entretien voiture, feux de croisement, feux de recul, filtre \u00e0 air, filtre \u00e0 huile, garage, garantie, jantes en alliage, joint de culasse, maintenance auto, maintenance automobile, maintenance voiture, motopropulseur, mecanicien, mecanique automobile, piece automobile, pieces detachees, plaquette de frein, pneus, pot d\u0027echappement, pression des pneus, radars de stationnement, rotor de distributeur, reparation automobile, reparation voiture, reparation vehicule, revision auto, service auto, service automobile, service vehicule, systeme de refroidissement, verrouillage centralise, vidange, voiture de remplacement, auto maintenance, car, cars, coupe, volant, ABS, airbag, assistance freinage, automobile, autoroutes, Berline, biturbo, bo\u00eete de vitesse, cabriolet, carburant, carnet d\u0027entretien, ceinture de securite, centralisee, cheval-vapeur, ch\u00e2ssis, circulation, coffre \u00e0 hayon, compte-tours, concessionnaire auto, conducteur, conduite, conduite \u00e0 droite, controle de traction, convertisseur catalytique, covoiturage, dashcams, diesel, direction assistee, essai routier, essence, Euro NCAP, freins antiblocage, gasoil, GPS, grosse voiture, habitacle, jante alliage, kilometrage, lautomobile, limite de vitesse, liste de prix, mazout, monospace, moteur, muscle car, NCAP, occasion, ouverture sans cle, parking, peinture metallisee, petite citadine, Phares, plaque d\u0027immatriculation, radar de vitesse, route, regulateur de vitesse, retroviseurs, salon de Geneve, sans plomb, siege chauffant, siege passager, stationnement semi-automatique, toit ouvrant, toit rigide, Tomtom, traction arriere, vitres teintees, voiture, voiture compacte, voiture d\u0027occasion, voiture neuve, vehicule, vehicule motorise, auto misc, 125cc, 125 cc, Agusta, Alpinestars, Aprilia, Arai, Bimota, Buell, Cagiva, CBR, Dainese, Derbi, Ducati, Fireblade, Gilera, Goldwing, Harley-Davidson, Kawasaki, KTM, Kymco, Lambretta, moped, motards, moto asiatique, moto BMW, motocyclettes, motocycliste, Moto Guzzi, moto Honda, motos, motosport, mv, MZ, Norton, Piaggio, quad, scooter, Shoei, Softail, supermoto, Suzuki, Triumph, Vespa, Yamaha, ZZR, automotorbikes","balises":"","online":"1","state":1,"id":"35","created":"2020-10-14 13:31:09","author":2758,"updated":"2021-03-10 13:28:10","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/35"}}},{"name":"Test Sublime","keyword":"sublimetest","value":"0","associated_keywords":"sublimetest, Andre Layton","balises":"","online":"1","state":1,"id":"29","created":"2020-06-10 16:38:37","author":2426,"updated":"2020-06-12 08:43:07","updator":2426,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/29"}}},{"name":"Adways test","keyword":"adways","value":"1","associated_keywords":"adways","balises":"","online":"1","state":1,"id":"27","created":"2020-04-29 13:13:10","author":2426,"updated":"2020-05-25 12:26:59","updator":17,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/27"}}},{"name":"Coronavirus","keyword":"coronavirusmars2020","value":"1","associated_keywords":"coronavirus, covid, grippe, hopitaux, hopital, teletravail, SRAS, Wuhan, epidemie","balises":"","online":"1","state":1,"id":"23","created":"2020-03-13 10:40:39","author":2758,"updated":"2020-06-15 16:49:55","updator":2758,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/23"}}},{"name":"testxandr","keyword":"testxandr","value":"1","associated_keywords":"Pop sudiste","balises":"","online":"1","state":1,"id":"22","created":"2020-03-12 10:39:08","author":2426,"updated":"2020-03-12 10:39:08","updator":2426,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/22"}}},{"name":"BlockList","keyword":"blackList","value":"1","associated_keywords":"La Redoute d\u00e9voile son incroyable calendrier de l, La Redoute vous r\u00e9serve une surprise, Comment La Redoute a cr\u00e9\u00e9 le buzz avec sa nouvelle campagne,D\u00e9couvrez l\u0027interview exclusive d\u0027Enzotaistoi et des gagnants du #LaRedouteChallenge, LaRedouteChallenge se confient en interview, La Redoute fait appel \u00e0 des TikTokeurs pour sa nouvelle campagne et cr\u00e9e le buzz, La YouTubeuse Shera partage son engagement contre le harc\u00e8lement de rue, Challenge : 5 jours pour \u00eatre en forme tout l\u0027hiver, 5 conseils pour se maintenir en forme et rester fort pendant l\u0027hiver, NBA 2K21 : Voici 5 choses que tu ne, Savez-vous qui a invent\u00e9 l\u0027\u00e9pargne, vient l\u2019expression, Comment fonctionnent les taux d, attaque, attentat,fusillade, kidnapping, maelys, ma\u00eblys, suicide, zemmour, terrorisme, terroriste, viol, crime, assassinat, mort, morte, tuerie, incendie, violence, drogue, d\u00e9c\u00e9d\u00e9, d\u00e9c\u00e9d\u00e9e, chirac, bombe, explosion, charlie, daech, daesh, djihad, djihadiste, bataclan, funeraille, incendie, prison, menace, tueur, guerre, g\u00e9nocide, genocide, combat, criminel, assassinat, assassin, violation, isis, Harvey Weinstein, balkany, fillon, ejaculation, erection, sexe","balises":"","online":"1","state":1,"id":"2","created":"2019-09-24 09:17:49","author":17,"updated":"2021-04-29 08:21:04","updator":2426,"level":null,"_links":{"self":{"href":"https:\/\/services.adways.com\/keywords\/2"}}}]},"page_count":1,"page_size":9999,"total_items":13,"page":1};localStorage.removeItem("recallURL");var delegateParams = {"showheroes":"ShowHeroesDelegate"};                var adwKeywords = null;
                if (adwKeywordsCollection['_embedded'] && adwKeywordsCollection['_embedded']['collection'] &&
                    adwKeywordsCollection['_embedded']['collection'].length > 0) {
                    adwKeywords = adwKeywordsCollection['_embedded']['collection'];
                }
                //        if (!LocatePlayerAlreadyLaunched) {
                //            LocatePlayerAlreadyLaunched = true;
                //        } else
                //            return;

                // config et gestion de la surcharge via la variable globale
                var DOCTOSEARCH = null;
                var WIN = window;
                var CONFIG = {};
                CONFIG.targeting = [{"domain":".","inventories":[{"creation_type":"xandr","creation_url_number":3,"creation_urls":[{"placement_id":"20565956","member_id":"","tag_impression":""},{"placement_id":"20567644","member_id":"11988","tag_impression":"https:\/\/antenna.ayads.co\/?src=aw&t=${TIMESTAMP}&ver=adways&z=32837&device=d&puid=p${CACHEBUSTER}&suid=s${CACHEBUSTER}&gc=0&gm=0&ga=0&gs=0&gv=0&a=172581&at=video&sspname=sspv3-appnexus&di=${DEAL_ID}&ssprf=vast&pt=skinroll&e=i0&mm=1"},{"placement_id":"20567700","member_id":"11988","tag_impression":"https:\/\/antenna.ayads.co\/?src=aw&t=${TIMESTAMP}&ver=adways&z=32837&device=d&puid=p${CACHEBUSTER}&suid=s${CACHEBUSTER}&gc=0&gm=0&ga=0&gs=0&gv=0&a=172581&at=video&sspname=sspv3-appnexus&di=${DEAL_ID}&ssprf=vast&pt=skinroll&e=i0&mm=1"}],"creation_capping":0,"creation_fallbacks":[],"creation_backfill_number":1,"creation_backfills":[{"creation_type":"vast","creation_url":"\/\/contents.adpaths.com\/v3\/banner\/native\/index.php?publicationId=njrJmC9","creation_capping":0}],"creation_minwidth":0,"creation_startat_type":"second","creation_startat":4,"creation_repeat":0,"creation_minduration_type":"0","creation_use_visibility":true,"creation_visibility_percent":95,"creation_visibility_timer":2,"creation_video_analysis":false,"creation_prevent_incontent":false,"creation_allow_incontent":false,"creation_autoplay_allowed":false,"creation_desktoponly":true,"creation_mobileonly":false,"creation_mobile_landscape":false,"creation_mobile_portrait":false,"nb_sub_pages":3,"sub_pages":[{"url":"#skinroll","creation_type":"vast","creation_url":"https:\/\/contents.adpaths.com\/v3\/stream-reducer\/premium\/index.php?publicationId=LmJV05F","creation_capping":0,"creation_fallbacks":[],"creation_backfill_number":0,"creation_backfills":[],"creation_minwidth":350,"creation_startat_type":"second","creation_startat":9,"creation_repeat":null,"creation_minduration_type":"remaining","creation_minduration":30,"creation_use_visibility":true,"creation_visibility_percent":95,"creation_visibility_timer":0,"creation_prevent_incontent":false,"creation_allow_incontent":false,"creation_autoplay_allowed":false,"creation_mobileonly":false,"creation_mobile_landscape":false,"creation_mobile_portrait":false,"creation_desktoponly":false},{"url":"#inkroll","creation_type":"vast","creation_url":"https:\/\/contents.adpaths.com\/v3\/inkrollModules\/index.php?publicationId=L2zN5dv","creation_capping":0,"creation_fallbacks":[],"creation_backfill_number":0,"creation_backfills":[],"creation_minwidth":350,"creation_startat_type":"second","creation_startat":9,"creation_repeat":null,"creation_minduration_type":"remaining","creation_minduration":30,"creation_use_visibility":true,"creation_visibility_percent":95,"creation_visibility_timer":0,"creation_prevent_incontent":false,"creation_allow_incontent":false,"creation_autoplay_allowed":false,"creation_mobileonly":false,"creation_mobile_landscape":false,"creation_mobile_portrait":false,"creation_desktoponly":false},{"url":"#videoskinroll","creation_type":"vast","creation_url":"https:\/\/contents.adpaths.com\/v3\/stream-reducer\/premium\/index.php?publicationId=41Mgtfy","creation_capping":0,"creation_fallbacks":[],"creation_backfill_number":0,"creation_backfills":[],"creation_minwidth":350,"creation_startat_type":"second","creation_startat":9,"creation_repeat":null,"creation_minduration_type":"remaining","creation_minduration":30,"creation_use_visibility":true,"creation_visibility_percent":95,"creation_visibility_timer":0,"creation_prevent_incontent":false,"creation_allow_incontent":false,"creation_autoplay_allowed":false,"creation_mobileonly":false,"creation_mobile_landscape":false,"creation_mobile_portrait":false,"creation_desktoponly":false}]},{"creation_type":"xandr","creation_url_number":3,"creation_urls":[{"placement_id":"20565956","member_id":"","tag_impression":""},{"placement_id":"20567690","member_id":"11988","tag_impression":"https:\/\/antenna.ayads.co\/?src=aw&t=${TIMESTAMP}&ver=adways&z=32837&device=m&puid=p${CACHEBUSTER}&suid=s${CACHEBUSTER}&gc=0&gm=0&ga=0&gs=0&gv=0&a=172581&at=video&sspname=sspv3-appnexus&di=${DEAL_ID}&ssprf=vast&pt=skinroll&e=i0&mm=1"},{"placement_id":"20567701","member_id":"11988","tag_impression":"https:\/\/antenna.ayads.co\/?src=aw&t=${TIMESTAMP}&ver=adways&z=32837&device=m&puid=p${CACHEBUSTER}&suid=s${CACHEBUSTER}&gc=0&gm=0&ga=0&gs=0&gv=0&a=172581&at=video&sspname=sspv3-appnexus&di=${DEAL_ID}&ssprf=vast&pt=skinroll&e=i0&mm=1"}],"creation_capping":0,"creation_fallbacks":[],"creation_backfill_number":1,"creation_backfills":[{"creation_type":"vast","creation_url":"\/\/contents.adpaths.com\/v3\/banner\/native\/index.php?publicationId=njrJmC9","creation_capping":0}],"creation_minwidth":0,"creation_startat_type":"second","creation_startat":4,"creation_repeat":0,"creation_minduration_type":"0","creation_use_visibility":true,"creation_visibility_percent":95,"creation_visibility_timer":2,"creation_video_analysis":false,"creation_prevent_incontent":false,"creation_allow_incontent":false,"creation_autoplay_allowed":false,"creation_desktoponly":false,"creation_mobileonly":true,"creation_mobile_landscape":false,"creation_mobile_portrait":false,"nb_sub_pages":0}]}];
                                    var overwriteConfig = function(source, target) {
                        if (source.targeting) {
                            for (var k = 0; k < source.targeting.length; k++) {
                                for (var l = 0; l < target.targeting.length; l++) {
                                    if (source.targeting[k].domain == target.targeting[l].domain) {
                                        target.targeting[l] = source.targeting[k];
                                        break;
                                    } else if (target.targeting.length == (l + 1)) {
                                        target.targeting.push(source.targeting[k]);
                                    }
                                }
                            }
                        }
                        for (var prop in source) {
                            if (prop != "targeting") {
                                target[prop] = source[prop];
                            }
                        }
                    };
                    if (typeof ADW_SSP_CFG == "object") {
                        overwriteConfig(ADW_SSP_CFG, CONFIG);
                    }
                                    // Recall
                window.addEventListener("message",function(e){
                    var chan = new MessageChannel();
                    if(e.ports.length > 0 && e.data && e.data.rcSetup){
                        // we answer yes there is a MC here
                        ADW_SSP_CFG_RC = e.data.rcSetup;
                        e.source.postMessage({"ADW_SSP_IN_DA_PLACE":true}, "*", [chan.port1]);
                    }else if(e.ports.length > 0 && e.data && e.data.rcLaunch){
                        // order to launch the recall
                        ADW_SSP_CFG_RC.launch = "ok";
                        var targets = new Targetizer(window, CONFIG.targeting);
                        var typeFound = false;
                        for(var i = 0;i<targets.length;i++){
                            if(targets[i].creation_type == ADW_SSP_CFG_RC.type){
                                typeFound = true;
                            }
                        }
                        if(!typeFound && ADW_SSP_CFG_RC.type != "js"){
                            var inventories = [{
                                creation_type:ADW_SSP_CFG_RC.type,
                                creation_url:ADW_SSP_CFG_RC.url,
                                creation_capping:0,
                                /*creation_fallbacks:[],
                                creation_backfill_number:0,
                                creation_backfills:[],
                                creation_minwidth:450,*/
                                creation_startat_type:"second",
                                creation_startat:5,
                                creation_repeat:0,
                                /*creation_minduration_type:"remaining",
                                creation_minduration:0,
                                creation_use_visibility:!0,
                                creation_visibility_percent:95,
                                creation_visibility_timer:0,
                                creation_video_analysis:!1,
                                creation_prevent_incontent:!1,
                                creation_autoplay_allowed:!1,
                                creation_mobileonly:!1,
                                creation_desktoponly:!1,
                            nb_sub_pages:0*/}];
                            ADW_SSP_CFG.targeting = [{
                                "domain": ".",
                                "inventories": inventories
                            }];
                            delete ADW_SSP_CFG_RC;
                            var rcMC = document.createElement("script");
                            rcMC.src = '//hv-contents.adpaths.com/publisher/index.php?publicationId=hrX4thn';
                            rcMC.type = "text/javascript";
                            document.body.appendChild(rcMC);
                        }else if(!typeFound && ADW_SSP_CFG_RC.type == "js"){
                            var tagJS = document.createElement("script");
                            tagJS.src = ADW_SSP_CFG_RC.url;
                            tagJS.type = "text/javascript";
                            document.body.appendChild(tagJS);
                            delete ADW_SSP_CFG_RC;
                        }
                    }
                });

                adpaths.publisher = function() {
                    var that = this;
                    this.listeners = [];
                    this.docToSearch = document;
                    this.playerClass = null;
                    this.playerAPI = null;
                    this.domain = null;
                    this.win = window;
                    this.tagsTab = [];
                    this.originalTagsTab = [];
                    this.config = (arguments.length>0?arguments[0]:CONFIG);
                    this.dispatchAdReadyCb = null;
                    this.autoShowAds = true;
                                        try {
                        this.debug = localStorage.getItem('MC_DEBUG') === "true" ? 1 : 0;
                    } catch (error) {
                        this.debug = 0;
                    }
                    
                                            try {
                            this.docToSearch = window.top.document;
                            this.win = window.top;
                        } catch (err) {
                            //                docToSearch = document;
                            //                win = window.parent;    
                            that.docToSearch = document;
                            that.win = window;
                            try {
                                while (that.win !== that.win.parent && (that.win.parent.document !== null)) {
                                    that.win = that.win.parent;
                                    that.docToSearch = that.win.document;
                                }
                            } catch (err) {}
                        }
                                        WIN = this.win;
                    DOCTOSEARCH = this.docToSearch;

                    this.trackerMC = new adways.analytics.Tracker({
                        record_interface: 'generic',
                        send_tracker_init: false,
                        creative_format: 'N0YY9hj',
                        creative_id: '9pQFSxC',
                        random_number: function() {
                            return Math.random();
                        }
                    });
                    //si this.debug = true
                    if(this.debug === 1){
                        console.log('adwdebug %cMC : impression ', 'background: #222; color: #bada55');
                    }
                    this.trackerMC.sendData({
                        event_type: 'state',
                        event_name: 'impression'
                    });
                    //        trackerMC.sendData({event_type: 'state', event_name: 'target', event_data: win.location.hostname});        
                    this.trackerMC.timeInitTrackerMC = Date.now();

                    this.myTargetizers = new Targetizer(this.win, this.config.targeting, '', this.debug);


                    // todo : tagJSmanager module
                    this.addTagURL = function(doc, myT) {
                        that.trackerMC.sendData({
                            event_type: 'state',
                            event_name: 'adCall'
                        });
                        var tag = doc.createElement("script");
                        tag.src = myT.creation_url;
                        tag.type = "text/javascript";
                        doc.body.appendChild(tag);
                    };

                    this.startTagCreation = function(creation, backfill){
                        var addCall = creation;
                        if(backfill){
                            addCall = creation.creation_backfills.shift();
                        }
                        var cbFiFTag = function(fif) {
                            var doc = fif.contentDocument ? fif.contentDocument : (fif.contentWindow ? fif.contentWindow.document : fif.document);
                            that.addTagURL(doc, addCall);
                        };
                        // backfill works only when creation_fif
                        if (creation.creation_fif) {
                            creation.fif_used = Targetizer.createFiFrame(that.docToSearch, cbFiFTag);
                        } else {
                            var doc = that.win.contentDocument ? that.win.contentDocument : (that.win.contentWindow ? that.win.contentWindow.document : that.win.document);
                            doc.body.style.overflow= "hidden";
                            that.addTagURL(doc, addCall);
                        }
                        if(!backfill)
                            that.tagsTab.push(addCall);
                    };
                    // end todo


                    window.addEventListener("message",function(e){
                        var chan = new MessageChannel();
                        if(e.ports.length > 0 && e.data && e.data.fbTagJS){
                            for(var i = 0; i < that.tagsTab.length; i++){
                                if(that.tagsTab[i].fif_used === e.source.frameElement){
                                    if (typeof that.tagsTab[i].creation_backfills !== "undefined") {
                                        if (that.tagsTab[i].creation_backfills.length > 0
                                            && that.tagsTab[i].creation_backfills[0].creation_type == "tag") {
                                            that.startTagCreation(that.tagsTab[i], true);
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    });

                };

                adpaths.publisher.prototype.setConfig = function(config) {
                    this.config = config;
                    CONFIG = this.config;
                };

                adpaths.publisher.prototype.overideConfig = function(source) {
                    if (source.targeting) {
                        for (var k = 0; k < source.targeting.length; k++) {
                            for (var l = 0; l < this.config.targeting.length; l++) {
                                if (source.targeting[k].domain == this.config.targeting[l].domain) {
                                    //this.config.targeting[l] = source.targeting[k];
                                    for (var m = 0; m < this.config.targeting[l].inventories.length; m++) {
                                        if(source.targeting[k].inventories.length>m) {
                                            for (var prop in this.config.targeting[l].inventories[m]) {
                                                if(typeof source.targeting[k].inventories[m][prop] !== 'undefined') {
                                                    this.config.targeting[l].inventories[m][prop] = source.targeting[k].inventories[m][prop];
                                                }
                                            }
                                        }
                                    }

                                    break;
                                } else if (this.config.targeting.length == (l + 1)) {
                                    this.config.targeting.push(source.targeting[k]);
                                }
                            }
                        }
                    }
                    for (var prop in source) {
                        if (prop != "targeting") {
                            this.config[prop] = source[prop];
                        }
                    }
                    CONFIG = this.config;
                };

                adpaths.publisher.prototype.launch = function() {
                    this.autoShowAds = (arguments.length>0?arguments[0]:true);
                                            if (this.playerClass == null || this.playerAPI == null) {
                            console.warn("adpaths.publisher: you have to set the playerAPI and the playerClass");
                            return -1;
                        }
                                        var that = this;

                    for (var i = 0; i < this.myTargetizers.length; i++) {
                        var myTargetizer = this.myTargetizers[i];
                        if (typeof ADW_NON_LINEAR_WRAPPER_CFG == "object" && typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks == "object") {
                            if (typeof myTargetizer.customCallbacks !== 'object') {
                                myTargetizer.customCallbacks = new Object();
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdImpression == "function") {
                                myTargetizer.customCallbacks.dispatchAdImpression = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdImpression;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdClickThru == "function") {
                                myTargetizer.customCallbacks.dispatchAdClickThru = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdClickThru;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoStart !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdVideoStart = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoStart;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoFirstQuartile !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdVideoFirstQuartile = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoFirstQuartile;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoMidpoint !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdVideoMidpoint = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoMidpoint;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoThirdQuartile !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdVideoThirdQuartile = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoThirdQuartile;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoComplete !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdVideoComplete = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdVideoComplete;
                            }
                            if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdSkipped !== 'function') {
                                myTargetizer.customCallbacks.dispatchAdSkipped = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdSkipped;
                            }
                            // if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdError !== 'function') {
                            //     myTargetizer.customCallbacks.dispatchAdError = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdError;
                            // }
                            // if (typeof ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdReady !== 'function') {
                            //     myTargetizer.customCallbacks.dispatchAdReady = ADW_NON_LINEAR_WRAPPER_CFG.customCallbacks.dispatchAdReady;
                            // }
                        }

                        if (typeof myTargetizer.customCallbacks !== 'object') {
                            myTargetizer.customCallbacks = new Object();
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdImpression !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdImpression = function() {
                                that.dispatchEvent("AdImpression");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdClickThru !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdClickThru = function() {
                                that.dispatchEvent("AdClickThru", "", "", false);
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdVideoStart !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdVideoStart = function() {
                                that.dispatchEvent("AdVideoStart");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdVideoFirstQuartile !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdVideoFirstQuartile = function() {
                                that.dispatchEvent("AdVideoFirstQuartile");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdVideoMidpoint !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdVideoMidpoint = function() {
                                that.dispatchEvent("AdVideoMidpoint");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdVideoThirdQuartile !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdVideoThirdQuartile = function() {
                                that.dispatchEvent("AdVideoThirdQuartile");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdVideoComplete !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdVideoComplete = function() {
                                that.dispatchEvent("AdVideoComplete");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdSkipped !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdSkipped = function() {
                                that.dispatchEvent("AdSkipped");
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdReady !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdReady = function(cbFunction) {
                                that.dispatchAdReadyCb = cbFunction;
                                if (typeof (cbFunction) !== "undefined" && typeof cbFunction.getData === "function") {
                                    that.dispatchAdReadyCb = cbFunction.getData();
                                }
                                that.dispatchEvent("AdReady");
                                if(that.autoShowAds && typeof that.dispatchAdReadyCb === "function")
                                    that.dispatchAdReadyCb();
                            };
                        }
                        if (typeof myTargetizer.customCallbacks.dispatchAdError !== 'function') {
                            myTargetizer.customCallbacks.dispatchAdError = function() {
                                that.dispatchEvent("AdError");
                            };
                        }

                        var fif = null;
                        switch (myTargetizer.creation_type) {
                            case 'vast':
                            case 'vast_linear':
                            case 'vpaid':
                            case 'xandr':
                            case 'v2_publication_id':
                                if (!(this.myLocatePlayer = new LocatePlayer(this.docToSearch, this.config, myTargetizer, this.trackerMC, this.debug)))
                                    return;
                                                                    if(this.domain !== null && this.domain !== '') {
                                        this.playerAPI.options = this.playerAPI.options || {};
                                        this.playerAPI.options.sendDomainFromPartners = true;
                                        this.playerAPI.x_domain = this.domain;
                                    }
                                    this.myLocatePlayer.instantiateInteractivity([this.playerClass, this.playerAPI]);
                                                                break;
                            case 'tag':
                                (function(myT){                                    
                                    var checkBehaviour = new BehaviourChecker({
                                        'playerIdentity': [],
                                        'delegate': null,
                                        'cb': function() {
                                            that.startTagCreation(myT);
                                        },
                                        'repeatCb': function() {
                                            //that.tagsTab = Array.prototype.slice.call(that.originalTagsTab);
                                        },
                                        'creation': myT,
                                        'debug': that.debug
                                    });
                                })(myTargetizer);

                        }
                    }
                };

                adpaths.publisher.prototype.setPlayerClass = function(playerClass) {
                    this.playerClass = playerClass;
                    return 1;
                };

                adpaths.publisher.prototype.renderAd = function() {
                    if (this.dispatchAdReadyCb !== null && typeof this.dispatchAdReadyCb === "function")
                        this.dispatchAdReadyCb();
                    return 1;
                };

                adpaths.publisher.prototype.setPlayerAPI = function(playerAPI) {
                    this.playerAPI = playerAPI;
                    return 1;
                };


                adpaths.publisher.prototype.setDomain = function(domain) {
                    this.domain = domain;
                    return 1;
                };

                adpaths.publisher.prototype.subscribe = function(evt, fn, inst) {
                    if (typeof(this.listeners[evt]) === "undefined")
                        this.listeners[evt] = new Array();
                    var tmpObj = new Object();
                    tmpObj.fcn = fn;
                    tmpObj.inst = (arguments.length > 2 ? inst : null);
                    this.listeners[evt][this.listeners[evt].length] = tmpObj;
                };

                adpaths.publisher.prototype.unsubscribe = function(evt) {
                    try {
                        if (typeof(this.listeners[evt]) !== "undefined")
                            delete this.listeners[evt];
                    } catch (e) {
                        console.warn(e);
                    }
                };

                adpaths.publisher.prototype.dispatchEvent = function(evt) {
                    var args = new Array();
                    for (var i = 1; i < arguments.length; i++)
                        args.push(arguments[i]);
                    if (typeof(this.listeners[evt]) !== "undefined") {
                        for (var i = 0; i < this.listeners[evt].length; i++) {
                            this.listeners[evt][i].fcn.apply(this.listeners[evt][i].inst, args);
                        }
                    }
                };

                
        }(adpaths));