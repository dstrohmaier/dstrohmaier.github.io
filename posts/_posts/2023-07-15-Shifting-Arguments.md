---
layout: post
title:  "LLMs and Human Cognition: Shifting Arguments, Same Assumptions"
date:   2023-07-13 08:05:00 +0000
category: posts
---


The relative success of large transformer-based language models (LLMs for the rest of this post) has given researchers a reason to reconsider our understanding of language and how humans process it. Especially those sceptical of neural network approaches face a challenge, such as Noam Chomsky and his followers. They need to justify their scepticism about the abilities of neural networks in the light of apparent counter-evidence. Many justifications are available, a classic one being that LLMs need much more data than humans, but in this post I'll discuss an argument by Chomsky I hadn't heard until recently. In this discussion, I follow my own progress of thought, which starts with an initial reaction of surprise to Chomsky's argument to the dawning realisation, that it showed less of a change than I had at first suspected.

I recently listened to a Tyler Cowen interview with Chomsky, in which the latter made the following argument (see the [transcript](https://conversationswithtyler.com/episodes/noam-chomsky/)):

> [An LLM] does exactly as well with impossible systems as with languages. Therefore, in principle, it’s telling you nothing about language.

The argument seems to be that LLMs are not only able learn actual languages,[^1] but also other systems of symbols that no human could learn.[^2] Therefore, LLMs diverge so much from human cognition as to be uninformative.

I found that argument surprising, and anyone who was arguing on Chomsky's side in the 80s and 90s would have found it surprising back then as well. In those heydays of the battle between classical cognitive science and connectionism, philosophers/cognitive scientists like Fodor and Pylyshyn (1988) argued that connectionist models can _in principle_ not learn to produce language. Back then, that was the position broadly aligned with Chomsky. Today, after the rise of LLMs, Chomsky's argument claims that neural models are not informative because they can learn roughly every pattern of symbols for which we have sufficient data, not just human language.

It's easy to look at this change in argument and think it shows that the critics of neural networks are grasping at straws. One might suspect, they are forced to completely reverse their original position in response to the rise of LLMs. First they told you that neural networks couldn't learn enough, and now they are telling you that they learn too much. But that interpretation is making it a little too easy. There is a consistent set of ideas underlying these superficially opposed arguments. These ideas include:

1. Language acquisition provides core insights about language cognition: The processing of language is tied to how one can acquire language
2. Innate skills are a core part of language acquisition: Humans do not learn language from scratch, but starting with innate skills that make human-like language cognition possible in the first place
<!-- 3. Language and thought are deeply intertwined:[^X] -->
<!-- 4. Thought and language are systematic: Language users must have certain abilities together, e.g. be able to both think relation(a,b) and relation(b,a)[^Y] -->

None of these points are trivial. Consider the first point that language learning tells you something about language cognition after the learning has (largely) stopped. A person other than Chomsky might easily take the position that these processes can be treated separately. They might concede that LLMs learn language in a very different way compared to humans and therefore throw little light on language acquisition. At the same time, they might assert  once the LLMs are trained they process language in a rather similar way to humans. In other words, the model might capture language processing without capturing language learning/acquisition. For someone with this view, it would be of little interest that LLMs can also learn languages humans cannot learn. As long as they process actual languages the same, why worry that LLMs are also able to process other sequence patterns, if trained on those patterns?

Chomsky's position rules such a stance out, because the core skill of language cognition is one of hypothesis-driven effort of explanation. In their [New York Times opinion piece](https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html) Chomsky et al. write:

> Human-style thought is based on possible explanations and error correction [...]

Human-style thought in acquisition and processing is based on this core skill. According to Chomsky, our acquisition patterns are not accident, but the results of our hypothesis-driven cognition. That is a view Chomsky has long held, probably for the majority of a century by now. This position is clearly continuous with the critiques of the 80s & 90s. In their influential paper from this period, Fodor and Pylyshyn (1988) ended on a closely related noted:

> There is an alternative to Empiricist idea that all learning consists of a kind of statistical inference, realized by adjusting parameters; it's the Rationalist idea that some learning is a kind of theory construction, effected by framing hypotheses and evaluating them against evidence. We seem to remember having been through this argument before. We find ourselves with a gnawing sense of deja vu.

A deja vu indeed! 35 years later Chomsky and his collaborators make the same point again. Apparently, it never gets too old to bear repeating.

But why hold
1. that symbolic hypothesis formation and testing is at the core of both language acquisition and processing, and
2. that neural networks cannot implement a form of this process?

I think in light of the new evidence of LLM performance it might be sensible to review these two hypotheses.

But why believe these core ideas? And why not, for example, hold that LLMs acquire also an approximation of the innate abilities? The claim there must be that such acquisition is in principle not possible or at least extremely unlikely. The reasons for that are less clear to me, and less convincing as far as I understand them.[^3] Chomsky does not touch upon those reasons in the interview with Cowen, he presumes them. His reaction to LLMs does not go so far as to question these underlying assumptions.

Listening to the Cowen interview, I was at first struck by how much the argument had changed, only later did I realise that I had been mistaken. If there is a problem with Chomsky's argument, it is not so much that he has changed his tune. The problem is that the argument continues to rest on the same core tenets. Pressed to discuss LLMs by Chomsky, he does not even discuss them.


### References

Fodor, J. A., & Pylyshyn, Z. W. (1988). [Connectionism and cognitive architecture: A critical analysis](https://doi.org/10.1016/0010-0277(88)90031-5). Cognition, 28(1), 3–71.

### Footnotes

[^1]: If you want to be specific and use the vocabulary of Chomsky, the models would learn the statistics of external or E-language, not anything about internal or I-language.

[^2]: I am a bit sceptical about how much LLMs can really. LLMs probably cannot learn just any language. In fact, [we know](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00306/43545/Theoretical-Limitations-of-Self-Attention-in) that standard Transformers have theoretical limits on learning certain languages. It is not relevant for the rest of the post, however, so I'll gloss over it.

<!-- [^X]: Chomsky makes this point himself at another point in the interview.: "Thought is what is generated by language. Language generates thought. They’re intimately related, if not indistinguishable." -->

<!-- [^Y]: This claim gets qualified by the norious competence vs. performance distincation, another complication I will gloss over. -->

[^3]: I will briefly sketch two arguments in this footnote. Obviously, they would require longer discussion. (1) A classic argument for innate abilities is [the poverty of the stimulus](https://plato.stanford.edu/entries/innateness-language). It is less clear, however, that it follows from limitations of input to human language learners that usually iniate abilities cannot be learned from the kind of massive stimulus that LLMs are exposed to. Perhaps one can make arguments from principled underdetermination? My worry would then be that these arguments would also suggest that humans do not share a single way of processing language. (2) Another argument is that the abilities in question are constitute a discontinuity. According to this line of argument, there is no gradual path from garden-variety animal cognition to the innate abilities required for language processing. These abilities appear suddenly. Neural networks, by contrast, learn gradually, and therefore cannot in principle acquire the innate language abilities of humans. The main problem of this argument is that it requires a lot of contentious assumptions. There is a good chance that at least one of them is wrong. To put my cards on the table, I am doubtful both about whether the dicontinuity is really needed and whether the learning of neural networks has to be conceived as purely gradual.
