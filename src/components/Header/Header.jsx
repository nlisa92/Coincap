import { useSelector } from "react-redux";
import { formatCurrency } from "../../helpers/formatCurrency";
import { WalletOutlined } from "@ant-design/icons";

const popular = ["bitcoin", "ethereum", "tether"];

const Header = ({ onOpenPortfolio }) => {
  const { list } = useSelector((state) => state.currencies);
  const { total, diff, diffPercent } = useSelector((state) => state.portfolio);
  const popularCurrencies = list.filter((item) => popular.includes(item.id));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
        }}
      >
        {popularCurrencies.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{item.name}</span>
            <span>{formatCurrency(item.priceUsd)}</span>
          </div>
        ))}
      </div>

      <div
        onClick={onOpenPortfolio}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 8,
        }}
      >
        <WalletOutlined />

        <span>Итого: {formatCurrency(total)}</span>

        {total > 0 && (
          <>
            <span style={{ color: diff >= 0 ? "green" : "red" }}>
              {diff >= 0 ? "+" : ""}
              {formatCurrency(diff)}
            </span>

            <span style={{ color: diffPercent >= 0 ? "green" : "red" }}>
              {diffPercent >= 0 ? "+" : ""}
              {diffPercent.toFixed(2)}%
            </span>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
