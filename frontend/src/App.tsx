import { Route, Routes } from "react-router-dom";
import CodePage from "./pages/code-page";
import ConditionPage from "./pages/condition-page";
import ErrorPage from "./pages/error-page";
import Lab1 from "./pages/labs/lab1/lab1";
import StartPage from "./pages/start-page";
import Layout from "./components/ui/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/condition/:num" element={<ConditionPage />} />
        <Route path="/code/:num" element={<CodePage />} />
        <Route path="/result/Lab1" element={<Lab1 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
