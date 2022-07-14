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
import Loading from "components/loading";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  // Context States
  const {
    heroes,
    setHeroes,
    setSelectedHero,
    search,
    setSearch,
    onlyFavorites,
    setOnlyFavorites,
    lexOrder,
    setLexOrder,
  } = useHeroesContext();

  // States
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // Estado que controla o loading

  // Methods
  const toggleLexOrder = () => {
    setLexOrder(!lexOrder);
    handleSearch(null, !lexOrder);
  };
  function isFavorite(id: number) {
    return localStorage.getItem(`mf-${id}`) === "true";
  }

  const handleSearch = (
    e?: React.FormEvent<HTMLFormElement> | null,
    applyLexOrder?: boolean | undefined
  ) => {
    e?.preventDefault();
    if (applyLexOrder === undefined) applyLexOrder = lexOrder;
    setScreenLoading(true);
    (async () => {
      API({
        path: "characters",
        params: {
          search: search,
          orderBy: applyLexOrder ? "name" : "-modified",
        },
      }).then(({ data }) => {
        setScreenLoading(false);
        setTotal(data.data.total);
        setHeroes(data.data.results);
      });
    })();
  };

  const setHero = (hero: HeroType) => {
    setSelectedHero(hero);
  };

  const setScreenLoading = (loadingState: boolean) => {
    if (loadingState) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    setLoading(loadingState);
  };

  // Effects
  useEffect(() => {
    if (loaded) return;
    setLoaded(true);
    if (heroes.length > 0) {
      setHeroes(heroes);
      return;
    }
    (async () => {
      handleSearch();
    })();
  }, [heroes]);

  return (
    <LandingWrapper>
      {loading && <Loading />}
      <LandingHeader>
        <LandingLogo>
          <motion.img src={Logo} alt="Marvel Heroes" layoutId="logo-marvel" />
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
      <LandingSearch target="#" onSubmit={(e) => handleSearch(e)}>
        <div className="search-input">
          <button type="submit">
            <img src={SearchIcon} className="search-button" alt="search" />
          </button>
          <input
            id="search-input"
            type="text"
            placeholder="Procure por heróis"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <input type="submit" hidden />
      </LandingSearch>
      <SearchOptions>
        <div className="total-results">Encontrados {total} heróis</div>
        <div className="filters">
          <div className="filter-lex">
            <div className="filter-lex-text">
              <img src={HeroIcon} alt="hero" />
              <span>Ordenar por nome - A/Z</span>
            </div>

            <Switch value={lexOrder} setValue={toggleLexOrder} />
          </div>
          <div className="filter-fav">
            <SwitchHeart
              value={onlyFavorites}
              setValue={setOnlyFavorites}
              size={25}
            />
            <span>Somente favoritos</span>
          </div>
        </div>
      </SearchOptions>
      <HeroesList>
        {heroes.map((hero) => (
          <>
            {onlyFavorites && !isFavorite(hero.id) ? null : (
              <Hero
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                favorite={isFavorite(hero.id)}
                onClick={() => setHero(hero)}
              />
            )}
          </>
        ))}
      </HeroesList>
      <Footer />
    </LandingWrapper>
  );
};

export default Landing;
