---
layout: default
title: Septentrion
custom_js: about
tagline: performance
group: index
---

<main>
  <section class="module parallax parallax-1">
    <div class="container">
      <h1>Septentrion</h1>
    </div>
  </section>

  <section class="module content">
    <div class="container">
      <p>
        <b>Septentrion</b> is a performance project involving psychoacoustics, dance, singing, clown 
        work and improvisation.<br />
        Developed in 2013 by <a href="http://yvanvolochine.com" target="_blank">Yvan Volochine</a> 
        as research on the subconscious.
      </p>
      <p>
        <b>Septentrion</b> performances, or actions, can be seen as physical tests as well as 
        multi-sensorial experiences, putting the audience in heavy emotional states, from stress 
        to delight.<br />
        Music and sounds also play an important role in the performances. All musical pieces are 
        written or recorded by Yvan Volochine. When needed, self-made controllers, sensors and 
        micro-computer are used.<br />
        Actions can be driven by the location history and culture, but not necesarily, as they 
        mostly are the result from an intensive work on improvisation, breathing and energy.
      </p>
      <p>
        Audience discretion is advised. 
      </p>
    </div>
  </section>

  <section class="module parallax parallax-2">
    <div class="container">
      <h2>Events</h2>
    </div>
  </section>

  <section class="module content">
    <div class="container event">
      <table>
      {% for event in site.data.events %}
        <tr>
          <td class="date">{{ event.date }}</td>
          <td class="city">{{ event.city }}</td>
          <td class="location">{{ event.location }}</td>
        </tr>
      {% endfor %}
      </table>
    </div>
  </section>

  <section class="module parallax parallax-3">
    <div class="container">
      <h2>Booking</h2>
    </div>
  </section>

  <section class="module content">
    <div class="container event">
      <h2>Booking</h2>
      <p>
        Somewhere between <b>Madrid (SP)</b>, <b>Bogotá (COL)</b>, <b>Berlin (DE)</b> and <b>Los Angeles (USA)</b>.
      </p>
      <p>
        <a href="mail-to:booking@s3pt3ntrion.com">booking (at) s3pt3ntrion (dot) com</a>
      </p>
    </div>
  </section>
</main>
