//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calcSquareArea = (sideA: number, sideB: number): number => sideA * sideB;
console.log(calcSquareArea(2, 3));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const calcCircleArea = ( radius: number ): number => Math.PI * (radius ** 2);
console.log(calcCircleArea(5));


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calcCylinderArea = (radius: number, height: number): number => 2 * Math.PI * radius * height;
console.log(calcCylinderArea(5, 3));


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
const logElement = (arr: any[]): void => {
	for (const arrElement of arr) {
		console.log(arrElement);
	}
}
logElement([4, 6, 3]);


// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const createParagraph = (text: string): void => document.write(`<p>${text}</p>`);
createParagraph('paragraph')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
const createList1 = (text: string): void => document.write(`
		<ul>
			<li>${text}</li>
			<li>${text}</li>
			<li>${text}</li>
		</ul>
	`);
createList1('list item')


// #0Kxco1edSN
//   створити функцію яка створює ul з елементами li.
//   Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
const createList2 = (text: string, quantity: number) => {
	document.write('<ul>');
	for (let i = 0; i < quantity; i++) {
		document.write(`<li>${text}</li>`)
	}
	document.write('</ul>');
}
createList2('some text', 5);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
const createList3 = (arr: any[]): void => {
	document.write('<ul>');
	for (const elem of arr) {
		if (typeof elem !== 'object') {
			document.write(`<li>${elem}</li>`)
		}
	}
	document.write('</ul>');
}
createList3(['asdf', true, 454, false, undefined]);


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
interface Obj2 {
	id: number;
	name: string;
	age: number;
}

const printArray = (arrayOfObjects: Obj2[]): void => {
	document.write('<ul>');
	for (const obj of arrayOfObjects) {
		document.write(`<li>${obj.id} - ${obj.name} - ${obj.age} years</li>`)
	}
	document.write('</ul>');
}
printArray([{id: 4, name: 'dfs', age: 9}, {id: 24, name: 'd4242s', age: 89}]);


// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const findMinNumber = (arrOfNumbers: number[]): number => {
	let minNumber = Infinity;
	for (const number of arrOfNumbers) {
		if (number < minNumber) {
			minNumber = number;
		}
	}
	return minNumber;
}
console.log(findMinNumber([56, 1, 0, -88, 2]));


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13
const sumElements = (arr: number[]): number => {
	let sum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumElements([56, 1, 0, -88, 2]));


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swapElements = (arr: any[], index1: number, index2: number) => {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;

	return arr;
}
console.log(swapElements([11,22,33,44],0,1));


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
interface Currency1 {
	currency: string;
	value: number;
}

const exchange = (sumUAH: number, currencyValues: Currency1[], exchangeCurrency: string) => {
	let chosenCurrency;
	for (const currencyValue of currencyValues) {
		if (currencyValue.currency === exchangeCurrency) {
			chosenCurrency = currencyValue;
		}
	}

	return sumUAH / chosenCurrency.value;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
