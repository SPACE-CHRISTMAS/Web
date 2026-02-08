// models/Student.js
import { Person } from './Person.js';

// Клас Student наслідується від Person [cite: 247]
export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = []; // Список курсів
    }

    // Метод перегляду курсів [cite: 247]
    viewCourses() {
        if (this.courses.length === 0) {
            console.log(`Студент ${this.name} поки не записаний на курси.`);
        } else {
            // Отримуємо назви курсів
            const courseNames = this.courses.map(c => c.title).join(", ");
            console.log(`Студент ${this.name} навчається на: ${courseNames}`);
        }
    }
    
    // Допоміжний метод, щоб додати курс студенту (для зв'язку)
    assignCourse(course) {
        this.courses.push(course);
    }
}