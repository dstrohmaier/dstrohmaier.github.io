---
layout: post
title:  "Writing a Philosophy Paper. Writing Software."
date:   2020-01-16 17:51:13 +0100
categories: Philosophy
---

Having worked in both computer science and philosophy for a little while, I have come to observe a number of similarities between writing software and a philosophy paper - and one key difference. 

### You always rely on the work of others

No piece of software that is more than the most minimal demonstration can be self-contained. It always draws on prior work. Likewise in philosophy, where you should refer to previous research. In both cases, it is a dependence in the conceptual tools you employ. You depend on others as thoughtful agents, as people how have a reasonable understanding of the world on which you can draw. 

### You spend more time reading than writing

In the case of philosophy papers, this does not come as surprise to anyone who has ventured to write one. Unless you are famous and people therefore publish your uninformed musings, you have to familiarise yourself with the literature or remain unpublished. For creating software the need for extensive reading might be more surprising, but you constantly need to look up documentation and StackOverflow. In addition, you have to reread the source code and the programs output to debug the software.

### You are never finished

The most frustrating similarity is that neither a substantial piece of software nor a substantial paper is ever finished. You only stop working on it. Unless you have the patience of Donald Knuth you will leave the project in an unfinished  state. And even if you have the patience of Derek Parfit, you will not reach the best state of a substantial philosophy paper.

You might have improved upon the existing literature, but you rarely reach the end of the inquiry, and even if you did you could still improve the expression. Your philosophical argument could be stated in a better way, you could have addressed another worry, and you neglected to develop one implication. Your code could be cleaner, you regret the choice of one abstraction, and there is a test missing. Looking at the outcome again, you could come up with something else to do.

### One difference

If the creative product is never finished, how do you know when to stop? What are the criteria for calling it good enough? Here philosophy and software engineering diverge: The program has to provide reasonable output and then you call it a day. You throw in a few safeguards so that it fails gracefully when it will do so, inevitably.

For a philosophy paper, the audience matters much more.[0] With the exception of experimental philosophy, philosophy is not an empirical discipline in which you can follow an accepted methodology and then be sure that you have a result. What matters for philosophy as an academic discipline is the reception by peers, within in peer review and in other contexts. You have to convince your audience. The argument is directed at them, at least if you aspire to achieve academic tenure and prestige. Thinking about your audience also helps for getting a paper accepted at NeurIPS, but if your neural network beats the standard and you put the code online, few care about your atrocious writing or incomplete explantion of why your network performs so well.

This difference in incentives changes the practice substantially. All the reading and writing in philosophy starts to turn around your peers, or those who you would like to be your peeers. The evaluation of the difference depends on two questions: 1) Is writing to convince a philosophical audience truth-conducive? 2) Could we do it differently?

There is also a major difference between writing a philosophy paper/software and a blog post. You can satisfyingly end it with major issues left open.

---
*Footnotes*

[0] User-facing programs such as games, so not the kind of machine learning code for NLP experiments I am writing, are closer to the philosophy paper. However, there remains a difference between using software and reading a paper. The users are not reading the source code, they are making use of what it does. The philosophical audicence reads your paper and scrutinises it.
