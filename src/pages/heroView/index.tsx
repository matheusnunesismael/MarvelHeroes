import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import { HeroViewWrapper, HeroDetails, HeroComics } from "./styles";

// Assets
import IconComic from "assets/images/ic_quadrinhos.svg";
import IconMovie from "assets/images/ic_trailer.svg";

// Components
import SearchBar from "./components/searchBar";
import RatingStars from "./components/ratingStars";
import SwitchHeart from "components/switchHeart";
import ComicComponent from "./components/comic";
import Footer from "components/footer";
import { useHeroesContext } from "contexts/heroes";
import { API } from "services/api";
import { Comic } from "types/comics";
import { motion, useSpring } from "framer-motion";

const HeroView: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const spring = useSpring(0, { damping: 300, stiffness: 200 });
  const [favorite, setFavorite] = useState(false);

  // Placeholder values
  const HeroPlaceholder = {
    name: "HERO",
    description: "No information about this character yet",
    comics: "000",
    movies: "0",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  };

  // States
  const [comics, setComics] = useState<Comic[]>([]);
  const [hero, setHero] = useState({} as any);
  const [lastComicDate, setLastComicDate] = useState("");

  const { selectedHero } = useHeroesContext();

  const getFavorite = async (id: number) => {
    return await localStorage.getItem(`mf-${id}`);
  };

  function favoriteCharacter(value: boolean) {
    setFavorite(value);
    localStorage.setItem(`mf-${id}`, `${value}`);
  }

  useEffect(() => {
    // Scrool to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    API({
      path: `characters/${id}/comics`,
      params: {
        limit: 10,
        page: 0,
        orderBy: "onsaleDate",
      },
    }).then(({ data }) => {
      setComics(data.data.results);
      if (data.data.results[0]) {
        const date = new Date(data.data.results[0].dates[0].date);
        const formattedDate = date
          .toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          .replace(/ /g, " ")
          .replace(/de /g, "");
        setLastComicDate(formattedDate);
        return;
      }
      setLastComicDate("none so far");
    });
  }, [id]);

  useEffect(() => {
    getFavorite(parseInt(id || "0")).then((res) => {
      setFavorite(res === "true");
    });
    if (selectedHero) {
      setHero(selectedHero);
      return;
    }
    API({
      path: `characters/${id}`,
    })
      .then(({ data }) => {
        setHero(data.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <HeroViewWrapper>
      <SearchBar />
      <div className="hero-details">
        <HeroDetails name={(hero.name || HeroPlaceholder.name).toUpperCase()}>
          <div className="name-background">
            {(hero.name || HeroPlaceholder.name).toUpperCase()}
          </div>

          <div className="content-wrapper">
            <div className="infos-content">
              <div className="hero-data">
                <div className="hero-header">
                  <div className="hero-name">
                    {(hero.name || HeroPlaceholder.name).toUpperCase()}
                  </div>
                  <div className="hero-favorite">
                    <SwitchHeart
                      value={favorite}
                      setValue={favoriteCharacter}
                      size={35}
                    />
                  </div>
                </div>
                <div className="hero-description">
                  {hero?.description || HeroPlaceholder.description}
                </div>
                <div className="hero-stats">
                  <div className="hero-counts">
                    <div className="hero-stat">
                      <div className="hero-stat-title">Quadrinhos</div>
                      <div className="div-stat-content">
                        <img src={IconComic} alt="Quadrinhos" />
                        {hero.comics
                          ? hero.comics.available
                          : HeroPlaceholder.comics}
                      </div>
                    </div>
                    <div className="hero-stat">
                      <div className="hero-stat-title">Filmes</div>
                      <div className="div-stat-content">
                        <img src={IconMovie} alt="Filmes" />
                        {HeroPlaceholder.movies}
                      </div>
                    </div>
                  </div>
                  <div className="hero-rating">
                    Rating:
                    <RatingStars rating={3} />
                  </div>
                  <div className="hero-last-comic">
                    <span className="last-comic-text">Ultimo quadrinho:</span>

                    <span className="last-comic-value">{lastComicDate}</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <motion.img
                  src={
                    hero.thumbnail
                      ? `${hero.thumbnail.path}.${hero.thumbnail.extension}`
                      : HeroPlaceholder.image
                  }
                  alt={hero.name || HeroPlaceholder.name}
                  layoutId="hero-image"
                />
              </div>
            </div>
          </div>
        </HeroDetails>
      </div>
      <HeroComics>
        <div className="hero-comics-title">Últimos lançamentos</div>
        <div className="hero-comics-list">
          {comics.map((comic) => (
            <ComicComponent
              key={comic.id}
              name={comic.title}
              image={comic.thumbnail.path + "." + comic.thumbnail.extension}
            />
          ))}
        </div>
      </HeroComics>
      <Footer />
    </HeroViewWrapper>
  );
};

export default HeroView;
