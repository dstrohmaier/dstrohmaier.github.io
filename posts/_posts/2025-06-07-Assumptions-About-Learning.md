---
layout: post
title:  "Assumptions about Learning: A Hard Lesson"
date:   2025-06-07 14:57:13 +0100
category: posts
---

I'm currently reading Melissa Bowerman's (2018) "Ten Lectures on Language, Cognition, and Language Acquisition", and right at the start of the first lecture, she provides a fascinating remark on assumptions historically made about language learning. When we look into her remark and consider the larger consequences, we arrive at a warning about being too sure about one's assumptions.

![A man hanging by one hand between train carriages](/assets/images/hanging-one-hand.jpg)

According to Bowerman, when crosslinguistic research into language acquisition by children began, two claims from Chomsky were at the heart of it. For this post, I'm not interested in the second assumption (universal grammar). It is the first one that interests me. Bowerman formulates the first assumption as "children learn implicit rule systems" (p. 4).

To clarify this assumption and its significance, Bowerman provides some more background and contrasts Chomsky's contribution with the earlier behaviourist research. The behaviourists had their own assumption (p. 4):

> ... the idea was really that children learned in quite simple ways with general mechanisms---they learned by imitation, they learned by association.

On Bowerman's telling, a behaviourist approach to learning ruled until Chomsky swooped in and disrupted the discourse by asserting that children learn a very abstract rule system. The same story has been told in different ways many times, but one feature of this retelling struck me.

The observant reader might notice that there is a gap in Bowerman's brief retelling. Thinking it through step by step and leaving aside our background knowledge, it is not clear at all why the behaviourists and Chomsky are in disagreement. Chomsky is taken to assert that children acquire a certain kind of knowledge or skill: abstract rule systems. Behaviourists assert that there is a set of general mechanisms for learning. Those assertions seem perfectly compatible.

One side argues for the learning of a certain kind of object, an abstract rule system, and the other side argues for a particular way of learning, using general mechanisms. It looks as if we had an argument between someone who says we have to get to a specific address (abstract rule systems) and someone else proposes the very general mechanism of walking to get there. Where is the conflict?

The conflict arises, of course, from background assumptions that Bowerman left out from her summary, presumably because they seemed too obvious to her for repetition. Two of these assumption are (a) that there are different types of learning, and (b) that only certain types can let one acquire certain types of knowledge or skill. In particular, the general mechanisms proposed by behaviourists will never get you anywhere close to learning abstract rule systems. Walking never gets you to the address because it is surrounded by a moat. You need to swim.

The same or at least a similar assumption is made explicit in the conclusion of Fodor and Pylyshyn's "Connectionism and Cognitive Architecture" (1988, p. 69):

> There is an alternative to the Empiricist idea that all learning consists of a kind of statistical inference, realized by adjusting parameters; it's the Rationalist idea that some learning is a kind of theory construction, effected by framing hypotheses and evaluating them against evidence.

By looking at Fodor and Pylyshyn's work we arrive at a more sensible if incomplete sketch of the claim:

1. There are at least two types of learning: statistical and theory construction.
2. There are at least two types of objects to be learned: correlations and abstract rule systems.
3. The statistical type of learning cannot lead to the acquisition of abstract rule systems.

To turn this sketch into a convincing argument, we still need to know _why_ statistical learning cannot lead to the acquisition of abstract rule systems. It is here where I've ended up less than convinced by Fodor, Pylyshyn, and others on their side of the debate. I still struggle to precisely understand what the reason is supposed to be for this inherent limit of statistical learning (broadly construed). I know that it led them to make statements such as the following (p. 67):[^1]
> association is not a structure sensitive relation

I can see an interpretation of this statement that construes _association_ narrowly enough to make the statement true. But to achieve this, we need to construe association on the basis of simple examples, such as correlations between a handful of variables. A more sophisticated construal is required to do justice to what connectionism can achieve (and would go on to achieve once it transformed into deep learning). Association, or perhaps better "statistical learning", encompasses much more than Fodor and Pylyshyn expected.

Why did Fodor and Pylyshyn miss it? They made another background assumption, which they were aware of but often got left aside: scale doesn't matter.[^2] Adding parameters does not matter. But how do we know this? How do we know that the nature of the inference doesn't change with the parameter count?

A follower of Fodor might be tempted to respond that scaling up is just doing more of the same and that doing more of the same cannot bring about a difference in kind. Adjusting parameters using statistics remains just that: adjusting parameters. One might claim that the behaviour of the system won't be different in kind just because we are adjusting many more parameters.[^3] That, however, is a fundamental assumption about which we can disagree.  In fact, empirical evidence speaks against this assumption for the case of neural networks.

Overparameterization makes a decisive difference to the learning dynamics of the deep learning networks. We know that overparameterization helps with generalization (e.g. see Allen-Zhu et al., 2019) --- a key indicator that the system has learned more general, dare I say, abstract rules --- although the exact effects are still very much up for debate. [Entire workshops](https://sites.google.com/view/icml2021oppo) have discussed overparameterization and how to understand it.

Neural models appear to be able to learn abstract rule systems using a ford of statistical learning (although there are still caveats about compositionality, see my [previous](https://dstrohmaier.com/transformer-speculations/) [blog](https://dstrohmaier.com/compositionality-a-paper/) [posts](https://dstrohmaier.com/compositionality-word-meaning/) on the topic, as well ass Kim & Linzen, 2020; Li et al., 2024; Valvoda et al., 2022). I've come to this view after co-authoring a number of papers describing how  we taught simple transformer networks abstract rules of meaning (see Strohmaier & Wimmer 2022, 2023, 2025). The neural models learned something that would have seemed beyond their reach from Fodor's position of 1988. There is, of course,  a danger of misinterpreting a handful of results like this, but the overall pressure of the ever expanding literature on deep learning is hard to ignore. The debates from the 60s to the 90s might have gone quite differently if we had known the results of these experiments.

The lesson is that our underlying assumptions, even our most fundamental assumptions that appear to belong to the realm of philosophy --- that doing more of the same cannot bring about a difference in the kind of outcome --- have great impact and can mislead us for decades. Our seemingly well-developed views in a debate often rest on assumptions we cannot defend with rigor. Surely, it is not the first time we are taught this lesson in the history of philosophy and science. It will not be the last time. Given all the assumptions we have to make to engage in science in the first place, it remains a difficult lesson to accept. We will not be able to avoid the assumptions,[^4] only to spell out our position as far as we can and seek awareness of their foundations.

## References

- Allen-Zhu, Z., Li, Y., & Liang, Y. (2019). [Learning and Generalization in Overparameterized Neural Networks, Going Beyond Two Layers](https://proceedings.neurips.cc/paper_files/paper/2019/hash/62dad6e273d32235ae02b7d321578ee8-Abstract.html). Advances in Neural Information Processing Systems, 32.
- Bowerman, M. (2018). [Ten Lectures on Language, Cognition, and Language Acquisition]( https://brill.com/display/title/35672). Brill.
- Buckner, C. (2019). [Deep Learning: A Philosophical Introduction](https://doi.org/10.1111/phc3.12625). Philosophy Compass, 14(10)
- Fodor, J. A. (1974). [Special sciences (or: The disunity of science as a working hypothesis)](https://doi.org/10.1007/BF00485230). Synthese, 28(2), 97–115.
- Fodor, J. A., & Pylyshyn, Z. W. (1988). [Connectionism and cognitive architecture: A critical analysis](https://doi.org/10.1016/0010-0277(88)90031-5). Cognition, 28(1), 3–71.
- Kim, N., & Linzen, T. (2020). [COGS: A Compositional Generalization Challenge Based on Semantic Interpretation]( https://doi.org/10.18653/v1/2020.emnlp-main.731). Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), 9087–9105.
- Li, Z., Jiang, G., Xie, H., Song, L., Lian, D., & Wei, Y. (2024). [Understanding and Patching Compositional Reasoning in LLMs]( https://doi.org/10.18653/v1/2024.findings-acl.576). In Findings of the Association for Computational Linguistics: ACL 2024 (pp. 9668–9688). Association for Computational Linguistics.
- Valvoda, J., Saphra, N., Rawski, J., Williams, A., & Cotterell, R. (2022). [Benchmarking Compositionality with Formal Languages]( https://aclanthology.org/2022.coling-1.525). In Proceedings of the 29th International Conference on Computational Linguistics (pp. 6007–6018). International Committee on Computational Linguistics.
- Strohmaier, D., & Wimmer, S. (2023). [Contrafactives and Learnability: An Experiment with Propositional Constants](https://philpapers.org/rec/STRCAL-7). Post-Proceedings of Logic and Engineering of Natural Language Semantics 19.
- Strohmaier, D., & Wimmer, S. (2025). [Contrafactives, Learnability, and Production](https://philpapers.org/rec/STRCLA-3). Experiments in Linguistic Meaning, 3, 395–410.
- Wimmer, S., & Strohmaier, D. (2022). [Contrafactives and Learnability](https://philarchive.org/rec/STRCAL-6). In M. Degano, T. Roberts, G. Sbardolini, & M. Schouwstra (Eds.), Proceedings of the 23rd Amsterdam Colloquium (pp. 298–305).


## Footnotes

[^1]: This quote is taken from one of four options Fodor and Pylyshyn offer connectionists in the paper, but I consider to reflect a general assumption of the authors.

[^2]: I find it odd that of all people Fodor appears to have made such an assumption since he has published a very influential paper that seems to me to argue that scale matters: Fodor's (1974) "The Special Sciences". Perhaps, and that is only a guess, Fodor thought that when scale matters, it does so in ways that undermine the unity of the phenomenon. Under this interpretation, the scale of neural networks would only start to matter insofar it led beyond them being a cognitive theory of learning. (Note the discussion of connectionism as an implementation theory towards the end of Fodor and Pylyshyn 1988).

[^3]: That scale makes little difference might have influenced also the initial neglect of deep learning by philosophers and even cognitive scienticsts. See the following quote from Buckner (2019, p. 2): "A commonly encountered attitude in these areas is that deep neural networks are just 'more of the same'—perhaps an important engineering advance, but incremental rather than game changing—and so recent research developments do not merit the kind of careful scrutiny from philosophers that earlier waves of connectionism received."

[^4]: There are, of course, throughout the history of philosophy numerous attempts to escape the need for fallible assumptions. Descartes' cogito is perhaps the best known example. I'm enough of a pragmatist to doubt the success of these approaches. But those pragmatist assumptions are themselves fallible assumptions.

<!--  LocalWords:  Bowerman crosslinguistic Pylyshyn doesn ve
 -->
