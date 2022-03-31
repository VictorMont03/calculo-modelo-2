import styled from "styled-components";

export const BigTitle = styled.h1`
  font-size: 6.25rem;
  letter-spacing: -0.04em;
  line-height: 1.2;
  font-weight: 700;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 8rem;
`;

export const PostItem = styled.div`
  margin-bottom: 1em;

  .shadow {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    line-height: 0;
    transition: all 0.2s ease;
    margin-bottom: 1.25rem;
    width: 100%;
    min-height: 312px;
    background: url("/assets/no-photo.jpg") no-repeat center center #e8e8e8;

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }
  }
  .title {
    font-size: 1.875rem;
    line-height: 1.375;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 1rem 0;
    line-height: 1.625;
    font-size: 1.125rem;
  }

  .content {
    margin: 4rem auto 0;
    max-width: 42rem;
  }
`;
