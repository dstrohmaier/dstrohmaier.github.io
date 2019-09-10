---
layout: post
title:  "A Different Map of the Tractatus"
date:   2019-09-02 17:57:13 +0000
categories: NLPhilosophy
---

Over the years there have been a number of visualisations of Wittgenstein's Tractatus Logico-Philosophicus. Most of them have made use of the tree structure Wittgenstein imposed on his text. With today's web-technologies, [these](https://homepage.univie.ac.at/noichlm94/posts/tractatus/) [representations](https://pbellon.github.io/tractatus-tree/) of the text can be excellent. In this post, however, I present a map of the Tractatus unlike any of these previous experiments. 

![3D GIF of Tractatus statements](/assets/images/visualisation_tractatus.gif)

The picture shows me playing with an interactive representation of all statements in the Tractatus, each represented by an embeddings. Embeddings are vector-representations of meaning. Usually they are created on the level of tokens, but there are ways of aggregating them to higher levels. I took the relatively easy path of averaging the embeddings for all the tokens in the statements.[0] The result should be a map of how strongly the statements are semantically related.[1] The closer two vectors are, the closer the statements are in their meaning, at least that is the idea.

There are a variety of ways to create embeddings, typically making use of artifical neural networks. The Word2vec library made embeddings popular, but I wanted to explore something more cutting-edge for this visualisation. So I used a pretrained-BERT model to create the vectors. BERT is based on the now fashionable transformer networks (see [here for a technical explanation](http://nlp.seas.harvard.edu/2018/04/03/attention.html)).

The embeddings are just vectors, to make them visually accessible I use the online [projector tool](http://projector.tensorflow.org/). For this purpose, the hundreds of dimension of the embeddings are reduced to three. Information included in the embeddings is lost in this process. Hence, what you see is only an approximation of what the embeddings capture.

In contrast to a visualiation using the tree structure created by Wittgenstein, this approach can reveal something we haven't been aware of. It can suggest connections no one has noticed before. I am not sure it does, but that it has the potential is exhilarating. There are a few ways one could test the quality of the embeddings and I intend to explore them in a future post.

The code is available on [github](https://github.com/dstrohmaier/tractatus_embeddings/), including the embeddings in the TSV format needed for the projector tool.[2] Just go on [the website](http://projector.tensorflow.org/), upload the two TSV-files and you can explore the tractatus in 3D.

---
[0] It is actually a bit trickier than that, because I use information from multiple layers in the neural network to create the token-embeddings.

[1] While embeddings capture some aspect of the semantic content of a token, they do not represent it entirely faithfully. As so much in machine learning, they are best seen as an approximation that works for certain purposes. 

[2] I avoided putting the text of the Tractatus online, since I am not sure what the copyright situation is. If you want it, email me.