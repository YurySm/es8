// 1.  Заполнения строки padStart() и padEnd() 
let str = 'abc';
console.log(str.padStart(6, 'qwe')) // qweabc
console.log(str.padEnd(6, 'ewq')) //abcewq

// 2. Object.values() - возвращает массив значений
const person = { name: "Alex", age: 28 };
console.log(Object.values(person)) // ["Alex", 28]

// 3. Object.entries()  -  возвращает массив пар [key, value].
const personA = { name: "Alex", age: 28 };
Object.entries(personA); // [['name', '"Alex"'], ['age', 28]]

// 4. «Висячие» запятые
const doSomething = (var1, var2,) => {
    //...
};
  
doSomething("test2", "test2",);

// 5. async/await

function doSomethingAsync() {
    return new Promise(resolve => {
      setTimeout(() => resolve("I did something"), 3000);
    });
  }
  
async function doSomething() {
    console.log(await doSomethingAsync());
}
  
console.log("Before");
doSomething();
console.log("After");

// Несколько асинхронных функций
async function go() {
    const p1 = await fetch("https://...");
    const p2 = await fetch("https://...");
}
go();

