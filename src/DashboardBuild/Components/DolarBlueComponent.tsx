import styles from "./styles.module.css";

export default async function DolarBlueComponent() {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
  const data = await res.json();

  return (
    <div className={styles.dolarbox}>
      <h3 className="title">USD/ARS</h3>
      <hr style={{ marginBottom: "16px" }}></hr>
      <div className="row">
        <div className="col-md-6">
          <p className="text">COMPRA</p>
          <p className="text">
            <b>${data.blue.value_buy}</b>
          </p>
        </div>
        <div className="col-md-6">
          <p className="text">VENTA</p>
          <p className="text">
            <b>${data.blue.value_sell}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
