        disable_syncroll = 0;
        window.MB_PERCENT_BEFORE_SYNCROLL = 50;


var _loadCookies = function(w) {
    // Quantcast
    (function(d) {
        var px = d.createElement("img");
        px.width = "1";
        px.height = "1";
        px.style.width = "1px";
        px.style.height = "1px";
        px.src = "//pixel.quantserve.com/pixel/p-_s6V6f6Xagux1.gif?labels=publisher_1406";
        d.body.appendChild(px);
    })(w.document);

        (function(d) {
        var px = d.createElement("img");
        px.width = "1";
        px.height = "1";
        px.style.width = "1px";
        px.style.height = "1px";
        px.src = "https://player.mediabong.com/t/ex.php?uid=f623f5a35bae974f";
        d.body.appendChild(px);
    })(w.document);
    	_loadCookies = function(w) {};

    w.mb_consent_cookie = "";
}

var setupRules =  [{"config_id":"334","publisher_id":"1406","domain":"futura-sciences.com","syncroll_type":"floating_banner","syncroll_type_mobile":"inread_banner","disable_test":"","detection_rules":[".invibes-native",".article-column .article-text p","","","",""],"paragraph":"","inread_position":"0","bottom_position":"0","bloc_position":"-2","player_100p":"1","passback":"var sc = window.document.createElement(\"script\");sc.type = \"text\/javascript\";sc.className = \"teads\";sc.async = true;sc.src = \"\/\/a.teads.tv\/page\/40319\/tag\";var node = window.document.getElementsByTagName('head')[0];node.appendChild(sc);","min_paragraph_count":"0","margin":5,"quick_load":"0","passback_always":0,"stay_in_iframe":"0","max_player_width":"600","editorial_video_position":"keep","pause_after_ad":"1","load_detect_se":"0","inread_at_end":"0","min_width_for_floating":"0","floating_margin_bottom":"0","append_config":"0","disable_center":"0","reload_on_changestate":"0","custom_css_first_player":"","custom_css_second_player":"","no_video_if_passback":"0","fixed_syncroll":"0","fixed_syncroll_mobile":"0","article_display_detection":"","shadowroot":"","inread_alignment":"center","articleDetect":[".invibes-native",".article-column .article-text p"],"paragraphPosition":["0","0"],"paragraphCount":0,"quickLoad":0,"maxWidth":600,"videoPosition":"keep","pauseAfterAd":1,"loadDetectScript":0,"inreadAtEnd":0,"minFloatingWidth":0,"floatingMarginBottom":0,"appendConfig":0,"reloadOnChangestate":0,"noVideoIfPassback":0,"fixedSyncroll":0,"inreadAlignment":"center","loadDetect":"","impressionUrl":""}];
var _srLoader = function(w, rules) {
        var cont = w.document;
    var articleContent = "", tmpContainer = null;
        var matched = matchContent(rules, cont,w);
    if(matched === 1) {
                w.MB_PADDING = rules.margin;
        w.MB_VIDEO_POSITION = rules.videoPosition;
        w.MB_PAUSE_AFTER_AD = rules.pauseAfterAd;
        w.MB_FLOATING_MIN_WIDTH = rules.minFloatingWidth;
        w.MB_FLOATING_MARGIN_BOTTOM = rules.floatingMarginBottom;
        w.MB_NO_VIDEO_IF_PASSBACK = rules.noVideoIfPassback;
        w.MB_FIXED_SYNCROLL = rules.fixedSyncroll;
        w.MB_ARTICLE_DISPLAY_DETECTION = rules.article_display_detection;

        if (rules.passback != "") {
            w.mb_syncroll_passback = rules.passback;
            w.mb_passback_always = rules.mb_passback_always;
        }
        else {
            w.mb_syncroll_passback = "";
            w.mb_passback_always = 0;
        }

         // Add main script
                 cont.loadPlayer = function(window,document) {
            var mbCont = document.getElementById("mb_container"), playerCont = document.createElement("div");
            playerCont.id = "mb_video_6d3e7def70ef4750ea51af8cf3588cb9";
            mbCont.appendChild(playerCont);
                            window.fireEvent = function(eventName)  {
                        if(typeof window.mb_script_started_ms != "undefined") {
                            var now = new Date().getTime();
                            _duration = now - window.mb_script_started_ms;
                            console.log("(MB) "+eventName+" : "+_duration+" ms");
                        }
                        return;
                    var sc = document.createElement("img"), currentScript = "";
                    if(typeof window.MB_CURRENT_SCRIPT != "undefined") {
                        currentScript = window.MB_CURRENT_SCRIPT;
                    }

                    sc.src = "https://player.mediabong.com/t/dbg.php?pid=1406&script="+currentScript+"&event="+eventName+"&uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&url="+encodeURIComponent(window.document.location.href);
                    document.getElementsByTagName("head")[0].appendChild(sc);
                };

                window.fireEvent('dfp');

                if(typeof window.mb_players == 'undefined') {
                    window.mb_players = {};
                }

                window.mb_players["mb_video_6d3e7def70ef4750ea51af8cf3588cb9"] = {"chrome55Plus":false,"prod":1,"pub":1406,"publisherId":1406,"isExternal":0,"currentScript":null,"start":"0.52814000 1555316872","server":"https:\/\/player.mediabong.com","div":"mb_video_6d3e7def70ef4750ea51af8cf3588cb9","pcent":0,"stopIfAutoplay":0,"mouseOver":"0","width":"100%","height":"100%","delay":0,"ready":false,"checkScroll":false,"checkStopScroll":false,"timeoutObj":null,"playerState":0,"currentVolume":0,"snap_id":"11236732","thumbnail":"https:\/\/video.mediabong.com\/https:\/\/static.mediabong.com\/img\/default_preroll_picture_fr.png","flashvars":{"manifest_url":"https%3A%2F%2Fplayer.mediabong.com%2Fmanifest%2F3%2F1406-2.json%3Fuuid%3Df623f5a35bae974f%26suid%3Dc938e6e7a2d69cc5%26bloc%3D0%26display_title%3D0%26rnd%3D1555316872"},"params":{"allowscriptaccess":"always","allowfullscreen":"true","wmode":"opaque","quality":"high","bgcolor":"#222222"},"attributes":{"allowscriptaccess":"always","allowfullscreen":"true","wmode":"opaque","quality":"high","bgcolor":"#222222","styleclass":"mb_video"},"videoStart":0,"doConvert":true,"inBlock":0,"blocplayer_id":0,"jsonDoc":"{\"video_loading_spinner\":0,\"video_background_url\":\"https:\\\/\\\/video.mediabong.com\\\/https:\\\/\\\/static.mediabong.com\\\/img\\\/default_preroll_picture_fr.png\",\"display_start_bis\":\"0\",\"skip_start_bis_if_no_preroll\":\"0\",\"ad_video_buffer_time\":1,\"video_buffer_time\":3,\"preview_file\":\"https:\\\/\\\/video.mediabong.com\\\/https:\\\/\\\/static.mediabong.com\\\/img\\\/default_preroll_picture_fr.png\",\"preview_file_enc\":\"aHR0cHM6Ly92aWRlby5tZWRpYWJvbmcuY29tL2h0dHBzOi8vc3RhdGljLm1lZGlhYm9uZy5jb20vaW1nL2RlZmF1bHRfcHJlcm9sbF9waWN0dXJlX2ZyLnBuZw,,\",\"logo_file\":\"\",\"video_file\":\"https:\\\/\\\/video.mediabong.com\\\/mp4\\\/black_1s.mp4?ec_rate=1300&ec_prebuf=3\",\"click_through_tracking_url\":\"\",\"click_through_url\":\"\",\"video_start_time\":0,\"next_manifest_url\":\"\",\"autohide_controls\":1,\"autohide_share\":1,\"allow_stageVideo\":0,\"display_preroll\":1,\"display_video\":1,\"display_video_controls\":1,\"display_video_overlays\":0,\"display_postroll\":1,\"display_end\":1,\"ui_color_global\":\"d8d8d8\",\"ui_color_seeker\":\"212021\",\"ui_color_loader\":\"fe9a2e\",\"ui_color_title\":\"000000\",\"ui_color_background\":\"312f2d\",\"ui_color_foreground\":\"ffffff\",\"ui_color_highlight\":\"f49e09\",\"adservers\":[],\"postroll_adservers\":[],\"mobile_adservers\":[{\"id\":\"120158\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/campaign\\\/120158\\\/1718.xml?sid=11236732&iab_consent_cookie=[iab_consent_cookie]\",\"video_ad_click_behavior\":2},{\"id\":\"1191335\",\"url\":\"https:\\\/\\\/ads.stickyadstv.com\\\/www\\\/delivery\\\/swfIndex.php?reqType=AdsSetup&protocolVersion=2.0&zoneId=4383217&rnd=[rnd]&loc=[referer]&_fw_gdpr=1&_fw_gdpr_consent=[iab_consent_cookie]\",\"video_ad_click_behavior\":2},{\"id\":\"1021406\",\"url\":\"https:\\\/\\\/ads.stickyadstv.com\\\/www\\\/delivery\\\/swfIndex.php?reqType=AdsSetup&protocolVersion=2.0&zoneId=6200385&rnd=[rnd]&loc=[referer]&_fw_gdpr=1>&_fw_gdpr_consent=[iab_consent_cookie]\",\"video_ad_click_behavior\":2},{\"id\":\"7029005\",\"url\":\"https:\\\/\\\/ads.stickyadstv.com\\\/www\\\/delivery\\\/swfIndex.php?reqType=AdsSetup&protocolVersion=2.0&zoneId=3169585&rnd=[rnd]&loc=[referer]&_fw_gdpr=1>&_fw_gdpr_consent=[iab_consent_cookie]\",\"video_ad_click_behavior\":2},{\"id\":\"5191335\",\"url\":\"https:\\\/\\\/ads.stickyadstv.com\\\/www\\\/delivery\\\/swfIndex.php?reqType=AdsSetup&protocolVersion=2.0&zoneId=4383249&rnd=[rnd]&loc=[referer]&_fw_gdpr=1&_fw_gdpr_consent=[iab_consent_cookie]\",\"video_ad_click_behavior\":2}],\"mobile_adservers_redirect\":[{\"id\":\"120158\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/mvast\\\/11236732\\\/0\\\/120158.xml?uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&u=https%3A%2F%2Fplayer.mediabong.com%2Fcampaign%2F120158%2F1718.xml%3Fsid%3D11236732%26iab_consent_cookie%3D%5Biab_consent_cookie%5D\",\"video_ad_click_behavior\":2},{\"id\":\"1191335\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/mvast\\\/11236732\\\/0\\\/1191335.xml?uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&u=https%3A%2F%2Fads.stickyadstv.com%2Fwww%2Fdelivery%2FswfIndex.php%3FreqType%3DAdsSetup%26protocolVersion%3D2.0%26zoneId%3D4383217%26rnd%3D%5Brnd%5D%26loc%3D%5Breferer%5D%26_fw_gdpr%3D1%26_fw_gdpr_consent%3D%5Biab_consent_cookie%5D\",\"video_ad_click_behavior\":2},{\"id\":\"1021406\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/mvast\\\/11236732\\\/0\\\/1021406.xml?uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&u=https%3A%2F%2Fads.stickyadstv.com%2Fwww%2Fdelivery%2FswfIndex.php%3FreqType%3DAdsSetup%26protocolVersion%3D2.0%26zoneId%3D6200385%26rnd%3D%5Brnd%5D%26loc%3D%5Breferer%5D%26_fw_gdpr%3D1%3E%26_fw_gdpr_consent%3D%5Biab_consent_cookie%5D\",\"video_ad_click_behavior\":2},{\"id\":\"7029005\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/mvast\\\/11236732\\\/0\\\/7029005.xml?uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&u=https%3A%2F%2Fads.stickyadstv.com%2Fwww%2Fdelivery%2FswfIndex.php%3FreqType%3DAdsSetup%26protocolVersion%3D2.0%26zoneId%3D3169585%26rnd%3D%5Brnd%5D%26loc%3D%5Breferer%5D%26_fw_gdpr%3D1%3E%26_fw_gdpr_consent%3D%5Biab_consent_cookie%5D\",\"video_ad_click_behavior\":2},{\"id\":\"5191335\",\"url\":\"https:\\\/\\\/player.mediabong.com\\\/mvast\\\/11236732\\\/0\\\/5191335.xml?uuid=f623f5a35bae974f&suid=c938e6e7a2d69cc5&u=https%3A%2F%2Fads.stickyadstv.com%2Fwww%2Fdelivery%2FswfIndex.php%3FreqType%3DAdsSetup%26protocolVersion%3D2.0%26zoneId%3D4383249%26rnd%3D%5Brnd%5D%26loc%3D%5Breferer%5D%26_fw_gdpr%3D1%26_fw_gdpr_consent%3D%5Biab_consent_cookie%5D\",\"video_ad_click_behavior\":2}],\"ad_tracking\":{\"impression\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=impression&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5274&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&delay_script=[delay_script]&lang=[lang]&duration=[duration]&floorprice=[floorprice]&e_pred=VSS W00 3 SiXrX1\\\/0gBYXBAIDc1gFI ZojL yB4EwyeoD\\\/1tg1pxzUp2u5ZO 287wLFg0GpmTyx5Y0W2wkUO6xhwzSi58wqcq0hSKpMFcrScmDk8ag L0ZoGemttfKqlOEOZMzchI0mE20\\\/gN5QIxtUClZW1LeHb3BsrAsGOOjsGeO38TPr 5MebFsJWvNSMAlVwrlckqImFwwmR5CSQZF77FfhbT0KtJR0WGHSNuV9Fj9eUAT\\\/NhRVuP5RHm32ZZ6\\\/xDwgEFMjFesAkJSGvbwX2r8pYKGImLbrCveCubETeMvwnakuE4u5fE 16hOJyS4r7a2eqBwUnjjhFUFXi7RedXxztIt12B Vpn3LigspD4bbVwSMwt3MgJIoOXX\\\/sKug2V0Mp9GReO7SLlqe 5VbMh\\\/HaVApiuthS34Xzj5X7L3kTDPDzjQmNGrHvUz3Wm4JlgmAc67cAllCfEe\\\/wWWq4nVbl044XiHYt1vUv8 o3BB4ssyT6TLZury\\\/TpNRE0mgdvmIDZfF2g 0rmub3WnYJpdlimgu5e6ms\\\/Lcm52WgnTzTJO5GLu3kLnk7PaI8mn33fPtGycQPdxCuNFQuxm9 mfbB1C3KseNmnrC 3gSfy6rdTcQMn8GZUYspXNPKGBE qrT44A5vJkqe1JVh18EBQsB3\\\/xoPZSk\\\/g6DXj31W5P5gj6OkUzaCP2edDhceyOdWT375hrTUIzKiIOmk2lrzIFHA9\\\/yyy90qHKHm3WQgrNQD8Y\\\/ynYVFE7eSykp4lafiFVKE\\\/xZ8S1WhCjguoUlWbagWp3YyQ1dS5jE8LmN24 bTymfh\\\/gp1FA6v62SfwZce 2CkYmQfT vf3cU3aVfkwdWd7Ne96rGCI X41SWq3aOzHXGZs6YV GMZteFKrGhAQzMRsur 8AFfM1Y7xEhiHEya1VzNE1fX4eFUSflwHf9lk41QTAx3bxdj2Y xBHZ157\\\/OVlpyTIIl51Bd\\\/gzuXD\\\/Vblll8vpm93Nq0CnJljXPL57SoJwFpzpqmtziXjmeefhl8XBJ7CkBKYN8SCToJ5DWOZX4bRLWxUQ798rLFo0UrvpxRpbFxXQT0BSsmyIcBTO9fPNeIeuVCjoeMj7hamHMizYOrf1vps0EOLUDs2xBVqkPMhIefaK6m\\\/m2Q6UmGFlTXiWiWIq2DArgNPeaPrwiezw\\\/26SI 0OyO9V SVivsmSuTLPBck27\\\/isYDbWBjbfIlPoXC63y6mC8Q==\",\"start\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=start&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5266&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"paused\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=pause&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5267&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"firstQuartile\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=25p&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5268&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"midpoint\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=50p&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5268&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"thirdQuartile\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=75p&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5269&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"complete\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=100p&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5269&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"clickTracking\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=click&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.527&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"closeLinear\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=close&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5271&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"1seconds\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=1s&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5271&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"30seconds\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=30s&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5272&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"error\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=aderror&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5272&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&error_code=[error_code]\",\"tabHidden\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=tabHidden&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5273&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\",\"fullscreen\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=fullscreen&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5273&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\"},\"video_tracking\":{\"start\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/t.php?snap=11236732&evt=play&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.5275&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]\"},\"adserver_reporting_url\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/pr_reporting.php?adb=0&sid=11236732&adid=[ad_server_id]&result=[reporting_value]\",\"ivt_url\":\"\\\/\\\/c.fqtag.com\\\/tag\\\/implement-r.js?org=4O3wK7mWt5OmJAt6ptuk&p=player&a=com_1406&cmp=0&fmt=video&rd=[referer]&mode=autoplay&rt=display&sl=1&fq=1\",\"facebook_url\":\"https:\\\/\\\/www.facebook.com\\\/sharer\\\/sharer.php?u=https%3A%2F%2Fplayer.mediabong.com%2Ffb%2F11236732.html%3Furl%3D[referer]\",\"twitter_url\":\"https:\\\/\\\/twitter.com\\\/intent\\\/tweet?url=[referer]\",\"display_start\":1,\"url_placeholders\":{\"video_title\":\"Video+Syncroll\",\"video_duration\":\"0\",\"video_id\":\"2\",\"video_description\":\"k\",\"snap_id\":\"11236732\",\"video_w\":480,\"video_h\":270,\"domain\":\"www.futura-sciences.com\",\"session_id\":\"c938e6e7a2d69cc5\",\"isHtml5Player\":0},\"linear_ad_message\":\"\",\"mb_vast_log\":false,\"mb_vast_log_url\":\"https:\\\/\\\/player.mediabong.com\\\/t\\\/vast_log_url.php\"}","myPlayer":null,"tdVideoAdBegin":false,"tdVideoAdFiq":false,"tdVideoAdMid":false,"tdVideoAdThq":false,"tdVideoAdComp":false,"tdVideoAdEnd":false,"tdVideoAdClick":false,"tdVideoContentStart":false,"tdVideoContentFiq":false,"tdVideoContentMid":false,"tdVideoContentThq":false,"tdVideoContentComp":false,"tdVideoContentEnd":false,"tdVideoContentFullSc":false,"clickAdLink":"","playingAdd":false,"videoContentPlaying":false,"adAlertPopin":false,"posRV":0,"nbVideoRV":0,"nb_loop":0,"cpt":0,"xmlDoc2":null,"taghttp":null,"isPlaying":false,"isFS":false,"events":{"print":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=print&url=%5Breferer%5D&ts=%5Btimestamp%5D&mobile=0&smid=0&cpid=%5Bcampaign_id%5D&bloc=0&adb=%5Badblock%5D&adserver=%5Bad_server_id%5D&sync=%5Bsyncrollenabled%5D&synctype=%5Bsyncrolltype%5D&ppos=%5Bplayerposition%5D&scroll=%5Bscrollvalue%5D&vis=%5Bvisibility%5D&visattn=%5Bvisibilityattn%5D&mute=%5Bmute%5D&rnd=1555316872.4224&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=%5Bdealid%5D&exchange_id=%5Bpartnerid%5D&dsp_id=%5Bseatid%5D&cpm=%5Bcpm%5D&fgp=%5Bfgp%5D&fgp_enhanced=%5Bfgp_enhanced%5D&tech=%5Btech%5D&ad_clutter=%5Bad_clutter%5D&player_proportion=%5Bplayer_proportion%5D&luid=%5Bluid%5D&adomain=%5Badomain%5D&floortype=%5Bfloortype%5D&delay=%5Bdelay%5D&rtbdata=%5Brtbdata%5D&w_val=%5Bplayer_width%5D&h_val=%5Bplayer_height%5D&w_ratio=%5Bw_ratio%5D&h_ratio=%5Bh_ratio%5D&zone=0&publisher_tag=%5Bpublisher_tag%5D&secureframe=%5Bsecureframe%5D&second=%5Bsecond%5D&visu_avg=%5Bvisu_avg%5D&actual_vtr=%5Bactual_vtr%5D&player_width_seconds_300=%5Bplayer_width_seconds_300%5D&player_width_seconds_320=%5Bplayer_width_seconds_320%5D&player_width_seconds_480=%5Bplayer_width_seconds_480%5D&px_center=%5Bpx_center%5D&ad_clutter_max=%5Bad_clutter_max%5D&moved_below_50p_vis_second=%5Bmoved_below_50p_vis_second%5D&scroll_avg=%5Bscroll_avg%5D&iab_consent_cookie=%5Biab_consent_cookie%5D","printSyncroll":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=syncroll_print&url=%5Breferer%5D&ts=%5Btimestamp%5D&mobile=0&smid=0&cpid=%5Bcampaign_id%5D&bloc=0&adb=%5Badblock%5D&adserver=%5Bad_server_id%5D&sync=%5Bsyncrollenabled%5D&synctype=%5Bsyncrolltype%5D&ppos=%5Bplayerposition%5D&scroll=%5Bscrollvalue%5D&vis=%5Bvisibility%5D&visattn=%5Bvisibilityattn%5D&mute=%5Bmute%5D&rnd=1555316872.4225&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=%5Bdealid%5D&exchange_id=%5Bpartnerid%5D&dsp_id=%5Bseatid%5D&cpm=%5Bcpm%5D&fgp=%5Bfgp%5D&fgp_enhanced=%5Bfgp_enhanced%5D&tech=%5Btech%5D&ad_clutter=%5Bad_clutter%5D&player_proportion=%5Bplayer_proportion%5D&luid=%5Bluid%5D&adomain=%5Badomain%5D&floortype=%5Bfloortype%5D&delay=%5Bdelay%5D&rtbdata=%5Brtbdata%5D&w_val=%5Bplayer_width%5D&h_val=%5Bplayer_height%5D&w_ratio=%5Bw_ratio%5D&h_ratio=%5Bh_ratio%5D&zone=0&publisher_tag=%5Bpublisher_tag%5D&secureframe=%5Bsecureframe%5D&second=%5Bsecond%5D&visu_avg=%5Bvisu_avg%5D&actual_vtr=%5Bactual_vtr%5D&player_width_seconds_300=%5Bplayer_width_seconds_300%5D&player_width_seconds_320=%5Bplayer_width_seconds_320%5D&player_width_seconds_480=%5Bplayer_width_seconds_480%5D&px_center=%5Bpx_center%5D&ad_clutter_max=%5Bad_clutter_max%5D&moved_below_50p_vis_second=%5Bmoved_below_50p_vis_second%5D&scroll_avg=%5Bscroll_avg%5D&iab_consent_cookie=%5Biab_consent_cookie%5D","syncrollScrolled":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=syncroll_scroll&url=%5Breferer%5D&ts=%5Btimestamp%5D&mobile=0&smid=0&cpid=%5Bcampaign_id%5D&bloc=0&adb=%5Badblock%5D&adserver=%5Bad_server_id%5D&sync=%5Bsyncrollenabled%5D&synctype=%5Bsyncrolltype%5D&ppos=%5Bplayerposition%5D&scroll=%5Bscrollvalue%5D&vis=%5Bvisibility%5D&visattn=%5Bvisibilityattn%5D&mute=%5Bmute%5D&rnd=1555316872.4225&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=%5Bdealid%5D&exchange_id=%5Bpartnerid%5D&dsp_id=%5Bseatid%5D&cpm=%5Bcpm%5D&fgp=%5Bfgp%5D&fgp_enhanced=%5Bfgp_enhanced%5D&tech=%5Btech%5D&ad_clutter=%5Bad_clutter%5D&player_proportion=%5Bplayer_proportion%5D&luid=%5Bluid%5D&adomain=%5Badomain%5D&floortype=%5Bfloortype%5D&delay=%5Bdelay%5D&rtbdata=%5Brtbdata%5D&w_val=%5Bplayer_width%5D&h_val=%5Bplayer_height%5D&w_ratio=%5Bw_ratio%5D&h_ratio=%5Bh_ratio%5D&zone=0&publisher_tag=%5Bpublisher_tag%5D&secureframe=%5Bsecureframe%5D&second=%5Bsecond%5D&visu_avg=%5Bvisu_avg%5D&actual_vtr=%5Bactual_vtr%5D&player_width_seconds_300=%5Bplayer_width_seconds_300%5D&player_width_seconds_320=%5Bplayer_width_seconds_320%5D&player_width_seconds_480=%5Bplayer_width_seconds_480%5D&px_center=%5Bpx_center%5D&ad_clutter_max=%5Bad_clutter_max%5D&moved_below_50p_vis_second=%5Bmoved_below_50p_vis_second%5D&scroll_avg=%5Bscroll_avg%5D&iab_consent_cookie=%5Biab_consent_cookie%5D","syncrollNoAd":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=syncroll_no_ad&url=%5Breferer%5D&ts=%5Btimestamp%5D&mobile=0&smid=0&cpid=%5Bcampaign_id%5D&bloc=0&adb=%5Badblock%5D&adserver=%5Bad_server_id%5D&sync=%5Bsyncrollenabled%5D&synctype=%5Bsyncrolltype%5D&ppos=%5Bplayerposition%5D&scroll=%5Bscrollvalue%5D&vis=%5Bvisibility%5D&visattn=%5Bvisibilityattn%5D&mute=%5Bmute%5D&rnd=1555316872.4225&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=%5Bdealid%5D&exchange_id=%5Bpartnerid%5D&dsp_id=%5Bseatid%5D&cpm=%5Bcpm%5D&fgp=%5Bfgp%5D&fgp_enhanced=%5Bfgp_enhanced%5D&tech=%5Btech%5D&ad_clutter=%5Bad_clutter%5D&player_proportion=%5Bplayer_proportion%5D&luid=%5Bluid%5D&adomain=%5Badomain%5D&floortype=%5Bfloortype%5D&delay=%5Bdelay%5D&rtbdata=%5Brtbdata%5D&w_val=%5Bplayer_width%5D&h_val=%5Bplayer_height%5D&w_ratio=%5Bw_ratio%5D&h_ratio=%5Bh_ratio%5D&zone=0&publisher_tag=%5Bpublisher_tag%5D&secureframe=%5Bsecureframe%5D&second=%5Bsecond%5D&visu_avg=%5Bvisu_avg%5D&actual_vtr=%5Bactual_vtr%5D&player_width_seconds_300=%5Bplayer_width_seconds_300%5D&player_width_seconds_320=%5Bplayer_width_seconds_320%5D&player_width_seconds_480=%5Bplayer_width_seconds_480%5D&px_center=%5Bpx_center%5D&ad_clutter_max=%5Bad_clutter_max%5D&moved_below_50p_vis_second=%5Bmoved_below_50p_vis_second%5D&scroll_avg=%5Bscroll_avg%5D&iab_consent_cookie=%5Biab_consent_cookie%5D"},"title":"Video Syncroll","endAfterPreroll":1,"title_position":"NONE","custom_title":"","addMuteButton":0,"disable_syncad":false,"syncroll_z_index":1000000000,"noMouseOverVolume":0,"skip_duration":5,"campaigns":"","timeTracker":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=second&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4227&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&ad_progress=[adprogress]&attn=[attentionscore]&attns=[attentionscore_sum]&vistotal=[viewability_total]&py_center=[py_center]","mrcImpression":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=impression_mrc&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4227&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&ad_progress=[adprogress]&attn=[attentionscore]","groupmImpression":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=impression_groupm&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4228&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&ad_progress=[adprogress]&attn=[attentionscore]","adserverLoading":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=inventory&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4226&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&lang=[lang]&e_pred=VSS+W00+3+SiXrX1\/0gBYXBAIDc1gFI+ZojL+yB4EwyeoD\/1tg1pxzUp2u5ZO+287wLFg0GpmTyx5Y0W2wkUO6xhwzSi58wqcq0hSKpMFcrScmDk8ag+L0ZoGemttfKqlOEOZMzchI0mE20\/gN5QIxtUClZW1LeHb3BsrAsGOOjsGeO38TPr+5MebFsJWvNSMAlVwrlckqImFwwmR5CSQZF77FfhbT0KtJR0WGHSNuV9Fj9eUAT\/NhRVuP5RHm32ZZ6\/xDwgEFMjFesAkJSGvbwX2r8pYKGImLbrCveCubETeMvwnakuE4u5fE+16hOJyS4r7a2eqBwUnjjhFUFXi7RedXxztIt12B+Vpn3LigspD4bbVwSMwt3MgJIoOXX\/sKug2V0Mp9GReO7SLlqe+5VbMh\/HaVApiuthS34Xzj5X7L3kTDPDzjQmNGrHvUz3Wm4JlgmAc67cAllCfEe\/wWWq4nVbl044XiHYt1vUv8+o3BB4ssyT6TLZury\/TpNRE0mgdvmIDZfF2g+0rmub3WnYJpdlimgu5e6ms\/Lcm52WgnTzTJO5GLu3kLnk7PaI8mn33fPtGycQPdxCuNFQuxm9+mfbB1C3KseNmnrC+3gSfy6rdTcQMn8GZUYspXNPKGBE+qrT44A5vJkqe1JVh18EBQsB3\/xoPZSk\/g6DXj31W5P5gj6OkUzaCP2edDhceyOdWT375hrTUIzKiIOmk2lrzIFHA9\/yyy90qHKHm3WQgrNQD8Y\/ynYVFE7eSykp4lafiFVKE\/xZ8S1WhCjguoUlWbagWp3YyQ1dS5jE8LmN24+bTymfh\/gp1FA6v62SfwZce+2CkYmQfT+vf3cU3aVfkwdWd7Ne96rGCI+X41SWq3aOzHXGZs6YV+GMZteFKrGhAQzMRsur+8AFfM1Y7xEhiHEya1VzNE1fX4eFUSflwHf9lk41QTAx3bxdj2Y+xBHZ157\/OVlpyTIIl51Bd\/gzuXD\/Vblll8vpm93Nq0CnJljXPL57SoJwFpzpqmtziXjmeefhl8XBJ7CkBKYN8SCToJ5DWOZX4bRLWxUQ798rLFo0UrvpxRpbFxXQT0BSsmyIcBTO9fPNeIeuVCjoeMj7hamHMizYOrf1vps0EOLUDs2xBVqkPMhIefaK6m\/m2Q6UmGFlTXiWiWIq2DArgNPeaPrwiezw\/26SI+0OyO9V+SVivsmSuTLPBck27\/isYDbWBjbfIlPoXC63y6mC8Q==","adError":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=aderror&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4227&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]&error_code=[error_code]","eventTracker":"https:\/\/player.mediabong.com\/t\/t.php?snap=11236732&evt=[event]&url=[referer]&ts=[timestamp]&mobile=0&smid=0&cpid=[campaign_id]&bloc=0&adb=[adblock]&adserver=[ad_server_id]&sync=[syncrollenabled]&synctype=[syncrolltype]&ppos=[playerposition]&scroll=[scrollvalue]&vis=[visibility]&visattn=[visibilityattn]&mute=[mute]&rnd=1555316872.4227&suid=c938e6e7a2d69cc5&uuid=f623f5a35bae974f&network=&deal_id=[dealid]&exchange_id=[partnerid]&dsp_id=[seatid]&cpm=[cpm]&fgp=[fgp]&fgp_enhanced=[fgp_enhanced]&tech=[tech]&ad_clutter=[ad_clutter]&player_proportion=[player_proportion]&luid=[luid]&adomain=[adomain]&floortype=[floortype]&delay=[delay]&rtbdata=[rtbdata]&w_val=[player_width]&h_val=[player_height]&w_ratio=[w_ratio]&h_ratio=[h_ratio]&zone=0&publisher_tag=[publisher_tag]&secureframe=[secureframe]&second=[second]&visu_avg=[visu_avg]&actual_vtr=[actual_vtr]&player_width_seconds_300=[player_width_seconds_300]&player_width_seconds_320=[player_width_seconds_320]&player_width_seconds_480=[player_width_seconds_480]&px_center=[px_center]&ad_clutter_max=[ad_clutter_max]&moved_below_50p_vis_second=[moved_below_50p_vis_second]&scroll_avg=[scroll_avg]&iab_consent_cookie=[iab_consent_cookie]","enableFloatingBug":0,"ipadAsIphone":0,"requireSyncroll":0,"sessionId":"player10.dc1.mediabong.com_5cb44088402294.14075166","add_close_over_video":0,"adserver_has_cta":"[119816,119817,119987,120023,120024,120060,120061,120062,120063,120134,120135,120136,120137,120138,120139,120140,120141,120150,120151,120153,120154,120155,120156,120157,120158,120159,120160,120161,120162,120163,120164,120165,120166,120167,120171,120172,120173,120174,120175,120176,120177,120189,120190,120191,120192,120193,120196,120203,120204]","enableSound":0};

                window.css_link = "https://static.mediabong.com/css/mb.short.1812192.css";
                // Preloaded css content
                window.css_content = "%2F%2A%21%0AVideo.js%20Default%20Styles%20%28http%3A%2F%2Fvideojs.com%29%0AVersion%204.8.4%0ACreate%20your%20own%20skin%20at%20http%3A%2F%2Fdesigner.videojs.com%0A%2A%2F.vjs-default-skin%7Bcolor%3A%23ccc%7D%40font-face%7Bfont-family%3AVideoJS%3Bsrc%3Aurl%28%2F%2Fstatic.mediabong.com%2Ffonts%2Fvjs%2Fvjs.eot%29%3Bsrc%3Aurl%28%2F%2Fstatic.mediabong.com%2Ffonts%2Fvjs%2Fvjs.eot%3F%23iefix%29%20format%28%27embedded-opentype%27%29%2Curl%28%2F%2Fstatic.mediabong.com%2Ffonts%2Fvjs%2Fvjs.woff%29%20format%28%27woff%27%29%2Curl%28%2F%2Fstatic.mediabong.com%2Ffonts%2Fvjs%2Fvjs.ttf%29%20format%28%27truetype%27%29%2Curl%28%2F%2Fstatic.mediabong.com%2Ffonts%2Fvjs%2Fvjs.svg%23icomoon%29%20format%28%27svg%27%29%3Bfont-weight%3A400%3Bfont-style%3Anormal%7D.vjs-default-skin%20.vjs-slider%7Boutline%3A0%3Bposition%3Arelative%3Bcursor%3Apointer%3Bpadding%3A0%3Bbackground-color%3A%23333%3Bbackground-color%3Argba%2851%2C51%2C51%2C.9%29%7D.vjs-default-skin%20.vjs-slider%3Afocus%7B-webkit-box-shadow%3A0%200%202em%20%23fff%3B-moz-box-shadow%3A0%200%202em%20%23fff%3Bbox-shadow%3A0%200%202em%20%23fff%7D.vjs-default-skin%20.vjs-slider-handle%7Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A0%7D.vjs-default-skin%20.vjs-slider-handle%3Abefore%7Bcontent%3A%22%5Ce009%22%3Bfont-family%3AVideoJS%3Bfont-size%3A1em%3Bline-height%3A1%3Btext-align%3Acenter%3Btext-shadow%3A0%200%201em%20%23fff%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3B-webkit-transform%3Arotate%28-45deg%29%3B-moz-transform%3Arotate%28-45deg%29%3B-ms-transform%3Arotate%28-45deg%29%3B-o-transform%3Arotate%28-45deg%29%3Btransform%3Arotate%28-45deg%29%7D.vjs-default-skin%20.vjs-control-bar%7Bdisplay%3Anone%3Bposition%3Aabsolute%3Bbottom%3A0%3Bleft%3A0%3Bright%3A0%3Bheight%3A3em%3Bbackground-color%3A%2307141e%3Bbackground-color%3Argba%287%2C20%2C30%2C.7%29%7D.vjs-default-skin.vjs-has-started%20.vjs-control-bar%7Bdisplay%3Ablock%3Bvisibility%3Avisible%3Bopacity%3A1%3B-webkit-transition%3Avisibility%20.1s%2Copacity%20.1s%3B-moz-transition%3Avisibility%20.1s%2Copacity%20.1s%3B-o-transition%3Avisibility%20.1s%2Copacity%20.1s%3Btransition%3Avisibility%20.1s%2Copacity%20.1s%7D.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing%20.vjs-control-bar%7Bdisplay%3Ablock%3Bvisibility%3Ahidden%3Bopacity%3A0%3B-webkit-transition%3Avisibility%201s%2Copacity%201s%3B-moz-transition%3Avisibility%201s%2Copacity%201s%3B-o-transition%3Avisibility%201s%2Copacity%201s%3Btransition%3Avisibility%201s%2Copacity%201s%7D.vjs-default-skin.vjs-controls-disabled%20.vjs-control-bar%7Bdisplay%3Anone%7D.vjs-default-skin.vjs-using-native-controls%20.vjs-control-bar%7Bdisplay%3Anone%7D.vjs-default-skin.vjs-error%20.vjs-control-bar%7Bdisplay%3Anone%7D%40media%20%5C0screen%7B.vjs-default-skin.vjs-user-inactive.vjs-playing%20.vjs-control-bar%20%3Abefore%7Bcontent%3A%22%22%7D%7D.vjs-default-skin%20.vjs-control%7Boutline%3A0%3Bposition%3Arelative%3Bfloat%3Aleft%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bheight%3A3em%3Bwidth%3A4em%7D.vjs-default-skin%20.vjs-control%3Abefore%7Bfont-family%3AVideoJS%3Bfont-size%3A1.5em%3Bline-height%3A2%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%3Btext-align%3Acenter%3Btext-shadow%3A1px%201px%201px%20rgba%280%2C0%2C0%2C.5%29%7D.vjs-default-skin%20.vjs-control%3Afocus%3Abefore%2C.vjs-default-skin%20.vjs-control%3Ahover%3Abefore%7Btext-shadow%3A0%200%201em%20%23fff%7D.vjs-default-skin%20.vjs-control-text%7Bborder%3A0%3Bclip%3Arect%280%200%200%200%29%3Bheight%3A1px%3Bmargin%3A-1px%3Boverflow%3Ahidden%3Bpadding%3A0%3Bposition%3Aabsolute%3Bwidth%3A1px%7D.vjs-default-skin%20.vjs-play-control%7Bwidth%3A5em%3Bcursor%3Apointer%7D.vjs-default-skin%20.vjs-play-control%3Abefore%7Bcontent%3A%22%5Ce001%22%7D.vjs-default-skin.vjs-playing%20.vjs-play-control%3Abefore%7Bcontent%3A%22%5Ce002%22%7D.vjs-default-skin%20.vjs-playback-rate%20.vjs-playback-rate-value%7Bfont-size%3A1.5em%3Bline-height%3A2%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%3Btext-align%3Acenter%3Btext-shadow%3A1px%201px%201px%20rgba%280%2C0%2C0%2C.5%29%7D.vjs-default-skin%20.vjs-playback-rate.vjs-menu-button%20.vjs-menu%20.vjs-menu-content%7Bwidth%3A4em%3Bleft%3A-2em%3Blist-style%3Anone%7D.vjs-default-skin%20.vjs-mute-control%2C.vjs-default-skin%20.vjs-volume-menu-button%7Bcursor%3Apointer%3Bfloat%3Aright%7D.vjs-default-skin%20.vjs-mute-control%3Abefore%2C.vjs-default-skin%20.vjs-volume-menu-button%3Abefore%7Bcontent%3A%22%5Ce006%22%7D.vjs-default-skin%20.vjs-mute-control.vjs-vol-0%3Abefore%2C.vjs-default-skin%20.vjs-volume-menu-button.vjs-vol-0%3Abefore%7Bcontent%3A%22%5Ce003%22%7D.vjs-default-skin%20.vjs-mute-control.vjs-vol-1%3Abefore%2C.vjs-default-skin%20.vjs-volume-menu-button.vjs-vol-1%3Abefore%7Bcontent%3A%22%5Ce004%22%7D.vjs-default-skin%20.vjs-mute-control.vjs-vol-2%3Abefore%2C.vjs-default-skin%20.vjs-volume-menu-button.vjs-vol-2%3Abefore%7Bcontent%3A%22%5Ce005%22%7D.vjs-default-skin%20.vjs-volume-control%7Bwidth%3A5em%3Bfloat%3Aright%7D.vjs-default-skin%20.vjs-volume-bar%7Bwidth%3A5em%3Bheight%3A.6em%3Bmargin%3A1.1em%20auto%200%7D.vjs-default-skin%20.vjs-volume-menu-button%20.vjs-menu-content%7Bheight%3A2.9em%7D.vjs-default-skin%20.vjs-volume-level%7Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bheight%3A.5em%3Bwidth%3A100%25%3Bbackground%3A%2366a8cc%20url%28data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR%2FQJ%2FUb%2F%2F04%2Bw7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC%29%20-50%25%200%20repeat%7D.vjs-default-skin%20.vjs-volume-bar%20.vjs-volume-handle%7Bwidth%3A.5em%3Bheight%3A.5em%3Bleft%3A4.5em%7D.vjs-default-skin%20.vjs-volume-handle%3Abefore%7Bfont-size%3A.9em%3Btop%3A-.2em%3Bleft%3A-.2em%3Bwidth%3A1em%3Bheight%3A1em%7D.vjs-default-skin%20.vjs-volume-menu-button%20.vjs-menu%20.vjs-menu-content%7Bwidth%3A6em%3Bleft%3A-4em%7D.vjs-default-skin%20.vjs-progress-control%7Bposition%3Aabsolute%3Bleft%3A0%3Bright%3A0%3Bwidth%3Aauto%3Bfont-size%3A.3em%3Bheight%3A1em%3Btop%3A-1em%3B-webkit-transition%3Aall%20.4s%3B-moz-transition%3Aall%20.4s%3B-o-transition%3Aall%20.4s%3Btransition%3Aall%20.4s%7D.vjs-default-skin%3Ahover%20.vjs-progress-control%7Bfont-size%3A.9em%3B-webkit-transition%3Aall%20.2s%3B-moz-transition%3Aall%20.2s%3B-o-transition%3Aall%20.2s%3Btransition%3Aall%20.2s%7D.vjs-default-skin%20.vjs-progress-holder%7Bheight%3A100%25%7D.vjs-default-skin%20.vjs-progress-holder%20.vjs-load-progress%2C.vjs-default-skin%20.vjs-progress-holder%20.vjs-load-progress%20div%2C.vjs-default-skin%20.vjs-progress-holder%20.vjs-play-progress%7Bposition%3Aabsolute%3Bdisplay%3Ablock%3Bheight%3A100%25%3Bmargin%3A0%3Bpadding%3A0%3Bwidth%3A0%3Bleft%3A0%3Btop%3A0%7D.vjs-default-skin%20.vjs-play-progress%7Bbackground%3A%2366a8cc%20url%28data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR%2FQJ%2FUb%2F%2F04%2Bw7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC%29%20-50%25%200%20repeat%7D.vjs-default-skin%20.vjs-load-progress%7Bbackground%3A%23646464%3Bbackground%3Argba%28255%2C255%2C255%2C.2%29%7D.vjs-default-skin%20.vjs-load-progress%20div%7Bbackground%3A%23787878%3Bbackground%3Argba%28255%2C255%2C255%2C.1%29%7D.vjs-default-skin%20.vjs-seek-handle%7Bwidth%3A1.5em%3Bheight%3A100%25%7D.vjs-default-skin%20.vjs-seek-handle%3Abefore%7Bpadding-top%3A.1em%7D.vjs-default-skin.vjs-live%20.vjs-progress-control%2C.vjs-default-skin.vjs-live%20.vjs-time-controls%2C.vjs-default-skin.vjs-live%20.vjs-time-divider%7Bdisplay%3Anone%7D.vjs-default-skin.vjs-live%20.vjs-live-display%7Bdisplay%3Ablock%7D.vjs-default-skin%20.vjs-live-display%7Bdisplay%3Anone%3Bfont-size%3A1em%3Bline-height%3A3em%7D.vjs-default-skin%20.vjs-time-controls%7Bfont-size%3A1em%3Bline-height%3A3em%7D.vjs-default-skin%20.vjs-current-time%7Bfloat%3Aleft%7D.vjs-default-skin%20.vjs-duration%7Bfloat%3Aleft%7D.vjs-default-skin%20.vjs-remaining-time%7Bdisplay%3Anone%3Bfloat%3Aleft%7D.vjs-time-divider%7Bfloat%3Aleft%3Bline-height%3A3em%7D.vjs-default-skin%20.vjs-fullscreen-control%7Bwidth%3A3.8em%3Bcursor%3Apointer%3Bfloat%3Aright%7D.vjs-default-skin%20.vjs-fullscreen-control%3Abefore%7Bcontent%3A%22%5Ce000%22%7D.vjs-default-skin.vjs-fullscreen%20.vjs-fullscreen-control%3Abefore%7Bcontent%3A%22%5Ce00b%22%7D.vjs-default-skin%20.vjs-big-play-button%7Bleft%3A50%25%3Btop%3A50%25%3Bmargin%3A-1.3em%20auto%20auto%20-2em%3Bfont-size%3A3em%3Bdisplay%3Ablock%3Bz-index%3A2%3Bposition%3Aabsolute%3Bwidth%3A4em%3Bheight%3A2.6em%3Btext-align%3Acenter%3Bvertical-align%3Amiddle%3Bcursor%3Apointer%3Bopacity%3A1%3Bbackground-color%3A%2307141e%3Bbackground-color%3Argba%287%2C20%2C30%2C.7%29%3Bborder%3A.1em%20solid%20%233b4249%3B-webkit-border-radius%3A.8em%3B-moz-border-radius%3A.8em%3Bborder-radius%3A.8em%3B-webkit-box-shadow%3A0%200%201em%20rgba%28255%2C255%2C255%2C.25%29%3B-moz-box-shadow%3A0%200%201em%20rgba%28255%2C255%2C255%2C.25%29%3Bbox-shadow%3A0%200%201em%20rgba%28255%2C255%2C255%2C.25%29%3B-webkit-transition%3Aall%20.4s%3B-moz-transition%3Aall%20.4s%3B-o-transition%3Aall%20.4s%3Btransition%3Aall%20.4s%7D.vjs-default-skin.vjs-big-play-centered%20.vjs-big-play-button%7Bleft%3A50%25%3Bmargin-left%3A-2.1em%3Btop%3A50%25%3Bmargin-top%3A-1.4000000000000001em%7D.vjs-default-skin.vjs-controls-disabled%20.vjs-big-play-button%7Bdisplay%3Anone%7D.vjs-default-skin.vjs-has-started%20.vjs-big-play-button%7Bdisplay%3Anone%7D.vjs-default-skin.vjs-using-native-controls%20.vjs-big-play-button%7Bdisplay%3Anone%7D.vjs-default-skin%20.vjs-big-play-button%3Afocus%2C.vjs-default-skin%3Ahover%20.vjs-big-play-button%7Boutline%3A0%3Bborder-color%3A%23fff%3Bbackground-color%3A%23505050%3Bbackground-color%3Argba%2850%2C50%2C50%2C.75%29%3B-webkit-box-shadow%3A0%200%203em%20%23fff%3B-moz-box-shadow%3A0%200%203em%20%23fff%3Bbox-shadow%3A0%200%203em%20%23fff%3B-webkit-transition%3Aall%200s%3B-moz-transition%3Aall%200s%3B-o-transition%3Aall%200s%3Btransition%3Aall%200s%7D.vjs-default-skin%20.vjs-big-play-button%3Abefore%7Bcontent%3A%22%5Ce001%22%3Bfont-family%3AVideoJS%3Bline-height%3A2.6em%3Btext-shadow%3A.05em%20.05em%20.1em%20%23000%3Btext-align%3Acenter%3Bposition%3Aabsolute%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%7D.vjs-error%20.vjs-big-play-button%7Bdisplay%3Anone%7D.vjs-error-display%7Bdisplay%3Anone%7D.vjs-error%20.vjs-error-display%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%7D.vjs-error%20.vjs-error-display%3Abefore%7Bcontent%3A%27X%27%3Bfont-family%3AArial%3Bfont-size%3A4em%3Bcolor%3A%23666%3Bline-height%3A1%3Btext-shadow%3A.05em%20.05em%20.1em%20%23000%3Btext-align%3Acenter%3Bvertical-align%3Amiddle%3Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A50%25%3Bmargin-top%3A-.5em%3Bwidth%3A100%25%7D.vjs-error-display%20div%7Bposition%3Aabsolute%3Bbottom%3A1em%3Bright%3A0%3Bleft%3A0%3Bfont-size%3A1.4em%3Btext-align%3Acenter%3Bpadding%3A3px%3Bbackground%3A%23000%3Bbackground%3Argba%280%2C0%2C0%2C.5%29%7D.vjs-error-display%20a%2C.vjs-error-display%20a%3Avisited%7Bcolor%3A%23f4a460%7D.vjs-loading-spinner%7Bdisplay%3Anone%3Bposition%3Aabsolute%3Btop%3A50%25%3Bleft%3A50%25%3Bfont-size%3A4em%3Bline-height%3A1%3Bwidth%3A1em%3Bheight%3A1em%3Bmargin-left%3A-.5em%3Bmargin-top%3A-.5em%3Bopacity%3A.75%7D.vjs-seeking%20.vjs-loading-spinner%2C.vjs-waiting%20.vjs-loading-spinner%7Bdisplay%3Ablock%3B-webkit-animation%3Aspin%201.5s%20infinite%20linear%3B-moz-animation%3Aspin%201.5s%20infinite%20linear%3B-o-animation%3Aspin%201.5s%20infinite%20linear%3Banimation%3Aspin%201.5s%20infinite%20linear%7D.vjs-error%20.vjs-loading-spinner%7Bdisplay%3Anone%3B-webkit-animation%3Anone%3B-moz-animation%3Anone%3B-o-animation%3Anone%3Banimation%3Anone%7D.vjs-default-skin%20.vjs-loading-spinner%3Abefore%7Bcontent%3A%22%5Ce01e%22%3Bfont-family%3AVideoJS%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bwidth%3A1em%3Bheight%3A1em%3Btext-align%3Acenter%3Btext-shadow%3A0%200%20.1em%20%23000%7D%40-moz-keyframes%20spin%7B0%25%7B-moz-transform%3Arotate%280%29%7D100%25%7B-moz-transform%3Arotate%28359deg%29%7D%7D%40-webkit-keyframes%20spin%7B0%25%7B-webkit-transform%3Arotate%280%29%7D100%25%7B-webkit-transform%3Arotate%28359deg%29%7D%7D%40-o-keyframes%20spin%7B0%25%7B-o-transform%3Arotate%280%29%7D100%25%7B-o-transform%3Arotate%28359deg%29%7D%7D%40keyframes%20spin%7B0%25%7Btransform%3Arotate%280%29%7D100%25%7Btransform%3Arotate%28359deg%29%7D%7D.vjs-default-skin%20.vjs-menu-button%7Bfloat%3Aright%3Bcursor%3Apointer%7D.vjs-default-skin%20.vjs-menu%7Bdisplay%3Anone%3Bposition%3Aabsolute%3Bbottom%3A0%3Bleft%3A0%3Bwidth%3A0%3Bheight%3A0%3Bmargin-bottom%3A3em%3Bborder-left%3A2em%20solid%20transparent%3Bborder-right%3A2em%20solid%20transparent%3Bborder-top%3A1.55em%20solid%20%23000%3Bborder-top-color%3Argba%287%2C40%2C50%2C.5%29%7D.vjs-default-skin%20.vjs-menu-button%20.vjs-menu%20.vjs-menu-content%7Bdisplay%3Ablock%3Bpadding%3A0%3Bmargin%3A0%3Bposition%3Aabsolute%3Bwidth%3A10em%3Bbottom%3A1.5em%3Bmax-height%3A15em%3Boverflow%3Aauto%3Bleft%3A-5em%3Bbackground-color%3A%2307141e%3Bbackground-color%3Argba%287%2C20%2C30%2C.7%29%3B-webkit-box-shadow%3A-.2em%20-.2em%20.3em%20rgba%28255%2C255%2C255%2C.2%29%3B-moz-box-shadow%3A-.2em%20-.2em%20.3em%20rgba%28255%2C255%2C255%2C.2%29%3Bbox-shadow%3A-.2em%20-.2em%20.3em%20rgba%28255%2C255%2C255%2C.2%29%7D.vjs-default-skin%20.vjs-menu-button%3Ahover%20.vjs-menu%7Bdisplay%3Ablock%7D.vjs-default-skin%20.vjs-menu-button%20ul%20li%7Blist-style%3Anone%3Bmargin%3A0%3Bpadding%3A.3em%200%20.3em%200%3Bline-height%3A1.4em%3Bfont-size%3A1.2em%3Btext-align%3Acenter%3Btext-transform%3Alowercase%7D.vjs-default-skin%20.vjs-menu-button%20ul%20li.vjs-selected%7Bbackground-color%3A%23000%7D.vjs-default-skin%20.vjs-menu-button%20ul%20li.vjs-selected%3Afocus%2C.vjs-default-skin%20.vjs-menu-button%20ul%20li.vjs-selected%3Ahover%2C.vjs-default-skin%20.vjs-menu-button%20ul%20li%3Afocus%2C.vjs-default-skin%20.vjs-menu-button%20ul%20li%3Ahover%7Boutline%3A0%3Bcolor%3A%23111%3Bbackground-color%3A%23fff%3Bbackground-color%3Argba%28255%2C255%2C255%2C.75%29%3B-webkit-box-shadow%3A0%200%201em%20%23fff%3B-moz-box-shadow%3A0%200%201em%20%23fff%3Bbox-shadow%3A0%200%201em%20%23fff%7D.vjs-default-skin%20.vjs-menu-button%20ul%20li.vjs-menu-title%7Btext-align%3Acenter%3Btext-transform%3Auppercase%3Bfont-size%3A1em%3Bline-height%3A2em%3Bpadding%3A0%3Bmargin%3A0%200%20.3em%200%3Bfont-weight%3A700%3Bcursor%3Adefault%7D.vjs-default-skin%20.vjs-subtitles-button%3Abefore%7Bcontent%3A%22%5Ce00c%22%7D.vjs-default-skin%20.vjs-captions-button%3Abefore%7Bcontent%3A%22%5Ce008%22%7D.vjs-default-skin%20.vjs-chapters-button%3Abefore%7Bcontent%3A%22%5Ce00c%22%7D.vjs-default-skin%20.vjs-chapters-button.vjs-menu-button%20.vjs-menu%20.vjs-menu-content%7Bwidth%3A24em%3Bleft%3A-12em%7D.vjs-default-skin%20.vjs-captions-button%3Afocus%20.vjs-control-content%3Abefore%2C.vjs-default-skin%20.vjs-captions-button%3Ahover%20.vjs-control-content%3Abefore%7B-webkit-box-shadow%3A0%200%201em%20%23fff%3B-moz-box-shadow%3A0%200%201em%20%23fff%3Bbox-shadow%3A0%200%201em%20%23fff%7D.video-js-mb%7Bbackground-color%3A%23000%3Bposition%3Arelative%3Bpadding%3A0%3Bfont-size%3A10px%3Bvertical-align%3Amiddle%3Bfont-weight%3A400%3Bfont-style%3Anormal%3Bfont-family%3AArial%2Csans-serif%3B-webkit-user-select%3Anone%3B-moz-user-select%3Anone%3B-ms-user-select%3Anone%3Buser-select%3Anone%7D.video-js-mb%20.vjs-tech-mb%7Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%7D.video-js-mb%3A-moz-full-screen%7Bposition%3Aabsolute%7Dbody.vjs-full-window%7Bpadding%3A0%3Bmargin%3A0%3Bheight%3A100%25%3Boverflow-y%3Aauto%7D.video-js-mb.vjs-fullscreen%7Bposition%3Afixed%3Boverflow%3Ahidden%3Bz-index%3A1000%3Bleft%3A0%3Btop%3A0%3Bbottom%3A0%3Bright%3A0%3Bwidth%3A100%25%21important%3Bheight%3A100%25%21important%7D.video-js-mb%3A-webkit-full-screen%7Bwidth%3A100%25%21important%3Bheight%3A100%25%21important%7D.video-js-mb.vjs-fullscreen.vjs-user-inactive%7Bcursor%3Anone%7D.vjs-poster%7Bbackground-repeat%3Ano-repeat%3Bbackground-position%3A50%25%2050%25%3Bbackground-size%3Acontain%3Bcursor%3Apointer%3Bmargin%3A0%3Bpadding%3A0%3Bposition%3Aabsolute%3Btop%3A0%3Bright%3A0%3Bbottom%3A0%3Bleft%3A0%7D.vjs-poster%20img%7Bdisplay%3Ablock%3Bmargin%3A0%20auto%3Bmax-height%3A100%25%3Bpadding%3A0%3Bwidth%3A100%25%7D.video-js-mb.vjs-using-native-controls%20.vjs-poster%7Bdisplay%3Anone%7D.video-js-mb%20.vjs-text-track-display%7Btext-align%3Acenter%3Bposition%3Aabsolute%3Bbottom%3A4em%3Bleft%3A1em%3Bright%3A1em%7D.video-js-mb.vjs-user-inactive.vjs-playing%20.vjs-text-track-display%7Bbottom%3A1em%7D.video-js-mb%20.vjs-text-track%7Bdisplay%3Anone%3Bfont-size%3A1.4em%3Btext-align%3Acenter%3Bmargin-bottom%3A.1em%3Bbackground-color%3A%23000%3Bbackground-color%3Argba%280%2C0%2C0%2C.5%29%7D.video-js-mb%20.vjs-subtitles%7Bcolor%3A%23fff%7D.video-js-mb%20.vjs-captions%7Bcolor%3A%23fc6%7D.vjs-tt-cue%7Bdisplay%3Ablock%7D.vjs-default-skin%20.vjs-hidden%7Bdisplay%3Anone%7D.vjs-lock-showing%7Bdisplay%3Ablock%21important%3Bopacity%3A1%3Bvisibility%3Avisible%7D.vjs-no-js%7Bpadding%3A20px%3Bcolor%3A%23ccc%3Bbackground-color%3A%23333%3Bfont-size%3A18px%3Bfont-family%3AArial%2Csans-serif%3Btext-align%3Acenter%3Bwidth%3A300px%3Bheight%3A150px%3Bmargin%3A0%20auto%7D.vjs-no-js%20a%2C.vjs-no-js%20a%3Avisited%7Bcolor%3A%23f4a460%7D.vast-skip-button%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Btop%3A5px%3Bright%3A0%3Bwidth%3Aauto%3Bbackground-color%3A%23000%3Bcolor%3A%23aaa%3Bfont-size%3A12px%3Bfont-style%3Aitalic%3Bline-height%3A12px%3Bpadding%3A10px%3Bz-index%3A2%7D.vast-skip-button.enabled%7Bcursor%3Apointer%3Bcolor%3A%23fff%7D.vast-skip-button.enabled%3Ahover%7Bcursor%3Apointer%3Bbackground%3A%23333%7D.vast-blocker%7Bdisplay%3Ablock%3Bposition%3Aabsolute%3Bmargin%3A0%3Bpadding%3A0%3Bheight%3A100%25%3Bwidth%3A100%25%3Btop%3A0%3Bleft%3A0%3Bright%3A0%3Bbottom%3A0%7D.vjs-ad-playing%20.vjs-progress-control%7Bpointer-events%3Anone%7D.vjs-ad-playing%20.vjs-play-progress%7Bbackground-color%3A%23ffe400%7D.vjs-ad-loading%20.vjs-loading-spinner%7Bdisplay%3Ablock%7D.ima-ad-container-mb%7Btop%3A0%3Bposition%3Aabsolute%3Bdisplay%3Ablock%7D.video-js-mb.vjs-user-inactive.vjs-playing%20.bumpable-ima-ad-container%7Bmargin-top%3A0%7D.video-js-mb.vjs-user-active.vjs-playing%20.bumpable-ima-ad-container%7Bmargin-top%3A-40px%7D%23ima-controls-div%7Bbottom%3A0%3Bheight%3A37px%3Bposition%3Aabsolute%3Bdisplay%3Anone%3Bopacity%3A1%3Bbackground-color%3Argba%287%2C20%2C30%2C.7%29%3Bbackground%3A-moz-linear-gradient%28bottom%2Crgba%287%2C20%2C30%2C.7%29%200%2Crgba%287%2C20%2C30%2C0%29%20100%25%29%3Bbackground%3A-webkit-gradient%28linear%2Cleft%20bottom%2Cleft%20top%2Ccolor-stop%280%2Crgba%287%2C20%2C30%2C.7%29%29%2Ccolor-stop%28100%25%2Crgba%287%2C20%2C30%2C0%29%29%29%3Bbackground%3A-webkit-linear-gradient%28bottom%2Crgba%287%2C20%2C30%2C.7%29%200%2Crgba%287%2C20%2C30%2C0%29%20100%25%29%3Bbackground%3A-o-linear-gradient%28bottom%2Crgba%287%2C20%2C30%2C.7%29%200%2Crgba%287%2C20%2C30%2C0%29%20100%25%29%3Bbackground%3A-ms-linear-gradient%28bottom%2Crgba%287%2C20%2C30%2C.7%29%200%2Crgba%287%2C20%2C30%2C0%29%20100%25%29%3Bbackground%3Alinear-gradient%28to%20top%2Crgba%287%2C20%2C30%2C.7%29%200%2Crgba%287%2C20%2C30%2C0%29%20100%25%29%7D%23ima-countdown-div%7Bheight%3A11px%3Bcolor%3A%23fff%3Btext-shadow%3A0%200%20.2em%20%23000%3Bline-height%3A100%25%7D%23ima-seek-bar-div%7Btop%3A12px%3Bheight%3A3px%3Bposition%3Aabsolute%3Bbackground%3Argba%28255%2C255%2C255%2C.4%29%7D%23ima-progress-div%7Bwidth%3A0%3Bheight%3A3px%3Bbackground-color%3A%23ecc546%7D%23ima-countdown-div%7Bheight%3A10px%7D%23ima-fullscreen-div%2C%23ima-mute-div%2C%23ima-play-pause-div%7Bwidth%3A35px%3Bheight%3A20px%3Btop%3A11px%3Bleft%3A0%3Bposition%3Aabsolute%3Bcolor%3A%23ccc%3Bfont-family%3AVideoJS%3Bfont-size%3A1.5em%3Bline-height%3A2%3Btext-align%3Acenter%7D%23ima-mute-div%7Bleft%3Aauto%3Bright%3A35px%7D%23ima-fullscreen-div%7Bleft%3Aauto%3Bright%3A0%7D.ima-playing%3Abefore%7Bcontent%3A%22%5Ce002%22%7D.ima-paused%3Abefore%7Bcontent%3A%22%5Ce001%22%7D.ima-paused%3Ahover%3Abefore%2C.ima-playing%3Ahover%3Abefore%7Btext-shadow%3A0%200%201em%20%23fff%7D.ima-non-muted%3Abefore%7Bcontent%3A%22%5Ce006%22%7D.ima-muted%3Abefore%7Bcontent%3A%22%5Ce003%22%7D.ima-muted%3Ahover%3Abefore%2C.ima-non-muted%3Ahover%3Abefore%7Btext-shadow%3A0%200%201em%20%23fff%7D.ima-non-fullscreen%3Abefore%7Bcontent%3A%22%5Ce000%22%7D.ima-fullscreen%3Abefore%7Bcontent%3A%22%5Ce00b%22%7D.ima-fullscreen%3Ahover%3Abefore%2C.ima-non-fullscreen%3Ahover%3Abefore%7Btext-shadow%3A0%200%201em%20%23fff%7D%23ima-ad-container-mb%20iframe%7Bmax-width%3A100%25%7D";

                if (window.Mb === undefined) {
                    window.fireEvent('loadmb');
                    var sv = document.createElement('script');
                    sv.type ="text/javascript";
                    sv.src = "https://static.mediabong.com/scripts/mb.full.1903061.js";
                    sv.async = true;
                    if(sv.addEventListener) {
                            sv.addEventListener("load",function() { window.Mb.user_id = "f623f5a35bae974f"; window.Mb.boot("mb_video_6d3e7def70ef4750ea51af8cf3588cb9",'1611151'); window.fireEvent('boot1'); }, false);
                    }
                    else if(sv.readyState) {
                        sv.onreadystatechange = function() {
                            if(this.readyState === "loaded" || this.readyState === "complete") {
                                                Mb.user_id = "f623f5a35bae974f";
                                Mb.boot("mb_video_6d3e7def70ef4750ea51af8cf3588cb9",'1611151');
                                window.fireEvent('boot2');
                            }
                        };
                    }

                    document.getElementsByTagName("head")[0].appendChild(sv);
                    if(typeof window.onMediabongExternalPlayerReady == 'function') {
                        window.onMediabongExternalPlayerReady(["https%3A%2F%2Fplayer.mediabong.com%2Fprint.php%3Fsid%3D11236732%26bloc%3D0%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D,https%3A%2F%2Fplayer.mediabong.com%2Fplay.php%3Fsid%3D11236732%26bloc%3D0%26url%3D%5BURL%5D%26rnd%3D%5BRND%5D%26luid%3D%5Bluid%5D"]);
                    }
                } else {
                    Mb.user_id = "f623f5a35bae974f";
                    window.fireEvent('boot3');
                    Mb.boot("mb_video_6d3e7def70ef4750ea51af8cf3588cb9",'1611151');
                }

                window.mb_skipin = "Skip in";
                window.mb_skip = "Skip";        };

        cont.loadPlayer(w, w.document);
        
        if(rules['reload_on_changestate'] == 1) {

            (function(history){
                if (typeof history.onpushstate != "function") {
                    var pushState = history.pushState;
                    history.pushState = function(state) {
                        if (typeof history.onpushstate == "function")
                            history.onpushstate({state: state});
                        return pushState.apply(history, arguments);
                    }
                }
            })(window.history);

            var onStateChangeFunction = function() {
                            var loaderUrl = "http://player.mediabong.net/syncroll/1406/loader.js?rnd=" + new Date().getTime();
                            if (typeof Mb !== "undefined")
                    Mb.stop();
                var sc = document.createElement('script');
                sc.src = loaderUrl;
                sc.type = 'text/javascript';
                sc.async = true;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(sc, s);
            };

            history.onpushstate = onStateChangeFunction;
            window.onpopstate = onStateChangeFunction;
        }

    } else {
        // Record container error
        var errorType = (matched === -1)?"test":"paragraph";
        var sc = cont.createElement("script");
        sc.type = "text/javascript";
        sc.async = true;
        sc.src = 'https://player.mediabong.com/t/conterror.php?lt=0&cid=1406&rnd='+Math.random()+'&type='+errorType+'&url='+encodeURIComponent(window.document.location.href);
        var node = cont.getElementsByTagName('head')[0];
        node.appendChild(sc);
    }
		return matched;
};

var matchContent = function(setup, cont,w) {
    if(setup['disable_test'] != "") {
        var tmp = setup['disable_test'].split(",");
        for(matchIdx = 0; matchIdx < tmp.length; matchIdx++) {
            console.log("MB Disable - Trying "+tmp[matchIdx]);
            if(cont.querySelectorAll(tmp[matchIdx]).length > 0)
                return -1;
        }
    }
    if(setup['stay_in_iframe'] == 2) {
        var tmpContainer = window.frameElement;
        return insertSlots(tmpContainer, setup, cont);
    } else {
        for(var matchKey in setup['articleDetect']) {
            if (!isNaN(matchKey)) {
                var _duration = 0;
                if(typeof w.mb_script_started_ms != "undefined") {
                    var now = new Date().getTime();
                    _duration = now - w.mb_script_started_ms;
                }
                console.log("("+_duration+" ms) MB - Trying "+setup['articleDetect'][matchKey]);
                var tmpContainer = cont.querySelectorAll(setup['articleDetect'][matchKey]);
                if(tmpContainer.length >= setup['paragraphCount'] && tmpContainer.length > 0) {
                    return insertSlots(tmpContainer, setup, cont);
                            break;
                }
            }
        }
        return 0;
    }
};

var insertSlots = function(parts, rules, cont) {
    var c1 = cont.createElement("div"), c1_1 = cont.createElement("div"), c2 = cont.createElement("div"), c2_1 = cont.createElement("div");
    if(rules['custom_css_first_player'] != "")
        c1_1.style.cssText = rules['custom_css_first_player'];
    if(rules['custom_css_second_player'] != "")
        c2_1.style.cssText = rules['custom_css_second_player'];

    c1.id = "mb_video_syncad";
    c1.style.display = 'block';
    c1.className = rules['syncroll_type'];
    c2.id = "mb_container";

    if(rules['player_100p'] == 1) {
        c1_1.style.width = "100%";
        c2.style.width = "100%";
    } else {
        c1_1.style.width = "75%";
        c1_1.style.marginLeft = "auto";
        c1_1.style.marginRight = "auto";
        c2.style.width = "75%";
        c2.style.marginLeft = "auto";
        c2.style.marginRight = "auto";
    }

    if(rules['maxWidth'] > 0) {
        c1_1.style.maxWidth = rules['maxWidth']+"px";
        c2.style.maxWidth = rules['maxWidth']+"px";
        if (rules['inreadAlignment'] == "right") {
            c1_1.style.marginLeft = "auto";
            c2.style.marginLeft = "auto";
        } else if (rules['inreadAlignment'] == "center") {
            c1_1.style.marginLeft = "auto";
            c1_1.style.marginRight = "auto";
            c2.style.marginLeft = "auto";
            c2.style.marginRight = "auto";
        }
    }

    c2.style.marginTop = "0px";
    c2.style.display = 'block';
    c1.style.marginTop = "0px";
    c1_1.style.marginTop = "0px";
    c1_1.style.display = 'block';
    c1_1.style.boxSizing = "content-box";


    c1_1.appendChild(c1);
    c2_1.appendChild(c2);

    if (rules['appendConfig'] == 1)
    {
        if (typeof parts[0] === "undefined")
            return 0;
        parts[0].appendChild(c1_1);
        parts[0].appendChild(c2_1);
        // Check if container are really added to the dom
        var cont1 = cont.getElementById("mb_video_syncad"), cont2 = cont.getElementById("mb_container");
        if(cont1 == null || cont2 == null) {
            return 0;
        } else {
            return 1;
        }
    }
    if (rules['stay_in_iframe'] == 2)
    {
        if (typeof parts === "undefined" || parts == null)
            return 0;
        parts.parentNode.insertBefore(c1_1, parts);
        parts.parentNode.insertBefore(c2_1, parts);
        // Check if container are really added to the dom
        var cont1 = cont.getElementById("mb_video_syncad"), cont2 = cont.getElementById("mb_container");
        if(cont1 == null || cont2 == null) {
            return 0;
        } else {
            return 1;
        }
    }

    if (rules['paragraphPosition'][0] == "middle")
        rules['paragraphPosition'][0] = Math.floor(parts.length / 2);

    if (typeof parts[rules['paragraphPosition'][0]] === "undefined" && rules['inreadAtEnd'] == 1)
        rules['paragraphPosition'][0] = "end";

    if (typeof parts[rules['paragraphPosition'][1]] === "undefined")
        rules['paragraphPosition'][1] = "end";


    if (typeof parts[rules['paragraphPosition'][0]] !== "undefined" || (rules['paragraphPosition'][0] == "end" && typeof parts[parts.length - 1] !== "undefined"))
    {

        if(rules['paragraphPosition'][0] == "end")
            parts[parts.length - 1].parentNode.appendChild(c1_1);
        else
            parts[rules['paragraphPosition'][0]].parentNode.insertBefore(c1_1, parts[rules['paragraphPosition'][0]]);
        if(rules['paragraphPosition'][1] == "end")
            parts[parts.length - 1].parentNode.appendChild(c2_1);
        else if (typeof parts[rules['paragraphPosition'][1]] !== "undefined")
            parts[rules['paragraphPosition'][1]].parentNode.insertBefore(c2_1, parts[rules['paragraphPosition'][1]]);

        // Check if container are really added to the dom
        var cont1 = cont.getElementById("mb_video_syncad"), cont2 = cont.getElementById("mb_container");
        if(cont1 == null || cont2 == null) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return 0;
    }

};

var hasThirdPartyPlayers = function(document) {
    // Daily, Youtube, INA
    iframes = document.getElementsByTagName("iframe");

    for(i in iframes) {
        if(iframes[i].src != null) {
            if(iframes[i].src.substr(0,29) == "http://www.youtube.com/embed/" || iframes[i].src.substr(0,30) == "https://www.youtube.com/embed/")
                return true;
            else if(iframes[i].src.substr(0,33) == "http://www.dailymotion.com/embed/" || iframes[i].src.substr(0,34) == "https://www.dailymotion.com/embed/")
                return true;
            else if(iframes[i].src.substr(0,30) == "http://www.ina.fr/video/embed/")
                return true;
        }
    }

    // JWPlayer
    scripts = document.getElementsByTagName("script");

    for(i in scripts) {
        if(scripts[i].src != null) {
            if(scripts[i].src.substr(0,30) == "http://content.jwplatform.com/" || scripts[i].src.substr(0,31) == "https://content.jwplatform.com/")
                return true;
        }
    }

    return false;
}

var busterHandle = function(a, frameBuster) {
    try {
        a.document;
    } catch(e) {
        if (frameBuster) {
            var iframe = document.createElement("iframe");
            iframe.src = frameBuster;
            document.body.appendChild(iframe);
        }
        else {
            (function() {
                var url = (window.location != window.parent.location) ? document.referrer : document.location;
                var sc = document.createElement("img");
                sc.src = "//player.mediabong.net/t/ifb.php?pid=1406&domain="+encodeURIComponent(url);
                sc.width = 1;
                sc.height = 1;
                document.body.appendChild(sc);
            }(document,'script'));
            throw new Error("Syncroll can't bust out of iFrame.");
        }
        return false;
    }
    return true;
}

var startDfpLoader = function(setupRules) {
    var frameBuster = "";

    for(idx = 0; idx < setupRules.length; idx++) {
        var rules = setupRules[idx];
        if(rules['stay_in_iframe'] == 0 || rules['stay_in_iframe'] == 2) {
            // Breaking adserver's iframe
            var a = (window.top||window.parent||window), startLoad = true;
            if(rules['stay_in_iframe'] == 2) {
                var iframeContainer = window.frameElement;
                if (iframeContainer == null)
                    throw new Error("The syncroll is not loaded in an iframe.");
            }
            if (!busterHandle(a, frameBuster))
                break;
            if(rules['stay_in_iframe'] == 2) {
                a.mb_iframe_height = iframeContainer.height;
                a.mb_iframe = iframeContainer;
                iframeContainer.height = "1";
            }
            if (a.document.getElementById("mb_video_syncad") != null && rules['reload_on_changestate'] == 0) {
                continue;
            }
            if (rules['loadDetectScript'] == 1) {
                var hasPlayers = hasThirdPartyPlayers(a.document);
                if(hasPlayers)
                    startLoad = false;
            }
            a.mb_script_started_ms = new Date().getTime();
            _loadCookies(a);
            if(startLoad) {
                if(_srLoader(a, rules) === 1)
                    break;
            }
        } else if(rules['stay_in_iframe'] == 1) {
            var a = window, startLoad = true;
            a.mb_script_started_ms = new Date().getTime();
            _loadCookies(a);
            // Resize iframe (height)
            var currentContainer = window.frameElement;
            if(currentContainer != null && typeof currentContainer.id != "undefined") {
                var topWindow = window.top||window.parent||window;
                topWindow.document.getElementById(currentContainer.id).style.height = topWindow.document.getElementById(currentContainer.id).offsetWidth*0.5625+"px";
            }

            if (rules['loadDetectScript'] == 1) {
                var hasPlayers = hasThirdPartyPlayers(a.document);
                if(hasPlayers)
                    startLoad = false;
            }
            if(startLoad) {
                if(_srLoader(a, rules) === 1)
                    break;
            }
        }
    }
}

if (window.document.readyState === "interactive" || window.document.readyState === "complete")
    startDfpLoader(setupRules);
else
{
    if (typeof window.addEventListener != "undefined") {
            window.addEventListener("load", function() { startDfpLoader(setupRules); }, false);
    } else if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onload", function() { startDfpLoader(setupRules); });
    }
}
