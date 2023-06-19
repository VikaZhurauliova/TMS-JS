'uese strict'
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
//
let x = 20;
let y = 58;
let z = 42;
let b = x+y+z;
console.log(b)


// Создайте переменные:
//
//   - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
//
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

let s = 60;
let m = 60;
let h = 24;
let d = 365;

let myAgeInSeconds = 23*s*m*h*d;
console.log(myAgeInSeconds);


// Создайте две переменные.
// Поместите в них переменную **`count`** и
// превратите в строку, а **`userName`**
// наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = '42';

let countString = String(count);
let countString1 ='' +count;
let countString2 ='{$count}';

let userNameNumber = +userName;
let userNameNumber1 = Number(userName);
let userNameNumber2 = parseInt(userName);

console.log(typeof userNameNumber);
console.log(typeof userNameNumber1);
console.log(typeof userNameNumber2);

console.log(typeof countString);
console.log(typeof countString1);
console.log(typeof countString2);


// Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
let a = 1
let f = 2
let c = "белых медведей"

let sentence = `${a}${f} ${c}`;
console.log(sentence);

// Создайте переменные и поместите в них нижеприведенные слова.
// Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:
//
//   - доступ
//   - морпех
//   - наледь
//   - попрек
//   - рубило

let access = 'доступ';
let marines = 'морпех';
let frost = 'наледь';
let reproach = 'попрек';
let chopped = 'рубило';

let lengthWords =(`${access}${marines}${frost}${reproach}${chopped}`).length;
console.log(lengthWords);

// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
//
//   `Variable: %variable name% have type: %type variable%`

let numberType = 1254;
let stringType = 'Home';
let nullType = true;

console.log(
    `Variable: ${numberType} have type: ${typeof numberType}
    Variable: ${stringType} have type: ${typeof stringType}
    Variable: ${nullType} have type: ${typeof nullType}
`)

// Запросить у пользователя имя и возраст и вывести их в консоль.

let name=prompt("Укажите своё имя:");
let age=prompt("Укажите свой возраст:");

console.log(`Имя ${name}, а возвраст ${age}`);


// Поменяйте значение переменных местами не создавая дополнительной переменной:

let k = 'один';
let l = 'два';
[k, l] = [l, k];

console.log(k, l);

let var1 = 9;
let var2 = 4;


var1 = var1+var2;
var2 = var1-var2;
var1 = var1-var2;

console.log(var1,var2);

// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = `${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`;

console.log(cipher);
