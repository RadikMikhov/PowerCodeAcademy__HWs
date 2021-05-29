let inputText = document.querySelector(".todo__input");
let btn = document.querySelector(".add__btn");
let newLi = document.querySelector(".todo__item");

btn.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit.click();
  }
});

function addItem() {
  let getValue = inputText.value;
  let createElement = document.createElement("li");
  createElement.classList.add("todo__item");

  createElement.textContent = getValue;
  newLi.appendChild(createElement);
  inputText.value = "";
}

btn.addEventListener('click', addItem);

