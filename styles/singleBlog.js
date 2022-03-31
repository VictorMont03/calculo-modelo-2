import styled from "styled-components";

export const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;

  h1 {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 35px;
    line-height: 39px;
    margin: 40px 0 20px 0;
  }

  h3 {
    font-size: 30px;
    line-height: 34px;
    margin: 30px 0 20px 0;
  }

  h4 {
    font-size: 25px;
    line-height: 29px;
    margin: 20px 0;
  }

  h5 {
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0;
  }

  .capa-img {
    width: 100%;
    height: auto;

    img {
      object-fit: contain;
      width: 100%;
    }
  }

  p {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    margin: 30px 0;
  }
`;
