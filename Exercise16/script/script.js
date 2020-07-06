//jshint esversion:6

var changeValue = (function(){
    var counterValue = 0;

    //METHOD : increment
    return function increment(){
        counterValue += 1;
        //return the count
        document.getElementById("counterVal").value=counterValue;
    };
})();
//Add click event listener and invoke the closure here, display the count in the event listener