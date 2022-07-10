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

const HeroView: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const HeroPlaceholder = {
    name: "HERO",
    description: "No information about this character yet",
    comics: "000",
    movies: "000",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  };

  // States
  const [comics, setComics] = useState<Comic[]>([]);
  const [hero, setHero] = useState({} as any);

  const { selectedHero } = useHeroesContext();

  useEffect(() => {
    API({ path: `characters/${id}/comics` }).then(({ data }) => {
      setComics(data.data.results);
    });
  }, [id]);

  useEffect(() => {
    console.log("update hero");
    if (selectedHero) {
      setHero(selectedHero);
      return;
    }
    API({
      path: `characters/${id}`,
    })
      .then(({ data }) => {
        console.log(data);
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
                    <SwitchHeart value={true} size={35} />
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

                    <span className="last-comic-value">17 jul. 2020</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src={
                    hero.thumbnail
                      ? `${hero.thumbnail.path}.${hero.thumbnail.extension}`
                      : HeroPlaceholder.image
                  }
                  alt={hero.name || HeroPlaceholder.name}
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
              <ComicComponent
                name="Avengers: The Initiative (2007) #19"
                image="http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg"
              />
            ))
          }
          {comics.map((comic) => (
            <ComicComponent
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
