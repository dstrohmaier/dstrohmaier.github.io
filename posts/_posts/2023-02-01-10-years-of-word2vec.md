---
layout: post
title:  "10 Years of word2vec: Motivations and Success"
date:   2023-02-10 13:32:13 +0000
category: posts
---

Once in a while, a publication resets the literature. There is a clear before and after them, as researchers cite the new publications, while neglecting the earlier literature upon which they built. The _word2vec_ papers by Mikolov et al., which have been published about a decade ago in 2013, are an instance of this.[^1] As can happen with such papers, the original motivations became overshadowed by later applications.

In this post I will lay out those motivations were, how the embedding literature built upon them, and what made word2vec such an outstanding success.

I will not go into the details of the word2vec algorithms, since numerous blog posts have been written on this topic already. If you need a refresher, the following might be worth a look:
- [Word2Vec Resources](http://mccormickml.com/2016/04/27/word2vec-resources/) (by Chris McCormick)
- [king - man + woman is queen; but why?](https://p.migdal.pl/2017/01/06/king-man-woman-queen-why.html/) (by Piotr Migdał)
- [The Illustrated word2vec](https://jalammar.github.io/illustrated-word2vec/) (by Jay Alammar)


## Why word2vec

Mikolov et al. motivated the word2vec algorithms as fulfilling the following goals:
1. Motivation: Go beyond representing words as atomic units.
2. Motivation: Introduce a way to measure similarity.

The first motivation was strongly associated with the idea of representation learning (cf. Bengio et al. 2013). Back then, the representations were often used by non-neural systems. We used word2vec embeddings with an SVM for sentiment classification during my MPhil studies. But with the progress of neural NLP, Seq2Seq models such as Transformers have become the standard. The representations inside those models are primarily used to explain their behaviour, and rarely taken as the primary object of research.

The second motivation had its source in the linguistic notion of a semantic space, which had been explored by computational linguists and NLP researchers for years prior to word2vec (see Erk 2012). These models had been largely motivated by theories of lexical meaning and attempted to implement them.

## Analogies and Lexical Semantic Properties

Famously, word2vec was able to solve analogy problems, at least some of them.

For example, starting with the embeddings for CAR and DRIVER, one can calculate that for PLANE the analogous concept to DRIVER is that of PILOT. All one had to do was to subtract the vector of CAR from the vector for DRIVE and add the result to the vector of PLANE. The next closest vector would, if it worked, be that for PILOT, i.e.

\\[ \vec{v}\_{plane} + ( \vec{v}\_{driver} - \vec{v}\_{car} ) \approx \vec{v}_{pilot} \\]

We can think of these analogies as capturing as relations, e.g. there is a relation that holds both between CAR and DRIVER as well as PILOT and PLANE.

The embeddings appeared to capture such relations in an intuitively interpretable way. In response, researchers sought to explain how these results came about (e.g. Levy & Goldberg 2014; Arora 2019; Hashimoto 2016), and then improve the linguistic quality of embeddings. Researchers engaged in that second endeavour argued that representing words as simple vectors failed to encode various lexical semantic properties, for example:

* Polysemy: A single vectors does not appear to exhibit the variety of senses a word might carry.
* Vagueness: OLD is a vague concept, and OCTOGENARIAN is not, or at least to a much smaller extent. A vector does not carry a specification of the vagueness in an obvious manner.
* Taxonomical hierarchies: All dogs are mammals, but the vectors are not exhibiting such inclusion relationships.

The claim here is not that embeddings can never be used to detect polysemy or vagueness, e.g. by feeding them into a neural classifier, but that the vectors do not reflect such semantic properties in a straightforward way, similar to the way in which they captured analogies. Highly sophisticated approaches have been proposed, but the resulting models are often hard to train (for a survey and discussion see Emerson 2020).


## Two Perspectives on Embeddings

In its focus on encoding semantic properties, parts of the embedding literature have deviated from the priority ranking of Mikolov et al. While Mikolov et al. referred to "meaningful regularities", what mattered in the first instance was the downstream application. Vectors were not expected to reflect all regularities of word meanings.

Reconsidering Mikolov et al.'s original motivation as well as the literature it spawned, both a perspective emphasising downstream application and one focused on encoding semantic properties can be discerned. I will give one argument for each of the two views:

My argument for the first perspective is that word meanings as cognitive objects in human language users do not exist independently of other practical purposes. Both the word processing in human brains and the vectors we are concerned with have their role within larger computational processes (cf. Gauthier & Ivanova 2018). Encoding linguistic properties, such as taxonomical hierarchy, for their own sake would therefore not reflect human language cognition.

To support the second view, one can argue that human word meanings are general purpose, and that they achieve this status _because_ they exhibit the semantic properties in question, e.g. taxonomical hierarchy or logical entailment. Accordingly, working towards encoding such properties brings us closer to improvements on many downstream tasks.

A problem with the argument for the second view is that the embeddings created to encode semantic properties have found little use so far. For example, region embeddings, that should be able to capture taxonomical hierarchies have not found a purpose in more application-oriented systems yet. By comparison, word2vec embeddings and contextualised embeddings based on ELMo (Peters et al. 2018) and BERT (Devlin et al. 2019) did so very quickly.

A key takeaway is that word2vec was able to reset the literature 10 years ago, because it made progress both in capturing linguistic regularities _and_ in supporting downstream applications. With the exception of contextualised embeddings, such success has not been forthcoming since, despite many attempts. Whoever will find another way to make such combined progress, has a good chance of changing NLP history.

<!-- Following word2vec the general, although not only approach, to creating embeddings has been to use distributional information, i.e. how likely is a word to occur in the context of another. That, however, is certainly not a task which only required information about word meaning. Syntactic regularities obviously play a role. The reverse also holds, not all aspects of word meaning might be well captured by distributional information. -->


- Arora, S., Li, Y., Liang, Y., Ma, T., & Risteski, A. (2019). [A Latent Variable Model Approach to PMI-based Word Embeddings (arXiv:1502.03520; Version 4).](https://doi.org/10.48550/arXiv.1502.03520)

- Bengio, Y., Courville, A. C., & Vincent, P. (2013). [Representation learning: A review and new perspectives.]( https://doi.org/10.1109/TPAMI.2013.50) IEEE Trans. Pattern Anal. Mach. Intell., 35(8), 1798–1828.

- Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.](http://arxiv.org/abs/1810.04805) ArXiv:1810.04805.

- Emerson, G. (2020). [What are the Goals of Distributional Semantics?](https://doi.org/10.18653/v1/2020.acl-main.663) Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 7436–7453.

- Erk, K. (2012). [Vector Space Models of Word Meaning and Phrase Meaning: A Survey.](https://doi.org/10.1002/lnco.362) Language and Linguistics Compass, 6(10), 635–653.

- Gauthier, J., & Ivanova, A. (2018). [Does the brain represent words? An evaluation of brain decoding studies of language understanding (arXiv:1806.00591).](https://doi.org/10.48550/arXiv.1806.00591)

- Hashimoto, T. B., Alvarez-Melis, D., & Jaakkola, T. S. (2016). [Word Embeddings as Metric Recovery in Semantic Spaces.](https://doi.org/10.1162/tacl_a_00098) Transactions of the Association for Computational Linguistics, 4, 273–286.

- Levy, O., & Goldberg, Y. (2014). [Neural word embedding as implicit matrix factorization.](https://proceedings.neurips.cc/paper/2014/file/feab05aa91085b7a8012516bc3533958-Paper.pdf) Proceedings of the 27th International Conference on Neural Information Processing Systems - Volume 2, 2177–2185.

- Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013a). [Efficient Estimation of Word Representations in Vector Space.](http://arxiv.org/abs/1301.3781) ICLR Workshop.

- Mikolov, T., Sutskever, I., Chen, K., Corrado, G., & Dean, J. (2013b). [Distributed Representations of Words and Phrases and Their Compositionality.](http://dl.acm.org/citation.cfm?id=2999792.2999959) Proceedings of the 26th International Conference on Neural Information Processing Systems - Volume 2, 3111–3119.

- Mikolov, T., Yih, W., & Zweig, G. (2013c). [Linguistic Regularities in Continuous Space Word Representations.](https://www.aclweb.org/anthology/N13-1090) Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, 746–751.

- Peters, M., Neumann, M., Iyyer, M., Gardner, M., Clark, C., Lee, K., & Zettlemoyer, L. (2018). [Deep Contextualized Word Representations.](https://doi.org/10.18653/v1/N18-1202) Proceedings of the 2018 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long Papers), 2227–2237.


### Footnotes


[^1]:  On Google scholar, [one of the word2vec papers](https://scholar.google.com/citations?view_op=view_citation&citation_for_view=oBu8kMMAAAAJ:CB2v5VPnA5kC) is cited more than 37000 publications, while [an important source](https://scholar.google.com/citations?view_op=view_citation&hl=en&citation_for_view=mxiO4IkAAAAJ:9yKSN-GCB0IC) of that paper has a mere 1216 citations to its name. Similar disruptions in citation patterns have been used as [a measure of scientific progress](https://www.nature.com/articles/s41586-022-05543-x).
