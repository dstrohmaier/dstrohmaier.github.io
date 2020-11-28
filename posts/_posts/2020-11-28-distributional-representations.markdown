---
layout: post
title:  "Exploring Basic Distributional Representations"
date:   2020-11-28 19:50:13 +0000
category: posts
---

I've recently been reading up on distributional representations, that is representation of meaning that are based on count vectors. They were the exciting technology before neural networks and the embeddings networks create changed the field of NLP. Nowadays we do not count token occurrences, but let Word2Vec or BERT models create representations.

While they have decidedly fallen out of favour, distributional representations are clever pieces of technology and I wanted to get some more experiences with them. So I've put together a Jupyter Notebook that explores key aspects of that technology:
- Creating a count matrix
- Calculating Pointwise Mutual Information
- Calculating similarity scores
- Reducing the dimensionality of the representations

You can see the [notebook on github](https://github.com/dstrohmaier/distributional_representations/blob/master/count_matrix.ipynb)

Of course, my notebook is merely an introduction to some of the most basic techniques. For example, I do not explore incorporating syntactic information. Still, I hope it shows that these by now largely neglected techniques are fascinating application of statistical NLP.
