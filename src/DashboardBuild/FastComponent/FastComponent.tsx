import styles from "./styles.module.css";

export default function FastComponent() {
  return (
    <div className="row">
      <div className={`${styles.fast} ${"d-flex justify-content-center"}`}>
        <div className={`${styles.container} ${"col-md-4 text-center"}`}>
          <h2>DE RUTA</h2>
        </div>
      </div>
    </div>
  );
}
