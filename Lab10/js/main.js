/* ================= ЗАВДАННЯ 1 ================= */
console.log("--- Завдання 1 ---");
// Механізм hoisting (підняття змінних)

console.log(a); // undefined
// Пояснення: Змінна 'var a' піднімається нагору, але її значення ще не присвоєно.
var a = 10;

// console.log(b); // ReferenceError
// Пояснення: Змінні 'let' не доступні до ініціалізації (Temporal Dead Zone).
let b = 20;

// console.log(c); // ReferenceError
// Пояснення: 'const' також не піднімається як 'var', виникне помилка доступу.
const c = 30;


/* ================= ЗАВДАННЯ 2 ================= */
console.log("\n--- Завдання 2 ---");
// Область видимості (Scope)

function testScope() {
    if (true) {
        var x = 5;      // Функціональна область видимості
        let y = 10;     // Блокова область видимості 
        const z = 15;   // Блокова область видимості
    }
    console.log(x); // 5
    // Пояснення: 'var' ігнорує блокові дужки {}, вона видима у всій функції.
    
    // console.log(y); // ReferenceError
    // Пояснення: 'let' видима лише всередині блоку if { ... }.
    
    // console.log(z); // ReferenceError
    // Пояснення: 'const' видима лише всередині блоку if { ... }.
}
testScope();


/* ================= ЗАВДАННЯ 3 ================= */
console.log("\n--- Завдання 3 ---");
// Приведення типів

console.log(5 + "5");      // "55"
// Пояснення: Число перетворюється на рядок при додаванні до рядка.

console.log("5" - 2);      // 3
// Пояснення: Рядок "5" перетворюється на число при відніманні.

console.log(true + false); // 1
// Пояснення: true -> 1, false -> 0. 1 + 0 = 1.

console.log(null + 1);     // 1
// Пояснення: null приводиться до 0 у математичних операціях.

console.log(undefined + 1);// NaN
// Пояснення: undefined при додаванні до числа дає Not a Number.

console.log(0 == false);   // true
// Пояснення: Нестроге порівняння приводить 0 до false.

console.log(0 === false);  // false
// Пояснення: Строге порівняння перевіряє і значення, і тип даних.


/* ================= ЗАВДАННЯ 4 ================= */
console.log("\n--- Завдання 4 ---");
// Робота з об'єктами та const

const person = {
    name: "John",
    age: 30
};

// Робимо об'єкт незмінним
Object.freeze(person);

person.age = 31; // У суворому режимі (use strict) це викликало б помилку, інакше просто ігнорується.
person.city = "New York"; // Властивість не додасться.

console.log(person); 
// Результат: { name: "John", age: 30 }
// Пояснення: Object.freeze() забороняє змінювати властивості об'єкта.

// person = { name: "Alice", age: 25 }; 
// Помилка: TypeError: Assignment to constant variable.
// Пояснення: Змінну, оголошену через const, не можна переприсвоїти.


/* ================= ЗАВДАННЯ 5 ================= */
console.log("\n--- Завдання 5 ---");
// Функція визначення типу

function checkType(value) {
    return typeof value; // Оператор typeof повертає рядок з назвою типу
}

console.log(checkType(10));       // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));     // "object"
console.log(checkType(undefined));// "undefined"