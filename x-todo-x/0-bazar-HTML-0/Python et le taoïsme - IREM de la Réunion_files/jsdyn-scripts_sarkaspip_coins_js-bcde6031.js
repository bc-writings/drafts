/* #PRODUIRE{fond=scripts/sarkaspip_coins.js}
   md5:0b73d063cc2d6d6d3387dbadd5a6c31b */


$(document).ready(function(){
	// Traitement du bandeau
	modele = 0;
	if (modele > 0) {
		// Position des arrondis
		forme_h = " top";
		forme_b = "";
		if (modele > 1) {forme_b = " bottom";}
		// Taille des arrondis
		var taille = " 10px";
		// Selecteurs auxquels appliquer les arrondis
		haut_existe = 1;
		bas_existe = 1;
		chemin_existe = 1;
		if (haut_existe) 
			{selecteur_h = "div.bandeau_haut";}
		else
			{selecteur_h = "div.bandeau_bas";}
		if ((modele == 2) || (modele == 4)) {
			if (bas_existe) 
				{selecteur_b = "div.bandeau_bas";}
			else
				{selecteur_b = "div.bandeau_haut";}
		}
		else {selecteur_b = "";}
		// Arrondir le bandeau haut et/ou bas
		$(selecteur_h).corner("round" + forme_h + taille);
		if (selecteur_b) {$(selecteur_b).corner("round" + forme_b + taille);}
		// Arrondir le chemin si necessaire
		if (chemin_existe) {
			if (modele == 3) {$('div.bandeau_chemin').corner("round bottom" + taille);}
			if (modele == 4) {$('div.bandeau_chemin').corner("round" + taille);}
		}
	}

	// Traitement du formulaire de recherche
	modele = 0;
	if (modele > 0) {
		var taille = " 10px";
		$("input[name='recherche']").corner("round" + taille);
	}

	// Traitement des noisettes des colonnes
	modele = 1;
	if (modele > 0) {
		var taille = " 10px";
		var forme_t = "";
		var forme_c = "";
		if (modele < 3) {forme_t = " top";}
		if (modele == 3) {forme_c = " top";}
		// Arrondir le titre
		$(".noisette h1.intitule, .noisette h1 a.intitule").corner("round" + forme_t + taille);
		// Arrondir le contenu
		if (modele > 1) {
			$(".noisette div.contenu").corner("round" + forme_c + taille);
			$(".noisette div.contenu h2.titre_bloc, .noisette div.contenu h2 a.titre_bloc").corner("round top" + taille);
		}
	}

	// Traitement des menus formulaires et pages speciales
	modele = 0;
	if (modele > 0) {
		forme = "";
		if (modele == 1) {forme = " top";}
		var taille_cadre = " 10px";
		// Arrondir le cadre
		$('div.noisette.nav2').corner("round" + forme + taille_cadre);
	}

	// Traitement de l'edito et de la une
	modele = 0;
	if (modele > 0) {
		var taille = " 10px";
		$("div.article#edito, div.article#une").corner("round" + taille);
	}

	// Traitement des blocs de type extrait
	modele = 0;
	if (modele > 0) {
		var taille = " 10px";
		$("div.extrait").corner("round bl" + taille);
	}

	// Traitement du pied
	modele = 0;
	if (modele > 0) {
		forme = "";
		if (modele == 1) {forme = " bottom";}
		var taille = " 10px";
		$('div.pied_bas').corner("round" + forme + taille);
	}
});
