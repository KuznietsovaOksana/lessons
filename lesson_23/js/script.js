"use strict"

// --------------Оператори JAVASCRIPT--------------

/*
let sum = '35' + - "22";
console.log(sum);
console.log(typeof sum);
*/

/*
let sum = '35' * "22";
console.log(sum);
console.log(typeof sum);
*/

// console.log('558' > 22++);

/*
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
*/

// console.log(!false && 11 || 18 && !'');

/*let name = 0;
console.log(name ?? "Без имени")
*/

// --------------IF ELSE в JAVASCRIPT--------------

/*
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
*/

/*
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
*/

/*
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);
*/

/*
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/

// --------------Цикли FOR та WHILE--------------

// Задача №1
//Варіант 1
let numberOne = 1;
while(numberOne < 6) {
  console.log(numberOne);
  numberOne++;
}

//Варіант 2
let numberTwo = 1;
do {
  console.log(numberTwo);
  numberTwo++;
}
while(numberTwo <= 5);

//Варіант 3
for (let i = 1; i < 6; i += 1) {
	console.log(i)
};

// Задача №2
/*
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}
*/

// Задача №3
// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }
let num = 0;
while (num < 3) {
  console.log(`Число : ${num}`);
  num++;
}

// Задача №4
firstFor: for (let i = 0; i < 2; i++) {
	for (let size = 0; size < 3; size++) {
    if(size === 1) {			
      break firstFor;
    }
	}
}

// --------------Numbers в JAVASCRIPT--------------

// Задача №1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Задача №2
let valueFloat = parseFloat("135.58px");
console.log(valueFloat);

// Задача №3
let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат выражения NaN');
} else {
	console.log('Результат выражения не NaN');
}

// Задача №4
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5
console.log(Math.floor(58.858));
console.log(parseInt(58.858));

// --------------Strings в JAVASCRIPT--------------

// Задача №2
let text = 'фрилансер';
// let textSymbol = text[5];
let textSymbol = text.indexOf('н');
console.log(textSymbol);

// Задача №4
let textTwo = 'фрилансер';
console.log(textTwo.toUpperCase());


let textSlice = 'фрилансер';
console.log(textSlice.slice(3, 6));

/*
let text = 'фрилансер';
console.log(text.includes('лан', 3));
*/
