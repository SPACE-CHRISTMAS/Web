// --- ВАРИАНТ 1 ---

// Задание 1: Функция вычисления суммы чисел от 1 до n
// Это обычная именованная функция (Function Declaration)
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// Проверка задания 1:
console.log("Завдання 1 (Сума до 5):", calculateSum(5)); // Должно быть 15


// Задание 2: Функциональное выражение для умножения двух чисел
// Функция сохраняется в константу (Function Expression)
const multiply = function(a, b) {
  return a * b;
};
// Проверка задания 2:
console.log("Завдання 2 (5 * 3):", multiply(5, 3)); // Должно быть 15


// Задание 3: Стрелочная функция возведения в степень
// Используем краткий синтаксис (Arrow Function)
const power = (a, b) => Math.pow(a, b); 
// Или можно записать так: const power = (a, b) => a ** b;
// Проверка задания 3:
console.log("Завдання 3 (2 у степені 3):", power(2, 3)); // Должно быть 8


// Задание 4: Рекурсивная функция суммы гармонического ряда
// Она вызывает сама себя, пока n не станет равным 1
function harmonicSeries(n) {
  if (n === 1) return 1; // Базовый случай
  return (1 / n) + harmonicSeries(n - 1); // Рекурсивный шаг
}
// Проверка задания 4:
console.log("Завдання 4 (Гармонічний ряд для 3):", harmonicSeries(3)); // 1 + 1/2 + 1/3 = 1.833...


// Задание 5: Замыкание (Closure)
// Функция возвращает другую функцию, которая "помнит" multiplier
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}
// Проверка задания 5:
const double = createMultiplier(2); // Создаем функцию, которая умножает на 2
console.log("Завдання 5 (Помножити 5 на 2):", double(5)); // 10
const triple = createMultiplier(3); // Создаем функцию, которая умножает на 3
console.log("Завдання 5 (Помножити 5 на 3):", triple(5)); // 15


// Задание 6*: Функция высшего порядка для работы с Set
// Принимает множество и функцию-колбек
function processSet(set, callback) {
  set.forEach((value) => {
    callback(value);
  });
}
// Проверка задания 6:
const mySet = new Set([1, 2, 3]);
console.log("Завдання 6 (Вивід єлементів Set):");
processSet(mySet, (val) => console.log(val * 10)); // Выведет 10, 20, 30