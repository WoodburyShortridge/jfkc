---
title: Artful Innovation | Inclusive Design and Technology
subtitle: A Jean Kennedy Smith Arts and Disability Program | July 20 – August 30, 2017
layout: home
---
<div class="row">
	<div class="col l12 tight">
		<h2 class="grey-text text-darken-4">Part of JFKC: A Centennial Celebration of John F. Kennedy</h2>
	</div>
	<div class="col s12 m12 l6 tight text-col">
		<p>
			This exhibition presents objects that combine inclusive design and
			technology and result in equal parts, art and function. Together art,
			design, and technology produce ingenious and beautiful solutions that
			enable people of all abilities to interact with their environments.
		</p>
	</div>
	<div class="col s12 m12 l6 tight text-col">
		<blockquote>
		  <p>“Art means more than the resuscitation of the past: it means the free and unconfined search for new ways of expressing the experience of the present and the vision of the future.”</p>
		</blockquote>
		<p style="margin-left: 2rem; margin-top: -.75rem;">President John F. Kennedy</p>
	</div>
  {% for post in site.posts %}
	  <div class="col s12 m6 l4">
	  	<div class="card card-col">
	      <div class="card-content">
	      	{% if post.thumbnail == null %}
	      	{% else %}
	  	 	   <img src="img/thumb/{{post.thumbnail}}" alt="{{post.alt}}">
	  	 	{% endif %}
	        <a href="{{site.baseurl}}{{post.url}}"><h3 class="red-text text-darken-3 sliding">{{ post.title}}</h3></a>
	        <p>{{ post.description}}</p>
	      </div>
	    </div>
	  </div>
   {% endfor %}
</div>
