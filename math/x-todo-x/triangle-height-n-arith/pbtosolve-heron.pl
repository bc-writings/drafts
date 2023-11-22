:- use_module(library(clpfd)).

solution(A, B, C, H):-
% Domaines
    A in 1..100,
    B in 1..100,
    C in 1..100,
    H in 1..100,
% Formule de Héron
    A #= H +1,
    B #= H +2,
    C #= H +3,
    4*H*H*B*B #= (A + B + C)*(-A + B + C)*(A - B + C)*(A + B - C),
% Enumeration des solutions
    labeling([], [A, B, C, H]).
