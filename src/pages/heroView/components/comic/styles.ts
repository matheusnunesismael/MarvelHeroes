import styled from "styled-components";

export const ComicWrapper = styled.div`
  width: 150px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap 10px;
   :hover {
    background-color: #d7ebd7;
    box-shadow: 0px 0px 0px 10px #d7ebd7;
  }
  .comic-image {
    img {
      width: 150px;
      height: 230px;
    }
  }
  .comic-name {
    font-size: 0.8rem;
    color: #404040;
    font-weight: bold;
    line-height: 1rem;
  }
`;
