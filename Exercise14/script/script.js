//jshint esversion:6

(function(){
  for(let i=0;i<movies.length;i++){
    let div=document.createElement("div");
    div.setAttribute("class","movies-list");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class","poster");
    let image = document.createElement("img");
    image.setAttribute("src", movies[i].poster);
    imgDiv.appendChild(image);
    div.append(imgDiv);
    let yearDiv = document.createElement("div");
    let year = document.createTextNode(movies[i].releaseDate.slice(0,4));
    yearDiv.setAttribute("class","year");
    yearDiv.appendChild(year);
    div.append(yearDiv);
    let titleDiv = document.createElement("div");
    let title = document.createTextNode(movies[i].title);
    titleDiv.setAttribute("class","title");
    titleDiv.appendChild(title);
    div.append(titleDiv);
    if(movies[i].isRestricted === true)
    {
      var adultdiv=document.createElement("div");
      adultdiv.setAttribute("class","adult");
      var adiv=document.createElement("div");
      adiv.setAttribute("class","adultTag");
      var adultTag=document.createTextNode("A");
      adiv.append(adultTag);
      adultdiv.append(adiv);
      div.append(adultdiv);
    }
    document.getElementById("movieswrapper").append(div);
  }
})();
