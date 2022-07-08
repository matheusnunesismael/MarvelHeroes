import React from "react";

// Assets
import SelectedHeartIcon from "assets/images/favorito_01.svg";
import DeselectedHeartIcon from "assets/images/favorito_02.svg";

// Styles
import { SwitchHeartWrapper } from "./styles";

interface SwitchHeartProps {
  value: boolean;
  setValue?: (value: boolean) => void;
  size?: number;
}

const SwitchHeart: React.FC<SwitchHeartProps> = (props: SwitchHeartProps) => {
  return (
    <SwitchHeartWrapper setValue={props.setValue} size={props.size}>
      <div
        className="switch-button"
        onClick={() => {
          if (props.setValue) props.setValue(!props.value);
        }}
      >
        {props.value ? (
          <img src={SelectedHeartIcon} alt="selected" />
        ) : (
          <img src={DeselectedHeartIcon} alt="deselected" />
        )}
      </div>
    </SwitchHeartWrapper>
  );
};

export default SwitchHeart;
