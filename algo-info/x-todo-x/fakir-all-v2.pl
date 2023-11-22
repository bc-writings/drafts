% Source: https://stackoverflow.com/a/68077415/4589608

% ----------------- %
% -- LEGAL PATHS -- %
% ----------------- %

oneelt([X | _], X, 0).

oneelt([_ | Others], X, ThisPos):-
    oneelt(Others, X, Pos),
    ThisPos is Pos + 1.


onepath([], [], 0).

onepath(
    [Row   | OtherRows  ],  
    [NbCol | OtherNbCols],
    Total
):-
    oneelt(Row, Val, NbCol),
    onepath(OtherRows, OtherNbCols, SubTotal), % Maladroit ! A optimiser.
    goodnewelt(NbCol, OtherNbCols),
    Total is SubTotal + Val.


goodnewelt(_, []).

goodnewelt(NbCol, [NextNbCol | _]):-
    DeltaNbCol is NbCol - NextNbCol,
    DeltaNbCol =< 1,
    DeltaNbCol >= -1.


% ----------------------- %
% -- ALL THE SOLUTIONS -- %
% ----------------------- %

sametotal(Total, Val-Path, Path):-
    Val = Total.

solution(Paths, BestTotal):-
    Grid = [
        [1, 1, 4, 5, 2, 1, 2],
        [3, 2, 3, 1, 2, 4, 0],
        [3, 5, 2, 3, 6, 2, 4],
        [3, 7, 1, 2, 5, 8, 5]
    ],
    setof(
        Total-NbCols,
        onepath(Grid, NbCols, Total),
        AllPaths
    ),
    convlist(sametotal(BestTotal), AllPaths, Paths).
