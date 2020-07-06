//jshint esversion:6
var biryani_items = ["Chicken Biryani", "Mutton Biryani", "Veg Biryani", "Paneer Biryani"];
var pizza_items = ["Chicken Pizza", "Veg Pizza", "Cheese Pizza"];
var cart = "";
(function() {
  var item_categories = ["Biryani", "Pizza"];
  var classNames = ["biryani", "pizza"];
  var divWrap = document.createElement("div");
  item_categories.forEach((item, index) => {
    var textNode = document.createTextNode(item);
    var divElement = document.createElement("div");
    divElement.appendChild(textNode);
    divElement.setAttribute("id", item);
    divElement.classList.add(classNames[index], "menu-categories");
    divWrap.appendChild(divElement);
    divWrap.classList.add("flex-container");
    document.getElementById("menu").append(divWrap);
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-categories").style.display = "none";
  });
//TODO: Make the code more generic. Example is provided
  document.getElementById("Biryani").onclick = function(){displayMenu('Biriyani',biryani_items,"biryaniVarieties")};
  document.getElementById("Pizza").onclick = function(){displayMenu('Pizza',pizza_items,"pizzaVarieties")};


  function displayBiryaniMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-categories").style.display = "block";
    document.getElementById("title").innerHTML = "Biryani";
    let str = "";
    for (let i = 0; i < biryani_items.length; i++) {
      str += "<li id=" + i + " onClick='addToCart_biryani(this.id)'>" + biryani_items[i] + "</li>";
    }
    document.getElementById("menu_items_list").innerHTML = str;
    document.getElementById("menu_items_list").classList.add("menu-items-list", "biryaniVarieties");
    document.getElementById("back-btn").addEventListener("click", myFunc);
  }

  function displayPizzaMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-categories").style.display = "block";
    document.getElementById("title").innerHTML = "Pizza";

    let str = "";
    for (let i = 0; i < pizza_items.length; i++) {
      str += "<li id=" + i + " onClick='addToCart_pizza(this.id)'>" + pizza_items[i] + "</li>";
    }
    document.getElementById("menu_items_list").innerHTML = str;
    document.getElementById("menu_items_list").classList.add("menu-items-list", "pizzaVarieties");
    document.getElementById("back-btn").addEventListener("click", myFunc);
  }

  function displayMenu(title,items,className) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-categories").style.display = "block";
    document.getElementById("title").innerHTML = title;
    let str = "";
    for (let i = 0; i < items.length; i++) {
      str += "<li id=" + i + " onClick='addToCart_biryani(this.id)'>" + items[i] + "</li>";
    }
    document.getElementById("menu_items_list").innerHTML = str;
    document.getElementById("menu_items_list").classList.add("menu-items-list", className);
    document.getElementById("back-btn").addEventListener("click", myFunc);
  }
  function myFunc() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-categories").style.display = "none";
  }

})();

function addToCart(value) {
  cart += "<li>" + value + "</li>";
  //Explore the append function
  document.getElementById("cart_items").innerHTML = cart;
}

function addToCart_biryani(value) {
  cart += "<li>" + biryani_items[value] + "</li>";
  document.getElementById("cart_items").innerHTML = cart;
}

function addToCart_pizza(value) {
  cart += "<li>" + pizza_items[value] + "</li>";
  document.getElementById("cart_items").innerHTML = cart;
}
