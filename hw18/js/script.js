let inputText = document.getElementById('todo__input');
let btn = document.getElementById('add__btn');
let inProgressContainer = document.getElementById('inprogress__container');
let SuccessContainer = document.getElementById('success__container');

btn.addEventListener('click', addItem);

function addItem() {
  	let getValue = inputText.value;
	inputText.value = "";

  	let createLabel = document.createElement('label');
  	createLabel.classList.add('inprogress__item');

	let createCheckbox = document.createElement('input');
	createCheckbox.setAttribute('type', 'checkbox');
	createCheckbox.addEventListener('change', doneToDo);
	createLabel.appendChild(createCheckbox);

	let createSpan = document.createElement('span');
	createSpan.innerText = getValue;
	createLabel.appendChild(createSpan);

	inProgressContainer.appendChild(createLabel);
};

let todoCheckboxes = document.querySelectorAll('.inprogress__item input[type="checkbox"]');

for(let i = 0; i < todoCheckboxes.length; i++){
	todoCheckboxes[i].addEventListener('change', doneToDo)
}

function doneToDo(){
	let getValue = this.nextElementSibling.innerText;
	inProgressContainer.removeChild(this.parentElement)
	
	let successToDo = document.createElement('div')
	successToDo.classList.add('success__item');
	successToDo.innerHTML = `<span>${getValue}</span>`
	
	let removeBtn = document.createElement('button');
	removeBtn.setAttribute('type', 'button');
	removeBtn.innerText = 'Delete';
	removeBtn.addEventListener('click', removeToDo)
	successToDo.appendChild(removeBtn)
	SuccessContainer.appendChild(successToDo)
}

let removeButtons = document.querySelectorAll('.success__item button')

for(let i = 0; i < removeButtons.length; i++){
	removeButtons[i].addEventListener('click', removeToDo)
}

function removeToDo(){
	SuccessContainer.removeChild(this.parentElement)
}