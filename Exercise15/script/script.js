//jshint esversion:6

// ------------ Addition -----------
document.getElementById("add").addEventListener("click", function(){
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = parseInt(a) + parseInt(b);
  document.getElementById("result").innerHTML = c;
});

// ------------ Subtraction -----------
document.getElementById("sub").addEventListener("click", function(){
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = parseInt(a) - parseInt(b);
  document.getElementById("result").innerHTML = c;
});

// ------------ Multiplication -----------
document.getElementById("mul").addEventListener("click", function(){
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = parseInt(a) * parseInt(b);
  document.getElementById("result").innerHTML = c;
});
