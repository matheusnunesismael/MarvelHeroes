import React from "react";

// Styles
import { HeroViewWrapper, HeroDetails, HeroComics } from "./styles";

// Assets
import IconComic from "assets/images/ic_quadrinhos.svg";
import IconMovie from "assets/images/ic_trailer.svg";

// Components
import SearchBar from "./components/searchBar";
import RatingStars from "./components/ratingStars";
import SwitchHeart from "components/switchHeart";
import Comic from "./components/comic";
import Footer from "components/footer";

const HeroView: React.FC = () => {
  return (
    <HeroViewWrapper>
      <SearchBar />
      <div className="hero-details">
        <HeroDetails>
          <div className="name-background">{"3-D Man".toUpperCase()}</div>

          <div className="content-wrapper">
            <div className="infos-content">
              <div className="hero-data">
                <div className="hero-header">
                  <div className="hero-name">{"3-D Man".toUpperCase()}</div>
                  <div className="hero-favorite">
                    <SwitchHeart value={true} size={35} />
                  </div>
                </div>
                <div className="hero-description">
                  Caught in a gamma bomb explosion while trying to save the life
                  of a teenager, Dr. Bruce Banner was transformed into the
                  incredibly powerful creature called the Hulk. An all too often
                  misunderstood hero, the angrier the Hulk gets, the stronger
                  the Hulk gets.
                </div>
                <div className="hero-stats">
                  <div className="hero-counts">
                    <div className="hero-stat">
                      <div className="hero-stat-title">Quadrinhos</div>
                      <div className="div-stat-content">
                        <img src={IconComic} alt="Quadrinhos" />
                        150
                      </div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-title">Filmes</div>
                      <div className="div-stat-content">
                        <img src={IconMovie} alt="Filmes" />
                        200
                      </div>
                    </div>
                  </div>
                  <div className="hero-rating">
                    Rating:
                    <RatingStars rating={3} />
                  </div>
                  <div className="hero-last-comic">
                    <span className="last-comic-text">Ultimo quadrinho:</span>

                    <span className="last-comic-value">17 jul. 2020</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                  alt="3-D Man"
                />
              </div>
            </div>
          </div>
        </HeroDetails>
      </div>
      <HeroComics>
        <div className="hero-comics-title">Últimos lançamentos</div>
        <div className="hero-comics-list">
          {
            // render 10 comics for placeholder
            Array.from({ length: 10 }, (_, index) => (
              <Comic
                name="Avengers: The Initiative (2007) #19"
                image="http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg"
              />
            ))
          }
        </div>
      </HeroComics>
      <Footer />
    </HeroViewWrapper>
  );
};

export default HeroView;
