
class Synchro{
    
    Integer nbTotal;       //nombre total de processus convoqués au rendez-vous
    Integer nbArrives;     //nombre de processus ayant terminé leur calcul sur l'itération courante
    
    float[] ancien;        // Le moniteur garde une référence aux deux tableaux représentant la barre
    float[] nouveau;       // cela permet de dire aux processus quand s'arrêter
    
    boolean stop;
    
    Synchro(float[] ancien, float[] nouveau){
        nbTotal = 4;            
        nbArrives = 0;          
        this.ancien = ancien;
        this.nouveau = nouveau;
        this.stop = false;
    }
    
    
    public boolean stable(){                            //renvoie un booléen indiquant si la diffusion est terminée
        for(int i = 0; i<ancien.length; i++){
            if(ancien[i]!=nouveau[i])
                return false;
        }
        return true;
    }
    
    public synchronized boolean arrive(int num){            //appelée par un processus lorsqu'il arrive au point de rendez-vous
        //System.out.println("thread "+ num + " arrivé");
        nbArrives = nbArrives+1;
        if ( nbArrives < nbTotal ) {                //Si tous n'ont pas fini, on met le processus en attente
            try {
                wait ();
            }
            catch ( InterruptedException e ) {
                System.out.println("InterruptedException"); }
            }
        if (nbArrives == nbTotal){                  //Tous les processus ont travaillé sur une itération                                                    
            nbArrives = 0;                          //On remet 'nbArrives' à 0 pour l'itération suivante
            if (!stable()){                         
                for (int i =0;i<ancien.length;i++){ //Si la diffusion n'est pas terminée, on met à jour la barre
                    ancien[i] = nouveau[i];         //pour le calcul de la prochaine itération
                }
            }
            else {
                stop = true;                        //Si la diffusion est terminée, on renverra 'true" au processus
            }
            notifyAll();                            //On réveille les processus en attente (ceux qui étaient déjà arrivés)

        }
        return stop;        //on renvoie au processus un booléen indiquant si la diffusion est terminée
    }
    
    
}



class Calcul extends Thread{
    
    float[] ancien;
    float[] nouveau;
    int start;      //premier indice considéré par le thread
    int end;        //dernier indice considéré par le thread
    int num;        //numéro du thread
    Synchro s;      //Référence à l'outil de synchronisation des threads
    boolean stop;   //Booléen permettant de stopper le calcul itératir.

    
    
    Calcul(float[] t1, float[] t2, int n1, int n2, int numThread, Synchro S){
        ancien = t1;
        nouveau = t2;
        start = n1;
        end = n2;
        num = numThread;
        this.s = S;
    }
    


    
    public void run(){
        
            while(!stop){
                //On calcule les valeurs du tableau 'nouveau' représentant l'évolution de 'ancien' lors d'une itération de diffusion
                if (start==0)
                    nouveau[0] = (ancien[0]+ancien[1])/2;
                else
                    nouveau[start] = (ancien[start-1]+ancien[start]+ancien[start+1])/3;
                for (int i =start+1; i<end; i++){
                    nouveau[i] = (ancien[i-1] + ancien[i] + ancien[i+1])/3;
                }
                if (end == ancien.length-1)
                    nouveau[end] = (ancien[end-1] + ancien[end])/2;
                else
                    nouveau[end] = (ancien[end-1] + ancien[end] + ancien[end+1])/3;
                
                //Le calcul est terminé (point de rendez-vous), on appelle le moniteur qui nous dira en retour s'il faut continuer
                stop = s.arrive(num);
            }
    }
}
    
   
   
public class DiffusionParallele{
    public static void main(String[] args){

        int n;                      //Nombre d'éléments du tableau représentant la barre
        float[] barre;              //Le tableau représentant l'état de la barre à un moment donnée
        float[] nouvelEtat;         //Le tableau représentant l'état de la barre à l'itération suivante
    
    
        n = 100;        //taille de la barre
        barre = new float[n];
        nouvelEtat = new float[n];
        Synchro S = new Synchro(barre, nouvelEtat);
        
        barre[0] = 1000;         //initialisation des tableaux
        for (int i=1;i<n;i++){
            barre[i] = 20;
        }        for (int i=0;i<n;i++){
            nouvelEtat[i] = 0;
        }

        
        
        Calcul t1 = new Calcul(barre, nouvelEtat, 0,n/4-1,1, S);
        Calcul t2 = new Calcul(barre, nouvelEtat, n/4, n/2-1,2, S);
        Calcul t3 = new Calcul(barre, nouvelEtat, n/2, 3*n/4-1,3, S);
        Calcul t4 = new Calcul(barre, nouvelEtat, 3*n/4, n-1,4, S);
        
        System.out.println("Valeur de n: "+n);
        long debut = System.currentTimeMillis();
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        
        try{
            t1.join();
            t2.join();
            t3.join();
            t4.join();
        }
    
        catch(InterruptedException e){
            System.out.println("InterruptedException levée");
        }

        long fin = System.currentTimeMillis();
        System.out.println("temps écoulé: "+(fin - debut));
        
        /*
         System.out.print(nouvelEtat[0]);
        for (int i=1;i<n; i++){
            System.out.print(", "+nouvelEtat[i]);
        }
        */
        
        
        
    }
    
    
}
