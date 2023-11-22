public class DiffusionSequentielle{  
          
    static int n;                      //Nombre d'éléments du tableau représentant la barre
    static float[] barre;              //Le tableau représentant l'état de la barre à un moment donnée
    static float[] nouvelEtat;         //Le tableau représentant l'état de la barre à l'itération suivante

    public static boolean stable(float[] ancien,float[] nouveau){
        //renvoie un booléen indiquant si la diffusion est terminée (ie si barre = nouvelEtat)
        for(int i = 0; i<ancien.length; i++){
            if(ancien[i]!=nouveau[i])
                return false;
        }
        return true;
    }
    
    public static void recopie(float[] ancien,float[] nouveau){
        //copie les valeurs de 'nouveau' dans 'ancien' pour  préparer la prochaine itération
        for(int i = 0; i<ancien.length; i++){
            ancien[i] = nouveau[i];
        }
    }

    public static void diffuse(float[] ancien,float[] nouveau){
        //Calcule les valeurs du tableau 'nouveau' représentant l'évolution de 'ancien' lors d'une itération de diffusion
        int taille = ancien.length;
        nouveau[0] = (ancien[0]+ancien[1])/2;
        for(int i = 1; i<taille-1; i++){
            nouveau[i] = (ancien[i-1]+ancien[i]+ancien[i+1])/3;
        }
        nouveau[taille-1] = (ancien[taille-2]+ancien[taille-1])/2;
        }

    public static void main(String[] args){

        n = 100;                        //taille du tableau considéré
        barre = new float[n];
        nouvelEtat = new float[n];
        
        for (int i=0;i<n;i++){          //initialisation des tableaux
            barre[i] = 0;               //0 0 0 0 ... pour 'barre'
        }
        nouvelEtat[0] = 1000;           //1000 20 20 20 ... pour 'nouvelEtat'
        for (int i=1;i<n;i++){          //les valeurs de 'nouvelEtat' seront
            nouvelEtat[i] = 20;         //copiées dans 'barre' pour la 1ere itération
        }        
        
        System.out.println("Valeur de n: "+n);
       	long debut = System.currentTimeMillis();
       
                                                //on itère jusqu'à ce qu'il n'y ait plus d'évolution
        while (!stable(barre, nouvelEtat)){
            recopie(barre, nouvelEtat);         //On part de l'état précédent
            diffuse(barre, nouvelEtat);         //et on détermine le nouveau tableau
        }
       	long fin = System.currentTimeMillis();
        
        /*
        System.out.print(nouvelEtat[0]);
        for (int i=1;i<n; i++){
            System.out.print(", "+nouvelEtat[i]);
        }
        */
        System.out.println("temps écoulé: "+(fin-debut));

    }


}
