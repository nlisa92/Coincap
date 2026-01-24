import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddCurrencyModal from "../AddCurrencyModal/AddCurrencyModal";
import CurrencyInfoTable from "./CurrencyInfoTable";
import AssetHistoryChart from "./AssetHistoryChart";
import {
  updatePortfolioStats,
  addCurrency,
} from "../../store/slice/portfolioSlice";
import { calculatePortfolio } from "../../helpers/calculatetPortfolio";

const CurrencyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.currencies);
  const { items } = useSelector((state) => state.portfolio);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const stats = useMemo(() => {
    return calculatePortfolio(items, list);
  }, [list, items]);

  useEffect(() => {
    dispatch(updatePortfolioStats(stats));
  }, [stats, dispatch]);

  const currency = list.find((item) => item.id === id);

  if (!currency) {
    return <div>Валюта не найдена</div>;
  }

  return (
    <div
      style={{
        padding: 24,
        display: "flex",
        gap: 32,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: 350,
        }}
      >
        <h2 style={{ margin: 0 }}>
          {currency.name} ({currency.symbol})
        </h2>

        <CurrencyInfoTable currency={currency} />

        <button
          onClick={() => {
            setSelectedCurrency(currency);
            setIsModalOpen(true);
          }}
          style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
        >
          Купить
        </button>

        <AddCurrencyModal
          open={isModalOpen}
          currency={selectedCurrency}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedCurrency(null);
          }}
          onOk={(newCurrency) => {
            dispatch(addCurrency(newCurrency));
            setIsModalOpen(false);
            setSelectedCurrency(null);
          }}
        />
      </div>
      <div style={{ padding: 24, display: "flex", gap: 24 }}>
        <AssetHistoryChart slug={currency.id} />
        <div
          style={{
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#f5f5f5",
              fontSize: 14,
            }}
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;
