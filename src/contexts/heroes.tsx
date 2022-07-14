import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Hero } from "types/hero";

/**
 * Contexto que armazena as infomações dos herois para aproveita-las na tela de visualização
 * e evitar mais chamadas de API
 */

// Types
interface ContextProps {
  children: React.ReactNode;
}
type ContextType = {
  heroes: Hero[];
  setHeroes: Dispatch<SetStateAction<Hero[]>>;
  selectedHero: Hero | null;
  setSelectedHero: Dispatch<SetStateAction<Hero | null>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onlyFavorites: boolean;
  setOnlyFavorites: Dispatch<SetStateAction<boolean>>;
  lexOrder: boolean;
  setLexOrder: Dispatch<SetStateAction<boolean>>;
};

// Context
const HeroesContext = createContext<ContextType | null>(null);

// Context Provider
const HeroesContextProvider: React.FC<ContextProps> = (props: ContextProps) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [search, setSearch] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [lexOrder, setLexOrder] = useState(false);
  return (
    <HeroesContext.Provider
      value={{
        heroes,
        setHeroes,
        selectedHero,
        setSelectedHero,
        search,
        setSearch,
        onlyFavorites,
        setOnlyFavorites,
        lexOrder,
        setLexOrder,
      }}
    >
      {props.children}
    </HeroesContext.Provider>
  );
};

export default HeroesContextProvider;

export function useHeroesContext() {
  const context = useContext(HeroesContext);
  if (!context) {
    throw new Error(
      "useHeroesContext must be used within a HeroesContextProvider"
    );
  }
  return context;
}
