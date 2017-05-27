---
layout: default
title: Septentrion
custom_css: base_dark
custom_js: events
tagline: performance
group: index
---

<h2><b>PAST</b>&FUTURE</h2>
<table>
<tbody>
  {% for event in site.data.events %}
    <tr>
      <td class="date">{{ event.date }}</td>
      <td class="city">{{ event.city }}</td>
      <td class="location">{{ event.location }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
