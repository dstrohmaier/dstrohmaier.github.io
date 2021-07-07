---
layout: page
title: Reading Lists
updated: 2021-07-07 16:22:47 +0100
---

Here I collect a few reading lists of various sorts I put together. Some record what I have read or my personal favourites, others are of a more academic flavour.

<p>
{% for post in site.categories.lists %}
  {% unless post.draft %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h3>{{ currentdate }}</h3>
    <ul>
    {% assign date = currentdate %}
  {% endif %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% if forloop.last %}</ul>{% endif %}
  {% endunless %}
{% endfor %}
</p>

<p><img src="/assets/images/demon-beelzebub.jpg" alt="reading a book in front of a demon" height="250" /></p>
