/*
Tack3
Створіть клас ProductClass, який представляє товар у магазині. У класі Product повинні бути наступні властивості:
name - назва товару. price - ціна товару.
quantity - кількість одиниць товару на складі. Клас ProductClass повинен мати наступні методи:
getTotalPrice() - повертає загальну вартість товару (ціна * кількість).
purchase(quantity) - зменшує кількість товару на складі на одиницю (передану як аргумент) після покупки.
Також перевірте чи кількість товарів на складі не = 0 та чи кількість товарів яка є не менша ніж кількість товарів яка задана у аргументі.
*/

class ProductClass{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalPrice(){
        return this.price * this.quantity 
    }

    purchase(quantity){
        if(this.quantity != 0 || this.quantity >= quantity){
            this.quantity = this.quantity -= quantity
            console.log("Successful purchase")
        }
        else {
            console.log("Wrong quantity")
        }
    }
};

const newProduct1 = new ProductClass("shirt",5,2);
const newProduct2 = new ProductClass("hoodie",15,1);
const newProduct3 = new ProductClass("hat",10,5);

let newProducts = [newProduct1,newProduct2,newProduct3];

/*
Створіть 3 екземпляри класу Product для різних товарів та виконайте наступні дії:
// Приклад як це зробити, ви маєте мати 3 таких екземпляри класу.
const tShirt = new Product("t-shirt", 20, 100);
Виведіть загальну вартість кожного товарy для всіх ваших змінних екземпляра, використовуючи метод getTotalPrice().
Виконайте покупку purchase(quantity) для всіх товарів з екземпляру класу.
Виведіть залишок товарів на складі після кожної покупки.
*/

for(i of newProducts){
    console.log(`Total price for a ${i.name}: ${i.getTotalPrice()}, quantity ${i.quantity}`);
    i.purchase(1);
    console.log(`Remaining quantity for a ${i.name}: ${i.quantity}\n`)
};

/*
Tack4
Створіть клас CarClass з такими властивостями та методами:
Властивості:
make (марка автомобіля) - публічна .
model (модель автомобіля) - публічна.
year (рік випуску автомобіля) - публічна.
speed (поточна швидкість автомобіля) - приватна, початкова швидкість має = 0.
*/

class CarClass {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this._speed = 0;
    }

    /*
    Методи:
    constructor(make, model, year) - конструктор класу, який ініціалізує марку, 
    модель та рік випуску автомобіля, а також встановлює початкову швидкість на нуль. (this.speed = 0)
    getCarInfo() - абстрактний метод.
    accelerate(speed) - публічний метод, який збільшує швидкість автомобіля на задану кількість кілометрів на годину.
    brake(speed) - публічний метод, який зменшує швидкість автомобіля на задану кількість кілометрів на годину.
    */

    getCarInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

    accelerate(speed) {
        this._speed += speed;
    }

    brake(speed) {
        this._speed -= speed;
    }
};

/*
Створіть клас вашого автомобіля, наприклад (AudiClass) який буде наслідувати клас CarClass.
Додайте супер конструктор, та додайте нову властивість у свій конструктор:
color - приватна властивість.
Перезапишіть абстрактний метод getCarInfo() - має бути публічний метод, який виводить інформацію про автомобіль (марка, модель, рік та колір).
За допомогою геттера та сеттера створіть методи myCurrentColor(). У цих методах виводьте поточний колір автомобіля. у set метод має прийняти параметр color.
Cтворіть екземпляр класу вашого автомобіля який унаслідував властивості з батьківського класу.
Виведіть інформацію про ваш автомобіль (getCarInfo()).
Виконайте декілька операцій зі зміною швидкості (Тобто необхідно викликати ці методи accelerate(speed) та brake(speed))
За допомогою гетера та сетера змініть інформацію про ваш колір.
За допомогою методаgetCarInfo() виведіть інформацію про автомобіль
*/

class AudiClass extends CarClass {
    constructor(make, model, year, color) {
        super(make, model, year);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    getCarInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
};

const myAudi = new AudiClass("Audi", "A6", 2023, "blue");
myAudi.getCarInfo(); 

myAudi.accelerate(5);
myAudi.brake(1);
myAudi.getCarInfo();

myAudi.color = "red";
myAudi.getCarInfo(); 

/*
Таск5
Створіть клас Person: Представляє особу з такими властивостями:
firstName - ім'я особи
lastName - прізвище особи
age - вік особи
Всі властивості мають бути публічні
*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// Клас PeopleRegistry представляє реєстр осіб з такими методами та властивостями:

class PeopleRegistry extends Person {
    constructor() {
        super();
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(firstName, lastName) {
        this.people = this.people.filter(person => person.firstName !== firstName || person.lastName !== lastName);
    }

    findPerson(firstName, lastName) {
        return this.people.find(person => person.firstName === firstName && person.lastName === lastName);
    }

    listPeople() {
        this.people.forEach(person => {
            console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
        });
    }
};

const registry = new PeopleRegistry();

const person1 = new Person("Ada", "Lovelace", 30);
const person2 = new Person("Russell", "Hobbs", 25);
const person3 = new Person("Sock", "Socks", 10);

registry.addPerson(person1);
registry.addPerson(person2);
registry.addPerson(person3);

registry.listPeople();
registry.removePerson("Sock","Socks");
registry.listPeople();
