---
layout: post
title:  "Transformer Models Do Not Just Learn Surface Statistics"
date:   2023-03-13 15:08:00 +0000
category: posts
---

A common criticism of Transformer models, such as [ChatGPT](https://openai.com/blog/chatgpt/), [BERT](https://arxiv.org/abs/1810.04805), and [Bard](https://blog.google/technology/ai/bard-google-ai-search-updates/), is that they only learn surface statistics. According to this criticism, the predictions by transformers are superficial, because they do not represent the underlying state. In the case of language, the models would only capture general co-occurrence, on which transformer LLMS are typically trained, but neither the underlying hierarchical nature of language nor anything about the states in the world.

Evidence by now strongly suggests that this absolute criticism is wrong. In the following, I list the papers providing the evidence:


## Board games

Transformer models learn states of board games (Chess, Othello) when modelling sequences. This evidence is very convincing in showing that Transformer models are in principle able to recover more than surface statistics.
- Toshniwal et al. 2022.
- Li et al. 2023

The paper by Li et al. is especially convincing, since they test the role of the state representation using interventions.


## Hierarchical Syntax

The states of Transformer language model reflect syntax, including a hierarchical structure which is not obvious from the surface of language strings:
- Lin et al. 2019
- Tenney et al. 2019
- Rogers et al. 2020: 843-844


## Layer-Wise Operations

Some layer-wise operations in Transformer models appear to reflect human interpretable concepts. That these operations at least appear associated with meaningful concepts, suggests that they do not just recover meaningless surface statistics:
- Geva et al. 2022

(This piece of evidence is perhaps more preliminary than the others.)


## Correlations with Psychometric data

Transformer language models appear to have some correlation with psychometric data, including human brain states. Presumably human cognition reflects an underlying world state when processing language:
- Wilcox et al. 2020
- Merkx & Frank 2021
- Michaelov et al. 2021
- Oh et al. 2021
- Schrimpf et al. 2021
- Caucheteux et al. 2022
- Caucheteux & King 2022


## Conclusion

The evidence presented in these paper supports a role for representation of an underlying state. At this point, I consider the statement "Transformer models only learn surface statistics" to be probably wrong. (My subjective credence that they learn something about the underlying states is around 90%.)

I have not presented here evidence concerning the shortcomings of Transformer models. Such shortcomings exist. Specifically, the evidence I have pointed towards does not rule out that Transformer models are overrelient on surface statistics (for such a suggestion, see also Rogers et al. 2020: 843-844) and fail to model _some_ aspects of the underlying state. The presented evidences also does not show that Transformer models fully capture compositionality, [which I personally doubt they do](/transformer-speculations/), or that they can fully grasp meaning in the absence of non-textual data.


## References
- Caucheteux, C., Gramfort, A., & King, J.-R. (2022). [Deep language algorithms predict semantic comprehension from brain activity.](https://doi.org/10.1038/s41598-022-20460-9) Scientific Reports, 12(1), Article 1.
- Caucheteux, C., & King, J.-R. (2022). [Brains and algorithms partially converge in natural language processing.](https://doi.org/10.1038/s42003-022-03036-1) Communications Biology, 5(1), Article 1.
- Geva, M., Caciularu, A., Wang, K., & Goldberg, Y. (2022). [Transformer Feed-Forward Layers Build Predictions by Promoting Concepts in the Vocabulary Space.](https://aclanthology.org/2022.emnlp-main.3) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, 30–45.
- Merkx, D., & Frank, S. L. (2021). [Human Sentence Processing: Recurrence or Attention?](https://doi.org/10.18653/v1/2021.cmcl-1.2) Proceedings of the Workshop on Cognitive Modeling and Computational Linguistics, 12–22.
- Li, K., Hopkins, A. K., Bau, D., Viégas, F., Pfister, H., & Wattenberg, M. (2023). [Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task](https://doi.org/10.48550/arXiv.2210.13382) (arXiv:2210.13382). arXiv.
- Lin, Y., Tan, Y. C., & Frank, R. (2019). Open Sesame: Getting inside BERT’s Linguistic Knowledge. Proceedings of the 2019 ACL Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks for NLP, 241–253. https://doi.org/10.18653/v1/W19-4825
- Michaelov, J. A., Bardolph, M. D., Coulson, S., & Bergen, B. K. (2021). [Different kinds of cognitive plausibility: Why are transformers better than RNNs at predicting N400 amplitude?](http://arxiv.org/abs/2107.09648) ArXiv:2107.09648 [Cs].
- Oh, B.-D., Clark, C., & Schuler, W. (2021). [Surprisal Estimators for Human Reading Times Need Character Models.](https://doi.org/10.18653/v1/2021.acl-long.290) Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 3746–3757.
- Rogers, A., Kovaleva, O., & Rumshisky, A. (2020). [A Primer in BERTology: What We Know About How BERT Works.](https://doi.org/10.1162/tacl_a_00349) Transactions of the Association for Computational Linguistics, 8, 842–866.
- Schrimpf, M., Blank, I. A., Tuckute, G., Kauf, C., Hosseini, E. A., Kanwisher, N., Tenenbaum, J. B., & Fedorenko, E. (2021). [The neural architecture of language: Integrative modeling converges on predictive processing.](https://doi.org/10.1073/pnas.2105646118) Proceedings of the National Academy of Sciences, 118(45), e2105646118.
- Tenney, I., Xia, P., Chen, B., Wang, A., Poliak, A., McCoy, R. T., Kim, N., Durme, B. V., Bowman, S. R., Das, D., & Pavlick, E. (2019). What do you learn from context? Probing for sentence structure in contextualized word representations. International Conference on Learning Representations. https://openreview.net/forum?id=SJzSgnRcKX
- Toshniwal, S., Wiseman, S., Livescu, K., & Gimpel, K. (2022). [Chess as a Testbed for Language Model State Tracking](https://doi.org/10.48550/arXiv.2102.13249) (arXiv:2102.13249). arXiv.
- Wilcox, E. G., Gauthier, J., Hu, J., Qian, P., & Levy, R. (2020). [On the Predictive Power of Neural Language Models for Human Real-Time Comprehension Behavior](https://doi.org/10.48550/arXiv.2006.01912) (arXiv:2006.01912). arXiv.
