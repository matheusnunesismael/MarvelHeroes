import React from "react";

// Styles
import { RatingStarsWrapper } from "./styles";

// Assets
import StarSelected from "assets/images/avaliacao_on.svg";
import StarUnselected from "assets/images/avaliacao_off.svg";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = (props: RatingStarsProps) => {
  return (
    <RatingStarsWrapper>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <img
            key={index}
            src={star <= props.rating ? StarSelected : StarUnselected}
            alt="Avaliação"
          />
        );
      })}
    </RatingStarsWrapper>
  );
};

export default RatingStars;
