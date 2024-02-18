---
layout: post
title:  "Suggestions for Better AI Criticism"
date:   2024-02-18 14:25:00 +0000
category: posts
---

Although I am [acutely
aware](https://dstrohmaier.com/compositionality-word-meaning/) of the
shortcomings of the current generation of AI models
(transformer-models in particular), most of the criticisms of AI I
stumble upon on the internet have become repetitive and lacking
insight. I am not interested in picking on anyone here, I'm interested
in reading more interesting criticisms. Therefore, I will provide a
list of proposals for _better_ AI criticism.[^1]

![Picture of a dog reading a
newspaper](/assets/images/dog-reading-news.jpg)

My suggestions pertain to criticism of the current abilities of AI,
rather than criticism of their broader social consequences (supposed
harm, replacement of human activities etc.). The criticisms I have in
mind are of the blog-post length and formality, not academic. The list
is neither complete, nor beyond dispute. Hopefully, it serves as a
source of sharpening ideas. Here are my suggestions:

- In your criticism, be specific about the architecture, or the family of
  architectures. Not all neural network technologies are transformer
  models, or even more specifically GPT models. Seek to tie your
  criticism back to the specifics of the architecture. For example,
  "as a transformer, the model lacks a bias about the order in which
  to process a sequence and therefore...".  The more general the
  target of the criticism, the stronger the argument needs to
  be. Unless you have an excellent argument, I advise against
  dismissing neural networks in general.
- Seek to distinguish whether the shortcomings are due to
  architecture, data, training time, or another factor. If you cannot
  be sure about the source, avoid claims relying on what the source
  is. Fewer claims are possible when the details of the model are
  secret, as in the case of most OpenAI model. While this is
  frustrating, it limits what diagnoses are warranted.
- When there are good reasons to be critical of the hype surrounding
  AI technologies, avoid policing of emotional reactions. It is fairly
  unproductive to scorn people for being impressed by what current
  models can do, not least because by the expectation of two decades
  ago, the models perform impressively. Instead, provide insight into
  the models and their limitations, so that people can adjust their
  reactions according to the reasons provided.
- Avoid reductive claims as a standalone form of criticism,
  i.e. claims that models are "just x". For example, the claim that
  language models are just statistical models for predicting the
  next/masked word is on its own rather uninteresting, unless it is
  embedded in a larger argument. If you go down the route of the
  larger argument, consider whether the reductive claim is true due to
  the model architecture and therefore general, or only due to a
  specific usage of the architecture. For example, in transformers the
  tokens can also easily be made to stand for other elements in a
  sequence than words. They do not have to be just a statistical model
  for predicting the next word.
- When criticising examples created by models, think in terms of
  distributions. From where in the distribution of model output are
  the examples taken? Are the samples cherry-picked, that is, are they
  examples of especially good performance? Then, stricter criteria for
  their evaluation are warranted. Are they representative of the
  entire distribution of model output? Then, it is more appropriate to
  give a sense of the range of the examples. "Out of 5 examples, all
  showed behaviour x" is a very different statement for a
  cherry-picked sample of output and a more representative one. Be
  open about the sampling.
- When comparing to human cognitive capacities, provide evidence to
  support your comparison. Unchecked by evidence, we are dubious
  judges of our abilities. Asserting that people _never_ make a
  certain sort of error --- "a real person would never fail to see
  that..." --- requires empirical data to support the claim.
- Be aware of human tendencies in processing input, in this case the
  output of AI models, and adjust your criticism to it. We tend to be
  very generous in our interpretation of text, doing our best to make
  sense of it. We might be less forgiving with other forms of input
  (e.g. video). The targeting of your AI criticism should
  reflect more than our human processing biases.
- Moving goal posts can be acceptable, but provide a justification for
  why the goal posts have to be moved. Often we put the goal posts
  where we believed that they would capture something deeper:
  Reasoning and understanding. While we might have been mistaken in
  that judgement, it needs to be argued _why_ we were mistaken and
  _why_ the new place for the goal post will do any better. That a
  model beat a goal post is, on its own, not a reason to move the
  post.
- Stay curious.


### Footnotes

[^1]: Better in terms of being intellectually enlightening and pushing forward science.
