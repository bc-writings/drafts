# -*- coding : utf-8 -*-

from numpy import zeros
import random

k=3
n=2**k

echiquier=zeros((n,n))
echiquier[random.randint(0,n-1),random.randint(0,n-1)]=-1

def pavons(echiq) :
    def	triminoAuCentre ( lb , cb , cote , nb) :
        lm=lb+cote//2
        cm=cb+cote//2
        def	reperetrou () :
            for i in range(lb,lb+cote):
                for j in range(cb,cb+cote) :
                    if echiq[i,j]!=0:return(-(i<lm),-(j<cm))
        (troux ,trouy)=reperetrou()

        for (x,y) in [(-1,-1), (-1,0), (0,0), (0,-1)]:
            if (x,y)!=(troux,trouy) :
                echiq [lm+x,cm+y]=nb

    def pave(lb=0,cb=0,cote=n,nb=1) :
        if cote>1:
            triminoAuCentre(lb ,cb,cote ,nb)
            cote=cote//2
            NT=(cote*cote -1)//3
            for (x,y) in [(0,0),(0,cote),(cote,0),(cote,cote)]:
                pave(lb+x,cb+y,cote ,nb+1)
                nb+=NT
    pave()

pavons(echiquier)#	le	pavage

print echiquier
