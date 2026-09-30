import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";
import { useState } from "react";

function Chart({ chart, setChart }) {

const [type,setType]=useState('market_caps')

console.log(convertData(chart,type));

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph} >
            
        </div>
      </div>
    </div>
  );
}

export default Chart;
