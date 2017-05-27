<h2>Events</h2>
<table>
{% for event in site.data.events %}
  {% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
  {% capture eventdate %}{{event.date | date: '%s'}}{% endcapture %}
  {% if eventdate < nowunix %}
    <tr class="past">
  {% else %}
    <tr class="future">
  {% endif %}
    <td class="date">{{ event.date }}</td>
    <td class="city">{{ event.city }}</td>
    <td class="location">{{ event.location }}</td>
  </tr>
{% endfor %}
</table>
