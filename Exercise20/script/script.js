//jshint esversion:6
$(document).ready(function() {
  // --------------------- Carousel ----------------------
  let slideIndex = 1;
  let myTimer;
  $(".previous_btn").click(function() {
    moveSlides(-1);
  });
  $(".next_btn").click(function() {
    moveSlides(1);
  });
  /**
   * @function plusSlides
   * @param {number} n - move next or previous
   * DESCRIPTION - moves from one slide to another slide
   */
  function moveSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides(slideIndex -= 1);
    } else {
      showSlides(slideIndex += 1);
    }
    if (n === -1) {
      myTimer = setInterval(function() {
        moveSlides(n + 2);
      }, 3000);
    } else {
      myTimer = setInterval(function() {
        moveSlides(n);
      }, 3000);
    }
  }

  /**
   * @function showSlides
   * @param {number} n - slide number
   * DESCRIPTION - displays slides
   */
  function showSlides(n) {
    let slides = $(".slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);
  myTimer = setInterval(function() {
    moveSlides(1);
  }, 3000);

  // ------------------- Count Down Timer ----------------
  $("#timer").html("Count Down");
  $("#datepicker").datepicker({
    minDate: 1
  });
  $("#startTimer").click(function() {
    $(".formWrapper").hide();
    setInterval(function() {
      countDown();
    }, 1000);
  });

  // --------------------- Accordion --------------------
  $("#accordion").accordion();
});

/**
 * @function countDown
 * DESCRIPTION - displays count down timer
 */
function countDown() {
  let countDownDate = new Date($("#datepicker").val()).getTime();
  let now = new Date().getTime();
  let countDownTime = countDownDate - now;
  let days = format(Math.floor(countDownTime / (1000 * 60 * 60 * 24)));
  let hours = format(Math.floor((countDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = format(Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = format(Math.floor((countDownTime % (1000 * 60)) / 1000));

  /**
   * @function format
   * @param {number} singleDigit
   * DESCRIPTION - converts single digit number to double digit
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
  if (countDownTime < 0) {
    clearInterval(myTimer);
    $("#timer").html("EXPIRED");
  }
}
