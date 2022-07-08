import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;
  gap: 10%;
  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    color: #545654;
    img {
      width: 100px;
    }
  }
  .search-bar {
    width: 50%;
    display: flex;
    align-items: center;
  }
`;

export const SearchInput = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: white;
  height: 50px;
  gap: 30px;
  padding: 0 20px;
  border-radius: 30px;
  cursor: text;
  img {
    width: 20px;
  }
  input {
    padding: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    padding: 0;
    width: 90%;
    border: none;
    background-color: transparent;
    color: #979797;
    font-weight: bold;
    :focus {
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
`;
