import React, { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "../components/Cookies/Cookies";

import { Container } from "../styles/home.js";

import Formulario from "../components/Formulario";

export default function Home() {
  return (
    <>
      <Cookies />
      <Head>
        <title>Mecânicas dos Sólidos</title>
      </Head>
      <Container>
        <Formulario />
      </Container>
    </>
  );
}
