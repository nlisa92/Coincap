import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CurrencyPage from "./components/currencyPage/CurrencyPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/currency/:id" element={<CurrencyPage />} />
      </Routes>
    </>
  );
}

export default App;
