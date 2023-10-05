/* Таск 1. 

Напишіть 3 види функцій(function declaration, function expression, arrow function). 

Кожна з них приймає 2 параметри, поверніть більше значення. 

Викличте кожну функцію з 2 аргументами.

Результати виведіть у консоль.

*/

// Function declaration

function addNumbers(num1,num2){
    let result = num1 > num2 ? num1 : num2
    return result
};

console.log(addNumbers(5,2));

// Function expression

const returnBigger = function(num3,num4){
    let biggernum1 = num3 > num4 ? num3 : num4
    return `The bigger one is: ${biggernum1}`
};

console.log(returnBigger(3,1));


// Arrow function

const arrowCompare = (num5, num6) => num5 > num6 ? num5 : num6;

console.log(arrowCompare(5,10));

/* Таск 2.

Створіть функцію яка приймає один параметр value. 

Усередині функції виведіть значення value. 

Після цього, рекурсивно викличте функцію зі збільшеним значенням value(наприклад, value + 1). 

Фунція повинна викликатися, доки value не стане менше або рівне 20. 

Викличте вашу функцію з аргументом, наприклад, 2.

*/

function recursiveOne(value){
    console.log(value)
    value++
    if(value < 21){    
        recursiveOne(value)
    }
};

recursiveOne(2);

/*
Tacк 3.

Дано масив.

let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
 Створіть функцію яка в результаті свого виконання пройдеться по кожному елементу масиву. Для ітерації по масиву використовуйте for чи for .. of. Перевірте чи у масиві буде “cat”.

Результат виведіть в консоль.
*/

let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];

function iterateArr(arr){
    let catFound = false
    for(elem in arr){
        for(i of arr[elem]){
            if(i == "cat"){
                catFound = true
                console.log(i)
            } else{
                console.log(i)
            }
            
        }
    }
    if(catFound == true){
        console.log("A cat was found in the array! ≽^•⩊•^≼")
    } else {
        console.log("There is no cat in the array :(")
    }
};

iterateArr(nestedArray);

/*
Таск4.

Створіть функцію divideArray, яка приймає один параметр - масив чисел numbers.

У функції divideArray використайте блок try, щоб вивести результат ділення кожного елемента масиву на попередній елемент у масиві. 

Додайте умову, якщо у масиві менше елементів ніж 2, то додайте настроювану помилку throw new Error(”your message ”). 

Збережіть результати ділення у новий масив result.

У разі помилки ділення (якщо попередній елемент дорівнює 0 або якщо елементи не є числами), викиньте помилку за допомогою блоку catch з інформативним повідомленням.

Завершіть функцію за допомогою блоку finally та виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

Викличте функцію divideArray з різними масивами чисел, включаючи випадок, коли попередній елемент дорівнює 0 або один з елементів не є числом.
*/

function divideArray(numbers) {
    try {
      if (numbers.length < 2) {
        throw new Error("Please put at least 2 numbers");
      }
  
      const result = [];
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i - 1] !== 'number' || typeof numbers[i] !== 'number' || numbers[i - 1] === 0) {
          throw new Error("Wrong data type or division involes 0");
        }
        result.push(numbers[i] / numbers[i - 1]);
      }
  
      return result;

    } catch (error) {
      console.error(error.message);
      return []
    } finally {
      console.log("Processing done");
    }
  };

const arr1 = [8, 16, 32, 64, 128];
const arr2 = [2, 4, 0, 8, 16];
const arr3 = [10, 5, 'qwe', 2];
const arr4 = [5];
const arr5 = [];
const arr6 = [5,10,15,20,25];

console.log(divideArray(arr1));
console.log(divideArray(arr2));
console.log(divideArray(arr3));
console.log(divideArray(arr4));
console.log(divideArray(arr5));
console.log(divideArray(arr6));

/*
Таск 5.

a) Дано масив 

const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56].
Виведіть лише непарні числа з масиву.

b) Дано масив 

сonst arrayColors = [”yellow”, “green”, “apple”, “red”, “pink”]
відсортуйте масив з допомогою методу sort
*/

// a)

const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56]
const onlyOdds = array.filter(checkNumber);

function checkNumber(num) {
  if(num % 2 !== 0){
    return num
  }
};

console.log(onlyOdds);

// b)

const arrayColors = ["yellow", "green", "apple", "red", "pink"];

arrayColors.sort();

console.log(arrayColors);

/*
Таск 6.

Вам потрібно обєднати всі елементи у масиві за допомогою методу concat.

Створіть два масиви , які містять деякі значення.

Створіть новий масив, який містить всі елементи з обох вихідних масивів.

Виведіть отриманий об'єднаний масив на консоль.
*/

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];

const mergedArray1 = array1.concat(array2);

console.log(mergedArray1);

/*
Таск 7.

Вам потрібно обчислити суму всіх елементів у масиві за допомогою методу reduce.

Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].

Використовуючи метод reduce, обчисліть суму всіх елементів масиву.

Виведіть отриману суму на консоль.
*/

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 