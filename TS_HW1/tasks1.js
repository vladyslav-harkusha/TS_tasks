// 1) #dYQNrBV
//    Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log
var var1 = 'hello';
var var2 = 'owu';
var var3 = 'com';
var var4 = 'ua';
var var5 = 1;
var var6 = 10;
var var7 = -999;
var var8 = 123;
var var9 = 3.14;
var var10 = 2.7;
var var11 = 16;
var var12 = true;
var var13 = false;
console.log(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13);
// 2) #6Qb97gsv
//    Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Vladyslav';
var middleName = 'Viktorovych';
var lastName = 'Harkusha';
var person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
// 3) #4N0y5tufA
//    За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
var a = 100;
var b = '100';
var c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
// 4) #ruUtWDUI
//    Додаткове для тих хто цікавився prompt`oм
//    За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var personFirstName = prompt("Введіть ваше ім'я");
var personMiddleName = prompt("Введіть ваше по-батькові");
var personAge = prompt("Введіть ваш вік");
console.log("\u0406\u043C'\u044F: ".concat(personFirstName));
console.log("\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456: ".concat(personMiddleName));
console.log("\u0412\u0456\u043A: ".concat(personAge, " \u0440\u043E\u043A\u0456\u0432"));
