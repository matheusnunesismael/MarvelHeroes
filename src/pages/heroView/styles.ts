import styled from "styled-components";

export const HeroViewWrapper = styled.div`
  height: auto;
  min-height: auto;
  background-color: #e6f5e6;
  .hero-details {
    z-index: -5;
  }
`;

interface HeroDetailsProps {
  name: string;
}

export const HeroDetails = styled.div<HeroDetailsProps>`
  position: relative;
  z-index: 0;
  .name-background {
    text-align: center;
    position: absolute;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: ${(props) => (props.name.length > 10 ? "10vw" : "18vw")};

    z-index: -2;
  }
  .content-wrapper {
    padding: 1rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -3;
    .infos-content {
      z-index: 1;
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr 2fr;
      .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 500px;
          height: 500px;
          border-radius: 50%;
          box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.2);
        }
      }
      .hero-data {
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        .hero-header {
          display: flex;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: bolder;
          color: #404040;
        }
        .hero-description {
          color: #858485;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .hero-counts {
            display: flex;
            .hero-stat {
              width: 40%;
              display: flex;
              flex-direction: column;
              gap: 0.8rem;
              .hero-stat-title {
                color: #4c4c4c;
                font-size: 0.8rem;
                font-weight: bold;
              }
              .div-stat-content {
                height: 2rem;
                display: flex;
                align-items: center;
                font-size: 0.9rem;
                gap: 1rem;
              }
            }
          }
          .hero-rating {
            display: flex;
            gap: 10px;
            color: #4c4c4c;
            font-weight: bold;
            font-size: 0.8rem;
          }
          .hero-last-comic {
            display: flex;
            gap: 10px;
            .last-comic-text {
              color: #4c4c4c;
              font-size: 0.8rem;
              font-weight: bold;
            }
            .last-comic-value {
              color: #4c4c4c;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

export const HeroComics = styled.div`
  padding: 0 5rem 2rem 5rem;
  z-index: 1;
  .hero-comics-title {
    padding: 3rem 0rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #404040;
  }
  .hero-comics-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 25px;
  }
`;
