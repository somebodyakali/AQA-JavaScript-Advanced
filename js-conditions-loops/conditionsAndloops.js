// Нарахуйте зарплату людині яка працює у компанії. Створіть змінну yearsOfExperience яка буде символізувати час, скільки людина працює у компанії.

let personSalary;
let bonus;
const yearsOfExperience = 1;

// За допомогою конструкції if else, визначте заробітню плату та бонус

if (yearsOfExperience<0.5){
    console.log("Додаткова умова: якщо людина працює менше півроку")
    personSalary = 0
    bonus = 0
    console.log(`Зарплата: ${personSalary}\nБонус: ${bonus}`)
}
  else if (yearsOfExperience >= 0.5 && yearsOfExperience <= 1){
    console.log("Якщо людина працює від пів року до року, то зарплата = 100 , бонус 1 % від зарплати")
    personSalary = 100;
    bonus = personSalary * 0.01;
    console.log(`Зарплата: ${personSalary}\nБонус: ${bonus}`)

// Якщо людина працює від року до двох років, то зарплата = 333, бонус 3 % від зарплати
} else if (yearsOfExperience > 1 && yearsOfExperience <= 2){
    console.log("Якщо людина працює від року до двох років, то зарплата = 333, бонус 3 % від зарплати")
    personSalary = 333;
    bonus = personSalary * 0.03;
    console.log(`Зарплата: ${personSalary}\nБонус: ${bonus}`)

// Якщо людина працює від двох до чотирьох років, то зарплата = 555, бонус 4 % від зарплати
} else if (yearsOfExperience > 2 && yearsOfExperience <= 4){
    console.log("Якщо людина працює від двох до чотирьох років, то зарплата = 555, бонус 4 % від зарплати")
    personSalary = 555;
    bonus = personSalary * 0.04;
    console.log(`Зарплата: ${personSalary}\nБонус: ${bonus}`)
    
// Якщо людина працює від більше чотиьох років, то зарплата = 666 , бонус = ксть років роботи * зарплату
} else if (yearsOfExperience > 4){
    console.log("Якщо людина працює від більше чотиьох років, то зарплата = 666 , бонус = ксть років роботи * зарплату")
    personSalary = 666;
    bonus = yearsOfExperience * personSalary;
    console.log(`Зарплата: ${personSalary}\nБонус: ${bonus}`)
} else {
    console.log("Not in range")
};

// 2.Використовуючи конструкцію switch-case виведіть 12 місяців. 
//  Для кожного місяця ви повинні мати відповідний case в switch і виведіть назву місяця, коли цей case виконується.
//  Тобто в консолі має бути виведено місяць який ви вказуєте для виконання case. наприклад “January”.

let currentMonth = 1;

switch (currentMonth){
    case 1:
        console.log("January")
        break;
    case 2: 
        console.log("February")
        break;
    case 3: 
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("No month")
        break;
};

// 3.У нас є const number = 30 як верхня межа діапазону чисел,виведіть лише парні числа for.
//  Зверніть увагу, числа 0 та 22 не мають бути виведені

const number = 30;

for(n = 0; n<=30; n++){
    if(n % 2 !== 0 || n==0 || n==22){
        continue
    }
        console.log(n)
};


// 4.У вас є два числа numberA, numer B присвойте їм значення. 
// За допомогою тернарного оператора виведіть число яке більше.

let numberA = 5;
let numberB = 5;

let compareNumber = numberA > numberB
    ? console.log(`${numberA} is bigger than ${numberB}`)
    : numberA < numberB
        ? console.log(`${numberB} is bigger than ${numberA}`)
        : console.log(`${numberA} and ${numberB} are equal`);

// 5.За допомогою циклу while переберіть строку “Javascript is fun”
// Якщо строка містить літеру “a” використайте оператор сontinue
// Якщо строка містить літеру “n” зупиніть виконаня за допомогою break;

let counter = 0;
let jsString = "Javascript is fun";

while(counter < jsString.length){
    let letter = jsString[counter];
    if(letter.toLowerCase() == "a"){
        counter++;
        continue;
    }
    if(letter.toLowerCase() == "n"){
        break;
    }
    console.log(letter);
    counter++;
};