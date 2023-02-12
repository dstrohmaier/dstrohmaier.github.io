---
layout: page
title: Posts
updated: 2023-02-12 14:19:33 +0000
---

<p><img src="/assets/images/edisons-electric-pen.jpg" alt="electric pen" height="250" /></p>
<p><a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS</a> feed</p>
<p>
{% for post in site.categories.posts %}
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
