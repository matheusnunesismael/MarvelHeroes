import SwitchHeart from "components/switchHeart";
import React from "react";
import SearchBar from "./components/searchBar";

import { HeroViewWrapper, HeroDetails } from "./styles";

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
                  <div className="hero-name">3-D Man</div>
                  <div className="hero-favorite">
                    <SwitchHeart value={true} />
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
                    <div className="hero-stat"></div>
                    <div className="hero-stat"></div>
                  </div>
                  <div className="hero-rating"></div>
                  <div className="hero-last-comic"></div>
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
      <div className="hero-comics"></div>
    </HeroViewWrapper>
  );
};

export default HeroView;
