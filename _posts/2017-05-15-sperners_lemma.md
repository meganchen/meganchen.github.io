---
layout: post
title: Facebook Post Advertising Sperner's Lemma for Triangles
---
{{title}}
<h3>"Facebook Post" Advertising Sperner's Lemma for Triangles</h3>

After graduating from Wellesley, Ada, Bella, and Callie decide to move into an apartment together in Washington D.C. They settle upon an apartment with three rooms of different sizes: small, smaller, and smallest. Rent costs $2000 a month. Ada wants windows in her room, Bella wants quiet, and Callie’s happy to pay extra. Is it possible for all three to choose rooms they like and to divide the rent suitably for everyone? <br><br>

Luckily there is a mathematical method, which relies on Sperner's Lemma for Triangles. <br><br>

First, split a triangle into many smaller triangles (see Figure 1). Label the triangle following these rules:
<ol>
	<li>Label all of the red points different labels, like A, B, and C.</li>
	<li>Label the (blue) points along the edges of the triangle to match one of the red vertices on that edge.</li>
	<li>Randomly assign A, B, or C to the inside (purple) point(s).</li>
</ol>
<div class="container">
	<img src="{{site.baseurl}}/img/sperner'slemma.png"></img><br>
	<p class="text-center">Figure 1: Example Labelling</p>
</div>
<br>
After labelling, Sperner’s lemma says that there is an odd number of small triangles which have the three labels A, B, and C. <br><br>

To read more about how Sperner’s Lemma helps to split apartment rent, check out the <a href="https://www.nytimes.com/2014/04/29/science/to-divide-the-rent-start-with-a-triangle.html">NYTimes article “To Divide the Rent, Start With a Triangle"</a>.