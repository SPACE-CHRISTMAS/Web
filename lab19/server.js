import http from 'http'; // [cite: 118]
import { todos } from './data.js'; // Импортируем наши данные [cite: 119]

// На хостинге порт выдается автоматически, а локально будет 3000
const PORT = process.env.PORT || 3000; // [cite: 120]

const server = http.createServer((req, res) => { // [cite: 121]
    
    // 1. Настройка CORS (чтобы Angular мог обращаться к серверу) [cite: 122]
    res.setHeader('Access-Control-Allow-Origin', '*'); // [cite: 122]
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // [cite: 123, 124]
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // [cite: 125, 126]

    // Обработка предварительного (preflight) запроса от браузера [cite: 127]
    if (req.method === 'OPTIONS') { // [cite: 128]
        res.writeHead(204); // [cite: 130]
        res.end(); // [cite: 131]
        return; // [cite: 132]
    }

    // 2. Маршрутизация (Routing) - куда обращается клиент 
    if (req.url === '/' && req.method === 'GET') { // 
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // [cite: 136]
        res.end('<h1>Мій перший сервер на Node.js працює!</h1>'); // 
    }
    else if (req.url === '/api/v1/todoItem' && req.method === 'GET') { // 
        // Отдаем массив задач в формате JSON 
        res.writeHead(200, { 'Content-Type': 'application/json' }); // 
        res.end(JSON.stringify(todos)); // 
    }
    else {
        // Если маршрут не найден
        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' }); // [cite: 142]
        res.end(JSON.stringify({ message: 'Маршрут не знайдено' })); // [cite: 143]
    }
}); // [cite: 145]

server.listen(PORT, () => { // [cite: 146]
    console.log(`Сервер успішно запущено за адресою: http://localhost:${PORT}`); // 
});