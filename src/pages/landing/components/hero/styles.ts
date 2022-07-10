import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 200px;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  :hover {
    background-color: #fdecec;
    box-shadow: 0px 0px 0px 10px #fdecec;
  }
  .hero-image {
    width: 200px;
    height: 205px;
    img {
      border-bottom: 5px solid #e92429;
      width: 100%;
      height: 100%;
    }
  }
  .hero-inf {
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    .hero-name {
      color: #434343;
      font-weight: bold;
    }
  }
`;
