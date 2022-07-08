import React, { useState } from "react";

import { SearchBarWrapper, SearchInput } from "./styles";

// Assets
import SearchIcon from "assets/images/ic_busca.svg";
import LogoSmall from "assets/images/marvel-2.png";
import { Link } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchBarWrapper>
      <Link className="logo" to="/">
        <img src={LogoSmall} alt="Marvel search heroes" />
        Search heroes
      </Link>
      <div className="search-bar">
        <SearchInput className="search-input" htmlFor="search-input">
          <img src={SearchIcon} alt="search" />
          <input
            id="search-input"
            type="text"
            placeholder="Procure por heróis"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInput>
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
