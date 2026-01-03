import ButtonAdd from "../Buttons/ButtonAdd";

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

  const formatCurrency = (value) =>
    value !== "null" && value !== "undefined"
      ? Number(value).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        })
      : "—";

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
        <ButtonAdd onClick={onAdd} />
      </td>
    </tr>
  );
};
export default CryptoRow;
