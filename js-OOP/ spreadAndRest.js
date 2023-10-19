/*
Таск1
У файлі spreadAndRest.js. Cтворіть 2 масиви з довільними значеннями.
Створіть третій масив у якому обєднайте ці два масиви за допомогою “…” spread
Виведіть третій масив у консоль.
*/

let languages = ["JS", "TS", "Python"];
let titles = ["Junior", "Middle", "Senior"];

const languagesTitles = [...languages, ...titles];
console.log(languagesTitles);

/*
Tack2
Cтворіть функцію multiply яка приймає 2 параметри, multiplier та arguments.
Параметр arguments має бути доданий за допомогою оператора збирання властивостей - “…” rest.
Помножте значення multiplier на кожен елемент який буде у arguments.
*hint Для опрацювання цієї операції, можете пройтись по arguments за допомогою методу map.
Очікуваний результат:
const result = multiply(4, 9, 83, 3);
console.log(result) // [ 36, 332, 12 ]
*/

// Як я думав
function multiply_1(multiplier, ...arguments){
    const counted_1 = []
    for(i of arguments){
        counted_1.push(multiplier * i);
    }
    return counted_1
};

// По правильному

function multiply_2(multiplier, ...args) {
    const counted_2 = args.map(element => multiplier * element);
    return counted_2;
};

const result_1 = multiply_1(4, 9, 83, 3);
const result_2 = multiply_2(4, 9, 83, 3);

console.log(result_1);
console.log(result_2);
