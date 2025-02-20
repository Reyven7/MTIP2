import { useParams } from "react-router-dom";

const ConditionPage = () => {
  const { num } = useParams<{ num?: string }>();

  return (
    <div>
      <iframe
        src={`../../pdf/lab${num}.pdf`}
        title={`Лабораторна робота ${num}`}
        className="w-full h-screen border rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default ConditionPage;
