---
layout: post
title:  "Transformers and the Brain: Literature Notes"
date:   2022-08-01 16:00:13 +0000
category: posts
---

## Introduction

Neural networks with Transformer-architecture remain the state of the art in natural language processing (NLP). For many tasks the first approach is to throw some version of the BERT model ([Devlin et al. 2019](http://arxiv.org/abs/1810.04805)) at it -- a practice I've participated in (Yuan et al. [2021a](https://doi.org/10.18653/v1/2021.semeval-1.74), [2021b](https://doi.org/10.18653/v1/2021.semeval-1.96)). The success of the Transformer-architecture has raised the question how such models compare to language processing in the human brain and a literature is growing around this question. In this post, I collect notes on selected papers which try to map representation in Transformer models to brain data. First I'll list a few conclusions from the literature and then move through the selected papers to substantiate the conclusions and make further points.

The main conclusions are:
1. The Transformer-architecture is better than previous RNN architectures. That is, the mapping of Transformer models to brain data allows to predict more of it than if one uses an RNN architecture, typically LSTMs or GRU networks.
2. Word prediction performance matters, but is not everything. The capacity for predicting the next word given an incomplete sequence does not explain all that is special about Transformers.
3. We do not know why the Transformer-architecture performs so well, but semantics might play a role.
4. We need better brain data.

![Picture of a Talking Head](/assets/images/talking_head.jpg)

## Human Sentence Processing: Recurrence or Attention?

[This paper by Merkx and Frank (2021)](https://doi.org/10.18653/v1/2021.cmcl-1.2) explicitly compares GRU-RNN to Transformer models. They implement these models themselves and make them comparable, e.g. the total number of parameters are relatively close. The models are trained on the next-word prediction task. They are evaluated on 
* self-paced reading (SPR)
* eye-tracking (ET),
* and electroencephalography (EEG) data.

The top-line result is that even controlling for performance as a language model, i.e. being able to predict word tokens, Transformer models tend to do better, specifically on the SPR and EEG datasets.[0] Something about the architecture other than its ability to capture statistical information about word distributions appears to make it especially well-suited for predicting brain performance.

The authors show themselves surprised by the superior performance of the Transformer-architecture, because they "considered the Transformer's unlimited memory and access to past inputs implausible given current theories on[sic] human language processing". (p. 18). While the author are not giving up this view and therefore remain more sceptical than the authors of other papers I'll mention, they consider the possibility that Transformers capture something about human language cognition. Specifically, they entertain that the attention-mechanism resembles cue-based retrieval, but since they do not provide much details on this hypothesis and I do not feel confident evaluating it.


## Brains and Algorithms Partially Converge in Natural Language Processing

[Caucheteux and King (2021)](https://doi.org/10.1038/s42003-022-03036-1) look at Transformer models and ask how the performance of such models on a word prediction task[1] and predicting brain measurement relate. The key findings are:
1. Performance on predicting words strongly correlates with predicting brain scores.
2. The relationship breaks down at the upper end of next-word prediction performance, that is the best models the authors have trained for word prediction do somewhat worse predicting brain scores. This suggests that Transformer models start to overfit to the word-prediction task to the detriment of being able to predict brain measurements.

## Different Kinds of Cognitive Plausibility: Why Are Transformers Better than RNNs at Predicting N400 Amplitude?

Similarly to Merkx and Frank, [Michaelov et al. (2021)](http://arxiv.org/abs/2107.09648) compare RNNs and Transformer models in how well they can predict brain data, in this case the N400 amplitude (EEG study). They used an already existing LSTM model and GPT-2. In contrast to the experiments by Merkx and Frank, the models differ in many ways other than the difference between RNN and Transformer, e.g. vocabulary size and number of parameters. 

The paper also shows that the Transformer model does better at predicting the human brain data than its RNN competitor. Additional experiments suggest that part of the reason GPT-2 does better is that the cosine similarity feeds more into the surprisal of the model. Taking cosine similarity as a measure of semantic similarity, the authors hypothesize that 'bag-of-words' semantic activation may be part of the neurocognitive system that is measured by the N400 amplitude. But this claim is again to be considered speculative.


## The Neural Architecture of Language: Integrative Modeling Converges on Predictive Processing

This paper by [Schrimpf et al. (2021)](https://doi.org/10.1073/pnas.2105646118) offers one of the most encompassing comparisons across model architectures and datasets. Without going into all the details, GPT-2 stands out as the best model.

The authors replicate the finding that performance on next-word prediction predicts performance on predicting brain measurements. Importantly, the authors compare the next-word prediction task with tasks from the GLUE benchmark and find that these do not predict brain scores.

The paper also test whether the model architecture matters by computing brain scores for models with random weights.[2] The authors show that even under such conditions some models achieved noteworthy correlation. The Transformer architecture alone seems to do some of the work.

The paper is perhaps the most optimistic one when it comes to ability to Transformers to predict brain data. On some datasets, the authors come to the conclusion that Transformer models reach noise ceiling, i.e. that the model does as good as possible. One dataset, however, remains very challenging: The Blank 2014 dataset consists of fMRI measurement where the stimuli are auditorily presented stories. Both the larger narrative context of stories and the auditory transmission stand out.[3]

The authors on this paper suggest a convergence between neural model in NLP and cognitive science, since (next-)word prediction is a key task in NLP and predictive processing holds increasing sway in cognitive science. While the authors comparison with the GLUE tasks is suggestive in this regard, I am not yet sold that we see a proper convergence. The tasks humans did might be biased towards the next-word prediction (with perhaps the exception of Blank (2014), where the models did worst). Furthermore, I would not be surprised if the data from the GLUE benchmark are not as reliable as those for next-word prediction since they rely on challenging annotation by experts, hence the network might start to model noise to a great extend.

Be that as it may, a convergence on prediction would not explain why the Transformer-architecture performs so well on both standard NLP tasks and predicting cognitive measures. LSTMs have also been trained on next-word prediction but do not perform as well. To explain the role of the Transformer-architecture, the authors point (amongst other things) towards the role of smoothed multi-scale processing and propose that this might capture something about language structure, but this discussion is merely suggestive.

Coming from NLP rather than neuro-science, this paper also made clear to me that we need better brain data. The noise ceilings estimated by the authors, that is their estimate for how well brain measurements can be predicted in general, are rather low. Accordingly, much of the brain measurements is treated as individualised noise. The authors suggest that such a low ceiling might be due to language processing occuring on high level of cognition where the brain processing might not be stimulus-driven but top-down. As a result, there might just not be one pattern across individuals to predict. That seems speculative to me and better measurement might help raise the ceilings and thereby 


## Conclusion

I've already listed above the conclusions I've drawn from this emerging literature. The papers indicate a clear direction: Transformer models do well at predicting brain measurements, usually better than RNNs, and the architecture plays a role. Why they are doing better remains unclear, with multiple hypotheses being considered. It is intriguing that both the hypothesis by Merkx and Frank (cue-based retrieval) and Michaelov et al. ('bag-of-words' semantic activation) have a semantic tendency, i.e. Transformers are taken to do better because they capture something about semantic processing in the brain. But these discussions remain mostly suggestive, with the experiment by Michaelov et al. concerning the predictive power of cosine distance being the strongest piece of evidence, as far as I can tell, and that is not paricularly strong evidence since the cosine distance doesn't necessarily just concern seamntics. Without a better understanding of language processing in the brain, it might prove difficult to reconstruct why the Transformer-architecture performs so well. Even worse, without better understanding of the human brain, it will become increasingly difficult to compare neural architectures in this way. 

---
### Footnotes

[0] I don't understand why this literature is so averse to publishing tables. Graphs are good, but being able to check against a table of data provides a way to test whether one has truly understood what is going on.

[1] From the paper, it is not entirely clear to me whether the next word or a randomly masked word has to be predicted.

[2] There is still a linear model trained on top of the randomly initialised models.

[3] The Futrell 2018 dataset used by the authors is also story-based and the Transformer-model does better at predicting it, but it consists of self-paced reading data instead of brain measurements.

---
### References

* Blank, I., Kanwisher, N., & Fedorenko, E. (2014). [A functional dissociation between language and multiple-demand systems revealed in patterns of BOLD signal fluctuations](https://doi.org/10.1152/jn.00884.2013). Journal of Neurophysiology, 112(5), 1105–1118. 
* Caucheteux, C., & King, J.-R. (2022). [Brains and algorithms partially converge in natural language processing](https://doi.org/10.1038/s42003-022-03036-1). Communications Biology, 5(1), 1–10. 
* Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](http://arxiv.org/abs/1810.04805). ArXiv:1810.04805 [Cs]. 
* Futrell, R., Gibson, E., Tily, H. J., Blank, I., Vishnevetsky, A., Piantadosi, S., & Fedorenko, E. (2018, May). [The Natural Stories Corpus](https://aclanthology.org/L18-1012). Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018). 
* Merkx, D., & Frank, S. L. (2021). [Human Sentence Processing: Recurrence or Attention?](https://doi.org/10.18653/v1/2021.cmcl-1.2) Proceedings of the Workshop on Cognitive Modeling and Computational Linguistics, 12–22. 
* Michaelov, J. A., Bardolph, M. D., Coulson, S., & Bergen, B. K. (2021). [Different kinds of cognitive plausibility: Why are transformers better than RNNs at predicting N400 amplitude?](http://arxiv.org/abs/2107.09648) ArXiv:2107.09648 [Cs]. 
* Schrimpf, M., Blank, I. A., Tuckute, G., Kauf, C., Hosseini, E. A., Kanwisher, N., Tenenbaum, J. B., & Fedorenko, E. (2021). [The neural architecture of language: Integrative modeling converges on predictive processing](https://doi.org/10.1073/pnas.2105646118). Proceedings of the National Academy of Sciences, 118(45), e2105646118.
* Yuan, Z., Tyen, G., & Strohmaier, D. (2021a). [Cambridge at SemEval-2021 Task 1: An Ensemble of Feature-Based and Neural Models for Lexical Complexity Prediction](https://doi.org/10.18653/v1/2021.semeval-1.74). Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 590–597. 
* Yuan, Z., & Strohmaier, D. (2021b). [Cambridge at SemEval-2021 Task 2: Neural WiC-Model with Data Augmentation and Exploration of Representation](https://doi.org/10.18653/v1/2021.semeval-1.96). Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 730–737. 
