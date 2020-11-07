---
layout: post
title:  "Two Quotes on Agency: CS and Philosophy"
date:   2018-07-16 10:51:13 +0100
categories: agency
---

> "For each possible percept sequence, a rational agent should select an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has." (p. 37)

This is what Russell & Norvig offer as a definition for a rational agent in their textbook *Artificial Intelligence: A Modern Approach*. From the perspective of contemporary analytic philosophy this proposal suffers from multiple shortcomings:
- How are we supposed to interpret the 'should' in the purported definition?
- Does this definition provide necessary and jointly sufficient conditions? Is it supposed to?
- Maximization seems too demanding, especially if it has to occur in each instance of rational agent.
- Are we concerned with the perfectly rational agent or with a baseline which typical humans meet? If we are concerned with an ideal agent, then maximization might be more plausible.
- How broadly are we supposed to construe the notion of evidence provided by the percept sequence?

I could develop all these issues further, but my point is just that the Russell & Norvig definition falls short of what I would expect from an undergraduate philosophy student. Does that matter? They present this definition with a different purpose, not for the sake of conceptual analysis but to do work their later discussion and models of agency. Developing AI from the perspective of Computer Science might require a different focus than a philosophical account. To test this hypothesis, we can look at a philosophical definition of agents. List & Pettit characterise agents as follows in their book *Group Agency*:[1]

> "An ‘agent’, on our account, is a system with these features: it has representational states, motivational states, and a capacity to process them and to act on their basis." (p. 20)

For an analytic philosopher, this definition looks much more pleasing. There's no ambiguous 'should', there is no mention of maximization, and although the formulation doesn't use the typical bicondiational, it clearly gives necessary and jointly sufficient conditions for agency. The (not quoted) surrounding text also explains the three features (representational states, motivational states, and the capacity to process and act on them) in further detail. 

Would replacing Russell & Norvig's definition with this analysis improve textbook? I suggest that it wouldn't, because it uses resources which make seeing the way to implement about AI difficult. For example, mental states of the sort List & Pettit evoke are usually immensely rich and arguably holistic. Although I accept them as computational entities, they are nothing you could try to implement at the start of an AI project. The (internal) performance measure and the percept sequence can have a much simpler structure. Now one can reinterpret them as motivational and representational states, but using them directly in the account is at least pedagogically superior. The performance measure and the percept sequence figure in later discussions, where talk of mental states wouldn't work as well. Talking of maximization also provides a clear design goal, instead of the rather vague *acting on the basis of mental states*. Yes, maximization cannot be achieved in many situations, as Russell & Norvig themselves explain with reference to computational complexity, but it serves as clear target for the budding AI researcher. It provides the basis for writing a program.

Perhaps unsurprisingly, given that I'm a philosophy PhD getting into CS, I want to argue that we can learn from both approaches and that they can profit from each other. List & Pettit's analysis serves as reminder of the shortcomings in Russell & Norvig's definition. On the other side, the philosophers can be pushed by the AI researchers to make their accounts more operable.[2] Introducing mental states allows a straightforward and intuitive definition of agency, but how exactly are we supposed to implement them? Such questions [rekindled my interest in CS](https://dstrohmaier.github.io/life/2018/04/20/restarting-my-life.html).

---

[1] Here and in the following, I neglect the question whether List & Pettit offer a definition of agents or *rational* agents. I take it that having representational and motivational states required to satisfy some basic rationality criteria at least much of the time.

[2] To be fair, List & Pettit endorse a more specific account of mental states, namely Dennett's theory of the intentional stance. However, I have argued elsewhere that this choice was a mistake.

*References*
- List, C., & Pettit, P. (2011). *Group Agency: The Possibility, Design, and Status of Corporate Agents*. Oxford; New York: Oxford University Press.

- Russell, S., & Norvig, P. (2016). *Artificial Intelligence: A Modern Approach*. Boston Columbus Indianapolis New York San Francisco: Addison Wesley.