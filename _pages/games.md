---
layout: page
title: Games
permalink: /games/
---

  {% comment %}
=======================
The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
=======================
{% endcomment %}

{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.tags | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
=======================
The following part removes dulpicated tags and invalid tags like blank tag.
=======================
{% endcomment %}
{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

<div class="tags-expo-list">
{% comment %}
=======================
The purpose of this snippet is to list all the tags you have in your site.
=======================
{% endcomment %}
{% for tag in tags %}
<a href="#{{ tag | slugify }}" class="post-tag"> {{ tag }} </a> &nbsp;&nbsp;
{% endfor %}
</div>

<div class="tags-expo-section">
{% comment %}
=======================
The purpose of this snippet is to list all your posts posted with a certain tag.
=======================
{% endcomment %}
{% for tag in tags %}
<b><h2 id="{{ tag | slugify }}">{{ tag }}</h2></b>
	<ul>
	 {% for post in site.posts %}
		 {% if post.tags contains tag %}
		 <li>
		 <a href="{{ site.baseurl }}{{ post.url }}">
		 {{ post.title }} | 
		 <small class="post-date">
      		{{ post.date | date_to_string: "ordinal", "US" }} | ≈ {{ post.content | number_of_words }} words
		 </small>
		 </a>
		 </li>
		 {% endif %}
	 {% endfor %}
	</ul>
{% endfor %}
