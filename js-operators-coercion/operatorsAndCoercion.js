// Створіть змінну яка буде символізувати вік людини. 

const personAge = 18;

/* Після чого створіть булеву змінну, яка буде визначати чи особа досягла віку коли може отримати права,
( в Україні це 18 років), базуючись на заченні з попередньої змінної. Результат виведіть у консоль. */

let isPersonAllowed = personAge >= 18;
console.log(isPersonAllowed);

/* 2.Створіть дві змінні, які містять імена двох осіб. 
Використовуючи конкатенацію рядків, створіть третю змінну, яка містить вітання для обох осіб. Виведіть результат в консоль.
Базуючись на результаті всіх змінних зробіть конкантенацію всіх рядків (4 змінна, або просто обєднати у консоль лозі все) і виведіть результат у консоль. */

let nameOne = "Olena";
let nameTwo = "Serhiy";

let greeting = `Hi ${nameOne} and ${nameTwo}!`;
console.log(greeting);

let greeting2 = "The names are: " + nameOne + "," + nameTwo + "\n" + greeting;
console.log(greeting2);

//  3.Створіть змінну зі значенням "5.489"

let newVar = "5.489";

// приведіть змінну до типу даних number, зі збереженням символів після коми

let convertedNewVar = Number.parseFloat(newVar);
console.log(convertedNewVar, typeof convertedNewVar);

// округліть значення до одного знака після крапки

console.log(convertedNewVar.toFixed(1));

// поверніть змінну з типом даних number назад у тип даних string

let convertedNewVar2 = convertedNewVar.toString();
console.log(convertedNewVar2, typeof convertedNewVar2);

// 4.Створіть змінну зі значенням "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation."

let wikiVar = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation."

// виведіть довжину рядка

console.log(wikiVar.length);

// замініть всі слова Wikipedia на довільне слово чи букву, результат виведіть у консоль.

let newWikiVar = wikiVar.replaceAll("Wikipedia", "Abc");
console.log(newWikiVar);

// перевірте чи містить дана строка слово "world"

let ifWorldIsInString = newWikiVar.toLowerCase().includes("world");
console.log(ifWorldIsInString);

// перевірте чи закінчується дана строка cловом "foundation"
// Я так зрозумів, що очікуваний результат це true, тому зробив ще перевірку на слово foundation з крапкою, бо без крапки це false

let ifWikiEndsWithFoundation_1 = newWikiVar.toLowerCase().endsWith("foundation");
let ifWikiEndsWithFoundation_2 = newWikiVar.toLowerCase().endsWith("foundation.");
console.log(ifWikiEndsWithFoundation_1);
console.log(ifWikiEndsWithFoundation_2);

// 5* Обчислення площі та об'єму

// Створіть змінну radius і присвойте їй числове значення радіуса кола.

const radius = 5;

// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let circleArea = Math.PI * radius**2;
console.log(circleArea);

// Створіть змінну length і присвойте їй числове значення довжини прямокутника.

let length = 5;

// Створіть змінну width і присвойте їй числове значення ширини прямокутника.

let width = 10;

// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let rectangleArea = length * width;
console.log(rectangleArea);

// Створіть змінну height і присвойте їй числове значення висоти циліндра.

let height = 2;

let cylinderVolume = Math.PI * radius**2 * height;
console.log(cylinderVolume);

// Округліть кожне отримане значення до 2 значень після крапки

mathValues = [circleArea, rectangleArea, cylinderVolume];

for(i of mathValues){
    console.log(i.toFixed(2))
};

// console.log(circleArea.toFixed(2));
// console.log(rectangleArea.toFixed(2));
// console.log(cylinderVolume.toFixed(2));
