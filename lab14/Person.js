// models/Person.js
export class Person {
    constructor(name) {
        this.name = name;
    }

    // Метод отримання інформації про особу [cite: 244]
    getInfo() {
        console.log(`Особа: ${this.name}`);
    }
}