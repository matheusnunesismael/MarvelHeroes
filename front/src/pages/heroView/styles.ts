import styled from "styled-components";

export const HeroViewWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #e6f5e6;
  z-index: -1;
  .hero-details {
  }
  .hero-comics {
  }
`;

export const HeroDetails = styled.div`
  position: relative;
  height: 90vh;
  z-index: 1;
  .name-background {
    position: absolute;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: 20vw;
    z-index: -2;
  }
  .content-wrapper {
    border: 1px solid pink;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .infos-content {
      z-index: 1;
      display: grid;
      border: 1px solid red;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr 2fr;
      .hero-data {
        border: 1px solid blue;
      }
      .hero-image {
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 300px;
        }
      }
    }
  }
`;
