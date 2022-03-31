import styled from "styled-components";

export const Grafico = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background: ${(props) => (props.showGrafico ? "#c8c8c8" : "#7f47c9")};
`;

export const Wrapper = styled.div`
  width: 80%;
  display: ${(props) => (props.showGrafico ? "flex" : "none")};
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  button {
    margin-top: 60px;
    background: #2132a3;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    transition: all ease 0.6s;
    :hover {
      background: #c71625;
    }
  }
`;

export const Container = styled.section`
  width: 50%;
  display: ${(props) => (props.showGrafico ? "none" : "flex")};
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  background: #7f47c9;
  justify-content: center;

  p {
    margin: 0;
    font-size: 28px;
    line-height: 30px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 18px;
      line-height: 24px;
      color: #000;
      margin-top: 30px;
    }

    span {
      position: absolute;
      color: black;
      font-size: 14px;
      bottom: -20px;
      font-weight: bold;
    }

    input {
      height: 50px;
      padding: 0 20px;
    }

    textarea {
      padding: 20px;
      resize: none;
      height: 200px;
    }

    .btn {
      margin-top: 30px;
      width: fit-content;
      position: relative;

      .disabled {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
      }

      button {
        width: 170px;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #fff;
        border: none;
        transition: all ease 0.5s;

        :hover {
          background: #52029e;
          color: white;
          width: 200px;
        }
      }
    }
  }
`;
