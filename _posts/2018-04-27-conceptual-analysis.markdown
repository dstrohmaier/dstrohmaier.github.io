---
layout: post
title:  "Serious Work: The Case of Conceptual Analysis"
date:   2018-04-27 21:51:13 +0100
categories: philosophy
---

Here are two questions which every researcher should ask themselves once in a while, but philosophers especially: How is your approach supposed to work? And looking at your actual practice, how serious can you be about following your account of how your approach is supposed to work? My fear is that in many cases philosopher profess to one methodological account, but it doesn't quite fit together with what they are doing. One example for this mismatch would be conceptual analysis.

Conceptual anaylsis no longer plays the central role in analytic philosophy it once occupied. But while philosophy of mind is no longer the effort to analyse mental predicates and metaphysics has made a comeback, conceptual analysis" is still considered a core philosophical method. As far as I'm concerned, "conceptual analysis" is just a fancy term for "coming up with a definition". Sharing roughly this insight, philosophers have long been dissatisfied with conceptual analysis as a means to learn about non-linguistic facts, but that hasn't stopped us from making heavy use of conceptual analysis.

When I co-taught a course on the philosophy of the social last Winter term, I covered various efforts to provide necessary and jointly sufficient conditions for something being a joint action, that is something we do together. Does it require a special mental state? A we-intention (see Searle 1990)? Something irreducibly social like a joint commitment (Gilbert 1990)? Having raised these questions we can play off our intutions how to use certain phrases. We were effectively looking what the definiton for one sense of "doing X together", because that is the debate in the literature.

As an activity, giving definitions is not limited to philosophy. I'm currently familiarising myself with the [Natural Language Toolkit (NLTK)][nltk-site] for Python, which allows one to explore semantic relations between concepts using the WordNet module (see [chapter two of the NLTK book][nltk-chapter2]). For example, it disambiguiates the different senses of "car'" and offers associated definitions:
{% highlight python %}
>>> from nltk.corpus import wordnet as wn
>>> wn.synsets('car')
[Synset('car.n.01'),
 Synset('car.n.02'),
 Synset('car.n.03'),
 Synset('car.n.04'),
 Synset('cable_car.n.01')]

>>> wn.synset('car.n.01').definition()
'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
{% endhighlight %}

While computational linguistic approaches such as the one underlying WordNet and the philosophical analyses diverge in important respects, there is clearly an overlap here. They look for definitions and semantic relations, and so do we. Wouldn't it be for the benefit of both computational linguistics and philosophical conceptual analysis endeavours to pool the results? As far as I am aware, it doesn't happen to any noteworthy degree. No one in the joint action literature bothered to think about that. What is going on here? 

A philosopher has an interest in an issue, for example, in social interaction and then tries to find a way to approach this issue. They limit themselves, however, to methods that are considered properly philosophical. Conceptual analysis is one such method and it seems like a way to make sense of "doing something together". So they choose this method. But, at the end of the day, they are not that serious about their method and the associated methodology. They want to make claims about joint actions, about how doing things together (I want to make a lot of claims about it!), not really unravel the semantics of action sentences (Kirk Ludwig's work might be an exception to this).

Beside a few specialised specialists most philosophers don't seriously follow an account for conceptual analysis. They will, however, produce a cobbled-together rationalisation if asked for one and a PhD program in philosophy prepares them well for doing so. To be honest, such a mismatch between professed methodological account and practice occurs in the sciences as well. Arguably, a good bit of the reproducibility crisis can be blamed on it. Someone wants to say something about X and knows how to calculate a p-value! Without thinking much further they just go about it and mine the noise. As it turns out, the results of noise cannot be reproduced reliably.

But philosophers are at an even greate danger: Philosophy cannot suffer a reproducibility crisis (with the exception of [experimental philosophy][experimental-sep] but that's a different story). Philosopher's argue with each other and they are very good at it. A mismatch between methodology and research practices can continue for a while, and a while in philosophy can be really long. I propose that's what's going on in many cases of conceptual analysis.

So how can we avoid such mismatches? We ought not to let our interests and our wish to make certain claims blind us so that we end picking a method and associated methodology which we are comfortable with instead of one which we can be serious about. Doing things right is harder than just going for the most comfortable method which will barely uphold the pretense of research. Richard Feynman's first principle for scientific integrity comes to mind:
> The first principle is that you must not fool yourself-- and you are the easiest person to fool.

_(Dislcaimer: This is a blog post about philosophy, a combination of form and content no one has made work yet. I have neglected all kinds subtleties and have not addressed all kinds of responses. Take it as a starting point, not a complete picture.)_

### References
Gilbert, M. (1990). Walking Together: A Paradigmatic Social Phenomenon. _Midwest Studies In Philosophy_, 15(1), 1–14. https://doi.org/10.1111/j.1475-4975.1990.tb00202.x

Ludwig, K. (2016). _From Individual to Plural Agency: Collective Action I_. Oxford: Oxford University Press.

Searle, J. (1990). Collective Intentions and Actions. In P. R. C. J. Morgan & M. Pollack (Eds.), _Intentions in Communication_ (pp. 401–415). MIT Press.


[experimental-sep]: https://plato.stanford.edu/entries/experimental-philosophy/
[nltk-site]: http://www.nltk.org/
[nltk-chapter2]: http://www.nltk.org/book/ch02.html