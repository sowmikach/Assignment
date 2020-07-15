//jshint esversion:6
const target_date = "Jul 27 2020 12:00:00";
$(document).ready(function() {
  var countDownDate = new Date(target_date).getTime();
  setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    let days = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = format(Math.floor((distance % (1000 * 60)) / 1000));

    function format(singleDigit) {
      if (singleDigit < 10)
        singleDigit = "0" + singleDigit;
      return singleDigit;
    }
    $("#timer").html('<span class="days">' + days + '<span>D</span></span>' +
      '<span class="hours">' + hours + '<span>H</span></span>' +
      '<span class="minutes">' + minutes + '<span>M</span></span>' +
      '<span class="seconds">' + seconds + '<span>S</span></span>');
    if (distance < 0) {
      clearInterval(x);
      $("#timer").html("EXPIRED");
    }
  }, 1000);
  $("#accordion").accordion();
});
