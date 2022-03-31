import axios from "axios";

const api = axios.create({
  baseURL: "https://projetos.agenciaade.com.br/nome-do-projeto/wp-json/",
});

export default api;
