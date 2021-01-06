---
layout: post
title:  "Why Learn Prolog in 2021?"
date:   2021-01-05 21:37:13 +0000
category: posts
---

	?- learn(prolog).


Why should one learn Prolog in 2021? I should better have an answer to this question, because I will soon offer supervisions for a Prolog course. While I'm a personal admirer of this unusual programming language, students might rightfully demand a justification that goes beyond my preferences. Prolog certainly isn't the most glamorous programming language to learn in 2021. Despite its lack of popularity, there are good reasons to learn Prolog and in the following, I'll explore three of them. 


## The Sheer Intellectual Beauty

Perhaps my background in philosophy helps explain my fondness for Prolog. Not only is first-order predicate logic taught to virtually all philosophy students as a tool for thought, but it also forms the foundation of Prolog's logic-programming paradigm. Philosophers aim for a logical description of the world and Prolog goes beyond this ambition by allowing us to manipulate reality via a logical description. We solve problems by writing Horn clauses, and a Horn-clause is a logical formula that simplifies resolution. Logical formulas are the tool of problem solving. Once grasped, the idea of logically describing a problem and the having the computer solve it is almost irresistible. 

Of course, occasionally Prolog falls short of the programming-by-description-paradigm. There are cases where Prolog mixes logic and control instead of keeping them apart.[0] Nonetheless, logic programming, the paradigm of which Prolog is the primary example, comes with its own intellectual appeal. From the perspective of intellectual aesthetics, good Prolog code is a sublime experience (_erhabene Erfahrung_).[1] Such Prolog code reveals the overwhelming power of logical description and the force of a capacity -- the capacity to describe the world in logical terms and thereby solve problems -- that resides in all of us.

In sum, Prolog code has a timeless beauty to it -- a claim that I believe is more commonly associated with the S-expressions of LISP -- and is therefore worth learning. I am aware that an appeal to beauty has its limits, but the aesthetic properties of a programming language should not be entirely discounted. Our sense for intellectual beauty is an important tool for creation and it needs to be trained. If one understands what makes an approach beautiful, it becomes easier to create beautiful code and to resist the lure of beauty when it distracts from practical concerns. Learning Prolog is a way to tame the power of beautiful code.


	?- beautiful(prolog).
	true


## A Different Perspective on Classical Issues

Recursion, list manipulations, and graph-hopping are standard topics of foundational computer science and Prolog addresses them with a twist.[2] Prolog offers a different perspective on classical issues of computer science, usually right away from the first lessons. As a result, Prolog has a relatively steep learning curve, but the different perspective can also be revelatory. One learns to describe classical problems in the format of Prolog Horn-clauses and thereby solve them, which can lead to a unique way of understanding them -- especially, once one has learned to write _idiomatic_ Prolog. 

Prolog is not only beautiful, but it also reveals another aspect of the core issues of computer science to which it is applied. Occasionally, the aspect Prolog reveals is also the aspect that needs to be seen for solving a problem. Some problems call for Prolog. Having learned Prolog will allow one to address them beautifully and efficiently. To be honest, at the moment such problems are too rare to justify learning Prolog. But I don't believe that this has to remain so. As my last argument in favour of learning Prolog, I will suggest that it has unfulfilled potential.


	?- unique_perspective(prolog).
	true
	

## Unfulfilled Potential

As a student of computer science, one can make a decent career by always following the hype, but to stand out one has to diverge from the well-trodden paths. Those willing to explore unpopular territory have a chance of being ahead of the crowd. In 2021, Prolog is such unpopular territory. In my field of NLP, one might instead opt to learn more about neural networks and especially the Transformer architectures such as BERT. Learning about these topics is certainly advisable for a career in NLP, but it won't make one stand out. 

Prolog is unpopular and, more importantly, I believe that it has not fulfilled its potential so far. The logic-programming paradigm with its separation between logic and control is powerful. Yet it does not find much use in current applications. This unpopularity despite power might deter a student from learning Prolog -- perhaps logic-programming has faults which keep its from being successful -- but it is also an opportunity. One can make the bet that more will come of Prolog or a language similar to it.[3] If the bet is successful, one will be ahead of the hype.

Such bets on unpopular options are risky. It is a high-reward bet because of the limited chances of success. That being said, I would advise making a few such bets in the course of one's life. Even if nothing comes of them, they render life more interesting and help to show individual character. Perhaps one shouldn't go all in on such a bet, but this consideration should justify the few hours of a Prolog course, when one gets academic credits in addition to being able to assess the unfulfilled potential of Prolog better.


	?- potential(prolog,Y), unfulfilled(Y).
	true


## Conclusion

Currently, Prolog does not belong to the most popular programming languages. Its logic programming paradigm makes it an outsider. Nonetheless, I've argued that there are good reasons to learn Prolog. The language is beautiful, it offers a different perspective on classic computer science issues, and it has unfulfilled potential. Whether you are motivated by aesthetic, academic, or career considerations, you have a reason to learn Prolog in 2021.


	learn(X) :- beautiful(X), unique_perspective(X), potential(X,Y), unfulfilled(Y).

	?- learn(prolog).
	true


### Footnote

[0] I'm referencing here Robert Kowalski's formulation of Algorithm = Logic + Control.

[1] I hope Kantians can forgive me for treating the sublime (_das Erhabene_) as a type of beauty, neglecting Kant's distinction.

[2] For an example, have a look at the quicksort implementation on [The Power of Prolog](https://www.metalevel.at/prolog/sorting).

[3] I'm not [the only one who has hopes for Prolog's future](https://www.youtube.com/watch?v=kGQNeeRp4sM).
