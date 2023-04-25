import React from "react";
import styles from "./styles.css";

const Social = () => {
  return (
    <div className={styles.FooterRightBlockSocial}>
      <span className={styles.SpanTitleSocial}>Nos siga</span>
      <ul className={styles.UlGroupSocial}>
        <ul className={styles.UlSecondarySocial}>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/email-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone email"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/facebook-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone facebook"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/pinterest-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone pinterest"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/spotify-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone spotify"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/linkedin-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone linkedin"
              />
            </a>
          </li>
        </ul>
        <ul className={styles.UlSecondarySocial}>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/twiter-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone twiter"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/instagram-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone instagram"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/whatsapp-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone whatsapp"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://agenciamagma.vteximg.com.br/arquivos/youtube-m3academy-anacarolinaduartecavalcante.svg"
                alt="ícone youtube"
              />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Social;
