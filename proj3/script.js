
const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){

    text.textContent = "JavaScript Successfully Changed This Text!";

});

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});