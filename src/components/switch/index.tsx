import React from "react";

import { SwitchWrapper } from "./styles";

interface SwitchProps {
  value: boolean;
  setValue: () => void;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return (
    <SwitchWrapper isActive={!props.value} onClick={() => props.setValue()}>
      <div className="switch-button"></div>
    </SwitchWrapper>
  );
};

export default Switch;
