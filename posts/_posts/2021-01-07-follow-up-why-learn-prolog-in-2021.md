---
layout: post
title:  "Follow Up: Why Learn Prolog in 2021?"
date:   2021-01-07 15:37:13 +0000
category: posts
---

My [recent blog post](http://dstrohmaier.com/why-learn-prolog-in-2021/) arguing why one should lean Prolog in 2021 made its way to the front page of Hacker News (HN), where it started a [discussion](https://news.ycombinator.com/item?id=25652369) with more than 100 comments. I'm glad to see that some saw value in my post and I want to respond to a few comments from this discussion. Given the number of comments, I won't write an exhaustive response but instead focus on a few themes I care about and try to fill some gaps I left in my original post. This post will be more eclectic and discuss:
1. How to evaluate the time investment into Prolog
2. Where the unfulfilled potential of Prolog might lie
3. Why I focussed on Prolog rather than another logic programming language
4. The aesthetic and epistemic reasons for learning Prolog

I consider this post a contribution to an ongoing debate, not its conclusion, and I hope it will be understood in such a way.


## How to Evaluate the Time Investment

I framed my blog post as providing reasons to learn Prolog for university students. The question I sought to provide them with reasons to invest their time specifically in Prolog. Why should they spend the time on Prolog than other opportunities?

I believe that the opportunity costs are especially worth considering for students of computer science, because these costs can be larger than in other disciplines. If a CS student learns a skill that is in high demand on the market -- and that is not the case for Prolog at this point -- they might increase their future salary. 

A student would not be well advised to invest much time into Prolog if they primarily sought to increase their future salary while avoiding risk. There are better _risk-averse_ time investment opportunities, such as learning more about neural network technologies. Of course, this assumes a student who are motivated by risk-secure monetary outcomes and would be able to act on this motivation.[0] Instead students 
1. might be motivated by other aims more strongly than by the additional income, or
2. might be willing to take a riskier bet to raise their income, or
3. might find themselves unable to resist watching funny Youtube clips for the sake of earning money but able to resist them for the sake of learning Prolog.

More needs to be said about the case of students willing to take risky bets. My last post subtly suggested that Prolog might lead to an increased income, if at some future date Prolog releases an unfulfilled potential. Learning Prolog is a risky investment, but on the assumption of unfulfilled potential it is an investment with a potentially large pay-off.


## What Is This Unfulfilled Potential?

In response to my claim that Prolog has unfulfilled potential, HN user _mths_ wrote 
> Is there any reason to believe the paradigm will somehow come into its own in the future? The way this question was addressed by the article was way too wishy-washy for my taste. 
I freely admit that I did not provide all that many details on this issue, because I feared the challenge of the predicting the future direction of Prolog and the embarrassment if I my specific predictions turn out to be mistaken. The comments, however, made me realise that I need to  

One area where many Prolog aficionados tend to see unfulfilled potential is constraint logic programming. Programming with constraints is powerful and has been explored relatively little. Constraint programming is also an area with relatively clear applications. It isn't only helpful for solving Sudokus or logic puzzles -- although that is true as well[1] -- but e.g. also for various engineering tasks.

There are other contenders in the space of constraint programming, but Prolog's design allows us to integrate constraint logic programming seamlessly into larger projects. As The Power of Prolog [website](https://www.metalevel.at/prolog/optimization) puts it, constraints "blend in especially seamlessly into _logic programming languages like Prolog due to their relational nature and built-in search and backtracking mechanisms". 

Another area where I believe Prolog has unfulfilled potential is the task of fully interpretable automated reasoning. Fully interpretable reasoning requires the ability to follow step by step the inferences processes, including the evidential basis, in a way that is comprehensible to the human cognitive architecture. While much work has pried open the black box of neural networks, I don't see this level of interpretability reachable without much revision of our neural architectures. Admittedly, or many applications, this lack of full interpretability is acceptable and in some domains it might even be unavoidable. In some domains, however, we might expect such a level of interpretability. The legal domain is a case in point. For at least some parts of legal decision processes which might strip people of their most basic freedoms, we ought to do our best to provide a fully interpretable inference process. In these domains, Prolog or Prolog-like languages have unfulfilled potential.

In addition to these two specific areas, let me offer a highly abstract reason why one should expect Prolog to have unfulfilled potential. I assume that Prolog is the main example of the logic programming paradigm, which in turn I assume to be one of the three major programming paradigms: imperative, functional, and logic. If those assumptions are granted -- and there are plausible reasons to object to them -- the question arises why the logic programming paradigm should be the only out of the three paradigms which does not find major areas of application. To my mind, it appears unlikely that there would be an entire approach to programming with a negligible domain of application. This argument is more of a hunch, but such hunches are the best guidance we have when it comes to hard-to-quantify unknowns, such as whether a technology has potential no one has even conceived of yet. 


## But Does It Have to Be _Prolog_?

A few discussion participants saw merit in the logic programming paradigm, but felt less comfortable with Prolog in particular. 

For example, HN user _qart_ asked:
> I wonder... is it still justified to learn Prolog now? Aren't there better alternatives for logic programming in many other common programming languages? I mean http://minikanren.org/

Another example of a logic programming language that popped up repeatedly in the discussion is [Mercury](https://mercurylang.org/index.html).

I lack experience with both miniKanren and Mercury and so I won't argue that they are better or worse realisations of the logic programming paradigm. Instead I want to suggest that one should prefer to learn Prolog, because there are more resources available for Prolog. Many of these resources were linked to in the HN thread itself.

Furthemore, given the presumed audience of university students, the question is mostly moot. Usually, departments would offer only one course in logic programming or require learning Prolog before learning more about other logic programming languages. The choices are limited by the curriculum.

I'm open to the thought that the future of logic programming will not be exactly ISO-compliant Prolog. That being said, I'd be surprised if no key elements of Prolog would be available in that assumed future language, be it Horn-clauses, unification with backtracking, or Prolog-style constraint logic programming.

## Aesthetic and Epistemic Reasons

I don't think one should fool oneself about learning Prolog and the lack of demand for Prolog skills on the job market, which was also a major topic on the HN thread. But I also made two other arguments, one appealing to the aesthetic and the other to the epistemic properties of Prolog. From the comments, I got the impression that these properties carried more weight with some discussion participants than with others. That is to be expected. What stood out to me, however, is that relatively few HN users questioned that Prolog has these properties. 

Perhaps the closest to arguing against my claim that Prolog is intellectually beautiful and epistemically revelatory would be the comments criticising the language for living up to its own ambitions. For example, _infogulch_ complained that:
>  Prolog implementations are too heavily reliant on the stated order of predicate rules in order to make execution progress.

I have sympathy for such criticisms and in my post I admitted that "occasionally Prolog falls short of the programming-by-description-paradigm". But much of the beauty derives from recognising the paradigm of which Prolog is the main example. Compare the experience to reading a novel in which the author has captured a completely new way of conceiving an aspect of reality, but some chapters fail to reflect this original conception. While one might argue that the novel is uneven, the new conception of reality within its pages is certainly a reason to read it. It seems to me that criticisms such as the one by _infogulch_ are analogous. 

In addition, Prolog is still being improved with regard to the aforementioned shortcomings. Prolog develops continue to work on bringing the language more in line with the ideas that render it beautiful and epistemically revelatory.


## Conclusion

My former post was intended as the best case I can make for Prolog within a blog post. I had an imagined audience, but I was writing the post to reflect on what might justify my own interaction with Prolog, including offering supervisions for a course. While my main aim was to offer a justification independently of its uptake by anyone else, I won't deny that I derive great satisfaction from positive responses, such as _simongray_ writing 

> This inspired me. What's the best book for modern prolog?

I am grateful for everyone who gave my blog post a chance.


### Footnotes

[0] I am also writing this in the context of a limited departmental curriculum, where students cannot just choose any course, but I won't go into that here.

[1] See https://www.metalevel.at/sudoku/ and  https://www.metalevel.at/prolog/puzzles
