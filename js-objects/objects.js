/* 1.Таск 1

Створіть порожній обєкт automationQA.

Додайте властивості чз крапку чи []:

programmerName - стрінга, має містити ім’я програміста;

programmingLanguages - стрінга, має містити назву мови програмування;

age - число, має містити вік програміста;

languages - масив, який представляє мови, якими говорить програміст

preferences - обєкт, який буде представляти що необхідно для програміста. Наприклад:

{basicPrefences : “table”}.

Виведіть обєкт automationQA у консоль. */

const automationQA = {};

automationQA.programmerName = "Jack"
automationQA["programmingLanguage"] = "JavaScript"
automationQA.age = 15
automationQA["languages"] = ["English", "Ukrainian"]
automationQA.preferences = {
    "devices": ["laptop","phone","mouse"],
    "food":["apples","bananas"],
    "money":["salary","raise"]
};

console.log(automationQA);

/* 
2.Tаск 2

Створіть обєкт room

Додайте властивості(тут можна одразу записати в обєкт):

name - стрінга, має містити назву кімнати;

size - число, має містити розмір кімнати;

window - булеве значення. // true/false.

Виведіть у консоль значення name, window.
*/

const room = {
    name : "living room",
    size: "1m^2",
    window: true,
};

console.log(room["name"]);
console.log(room["window"]);

/*
3.Таск 3

Створіть обєкт movie

Додайте властивості(тут можна одразу записати в обєкт):

title - стрінга, має містити назву фільму;

releaseYear - число, має містити дату коли вийшов фільм;

genre - стрінга, має містити жанр.

Замініть жанр фільму, замініть тайтл.
Додайте 2 додаткові властивості // Наприклад actors: {mainRole : “Test Test”, ….}, director.
Видаліть title з обєкту movie.
Виведіть оновлений обєкт movie у консоль.
*/

const movie = {
    title: "Titanic",
    releaseYear: 1997,
    genre: "drama"
};

console.log(movie);

movie["genre"] = "action";
movie["title"] = "Nightcrawler";
movie["actors"] = { 
    mainRole: "Jake Gyllenhaal",
    director: "Dan Gilroy"
};

delete movie["title"];

console.log(movie);

/*
4.Таск 4

Дано обєкт:

const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];
Пройдіться циклом по масиву обєктів.

Якщо title буде “The Great Gatsby” то пропустіть виконання ітерації.
Якщо year буде більше ніж 1940, то виведіть у консоль значення ключа та властивості.
Якщо author “George Orwell” то замініть його на довільне значення.
Виведіть оновлений масив об’єктів englishBooks

*/

const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

// Пройдіться циклом по масиву обєктів.

const iterateObj = (obj) => {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
};

for (const book of englishBooks) {

    // Якщо title буде “The Great Gatsby” то пропустіть виконання ітерації.
    if(book.title === "The Great Gatsby"){
        continue
    } 

    // Якщо year буде більше ніж 1940, то виведіть у консоль значення ключа та властивості.
    if (book.year > 1940) {
        iterateObj(book);
    }

    // Якщо author “George Orwell” то замініть його на довільне значення.
    if (book.author === "George Orwell") {
        book.author = "Bernard Shaw"; 
    }
};

for (const book of englishBooks) {
    console.log(book)
};

/*
Створіть вкладений об'єкт(обєкт у середині якого є ще один обєкт) з довільними властивостями.
Пройдіться по цьому вкладеному об'єкту циклом і виведіть всі елементи в консоль.
*/

let myNestedCard = {
    bank : "monobank",
    number : 1234,
    fraud: false,
    security: {
        cvv: 123,
        epxdate: 162012,
        secretinfo: "abc"
    }
};

for (const key in myNestedCard) {
    if (typeof myNestedCard[key] === "object") {
        for (const nestedKey in myNestedCard[key]) {
            console.log(`${key}.${nestedKey}: ${myNestedCard[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${myNestedCard[key]}`);
    }
};

/*
6.Таск 6

Створіть обєкт user з властивостями name, age, email, address. Address має бути обєктом

// наприкд: address: {city: "your value", postalCode: "your value"}

Створіть функцію getUserInfo, яка приймає об'єкт користувача в якості параметру та використовує деструктуризацію для отримання name, age користувача

Створіть функцію getFullAddress, яка приймає об'єкт користувача в якості параметру та використовує деструктуризацію для отримання емейлу, міста та поштового коду користувача. 
// Наприклад: address: { city, postalCode }

Виведіть інформацію про користувача та емейл і його адресу, використовуючи результати функцій getUserInfo та getFullAddress.
*/

user = {
    name: "NewUser",
    age: 7,
    email: "abc@gmail.com",
    address: {
        street: "Abc",
        city: "Def",
        postcode: "AAA111",
        state: "Obs"
    }
};

// Створіть функцію getUserInfo, яка приймає об'єкт користувача в якості параметру та використовує деструктуризацію для отримання name, age користувача
function getUserInfo(obj){
    const { name, age } = obj
    return { name, age }
};

console.log(getUserInfo(user));

/*
Створіть функцію getFullAddress, яка приймає об'єкт користувача в якості параметру та використовує деструктуризацію для отримання емейлу, міста та поштового коду користувача. 
Наприклад: address: { city, postalCode }
*/

function getFullAddress(){
    console.log('abc')
};

function getFullAddress(user) {
    const { email, address: { town: city, postcode: postalCode } } = user;
    return { email, city, postalCode };
};

console.log(getFullAddress(user));

