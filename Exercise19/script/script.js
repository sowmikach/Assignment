// jshint esversion:6
var course = '';
var comment = '';
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const REVIEWS_PER_PAGE = 5;


// TODO:Create a folder - constants and a file named constants.js. Have all constant values like MONTHS,REVIEWS etc within that file and export it here


$(document).ready(function() {

  //ajax call for courses
  $.ajax({
    METHOD: 'GET',
    url: 'https://5f0ae7ff5e512a00161c195f.mockapi.io/courses',
    success: function(courses) {
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
    url: 'https://5f0ae7ff5e512a00161c195f.mockapi.io/reviews',
    success: function() {
      displayReviews();
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
  $("#review-btn").click(function(reviewsL) {
    var d = new Date();
    commentText = document.getElementById("commentText").value;
    if (commentText != "") {
      var reviewObj = {
        comment: commentText,
        user: "Sowmika",
        likes: 0,
        profileImg: "https://i.pinimg.com/originals/78/2a/90/782a909dda83dc4fb1ee4855a5bdd317.png",
        timeStamp: d.toISOString()
      };

      reviewsL = JSON.parse(localStorage.getItem("reviewsL"));
      reviewsL.unshift(reviewObj);
      localStorage.setItem("reviewsL", JSON.stringify(reviewsL));
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

  // Go Back to Top of the page
  //TODO:Please check the requirements. It would be menntioned to use only HTML for this feature
  $("#goTop").click(function() {
    $(window).scrollTop(0, 0);
  });

});


// TODO:Parameter and Function desription  is missing. 
// TODO:Avoid global variables as much as possible. 
//TODO: UI of reviews does not match UX
//TODO: UI of nav bar does not match UX

/**
 * @function displayReviews
 */
function displayReviews(start = 0) {
  var reviewsL = JSON.parse(localStorage.getItem("reviewsL"));
  if (reviewsL == undefined) {
    localStorage.setItem("reviewsL", JSON.stringify([]));
  }
  var page = $(".page")[start];
  if (page != undefined) {
    $(".page").css({
      "background-color": "#794383",
      "color": "#fff"
    });
    for (i = 0; i < reviewsL.length / REVIEWS_PER_PAGE; i++) {
      if (i != start) {
        $(".page").eq(i).css({
          "background-color": "rgb(238,238,238)",
          "color": "#000"
        });
      }
    }
  }
  $("#review-list-wrapper").empty();

  if (((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE) < reviewsL.length)
    len = ((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE);
  else
    len = reviewsL.length;
  comment = '';
  for (let i = (start * REVIEWS_PER_PAGE); i < len; i++) {
    comment += '<div class="review-list-item" id="review-list-item">' +
      '<div class="profile left"><img src=' + reviewsL[i].profileImg + ' alt="profile pic"></div>' +
      '<div class="person-profile left">' +
      '<h1 class="name">' + reviewsL[i].user + '</h1>' +
      '<p class="comment">' + reviewsL[i].comment + '</p>' +
      '<div class="thumbsup"><i class="fa fa-thumbs-up" onclick="countLikes(' + i + ')"></i>' +
      '<span class="count">' + reviewsL[i].likes + '</span>' +
      '<p class="right day">' + MONTHS[reviewsL[i].timeStamp.slice(5, 7) - 1] + ' ' + reviewsL[i].timeStamp.slice(8, 10) + '</p>' +
      '</div>' +
      '</div>' +
      '<div class="clearfix"></div>' +
      '</div>';
  }
  $("#review-list-wrapper").append(comment);
  $("#noOfReview").text(reviewsL.length);
}

/**
 * @function countLikes
 * @param {number} index
 */
function countLikes(index) {
  var reviewsL = JSON.parse(localStorage.getItem("reviewsL"));
  var count = document.getElementsByClassName("count")[index % REVIEWS_PER_PAGE].innerHTML;
  reviewsL[index].likes = parseInt(count) + 1;
  document.getElementsByClassName("count")[index % REVIEWS_PER_PAGE].innerHTML = parseInt(count) + 1;
  localStorage.setItem("reviewsL", JSON.stringify(reviewsL));
}

/**
 * @function displayPages
 */
function displayPages() {
  $("#review_pages").empty();
  var reviewsL = JSON.parse(localStorage.getItem("reviewsL"));
  for (let i = 0; i < (reviewsL.length / REVIEWS_PER_PAGE); i++) {
    var page = '<button id="page" class="page" onclick="displayReviews(' + i + ')"><div>' + (i + 1) + '</div></button>';
    $("#review_pages").append(page);
  }
}
//Invoke function within document ready as much as possible.
displayPages();
