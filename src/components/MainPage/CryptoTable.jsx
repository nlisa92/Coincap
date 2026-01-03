import CryptoRow from "./CryptoRow";

const CryptoTable = ({ currencies, onAdd }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>VWAP(24Hr)</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Change</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <CryptoRow key={currency.id} onAdd={onAdd} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};
export default CryptoTable;
