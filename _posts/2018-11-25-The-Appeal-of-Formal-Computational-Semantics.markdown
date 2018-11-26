---
layout: post
title:  "The Appeal of Formal (Computational) Semantics"
date:   2018-11-25 18:51:13 +0100
categories: Semantics
---

At least among my fellow CS students working in natural language processing (NLP), neural networks are hot and formal semantics is not. While I am very interested in LSTM networks for sequence labelling and the various uses of word embeddings, I also get excited by formal semantics in CS, the very idea of semantic parsing. Turning natural language into statements in some extended version of first-order logic, poses an extraordinary challenge and pulling it off would bring immense payoffs. But at some point you have to learn lambda-calculus and then there is a mention of Prolog. And while Prolog and Backpropagation are in fact of about the same age, one of them is considered an old-fashioned tool for AI and the other state of the art.

Given my background in philosophy, it comes as no surprise that I have a greater affinity to computational semantics than others. After all, formal semantics is a also covered within philosophy. Thus, work in philosophy and computational semantics lies very close, often dealing with the same problems from different directions. The Boxer parser produces representations drawing on Davidsonian ideas about events. But there is more than just an overlap of research that makes computational semantics appealing for me as a philosopher.

I believe that a breakthrough in computational semantics could change philosophy as a discipline. The very idea of semantic parsing, of translating natural language into formal logic, is a promise for a transformation of how we undertake philosophy. Arguments could be clarified with the help of a computer, checked for inconsistency and rigorous proofs derived. Even though not all debates and issues within the philosophical discipline are directly open to such an approach, it could transform large parts of the field. That there is little philosophical interest in developing semantic parsers[0] shows the limits of the discipline - or a greater sense of scepticism than I do.

So much for the direct philosophical interest, but I also consider semantic parsing as a worthy challenge within AI research. Let me just situate semantic parsing in regard to one issue in this field: Moravec's Paradox, which suggests that what is hard for humans is easy for AI and what is easy for humans is hard for AI. More specifically, high-level cognitive tasks such as playing chess and proving theorems turned out to be easier than low-level tasks such as visual discrimination young children handle with ease. But translating ordinary language into a logical form does neither come easy per hand nor has been solved computationally. It is easy-hard nor hard-easy, it appears to be hard-hard. This violation of Moravec's paradox could result from low- and high-level cognition meeting in semantic parsing: It requires sub-conscious language processing as well as high-level cognition producing statements in formal logic. Or one could argue, that semantic parsing comes easy for us after all. Going down a more Fodorian route, one could propose that language understanding constantly involves translating natural language into a formal language (the language of thought) closely resembling first-order logic.

Hopefully, I have given some indication of why formal computational semantics appeals to me. I am currently in the process of learning more about the field's state of the art. From what I can see, the situation is dire compared to hot research areas such as deep learning. The main texts for getting into the topic appear to be the works by [Patrick Blackburn and Johan Bos][blackburnbos].[1] When it comes to semantic parsers, my courses pointed me to the Boxer parser, which is no longer available at its old web-address but can still be downloaded from [Stephen Clark's website][candc-boxer]. There is also the [SEMPRE toolkit][sempre] for training semantic parsers, but I haven't explored it yet. For now, I have more to learn.


---
[0] The SEP mentions computational semantics as part of [computational linguistics][SEP-compling].

[1] [Jurafsky & Martin][jurafsky-martin] as well as the [NLTK-book][nltk-book-semantics] also cover the basics of computational semantics.

[blackburnbos]: http://www.let.rug.nl/bos/comsem/
[SEP-compling]: https://plato.stanford.edu/entries/computational-linguistics/#SemInt
[candc-boxer]: https://sites.google.com/site/stephenclark609/resources
[jurafsky-martin]: https://web.stanford.edu/~jurafsky/slp3/
[nltk-book-semantics]: https://www.nltk.org/book/ch10.html
[sempre]: https://nlp.stanford.edu/software/sempre/