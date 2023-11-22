// Affiche le sous-menu quand on clique sur le menu...

function affiche_sousmenu(num)
{
  // On remet tout � z�ro
   for (i=1;i<6;i++) document.getElementById("sousmenu_" + i).style.display = "none";
   
 // On affiche ce qui nous int�resse...  
   
   document.getElementById("sousmenu_" + num).style.display = "flex";
	
}

// Ouvre le menu mobile

function ouvremenumobile()
{
	scrollLent();
	document.getElementById("iconeouvremenu").style.display="none";
	document.getElementById("iconefermemenu").style.display="flex";
	document.getElementById("menumobile").style.display="block";
}

function fermemenumobile()
{
	document.getElementById("iconeouvremenu").style.display="flex";
	document.getElementById("iconefermemenu").style.display="none";
	document.getElementById("menumobile").style.display="none";
}

// Affiche ou ferme le sousmenumobile

function affiche_sousmenumobile(num)
{
	sousmenu=document.getElementById("sousmenumobile"+num);
	sousimageferme=document.getElementById("sousmenumobileimageferme"+num);
	sousimageouvert=document.getElementById("sousmenumobileimageouvert"+num);
	if (sousmenu.style.display!="block")
	{
		// On doit remonter tout en haut...
		// Le sous menu n'�tait pas affich�, on l'affiche
		sousmenu.style.display="block";
		sousimageouvert.style.display="inline";
		sousimageferme.style.display="none";
	}
	else
	{
		sousmenu.style.display="none";
		sousimageouvert.style.display="none";
		sousimageferme.style.display="inline";		
	}
}

// Remonte la page doucement...

function scrollLent()
{
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     scrollBy(0, -scrollTop);
}

// Ouvre et ferme la fen�tre de recherche mobile

function ouvrerecherchemobile()
{
	scrollLent();
	document.getElementById("iconeouvrerecherche").style.display="none";
	document.getElementById("iconefermerecherche").style.display="flex";
	document.getElementById("recherchemobile").style.display="block";
}

function fermerecherchemobile()
{
	document.getElementById("iconeouvrerecherche").style.display="flex";
	document.getElementById("iconefermerecherche").style.display="none";
	document.getElementById("recherchemobile").style.display="none";
}

// Le spoiler "de base"

function showSpoiler(obj)
{
	var inner = obj.parentNode.getElementsByTagName("div")[0];
    	if (inner.style.display == "none")
        	inner.style.display = "";
    	else
        	inner.style.display = "none";
}

// Le spoiler sp�cifique aux exercices

function showAll(idinner,idimage)
{
      var inner = document.getElementById(idinner);  // On affiche, ou pas, le contenu
      var image = document.getElementById(idimage);
      if (inner.style.display == "none")
      {
          inner.style.display = "";
          image.setAttribute("src","http://www.bibmath.net/lib/bas.png");
      }
      else
      {
          inner.style.display = "none";
          image.setAttribute("src","http://www.bibmath.net/lib/droite.png");          
      }
}

// Ouvre le menu forum en mode responsive
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function ouvremenuforum() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 