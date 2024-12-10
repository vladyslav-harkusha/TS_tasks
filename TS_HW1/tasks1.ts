// 1) #dYQNrBV
//    Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log
const var1: string = 'hello';
const var2: string = 'owu';
const var3: string = 'com';
const var4: string = 'ua';
const var5: number = 1;
const var6: number = 10;
const var7: number = -999;
const var8: number = 123;
const var9: number = 3.14;
const var10: number = 2.7;
const var11: number = 16;
const var12: boolean = true;
const var13: boolean = false;
console.log(
	var1, var2,	var3, var4,	var5, var6, var7, var8, var9, var10, var11, var12, var13
);


// 2) #6Qb97gsv
//    Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName: string = 'Vladyslav';
const middleName: string = 'Viktorovych';
const lastName: string = 'Harkusha';
const person: string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);


// 3) #4N0y5tufA
//    За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);


// 4) #ruUtWDUI
//    Додаткове для тих хто цікавився prompt`oм
//    За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const personFirstName: string = prompt("Введіть ваше ім'я");
const personMiddleName: string = prompt("Введіть ваше по-батькові");
const personAge: string = prompt("Введіть ваш вік");
console.log(`Ім'я: ${personFirstName}`);
console.log(`По-батькові: ${personMiddleName}`);
console.log(`Вік: ${personAge} років`);
