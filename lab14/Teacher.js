// models/Teacher.js
import { Person } from './Person.js'; // Імпортуємо батьківський клас

// Клас Teacher наслідується від Person [cite: 246]
export class Teacher extends Person {
    constructor(name) {
        super(name); // Викликаємо конструктор батька
        this.myCourses = []; // Список курсів [cite: 246]
    }

    // Метод для додавання курсів [cite: 246]
    addCourse(course) {
        this.myCourses.push(course);
        console.log(`Викладач ${this.name} тепер веде курс "${course.title}"`);
    }
}