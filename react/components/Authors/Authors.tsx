import React from "react";
import styles from "./styles.css";

const Authors = () => {
  return (
    <div>
      <ul className={styles.AutoresGroup}>
        <li className={styles.AutoresList}>
          Powered by
          <img
            src="https://agenciamagma.vteximg.com.br/arquivos/logovtex-m3academy-anacarolinaduartecavalcante.svg"
            alt="ícone logo vtex"
          />
        </li>
        <li className={styles.AutoresList}>
          Developed by
          <img
            src="https://agenciamagma.vteximg.com.br/arquivos/logom3-m3academy-anacarolinaduartecavalcante.svg"
            alt="ícone logo m3"
          />
        </li>
      </ul>
    </div>
  );
};

export default Authors;
