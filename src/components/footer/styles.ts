import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 50px;
  background-color: #ff1510;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-size: 0.7rem;
  .text {
    display: flex;
    color: #fff;
    font-weight: bold;
    gap: 0.2rem;
    a {
      color: #fff;
      text-decoration: none;
    }
    .description {
      font-weight: normal;
    }
  }
`;
