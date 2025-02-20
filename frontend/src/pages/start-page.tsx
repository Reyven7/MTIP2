import { Card, CardContent } from "@/components/ui/card";

const StartPage = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="max-w-lg w-full shadow-lg">
        <CardContent className="p-6 text-center">
          <h1 className="text-2xl font-bold">Звіт</h1>
          <p className="mt-2 text-lg">
            про лабораторні роботи з курсу
            <br />
            <span className="font-semibold">
              «Сучасні технології Інтернет-програмування»
            </span>
          </p>
          <p className="mt-4 text-md">
            студента групи <span className="font-semibold">ІПЗ-22-1</span>
            <br />
            <span className="font-semibold">Ярошенко Віталія Олеговича</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartPage;
