//jshint esversion:6
var biryani_items = ["CHICKEN BIRYANI", "MUTTON BIRYANI", "VEG BIRYANI", "PANEER BIRYANI"];
var pizza_items = ["CHICKEN PIZZA", "VEG PIZZA", "CHEESE PIZZA"];

function displayMainMenu(){
    document.getElementById("food").style.display="block";
    document.getElementById("biryani").style.display="none";
    document.getElementById("pizza").style.display="none";
    document.getElementById("chooseBiryani").onclick=displayBiryaniMenu;
    document.getElementById("choosePizza").onclick=displayPizzaMenu;
}

function displayBiryaniMenu(){
  document.getElementById("food").style.display="none";
  document.getElementById("biryani").style.display="block";
  str="";
  for(var i=0; i<biryani_items.length; i++){
    str+="<li id="+i+" onClick='addToCart_b(this.id)'>"+biryani_items[i]+"</li>";
  }
  document.getElementById("biryaniVarieties").innerHTML=str;
  document.getElementById("back_b").onclick= displayMainMenu;
}

function displayPizzaMenu(){
  document.getElementById("food").style.display="none";
  document.getElementById("pizza").style.display="block";
  str="";
  for(var i=0; i<pizza_items.length; i++){
    str+="<li id="+i+" onClick='addToCart_p(this.id)'>"+pizza_items[i]+"</li>";
  }
  document.getElementById("pizzaVarieties").innerHTML=str;
  document.getElementById("back_p").onclick= displayMainMenu;
}

var cart="";
function addToCart_b(id_value){
    cart+="<li>"+biryani_items[id_value]+"</li>";
    document.getElementById("addToCart").innerHTML=cart;
}

function addToCart_p(id_value){
    cart+="<li>"+pizza_items[id_value]+"</li>";
    document.getElementById("addToCart").innerHTML=cart;
}
displayMainMenu();
