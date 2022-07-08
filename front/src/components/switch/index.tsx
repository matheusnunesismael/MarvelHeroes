import React from "react";

import { SwitchWrapper } from "./styles";

interface SwitchProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return (
    <SwitchWrapper
      isActive={props.value}
      onClick={() => props.setValue(!props.value)}
    >
      <div className="switch-button"></div>
    </SwitchWrapper>
  );
};

export default Switch;
