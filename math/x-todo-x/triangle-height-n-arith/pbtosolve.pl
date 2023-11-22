:- use_module(library(clpfd)).

solution(N):-
% Domaines
    N in 1..100,
    M in 1..100,
    P in 1..100,
% Contraintes
    P + M #= N + 2,
    P*P + N*N #= (N + 1)*(N + 1),
    M*M + N*N #= (N + 3)*(N + 3),
% Enumeration des solutions
    labeling([], [N, M, P]).
