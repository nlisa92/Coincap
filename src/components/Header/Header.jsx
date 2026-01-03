import { useSelector } from "react-redux";

const popular = ["bitcoin", "ethereum", "tether"];

const Header = () => {
  const { list } = useSelector((state) => state.currencies);
  const popularCurrencies = list.filter((item) => popular.includes(item.id));
  return (
    <div>
      <h3>Популярные криптовалюты</h3>
      {popularCurrencies.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.priceUsd}</span>
        </div>
      ))}
    </div>
  );
};
export default Header;
