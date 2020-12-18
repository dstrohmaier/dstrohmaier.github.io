---
layout: page
title: Posts
updated: 2020-11-16 11:18:56 +0000
---

Here I collect a few reading lists of various sorts I put together. Some record what I have read or my personal favourites, others are of a more academic flavour.


<p>
{% for post in site.categories."reading lists" %}
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
<p><a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS</a> feed</p>
