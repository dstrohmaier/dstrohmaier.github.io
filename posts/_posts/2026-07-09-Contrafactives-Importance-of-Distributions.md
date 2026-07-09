---
layout: post
title:  "Paper and Talk: Contrafactives and the Importance of Distributions"
date:   2026-07-09 11:57:13 +0100
category: posts
---


If you model the acquisition of words that don't exist in any language, what distribution do you assume for these words? For example, how often should they be used in false sentences vs. true sentences?

This admittedly abstract issue motivated the paper "Transformers Learning Contrafactives: The Importance of Data Distributions",[^1] which I am presenting this Saturday (11. 07. 2026) at the [3rd BriGap workshop](https://brigap-workshop.github.io/) in Paris. The verbs in question are _contrafactives_, i.e. verbs that attribute a propositional attitude and presuppose the falsehood of the attitude's content. Roughly speaking, they are the inverse of "know", which is a factive. Using "contra" as a contrafactive, we end up with the following example:

<table style="width: 100%;">
<tr>
<th align="center">Baruch knows it rains.</th>
<th style="width: 3em;"></th>
<th align="center">Baruch contras it rains.</th>
</tr>
<tr>
<td align="center"><img src="/assets/images/baruch_knows_it_rains.svg" style="width: 100%; max-width: 300px;" /></td>
<td></td>
<td align="center"><img src="/assets/images/baruch_contras_it_rains.svg" style="width: 100%; max-width: 300px;" /></td>
</tr>
</table>

The new paper is the latest in a series of publications ([a](https://philpapers.org/rec/STRCAL-6), [b](https://philpapers.org/rec/STRCAL-7), [c](https://journals.linguisticsociety.org/proceedings/index.php/ELM/article/view/5810)) in which [Simon Wimmer](https://simonwimmer.weebly.com/) and I explore the learnability of contrafactives using transformer models. Our original hypothesis, which we have since then mostly abandoned, was that contrafactives might not be lexicalised in any/most languages because they are too difficult to learn. To assess this hypothesis, we checked in a variety of experiments how easily transformer models can learn contrafactives (compared to other attitude ascription verbs).

This latest paper builds upon our research published at the 3rd conference on [Experiments in Linguistic Meaning](https://www.elm-conference.net/archive/elm-3-2024/elm-3-program/) (ELM3) targeting the production of contrafactives (see also my [previous blog post on the conference](/ELM3-Contrafactives/)). Back then, we made strong simplifying assumptions about the distributions of contrafactives, which the new paper revisits and improves upon. Taking relevant empirical literature into account, we explore a variety of distributions.

Exploring more distributions is a core contribution of the paper, but it is not the only one. We also offer a deeper look into the complexity of the artificial language we use to model the acquisition of attitude verbs. Specifically, the task we train the transformer models on can be modelled using a non-deterministic finite state transducer (NDFST). Here is a graph visualising a part of this NDFST:

<img src="/assets/images/ndfst.svg" alt="NDFST sub-graph" title="NDFST" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" />

These various improvements together with the previous publications paint a picture of how transformer models learn attitude verbs, at least the simplified version of our artificial language. The first important insight was that the differences between contrafactives and factives (as well as non-factives, e.g. "believe") are small. Other factors that cut across the different attitude ascription verbs drive the learning dynamics.[^2] Generally, the insights into the learning dynamics of transformers have been as interesting as the results on contrafactives:

1. Learning of a semantic-pragmatic condition can be abrupt, going from chance to near-perfect performance in a handful of training steps.
2. Distributions matter, but even in distributions with fewer contrafactives, they can be learned about as fast as factives.
3. Transformer models can handle non-deterministic transduction and do not (usually) end up with an overwhelming preference when multiple choices are available.

Although these dynamics do not explain the absence of contrafactives from the lexicon, they are more human-like than one might expect. Based on such results, attitude ascription verbs are an interesting test case for modelling language cognition with transformers. There is much room here for future research: add recursion to the artificial language, increase the role of communication, ... Many low-hanging fruits await us!



### Footnotes


[^1]: The code repository is available on [github](https://github.com/dstrohmaier/contrafactives_distributions).


[^2]: Already in our paper at ELM3, we pointed out the difference between matching and non-matching production conditions (which is also key in the NDFST).
