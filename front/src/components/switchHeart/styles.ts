import styled from "styled-components";

interface HeroWrapperProps {
  setValue?: (value: boolean) => void;
}

export const SwitchHeartWrapper = styled.div<HeroWrapperProps>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.setValue ? "pointer" : "default")};
`;
