// main.js
// Імпортуємо всі наші класи
import { Course } from './models/Course.js'; // Якщо файли в папці models
import { Teacher } from './models/Teacher.js';
import { Student } from './models/Student.js';

console.log("--- Lab 14 ---");

// 1. Створити об'єкти (Викладач, Студенти)
const teacher1 = new Teacher("Ігор Володимирович");
const student1 = new Student("Драч Іван");
const student2 = new Student("Дмитро Принада");

// 2. Створити курси та додати їх викладачу
const jsCourse = new Course("JavaScript Pro");
const pythonCourse = new Course("Python Basic");

teacher1.addCourse(jsCourse);
teacher1.addCourse(pythonCourse);

// 3. Додати студентів до курсів
// Додаємо студента в курс
jsCourse.addStudent(student1);
jsCourse.addStudent(student2);
pythonCourse.addStudent(student1);

// Оновлюємо інфо у самих студентів (щоб вони знали, де вчаться)
student1.assignCourse(jsCourse);
student1.assignCourse(pythonCourse);
student2.assignCourse(jsCourse);

// 4. Вивести інформацію (перевірка методів)
console.log("--- Перевірка ---");
teacher1.getInfo(); // Метод від Person
student1.viewCourses(); // Іван має бути на JS та Python
student2.viewCourses(); // Марія тільки на JS