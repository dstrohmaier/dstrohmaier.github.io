---
layout: post
title:  "Working with Word Senses"
date:   2020-02-20 11:57:13 +0100
categories: NLP
---

I would rather not commit to a theory of word senses or concepts, since I am all too aware of the philosophical-linguistic-cognitive minefield that surrounds this issue. But within natural language processing (NLP) I work on word sense disambiguation (WSD) and one might reasonably expect me to explain on what kind of theory my research relies.

Like other researchers, I am testing my work against data labelled using what James Pustejovsky (1995) has called sense enumeration lexicons. For the word "bank" the list should at least include one entry for "credit institute" and one for "river bank. Typically, the list is provided by WordNet (Fellbaum 1998) or some dictionary. I have little control over that, because my work has to be comparable with that of other researchers. There are well-known issues with this approach. Primarily there are a number of prominent complaints about using WordNet as a sense enumeration lexicon, which wasn't originally designed for this purpose.

One particularly well-known issue is that the synsets and lemmas of WordNet are too fine-grained for most purposes (Ide & Wilks 2007). Do you really need seven senses for the verb "ask"? Consequently, more coarse-grained versions have been proposed (e.g. Mihalcea & Moldovan 2001; Agirre & Lacalle 2003), but that only treats the symptom. The enumerative approach struggles with combining varying grains and systematic connections.

You might want to vary the grain of your sense-distinctions depending on the circumstances while maintaining a systematic ontology such as the one encoded in WordNet. In one context, it might be enough to distinguish a river mouth from the mouth of all animals taking in food through a single dedicated opening. For other purposes, it might be more useful to distinguish the sense of mouth restricted to a human-like mouth from that applying to the mouth of an earthworm. We want to enable such variation in grain while allowing for logical inferences. I don't know of a good way to achieve that, although Pustejovsky's (1995) generative lexicon approach goes some way in that direction.

Having mentioned enumeration lexicons as one approach to word senses, I should mention word embedding as another tool I am using on a daily basis. Embeddings are dense vector representation created by the training of neural networks. Hence, they are not a theory of word senses, but a representation. While word embeddings are a broad class of sense representations, the way the networks are trained usually reveals an underlying theory about word senses. The most influential types of word embeddings (e.g. Mikolov et al. 2013a; Devlin et al. 2019) are based on the distributional hypothesis, i.e. the assumption that word meaning is largely differentiated by other words in the neighbourhood (Harris 1970; first 1954). This works as a decent approximation, though I doubt many in researchers in NLP consider it the full story; I certainly don't.

A major shortcoming of word embeddings is their lack of human interpretability. There is no straightforward way to draw deductive inferences from them. They famously allow for some sort of analogic reasoning (Mikolov et al. 2013b; Levy & Goldberg 2014), but that is quite clearly a different matter than the kind of ontology encoded in WordNet. Embeddings might allow me to infer that Paris is to France like London is to the UK, but not by providing an explicit connection to the concept of capital.[0] As a philosopher with a taste for deductive reasoning, this shortcoming particularly irks me. It is, thus, no surprise that in my NLP research I have an interest in getting from embeddings to another representation of senses.

If I had to select a representation that accurately captures the nature of word senses, neither list-entries nor dense vectors would be my choice.[1] Be that as it may, what matters in my CS research is what I can build or proof. As I said in the beginning, I don't want to defend a theory of word senses, but provide a few pointers regarding the conceptions of word senses with which I work. Whatever my further opinions are, my current research relies on sense enumeration lexicons and embeddings.


---
### Footnotes
[0] It might be possible to construct a connection to the vector for capital, but it will be a fragile connection.

[1] As it happens, I am intrigued by the idea of functional representations, as people in my department have proposed (Emerson & Copestake 2016).


### References

Agirre, E., & Lacalle, O. L. D. (2003). Clustering Wordnet Word Senses. Proceedings of the Conference on Recent Advances on Natural Language (RANLP’03).

Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. ArXiv:1810.04805 [Cs]. http://arxiv.org/abs/1810.04805

Emerson, G., & Copestake, A. (2016). Functional Distributional Semantics. Proceedings of the 1st Workshop on Representation Learning for NLP, 40–52. https://doi.org/10.18653/v1/W16-1605

Fellbaum, C. (Ed.). (1998). Wordnet: An Electronic Lexical Database. MIT Press.

Harris, Z. S. (1970; first 1954). Distributional Structure. In Z. S. Harris (Ed.), Papers in Structural and Transformational Linguistics (pp. 775–794). Springer Netherlands. https://doi.org/10.1007/978-94-017-6059-1_36

Ide, N., & Wilks, Y. (2007). Making Sense about Sense. In E. Agirre & P. Edmonds (Eds.), Word Sense Disambiguation: Algorithms and Applications (pp. 47–73). Springer.

Levy, O., & Goldberg, Y. (2014). Linguistic Regularities in Sparse and Explicit Word Representations. Proceedings of the Eighteenth Conference on Computational Natural Language Learning, 171–180. https://doi.org/10.3115/v1/W14-1618

Mihalcea, R., & Moldovan, D. I. (2001). EZ.WordNet: Principles for Automatic Generation of a Coarse Grained WordNet. FLAIRS Conference.

Mikolov, T., Sutskever, I., Chen, K., Corrado, G., & Dean, J. (2013a). Distributed Representations of Words and Phrases and Their Compositionality. Proceedings of the 26th International Conference on Neural Information Processing Systems - Volume 2, 3111–3119. http://dl.acm.org/citation.cfm?id=2999792.2999959

Mikolov, T., Yih, W., & Zweig, G. (2013b). Linguistic Regularities in Continuous Space Word Representations. Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, 746–751. https://www.aclweb.org/anthology/N13-1090

Pustejovsky, J. (1995). The Generative Lexicon. MIT Press.
