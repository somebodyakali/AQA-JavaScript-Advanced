/* 
Таск1
Дано обєкт:
const userSettings = {
username: "john_doe",
theme: "dark",
language: "en",
notifications: true,
};
Зробіть сереалізацію та десеалізацію
*/

const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
    };

const serializedData = JSON.stringify(userSettings);
console.log(serializedData)

const deserializedObject = JSON.parse(serializedData)
console.log(deserializedObject)

/*
Tack2
Створіть асинхронну функцію delayAndLog(message, milliseconds), яка приймає повідомлення message і час у мілісекундах milliseconds.
Функція повинна затримати виконання на заданий час milliseconds, використовуючи setTimeout.
Після затримки, функція повинна вивести message на консоль.
Використайте async/await для керування асинхронним виконанням функції.
Викличте функцію delayAndLog з різними повідомленнями та затримками.
*/

async function delayAndLog(message, milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(message);
  }
  
  delayAndLog("First", 2000);
  delayAndLog("Second", 1000);
  delayAndLog("Third", 3000);
  
  
/*

Tack3 https://jsonplaceholder.typicode.com/
Створіть дві асинхронні функції для здійснення запитів до сервера:
Перша функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/comments/1 і повертає об'єкт comments у вигляді Promise.
Друга функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/posts/2 і повертає об'єкт posts у вигляді Promise.
Викликайте ці функції. Використовуйте методи Promise.all та Promise.race, передаючи їм масив із викликами обох функцій. Виведіть результат виконання цих функцій.

*/

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  }
  
  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  }
  
  async function fetchData() {
    try {
      const [comments, posts] = await Promise.all([getComments(), getPosts()]);
      console.log('Promise.all:');
      console.log('Comments:', comments);
      console.log('Posts: ', posts, "\n");
  
      const result = await Promise.race([getComments(), getPosts()]);
      console.log('Promise.race:');
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchData();
  