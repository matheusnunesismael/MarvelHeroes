import SwitchHeart from "components/switchHeart";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { HeroWrapper } from "./styles";

interface HeroProps {
  id: number;
  name: string;
  image: string;
  favorite: boolean;
  onClick: () => void;
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <HeroWrapper onClick={props.onClick}>
      <Link to={`/hero/${props.id}`}>
        <div className="hero-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="hero-inf">
          <div className="hero-name">{props.name}</div>
          <div className="hero-fav">
            <SwitchHeart value={props.favorite} />
          </div>
        </div>
      </Link>
    </HeroWrapper>
  );
};

export default Hero;
