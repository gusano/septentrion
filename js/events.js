$(document).ready(function() {
  markPastEvents();
});

function markPastEvents() {
  var menu = $('table tr');

  menu.each(function() {
    var timeData, date, dateTime, now;

    now = Date.now();
    timeData = $(this).find('td.date').html().split(' ');
    date = new Date(timeData[0], timeData[1], timeData[2]);
    dateTime = date.getTime();

    if (dateTime < now) {
      $(this).css('color', '#535353');
      $(this).find('a').contents().unwrap();
    }
  });
}