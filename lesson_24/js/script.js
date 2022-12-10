"use strict"

// --------------Масиви в JAVASCRIPT--------------

// Задача №2
let users = ["Ваня", "Иштван"];
users.push("Оля");
console.log(users);

let index = users.indexOf("Иштван");
console.log(index);

users.splice(index, 1, "Петя");
console.log(users);

let removedEl = users.shift();
console.log(removedEl);

users.unshift("Маша", "Паша");
console.log(users);

// Задача №3
let arr = ["Ваня", "Иштван", "Оля"];
let removedElement = arr.splice(arr.indexOf("Иштван"), 1);
console.log(removedElement);

// Задача №4
let str = "Ваня, Иштван, Оля";
let newArr = str.split(", ");
console.log(newArr);

// --------------DOM--------------

// Задача №1
const dataEl = document.querySelector('[data-say-hi]');
const dataAttr = dataEl.getAttribute('data-say-hi');
console.log(dataAttr);

// Задача №2
const itemsEl = document.querySelectorAll('li');
itemsEl.forEach(itemEl => {
	if (itemEl.textContent === 'Йончі'){
		console.log(itemEl.textContent);
	}
});

// Задача №3
const collectionEl = document.querySelectorAll('.like');
console.log(collectionEl);

// Задача №4
const listEl = document.querySelector('ul');
listEl.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);
		
// --------------SCROLL--------------

// Задача №1
const mainElementWidth = document.documentElement.clientWidth;
console.log(mainElementWidth);

const windowWidth = window.innerWidth;
console.log(windowWidth);

const scroll = windowWidth - mainElementWidth;
console.log(scroll);

// Задача №2
function setScrollTo() {
	window.scrollTo({
		top: 1000,
		left: 0,
		behavior: "smooth",
	})
}
setTimeout(setScrollTo, 1000);

// Задача №3

// 1й елемент
const firstEl = document.querySelector('.page');

const firstElTop = firstEl.getBoundingClientRect().top;
const firstElLeft = firstEl.getBoundingClientRect().left;

const firstElDocumentTop = firstElTop + window.pageYOffset;
const firstDocumentElLeft = firstElLeft + window.pageXOffset;

const firstDocumentElPosition = {
	"top": firstElDocumentTop,
	"left": firstDocumentElLeft
};
console.log(firstDocumentElPosition);


// 2й елемент
const secondEl = document.querySelector('h1');

const secondElTop = secondEl.getBoundingClientRect().top;
const secondElLeft = secondEl.getBoundingClientRect().left;

const secondElDocumentTop = secondElTop + window.pageYOffset;
const secondDocumentElLeft = secondElLeft + window.pageXOffset;

const secondDocumentElPosition = {
	"top": secondElDocumentTop,
	"left": secondDocumentElLeft
};
console.log(secondDocumentElPosition);

// 3й елемент
const thirdEl = document.querySelector('[data-say-hi]');

const thirdElTop = thirdEl.getBoundingClientRect().top;
const thirdElLeft = thirdEl.getBoundingClientRect().left;

const thirdElDocumentTop = thirdElTop + window.pageYOffset;
const thirdDocumentElLeft = thirdElLeft + window.pageXOffset;

const thirdDocumentElPosition = {
	"top": thirdElDocumentTop,
	"left": thirdDocumentElLeft
};
console.log(thirdDocumentElPosition);