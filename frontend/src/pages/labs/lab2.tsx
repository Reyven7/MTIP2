import { Card, CardHeader, CardContent } from "@/components/ui/card";

const tasks = [
  {
    title: "Завдання 1",
    description: "Аналіз HTTP-запиту через браузер",
    details: [
      "Типи HTTP-запитів: GET",
      "Заголовки запитів: User-Agent, Host, Content-Type",
      "Відповідь сервера: Status code: 200, 307",
    ],
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
  },
];

const Lab2 = () => {
  return (
    <div className="space-y-8 p-6">
      {tasks.map((task, index) => (
        <Card key={index}>
          <CardHeader>
            <p className="text-2xl font-bold">{task.title}</p>
          </CardHeader>
          <CardContent>
            <p className="text-xl">{task.description}</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {task.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-md"
                  dangerouslySetInnerHTML={{ __html: detail }}
                ></li>
              ))}
            </ul>
            {task.images && (
              <div className="space-y-4 mt-4">
                {task.images.map((imageSrc, idx) => (
                  <img
                    key={idx}
                    src={imageSrc}
                    alt={`${task.title} - ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Lab2;
