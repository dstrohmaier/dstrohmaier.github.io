---
layout: post
title:  "Compositionality and Word Meaning"
date:   2024-02-06 12:25:00 +0000
category: posts
---

Transformer models do not learn compositionality. That is, they do not acquire the ability to construct hierarchical structures from smaller units by repeatedly applying the same rules.[^1]

I speculated about this a while ago, in [this post](https://dstrohmaier.com/transformer-speculations/). More importantly, [research](https://doi.org/10.1613/jair.1.11674) has shown that while transformer models perform better on compositionality tasks than previous model types, they still cannot consistently solve it (see also [this post](http://dstrohmaier.com/compositionality-a-paper/)). A more [recent paper](https://openreview.net/forum?id=Fkckkr3ya8) investigating the OpenAI GPT models, which are larger and more sophisticated than most transformer models, has again found that these models fail to learn to act in accordance with the principle of compositionality.

What does limitation mean for whether transformers can capture word meaning?

The meaning of a word is closely tied to what it can contribute to the meaning of the compositional whole. The degree of dependence might vary, for example, the meaning of a name such as "Tom", might depend little on the compositionality. For other words such as privatives, e.g. "fake", it is hard to see how to understand their meaning in other ways than as their contribution to the compositional whole. It is important that FAKE in "They paid with fake money, taking the painting with them." has MONEY within its scope. Thus, the argument goes that transformers must in principle be deficient in lexical semantics due to their current inability to learn compositionality.

Another line of argument, however, goes as follows: Transformers compensate for their lack of compositional abilities by excessively attending to the nuances of lexical meaning. For example, a transformer might pick up that whatever money refers to, it is the kind of thing that is often faked. While we are able to resort to compositional rules to make out the meaning of a sentence, the model has to resort to what information it can gleam about the statistics of the words making up their sentences. Of course, transformer models do not operate on mere bags of words, in all standard versions they have access to positional information and appear able to infer [grammatical relations](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00349/96482/A-Primer-in-BERTology-What-We-Know-About-How-BERT), but the relations between words might serve as the crucial crutch.

Transformers are deficient in lexical semantics and transformers are hyper-attentive to lexical semantics. This statement is no contradiction, because word meaning has multiple aspects and can be processed in multiple ways. Investigating lexical semantics in transformers requires awareness of their shortcomings with regard to compositionality as well the compensation mechanisms they might employ. Given all the challenges of exploring how transformers treat word meaning --- the problem of sub-word tokenization, accounting for contextualisation, etc.  --- this is no trifle.



### Footnotes

[^1]: The definitions of compositionality differ in detail. Within linguistics, one version goes as follows: The meaning of the whole is a function of the meaning of its parts (as structured by syntax). This is a good guiding gloss for linguistics, many papers investigating transformers, however, use something close to what I suggest above.
