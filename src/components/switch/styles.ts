import styled from "styled-components";

interface SwitchWrapperProps {
  isActive: boolean;
}

export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  background-color: #e4e5e9;
  display: flex;
  padding: 8px;
  width: 50px;
  border-radius: 20px;
  justify-content: ${(props) => (props.isActive ? "rigth" : "left")};
  cursor: pointer;
  position: relative;
  height: 20px;
  .switch-button {
    background-color: #ff0000;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-shadow: 0px ${(props) => (props.isActive ? "2px" : "-2px")} 7px 0px
      rgba(255, 0, 0, 0.75);
    position: absolute;
    left: ${(props) => (props.isActive ? "8px" : "35px")};
    transition: left 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  }
`;
