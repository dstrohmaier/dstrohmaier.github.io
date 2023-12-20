---
layout: post
title:  "Generative Senses: A Prolog Exercise"
date:   2023-12-20 09:25:00 +0000
category: posts
---

Prolog is not the tool of choice for most of NLP nowadays, but this didn't always use to be the case. The unreasonable effectiveness of neural networks for most practical NLP tasks has led to this shift, since implementing neural networks in Prolog is rather awkward. But some ideas and theories from previous decades are still interesting, for theoretical exploration if not practical application, and they are often well-implemented using Prolog. Along these lines, I have implemented some core operations from [Bradley Franks' 1995 paper "Sense Generation"](https://philpapers.org/rec/FRASGA). You can find the code on [github]().

This is an intriguing paper, and while it is outdated in some respects, it also prefigures some more recent theories. It suggests a decompositional, quasi-classical approach to concepts. That is, it is proposes that the meaning of words can be split into symbolic components resembling definitions. A full defense of this position would require more than a single paper, so Franks considers only one particularly challenging case: Privatives, words such as "fake" or "false" that can radically change what a word means. A fake gun is no gun at all. Some general adjectives can also have a privative effect under the right circumstances: a rubber duck is no duck and a stone lion is no lion. Bradley's paper accounts for such effects by representing concepts using attribute-value structures (AVS). Unusually, the main AVS for a lexical entry is split into two sub-AVS:
1. The central AVS which includes features of the conceptual core.
2. The diagnostic AVS which includes features used to identify objects falling under the concept.

The operations in privative cases change these AVS. For example, in the case of "fake gun" the conceptual core features of the concept of GUN become negated. In the case of "stone lion", the operations are more complex because the features for STONE need to be appropriately combined with those of LION. A stone lion has four legs (a diagnostic feature according to Franks), but it is not an organic being or a lion at all (conceptual core features for LION). The operations needed for such combinations are implemented and tested in my Prolog code for three of Franks' examples: "fake gun", "stone lion", and "wild lion".[^1] The paper has much more content, but these operations are at the heart of it.

While the theory is from 1995, the Prolog code is more modern. I used the opportunity to try out a number of recent Prolog innovations to make the code simpler and logically purer. Cuts, a Prolog feature that would most certainly have been used in a 1995 implementation, are completely avoided. Franks' theory invited the use of reification, that is the explicit representation of truth-values, which together with the reif library made the reasoning much easier. It was a great opportunity to showcase some of modern Prolog's potential.

My code was tested on [Scryer-Prolog](https://www.scryer.pl/), but should work with minor changes on other implementations as long as they have versions of the libraries I used. If you want to try it out and have any problems, feel free to message me about it.


### Footnotes

[^1]: The last one, of course, is not a privative case, since wild lions are lions, but it can serve as a test-case anyway.
