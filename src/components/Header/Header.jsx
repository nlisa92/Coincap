import { useSelector } from "react-redux";
import { formatCurrency } from "../../helpers/formatCurrency";
import { WalletOutlined } from "@ant-design/icons";

const popular = ["bitcoin", "ethereum", "tether"];

const Header = ({ onOpenPortfolio }) => {
  const { list } = useSelector((state) => state.currencies);
  const { total, diff, diffPercent } = useSelector((state) => state.portfolio);
  const popularCurrencies = list.filter((item) => popular.includes(item.id));
  return (
    <div>
      <div>
        {popularCurrencies.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{formatCurrency(item.priceUsd)}</span>
          </div>
        ))}
      </div>
      <div onClick={onOpenPortfolio}>
        <WalletOutlined />
        <span>Итого: {formatCurrency(total)}</span>
        <span
          style={{
            color: diffPercent >= 0 ? "green" : "red",
            marginLeft: 8,
          }}
        >
          {diffPercent >= 0 ? "+" : ""}
          {diffPercent.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default Header;
