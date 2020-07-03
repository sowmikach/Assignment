//jshint esversion:6

// METHOD : perform calculation
function calculate(operation){
  let firstInput = parseInt(document.getElementById("input1").value);
  let secondInput = parseInt(document.getElementById("input2").value);
  let result = calculator[operation](firstInput,secondInput);
  document.getElementById("result").innerHTML=result;
}
