import React from "react";

import { ComicWrapper } from "./styles";

interface ComicProps {
  name: string;
  image: string;
}

const Comic: React.FC<ComicProps> = (props: ComicProps) => {
  return (
    <ComicWrapper>
      <div className="comic-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="comic-name">{props.name}</div>
    </ComicWrapper>
  );
};

export default Comic;
