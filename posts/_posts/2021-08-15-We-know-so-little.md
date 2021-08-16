---
layout: post
title:  "We Know So Little"
date:   2021-08-15 21:30:13 +0000
category: posts
---


Will machine learning (ML) solve natural language understanding (NLU)? A recent [essay in _The Gradient_ by Walid Saba](https://thegradient.pub/machine-learning-wont-solve-the-natural-language-understanding-challenge/) argues that it won't. I lack the confidence for either affirming or denying that ML will lead to NLU, especially without much further explanation of what we understand ML and NLU to be, but I am confident that Saba's arguments are not of the knock-down kind.

A part of me would like Saba's arguments to succeed. While I mostly work with neural nets and other ML methods, I have a soft spot for symbolic approaches to NLP.  I have read and enjoyed [_Representation and Inference for Natural Language_](https://www.coli.uni-saarland.de/publikationen/softcopies/Blackburn:1997:RIN.pdf) and I am an avowed admirer of Prolog. When I got into  NLP, I began by reading Chomsky's _Syntactic Structures_, only later did I read _Neural Network Methods for Natural Language Processing_. Certainly, I am the kind of person Saba's argument should appeal to, and yet... and yet I can't say it wins me over. At the end, I'm left unsure, not knowing whether ML will solve NLU. 

<img src="/assets/images/fatality.jpg" alt="Picture of a man measuring words" height="500"/>


In this post, I won't try to cover all arguments from _The Gradient_ essay. For example, I won't cover what Saba says on intensions, other than to frankly admit being puzzled by his claim that ML is all about extension. I'll leave those argument to others. Instead, I'll argue that we just don't know enough about how language fundamentally works to adjudicate whether ML can solve NLU.[0] To make this argument, I pick out one of Saba's claims about language and argue that the situation is more complicated. The claim I will take offense with is the following:
	
	[...] language understanding does not admit any degrees of freedom. A full understanding of an utterance or a question requires understanding the one and only one thought that a speaker is trying to convey. 

According to Saba, when we speak we are trying to convey one determinate thought, that is, a thought with a determinate content. The understanding of this content does not admit any degrees of freedom. As I interpret Saba, there is a matter of fact whether one correctly understands the other person or not and this fact either obtains or it does not. It doesn't hold in degrees, only absolutely. 

In response, one might be tempted to point to examples where people are misunderstanding in degrees. If a speaker utters the sentence "The train is late" and one listener misunderstands it as meaning that the train will not arrive today at all and another listener misunderstands it as meaning that bananas are straight, then both are misunderstanding the sentence but the second listener is doing worse. As the example, one can misunderstand someone else more or less badly. But Saba can accept that one can be wrong in degrees, because his point is only that _full understanding_ does not admit any degrees of freedom. There might be many ways of doing it wrong, but there is only one way of doing it right. According to Saba, when we understand each other, there is one and only one thought with a determinate content to understand for each utterance. That is a much more plausible position, nonetheless, I will disagree with it.

Consider Saba's own example of an utterance:

    Do we have a retired BBC reporter that was based in an East European country during the Cold War?
	
For the sake of illustration, assume that I utter this question as a member of a network of experts and that I want to know whether we, the network, include such a person. Saba suggests that I am expressing one determinate thought, that there is one correct analysis of my utterance, which an NLU system should produce. According to him, there is no degree of freedom in this analysis. I disagree, or at least I see good reasons for disagreement.

As Saba states, understanding the exact thought of the question requires interpreting the phrase "retired BBC reporter". This interpretation, however, turns out to be much harder than his gloss "the set of all reporters that worked at BBC and who are now retired" suggests. To see the problem, assume that in response to my question, someone asks me whether I intended to include freelance reporters who worked for the BBC or only its employees. The honest response to this question might very well be that I don't know. I don't know whether I meant to include freelancers in the extension of "BBC reporters" or not. Of course, I can make it up on the spot now, but I cannot decide the difference with regard to my prior intentions.

Contrary to Saba, the difference I cannot decide is semantically significant. It might be that a former BBC freelancer meeting the description belongs to the network, but no employee BBC reporter does. Whether my question is to be answered affirmatively depends on a difference in phrasal meaning that 
1) I do not know how to resolve,
2) I do not know whether I intended to resolve it all when I uttered the sentence.[1]

It seems that there is not one determinate content I sought to express.[2] There are at least two propositions that seem to fit my intention. But you might disagree and suggest that I intended to express one specific determinate proposition, I just don't any longer know or never knew which one. In other words, instead of denying the determinacy of intended thought, you deny the epistemic access to the determinate intended thought. This suggestion seeks to rescue Saba's argument with an epistemic move.

I don't know whether the epistemic move itself can be pulled off -- do I really lack this introspection? -- but I am confident that, in any case, it won't achieve the argumentative goal. It cannot rescue Saba's argument, because if I don't have access to my determinate thoughts, you certainly don't either. Even if one of the two interpretations is the truly correct one, you at best have approximately correct access to it. Yet, you have NLU, you understand natural language as well as any other human. You would have NLU without access to the one true thought, human-level NLU rather than super-human-level NLU. If Saba's arguments only showed that ML can lead to no better NLU than human-level NLU, then those working on ML-based NLU won't be all that worried.

My overall argument does not depend on whether I am right in the final analysis. Maybe I intended to utter one determinate thought and maybe it is accessible to humans. Even if this were so, we do not know it. What matters is that Saba's assumption is not safely established. We do not know that

	[...] language understanding does not admit any degrees of freedom. A full understanding of an utterance or a question requires understanding the one and only one thought that a speaker is trying to convey. 

We know too little about the foundations of language.


---
### Footnotes

[0] In my argument, I'm applying here relatively high standards of knowledge. - Different standards for knowledge? See David Lewis' [paper _Elusive Knowledge_](https://philpapers.org/rec/LEWEK) - By denying that we have knowledge about how language fundamentally works, I am not denying that we have theories about it and I am not even ruling out that one of these theories is largely correct. I am, instead, suggesting that no theory of language and our understanding of it reaches the level of certainty Saba presumes.

[1] This state of affairs differs from the missing text phenomenon, the fact that we do not express the fullness of our thoughts in utterances, that Saba happily acknowledges and makes argumentative use of. In my example, I'm not just leaving part of my thought unsaid because the part can be derived from my fragmentary statement together with common knowledge. Otherwise, I would myself be able to recover the left out part.

[2] That claim resembles, of course, [Quine's indeterminacy of translation](https://plato.stanford.edu/entries/quine/#IndeTran). That being said, I am not sure what to make of Quine's position, because I am not sharing his behaviourist assumptions and I do not know whether his position can be defended without them. 
