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
    onepath(OtherRows, OtherNbCols, SubTotal),
    goodnewelt(NbCol, OtherNbCols),
    Total is SubTotal + Val.


goodnewelt(_, []).

goodnewelt(NbCol, [NextNbCol | _]):-
    DeltaNbCol is NbCol - NextNbCol,
    DeltaNbCol =< 1,
    DeltaNbCol >= -1.


% -------------------- %
% -- CHEAPEST PATHS -- %
% -------------------- %

minipath([PathCost], PathCost).

minipath(
    [PathCost | OtherPathCosts], 
    BestPathCost
) :-
    minipath(OtherPathCosts, SubBestPathCost),
    giveminipath(
        PathCost, 
        SubBestPathCost, 
        BestPathCost
    ). 


giveminipath(
    [Path_1   | Cost_1  ], 
    [Path_2   | Cost_2  ],
    [BestPath | BestCost]
):-
    (
        Cost_1 =< Cost_2
            -> BestPath = Path_1,
               BestCost = Cost_1
        ;
        BestPath = Path_2,
        BestCost = Cost_2
     ).


% ----------------------- %
% -- ALL THE SOLUTIONS -- %
% ----------------------- %

solution(Path, Cost):-
    Grid = [
        [0, 1, 4, 5, 2, 1, 2],
        [3, 2, 3, 1, 2, 4, 0],
        [3, 5, 2, 3, 6, 2, 4],
        [3, 7, 1, 2, 5, 8, 5]
    ],
    findall(
        [NbCols, Total],
        onepath(Grid, NbCols, Total), 
        AllPaths
    ),
    minipath(AllPaths, [Path | [Cost]]).
