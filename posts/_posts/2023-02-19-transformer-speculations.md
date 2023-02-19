---
layout: post
title:  "Speculations about Transformers and Compositionality"
date:   2023-02-19 10:08:13 +0000
category: posts
---

<center><em>Warning: Speculative Content. Expect that parts of it will be proven wrong.</em></center>

0. The meaning of natural language sentences is compositional.
   - The meaning of an expression \\( \mathbf{E} \\) syntactically derived from the sub-expressions \\(  \mathbf{E}_1,  \mathbf{E}_2, \dots \\)  is a function of the semantic value of the sub-expressions
   Writing \\( |\mathbf{E}| \\) for the semantic value of the expression \\( \mathbf{E} \\), the compositional thesis is that:  \\( |\mathbf{E}| = f( |\mathbf{E}_1,  \mathbf{E}_2, \dots | ) \\) [^1]
1. Transformers (Vaswani et al. 2017) do not correctly implement the compositional semantics of natural language cognition as found in humans agents.
   - Human cognition includes a dedicated mechanism to derive the meaning of the expression  \\( \mathbf{E} \\) from its sub-expressions compositionally.[^2]
   - There is no dedicated mechanism in transformers to derive the meaning of the overall expression \\( \mathbf{E} \\).
2. Transformers have to compensate for their lack of directly compositional language processing and partially succeed in this.
   - Attention allows the transformers to partially compensate for lacking a compositional mechanism.
   - The compensatory role of attention is part of the explanation why some attention heads reflect syntactic connections (see section 4.2.1 of Rogers et al. 2020).
3. The compensation mechanisms of transformers lead to over-contextualisation of later level token embeddings.
   - The over-contextualisation is a partial explanation why transformer embeddings from earlier levels perform better on lexical semantic tasks (cf. Vulić et a. 2020).
4. Some limitations of transformers will be overcome by using a mechanism that reflects composition more directly.[^3]
   - A mechanism other than attention will be used.

For feedback, comments, and complaints, email me at  <a href="mailto:{{site.email}}">{{ site.email }}</a>. Links to relevant research are appreciated.

### References

- Fine, K. (2007). Semantic Relationism. Blackwell.
- Fodor, J. A., & Lepore, E. (2002). The Compositionality Papers. Oxford University Press, U.S.A.
- Pylkkänen, L. (2020). [Neural basis of basic composition: What we have learned from the red–boat studies and their extensions.](https://doi.org/10.1098/rstb.2019.0299) Philosophical Transactions of the Royal Society B: Biological Sciences, 375(1791), 20190299.
- Rogers, A., Kovaleva, O., & Rumshisky, A. (2020). [A Primer in BERTology: What We Know About How BERT Works.](https://doi.org/10.1162/tacl_a_00349) Transactions of the Association for Computational Linguistics, 8, 842–866.
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). [Attention is All you Need.](https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html) Advances in Neural Information Processing Systems, 30.
- Vulić, I., Ponti, E. M., Litschko, R., Glavaš, G., & Korhonen, A. (2020). [Probing Pretrained Language Models for Lexical Semantics.](https://doi.org/10.18653/v1/2020.emnlp-main.586) Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), 7222–7240.


### Footnotes

[^1]: I am using here the more general formula of Kit Fine's (2007) _Semantic Relationism_. More commonly the sub-expressions are taken to contribute their semantic values in an atomic fashion, i.e. \\( \vert \mathbf{E} \vert = f( \vert \mathbf{E}_1 \vert,  \vert \mathbf{E}_2 \vert, \dots  ) \\)

[^2]: This has, to my knowledge, not been established yet. It has been argued for, in some form, by cognitive scientists such as Fodor & Lepore (2002), but my more optimistic assessment of neural methods is hard to square with these arguments. According to my understanding, empirical evidence from the level of cognitive neuroscience is missing or weak (e.g. Pylkkänen 2020).

[^3]: This claim does not concern whether dealing with compositionality in the absence of a new mechanism is possible, but which development path will be taken due to differences in feasibility.
