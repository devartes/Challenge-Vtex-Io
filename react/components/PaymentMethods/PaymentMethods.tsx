import React from "react";
import styles from "./styles.css";

const PaymentMethods = () => {
  return (
    <div className={styles.FooterRightBlock}>
      <span className={styles.SpanTitleBig}>Formas de pagamento</span>
      <ul className={styles.UlGroup}>
        <ul className={styles.UlSecondary}>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/mastercard-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone mastercard"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/diners-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone diners"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/boleto-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone boleto"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/pix-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone pix"
            />
          </li>
        </ul>
        <ul className={styles.UlSecondary}>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/elo-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone elo"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/hipercard-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone hipercard"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/visa-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone visa"
            />
          </li>
          <li>
            <img
              className={styles.ImgCard}
              src="https://agenciamagma.vteximg.com.br/arquivos/amex-icon-m3academy-anacarolinaduartecavalcante.svg"
              alt="ícone amex"
            />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default PaymentMethods;
