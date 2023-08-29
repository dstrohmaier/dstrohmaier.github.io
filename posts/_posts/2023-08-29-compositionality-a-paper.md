---
layout: post
title:  "Compositionality and Transformers: A Paper"
date:   2023-08-29 11:25:00 +0000
category: posts
---

Compositionality is one of the long-standing challenges to neural NLP. [I'm myself a bit sceptical that transformers really offer the kind of compositional processing found in human language processing](/transformer-speculations). But even formulating the challenge can be a challenge.

In it's formulation by Partee (1995), the principle of compositionality states:

> The meaning of a whole is a function of the meanings of the parts and of the way they are syntactically combined.

NLP researchers have investigated for a while whether neural network models respect the presumed compositionality of language, but even with Partee's principle of compositionality in hand, it is not clear what "respecting compositionality" would mean. Is it sufficient if a neural model can process sentences the meaning of which is compositional or are there further restrictions on how to process them?

[A paper that explicitly addresses such questions](https://doi.org/10.1613/jair.1.11674) has been put forward by Hupkes, Dunkers, Mul, and Bruni (2020, e.g. page 759). Their paper, entitled "Compositionality Decomposed: How do Neural Networks Generalise?", split compositionality into five task descriptions[^1] and tested sequence-to-sequence models on them.

The five task descriptions are:
1. Systematicity: The ability to process one sentence guarantees the ability to process a compositionally related sentence. Anyone who understands "The black cat hunts the red bird" will also understand "The red cat hunts the black bird".
2. Productivity: From finite semantic components, arbitrarily long semantic wholes can be formed. We can form and understand the phrase: "The cat hunts the bird, which ate the worm, which crawled through the earth, which...".
3. Substitutivity: Replacing a semantic component with a synonymous phrase should not affect the overall meaning. For example, it should make no difference to replace "the black cat" with "the cat, which was black".
4. Localism: The semantic function only depends on the syntactically local constituents. The meaning of "the red bird" does not differ depending on whether it occurs in the sentence "The black cat hunts the red bird" or "The red bird caught the worm".
5. Overgeneralisation: Faced with a compositional function with some exceptions, at first the function will be wrongly applied even in cases where an exception occurs. For instance, a child learning English might use the standard derivation of the past tense for the verb "run", arriving at "runned" instead of "ran".

All of these task descriptions can be questioned when it comes to natural language, as the authors of the paper are aware. Using one of their examples, localism appears to be violated when global context is required for disambiguating words. To understand what it means for the bat to fly right into my face, it is important to know whether the event occurred in a cave or on a baseball field. Context beyond the sentence might disambiguate the meaning. But if you disagree with the inclusion of a specific task description, that is no problem for the paper, since you can just ignore those results. If you disagree with all of them, I struggle to see what is left of compositionality.

This is an excellent paper that avoided many of the pitfalls of previous research. It is certainly hard to look at the results --- transformers performing reasonable well on substitutivity and systematicity --- and think that neural networks are hopeless when it comes to compositionality, although they are obviously not perfect either. The transformer models seem specifically to struggle with productivity and localism, looking at the numbers in Table 1 on page 774. The limits of productivity especially suggest that the model has been unable to properly derive a rule it can arbitrarily apply. The transformer models only reach 50% accuracy on sequences longer than they have encountered before. That is in line with my scepticism about the compositional abilities of transformers.

But I am also worried about the external validity of the positive results, that is whether we can infer from the strong showing of transformers in some of the experiments, e.g. the one investigating substitutivity, that they have the tested for skills also in the case of natural language. My worries are due to the artificial language employed by Hupkes et al. The language is purely instructional. It describes operations on strings of characters that return strings of characters. For example, an operation might be to reverse a string or to repeat it. The neural models are supposed to apply such functions, the end result always being new strings.

The language lacks variables, quantifiers, and negation. As a consequence, the semantic functions are quite different from most of natural language. One cannot even express a thought like "If you switch the first two elements of a string, and then switch the first two element of the resulting string, you arrive at the original string". The analysis of this proposition requires quantification and variables, which are not available in the language used by Hupkes et al.

But do these shortcomings matter? As formulated above, the principle of compositionality requires that the meaning of the whole is a function of the meaning of the parts. It does not specify the functions. But surely the function matters! Otherwise the function which takes any part and returns the value True would be acceptable. Surely, every neural network can learn such a function, but we wouldn't call the networks compositional on that basis.

The functions chosen by Hupkes et al. are more interesting. They are not trivial, since different sentences and components map to different string outputs. But they are less complex than the functions required for analysing natural language. Composition turns into a different beast once quantification comes into the picture. Variables need to be dealt with. In natural language, variables of components might be free and therefore have no fixed meaning in the absence of an assignment. Consider a sentence so simple as "A cat hunts a bird". The analysis of the component "hunts a bird" would include a free variable for the missing agent. Only when the noun phrase of "A cat" is added would this variable be bound.[^3] There is nothing equivalent to such free variables in the Hupkes et al. paper. The incompleteness that pervades the composition of meaning in natural language is absent. Sceptics of neural models have, as a result, an easy time discounting the positive results the paper suggests.

Such problems would not arise if one trained the network on first order logic with a model-theoretic semantics.[^2] Why not ask the neural network about the truth of a sentence such as:[^4]

\\[ \forall s, t \in \text{Strings} (\text{switch_1st_and_2nd_character}(s, t) \leftrightarrow  \text{switch_1st_and_2nd_character}(t, s) )  \\]

Such formal languages are well-understood and training examples can be automatically generated. They can also be decomposed and the components would then include free variables.

I assume that the challenge of interpretation-dependence led Hupkes et al. to avoid such a solution. In model-theoretic semantics the semantic value of a sentence is relative to an interpretation, that is a description of the states of the world that make the sentence either true or false. Accordingly, if the output is supposed to be the meaning of a sentence, this would require the specification of an interpretation, either explicitly or implicitly through training examples. On the explicit approach, one has to feed an entire model as input into the neural network. In the implicit approach, the network has to learn the interpretation from the inputs it is received. Both approaches are more challenging than the one pursued by Hupkes et al.[^5]

This challenge, however, can be met. In fact, [research I have conducted with Simon Wimmer](https://philpapers.org/rec/STRCAL-7) has provided models with artificial sentences and simple serialisations of a situation that either make the sentence true or false (see Strohmaier & Wimmer forthcoming). Our focus wasn't on compositional semantics, as we were interested only in the semantic function for attitude ascriptions, and therefore did not include free variables either, but we were able to train a transformer-encoder on something closer to model-theoretic semantics.

There have been some [experiments investigating entailment using logical formulas](https://arxiv.org/abs/1802.08535) (Evans et al. 2018), but for different logical systems. The [COGS dataset](https://doi.org/10.18653/v1/2020.emnlp-main.731) (Kim & Linzen 2020), which aims to evaluate compositional abilities using the task of mapping natural language to logical form, is also noteworthy in this context. But as far as I can tell, no one has tested for the task descriptions proposed by Hupkes et al. using first-order logic formulas.

Assuming I haven't missed something --- if I have please email me! --- there is room for a further empirical test of the compositional abilities and shortcomings of neural networks. Since I am busy with other research projects at the moment, I haven't yet further explored this space, but I might come around to it (and if you are interested and able to cooperate on this, send me an email).


### References

- Evans, R., Saxton, D., Amos, D., Kohli, P., & Grefenstette, E. (2018). [Can Neural Networks Understand Logical Entailment?](https://doi.org/10.48550/arXiv.1802.08535) (arXiv:1802.08535). arXiv.
- Hupkes, D., Dankers, V., Mul, M., & Bruni, E. (2020). [Compositionality Decomposed: How do Neural Networks Generalise?](https://doi.org/10.1613/jair.1.11674) Journal of Artificial Intelligence Research, 67, 757–795.
- Kim, N., & Linzen, T. (2020). [COGS: A Compositional Generalization Challenge Based on Semantic Interpretation.](https://doi.org/10.18653/v1/2020.emnlp-main.731) Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), 9087–9105.
- Partee, B. H. (1995). Lexical semantics and compositionality. In Language: An invitation to cognitive science, Vol. 1, 2nd ed (pp. 311–360). The MIT Press.
- Strohmaier, D., & Wimmer, S. (forthcoming). [Contrafactives and Learnability: An Experiment with Propositional Constants.](https://philpapers.org/rec/STRCAL-7) Post-Proceedings of Logic and Engineering of Natural Language Semantics 19.


### Footnotes

[^1]: I chose the name "task description" over "tasks", since some of these descriptions concern how a task is fulfilled rather than the nature of the task itself. For example, overgeneralisation describes the trajectory of learning a task.

[^2]: Even if neural network can learn the semantics of first-order logit, further challenges would remain. Natural language exceeds first-order logic, for example because it involves quantification over predicates. But these further challenges might be less specific to the compositional abilities of neural networks.

[^3]: Linguists typically use the lambda-operator to enable this semantic composition and have the variables bound.

[^4]: How would this formulate evaluate when the string consists of only a single character? One could return a presupposition-failure in this case.

[^5]: A model would not be sufficient to determine the semantic value of phrases including free variables, which would occure in an experiment following exactly the lines of Hupkes et al. One could deal with these free variables by providing assignments, or by allowing the model to return an indeterminate value.
