var msq_cookie_sync = {
	gdpr_applies: true,
	gdpr_consent: false,
	call: function() {
		var msq_iframe = document.createElement('iframe');
		msq_iframe.setAttribute('style', 'display: none');
		msq_iframe.setAttribute('src', 'https://pbs-front.mediasquare.fr/cookie_sync?type=iframe&origin=publisher&gdpr='+(msq_cookie_sync.gdpr_applies ? '1': '0')+(msq_cookie_sync.gdpr_consent ? '&gdpr_consent='+msq_cookie_sync.gdpr_consent: ''));
		document.body.appendChild(msq_iframe);
	},
	recall: function(count) {
		if (count < 25)
			setTimeout(
				function() {msq_cookie_sync.check(count+1);},
				250
			);
		else
			console.log('mediasque cmp detection timeout');
	},
	check: function(count) {
		tmp_window = window;
		try {tmp_window = window.top;} 
		catch(e) {}
		try {
			if (tmp_window.__tcfapi) { // tcf v2
				tmp_window.__tcfapi('getTCData', 2, function(tcdata, success) {
					if (success && !(tcdata.gdprApplies && tcdata.tcString == "")) {
						msq_cookie_sync.gdpr_applies = tcdata.gdprApplies;
						msq_cookie_sync.gdpr_consent = tcdata.tcString;
						msq_cookie_sync.call();
					}
					else
						msq_cookie_sync.recall(count);
				});
			}
			else if (tmp_window.__cmp) { // tcf v1
				tmp_window.__cmp('getConsentData', null, function(result) {
					msq_cookie_sync.gdpr_applies = result.gdprApplies;
					msq_cookie_sync.gdpr_consent = result.consentData;
					msq_cookie_sync.call();
				});
			}
			else
				msq_cookie_sync.recall(count);
		}
		catch(e) {
			console.log('failed to sync with mediasquare');
		}
	},
}
msq_cookie_sync.check(0);

