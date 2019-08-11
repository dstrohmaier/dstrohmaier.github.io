---
layout: post
title:  "On the Cost-Functions of ANNs"
date:   2019-08-11 13:57:13 +0100
categories: 
---

Perhaps not surprisingly given my background, I often look at artificial neural networks (ANNs) from the perspective of philosophy of action and decision theory. The cost-functions of ANNs are one feature that captured my attention. Approximatively, one might consider them as guiding the learning process, typically using the backpropagation algorithm. To give an example, a frequently used function is the cross-entry cost, which offers one measure of the divergence between the output of the ANN and the correct label.[0]


Here is one interpretation of the role of cost-functions from the philosophical perspective: They specify the analog of the motivational state of the artifical systems. I say "analog", because it isn't obvious that the systems are full-fledged agents. One way to think about it, is to take the cost-function as specifying what the motivations would be if the system were a complete agent. Given the close formal connection between cost-functions and utility-functions, such an interpretation is tempting. Still, I want to propose another way of looking at things.

In most applications, the role of cost-functions in ANNs is to ensure the direction of fit. The idea is familiar from philosophy of mind/action. Roughly, beliefs should track the world, while desires should lead to interventions in the world. If you believe there is a book in your bag, something went wrong if there isn't. If you want there to be a book in your bag and there isn't, then that doesn't mean that something already went wrong. It only means that, other things being equal, you should put one in there. You should make the world fit to your desire.

My proposal is that the cost-function has the purpose of ensuring that epistemic capacity implemented by the ANN has the correct direction of fit. Say you are building a classifier of pictures, which tells you whether a picture contains a cat. It has a primarily epistemic task. It creates a probability distribution over inputs, a credence function if you connect it in an agential system.. The training is supposed to make the ANN perform well on that task. In other words, it makes it the case[0] that it tracks the world appropriately. If we think of ANNs as function approximators, the cost-function is part of what make it track the actual world (given input from the world).

This proposal faces challenges. Perhaps one should distinguish multiple levels (think of the homuncular functionalism we find in Lycan and Dennett) and at a lower-level the cost-function encodes a motivational state. Especially, weakly realist approaches to mental states, such as Dennett's intentional stance account could support such an interpretation. 

Since this is a blog post, I 'll take the liberty of postponing my response to this and other challenges to another time.

---
Footnotes


[0] For more details see this [site](https://rdipietro.github.io/friendly-intro-to-cross-entropy-loss/). See also [this](https://stats.stackexchange.com/questions/154879/a-list-of-cost-functions-used-in-neural-networks-alongside-applications) stackoverflow post on various cost-functions. Cost-functions are also sometimes called loss-functions.


[1] I am not entirely sure about what kind of "making-it-the-case" relation we have here. Is it an instance of causation or grounding? Does the training cause the network to track the world or does it ground the fact it does track the world? 
