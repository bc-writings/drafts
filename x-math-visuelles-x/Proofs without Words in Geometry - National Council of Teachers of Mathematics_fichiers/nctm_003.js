﻿(function(){'use strict';$(".btn-login").click(function(e){$('.login-loading').show();});var prm=Sys.WebForms.PageRequestManager.getInstance();prm.add_endRequest(function(){$(".btn-login").click(function(e){$('.login-loading').show();});});})();