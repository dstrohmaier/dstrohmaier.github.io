---
layout: post
title:  "Groningen Cognitive Modeling Spring School"
date:   2023-04-23 07:45:00 +0000
category: posts
---

I recently had the pleasure to attend the [Groningen Cognitive Modeling Spring School](http://www.cognitive-modeling.com/springschool/). This spring school is an annual event, but I've only recently heard of it and applied soon after. I've been interested in the interpretation of neural network models as cognitive models for a while, and so it was time for deeper engagement with the dedicated cognitive modelling research.

The spring school had different tracks for three cognitive modelling frameworks:
1. [ACT-R](http://act-r.psy.cmu.edu/)
2. [PRIMs](https://www.ai.rug.nl/~niels/prims/index.html)
3. [Nengo](https://www.nengo.ai/)

ACT-R and PRIMs are both classic cognitive frameworks. Writing in ACT-R or PRIMs is similar to writing in a programming language,[^1] but the basic constructs are based on a theory about the human cognitive architecture. Symbolic processing is a key part of these frameworks.

I chose the third track and learned a decent chunk of Nengo, taught by [Terrence Stewart](http://compneuro.uwaterloo.ca/people/terrence-c-stewart.html). In contrast to the two other frameworks, Nengo is a neural network framework. One specifies a neural network in Python, provides it with some input, and let's the neurons compute, but it is not just another competitor to pyTorch, or Tensorflow. Nengo's focus is on _neuro-biologically plausible_ models of neural networks. The neurons are spiking neurons, backpropagation is discouraged, and the time dimension matters. This is not your standard Deep Learning framework.

Learning Nengo perfectly suited my goal to better understand how far the distance between the standard NLP neural models and cognitive models is. A look in the literature suggests, that Deep Learning models have started to partially converge with human cognitive processes ([see my post on this matter](/Transformers-Psychometric/)), but they remain biologically and cognitively implausible in many respects. For example, a standard Transformer model does not take relevantly longer to process a complex sentence than a simple one,[^2] while humans certainly do. Time matters in Nengo in ways that I never had to bother with in pyTorch.

The different nature of Nengo was particularly striking to me due to my background. While I was not the only computer scientist at the spring school, as far as I could tell I was the only one coming from NLP and heavily working with Transformer models. The disciplines of NLP and cognitive modelling have grown apart, despite their shared roots and some valiant research efforts to the contrary (especially the [Workshop on Cognitive Modeling and Computational Linguistics](https://cmclorg.github.io/)). The research I am working on aims to bridge this gap. Working with Nengo made the gap more apparent, and hopefully Nengo will be one tool to overcome it.

## Nengo Resources

If you want to learn more about [Nengo](https://www.nengo.ai/), you can follow these links:

* The [core algorithm](https://www.nengo.ai/nengo/v3.0.0/examples/advanced/nef-algorithm.html) of the Neural Engineering Framework underlying Nengo
* [Technical overview](http://compneuro.uwaterloo.ca/publications/stewart2012d.html) of Nengo

I've also been pointed towards the book "How to Build a Brain" by Chris Eliasmith, who is behind much of the Neural Engineering Framework. So far I haven't had the time to look at it myself.

## References

- Dehghani, M., Gouws, S., Vinyals, O., Uszkoreit, J., & Kaiser, L. (2023, January 23). [Universal Transformers](https://openreview.net/forum?id=HyzdRiR9Y7). International Conference on Learning Representations.

## Footnotes

[^1]: In fact, ACT-R is heavily LISP-based, showing in what era of cognitive science it emerged.


[^2]: Of course, there are non-standard Transformer models for which this claim is not true, e.g. when one introduces dynamic halting as in the Model of Dehghani et al. 2023.
