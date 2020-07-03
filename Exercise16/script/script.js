//jshint esversion:6

var changeValue = (function(){
    var counterValue = 0;

    //METHOD : increment
    return function increment(){
        counterValue += 1;
        document.getElementById("counterVal").value=counterValue;
    };
})();
