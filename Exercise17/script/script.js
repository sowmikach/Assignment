//jshint esversion:6
//Can we try this using AJAX call ?
(function(){
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
})();
