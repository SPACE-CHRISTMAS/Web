// models/Course.js
export class Course {
    constructor(title) {
        this.title = title;
        this.students = []; // Список студентів [cite: 245]
    }

    // Метод для додавання студентів [cite: 245]
    addStudent(student) {
        this.students.push(student);
        console.log(`Студент ${student.name} доданий до курсу "${this.title}"`);
    }
}