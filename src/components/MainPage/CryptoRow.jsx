import ButtonAdd from "../Buttons/ButtonAdd";

const CryptoRow = ({ currency, onAdd }) => {
  const { rank, name, symbol, priceUsd, changePercent24Hr } = currency;
  return (
    <tr>
        <td>{rank}</td>
      <td>
        {name} ({symbol})
      </td>
      <td>{Number(priceUsd).toFixed(2)} USD</td>
      <td>{Number(changePercent24Hr).toFixed(2)}%</td>
      <td>
        <ButtonAdd onClick={onAdd} />
      </td>
    </tr>
  );
};
export default CryptoRow;
