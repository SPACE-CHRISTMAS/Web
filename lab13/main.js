// --- 1. Конструктор Course (Курс) ---
function Course(title) {
    this.title = title; // Назва курсу 
    this.students = []; // Список студентів 
}

// Метод додавання студента (через прототип)
Course.prototype.addStudent = function(student) {
    this.students.push(student);
    student.courses.push(this.title); // Додаємо назву курсу студенту в список
    console.log(`Студент ${student.name} доданий до курсу ${this.title}`);
};

// --- 2. Конструктор Student (Студент) ---
function Student(name) {
    this.name = name;       // Ім'я студента 
    this.courses = [];      // Список курсів, де він вчиться 
}

// Метод перегляду курсів студента (через прототип)
Student.prototype.viewCourses = function() {
    console.log(`Студент ${this.name} навчається на курсах: ${this.courses.join(', ')}`);
};

// --- 3. Конструктор Teacher (Викладач) ---
function Teacher(name) {
    this.name = name;       // Ім'я викладача 
    this.myCourses = [];    // Список курсів, які він веде 
}

// Метод створення/додавання курсу (через прототип)
Teacher.prototype.addCourse = function(courseTitle) {
    const newCourse = new Course(courseTitle);
    this.myCourses.push(newCourse);
    console.log(`Викладач ${this.name} створив новий курс: ${courseTitle}`);
    return newCourse;
};


// --- ДЕМОНСТРАЦІЯ РОБОТИ (Тестові об'єкти) [cite: 79] ---

console.log("--- Початок роботи ---");

// 1. Створюємо викладача
const teacher1 = new Teacher("Ігор Володимирович");

// 2. Викладач створює курси
const courseJS = teacher1.addCourse("JavaScript Basics");
const courseHTML = teacher1.addCourse("HTML/CSS");

// 3. Створюємо студентів
const student1 = new Student("Драч Іван");
const student2 = new Student("Принада Дмитро");

// 4. Додаємо студентів на курси
courseJS.addStudent(student1); // Іван йде на JS
courseJS.addStudent(student2); // Марія йде на JS
courseHTML.addStudent(student1); // Іван також йде на HTML

// 5. Перевіряємо, чи працюють методи перегляду
console.log("--- Результати ---");
student1.viewCourses(); // Має показати JS та HTML
student2.viewCourses(); // Має показати тільки JS

// Перевірка списку студентів на курсі JS
console.log(`На курсі ${courseJS.title} навчаються:`, courseJS.students.map(s => s.name));