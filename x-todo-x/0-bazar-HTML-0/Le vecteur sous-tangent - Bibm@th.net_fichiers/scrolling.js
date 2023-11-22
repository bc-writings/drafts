// Essaie de fixer la div de menu lors d'un scrolling...
var afixer = document.getElementById("menuetsousmenu");
var adecaler = document.getElementById("main");
var position=afixer.offsetTop;


function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	if (currentScroll>=position)
	{
		afixer.className = "fixed";
		adecaler.className = "decale";
	}
	else
	{
		afixer.className="";
		adecaler.className="";
	}
}

addEventListener("scroll", scrolled, false);
/*
<script>
var positionElementInPage = $('#menu').offset().top;
$( window ).resize(function() {
    positionElementInPage = $('#menu').offset().top;
});
$(window).scroll(
    function() {
        if ($(window).scrollTop() > positionElementInPage) {
            // fixed
            $('#menu').addClass("fixedTop");
        } else {
            // unfixed
            $('#menu').removeClass("fixedTop");
        }
    }
 
  );
</script>*/
