import { Table } from "antd";
import { formatCurrency } from "../../helpers/formatCurrency";

const CurrencyInfoTable = ({ currency }) => {
  const dataSource = [
    {
      key: "price",
      label: "Цена",
      value: formatCurrency(currency.priceUsd),
    },
    {
      key: "marketCap",
      label: "Рыночная капитализация",
      value: formatCurrency(currency.marketCapUsd),
    },
    {
      key: "change",
      label: "Изменение за 24ч",
      value: `${Number(currency.changePercent24Hr).toFixed(2)}%`,
    },
    {
      key: "vwap",
      label: "VWAP 24h",
      value: formatCurrency(currency.vwap24Hr),
    },
    {
      key: "volume",
      label: "Объём торгов за 24ч",
      value: formatCurrency(currency.volumeUsd24Hr),
    },
    {
      key: "site",
      label: "Сайт",
      value: currency.explorer ? (
        <a href={currency.explorer} target="_blank" rel="noopener noreferrer">
          {" "}
          {currency.explorer}
        </a>
      ) : (
        "—"
      ),
    },
  ];

  const columns = [
    {
      title: "Параметр",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Значение",
      dataIndex: "value",
      key: "value",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default CurrencyInfoTable;
