import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { removeCurrency } from "../../store/slice/portfolioSlice";
import Header from "../Header/Header";
import PortfolioModal from "../portfolioModal/PortfolioModal";

const Layout = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.portfolio);

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <>
      <Header onOpenPortfolio={() => setIsPortfolioOpen(true)} />
      <main>
        <Outlet />
      </main>
      <PortfolioModal
        open={isPortfolioOpen}
        items={items}
        onDelete={(id) => dispatch(removeCurrency(id))}
        onClose={() => setIsPortfolioOpen(false)}
      />
    </>
  );
};

export default Layout;
