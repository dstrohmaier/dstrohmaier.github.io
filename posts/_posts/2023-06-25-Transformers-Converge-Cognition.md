---
layout: post
title:  "Transformers Converging with Cognition: More Papers"
date:   2023-06-30 08:05:00 +0000
category: posts
---

A while ago, I wrote up a number of papers (see [this post](/transformers-and-the-brain)), all of which suggested that transformer models have partially converged with human language cognition. Using various correlational measures and predictions the literature leads towards the conclusion that transformers and human language processing resemble each other.

The rate of publishing in this field being what it is, new papers have come out or have come to my attention:

- Goldstein et al.: [Thinking ahead: spontaneous prediction in context as a keystone of language in humans and machines](https://www.biorxiv.org/content/10.1101/2020.12.02.403477v4)
- Heilbron et al.: [A hierarchy of linguistic predictions during natural language comprehension](https://www.pnas.org/doi/full/10.1073/pnas.2201968119)
- Lyu et al.: [Finding structure during incremental speech comprehension](https://www.biorxiv.org/content/10.1101/2021.10.25.465687v3)
- Kumar et al.: [Reconstructing the cascade of language processing in the brain using the internal computations of a transformer-based language model](https://www.biorxiv.org/content/10.1101/2022.06.08.495348v3)
- Tuckute et al: [Driving and suppressing the human language network using large language models](https://www.biorxiv.org/content/10.1101/2023.04.16.537080v2)
- Arana et al.: [Deep learning models to study sentence comprehension in the human brain](https://doi.org/10.1080/23273798.2023.2198245)

So far, the overall picture I derive from these papers is unchanged: Transformer-based language model exhibit a considerable convergence with measurements of human language cognition. Many of the papers underline this result. For example, Kumar et al. find convergence not just for the contextualised embeddings of transformer models, but also the weights of the attention heads. The convergence stretches to another aspect of transformers. While it remains a partial convergence, the finding is increasingly robust.

The interpretation of the convergence is still a matter of discussion. Both Goldstein et al. and Heilbron et al. provide further evidence for the importance of prediction, a theme that was also strong in the paper by Schrimpf et al, which I discussed in [my previous post](/transformers-and-the-brain). It seems increasingly clear that the human brain engages in a predictive process when processing language. Language modelling, although not necessarily in the exact forms (MLM, CLM etc.) used to pre-train transformers, has been vindicated as a cognitive task.

That both the brain and transformers predict upcoming words and/or linguistic features cannot be the whole story, however. After all, language models based on LSTMs or other RNN models also engage in such predictions, but have been found to show less (though some) convergence with cognitive measurements. What is it specifically about transformers that leads to the convergence? And to repeat an insight gleaned from papers in the previous post: It cannot be just the number of parameters.[^1]

What, then, is about transformer models that explains the convergence with human language processing? The best answer I found in this new set of papers is that contextualisation matters. The Goldstein et al. paper provides evidence in that direction, comparing standard contextualised GPT-2 embeddings with de-contextualised GPT-2 embeddings and GloVE embeddings.[^2] The standard GPT-2 embeddings perform best. But this does not answer all our questions: Why does contextualisation help? Is it because it addresses issues such as polysemy and homonymy? Or do transformers even partially address such issues as compositionality? (On the latter see [this post](/transformer-speculations) by me.)

So far, the convergence finding has hold up in the literature. When it comes to interpreting the convergence, however, research is only inching forward with many questions left open. Both sides of the convergence are opaque, hence finding the convergence itself can only be an initial finding, albeit an extremely exciting one!


## Footnotes

[^1]: One paper showing this is the one by [Merkx and Frank](https://doi.org/10.18653/v1/2021.cmcl-1.2).

[^2]: The comparison sadly does not include RNN models, which also provide a form of contextualisation.
