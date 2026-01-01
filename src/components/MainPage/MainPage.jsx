import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../../store/slice/currenciesSlice";
import CryptoTable from "./CryptoTable";

const MainPage = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.currencies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <h2>Загрузка...</h2>;
  }

  if (status === "failed") {
    return <h2>Ошибка... {error}</h2>;
  }
  return (
    <div>
      <h2>Криптовалюты</h2>
      <CryptoTable currencies={list} />
    </div>
  );
};

export default MainPage;
