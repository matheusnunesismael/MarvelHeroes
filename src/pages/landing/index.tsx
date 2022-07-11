import React, { useEffect, useState } from "react";

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
import { API } from "services/api";
import { useHeroesContext } from "contexts/heroes";
import { Hero as HeroType } from "types/hero";

const Landing: React.FC = () => {
  // Context States
  const { heroes, setHeroes, setSelectedHero } = useHeroesContext();

  // States
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  // Params
  const [search, setSearch] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [lexOrder, setLexOrder] = useState(false);

  const setHero = (hero: HeroType) => {
    setSelectedHero(hero);
  };

  useEffect(() => {
    if (loaded) return;
    setLoaded(true);
    (async () => {
      API({
        path: "characters",
        params: {
          orderBy: "name",
        },
      }).then(({ data }) => {
        console.log(data.data.results);
        setHeroes(data.data.results);
      });
    })();
  }, [heroes]);

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
        {heroes.map((hero) => (
          <Hero
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            favorite={false}
            onClick={() => setHero(hero)}
          />
        ))}
      </HeroesList>
      <Footer />
    </LandingWrapper>
  );
};

export default Landing;
