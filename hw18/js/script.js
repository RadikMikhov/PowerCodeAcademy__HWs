let inputText = document.querySelector(".todo__input");
let btn = document.querySelector(".add__btn");
let newLi = document.querySelector(".todo__left");
let newCheckbox = document.querySelector(".checkbox");
let compleatedItem = document.querySelector(".comleated__item");

btn.addEventListener('click', addItem);
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

  let createCheckbox = document.createElement('input');
  createCheckbox.setAttribute('class', 'checkbox');
  createCheckbox.setAttribute('type', 'checkbox');
  newLi.appendChild(createCheckbox);
  console.log(createCheckbox)

  createElement.textContent = getValue;
  newLi.appendChild(createElement);
  inputText.value = "";
};
