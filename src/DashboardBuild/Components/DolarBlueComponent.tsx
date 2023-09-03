import styles from "./styles.module.css";

export default async function DolarBlueComponent() {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
  const data = await res.json();

  return (
    <div className={styles.dolarbox}>
      <h3 className="title">USD/ARS</h3>
      <hr></hr>
      <div className="row text">
        <div className="col-md-6">
          <p>COMPRA</p>
          <p>
            <b>${data.blue.value_buy}</b>
          </p>
        </div>
        <div className="col-md-6">
          <p>VENTA</p>
          <p>
            <b>${data.blue.value_sell}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
