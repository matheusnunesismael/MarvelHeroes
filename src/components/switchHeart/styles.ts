import styled from "styled-components";

interface HeroWrapperProps {
  setValue?: (value: boolean) => void;
  size?: number;
}

export const SwitchHeartWrapper = styled.div<HeroWrapperProps>`
  width: ${(props) => (props.size ? `${props.size}px` : "20px")};
  height: ${(props) => (props.size ? `${props.size}px` : "20px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.setValue ? "pointer" : "default")};
  img {
    width: ${(props) => (props.size ? `${props.size - 5}px` : "15px")};
  }
`;
