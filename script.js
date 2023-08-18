console.log("Hello");
console.log("active");

const home = document.getElementById("home");

const button = document.getElementById("button");
const text = document.getElementById("text")
const emailInput = document.querySelector(".emailinput");

const changetext = () =>{
  text.textContent = emailInput.value;
}
button.addEventListener("click", changetext);