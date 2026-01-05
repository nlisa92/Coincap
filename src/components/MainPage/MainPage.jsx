import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../../store/slice/currenciesSlice";
import { calculatePortfolio } from "../../helpers/calculatetPortfolio";
import { updatePortfolioStats } from "../../store/slice/portfolioSlice";
import CryptoTable from "./CryptoTable";

const MainPage = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.currencies);
  const { items } = useSelector((state) => state.portfolio);

  console.log("Redux state:", { list, status, error });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPage = 10;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (list.length && items.length) {
      const stats = calculatePortfolio(items, list);
      dispatch(updatePortfolioStats(stats));
    }
  }, [list, items, dispatch]);

  if (status === "loading") {
    return <h2>Загрузка...</h2>;
  }

  if (status === "failed") {
    return <h2>Ошибка... {error}</h2>;
  }

  const start = (currentPage - 1) * itemsPage;
  const end = start + itemsPage;
  const curCurrencies = list.slice(start, end);
  const totalPages = Math.ceil(list.length / itemsPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      <h2>Криптовалюты</h2>
      <CryptoTable currencies={curCurrencies} />
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((item) => item - 1)}
        >
          Назад
        </button>

        {pages.map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((item) => item + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default MainPage;
