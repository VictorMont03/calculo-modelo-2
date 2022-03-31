import React from "react";
import CookieConsent from "react-cookie-consent";
// import { Container } from './styles';

function Cookies() {
  return (
    <>
      <CookieConsent
        location="bottom"
        cookieName="LGPD"
        style={{ background: "whitesmoke", opacity: "0.9" }}
        buttonText="Aceitar todos"
        buttonStyle={{
          color: "white",
          backgroundColor: "green",
          fontSize: "18px",
          borderRadius: "15px",
          padding: "20px",
        }}
        contentStyle={{
          fontSize: "16px",
          color: "black",
          backgroundColor: "whitesmoke",
          "@media (max-width: 600px)": {
            fontSize: "1px",
          },
        }}
        expires={150}
      >
        Nós usamos cookies em nosso website para te dar uma melhor experiência,
        lembrando das suas preferências e visita. Clicando em "Aceitar todos",
        você estará consentindo com o uso de TODOS os cookies. Clique{" "}
        <a
          href="/politica-de-cookies"
          style={{ color: "black", textDecoration: "underline" }}
        >
          AQUI
        </a>{" "}
        e saiba mais.
      </CookieConsent>
    </>
  );
}

export default Cookies;
