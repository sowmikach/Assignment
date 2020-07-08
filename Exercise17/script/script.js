//jshint esversion:6

$(document).ready(function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://run.mocky.io/v3/a019288e-55b9-4731-86ef-0c9b9251e596');
  ourRequest.onload= function(){
    if(ourRequest.status >= 200 && ourRequest.status<400){
      var movies = JSON.parse(ourRequest.responseText);
      displayMovies(movies);
    }else{
      console.log("Connected to server but it returned an error.");
    }
  };
  ourRequest.onerror = function(){
    console.log("Connection error");
  };
  ourRequest.send();
});

// ---------------- Method : Display Movies ---------------------
function displayMovies(movies){
  for(let i=0;i<movies.length;i++){

    let div=document.createElement("div");
    div.setAttribute("class","movies-list-items");

    /* ------------------ Start : Movie Poster --------------*/
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class","poster");
    var imageButton = document.createElement("a");
    imageButton.setAttribute("href","#pop_description"+i+"");
    imageButton.setAttribute("onclick","displayPopup("+i+");");
    let image = document.createElement("img");
    image.setAttribute("src", movies[i].poster);
    imageButton.append(image);
    imgDiv.appendChild(imageButton);
    div.append(imgDiv);
    /* ------------------ End : Movie Poster --------------*/

    /* ------------------ Start : Movie Released Year --------------*/
    let yearDiv = document.createElement("div");
    let year = document.createTextNode(movies[i].releaseDate.slice(0,4));
    yearDiv.setAttribute("class","year");
    yearDiv.appendChild(year);
    div.append(yearDiv);
    /* ------------------ End : Movie Released Year --------------*/

    /* ------------------ Start : Movie Title --------------*/
    let titleDiv = document.createElement("div");
    let title = document.createTextNode(movies[i].title);
    titleDiv.setAttribute("class","title");
    titleDiv.appendChild(title);
    div.append(titleDiv);
    /* ------------------ End : Movie Title --------------*/

    /* ------------------ Start : Movie Certificate --------------*/
    if(movies[i].isRestricted === true)
    {
      var adultDiv=document.createElement("div");
      adultDiv.setAttribute("class","adult");
      var aDiv=document.createElement("div");
      aDiv.setAttribute("class","adult-tag");
      var adultTag=document.createTextNode("A");
      aDiv.append(adultTag);
      adultDiv.append(aDiv);
      div.append(adultDiv);
    }
    /* ------------------ End : Movie Certificate --------------*/

    document.getElementById("movies-wrapper").append(div);

  }
}

// ---------------- Method : Display Popup ---------------------
 function displayPopup(i){
     document.getElementById("movies-wrapper").style.opacity="0.3";
     document.body.style.overflow="hidden";

     //-------------------- Popup Wrapper ---------------------
     var popWrapper=document.createElement("div");
     popWrapper.setAttribute("id","popWrapper");

     //-------------------- Popup Content ---------------------
     var popupDiv = document.createElement("div");
     popupDiv.setAttribute("id","pop_description");
     popupDiv.setAttribute("class","pop_description");

     var pop = document.createElement("div");

     //-------------------- Popup Image ---------------------
     var popImgWrapper = document.createElement("div");
     popImgWrapper.setAttribute("id","popImgWrapper");

     var popImg = document.createElement("img");
     popImg.setAttribute("id","popImg");
     popImg.setAttribute("src",movies[i].poster);
     if(movies[i].isRestricted===true){
         var adultdiv=document.createElement("div");
         adultdiv.setAttribute("class","adult");
         var adiv=document.createElement("div");
         adiv.setAttribute("class","adult-tag");
         var adultTag=document.createTextNode("A");
         adiv.append(adultTag);
         adultdiv.append(adiv);
         popImgWrapper.append(adultdiv);
     }
     popImgWrapper.append(popImg);
     pop.append(popImgWrapper);

     //-------------------- Popup Content ---------------------
     var movieDescription = document.createElement("div");
     movieDescription.setAttribute("id","movieDescription");

     //-------------------- Popup Movie Title ---------------------
     var titlewrap = document.createElement("div");
     titlewrap.setAttribute("id","titlewrap");
     var popTitle = document.createTextNode(movies[i].title);
     titlewrap.append(popTitle);
     movieDescription.append(titlewrap);

     //-------------------- Popup Movie Language ---------------------
     var langdiv= document.createElement("div");
     langdiv.setAttribute("id","langdiv");
     var langwrapper = document.createElement("div");
     var lang = document.createTextNode(movies[i].language);
     langwrapper.append(lang);
     langdiv.append(langwrapper);
     movieDescription.append(langdiv);

     //-------------------- Popup Movie Description ---------------------
     var desc=document.createTextNode(movies[i].description);
     movieDescription.append(desc);

     //-------------------- Popup Movie Likes ---------------------
     var thumbsupDiv= document.createElement("div");
     thumbsupDiv.setAttribute("id","thumbsupIconDiv");
     var thumbsupIcon= document.createElement("i");
     thumbsupIcon.setAttribute("class","fa fa-thumbs-up");
     thumbsupDiv.append(thumbsupIcon);

     var likesSpan= document.createElement("div");
     likesSpan.setAttribute("id","likesSpan");
     var like = document.createTextNode(movies[i].likes);
     likesSpan.append(like);
     thumbsupDiv.append(likesSpan);
     movieDescription.append(thumbsupDiv);
     pop.append(movieDescription);
     popupDiv.append(pop);

     //-------------------- Popup Close icon ---------------------
     var closeicon= document.createElement("i");
     closeicon.setAttribute("class","fa fa-times-circle");
     closeicon.setAttribute("id","closeicon");
     closeicon.setAttribute("onclick","hidePop()");
     popupDiv.append(closeicon);
     popWrapper.append(popupDiv);
     document.body.append(popWrapper);
 }


  // ---------------- Method : hidePop ---------------------
 function hidePop(){

     var element = document.getElementById("popWrapper");
     element.parentNode.removeChild(element);
     document.getElementById("movies-wrapper").style.opacity="1";
     document.body.style.overflow="visible";
 }
