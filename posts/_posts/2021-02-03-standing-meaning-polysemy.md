---
layout: post
title:  "Notes on Standing and Occasion Meaning"
date:   2021-02-03 15:37:13 +0000
category: posts
---


Lexical semantics investigates the meaning of words, but one might distinguish multiple levels of meaning for a single word. For example, the word "semantics" might have a very broad and a very narrow meaning at the same time, depending on how much contextual information we take into account. The relative dependence on contextual information created lexical levels of meaning. In this post, I will share a few thoughts on the simplest distinction of lexical levels of meaning, that is the distinction between standing and occasion meaning of a word. The main insight will be that the distinction faces a problem with regard to homonyms and that current NLP approaches can be interpreted as implementing a specific solution to this problem.

## Standing and Occasion Meaning

Standing meaning is the meaning of a word in general, while occasion meaning is word meaning for a specific occasion. By drawing this line, we split word meaning on the one side into a generic core without contextual dependence, and on the other into a specification that depends on the linguistic context. To give an example, "student" might broadly denote learners, while in a specific context the denotation of the word might be narrowed down to the registered participants of a class. The one is the standing and the other is the occasion meaning.

The distinction between standing and occasion meaning has a long history, going back at least to the late 19th century work of the linguist Hermann Paul. Paul distinguished between _usueller_ and _okkasioneller Bedeutung_ (usual/standing and occasional meaning) (see Geeraerts 2010: 14-16).[0] It is perhaps the most frequent way of distinguishing levels of meaning for a word.

Faced with this distinction, we might wonder what exactly instantiates two types of meaning? So far, I have generically written about the meaning of a _word_, but we can be more specific. Either the word type or the word tokens could instantiate the two levels of meaning. A relatively intuitive response is to attribute the standing meaning to word types and the occasion meaning to word tokens, as Recanati (2012) does. After all, the standing meaning and the word type are both more abstract and generic, while the occasion meaning and the word token are more concrete and specific. But this response is not without problems, because it commits us to word types having one specific meaning in the absence of any context. In the case of homonyms, such as "bank" the standing meaning becomes unclear.

## The Problem of Homonyms

What is the standing meaning of "bank"? There is arguably not one standing meaning for this string which covers all uses. Prima facie, "bank" in the sense of financial institute does not share a meaning with "bank" in the sense of edge of a watercourse. In such cases, we have multiple options:

1. Assign the word types a single disjunctive meaning.
2. Distinguish two or more standing meanings for the word type.
3. Distinguish two or more homonymous word types each with their own standing meaning.
4. Deny the existence of a standing meaning and only postulate occasion meaning for the word type in question.

The first option sticks with word types having a single standing meaning and just renders it disjunct. We would think of "bank" as meaning _financial-institute-or-edge-of-watercourse_. But when words develop many meanings, then this standing meaning will become unwieldy and increasingly empty. "Bank" can also refer to buildings housing financial institutes and to databanks, and to piggy banks, etc. The resulting disjunct will be incredibly broad.

On the second option we just accept that a word type, that is one abstract word string, can have multiple standing meanings and the context will then pick out one of them for further specification. In response, one might ask whether "bank" also has the standing meaning of the German "Bank" which means _bench_. If we individuate words purely as strings that instantiate meaning, it would seem to be the case, but that might be at odds with an understanding of words that makes them specific to languages.

Recanati chooses the third option and individuates word types in terms of their standing meaning, but I don't find it an obvious choice. Individuating word types in terms of standing meaning creates the challenge of changes in word type meaning over time. We might want to say that a word type has undergone (standing) meaning change, but this assertion would become incorrect if word types are individuated in terms of their meaning. Their meaning would become an individuating characteristic, requiring us to postulate a new word whenever we detect a different standing meaning. While hat does not rule out the third option, it makes it less appealing. 

The fourth option abandons the distinction between standing and occasion meaning, at least for words types that are homonyms. This move throws into doubt the whole project of having general levels of word meaning. After all, the standing and occasion meaning distinction was supposed to be the simplest possible differentiation between levels.

The fifth solution would be to diverge from Recanati even further and assign both standing and occasion meaning to word tokens rather than word types. It seems a bit odd, however, to claim that words have a meaning only relative to a specific use.

I'll not argue at length for one of these options here -- my favourite is the second option, but the differences can be quite subtle -- instead I'll end this post by considering the problem from the perspective of contemporary NLP.

## A Few Remarks from NLP

Some neural architectures, prominently transformer architectures, represent lexical meaning at multiple points. Specifically, they represent meaning at an initial embedding layer and at later points of encoding. As a result, non-contextualised and multiple sets of contextualised word representations can be extracted from e.g. BERT models (Devlin et al. 2019).[1] We could then go on to identify the non-contextualised embeddings with the standing meaning and the final contextualised embeddings with the standing meaning. This interpretation is sketched in Emerson (2020).

Of these models, we can then ask how they deal with the problem of homonyms. BERT and similar approaches effectively implement the first option and assign a disjunct standing meaning. The initial embedding for "bank" does not differ for the two homonyms. That could be changed, of course. We could preprocess the data with a coarse-grained word sense disambiguation (WSD) system and create different initial embeddings based on the results (cf. Trask et al. 2015). 

If you have a preference for either the second option, as I do, or Recanati's option of individuating word types in terms of standing meanings, then you would not be satisfied of equating the initial embeddings with standing meanings. The introduction of coarse-grained WSD would fit these approaches much better. 


---
### Footnotes

[0] Another important source for this distinction is Quine (2013), who distinguished occasion from standing sentences. But Quine's approach is much more behaviourist.

[1] I neglect here that BERT uses sub-tokenization. 


---
### References

Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. ArXiv:1810.04805 [Cs]. [http://arxiv.org/abs/1810.04805](http://arxiv.org/abs/1810.04805)


Emerson, G. (2020). What are the Goals of Distributional Semantics? _Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics_, 7436–7453. [https://doi.org/10.18653/v1/2020.acl-main.663](https://doi.org/10.18653/v1/2020.acl-main.663)

Geeraerts, D. (2010). _Theories of Lexical Semantics_. Oxford University Press.

Recanati, F. (2012). Compositionality, Flexibility, And Context Dependence. In _The Oxford Handbook of Compositionality_ (pp. 175–191). Oxford University Press. [https://doi.org/10.1093/oxfordhb/9780199541072.013.0008](https://doi.org/10.1093/oxfordhb/9780199541072.013.0008)

Trask, A., Michalak, P., & Liu, J. (2015). sense2vec—A Fast and Accurate Method for Word Sense Disambiguation In Neural Word Embeddings. ArXiv:1511.06388 [Cs]. [http://arxiv.org/abs/1511.06388](http://arxiv.org/abs/1511.06388)

Quine, W. V. O. (2013[1960]). _Word and Object_ (new edition). MIT Press.
