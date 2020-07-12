// jshint esversion:6
var x = document.getElementById("coordinates");
var noOfReview = document.getElementById("noOfReview");
var review_btn = document.getElementById("review-btn");
var course = '';
var comment = '';
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var REVIEWS_PER_PAGE = 3;

$(document).ready(function() {
  //ajax call
  // $.ajax({
  //   METHOD:'GET',
  //   url:'jsonplaceholder.typicode.com/posts'
  // }).done(function(courses){
  //     var str='';
  //     for(let i=0;i<courses.length;i++){
  //       str +='<div class="video-list-item">'+
  //               // '<video controls><source src='+courses[i].video+ 'type="video/mp4"></video>'+
  //               '<h1>'+courses[i].title+'</h1>'+
  //             '</div>';
  //     }
  //     $("#video-list-wrapper").append(str);
  // });

  //Navigation bar
  $('#navigation li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  //add reviews
  review_btn.addEventListener("click", function() {
    var d = new Date();
    comment = document.getElementById("commentText").value;
    if (comment != "") {
      var reviewObj = {
        user: "Sowmika",
        profileImg: "https://i.pinimg.com/originals/78/2a/90/782a909dda83dc4fb1ee4855a5bdd317.png",
        comment: comment,
        likes: 0,
        reviewDate: MONTHS[d.getMonth()] + " " + d.getDate()

      };
    }
    document.getElementById("commentText").value = "";
  });

  //review list
  var start = 0;
  if (((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE) < REVIEWS.length)
    len = ((start * REVIEWS_PER_PAGE) + REVIEWS_PER_PAGE);
  else
    len = REVIEWS.length;

  for (let i = (start * REVIEWS_PER_PAGE); i < len; i++) {
    comment += '<div class="review-list-item">' +
      '<div class="profile left"><img src=' + REVIEWS[i].profileImg + ' alt="profile pic"></div>' +
      '<div class="person-profile left">' +
      '<h1 class="name">' + REVIEWS[i].user + '</h1>' +
      '<p class="comment">' + REVIEWS[i].comment + '</p>' +
      '<div class="thumbsup"><i class="fa fa-thumbs-up"></i>' +
      '<span>' + REVIEWS[i].likes + '</span>' +
      '<p class="right day">' + MONTHS[REVIEWS[i].timeStamp.slice(5, 7) - 1] + ' ' + REVIEWS[i].timeStamp.slice(8, 10) + '</p>' +
      '</div>' +
      '</div>' +
      '<div class="clearfix"></div>' +
      '</div>';
  }
  $("#review-list-wrapper").append(comment);
  noOfReview.innerHTML = REVIEWS.length;

  //video
  for (let i = 0; i < courses.length; i++) {
    course += '<div class="video-list-item">' +
      '<video controls><source src=' + courses[i].video + ' type="video/mp4"></video>' +
      '<h1>' + courses[i].title + '</h1>' +
      '</div>';
  }
  $("#video-list-wrapper").append(course);

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
  $("#goTop").click (function(){ {
    $(window).scrollTop(0,0);
      }
  });

});
