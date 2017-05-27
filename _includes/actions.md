<h2>Performances</h2>
<p class="infos">Click on thumbnails below to see galleries</p>
<div class="row">
{% for action in site.data.actions %}
  <div class="col-md-4 col-sm-12 col-xs-12">
    <h3>#{{action.id}} - <span class="title">{{action.title}}</span></h3>
    <div class="action">
      <div class="desc">
        {{action.desc}}
        <ul class="gear">
        {% for item in action.gear %}
          <li>- {{item}}</li>
        {% endfor %}
        </ul>
      </div>
      <span class="credits">{{action.credits}}</span>
      <span class="thumbs">
        {% for image in action.images %}
          <a href="img/{{image}}-1300.jpg" data-toggle="lightbox" data-gallery="gallery-{{action.id}}">
            <img src="img/{{image}}-500.jpg" title="action #{{action.id}}" class="img-responsive" />
          </a>
        {% endfor %}
      </span>
    </div>
  </div>
{% endfor %}
</div>
