import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: 1000px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 0 20px;
  }

  .text {
    h1 {
      padding-top: 40px;
      padding-bottom: 5px;
    }

    h2 {
      padding-bottom: 30px 0;

      @media (max-width: 600px) {
        padding-bottom: 20px 0;
      }
    }

    h3 {
      padding-bottom: 25px;
    }

    b {
      font-size: 18px;
      font-weight: 800;
      padding-bottom: 10px;
    }

    p {
      padding-bottom: 20px;
      line-height: 26px;

      @media (max-width: 600px) {
        padding-bottom: 10px;
      }

      i {
        font-size: 14px;
      }
    }

    ul {
      display: block;
      padding-bottom: 20px;
      padding-left: 20px;

      li {
        padding-bottom: 20px;

        @media (max-width: 600px) {
          padding-bottom: 10px;
        }
      }
    }
  }
`;
