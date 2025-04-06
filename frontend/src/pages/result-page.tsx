import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  tasksLab1,
  tasksLab2,
  tasksLab3,
  tasksLab4,
  tasksLab5,
  tasksLab6,
} from "@/data/tasks";

const ResultPage = () => {
  const { num } = useParams<{ num?: string }>();
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    switch (num) {
      case "1":
        setTasks(tasksLab1);
        break;
      case "2":
        setTasks(tasksLab2);
        break;
      case "3":
        setTasks(tasksLab3);
        break;
      case "4":
        setTasks(tasksLab4);
        break;
      case "5":
        setTasks(tasksLab5);
        break;
      case "6":
        setTasks(tasksLab6);
        break;
      default:
        setTasks([]);
        break;
    }
  }, [num]);

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
              {task.details?.map((detail: string, idx: number) => (
                <li
                  key={idx}
                  className="text-md"
                  dangerouslySetInnerHTML={{ __html: detail }}
                ></li>
              ))}
            </ul>
            {task.images && (
              <div className="space-y-4 mt-4">
                {task.images.map((imageSrc: string, idx: number) => (
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

export default ResultPage;
