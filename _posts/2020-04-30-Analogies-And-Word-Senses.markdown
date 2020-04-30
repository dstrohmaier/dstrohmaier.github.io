---
layout: post
title:  "Analogies and Word Senses"
date:   2020-04-30 11:00:13 +0000
categories: Word_Senses
---

For my most recent lockdown reading, I've turned to a classic: W.V.O. Quine's _Word & Object_. Expect a few postings on this book. My perspective is that of a philosopher working in NLP, specifically word sense disambiguation. 

In chapter 1 §4, Quine distinguishes different ways of learning words, or more specifically learning how to use words. Quine distinguishes three ways of learning words:

1. Learning words in isolation (as a one-word sentences such as "Ouch!")
2. Learning contextually (sometimes unavoidable, for example in the case of "sake")
3. Learning by description (an especially significant form of learning contextually)

What caught my fancy is Quine's discussion of learning by description, which he illustrates with the case of "microbes". He suggests that the intelligibility of such descriptions relies on analogy (more specifically extrapolation as a form of analogy). As Quine writes, "microbes are supposed to compare in size to motes of dust as these do to the bees" (p. 13). Analogies, thus, have a prominent place in making word senses intelligible.[0]

As it happens, analogies also play an important part in the recent history of word senses in NLP. It has been shown that analogies such as "Tokyo" is to "Japan" as "Paris" is to "France" can be derived from word embeddings (cf. Mikolov et al. 2013). The analogy task is an ongoing challenge for word embeddings; a way to evaluate them without a more complicated downstream system.[1]

The prominence of analogies in these two areas raised for me the question whether analogies shed a special light on word senses. I propose that analogies are one of the simplest intelligible operations in the space of lexical meaning. In the case of word embeddings, we are concerned with a literal operation in vector space. The intelligible nature of this operation allows learning to take place, that is to acquire understanding about a new word sense, that is what Quine is concerned with. In the case of the analogy task for word embeddings, the representation is instead tested against a pre-existing understanding.

Despite these connections between Quine and the word embedding literature, there remains a major difference. Quine's example for an analogy occurs along an intelligible domain. "Microbes" are to "motes of dust" as "motes of dust" are to "bees" along the dimension of size. If one instead considered the dimension of being an organism, the pair of "microbes" and "dust motes" would be ordered wrongly. The dimensions of word embeddings afford no such interpretation. NLP researchers are concerned with a more generic and simpler operation than Quine. This simpler operation suits the purposes of word embeddings better than the human learning in which Quine is interested. What I would like to know is how we get from one to the other.


---
## Footnotes
[0] I'm going beyond Quine here by writing of word senses. He famously denied the determinacy of meaning in _Word & Object_.

[1] See [the ACL wiki](https://aclweb.org/aclwiki/Analogy_(State_of_the_art)) for more information on this task.

---
## References

Mikolov, T., Yih, W., & Zweig, G. (2013). "Linguistic Regularities in Continuous Space Word Representations". _Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies_, 746–751. https://www.aclweb.org/anthology/N13-1090

Quine, Willard Van Orman (2013 [1960]). _Word and Object_. Edition. MIT Press.
