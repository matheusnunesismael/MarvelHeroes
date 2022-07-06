import React, { useState } from "react";

// Styles
import {
  LandingWrapper,
  LandingHeader,
  LandingLogo,
  LandingSearch,
  SearchOptions,
} from "./styles";

// Components

// Assets
import Logo from "assets/images/logo.svg";
import SearchIcon from "assets/images/ic_busca.svg";
import Switch from "components/switch";

const Landing: React.FC = () => {
  // States
  const [search, setSearch] = useState("");

  // Params
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [lexOrder, setLexOrder] = useState(false);

  return (
    <LandingWrapper>
      <LandingHeader>
        <LandingLogo>
          <img src={Logo} alt="Marvel Heroes" />
          <div className="text">Search heros</div>
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
        {lexOrder}
        <Switch value={lexOrder} setValue={setLexOrder} />
      </SearchOptions>
    </LandingWrapper>
  );
};

export default Landing;
