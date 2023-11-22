var hit = hit || {};
var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};pbjs.que = pbjs.que || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});
!(function(w, d) {
    w.hit = {
        init: function(){
            this.getConsent();
        },
        getConsent: function() {
            this.logger(this.startDate);
            if (typeof __tcfapi == 'undefined') {
                try {
                    var doc = parent.document;
                    if (!doc) {} else {
                        if (typeof window.parent.__tcfapi !== 'undefined') {
                            __tcfapi = window.parent.__tcfapi;
                        }
                    }
                } catch (e) {}
            }
            if (typeof __tcfapi !== 'undefined') {
                __tcfapi('addEventListener', 2, function(tcData, success) {
                        if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' || tcData.eventStatus == 'cmpuiclosed')) {
                            if (tcData.gdprApplies) {
                                if (tcData.tcString) {
                                    w.hit.settings.tcf.cmpIsReady=1;
                                    w.hit.settings.tcf.string = tcData.tcString;
                                    w.hit.logger('[CMP] Ready - TCF V2 success: ' + w.hit.settings.tcf.cmpIsReady);
                                    w.hit.logger(w.hit.settings.tags_present.length);
                                    w.hit.loadGPT();
                                    if (w.hit.settings.publisher.enableAPS) { w.hit.loadAPS(); }
                                    if (w.hit.settings.publisher.enablePBJS) { w.hit.loadPBJS(w.hit.settings.prebid.version); }
                                    if (w.hit.settings.tags_present.length==0) {
                                        w.hit.startAds();    
                                    } else {
                                        googletag.cmd.push(function() { googletag.pubads().refresh(); });
                                    }
                                    w.hit.logger("[CMP] StartAds With GDPR");
                                } else {
                                    w.hit.logger('[CMP] No string consent. No personalized ads.');
                                }
                            } else {
                                w.hit.loadGPT();
                                if (w.hit.settings.publisher.enableAPS) { w.hit.loadAPS(); }
                                if (w.hit.settings.publisher.enablePBJS) { w.hit.loadPBJS(w.hit.settings.prebid.version); }
                                w.hit.startAds();
                                w.hit.settings.tcf.cmpIsReady=1;
                                w.hit.logger("[CMP] GDPR doesn't apply to user");
                                w.hit.logger("[CMP] StartAds Without GDPR");
                            }
                            __tcfapi('removeEventListener', 2, function () {}, tcData.listenerId);
                        } else {
                            console.log('[CMP] Failed');
                        }
                });
            } else {
                if (this.settings.tcf.loops < this.settings.tcf.maxLoops) {
                    setTimeout(function() {
                        w.hit.getConsent();
                    }, this.settings.tcf.loopDuration);
                    this.settings.tcf.loops++;
                    console.log('[TCFAPI] Trying' +this.settings.tcf.loops);
                } else {
                    console.log('no __tcfapi');
                }
            }
        },
        getDevice: function () {
          width = window.screen.width||window.innerWidth||window.document.documentElement.clientWidth||Math.min(window.innerWidth,window.document.documentElement.clientWidth)||window.innerWidth||window.document.documentElement.clientWidth||window.document.getElementsByTagName("body")[0].clientWidth;
          var device="desktop";
          (width <=1024) ? device="tablet" : null;
          (width <768) ? device="mobile" : null;
          return device;
        },    
        getParams: function (q) {
            q = q.split('+').join(' ');
            var params = {},
                tokens, re = /[?&]?([^=]+)=([^&]*)/g;
            while (tokens = re.exec(q)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }
            return params;
        },
        setCookie: function (name, value, days) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();  
        },
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";        
        },
        removeCookie: function(name) {
            this.setCookie(name, '', -1);        
        },
        logger: function(msg, type) {
            if (this.settings.debug) {
                var textColor = '#28a745';
                var textType = '';
                var textTime = '['+this.stepTime()+'ms] ';
                if (typeof (type) != 'undefined') {
                    switch (type) {
                    case 'warning':
                        textType = 'WARN: ';
                        textColor = 'orange';
                        break;
                    case 'error':
                        textType = 'ERROR: ';
                        textColor = 'red';
                        break;
                    default:
                        textType = 'INFO: ';
                        textColor = '#28a745';
                    }
                }            
                console.log('%cHIT%c ' + textTime + textType + msg, 'background: #0B1423;border-radius:2px;color:#28a745;padding:2px 5px;', 'color:' + textColor);
            }
        },
        setTargetingKVP: function() {
            // DEFAULT
            var hit_data = [];
            hit_data = hit_data.concat([{
                'k': 'site',
                'v': this.settings.kvp.site
            }]);
            // UTM
            if (this.settings.query.utm_source) {
                hit_data = hit_data.concat([{
                    'k': 'source',
                    'v': this.settings.query.utm_source
                }]);
                sessionStorage.setItem('hit_source',this.settings.query.utm_source);
            } else {
                src = sessionStorage.getItem('hit_source');
                if (src) {
                    hit_data = hit_data.concat([{
                        'k': 'source',
                        'v': src
                    }]); 
                } else {
                    hit_data = hit_data.concat([{
                        'k': 'source',
                        'v': 'direct'
                    }]); 
                }
            }
    
            if (this.settings.query.utm_campaign) {
                hit_data = hit_data.concat([{
                    'k': 'campaign',
                    'v': this.settings.query.utm_campaign
                }]);
                sessionStorage.setItem('hit_campaign',this.settings.query.utm_campaign);
            } else {
                src = sessionStorage.getItem('hit_campaign');
                if (src) {
                    hit_data = hit_data.concat([{
                        'k': 'campaign',
                        'v': src
                    }]); 
                } else {
                    hit_data = hit_data.concat([{
                        'k': 'campaign',
                        'v': 'empty'
                    }]); 
                }
            }
            // SET
            googletag.cmd.push(function() {
                for (var i = 0; i < hit_data.length; i++) {
                    googletag.pubads().setTargeting(hit_data[i].k, hit_data[i].v);
                }
            });
        },
        loadAsync: function(src, loc, id) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = src;
            if (id) {
                s.id = id;
            }
            if (loc == 'head') {document.getElementsByTagName('head')[0].appendChild(s);}
            if (loc == 'body') {document.getElementsByTagName('body')[0].appendChild(s);}
            return s;
        },
        loadGPT: function() {
            gpt_script = this.loadAsync('https://securepubads.g.doubleclick.net/tag/js/gpt.js', 'head');
            this.logger('GPT loading [Ok]');
        },
        loadAPS: function() {
            try {
                !function(e, t, o, i, d, r, a) {
                    function n(o, i) {
                        t[e]._Q.push([o, i])
                    }
                    t[e] || (t[e] = {
                        init: function() {
                            n('i', arguments)
                        },
                        fetchBids: function() {
                            n('f', arguments)
                        },
                        setDisplayBids: function() {},
                        targetingKeys: function() {
                            return []
                        },
                        _Q: []
                    },
                    r = o.createElement(i),
                    r.async = !0,
                    r.src = d,
                    a = o.getElementsByTagName(i)[0],
                    a.parentNode.insertBefore(r, a))
                }('apstag', window, document, 'script', '//c.amazon-adsystem.com/aax2/apstag.js'),
                this.logger('APS loading [Ok]'),
                apstag.init({
                    pubID: this.settings.amazon.pubid,
                    adServer: 'googletag',
                    schain: this.settings.amazon.schain
                })
            } catch (e) {}
        },
        loadPBJS: function(version) {
            gpt_script = this.loadAsync('//a.rltd.io/prebid/'+version+'.js', 'head');
            this.logger('PBJS loading [Ok]');    
        },
        injectSlots: function(call_type) {
            this.logger('GAM: Slot Injection Started..');
            device = this.getDevice();
            for (var i = 0; i < this.settings.slots.length; i++) {
                if (call_type == 'divs' && hit.settings.slots[i].inventoryType.includes(device) ) {
                    this.addTag(this.settings.slots[i]);
                    this.logger('GAM: slot injection [Requested]-> '+ this.settings.slots[i].placementID);
                }
                if (call_type == 'display'&& hit.settings.slots[i].inventoryType.includes(device) ) {
                    this.displayTag(this.settings.slots[i]);
                    this.logger('GAM: displays ads [Requested] -> '+ this.settings.slots[i].placementID);
                }
            }
        },
        addTag: function(tag) {
            //this.logger('GAM Tag Injection Started..');
            var dt = document.getElementById(tag.id);
            if (typeof(dt) != 'undefined' && dt != null) {
                dt.innerHTML = '<div id="div-gpt-' + tag.placementID + '"></div>';
                this.logger('DIV could be targetted: ' + tag.placementID);
            } else {
               this.logger('DIV could not be targetted: ' + tag.id);
            }
        },
        displayTag: function(tag) {
            //this.logger('GAM display tag start');
            var dt = document.getElementById('div-gpt-' + tag.placementID);
            if (typeof(dt) != 'undefined' && dt != null && !tag.lazyload) {
                googletag.display('div-gpt-' + tag.placementID);
                this.logger('DFP display called:' + tag.placementName);
                this.logger('dt: ' + dt);
            } else {
                this.logger('DFP - ad display not called: ' + tag.id);
            }
        },
        addSticky: function(slotName) {
            var divSticky = document.createElement("div");
            divSticky.setAttribute("id", slotName);
            divSticky.setAttribute("class", "rtd_sticky");
            divSticky.setAttribute("style", "position:fixed;z-index:100;bottom:0;left:0;width:100%;height:auto;text-align:center;");
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.text = "googletag.cmd.push(function() { googletag.display('jardinetmaison_sticky'); });";
            divSticky.append(s);  
            document.getElementsByTagName("body")[0].appendChild(divSticky);
        },
        registerSlots: function() {
            this.logger('GAM init start');
            var accountChild =  this.settings.gam.networkchild ? ','+this.settings.gam.networkchild : '';
            for (var i = 0; i < this.settings.slots.length; i++) {
                if (this.settings.tags_present[i]) {
                    // define GAM slots
                    if (hit.settings.slots[i].inventoryType.includes(device)) {
                        if (hit.settings.slots[i].refresh) {
                            this.settings.gam.slots[(this.settings.slots[i].id)] = googletag.defineSlot('/' + this.settings.slots[i].accountID + accountChild + '/' + this.settings.slots[i].placementName, this.settings.slots[i].sizes[device], 'div-gpt-' + this.settings.slots[i].placementID).setTargeting('autorefresh', 'true').addService(googletag.pubads());
                        } else {
                            this.settings.gam.slots[(this.settings.slots[i].id)] = googletag.defineSlot('/' + this.settings.slots[i].accountID + accountChild + '/' + this.settings.slots[i].placementName, this.settings.slots[i].sizes[device], 'div-gpt-' + this.settings.slots[i].placementID).addService(googletag.pubads());
                        }
                        this.logger('GAM defineSlots: '+this.settings.slots[i].placementName);
                    }
                    // define APS slots
                    if (this.settings.publisher.enableAPS) {
                        if (hit.settings.slots[i].inventoryType.includes(device)) {
                            this.settings.amazon.slots.push({
                                  slotID: 'div-gpt-' + this.settings.slots[i].placementID,
                                  slotName: '/' + this.settings.slots[i].accountID + '/' + this.settings.slots[i].placementName,
                                  sizes: this.settings.slots[i].sizes[device]
                            });
                            this.logger('APS defineSlots: '+this.settings.slots[i].placementName);
                        }
                    }
                    // define PBJS slots
                    if (this.settings.publisher.enablePBJS) {
                        if (hit.settings.slots[i].inventoryType.includes(device)) {
                            this.settings.prebid.slots.push({
                                code: 'div-gpt-' + this.settings.slots[i].placementID,
                                mediaTypes: this.settings.slots[i].mediaTypes,
                                bids: this.settings.slots[i].bids
                            });
                            this.logger('PBJS defineSlots: '+this.settings.slots[i].placementName);
                        }
                    }
                } else {
                    this.logger('Slots are not able to be defined:' + this.settings.slots[i].placementName);
                }
            }
            if (this.settings.publisher.enablePBJS) {
                pbjs.bidderSettings = w.hit.settings.prebid.bidderSettings;
                pbjs.que.push(function() {
                    pbjs.setConfig(w.hit.settings.prebid.config);
                    pbjs.addAdUnits(w.hit.settings.prebid.slots);
                    if (w.hit.settings.schain) {
                        pbjs.que.push(function() {
                            pbjs.setConfig({
                                'schain': {
                                    'validation': 'strict',
                                    'config': {
                                        'ver': '1.0',
                                        'complete': 1,
                                        'nodes': [{'asi': 'hitopic.fr', 'sid': w.hit.settings.schain.sid, 'hp': 1}]
                                    }
                                }
                            });
                        });
                    }
                });
            }
        },
        startAds: function() {
            this.logger('[ADS] START');
            this.injectSlots('divs');
            
            for (var i = 0; i < this.settings.slots.length; i++) {
                if (this.settings.slots[i].inventoryType.includes(device)) {
                    var tag = this.settings.slots[i];
                    var dt = document.getElementById(tag.id);
                    if (typeof(dt) != 'undefined' && dt != null) {
                        if (tag.lazyload == true) {
                            if (tag.lazyload_no_auction == true) {
                                this.settings.hit_tags_lazyload_no_auction[i] = tag.id;
                            } else {
                                this.settings.hit_tags_lazyload[i] = tag.id;
                            }
                        } else {
                            this.settings.tags_present[i] = 'div-gpt-' + tag.placementID;
                        }
                    } 
                } else {
                    this.settings.AD_UNITS_TOGGLE_OFF.push('div-gpt-' + tag.placementID);
                    this.settings.tags_not_present[i] = true;
                }
            }
            
            googletag.cmd.push(function() { 
                w.hit.registerSlots();
                w.hit.setTargetingKVP();
                googletag.pubads().enableSingleRequest();
                googletag.pubads().setCentering(true);
                googletag.enableServices();
                w.hit.injectSlots('display');
                googletag.pubads().addEventListener("impressionViewable",function(e){var o=e.slot;-1<o.getTargeting('autorefresh').indexOf('true')&&setTimeout(function(){googletag.pubads().refresh([o]),console.log(":: Impression for slot",o.getSlotElementId(),"became viewable.")},1e3*30)});
                w.hit.requestHeaderBids();
                if (!w.hit.settings.publisher.enableAPS && !w.hit.settings.publisher.enablePBJS) {
                    googletag.pubads().refresh();
                    w.hit.logger('[ADSERVER] REFRESH 1', 'warning');
                }
            });
        },
        biddersBack: function() {
            // APS & PBJS
            if (this.settings.requestManager.aps && this.settings.requestManager.prebid) {
                this.sendAdserverRequest();
                this.logger('[ADSERVER] SEND ALL', 'warning');
            }
            // APS ONLY
            if (this.settings.requestManager.aps && !this.settings.requestManager.prebid) {
                this.sendAdserverRequest();
                this.logger('[ADSERVER] SEND APS', 'warning');
            }
            // PBJS ONLY
            if (!this.settings.requestManager.aps && this.settings.requestManager.prebid) {
                this.sendAdserverRequest();
                this.logger('[ADSERVER] SEND PBJS', 'warning');
            }
            return;
        },
        requestHeaderBids: function() {
            // APS
            if (this.settings.publisher.enableAPS) {
                apstag.fetchBids({
                    slots: this.settings.amazon.slots,
                    timeout: this.settings.amazon.timeout
                }, function(bids) {
                    googletag.cmd.push(function() {
                        apstag.setDisplayBids();
                        w.hit.settings.requestManager.aps = true;
                        w.hit.logger('[BIDS] REQ APS', 'warning');
                        if (!w.hit.settings.publisher.enablePBJS) {
                            w.hit.biddersBack();
                        }
                    });
                });
            }
            // PBJS
            if (this.settings.publisher.enablePBJS) {
                pbjs.que.push(function() {
                    pbjs.requestBids({
                        adUnitCodes: w.hit.settings.tags_present,
                        bidsBackHandler: function() {
                            googletag.cmd.push(function() {
                                pbjs.setTargetingForGPTAsync(w.hit.settings.tags_present);
                                w.hit.settings.requestManager.prebid = true;
                                w.hit.logger('[BIDS] REQ PBJS', 'warning');
                                w.hit.biddersBack();
                            })
                        }
                    });
                });
            }
        },
        sendAdserverRequest: function () {
            if (this.settings.requestManager.adserverRequestSent) return;
            this.settings.requestManager.adserverRequestSent = true;
            googletag.cmd.push(function() {
                    googletag.pubads().refresh();
                    w.hit.logger('[ADSERVER] REFRESH 2', 'warning');
            });
        },
        startDate: new Date(),
        stepTime: function() {
            var currentTime = new Date();
            return currentTime.getTime() - this.startDate.getTime();
        }
    };
    
    w.hit.settings = {};
    w.hit.settings.query     = w.hit.getParams(document.location.search);
    w.hit.settings.debug     = (w.hit.settings.query.hit_debug) ? true : false;
    w.hit.settings.tcf       = {'loops': 0,'maxLoops': 5,'loopDuration': 200,'debug': false,'cmpIsReady': 0}
    w.hit.settings.kvp       = {'site': '45s'};
    w.hit.settings.gam       = {'networkid': 66386742, 'networkchild': 21668226796, 'NonPersonalizedAds': 0};
    w.hit.settings.amazon    = {'pubid': 'e2ad19b9-535e-4e40-a8aa-8503db6d9b6d', 'timeout': 2000};
    w.hit.settings.prebid    = {'version': 'latest', 'timeout': 2000};
    w.hit.settings.schain    = {'sid': '1012'};
    (w.hit.settings.schain) ? w.hit.settings.amazon.schain = {complete: 1, ver: '1.0', nodes: [{asi: 'hitopic.fr',sid: w.hit.settings.schain.sid,hp: 1}] } : w.hit.settings.amazon.schain = null ;
    w.hit.settings.prebid.bidderSettings = {'unruly': {bidCpmAdjustment: function(bidCpm) {return bidCpm * 0.6;} } };
    w.hit.settings.prebid.customConfigPriceSetup = { 'buckets' : [ {'precision': 2, 'min' : 0, 'max' : 50, 'increment' : 0.01 }, {'precision': 2, 'min' : 50, 'max' : 60, 'increment' : 0.05 }, {'precision': 2, 'min' : 60, 'max' : 180, 'increment' : 0.1} ] };
    w.hit.settings.prebid.config = {
          consentManagement: {
            gdpr: {
              cmpApi: 'iab',
              timeout: 1e4,
              defaultGdprScope: true
            }
          },
          priceGranularity: w.hit.settings.prebid.customConfigPriceSetup,
          currency: {
            'adServerCurrency': 'EUR',
            'defaultRates': {
              'USD': {'EUR': 0.84}
            },
            'conversionRateFile': 'https://currency.prebid.org/latest.json'
          },
          bidderTimeout: w.hit.settings.prebid.timeout,
          bidderSequence: 'random',
          enableSendAllBids: false,
          userSync: {
            filterSettings: {iframe: {bidders: '*', filter: 'include'}},
            syncsPerBidder: 3,
            syncDelay: 3000
          }
        };
    w.hit.settings.requestManager = {'adserverRequestSent': false, 'aps': false, 'prebid': false}; 
    w.hit.settings.publisher = {
        'refreshAds': false,
        'refreshAdsInView': false,
        'refreshTime': 20000,
        'headerBidding': true,
        'headerBiddingAps' : true,
        'headerBiddingTimeout': 900,
        'sizeMapping': true,
        'enableAPS': false,
        'enablePBJS': true
    };
    
    var device = w.hit.getDevice();

    var asq_inc_top   = {mobile:'20261317', desktop:'20261310'};
    var asq_inc_mid   = {mobile:'20261318', desktop:'20261311'};
    var asq_inc_end   = {mobile:'20261322', desktop:'20261312'};
    var onemobile_dcn = {mobile:'8a969439017575b72d0ab7c7c0b4000d', desktop:'8a9691ae017575b728ddb7c7beb4000f'};

    w.hit.settings.sizes = {};
    w.hit.settings.sizes.billboard   = {mobile:[[1, 1], [300, 250], [336, 280]], desktop:[[1, 1], [300, 250], [336, 280], [728, 90], [970, 90], [970, 250]], tablet:[[1, 1], [300, 250], [336, 280], [728, 90], [970, 90], [970, 250]] };
    w.hit.settings.sizes.leaderboard = {mobile:[[1, 1], [250, 250], [300, 250], [336, 280]], desktop:[[1, 1], [250, 250], [300, 250], [336, 280], [728, 90]], tablet:[[1, 1], [250, 250], [300, 250], [336, 280]] };
    w.hit.settings.sizes.pave        = {mobile:[[1, 1], [250, 250], [300, 250], [336, 280]], desktop:[[1, 1], [250, 250], [300, 250]], tablet:[[1, 1], [250, 250], [300, 250]] };
    w.hit.settings.sizes.sky         = {mobile:[[1, 1], [300, 250], [336, 280]], desktop:[[1, 1], [300, 600], [300, 250]], tablet:[[1, 1], [300, 600], [300, 250]] };
    w.hit.settings.sizes.sticky      = {mobile:[[1, 1], [320, 50], [320, 100]], desktop:[[1, 1], [728, 90]], tablet:[[1, 1], [728, 90]] };
    w.hit.settings.slots = [{
        'id': 'hit-inc-top',
        'placementID': '45sec_inc_top', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_inc_top', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.leaderboard,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet', 'mobile'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.leaderboard[device]},
            video: {context: 'outstream',playerSize: [640, 480]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '129712'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId: asq_inc_top[device] }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_inc_top' }}
          ]
        }, {
        'id': 'hit-inc-mid',
        'placementID': '45sec_inc_mid', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_inc_mid', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.leaderboard,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet', 'mobile'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.leaderboard[device]},
            video: {context: 'outstream',playerSize: [640, 480]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '129712'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId: asq_inc_mid[device] }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_inc_mid' }}
          ]
        }, {
        'id': 'hit-inc-mid-alt',
        'placementID': '45sec_inc_mid_alt', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_inc_mid_alt', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.leaderboard,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet', 'mobile'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.leaderboard[device]},
            video: {context: 'outstream',playerSize: [640, 480]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '129712'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId: asq_inc_mid[device] }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_inc_mid' }}
          ]
        }, {
        'id': 'hit-inc-end',
        'placementID': '45sec_inc_end', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_inc_end', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.leaderboard,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet', 'mobile'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.leaderboard[device]},
            video: {context: 'outstream',playerSize: [640, 480]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '129712'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId: asq_inc_end[device] }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_inc_end' }}
          ]
        }, {
        'id': 'hit-sid-top',
        'placementID': '45sec_sid_top', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_sid_top', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.sky,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.sky[device]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '130608'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId:'20261314' }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_sid_top' }}
          ]
        }, {
        'id': 'hit-sid-mid',
        'placementID': '45sec_sid_mid', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_sid_mid', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.sky,
        'refresh': false,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.sky[device]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '130608'}},
            {bidder: 'criteo', params: {networkId: 10575}},
            {bidder: 'appnexus', params: {placementId:'20261316' }},
            {bidder: 'onemobile', params: {dcn: onemobile_dcn[device], pos: '45sec_sid_mid' }}
          ]
        }, {
        'id': 'hit-sticky',
        'placementID': '45sec_sticky', // GAM HTML DIV ID
        'accountID': w.hit.settings.gam.networkid,
        'accountChild' : w.hit.settings.gam.networkchild,
        'placementName': '45sec_sticky', // GAM LINE ITEM NAME
        'sizes': w.hit.settings.sizes.sticky,
        'refresh': true,
        'lazyload': false,
        'inventoryType': ['desktop', 'tablet', 'mobile'],
        'mediaTypes' : {
            banner: {sizes: w.hit.settings.sizes.sticky[device]}
          },
        'bids' : [
            {bidder: 'teads', params: {pageId: '119584', placementId: '130608'}},
            {bidder: 'criteo', params: {networkId: 10575}}
          ]
        }];
    
    w.hit.settings.gam.slots = [];
    w.hit.settings.amazon.slots = [];
    w.hit.settings.prebid.slots = [];
    w.hit.settings.tags_not_present = [];
    w.hit.settings.tags_present = [];
    w.hit.settings.hit_tags_lazyload = [];
    w.hit.settings.hit_tags_lazyload_no_auction = [];
    w.hit.settings.AD_UNITS_TOGGLE_OFF = [];
    
    if (d.readyState == 'interactive' || d.readyState == 'complete') {
        var hit_slots = d.querySelectorAll('[id^="hit-"]');
        console.log( 'HIT: r'+ d.readyState +' - '+ hit_slots.length);
        w.hit.init();
        w.hit.logger('HITr Ready');	
    } else {
        d.addEventListener('DOMContentLoaded', function () {
            var hit_slots = d.querySelectorAll('[id^="hit-"]');
            console.log( 'HIT: d'+ hit_slots.length);
            w.hit.init();
            w.hit.logger("HITd Ready");
        });
    }

})(window, document);