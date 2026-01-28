// --- ЗАВДАННЯ 1: РОМБ ---
console.log("--- ЗАВДАННЯ 1 ---");
let n = parseInt(prompt("Завдання 1. Введіть розмір ромба (n):", "3"));

if (!isNaN(n) && n > 0) {
    // Верхня частина
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let s = 0; s < n - i; s++) line += " "; // Пробіли
        for (let j = 1; j <= i; j++) line += j;      // Цифри зростання
        for (let k = i - 1; k >= 1; k--) line += k;  // Цифри спадання
        console.log(line);
    }
    // Нижня частина
    for (let i = n - 1; i >= 1; i--) {
        let line = "";
        for (let s = 0; s < n - i; s++) line += " "; // Пробіли
        for (let j = 1; j <= i; j++) line += j;      // Цифри зростання
        for (let k = i - 1; k >= 1; k--) line += k;  // Цифри спадання
        console.log(line);
    }
} else {
    console.log("Пропущено або некоректні дані для ромба.");
}

// --- ЗАВДАННЯ 2: СУМА РЯДУ ---
console.log("--- ЗАВДАННЯ 2 ---");
let n2 = parseInt(prompt("Завдання 2. Введіть n для суми ряду:", "5"));
let S = 0;
let seriesStr = "S = ";

if (!isNaN(n2) && n2 > 0) {
    for (let i = 1; i <= n2; i++) {
        S += 1 / i;
        if (i === 1) seriesStr += "1";
        else seriesStr += " + 1/" + i;
    }
    console.log(seriesStr);
    console.log("Сума S = " + S.toFixed(4));
    alert(`Сума ряду: ${S.toFixed(4)}`);
} else {
    console.log("Пропущено або некоректні дані для ряду.");
}

// --- ЗАВДАННЯ 3: ВГАДАЙ ЧИСЛО ---
console.log("--- ЗАВДАННЯ 3 ---");
if (confirm("Почати гру 'Вгадай число'?")) {
    const targetNumber = Math.floor(Math.random() * 20) + 1;
    let guess = null;
    let attempts = 0;

    while (guess !== targetNumber) {
        let input = prompt("Вгадайте число від 1 до 20:");
        if (input === null) break; // Якщо натиснули Скасувати

        guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            alert("Це не число!");
        } else if (guess < targetNumber) {
            alert("Більше!");
        } else if (guess > targetNumber) {
            alert("Менше!");
        } else {
            alert(`Ви вгадали число ${targetNumber} за ${attempts} спроб!`);
            console.log(`Виграш! Число: ${targetNumber}, Спроб: ${attempts}`);
        }
    }
}