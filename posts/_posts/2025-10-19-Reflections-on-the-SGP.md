---
layout: post
title:  "Notes on the Symbol Grounding Problem"
date:   2025-10-19 13:57:13 +0100
category: posts
---

This post collects a set of notes on the Symbol Grounding Problem in the context of LLMs. In this context, the question is whether LLM systems have an appropriate connection to the world. The appropriate connections are presumed to establish that the representations and output of the models are meaningful.

You can find a [list of papers on the topic of symbol grounding on my page](/The-Symbol-Grounding-Problem/). My notes assume familiarity with the literature, but develop their own framing. I use the term "Grounding Problem" to encompass what others have, for example, called the ["Vector Grounding Problem"](https://arxiv.org/abs/2304.01481). The goal of my notes is to develop how the grounding problem poses challenges to both AI research and philosophy, as well as to describe how these field-specific challenges relate to each other.

![19th century illustration of a diving machine](/assets/images/klingerts-diving-machine-1600.jpg)


## Notes

1. Similar to the easy and hard problem of consciousness, a distinction between an easy and a hard problem of grounding in AI systems can be drawn.[^1]

    * 1.1. The easy problem of grounding is the challenge of creating an AI system that can process multi-modal data and integrate the information these data sources provide. It is an engineering problem on the road to fully replicating human cognitive abilities.[^2]

    * 1.2. The hard problem of grounding is the challenge of a) engineering an AI system so that its representations and output carry *intrinsic meaning*, and b) *explaining* why any computational representations or outputs carry intrinsic meaning.

        - 1.2.1. The hard problem of grounding has both an engineering (a) and an epistemic component (b).

        - 1.2.2. Establishing the success of the engineering component requires answering the epistemic component.

    * 1.3. A solution to the epistemic component of the hard problem should answer whether solving the easy grounding problem is equivalent to solving the engineering component of the hard problem.

2. As in the case of the hard problem of consciousness, whether the hard problem of grounding is truly hard is open to debate.

    * 2.1. The hard problem of grounding is truly hard if and only if the explanation of why any computational representations or output carry intrinsic meaning requires a non computationally-functionalist description.

        - 2.1.1. A description is computationally-functionalist if and only if it is equivalent to the formalisation of a Turing machine and its processes.[^3]

    * 2.2. The hard problem of grounding is truly hard only if its engineering component is not shown to be equivalent to the easy problem of grounding.

        - 2.2.1. By analogy, the hard problem of consciousness is assumed to be truly hard because it is assumed to be beyond the functionalist theory of mind.[^4]

    * 2.3. The hardness of the hard problem of grounding has to be argued for by using meta-semantic theories of meaning.

    * 2.4. One way of establishing that the hard problem is truly hard is to show that having phenomenal consciousness is required for the representations or output of a system to carry intrinsic meaning.

        - 2.4.1. I assume that solving the easy problem of grounding does not guarantee the AI system to have phenomenal consciousness.

    * 2.5. Another way of establishing that the hard problem is truly hard is to show that semantic externalism provides conditions for carrying intrinsic meaning which are not guaranteed to be met by any system described purely in functional terms.

3. The relevance of the engineering component of the hard problem of grounding for AI research is unresolved.

   * 3.1. One goal of AI research is to fully replicate human cognitive abilities.

   * 3.2. It is conceivable that addressing the engineering component of the hard grounding problem has no relevance for whether an AI system fully replicates human cognitive abilities.

   * 3.3. Even if the engineering component has no relevance for fully replicating human cognitive abilities, the epistemic component of the hard problem might still have such relevance.

       - 3.3.1. If we have strong and correct prima facie intuitions about which computing systems have intrinsically meaningful representations and output, then we have a cognitive ability that realises at least a partial solution to the epistemic component of the hard problem of grounding.

       - 3.3.2. If we have a cognitive ability that realises a (partial) solution to the epistemic component, it is an ability that AI research should aim to replicate (following from 3.1.).


## References

- Harnad, S. (1990). [The Symbol Grounding Problem](https://doi.org/10.1016/0167-2789(90)90087-6). Physica D: Nonlinear Phenomena, 42(1), 335–346.
- Mollo, D. C., & Millière, R. (2025). [The Vector Grounding Problem](https://doi.org/10.48550/arXiv.2304.01481). arXiv.



## Footnotes

[^1]: A similar distinction has already been proposed by [Vincent Müller](https://philarchive.org/rec/MLLTHA-2).

[^2]: With Mollo and Millière (2025) one could calls this the "sensori-motor grounding problem". As they also notice, the easy grounding problem is part of the original discussion of the symbol grounding problem by Harnad (1990).

[^3]: Compare with the [formulation of machine-state funcationalism in the Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/functionalism/#MachStatFunc).

[^4]: See, for example, the [discussion of the hard problem of concsciousness in the Internet Encyclopedia of Philosophy](https://iep.utm.edu/hard-problem-of-conciousness/).
