import ButtonAdd from "../Buttons/ButtonAdd";
import { formatCurrency } from "../../helpers/formatCurrency";
const CryptoRow = ({ currency, onAdd }) => {
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
    <tr>
      <td>{rank}</td>
      <td>
        {name} ({symbol})
      </td>
      <td>{formatCurrency(vwap24Hr)}</td>
      <td>{formatCurrency(marketCapUsd)}</td>
      <td>{formatCurrency(priceUsd)}</td>
      <td>{Number(changePercent24Hr).toFixed(2)}%</td>
      <td>
        <ButtonAdd onClick={() => onAdd(currency)} />
      </td>
    </tr>
  );
};
export default CryptoRow;
