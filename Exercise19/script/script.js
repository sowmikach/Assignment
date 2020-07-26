// jshint esversion:6
$(document).ready(function() {
  //ajax call for courses
  $.ajax({
    METHOD: 'GET',
    url: API_URL.COURSES,
    success: function(courses) {
      let course = '';
      for (let i = 0; i < courses.length; i++) {
        course += '<div class="video-list-item">' +
          '<video controls><source src=' + courses[i].video + ' type="video/mp4"></video>' +
          '<h1>' + courses[i].title + '</h1>' +
          '</div>';
      }
      $("#video-list-wrapper").append(course);
    },
    error: function() {
      console.error("Error");
    }
  });
  //ajax call for reviews
  $.ajax({
    METHOD: 'GET',
    url: API_URL.REVIEWS,
    success: function(reviews) {
      let review = JSON.parse(localStorage.getItem("reviews"));
      if (review == null) {
        localStorage.setItem("reviews", JSON.stringify(reviews));
      }
      displayReviews();
      displayPages();
    },
    error: function() {
      console.error("Error");
    }
  });
  //Navigation bar
  $('#navigation li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //add reviews
  $("#review-btn").click(function(reviews) {
    let newDate = new Date();
    let commentText = document.getElementById("commentText").value;
    if (commentText != "") {
      var reviewObj = {
        comment: commentText,
        user: "Sowmika",
        likes: 0,
        profileImg: "https://i.pinimg.com/originals/78/2a/90/782a909dda83dc4fb1ee4855a5bdd317.png",
        timeStamp: newDate.toISOString()
      };
      reviews = JSON.parse(localStorage.getItem("reviews"));
      reviews.unshift(reviewObj);
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
    document.getElementById("commentText").value = "";
    displayReviews();
    displayPages();
  });
  //------------------- Footer Section ---------------
  //Location Coordinates
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#coordinates").html("  Latitude " + (position.coords.latitude).toFixed(2) +
        ", Longitude " + (position.coords.longitude).toFixed(2));
    });
  } else {
    console.log("Geolocation does not work in this browser");
  }
});

/**
 * @function displayReviews
 * @param {number} start
 * DESCRIPTION : display the review list based on the page selected
 */
function displayReviews(start = 0) {
  let comment = '';
  let len;
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  if (reviews == undefined) {
    localStorage.setItem("reviews", JSON.stringify([]));
  }
  let page = $(".page")[start];
  if (page != undefined) {
    $(".page").css({
      "background-color": "#794383",
      "color": "#fff"});
    for (let i = 0; i < reviews.length / REVIEWS_PER_PAGE; i++) {
      if (i != start) {
        $(".page").eq(i).css({
          "background-color": "rgb(238,238,238)",
          "color": "#000"});
      }
    }
  }
  $("#review-list-wrapper").empty();
  if (((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE) < reviews.length)
    len = ((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE);
  else
    len = reviews.length;
  for (let i = (start * REVIEWS_PER_PAGE); i < len; i++) {
    comment += '<div class="review-list-item" id="review-list-item">' +
      '<div class="profile left"><img src=' + reviews[i].profileImg + ' alt="profile pic"></div>' +
      '<div class="person-profile left">' +
      '<h1 class="name">' + reviews[i].user + '</h1>' +
      '<p class="comment">' + reviews[i].comment + '</p>' +
      '<div class="thumbsup"><i class="fa fa-thumbs-up" onclick="countLikes(' + i + ')"></i>' +
      '<span class="count">' + reviews[i].likes + '</span>' +
      '<p class="right day">' + MONTHS[reviews[i].timeStamp.slice(5, 7) - 1] + ' ' + reviews[i].timeStamp.slice(8, 10) + '</p>' +
      '</div>' +
      '</div>' +
      '<div class="clearfix"></div>' +
      '</div>';
  }
  $("#review-list-wrapper").append(comment);
  $("#noOfReview").text(reviews.length);
}

/**
 * @function displayPages
 * DESCRIPTION : display pages of review
 */
function displayPages() {
  $("#review_pages").empty();
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  console.log(reviews);
  for (let i = 0; i < (reviews.length / REVIEWS_PER_PAGE); i++) {
    var page = '<button id="page" class="page" onclick="displayReviews(' + i + ')"><div>' + (i + 1) + '</div></button>';
    $("#review_pages").append(page);
  }
}

/**
 * @function countLikes
 * @param {number} index
 * DESCRIPTION : increment likes on click
 */
function countLikes(index) {
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  let count = document.getElementsByClassName("count")[index % REVIEWS_PER_PAGE].innerHTML;
  reviews[index].likes = parseInt(count) + 1;
  document.getElementsByClassName("count")[index % REVIEWS_PER_PAGE].innerHTML = parseInt(count) + 1;
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
