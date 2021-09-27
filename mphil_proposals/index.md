---
layout: page
title: Proposals
updated: 2021-07-04 08:51:46 +0100
---

# MPhil Projects

These are proposals for MPhil project with the NLIP group. If you are an MPhil student in the ACS at Cambridge and you are interested in any of these projects, send me an email! 

## Project 0: Multi-Task Learning for Word Sense Disambiguation
**Proposer:** David Strohmaier

**Supervisors:** David Strohmaier and Paula Buttery

The representation of word meaning poses a significant challenge in NLP. To select interpretable meaning representations, NLP researchers often make use of sense repositories, such as dictionaries and topic labels. Many such repositories have been created, but researchers have not settled on a single “correct” repository. In fact, there are good reasons to think that there is no such uniquely correct repository.

In this project, you will be combining these repositories in a multi-task learning setup. You will fine-tune a BERT-based classification system to predict the correct meaning of a word based on its context for multiple repositories. You are free to explore different neural architectural choices (within time constraints).

### Required Resources:
* To finetune a BERT system, access to a GPU will be required.

### Relevant Literature
- Crawshaw, M. (2020). [Multi-Task Learning with Deep Neural Networks: A Survey.](http://arxiv.org/abs/2009.09796) ArXiv:2009.09796 [Cs, Stat].
- Iacobacci, I., Pilehvar, M. T., & Navigli, R. (2016). [Embeddings for Word Sense Disambiguation: An Evaluation Study.](https://doi.org/10.18653/v1/P16-1085) Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), 897–907.
- Izquierdo, R., Suarez, A., & Rigau, G. (2015). [Word vs. Class-Based Word Sense Disambiguation.](https://doi.org/10.1613/jair.4727) Journal of Artificial Intelligence Research, 54, 83–122. 
- Klein, D., Toutanova, K., Ilhan, H. T., Kamvar, S. D., & Manning, C. D. (2002). [Combining heterogeneous classifiers for word-sense disambiguation.](https://doi.org/10.3115/1118675.1118686) Proceedings of the ACL-02 Workshop on Word Sense Disambiguation Recent Successes and Future Directions -, 8, 74–80. 
- Lacerra, C., Bevilacqua, M., Pasini, T., & Navigli, R. (2020). CSI: A Coarse Sense Inventory for 85% Word Sense Disambiguation. Proc. of AAAI.
- Navigli, R. (2012). [A Quick Tour of Word Sense Disambiguation, Induction and Related Approaches.](https://doi.org/10.1007/978-3-642-27660-6_10) In M. Bieliková, G. Friedrich, G. Gottlob, S. Katzenbeisser, & G. Turán (Eds.), SOFSEM 2012: Theory and Practice of Computer Science (pp. 115–129). Springer.
- Ruder, S. (2017). [An Overview of Multi-Task Learning in Deep Neural Networks.](http://arxiv.org/abs/1706.05098) ArXiv:1706.05098 [Cs, Stat]. 
- Vial, L., Lecouteux, B., & Schwab, D. (2019). Sense Vocabulary Compression through the Semantic Knowledge of WordNet for Neural Word Sense Disambiguation. ArXiv.

***


## Project 1: Diachronic Lexical Complexity Prediction
**Proposer:** David Strohmaier

**Supervisors:** David Strohmaier and Paula Buttery

Predicting lexical complexity, that is predicting how difficult a word token is to produce or understand, is a well-established NLP task with many practical applications. Currently, the task is often approached with pre-trained language models, such as BERT. In this project, you will build such a lexical complexity prediction model and adapt it to a different application: prediction the diachronic lexical complexity in learner data.

Over the course of acquiring a new language, the grasp of learners on new concepts increases. It stands to reason, that a learners early uses of a content word might be less complex than their later uses, corresponding to the learners progress. Using your own lexical complexity prediction system, you will be able to track their development and evaluate this hypothesis. Generally, applying complexity prediction to diachronic learner data opens multiple application-oriented directions of research, which you can explore.


### Required Resources:
* Access to ALTA-internal data
* To finetune a BERT system, access to a GPU will be required.

### Relevant Literature
- Shardlow, M., Evans, R., Paetzold, G. H., & Zampieri, M. (2021). [SemEval-2021 Task 1: Lexical Complexity Prediction.](https://doi.org/10.18653/v1/2021.semeval-1.1) Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 1–16.
- Yuan, Z., Tyen, G., & Strohmaier, D. (2021). [Cambridge at SemEval-2021 Task 1: An Ensemble of Feature-Based and Neural Models for Lexical Complexity Prediction.](https://doi.org/10.18653/v1/2021.semeval-1.74) Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 590–597.

***


## Project 2: Probing Language Models for Learner Semantics
**Proposer:** David Strohmaier

**Supervisors:** David Strohmaier and Paula Buttery

With the advance of massive language models, the skill of probing such models to uncover their inner workings has become central to much NLP research. This research project will develop your probing skills on an application-oriented task: Probing for the difference between native speaker and language learner data.

Learner data includes many mistakes, such as spelling errors and grammatical infelicities. How does this affect the processing of the lexical semantic knowledge within the language model? To answer this question, you will use state-of-the-art probing techniques and apply them to BERT (or one of its derivatives). The results will help us to assess the use of such language models in educational technologies.

### Required Resources:
* Access to ALTA-internal data
* To finetune a BERT system, access to a GPU will be required.

### Relevant Literature
- Derby, S., Miller, P., & Devereux, B. (2021). [Representation and Pre-Activation of Lexical-Semantic Knowledge in Neural Language Models](https://doi.org/10.18653/v1/2021.cmcl-1.25). Proceedings of the Workshop on Cognitive Modeling and Computational Linguistics, 211–221.
- Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](http://arxiv.org/abs/1810.04805). ArXiv:1810.04805 [Cs]. 
Mickus, T., Paperno, D., Constant, M., & van Deemter, K. (n.d.). What do you mean, BERT? Assessing BERT as a Distributional Semantics Model. 12.
- Ravichander, A., Belinkov, Y., & Hovy, E. (2021). [Probing the Probing Paradigm: Does Probing Accuracy Entail Task Relevance?](https://aclanthology.org/2021.eacl-main.295) Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume, 3363–3377. 
- Rogers, A., Kovaleva, O., & Rumshisky, A. (2020). [A Primer in BERTology: What We Know About How BERT Works.](https://doi.org/10.1162/tacl_a_00349) Transactions of the Association for Computational Linguistics, 8, 842–866. 
- Vulić, I., Ponti, E. M., Litschko, R., Glavaš, G., & Korhonen, A. (2020). [Probing Pretrained Language Models for Lexical Semantics.](https://doi.org/10.18653/v1/2020.emnlp-main.586) Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), 7222–7240.

***


## Project 3: Annotating Dictionary Definitions with Complexity Levels
**Proposer:** David Strohmaier

**Supervisors:** David Strohmaier and Paula Buttery

A dictionary that provides complexity levels (typically CEFR-levels) is useful for many tasks in NLP, e.g. readability assessment and text simplification. This project will attempt the automatic annotation of the Cambridge Advanced Learners Dictionary with CEFR-levels based on existing partial annotation. For example, the definition for "tip" as a small amount of money given to someone who provided a service should be annotated with the CEFR-level B1. 

CEFR-level annotation can be conceived of as a classification task with six labels. Neural networks and especially the contemporary transformer-architecture, such as BERT, are suitable for classification tasks of this type. A preliminary BERT-classifier can be made available to the student. There are, however, special challenges to overcome for the automatic complexity annotation of dictionaries. Dictionary entries have their own format that diverges from natural occurring text corpora. Exploiting this format while using a standard architecture is a key part of this project.

In addition, different loss functions can be explored for annotating definition with CEFR-levels. The loss function should make use of the fact that picking the label B2 instead of B1 is closer to correct than if C2 had been picked.

### Required Resources:
* Access to CALD
* To finetune a BERT system, access to a GPU will be required.

### Relevant Literature
- Shardlow, M., Evans, R., Paetzold, G. H., & Zampieri, M. (2021). [SemEval-2021 Task 1: Lexical Complexity Prediction.](https://doi.org/10.18653/v1/2021.semeval-1.1) Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 1–16.
- Yuan, Z., Tyen, G., & Strohmaier, D. (2021). [Cambridge at SemEval-2021 Task 1: An Ensemble of Feature-Based and Neural Models for Lexical Complexity Prediction.](https://doi.org/10.18653/v1/2021.semeval-1.74) Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021), 590–597.
