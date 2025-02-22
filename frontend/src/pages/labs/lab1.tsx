import { Card, CardHeader, CardContent } from "@/components/ui/card";

const tasks = [
  {
    title: "Завдання 1",
    description: "Результат виконання запиту GET до головної сторінки серверу",
    imageSrc: "/img/lab1/ex1.png",
  },
  {
    title: "Завдання 2",
    description: "Інформація про специфікацію HTTP, а також дані про сервер",
    imageSrc: "/img/lab1/ex2.png",
  },
  {
    title: "Завдання 3",
    description: "Результат запиту до неіснуючої сторінки",
    imageSrc: "/img/lab1/ex3.png",
  },
  {
    title: "Завдання 4",
    description: "Результат виконання запитів GET до доступних сторінок",
    images: [
      "/img/lab1/ex4.1.png",
      "/img/lab1/ex4.2.png",
    ],
  },
  {
    title: "Завдання 5",
    description:
      "Отримання заданої кількості байтів (повний розмір запиту 418 байт)",
    images: [
      "/img/lab1/ex5.1.png",
      "/img/lab1/ex5.2.png",
    ],
  },
  {
    title: "Завдання 6",
    description: "Виконання запитів PUT, DELETE",
    images: [
      "/img/lab1/ex6.1.png",
      "/img/lab1/ex6.2.png",
    ],
  },
  {
    title: "Завдання 7",
    description: "Інформація про параметри сервера",
    imageSrc: "/img/lab1/ex7.png",
  },
  {
    title: "Завдання 8",
    description: "Результати виконання TRACE",
    images: [
      "/img/lab1/ex8.1.png",
      "/img/lab1/ex8.2.png",
    ],
  },
];

const lab1 = () => {
  return (
    <div className="space-y-8 p-6">
      {tasks.map((task, index) => (
        <Card key={index}>
          <CardHeader>
            <p className="text-2xl">{task.title}</p>
          </CardHeader>
          <CardContent>
            <p className="text-xl">{task.description}</p>
            <div className="space-y-4 mt-4">
              {task.images ? (
                task.images.map((imageSrc, idx) => (
                  <img
                    key={idx}
                    src={imageSrc}
                    alt={`${task.title} - ${idx + 1}`}
                  />
                ))
              ) : (
                <img src={task.imageSrc} alt={task.title} />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default lab1;
