---
layout: default
title: "Testing Tailwind setup"
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

Just trying to see how things will look when getting setup