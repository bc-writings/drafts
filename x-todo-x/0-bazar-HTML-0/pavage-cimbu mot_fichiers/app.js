$(function(){function e(){t&&clearTimeout(t),$("#content").delay(100).height("auto"),$("#content").delay(100).height($("#content").closest(".container").height()),t=setTimeout(e,500)}function s(e){$(e).toggleClass("active");var s=$("#slider-news li.active");$("#slider-news .disabled").removeClass("disabled"),s.is(":first-child")&&$("#slider-news .previous").addClass("disabled"),s.is(":last-child")&&$("#slider-news .next").addClass("disabled")}cookiesplease.init({message:"Notre site utilise des cookies. Certains cookies sont nécessaires au fonctionnement du site, tandis que d'autres nous aident à améliorer l'expérience utilisateur. En utilisant le site, vous acceptez l'utilisation des cookies. Pour en apprendre plus au sujet des cookies et pour savoir comment les désactiver, <a href=\"/?page=cookies\">consultez notre déclaration de confidentialité</a>.",buttonAcceptText:"Fermer"}),$(document).on("click",".menu-mobile-toggle",function(){$("#menu").toggleClass("active")}),$(document).on("click","#menu li.expendable",function(){$("#menu li.expendable").not(this).removeClass("active"),$(this).toggleClass("active")});var t=null;$("#content").length>0&&e(),$("#slides").slides({preload:!0,preloadImage:"#CHEMIN{img/loading.gif}",generatePagination:!1,play:5e3,pause:0,hoverPause:!0,start:1}),$("#slider-news").on("click",".previous:not(.disabled)",function(e){var t=$("#slider-news li.active");t=t.add(t.prev("li")),s(t)}),$("#slider-news").on("click",".next:not(.disabled)",function(e){var t=$("#slider-news li.active");t=t.add(t.next("li")),s(t)}),s($("#slider-news li").first()),$("video,audio").mediaelementplayer({features:["playpause","progress","current","duration"]}),$("#register_newsletter").submit(function(e){e.preventDefault(),$.ajax({url:"/squelettes-custom/newsletter_abonnement.php",dataType:"json",data:{email:$("#newsletter_email").val()}}).always(function(e){var s='<span class="error">Une erreur est survenue.</span>';e.success?s='<span class="success">'+e.success+"</span>":e.error&&(s='<span class="error">'+e.error+"</span>"),$("#register_newsletter").css({padding:"10px",width:"100%"}).html(s)})})});