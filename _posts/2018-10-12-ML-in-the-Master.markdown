---
layout: post
title:  "ML in the Masters programs"
date:   2018-10-12 18:51:13 +0100
categories: master, ML, CS
---


ML is hot. That much has become clear in slightly more than one week into my MPhil. Not only is there a separate master in machine learning, based at the engineering department, but most students of advanced CS at Cambridge have at least some interest in machine learning. Whatever area you work in, someone will try to put some ML on top. For Natural Language Processing (NLP), my area of focus this term, Cambridge offers a special course of applying ML techniques to the domain.

But even in my course *Overview of NLP*, which mainly introduces computational linguistics, has an ML component. For the practical we are supposed to put together sentiment classifiers and those will presumably draw heavily on ML techniques. It would be interesting to see what happens if I went for a GOFAI-approach for this practical: Hard-code some rules using non-monotonic logic, or something of the sort. First of all it would take more effort, because I would have to identify and learn the relevant methods on my own. Mostly people would wonder whether I didn't get how to use something simple like a support vector machine (SVM)?

ML, inluding neural nets but also random forests, SVM and the like, has become domain-general and that makes it interesting to people. Learning a few simple techniques you can get sensible results in a variety of areas. The appeal is similar to that of Python, which has been compared to a swiss army knife because you can do with it almost anything reasonably well. (It might not be a coincidence that much of ML happens in Python these days.) Of course, if you want to beat the state of the art in your domain you have to increase the specificty again, typically by developing a particular ML architecture further. You want high-perfomance with Python? You have to look into Cython or introduce some other specificity.

From a cognitive science perspective this raises the intriguing question how much (many?) of the human cognitive capacities are domain specific and how much is domain general. There are long standing debates in the literature on intelligence and about the modularity of the mind concerning this issue. (It is certainly no coincidence that Jerry Fodor was not only a major proponent of modularity but also a severe critique of connectionist approaches.) The development of ML as a field might show where exactly we will hit hard constraints of computational tractability with domain-general methods.[0] Already ML approaches illustrate that there is a range of intermediate positions where a general approach is combined with considerable domain-specificity, for example a particular neural network architecture might be suited for NLP tasks but not visual recognition. How far will the neural network approach go and at which point will domain-specific complications overwhelm it?



[0] Another constraint I've ignored here is getting good and sufficient training data for ML methods. For many if not most practical applications of ML that poses the bigger problem. However, it is not clear to me how it relates to the specificity vs. generality issue when it comes to human cognition. You might, for example, propose combining a domain-general neural network architecture with nativism, so that we are basically born with a pre-trained neural net requiring much less training data.