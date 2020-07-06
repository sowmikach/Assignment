//jshint esversion:6

var changeValue = (function(){
    var counterValue = 0;

    //METHOD : increment
    function increment(){
        counterValue += 1;
        return counterValue;
    }
    return increment;  
})();
document.getElementById("counterButton").addEventListener("click",function(){
  document.getElementById("counterVal").value=changeValue();
});
