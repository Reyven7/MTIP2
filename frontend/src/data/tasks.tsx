export const tasksLab1 = [
  {
    title: "Завдання 1",
    description: "Результат виконання запиту GET до головної сторінки серверу",
    details: [],
    images: ["/img/lab1/ex1.png"],
  },
  {
    title: "Завдання 2",
    description: "Інформація про специфікацію HTTP, а також дані про сервер",
    details: [],
    images: ["/img/lab1/ex2.png"],
  },
  {
    title: "Завдання 3",
    description: "Результат запиту до неіснуючої сторінки",
    details: [],
    images: ["/img/lab1/ex3.png"],
  },
  {
    title: "Завдання 4",
    description: "Результат виконання запитів GET до доступних сторінок",
    details: [],
    images: ["/img/lab1/ex4.1.png", "/img/lab1/ex4.2.png"],
  },
  {
    title: "Завдання 5",
    description:
      "Отримання заданої кількості байтів (повний розмір запиту 418 байт)",
    details: [],
    images: ["/img/lab1/ex5.1.png", "/img/lab1/ex5.2.png"],
  },
  {
    title: "Завдання 6",
    description: "Виконання запитів PUT, DELETE",
    details: [],
    images: ["/img/lab1/ex6.1.png", "/img/lab1/ex6.2.png"],
  },
  {
    title: "Завдання 7",
    description: "Інформація про параметри сервера",
    details: [],
    images: ["/img/lab1/ex7.png"],
  },
  {
    title: "Завдання 8",
    description: "Результати виконання TRACE",
    details: [],
    images: ["/img/lab1/ex8.1.png", "/img/lab1/ex8.2.png"],
  },
];

export const tasksLab2 = [
  {
    title: "Завдання 1",
    description: "Аналіз HTTP-запиту через браузер",
    details: [
      "Типи HTTP-запитів: GET",
      "Заголовки запитів: User-Agent, Host, Content-Type",
      "Відповідь сервера: Status code: 200, 307",
    ],
    images: [],
  },
  {
    title: "Завдання 2",
    description: "Надсилання запиту через Postman",
    details: [
      "Чи змінилася відповідь сервера після додавання заголовка? Відповідь сервера незмінилася після додавання заголовка Accept: application/json",
    ],
    images: ["/img/lab2/ex2.1.png", "/img/lab2/ex2.2.png"],
  },
  {
    title: "Завдання 3",
    description: "Відправка POST-запиту",
    details: ["Отриманий статус код: 201"],
    images: ["/img/lab2/ex3.1.png", "/img/lab2/ex3.2.png"],
  },
  {
    title: "Завдання 4",
    description: "Створення простого HTTP-сервера",
    details: [
      "Отриманий статус код: 200",
      "Отриманий заголовок: Content-Type: text/html; charset=utf-8",
    ],
    images: ["/img/lab2/ex4.png"],
  },
  {
    title: "Контрольні питання",
    description: "Основні питання по темі HTTP та REST API",
    details: [
      "<b>Що таке HTTP і які його основні методи?</b><br/>HTTP (HyperText Transfer Protocol) – це протокол передачі даних у вебі. Основні методи: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.",
      "<b>Для чого використовуються заголовки HTTP?</b><br/>Заголовки HTTP використовуються для передавання метаінформації про запит або відповідь (тип контенту, авторизація, кешування тощо).",
      "<b>Які групи статусних кодів ви знаєте?</b><br/>Групи статусних кодів: 1xx – інформаційні, 2xx – успішні, 3xx – перенаправлення, 4xx – помилки клієнта, 5xx – помилки сервера.",
      "<b>Що таке REST API та його основні принципи?</b><br/>REST API – це стиль архітектури для створення веб-сервісів. Принципи: клієнт-сервер, безстанність, кешування, єдиний інтерфейс, багаторівнева система.",
      "<b>Як HTTPS захищає передачу даних у мережі?</b><br/>HTTPS використовує SSL/TLS для шифрування даних, забезпечуючи їхню конфіденційність і захист від перехоплення.",
    ],
    images: [],
  },
];

export const tasksLab3 = [
  {
    title: "Запит до сервера",
    description: "Аналіз HTTP-запиту через браузер",
    details: ["Тип запиту: GET", "Отриманий статус код: 200"],
    images: ["/img/lab3/ex1.png"],
  },
  {
    title: "Отриманий результат",
    description: "",
    details: [],
    images: ["/img/lab3/ex2.png"],
  },
  {
    title: "JSON відповідь",
    description: "",
    details: [],
    images: ["/img/lab3/ex3.png"],
  },
];

export const tasksLab4 = [
  {
    title: "Запит до сервера",
    description: "GET .../api/time",
    details: ["Тип запиту: GET", "Отриманий статус код: 200"],
    images: ["/img/lab4/ex1.png"],
  },
  {
    title: "Logger",
    description: "",
    details: [],
    images: ["/img/lab4/ex1.1.png"],
  },
  {
    title: "Перевірка роботи обробника помилок",
    description: "",
    details: [],
    images: ["/img/lab4/error.png"],
  },
  {
    title: "Запит до сервера",
    description: "Post .../api/greet",
    details: ["Тип запиту: POST", "Отриманий статус код: 200"],
    images: ["/img/lab4/ex2.png"],
  },
  {
    title: "Logger",
    description: "",
    details: [],
    images: ["/img/lab4/ex2.1.png"],
  },
];
export const tasksLab5 = [
  {
    title: "1. Розробити API",
    description: "Розроблене API ",
    details: ["Відображення через Swagger"],
    images: ["/img/lab5/ex1.png"],
  },
  {
    title: "2. Реалізувати аутентифікацію за допомогою JWT",
    description: [],
    details: [],
    images: ["/img/lab5/ex2.png"],
  },
  {
    title: "3. Додати підтримку WebSockets для чату між користувачами",
    description: "Створення hub для роботи з webservice",
    details: [],
    images: ["/img/lab5/ex3.png"],
  },
  {
    title: "Документація Swagger",
    description: "Частина отриманої документації в json вигляді",
    details: [],
    images: ["/img/lab5/ex4.png"],
  },
  {
    title: "ChatApp",
    description: "",
    details: [],
    images: ["/img/lab5/ex5.1.png", "/img/lab5/ex5.2.png"],
  },
];
export const tasksLab6 = [
  {
    title: "1.	Створити Dockerfile",
    description: [],
    details: [],
    images: ["/img/lab6/ex1.png"],
  },
  {
    title: "2.	Налаштувати Docker Compose",
    description: [],
    details: [],
    images: ["/img/lab6/ex2.png"],
  },
  {
    title: "3.	Розгорнути програму",
    description: [],
    details: [],
    images: ["/img/lab6/ex3.png"],
  },
  {
    title: "4.	Перевірити правильності роботи системи",
    description: [],
    details: [],
    images: ["/img/lab6/ex4.1.png", "/img/lab6/ex4.2.png"],
  },
];
