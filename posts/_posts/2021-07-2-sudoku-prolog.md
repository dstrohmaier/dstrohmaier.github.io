---
layout: post
title:  "Using Prolog for Sudoku Variants"
date:   2021-07-02 21:30:13 +0000
category: posts
---


The Sudoku scene has undoubtedly been one of the pandemic winners. Thanks to the Youtube channel ["Cracking the Cryptic"](https://www.youtube.com/channel/UCC-UOdK8-mIjxBQm_ot1T-Q), its viral video on the ["Miracle Sudoku"](https://www.youtube.com/watch?v=yKf9aUIxdb4), and the many entertaining videos that followed, Sudoku puzzles with extended rule-sets have received widespread attention. That is a prime opportunity for Prolog aficionados like myself to show off the power of the language. Many Sudoku puzzles are easily solved with Prolog.

## Existing Resources

A solver for standard Sudokus is a teaching example for the [CLPFD library](https://www.swi-prolog.org/man/clpfd.html). The Power of Prolog has a [dedicated page and video](https://www.metalevel.at/sudoku/) for solving standard Sudokus. Puzzles with extended rule-sets have not gone unnoticed either. In fact, the original "Miracle Sudoku" video has been discussed and solved with Prolog in [a blog post by Benjamin Congdon](https://benjamincongdon.me/blog/2020/05/23/Solving-the-Miracle-Sudoku-in-Prolog/). I want to add a little to these solvers. 

The extended solver of Congdon adds three constraints to the classical solver:
- King's Move: Cells that are removed from each other by the equivalent of a move of a chess king cannot contain the same digit.
- Knight's Move: Cells that are removed from each other by the equivalent of a move of a chess knight cannot contain the same digit.
- Orthogonal Adjancency: Orthogonally adjacent cells cannot contain consecutive digits.

If you want to see how to program these constraints, see Congdon's [post](https://benjamincongdon.me/blog/2020/05/23/Solving-the-Miracle-Sudoku-in-Prolog/). But there are other constraints that often appear on Cracking the Cryptic and I thought I would fill the gap. For a start, I want to address one of the most common constraint type:
- Thermo: Numbers on a line are montonically increasing starting from a thermometer bulb.

## Full Solution: Thermo

For the Thermo constraint, I've chosen the great "Spoons" puzzle by the well-known setter Phistomefel. To solve that puzzle yourself, [follow this link](https://app.crackingthecryptic.com/sudoku/BnRMNhBr8N). To solve it with Prolog, all we need beyond a standard solver are the following the two lines and the inclusion of the specific constraints:

	smaller(L,Sn,L) :- Sn #< L.
	thermo([L|Ls]) :- foldl(smaller,Ls,L,_).

The thermo predicate defined in these lines, checks whether a list of integers increases monotonically from left to right.[0]

My complete solution, based on the previous solvers metioned above, looks as follows:

	:- use_module(library(clpfd)).

	puzzle(Rows) :-
		Rows = [
			[A1,A2,A3,A4,A5,A6,A7,A8,A9],
			[B1,B2,B3,B4,B5,B6,B7,B8,B9],
			[C1,C2,C3,C4,C5,C6,C7,C8,C9],
			[D1,D2,D3,D4,D5,D6,D7,D8,D9],
			[E1,E2,E3,E4,E5,E6,E7,E8,E9],
			[F1,F2,F3,F4,F5,F6,F7,F8,F9],
			[G1,G2,G3,G4,G5,G6,G7,G8,G9],
			[H1,H2,H3,H4,H5,H6,H7,H8,H9],
			[I1,I2,I3,I4,I5,I6,I7,I8,I9]
			],
	    sudoku(Rows),
		thermo([A3,A4,A5]),
		thermo([B2,C2,D2]),
		thermo([B3,C3,D3]),
		thermo([B4,C4,D4]),
		thermo([B5,C5,D5]),
		thermo([B7,C7,D7]),
		thermo([B8,C8,D8]),
		thermo([B9,C9,D9]),
		thermo([E3,E4,E5]),
		thermo([F1,G1,H1]),
		thermo([F3,G3,H3]),
		thermo([F4,G4,H4]),
		thermo([F6,G6,H6]),
		thermo([F7,G7,H7]),
		thermo([F8,G8,H8]),
		thermo([F9,G9,H9]),
		thermo([I3,I4,I5]),
		thermo([I8,I7,I6]).

	sudoku(Rows) :-
		append(Rows, Vs), Vs ins 1..9,
		maplist(all_distinct, Rows),
		transpose(Rows, Columns),
		maplist(all_distinct, Columns),
		[As,Bs,Cs,Ds,Es,Fs,Gs,Hs,Is] = Rows,
		blocks(As, Bs, Cs),
		blocks(Ds, Es, Fs),
		blocks(Gs, Hs, Is).

	blocks([], [], []).
	blocks([N1,N2,N3|Ns1], [N4,N5,N6|Ns2], [N7,N8,N9|Ns3]) :-
        all_distinct([N1,N2,N3,N4,N5,N6,N7,N8,N9]),
        blocks(Ns1, Ns2, Ns3).

	smaller(L,Sn,L) :- Sn #< L.
	thermo([L|Ls]) :- foldl(smaller,Ls,L,_).

	:- time((puzzle(Rows), maplist(labeling([ff]), Rows))),
		maplist(portray_clause, Rows).

The solve took 0.141 seconds on my laptop.

## Other Constraints

To show off the power of Prolog a little more, I'll finish with the implementation of two more constraints.

Summing constraints are equally straight forward to handle. There are in fact multiple variations of summing constraints, including summing along arrows and summing along diagonals (little killer clues). The code will usually be the same:

	add(X,Y,S):- S #= X+Y.
	sum(Xs,S):- foldl(add,Xs,0,S).

The predicate sum relates a list of integers -- order does not matter -- to its sum _S_. When we implement a Sudoku puzzle, the _S_ will usually be another variable in the case of arrow clues and in the case of little killer clues, it will usually be a given digit.

Disjoint groups are a further fascinating constraint. It is [defined as follows](https://www.funwithpuzzles.com/2014/08/disjoint-groups-sudoku-fun-with-sudoku.html):

> _cells with the same position in 3x3 boxes contains number from 1 to 9 i.e no number can repeat in the same position in 3x3 boxes._ 

I wrote a working implementation for the disjoint group constraint and I post it here for completeness, but it is not very elegant. 

	disjoint(Rows) :-
		by3(Rows,First-[],Second-[],Third-[]),
		maplist(distinct_sets,[First,Second,Third]).

	distinct_sets(Rows) :- row_sets(Rows,FSet,SSet,TSet),
	                       maplist(all_distinct,[FSet,SSet,TSet]).

	row_sets([],[],[],[]).
	row_sets([H|Rows],L1,L2,L3) :- by3(H,L1-A,L2-B,L3-C),
	                               row_sets(Rows,A,B,C).

	by3([],A-A,B-B,C-C).
	by3([N1,N2,N3|R],[N1|F]-A,[N2|S]-B,[N3|T]-C) :- by3(R,F-A,S-B,T-C).

In a nutshell, the predicate disjoint groups every third row (A, D, G) and every third+1 row (B, E, H), and every third+2 row (C, F, I) together and then applies the same grouping within rows to create the disjoint sets. If you have a better implementation of the disjoint group constraint, then email me. And if you think you understand how it works and want to implement a solve yourself, give [this puzzle](https://app.crackingthecryptic.com/sudoku/LNqP9d8tdj) a try. I would love to see a good Prolog solver for it.

---
### Footnote

[0] I consistently use here the predicates from the CLPFD library, rather than the vanilla mathematical predicates available in Prolog.
