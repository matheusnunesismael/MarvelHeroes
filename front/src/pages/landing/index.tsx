import React, { useState } from "react";

// Styles
import {
  LandingWrapper,
  LandingHeader,
  LandingLogo,
  LandingSearch,
  SearchOptions,
  HeroesList,
} from "./styles";

// Components
import Hero from "./components/hero";

// Assets
import Logo from "assets/images/logo.svg";
import SearchIcon from "assets/images/ic_busca.svg";
import Switch from "components/switch";
import HeroIcon from "assets/images/ic_heroi.svg";
import SwitchHeart from "components/switchHeart";
import Footer from "components/footer";

const Landing: React.FC = () => {
  // States
  const [heroes, setHeroes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  // Params
  const [search, setSearch] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [lexOrder, setLexOrder] = useState(false);

  return (
    <LandingWrapper>
      <LandingHeader>
        <LandingLogo>
          <img src={Logo} alt="Marvel Heroes" />
          <div className="text">Search heroes</div>
        </LandingLogo>
        <div className="titles">
          <h1>EXPLORE O UNIVERSO</h1>
          <h2>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve
          </h2>
        </div>
      </LandingHeader>
      <LandingSearch>
        <label className="search-input" htmlFor="search-input">
          <img src={SearchIcon} alt="search" />
          <input
            id="search-input"
            type="text"
            placeholder="Procure por heróis"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </LandingSearch>
      <SearchOptions>
        <div className="total-results">Encontrados {total} heróis</div>
        <div className="filters">
          <div className="filter-lex">
            <div className="filter-lex-text">
              <img src={HeroIcon} alt="hero" />
              <span>Ordenar por nome - A/Z</span>
            </div>

            <Switch value={lexOrder} setValue={setLexOrder} />
          </div>
          <div className="filter-fav">
            <SwitchHeart value={onlyFavorites} setValue={setOnlyFavorites} />
            <span>Somente favoritos</span>
          </div>
        </div>
      </SearchOptions>
      <HeroesList>
        {Array.from({ length: 20 }, (_, i) => (
          <Hero
            id={1011334}
            name="3-D Man"
            image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            favorite={false}
          />
        ))}
      </HeroesList>
      <Footer />
    </LandingWrapper>
  );
};

export default Landing;
