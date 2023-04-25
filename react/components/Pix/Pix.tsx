import React from "react";
import { useProduct } from "vtex.product-context";
import styles from "./styles.css";

const Pix = () => {
  const product = useProduct();
  const pix = {
    pixValue: Number(product?.selectedItem?.sellers[0].commertialOffer.Price),
  };
  const discount = pix.pixValue * 0.1;
  const pixPrice = pix.pixValue - discount;

  return (
    <div className={styles.PixContent}>
      <img
        className={styles.ImgPixContent}
        src="https://agenciamagma.vteximg.com.br/arquivos/icon-pix-anacarolinaduartecavalcante-m3academy.svg"
        alt="logo pix"
      />
      <div className={styles.PixDiscount}>
        <p className={styles.TextPixDiscount}>
          R$&nbsp;{pixPrice?.toFixed(2).toString().replace(".", ",")}
        </p>
        <span className={styles.TextDiscount}>10 % de desconto</span>
      </div>
    </div>
  );
};

export default Pix;
