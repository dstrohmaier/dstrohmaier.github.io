---
layout: post
title:  "Are Transformer LLMs Minds?"
date:   2023-02-28 12:38:00 +0000
category: posts
---

Transformer LLMs, such as [ChatGPT](https://openai.com/blog/chatgpt/), [BERT](https://arxiv.org/abs/1810.04805), and [Bard](https://blog.google/technology/ai/bard-google-ai-search-updates/), have sufficiently impressed the public that some have described them as AI minds. But is this ascription of a mind justifiable?[^1]

_Betteridge's law of headlines_ states:

> Any headline that ends in a question mark can be answered by the word _no_.

I believe this law fails for the present blog post. The correct answer to whether Transformer LLMs are minds is: _It is complicated, but it is typically not useful to describe them as minds._

I will make my case by asking and addressing more specific questions:
1. What are Transformer LLMs?
2. Do we have a widely accepted set of necessary and sufficient conditions for ascribing a mind?
3. Is there a somewhat plausible cognitive science theory of mental states (e.g. beliefs) that would describe transformer LLMs?
4. What kind of concept is the concept MIND?

I will address each of these questions in turn.

## What are Transformer LLMs?

The answer to this question is: _Transformer LLMs are large language models using the Transformer deep learning architecture._

A language model is a model predicting the occurrence of words (or other linguistic units, such as characters) given a context. Generally, such models excel at predicting what the next element in a linguistic sequence might be. A large language model is simply a language model that has a large number of parameters and has been trained on large amounts of data. For example, GPT-3 had about 175 Billion parameters.

The Transformer architecture (Vaswani et al. 2017) is currently the most prominent version of neural network deep learning. Without going into details of  the Transformer architecture, it can be said that it has enabled the networks to make better sense of general contextual information, although often limited to relatively small context windows. For more details, I recommend [this post on the inner workings of the original transformer](http://nlp.seas.harvard.edu/annotated-transformer/),  [this post on the family of Transformer models](https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/), and for an academic survey of what we know about Transformers see Rogers et al. 2020.

Predicting the next element in a sequence is a very general task. It occurs when creating dialogue responses, as in the case of ChatGPT, but it can also serve as a training task to find generalising model parameters, which can then be used by integrating the Transformers in larger computational systems. For example, it is common to use states from the BERT model (Devlin et al. 2017) by putting additional neural network heads on top. Some Transformer LLMs have also been trained on other tasks than predicting words in context. In [the case of ChatGPT](https://openai.com/blog/chatgpt/), the model has also been trained using reinforcement learning, in addition to the more standard deep learning methods. I will not consider the impact of these strategies in detail.


![Picture of a complex machine](/assets/images/gramme_machine.jpg)

## Do we have a widely accepted set of necessary and jointly sufficient conditions for ascribing a mind?

The answer to this question is: _no_.

There is no such thing as a scientific consensus on the nature of minds. I personally endorse the computational theory of mind, according to which minds are computational systems. This condition is fulfilled by Transformers, but it is likely insufficient. After all, the chip in a microwave is a computational system and we usually do not consider it a mind.

There are some standard proposals for additional conditions that might be added to arrive at a jointly sufficient set:
1. Ability to solve problems
2. Presence of certain mental states such as beliefs (access consciousness)
3. Phenomenal consciousness
4. Presence of a non-physical substance (substance dualism)

This list is by no means exhaustive, but it provides a sense of the range of possible conditions for having a mind. Depending on which conditions one endorses, the case for declaring Transformer LLMs to be minds looks quite different.

The first condition is the least restrictive, so it is not surprising that a transformer LLM is likely to fulfil it. LLMs seem to be able to solve _some_ problems, most obviously predicting the next word in a sentence. But with little modification they can also address other problems, such as certain parentheses matching tasks (Weiss et al. 2021) and disambiguating word senses at a (near-)human level (Conia & Navigli 2021). But then, one might worry: Does not a thermostat solve the problem of keeping the temperature at a certain level? I specify a temperature and it figures out when to turn the heating on and for how long. We will come back to that case, but it suggests that the ability to solve problems, broadly understood, might be necessary but insufficient for being a mind.

The second condition requires the computational system to have "access consciousness", which I equate with having mental states, such as beliefs and wants. Colloquially, we say that someone has a mind of their own to underline that they have beliefs and wants of their own. They are not just tools solving problems for us, but they represent the world as being a certain way and try to intervene in the world to make it align more with how they want it to be. Mental states, such as beliefs and wants characterise the notion of access consciousness.[^2] It is a restrictive, but quite appealing requirement for ascribing a mind. My microwave falls short of it, but humans, most of them anyway, fall under it.

The third condition is the presence of phenomenal consciousness. To have phenomenal consciousness is to experience the world in a qualitative way (Nagel 1974). Common examples are the quality of red and pain. Phenomenal consciousness has been heavily debated and few if any conclusions have been reached. While I strongly doubt that LLMs have phenomenal consciousness,[^3] it is less clear that we want to make this a necessary condition for having a mind. Especially, in the presence of beliefs and desires, phenomenal qualities appear more of an additional feature. Assume that you met a future AGI-robot and it truthfully confesses to that its experience of the world lacks any quality. It would still be sensible to ask this robot what it _beliefs_ and _wants_ and on some occasion to ask it what's on its mind.

Requiring the presence of a non-physical substance is the fourth and most restrictive condition. It is strongly associated with the kind of dualism proposed by Descartes. I don't believe in the existence of a non-physical mind substance, so as far as I am concerned humans fail to meet it as well. That makes it, presumably, a too restrictive condition. [Other formulations](https://plato.stanford.edu/entries/dualism/) of dualism avoiding a non-physical substance have been put forward, but usually they mainly attempt to capture phenomenal consciousness, which I have already covered in the previous paragraph.

There is no uncontroversial criterion for mindhood, but I suggest that having mental states is a decent starting point. If we were happy to describe Transformer LLMs as having beliefs and wants, then they would seem excellent candidates for being minds. Conversely, if LLMs lacked these states, we would be more sceptical about their chances. Either way, we could still continue to quibble, but with a much improved understanding of the matter at thand.

For the sake of this post, I will accept access consciousness as a starting point. Accordingly, I will consider a computational system to be minded if it has states sufficiently similar to mental states such as beliefs. This suggestion would be more helpful, of course, if we had a universally accepted theory of such mental states. Unsurprisingly, we lack such a theory and so I will in the next section resort to providing two samples from the realm of plausible theories.

## Is there a somewhat plausible cognitive science theory of mental states that would describe transformer LLMs?

The answer to this question is: _yes_.

Daniel Dennett has long been a proponent of the so-called "intentional stance" theory of minds. He proposes that mental states such as beliefs can only be discerned by taking a certain predictive strategy, which he calls the "intentional stance". To take this stance, an observer considers the system, assigns some beliefs and wants to it, and then makes predictions on that basis. For example, you might take the intentional stance when trying to figure out why the neighbour's dog is barking. You might postulate that that it _believes_ that there is someone entering the place and _wants_ to scare them away.

Having introduced the intentional stance, Dennett goes on to argue that any system

> whose behavior is well predicted [from this stance] is in the fullest sense of the word a believer. (Dennett 1989, p. 15)

According to Dennett, there is nothing more to having a mind with beliefs than an observer taking the intentional stance towards the system, ascribing beliefs, and having reasonable success with this approach. If you can start to predict the barking of the dog based on your belief and desire ascriptions, your use of the intentional stance was successful. Next time someone enters the place, the dog barks again. Success!

The degree of success required to justify the attribution of mental states is debatable, because the strategy also has some success with thermostats. (I promised we would get back to the example.) After all, I can predict that the thermostat will turn up the heater by attributing to it the belief that it is 18° and the desire to have the room be at a temperature of 21°. But this is a questionable use of the intentional stance, because I can predict what will happen relatively simply by describing the thermostat as a mechanism.

Mechanical descriptions of dogs and Transformer LLMs, by contrast, quickly run into difficulties. They might not be impossible and important research has been produced (e.g. Voita et al. 2019, Dai et al. 2022, Geva et al. 2022), but the challenges in formulating them and the ease in prediction provided by the intentional stance justifies the ascription of beliefs. At least, that is what the intentional stance theory purports.[^4] According to Dennett's intentional stance theory of mind, Transformer LLMs have minds.

To be clear, Dennett's intentional stance theory is _not_ widely accepted within cognitive science. It receives attention and might very well be presented in a standard philosophy of mind or cognitive science course, but is treated as a rather extreme view within the field. Dennett serves as a positive example showing that there is a somewhat plausible cognitive science theory ascribing a mind to Transformer LLMs, not more.

Like many others, I am more tempted by what is known in the philosophy of mind as ["functionalism"](https://plato.stanford.edu/entries/functionalism/).  Functionalism a family of theories which judge whether something is a mental state by checking whether it has the required _functional profile_. For example, something is a pause button if it has the functional profile of stopping a relevant process when you push it. The button itself can be made of wood, metal, or even only exist graphically on a touchscreen. What matters is that it plays the right role in a larger system. Being a belief would then be similar to being an pause button. The states in the LLM or in the human brain have play the right role in the overall cognitive system to be beliefs.

Functionalism typically requires more than the kind of predictive success that Dennett declared the criterion for mind ascription. Whatever realises the mental states, be it wetware or hardware, has to fit a certain functional profile, not just lead to predictive success. The question, therefore, becomes what the relevant functional profiles are for mental states. What is their characteristic role in computational systems? These functional profiles would have to be very abstract if we seek to attribute beliefs both to humans and dogs, which after all have quite different cognitive capacities. In the case of belief, the profile would probably require some interaction with wants, so that the system acts _on the basis of its beliefs_ towards achieving its wants. Whether Transformer LLMs fulfil this aspect of the functional profile is debatable. But one might propose a stricter functional profile and require
1. the candidate state to induce physical engagement with the world under suitable condition, or
2. to enable forms of reasoning which LLMs still do not reliably exhibit.

Once again, there is nothing close to a universally accepted answer on what the functional profile of beliefs is. But  even if we could agree on the functional profile of belief states, then we would have to wonder whether having states with similar but not quite the same functional profile is sufficient for access consciousness and therefore being a mind. Perhaps Transformer LLMs do not have beliefs but almost-something-like-beliefs. If that were so, would that justify declaring them to be minds? How far off can the functional profile be before we draw the line? In light of such issues, I suggest we should ask whether the search for a sufficient condition for being a mind might be based on a misunderstanding of the semantics of MIND.

## What kind of concept is the concept MIND?

My partial answer to this question is: _A graded concept to be used with care._

At least so far, no one has found a convincing analysis of what it is to have the mental states that would characterise a mind. Certainly, no one has been able to settle the debates with a set of necessary and jointly sufficient conditions. That might also be because MIND does not allow for an analysis in terms of such conditions.

The concept of MIND resembles that of BIRD more closely than that of HYDROGEN. An atom is a hydrogen atom if and only if it has exactly one proton at its core. No such biconditional exists for BIRD. Instead we have core examples of what falls under the concept (a robin), further removed examples (a penguin), and as we go further down the spectrum to the archaeopteryx, we do not know at which point to draw the line. The concept of BIRD has something like a prototypical structure, where we have features that are typical for birds, but we have no clear cutoff for being a bird.[^5]

Being a mind might be like being a bird. A computational system might be closer or further away from being a prototypical mind. Being arrogant enough to take the human mind as the prototype of a mind, a Transformer LLM is certainly far removed -- and I will stress this below again -- but this is not to say that they do not fall under the concept at all. Penguins do not fly; they do not live in trees; they eat fish instead of seeds. They are pretty far removed from the typical bird. Penguins are, nonetheless, birds.

By now I have justified my assertion that part of the correct answer to the original question is: _It is complicated._ It is complicated because we don't know enough about minds and Transformer LLMs and it is complicated, because the semantics of the concepts allow some stretching. But I will end on a more definitive note. At least for now, I believe in most contexts it is not particularly _useful_ to call LLMs minds.

When we think of minds, we think of humans and other relatively complex animals that
1. engage with non-textual objects in the world and manipulate them according to their wants,[^6]
2. self-reproduce and have been subjected to long-term evolution,
3. are heavily multi-modal (e.g. have smell, touch, proprioception etc.),
4. are probably not trained by backpropagation,
5. spend a significant amount of their cognitive capacity on securing their energy source,
6. either don't use language at all or use it _as humans_,
7. have phenomenal consciousness.

A standard Transformer LLM lacks these features, and it is therefore is usually not helpful to call LLMs minds.  The point is not that these features are _necessary_ conditions for having a mind -- I have dismissed this for the case of phenomenal consciousness -- but that they are characteristic for having a mind. This might change over time, the concept MIND might come to be recentered closer to Transformer LLMs as AI systems become widespread. For now, however, you and I are the more typical minds in the world.

Were I to discover the fossil of an archaeopteryx in my garden, I should not tell the museum that I have found some bird bones behind the house. There might be a way to construe the statement as true, but it is not particularly helpful. The same usually applies to calling Transformers minds.

I propose a broadly contextualist approach. If you sit in a philosophy seminar and try to list all existing kinds of minds, then it might be sensible to mention LLMs as an edge case. For making sense of LLMs as a tool, it is unhelpful, because human minds cannot be used as tools in the same way as Transformer LLMs. For analysing their inner working, it is unhelpful to describe LLMs as minds, because we need to look at more specific mechanisms for that purpose. For trying to predict their social impact, it is unhelpful to describe LLMs as minds, because adding Transformer LLMs to the world is not like adding human minds to the world. The similarities are not as relevant as the differences in most contexts.

My advice is to avoid calling an LLM a mind, unless you find yourself in one of the rare situations in which doing so helps to move forward the discussion. Personally, I'll try to set this topic aside after this post and focus on more fruitful questions, such as how transformers deal with [compositional meaning](/transformer-speculations/).


## References

- Block, N. (1995). [On a Confusion About a Function of Consciousness.](https://doi.org/10.1017/s0140525x00038188) Brain and Behavioral Sciences, 18(2), 227–247.
- Conia, S., & Navigli, R. (2021). [Framing Word Sense Disambiguation as a Multi-Label Problem for Model-Agnostic Knowledge Integration.](https://doi.org/10.18653/v1/2021.eacl-main.286) Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume, 3269–3275.
- Dai, D., Dong, L., Hao, Y., Sui, Z., Chang, B., & Wei, F. (2022). [Knowledge Neurons in Pretrained Transformers.](https://doi.org/10.18653/v1/2022.acl-long.581) Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), 8493–8502.
- Dennett. (1989). The Intentional Stance. MIT Press.
- Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.](http://arxiv.org/abs/1810.04805) ArXiv:1810.04805 [CS].
- Geva, M., Caciularu, A., Wang, K., & Goldberg, Y. (2022). [Transformer Feed-Forward Layers Build Predictions by Promoting Concepts in the Vocabulary Space.](https://aclanthology.org/2022.emnlp-main.3) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, 30–45.
- Nagel, T. (1974). [What is It Like to Be a Bat?](https://doi.org/10.2307/2183914) Philosophical Review, 83(October), 435–450.
- Reed, S., Zolna, K., Parisotto, E., Colmenarejo, S. G., Novikov, A., Barth-maron, G., Giménez, M., Sulsky, Y., Kay, J., Springenberg, J. T., Eccles, T., Bruce, J., Razavi, A., Edwards, A., Heess, N., Chen, Y., Hadsell, R., Vinyals, O., Bordbar, M., & Freitas, N. de. (2023). [A Generalist Agent.](https://openreview.net/forum?id=1ikK0kHjvj) Transactions on Machine Learning Research.
- Rogers, A., Kovaleva, O., & Rumshisky, A. (2020). [A Primer in BERTology: What We Know About How BERT Works.](https://doi.org/10.1162/tacl_a_00349) Transactions of the Association for Computational Linguistics, 8, 842–866.
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). [Attention is All you Need.](https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html) Advances in Neural Information Processing Systems, 30.
- Voita, E., Sennrich, R., & Titov, I. (2019). [The Bottom-up Evolution of Representations in the Transformer: A Study with Machine Translation and Language Modeling Objectives.](https://doi.org/10.18653/v1/D19-1448) Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), 4396–4406.
- Weiss, G., Goldberg, Y., & Yahav, E. (2021). [Thinking Like Transformers.](https://proceedings.mlr.press/v139/weiss21a.html) Proceedings of the 38th International Conference on Machine Learning, 11080–11090.

## Footnotes

[^1]: I will neglect in this post the difference between Transformer LLMs _being_ a mind and _having_ a mind. As long as a mind is realised, I will consider it a positive answer to the present question.

[^2]: According to Ned Block, "a state is access-conscious (A-conscious) if, in virtue of one's having the state, a representation of its content is (1) [...] poised for use as a premise in reasoning, (2) poised for rational control of action, and (3) poised for rational control of speech" (Block 1995, p. 231).

[^3]: As far as I can tell, the best way we have to argue for this conclusion is to point towards physical correlates of phenomenal consciousness and suggest neural networks lack them. It is far from clear that this is a decisive strategy, partially because there might be multiple ways of bringing consciousness about, i.e. our human correlates for phenomenal consciousness might not be necessary.

[^4]: The commonly known problems of LLMs with factuality do not affect this result in the slightest, since the question is whether the system has beliefs, not whether these beliefs are correct.

[^5]: I say "something like", because I want to avoid commitment to the entire theory of prototypes. I suggest that there are graded areas of falling under a concept, not that they are well-described by the distance to a single point in a semantic space, the prototype.

[^6]: I specifically deal with Transformer LLMs in this post, more generalist models, such as GATO (Reed et al. 2023) would require further discussion. I still doubt, however, that they are accurately described as having wants.
