import React from "react";

import { FooterWrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="text">
        <a href="https://developer.marvel.com/">
          Data provided by Marvel. © 2014 Marvel
        </a>
      </div>
      <div className="text">
        <span className="description">developed by</span>
        <a href="https://github.com/matheusnunesismael">Matheus Nunes Ismael</a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
