import ButtonAdd from "../Buttons/ButtonAdd";

const CryptoRow = ({ name, symbol, priceUsd, changePercent24Hr, onAdd }) => {
  return (
    <tr>
      <td>
        {name} ({symbol}){" "}
      </td>
      <td>{priceUsd} USD</td>
      <td>{changePercent24Hr}%</td>
      <td>
        <ButtonAdd onClick={onAdd} />
      </td>
    </tr>
  );
};
export default CryptoRow;
