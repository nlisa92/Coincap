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
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 24px",
          width: "100%",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
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
