var grvt_tries = 1;
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var debugMode = false;
if (urlParams.has('debug_grvt')) {
    console.log(" [Gravity] ### Debug mode activated. ### ")
    debugMode = true;
}

var grvt_wrapper = {

    sendGravityEvent: function(token = "", processing_token = "", customProperties = {}) {

        if(debugMode){console.log("[Gravity] Gravity script starts...")}

        grvt_wrapper.checkGravityConsents(token, processing_token,function(consentStatus) {
                        if (consentStatus === true) {
                            if(debugMode){console.log("[Gravity][Event] Gravity has consent to collect");}

                            // Send the Event to Mediarithmics with correct site_token and customProperties
                            /* YOU SHOULD NOT EDIT THIS PART */
                              !function(a,b,c){"use strict";function d(a){var b=e[c]||{};e[c]=b,b[a]||(b[a]=function(){e._queue[c].push({method:a,args:Array.prototype.slice.apply(arguments)})})}var e=a.scimhtiraidem||{},f="init call config push pushDefault addProperties addProperty onFinish onStart _reset".split(" ");e._queue=e._queue||{},e._names=e._names||[],e._names.push(c),e._queue[c]=e._queue[c]||[],e._startTime=(new Date).getTime(),e._snippetVersion="2.0";for(var g=0;g<f.length;g++)d(f[g]);a.scimhtiraidem=e,a[c]=e[c];var h=b.createElement("script");h.setAttribute("type","text/javascript"),h.setAttribute("src","https://static.mediarithmics.com/tag/1/tag.min.js"),h.setAttribute("async","true"),b.getElementsByTagName("script")[0].parentNode.appendChild(h)}(window,document,"gravity");
                              
                              /* CUSTOMIZE THE TAG CALL BELOW */
                              gravity.init({
                               mode: 'VISIT',
                               site_token: token
                              });
                              
                              var drProperties = customProperties; 
                              
                              gravity.push("$page_view", drProperties);
                              
                            if(debugMode){
                                console.log("[Gravity][Event] Event sent to Mediarithmics.");
                            }
                            // Event sent to Mediarithmics
                              
                    }
                }
        );
    },


    triggerSetUserConsentEvent: function(token, processing_token, tcData,check_also_mr) {


        var grvt_has_consent = grvt_wrapper.cmplist_tcData_to_consent(tcData, cmp_list_v2,check_also_mr,token); 
        if(grvt_has_consent){
            /* We send set_user_choice to MR only when Gravity has consent */

            /* YOU SHOULD NOT EDIT THIS PART */
            !function (a, b, c) { "use strict"; function d(a) { var b = e[c] || {}; e[c] = b, b[a] || (b[a] = function () { e._queue[c].push({ method: a, args: Array.prototype.slice.apply(arguments) }) }) } var e = a.scimhtiraidem || {}, f = "init call config push pushDefault addProperties addProperty onFinish onStart _reset".split(" "); e._queue = e._queue || {}, e._names = e._names || [], e._names.push(c), e._queue[c] = e._queue[c] || [], e._startTime = (new Date).getTime(), e._snippetVersion = "2.0"; for (var g = 0; g < f.length; g++)d(f[g]); a.scimhtiraidem = e, a[c] = e[c]; var h = b.createElement("script"); h.setAttribute("type", "text/javascript"), h.setAttribute("src", "https://static.mediarithmics.com/tag/1/tag.min.js"), h.setAttribute("async", "true"), b.getElementsByTagName("script")[0].parentNode.appendChild(h) }(window, document, "gravity");

            /* CUSTOMIZE THE TAG CALL BELOW */
            gravity.init(token);
            var consentTargetedAdvertising = {
              $processing_token: processing_token,
              $choice_acceptance_value: grvt_has_consent, 
              $euconsent_v2_tcstring: tcData.tcString,
              cmp_id: "" + tcData.cmpId,
              cmp_version: "" + tcData.cmpVersion
            }
            
            if(debugMode){console.log("[Gravity][Consent] Send User Consent & user consent String to Mediarithmics.");}
            if(debugMode){console.log("[Gravity][Consent] Consent message=\n" + JSON.stringify(consentTargetedAdvertising));}
            gravity.push("$set_user_choice", consentTargetedAdvertising);
        }
        
    },

    cmplist_tcData_to_consent: function (tcData, cmp_list_v2,check_also_mr,token) {
        var pconsents = tcData.purpose.consents
        var purpconsents = pconsents[1] && pconsents[2] && pconsents[3] && pconsents[4] && pconsents[7]&& pconsents[9];
        var cmp_is_valid = false;
        var cmp_desc = "" + tcData.cmpId + " => invalid CMP";
        if (typeof typeof(cmp_list_v2["cmps"][tcData.cmpId]) !== "undefined"){
            cmp_is_valid = true;
            cmp_desc = "" + tcData.cmpId + " " + cmp_list_v2["cmps"][tcData.cmpId].name + " => valid CMP";
        }
        purpconsents = purpconsents && tcData.vendor.consents[501] && cmp_is_valid;
        if(check_also_mr){
            if(debugMode){console.log("[Gravity][TCFV2] Consent Summary \n CMP : " + cmp_desc + "\n purpose 1 : " + pconsents[1] + "\n purpose 2 : " + pconsents[2] + "\n purpose 3 : " + pconsents[3] + "\n purpose 4 : " + pconsents[4] + "\n purpose 7 : " + pconsents[7] + "\n purpose 9 : " + pconsents[9] + "\n vendor 501 : " + tcData.vendor.consents[501] + "\n vendor 184 : " + tcData.vendor.consents[184]);}
            purpconsents = purpconsents && tcData.vendor.consents[184];
        }
        else {
            if(debugMode){console.log("[Gravity][TCFV2] Consent Summary \n CMP : " + cmp_desc + "\n purpose 1 : " + pconsents[1] + "\n purpose 2 : " + pconsents[2] + "\n purpose 3 : " + pconsents[3] + "\n purpose 4 : " + pconsents[4] + "\n purpose 7 : " + pconsents[7] + "\n purpose 9 : " + pconsents[9] + "\n vendor 501 : " + tcData.vendor.consents[501]);}
        }
        if(['mc-mm17', 'mc-cosmo17', 'mc-staragora17', 'mc-larvf17', 'mc-avantages17', 'mc-mc17'].indexOf(token) >= 0){
            //cas GMC            
            if(debugMode){console.log("[Gravity][TCFV2] For GMC, checking also vendor Weborama 284 : " + tcData.vendor.consents[284]);}
            purpconsents = purpconsents && tcData.vendor.consents[284];
        }
        if(['token-to-blacklist1','token-to-blacklist2'].indexOf(token) >= 0){
            //CMP Non conforme CNIL 1er avril 21
            if(debugMode){console.log("[Gravity][TCFV2] Token non valide. Pas de collecte");}
            purpconsents = false;
        }
        
        return purpconsents
    },

    

    checkGravityConsents: function(token, processing_token, cb,check_also_mr = true){
        if(debugMode){console.log("[Gravity] Checking Gravity Consent...");}
        
        if (typeof window.__tcfapi !== "undefined") {
            if(debugMode){console.log("[Gravity][TCFV2] TCF V2 Detected. Setting up addEventListener & waiting for CMP to be loaded");}
            __tcfapi('addEventListener', 2, (tcData, success) => {
                if(!success){
                    if(debugMode){console.log("[Gravity][TCFV2] => EventListener failed - sleep 100ms and retry");}
                    setTimeout(function () {
                        grvt_wrapper.checkGravityConsents(token, processing_token, cb);
                    }, 100);
                }
                if(success && (tcData.eventStatus == "tcloaded" || tcData.eventStatus == "useractioncomplete") && (tcData.cmpId != 7 || Object.keys(tcData.purpose.consents).length != 0)) {
                    if(debugMode){console.log("[Gravity][TCFV2] CMP is Loaded and consent is ready");}
                    window.__tcfapi('getTCData', 2, (tcData, success) => {
                        if((success != false) && tcData.cmpStatus == "loaded" && (typeof cmp_list_v2 !== "undefined")) {   
                            if(debugMode){console.log("[Gravity][TCFV2] Downloading TC string...");}
                            if(debugMode){console.log("[Gravity][TCFV2] TC string=\n" + JSON.stringify(tcData));}
                            var grvt_has_consent = grvt_wrapper.cmplist_tcData_to_consent(tcData, cmp_list_v2,check_also_mr,token); 
                            if (grvt_has_consent) {
                                // Gravity has consent
                                cb(true);
                            } else {
                                if(debugMode){console.log("[Gravity][TCFV2] Gravity has not consent");}
                                cb(false);
                            }
                        } else {
                            if(debugMode){console.log("[Gravity][TCFV2] Unexpected Error : CMP not loaded or cmp_list_v2 not downloaded yet");}
                            if (grvt_tries >= 10) {
                                if(debugMode){console.log("[Gravity][TCFV2] Fatal Error : cannot pull tcData or cannot download cmp_list_v2 => no consent");}
                                cb(false);
                            } else {
                                grvt_tries += 1;
                                if(debugMode){console.log("[Gravity][TCFV2] => sleep 100ms and retry");}
                                setTimeout(function () {
                                    grvt_wrapper.checkGravityConsents(token, processing_token, cb);
                                }, 100);
                            }
                        }
                    }, [501,184,284]);
                    __tcfapi('removeEventListener', 2, (success) => {
                        if(!success) {
                            if(debugMode){console.log("[Gravity][TCFV2] Unexpected Error : Cannot remove Loaded CMP Event Listener");}
                        }
                    }
                    , tcData.listenerId);
                    __tcfapi('addEventListener', 2, (tcData, success) => {
                        if(success && tcData.eventStatus == "useractioncomplete") {
                            if(debugMode){console.log("[Gravity][TCFV2] Consent confirmed or re-confirmed");}
                            window.__tcfapi('getTCData', 2, (tcData, success) => {
                                if(success) {
                                    grvt_wrapper.triggerSetUserConsentEvent(token, processing_token, tcData,check_also_mr);
                                }
                            }, [501,184,284]);
                        }
                    });
                }
            });
        } else if (typeof window.__cmp !== "undefined") {
            if(debugMode){console.log("[Gravity] TCF V2 not detected, TCF V1 Detected...");}
            // Shoot event if we have the consent
            window.__cmp('getVendorConsents', [501,184,284], function(result) {
                var pconsents = result.purposeConsents;
                if(debugMode){
                    console.log("[Gravity][Event] Checking Purpose consents value...");
                    console.log("[Gravity][Event] Checking Vendor consents value for vendor Gravity = " + result.vendorConsents[501] + " vendor mediarithmics= " + result.vendorConsents[184] + " check also MR = " + check_also_mr);
                }
                var purpconsents = pconsents[1] && pconsents[2] && pconsents[3] && pconsents[4] && pconsents[5];
                if (purpconsents && result.vendorConsents[501] && (!check_also_mr || result.vendorConsents[184])) {
                    cb(true);
                } else {
                    cb(false);
                }
            });

        } else {
            // No TCF found. (CMP not loaded yet ?) - retry every second up until 5s
            if (grvt_tries >= 5) {
                if(debugMode){console.log("[Gravity] CMP not answering after several retries => no consent");}
                cb(false);
            } else {
                grvt_tries += 1;
                if(debugMode){console.log("[Gravity] CMP not answering => retry in 1s");}
                setTimeout(function () {
                    grvt_wrapper.checkGravityConsents(token, processing_token, cb,check_also_mr);
                }, 1000);
            }
        }
    }
}

var grvt_callback = function (){
    if(typeof grvt_load_wrapper_functions_only === 'undefined'){
	   grvt_wrapper.sendGravityEvent(grvt_siteToken, grvt_processingToken, grvt_customProperties);
    }
}

var script = document.createElement('script');
script.src = "https://tag.agrvt.com/tag/v2/cmp_list_v2.js";
document.head.appendChild(script);
script.onload = grvt_callback;