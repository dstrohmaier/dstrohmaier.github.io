---
layout: post
title:  "LLMs, Symbol Grounding, and other Problems"
date:   2024-12-05 14:57:13 +0100
category: posts
---

To my surprise, the recent 2024 EMNLP conference included multiple  papers with a philosophical angle. One of them attracted my attention in particular: ["Pragmatic Norms Are All You Need"](https://aclanthology.org/2024.emnlp-main.651/) by Reto Gubelmann, who seeks to address the Symbol Grounding Problem (SGP). As a first approximation, the SGP can be understood as the problem of endowing computational representations with a connection to objects in the real word so that the representations can refer to them. The paper argues that for conceptual reasons the SGP does not apply to LLMs.

In this post, I gather some general thoughts on this paper and the problem space it discusses. My primary point will be: The argument of the paper leaves many close cousins of the SGP as open possibilities. While I won't describe these possibilities in detail, I will sketch how they might arise.

### The Core of the Paper

The argument of Gubelmann's paper goes roughly as follows:
1. The SGP depends conceptually on a particular theory of meaning and cognition, the Correspondence Theory of Meaning (CTM).
2. This theory of meaning and cognition does not apply to LLMs as deep learning models.
3. Thus, the SGP does not arise for LLMs and we can stop worrying about it.

I can believe that the argument is sound on a specific construal of the SGP and the particular theory of meaning, but a lot hangs on those construals. The argument relies on conceptually linking the SGP to a version of the Correspondence Theory of Meaning (CTM) that does not apply to LLMs.

On this version of the SGP and the CTM, symbols in the cognitive system have to be grounded --- whatever that exactly means --- so that they can stand in correspondence with real entities for them to carry meaning. Of course, if one denies that such correspondence relations are necessary for carrying meaning, then this version of the SGP does not arise. So far, it is hard to disagree with Gubelmann.

I'm not particularly invested in whether this is the textually correct interpretation of the SGP (as introduced by Harnard 1990), that is whether Gubelmann's formulation of the SGP reflects the original intentions. I'm more interested in whether there are nearby problems not afflicted by this argument. Perhaps we should  give them different names to avoid confusion, but they are what we care about when enter the debate about the SGP.


![Someone losing their grounding amidst symbols.](/assets/images/an-ocean-of-books.jpg)

### Further Problems

To see where such related problems may be found, I look at a few other claims the paper makes along the way:
1. Other theories of meaning than the CTM might in fact be preferable, in particular a pragmatist norm-based theory of meaning (exemplified by Wittgenstein and Brandom).
   As a reason, Gubelmann (p.11670) points to the success of LLMs:

    > Time and again, and even more so after the publication of ChatGPT on November 30, 2022, LLMs have managed to shine in one linguistic challenge after another that was previously thought be beyond them. Hence, for the theoretical and empirical reasons sketched, we should abandon the correspondence theory of meaning in favor of a pragmatic one

    This passage also brings us to the second claim.

2. The pragmatist theory of meaning is more likely to ascribe the understanding of meaning to LLMs. If this wasn't the case, then the success of LLMs would not speak in favour of this theory.
3. The relevant version of CTM for formulating the SGP, representationalism, and the language of thought hypothesis go hand in hand (cf. p. 11666).[^1]

I will go through these additional claims in turn, trying to show why they can be questioned and how that gives rise to problems similar to the SGP.

#### Claim 1: There Are Alternatives to CTM

Gubelmann clearly has a horse in the race when it comes to the correct theory of meaning, and his bet is not on CTM. I want to spend least time on this claim, because my general response is somewhat trivial: The alternatives exist but are far from generally accepted. While the pragmatist norm-based theory of meaning that Gubelmann points to has important representatives in Wittgenstein, Brandom, and others, it is a minority position in both philosophy and linguistics.[^2]

It is certainly premature to dismiss the SGP, just because the CTM is not the only option and LLMs are in tension with the latter. Some version of the CTM might be correct. Furthermore, the correct version of the CTM might be sufficiently broad to also apply to LLMs and raise the SGP (more on that when I get to the third claim). Then, we would have to address the problem after all.

Of course, this amounts to little more than saying that we need to have the debate about theories of meaning before we can set other questions aside due to the outcome of this debate.


#### Claim 2: A Pragmatist Account Is More Likely to Ascribe the Understanding of Meaning to LLMs

Even if the CTM were superseded by a pragmatist theory of meaning as espoused by Brandom, that would not end all problems resembling the SGP. I am sceptical that this type of theory would support ascribing the understanding of meaning to LLMs, even though Gubelmann (p. 11671) writes on this matter:

> All it needs [to understand meaning on this theory] is a norm-governed practice in a society, the patterns of which can be picked up by LLMs from the training data and used to infer said norms.

But what is a norm-governed practice? In the philosophical literature, we can find a reading[^3] where normativity determines meaning such that "it is not how we are _disposed_ to use an expression that determines its meaning, but how we are _supposed_ to use it" (Glür, Wikforss & Ganapini: 2022). While dispositions of use are something that an LLM would be excellently suited for, it is not clear that they have the correct connection to normativity.

Brandom's account is explicitly normative, the ability to commit is central to participating in this norm-governed practice of language use (Brandom 1994: 159). Without this ability, one might question whether the entity can in question can understand meaning. But can LLMs commit? It is hard to see how they could be capable of committing, if there is no way of holding them accountable and I am unconvinced that providing them input that chastises them for previous output should be considered holding them accountable. In fact, I would find it easier (albeit challenging) to ground an LLM with sensory information than to change it in such a way that it can be held accountable for its commitments. We end up with a grounding problem, albeit one that concerns the grounding in commitments.

I assume that Gubelmann would endorse a weaker version of a normative theory of meaning. Based on my limited knowledge of Wittgenstein's late work and peeking into Gubelmann's 2023 paper on this issue, I have a vague idea of what this theory might look like. But Wittgenstein's account of rule-following comes into play, and the issues surrounding that are beyond a blog-post or EMNLP paper. Looking into the SEP entry [Rule-Following and Intentionality](https://plato.stanford.edu/entries/rule-following/) to get a sense of the debate.

#### Claim 3: CTM Goes Hand-in-Hand with Various Theories

Compared to typical philosophy papers, EMNLP papers are brief, which forces Gubelmann to provide a rather quick sketch of all the interconnected theories. The paper is specifically concerned with a representationalist version of CTM, where symbols represent objects in the world. Gubelmann contrasts this with LLMs as "connectionist, statistical devices that have no intrinsic symbolic structure" (p. 11670). The presentation suggests that symbols, representation, and correspondence theory are all on one side, and neural networks, connectionism, and statistics all on the other.

But while LLMs are not symbolic models, they have some sort of representations in the form of activations. While Fodor serves in this paper as a symbolic-representationalist-correspondence foil, he also holds that connectionism is a representationalist theory (see Fodor & Pylyshyn 1988), just one that has unstructured representations that do not amount to a Language of Thought. Neural activations are not representations as used by symbolic systems, but it is sensible to consider them as encoding information and thereby representing. From this perspective, questions then arise about how and what these activations represent. Thus, we arrive again at problems that strongly resemble the symbol grounding problem, although it might be better to call it "representation grounding problem".

### Conclusion

Gubelmann's paper brought a large dose of conceptual thinking into EMNLP. It rightly raises awareness of the fact that the conceptual issues surrounding the SGP debate are very fraught and are sometimes treated rather carelessly. That being said, the paper ended up presenting a somewhat narrow picture of the conceptual issues; perhaps due to the page constraints. The goal of this post was to widen the picture.

We might find ourselves accepting the CTM after all, but in a version that applies to LLMs, or we might end up rejecting that LLMs understand meaning, because we end up with a strongly normativist theory of meaning, or another theory emerges vindicated. These are all live options.

Given these variety of options, I think it might better to turn Gubelmann's main argument on its head, and as I mentioned, he does that himself to a degree: The however limited success of LLMs speaks against the LoT hypothesis, somewhat against representationalism, and perhaps even against the correspondence theories of meaning --- under some construals. There are interesting arguments to be had in that direction. The conceptual space is wide open, and empirical results might help to constrain our search for truth.

---

## References

- Fodor, J. A., & Pylyshyn, Z. W. (1988). [Connectionism and cognitive architecture: A critical analysis]( https://doi.org/10.1016/0010-0277(88)90031-5). Cognition, 28(1), 3–71.
- Glüer, K., Wikforss, Å., & Ganapini, M. (2024). [The Normativity of Meaning and Content](https://plato.stanford.edu/archives/fall2024/entries/meaning-normativity/). In E. N. Zalta & U. Nodelman (Eds.), The Stanford Encyclopedia of Philosophy (Fall 2024). Metaphysics Research Lab, Stanford University.
- Gubelmann, R. (2023). [A Loosely Wittgensteinian Conception of the Linguistic Understanding of Large Language Models like BERT, GPT-3, and ChatGPT](https://doi.org/10.1163/18756735-00000182). Grazer Philosophische Studien, 99(4), 485–523.
- Gubelmann, R. (2024). [Pragmatic Norms Are All You Need – Why The Symbol Grounding Problem Does Not Apply to LLMs](https://aclanthology.org/2024.emnlp-main.651). In Y. Al-Onaizan, M. Bansal, & Y.-N. Chen (Eds.), Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (pp. 11663–11678). Association for Computational Linguistics.
- Harnad, S. (1990). [The symbol grounding problem](https://doi.org/10.1016/0167-2789(90)90087-6). Physica D: Nonlinear Phenomena, 42(1), 335–346.


## Footnotes

[^1]: Gubelmann writes that the "CTM is not necessarily symbolic, or as it is expressed in the field, representational" (p. 11666), but limits himself to the discussion of a symbolic/representational CTM. I gather that he takes it to be the basis of the SGP. By the way, I do not share the view that symbols and representations should be equated, as will become clear in my discussion of the third claim.

[^2]: The [2020 Philpapers](https://survey2020.philpeople.org/survey/results/4926) survey found that slightly more than half of the surveyed philosophers accept or lean towards a correspondence theory of truth. While philosophers are a creative bunch, I assume that most of those who endorse the correspondence theory of truth also endorse it for meaning.

[^3]: Other readings can, of course, also be found. My point is that potential other problems closely related to SGP remain worthy of consideration, even if the narrow argument of the paper goes through.


<!--  LocalWords:  SGP CTM EMNLP Brandom Brandom's activations Glür
  LocalWords:  representationalist Pylyshyn normativity Gubelmann LoT
  LocalWords:  representationalism Gubelmann's construals normativist
 -->
