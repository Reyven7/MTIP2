import { Card, CardHeader, CardContent } from "@/components/ui/card";

const tasks = [
  {
    title: "Запит до сервера",
    description: "Аналіз HTTP-запиту через браузер",
    details: ["Тип запиту: GET", "Отриманий статус код: 200"],
    images: ["/img/lab3/ex1.png"],
  },
  {
    title: "Отриманий результат",
    description: "",
    details: [""],
    images: ["/img/lab3/ex2.png"],
  },
  {
    title: "JSON відповідь",
    description: "",
    details: [""],
    images: ["/img/lab3/ex3.png"],
  },
];

const Lab3 = () => {
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

export default Lab3;
