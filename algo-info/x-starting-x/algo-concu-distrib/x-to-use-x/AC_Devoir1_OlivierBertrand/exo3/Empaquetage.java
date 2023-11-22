

class Tapis{
    int compteur;
    
    Tapis(){
        compteur = 0;
    }
    
    synchronized void deposerBiscuit(){
        //Si le tapis est plein, on met la biscuiteuse appelante en attente
        while (compteur == 10){
            try{ 
                wait();            
            }catch (InterruptedException e){
            System.out.println("InterruptedException"); 
            }
        }
        //Au réveil (éventuel), on peut déposer le biscuit
        compteur++;
        //On réveille un processus en attente (s'il y en a)
        notify();
    }
    
    synchronized void retirerBiscuit(){
        //Si le tapis a moins de 10 biscuits, on met la ramasseuse appelante en attente
        while (compteur<10){
            try{ 
                wait();            
            }catch (InterruptedException e){
            System.out.println("InterruptedException"); 
            }
        }
        //On ramasse 10 gâteaux
        System.out.println("Début du ramassage");
        for (int j=0;j<10;j++){
            compteur--;
        }
        notify();
        //On réveille un processus en attente (s'il y en a)
    }
    
    
    
    
}


class Biscuiteuse extends Thread{

    protected final Tapis tapis;
    int num;
     
    public Biscuiteuse(Tapis unTapis, int numThread){
        this.tapis = unTapis;
        this.num = numThread;
    }
    
    
    public void run(){
      	try{
            //On va fabriquer 250 biscuits
            for ( int j = 0 ; j < 250 ; j ++ ){
                //Simulation de la fabrication d'un biscuit
                Thread.sleep (50) ;
                //On sollicite le tapis pour un dépôt
                tapis.deposerBiscuit();
                System.out.println("un gateau livré par machine " + num);
            }
        } 
        catch ( InterruptedException e ) {
	    System.out.println("InterruptedException"); 
        }
    }

}


class Ramasseuse extends Thread{
    
    protected final Tapis tapis;
    int nbrePaquets;
     
    Ramasseuse(Tapis unTapis){
        this.tapis = unTapis;
        this.nbrePaquets = 0;
    }

    public void run(){
        //On va réaliser 100 paquets
        for ( int i = 0 ; i < 100 ; i ++ ){
            //on ramasse 10 biscuits
            tapis.retirerBiscuit(); 
            //et on fait un paquet
            try{
                nbrePaquets++;
                System.out.println("Empaquetage, paquet "+nbrePaquets);
                //Simulation du temps d'empaquetage
                Thread.sleep ( 100 ) ;
            }
            catch ( InterruptedException e ) {
                System.out.println("InterruptedException"); 
            }
        }
    }
        
}


public class Empaquetage{
    
    //Définition du tapis
    static Tapis tapis = new Tapis();
    
    public static void main ( String [] args ) {
        
        //Création des 5 machines        
        Biscuiteuse p1 = new Biscuiteuse(tapis, 1);
        Biscuiteuse p2 = new Biscuiteuse(tapis, 2);
        Biscuiteuse p3 = new Biscuiteuse(tapis, 3);
        Biscuiteuse p4 = new Biscuiteuse(tapis, 4);
        Ramasseuse q = new Ramasseuse(tapis);
        
        //Mise en route
        p1.start () ;
        p2.start () ;
        p3.start () ;
        p4.start () ;
        q.start () ;

        try{
            p1.join();
            p2.join();
            p3.join();
            p4.join();
            q.join();
        } catch ( InterruptedException e ) {
            System.out.println("InterruptedException"); 
	    
        }
	
        System.out.println("End");    
    }

    
}
