"use strict"

const formBodyEl = document.querySelector('.form__body');
const inputEl = document.querySelector('.form__input');
const symbolsEl = document.querySelector('.form__counter span');

const maxLength = inputEl.getAttribute("maxlength");
symbolsEl.innerHTML = maxLength;

document.addEventListener('click', onSearchClick);
document.addEventListener("keyup", onFormClose);
inputEl.addEventListener("keyup", countSymbols);
inputEl.addEventListener("keydown", repeatSymbols);

function onSearchClick(event) {
	if (event.target.closest('.form__search')) {
		formBodyEl.classList.add('active');
	}
	if (!event.target.closest('.form')) {
		formBodyEl.classList.remove('active');
	}
}

function onFormClose(event){
	if (event.code === "Escape"){
		formBodyEl.classList.remove('active');
	}
}

function countSymbols() {
	const allSymbols = maxLength - inputEl.value.length;
	symbolsEl.innerHTML = allSymbols;
	if (allSymbols === 0) {
		symbolsEl.style.color = "red";
	} else {
		symbolsEl.style.color = "var(--span-color)"
	}
}

function repeatSymbols(event) {
	if (event.repeat) {
		countSymbols()
	}
}