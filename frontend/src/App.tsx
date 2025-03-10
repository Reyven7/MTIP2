import { Route, Routes } from "react-router-dom";
import CodePage from "./pages/code-page";
import ConditionPage from "./pages/condition-page";
import ErrorPage from "./pages/error-page";
import StartPage from "./pages/start-page";
import Layout from "./components/ui/layout";
import ResultPage from "./pages/result-page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/condition/:num" element={<ConditionPage />} />
        <Route path="/result/:num" element={<ResultPage />} />
        <Route path="/code/:num" element={<CodePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
