let add = document.querySelector(".add__btn");

add.addEventListener("click", function () {
  let inputForm = document.forms.formInput;
  let textValue = inputForm.elements.text.value;
  if (textValue !== '') {
    addTodo(textValue);
  }
  textValue.value = "";
  
});

function addTodo(x) {
  let parentLeft = document.querySelector(".todo__left");
  let child = document.createElement("li");
  child.classList.add("todo__item");
  child.innerHTML = x;
    parentLeft.prepend(child);
}
