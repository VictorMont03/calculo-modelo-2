import React, { useState } from "react";
import { Container, Grafico, Wrapper } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import Input from "react-input-mask";

import ademail from "../../services/ademail";

import { Chart } from "react-google-charts";

export default function Contato() {
  const [disabledButton, setdisabledButton] = useState(false);
  const [showGrafico, setShowGrafico] = useState(false);
  const [valor_l, setValorL] = useState([]);

  const [options, setOptions] = useState({
    title: "Demonstração Gráfica",
    curveType: "function",
    legend: { position: "bottom" },
  });
  const [data, setData] = useState([
    [
      "L (Largura)",
      "Diagrama de Momento Fletor",
      "Diagrama do Esforço Cortante",
    ],
  ]);

  const formik = useFormik({
    initialValues: {
      largura: "",
      carga_1: "",
      carga_2: "",
    },

    validationSchema: Yup.object({
      largura: Yup.string().required("*Campo largura é obrigatório"),
      carga_1: Yup.string().required("*Campo carga pontual é obrigatório"),
      carga_2: Yup.string().required("*Campo carga pontual é obrigatório"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        // Sucesso ao enviar
        console.log(values.largura);
        console.log(values.carga_1);
        console.log(values.carga_2);

        // pos1 = L/3;
        // pos2 = 2*pos1;

        // By = ((p1*pos1+p2*pos2)/L);
        // Ay = p1+p2-By;

        //somatorio de momento igual a zero

        let pos1, pos2, By, Ay, p1, p2, L;
        p1 = parseFloat(values.carga_1);
        p2 = parseFloat(values.carga_2);
        L = parseFloat(values.largura);

        pos1 = L / 3;
        pos2 = 2 * pos1;

        By = (p1 * pos1 + p2 * pos2) / L;
        Ay = p1 + p2 - By;

        //esforco cortante
        //∑Fy+V(x)=0

        let v1, v2, v3;
        v1 = Ay;
        v2 = Ay - p1;
        v3 = Ay - p1 - p2;

        //momento fletor
        //∑Fy(x−xcarga)+∑M+M(x)=0
        // m1 = L*pos1-

        let m1 = [];
        let m2 = [];
        let m3 = [];

        for (let i = 0; i <= pos1; i++) {
          m1[i] = Ay * i;
        }

        //m2 = -p1*(x-pos1)+ Ay*(x);

        for (let i = parseInt(pos1); i <= parseInt(pos2); i++) {
          m2[i] = Ay * (i + pos1) - p1 * i;
        }

        //m3 = -p1*(x-pos1) -p2*(x-pos2)+ Ay*(x);

        for (let i = parseInt(pos2); i <= L; i++) {
          m3[i] = -p1 * (i - pos1) - p2 * (i - pos2) + Ay * i;
        }

        console.log(m1);
        console.log(m2);
        console.log(m3);

        for (let i = 0; i < L; i++) {
          if (i <= pos1) {
            setData((array) => [...array, [i, m1[i], v1]]);
          }
          if (i >= parseInt(pos1) && i <= parseInt(pos2)) {
            setData((array) => [...array, [i, m2[i], v2]]);
          }
          if (i >= parseInt(pos2) && i <= L) {
            setData((array) => [...array, [i, m3[i], v3]]);
          }
        }

        setData((array) => [...array, [L, 0, v3]]);

        // for (let i = L; i > parseInt(pos2); i--) {
        //   setData((array) => [...array, [i, m3[i]]]);
        //   console.log(data);
        // }

        notification.success({
          message: "Calculo feito com sucesso 🚀",
          placement: "bottomRight",
        });

        setShowGrafico(true);

        resetForm();
      } catch (error) {
        // Erro ao enviar
        console.log(error);
        notification.error({
          message: "Não foi possivel concluir o calculo! 😔",
          description: "Verfique os campos e tente novamente mais tarde...",
          placement: "bottomRight",
        });
      }
    },
  });

  const handleChangeGrafico = () => {
    setShowGrafico(!showGrafico);
    setData([
      [
        "L (Largura)",
        "Diagrama de Momento Fletor",
        "Diagrama do Esforço cortante",
      ],
    ]);
  };

  return (
    <Grafico>
      <Container showGrafico={showGrafico}>
        <form onSubmit={formik.handleSubmit}>
          <p>Calculo do Momento Fletor</p>
          <div>
            <input
              type="text"
              name="largura"
              placeholder="Largura da viga (L)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.largura}
            />
            {formik.touched.largura && formik.errors.largura ? (
              <span className="erro">{formik.errors.largura}</span>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="carga_1"
              placeholder="Carga no ponto 1..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.carga_1}
            />
            {formik.touched.carga_1 && formik.errors.carga_1 ? (
              <span className="erro">{formik.errors.carga_1}</span>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="carga_2"
              placeholder="Carga no ponto 2..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.carga_2}
            />
            {formik.touched.carga_2 && formik.errors.carga_2 ? (
              <span className="erro">{formik.errors.carga_2}</span>
            ) : null}
          </div>
          <div className="btn">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
      <Wrapper showGrafico={showGrafico}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <button onClick={(e) => handleChangeGrafico()}>
          REALIZAR NOVO CÁLCULO
        </button>
      </Wrapper>
    </Grafico>
  );
}
