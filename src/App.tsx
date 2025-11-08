import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "./components/Presentation";
import QAPage from "./components/QAPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
