//jshint esversion:6

$(document).ready(function() {

  // --------------------- Carousel ----------------------
  var slideIndex = 1;
  var myTimer;

  $(".fa-chevron-circle-left").click(function() {
    plusSlides(-1);
  });

  $(".fa-chevron-circle-right").click(function() {
    plusSlides(1);
  });

  /**
   * @function plusSlides
   * @param {number} n - move next or previous
   */
  function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides(slideIndex -= 1);
    } else {
      showSlides(slideIndex += 1);
    }
    if (n === -1) {
      myTimer = setInterval(function() {
        plusSlides(n + 2);
      }, 3000);
    } else {
      myTimer = setInterval(function() {
        plusSlides(n);
      }, 3000);
    }
  }

  /**
   * @function showSlides
   * @param {number} n - slide number
   */
  function showSlides(n) {
    var i;
    var slides = $(".slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);
  myTimer = setInterval(function() {
    plusSlides(1);
  }, 3000);

  // ------------------- Count Down Timer ----------------
  $("#timer").html("Count Down");

  $("#datepicker").datepicker({
    minDate: 1
  });

  $("#startTimer").click(function() {
    $(".formWrapper").hide();
    var countDownDate = new Date($("#datepicker").val()).getTime();
    setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      let days = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
      let hours = format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      let minutes = format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      let seconds = format(Math.floor((distance % (1000 * 60)) / 1000));

      /**
       * @function format
       * @param {number} singleDigit
       */
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
  });

// --------------------- Accordion --------------------
  $("#accordion").accordion();
});
