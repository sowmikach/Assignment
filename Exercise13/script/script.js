//jshint esversion:6

(function() {
  var biryani_items = ["Chicken Biryani", "Mutton Biryani", "Veg Biryani", "Paneer Biryani"];
  var pizza_items = ["Chicken Pizza", "Veg Pizza", "Cheese Pizza"];
  var cart = "";
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

  document.getElementById("Biryani").onclick = function(){displayMenu('Biriyani',biryani_items,"biryaniVarieties");};
  document.getElementById("Pizza").onclick = function(){displayMenu('Pizza',pizza_items,"pizzaVarieties");};

  function displayMenu(title,items,className) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-categories").style.display = "block";
    document.getElementById("title").innerHTML = title;
    let str = "";
    for (let i = 0; i <items.length; i++) {
      str += "<li id=" + i + " class='varieties'>" + items[i] + "</li>";
    }
    document.getElementById("menu_items_list").innerHTML = str;
    document.getElementById("menu_items_list").classList.add("menu-items-list",className);

    var userSelection = document.getElementsByClassName('varieties');
    for(let i = 0; i < userSelection.length; i++) {
      userSelection[i].addEventListener("click", function() {
        cart += "<li>" + items[i] + "</li>";
        document.getElementById("cart_items").innerHTML = cart;
      });
    }

    document.getElementById("back-btn").addEventListener("click", function(){
      document.getElementById("menu").style.display = "block";
      document.getElementById("menu-categories").style.display = "none";
      document.getElementById("menu_items_list").classList.remove(className);
    });
  }

})();
