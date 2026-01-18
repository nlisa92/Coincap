import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CurrencyPage from "./components/currencyPage/CurrencyPage";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/currency/:id" element={<CurrencyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
