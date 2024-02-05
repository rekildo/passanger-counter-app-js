// document.getElementById("count-el").innerText = 5;

let count = 0;

function add(){
      count++;
      document.getElementById("count-el").innerText = count; 
 }


 function save(){
      document.getElementById("entries").textContent += count + " - ";
      count = 0;
      document.getElementById("count-el").innerText = count; 
 }
