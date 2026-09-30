import { RotatingLines } from "react-loader-spinner";
import { marketChart } from "../../services/cryptoapi";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency, setChart }) {
  const currencySymbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines color="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currencySymbol={currencySymbols[currency]}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    id,
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  },
  currencySymbol,
  setChart,
}) => {
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      console.log(json);
      setChart(json);
    } catch (error) {
      setChart(null)
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol?.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbol}
        {current_price.toLocaleString() ?? "-"}
      </td>
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h?.toFixed(2) ?? "-"}%
      </td>
      <td>{total_volume.toLocaleString() ?? "-"}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
  );
};
