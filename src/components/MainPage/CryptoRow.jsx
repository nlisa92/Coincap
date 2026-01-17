import ButtonAdd from "../Buttons/ButtonAdd";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useNavigate } from "react-router-dom";

const CryptoRow = ({ currency, onAdd }) => {
  const navidate = useNavigate();
  const handleRowClick = () => {
    navidate(`/currency/${currency.id}`);
  };

  const {
    rank,
    name,
    symbol,
    marketCapUsd,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
  } = currency;

  return (
    <tr onClick={handleRowClick} className="crypto-row" style={{ cursor: "pointer" }}>
      <td>{rank}</td>
      <td>
        {name} ({symbol})
      </td>
      <td>{formatCurrency(vwap24Hr)}</td>
      <td>{formatCurrency(marketCapUsd)}</td>
      <td>{formatCurrency(priceUsd)}</td>
      <td>{Number(changePercent24Hr).toFixed(2)}%</td>
      <td>
        <ButtonAdd
          onClick={(e) => {
            e.stopPropagation();
            onAdd(currency);
          }}
        />
      </td>
    </tr>
  );
};
export default CryptoRow;
