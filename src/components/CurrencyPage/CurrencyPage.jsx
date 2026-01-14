import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddCurrencyModal from "../AddCurrencyModal/AddCurrencyModal";
import CurrencyInfoTable from "./CurrencyInfoTable";
import { addCurrency } from "../../store/slice/portfolioSlice";

const CurrencyPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.currencies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const currency = list.find((item) => item.id === id);

  if (!currency) {
    return <div>Валюта не найдена</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>
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
  );
};

export default CurrencyPage;
