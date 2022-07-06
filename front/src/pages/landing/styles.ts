import styled from "styled-components";

export const LandingWrapper = styled.div``;

export const LandingHeader = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  .titles {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      color: #404040;
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    h2 {
      color: #8c8c8c;
      line-height: 1.5;
    }
  }
`;

export const LandingLogo = styled.div`
  display: flex;
  width: 326px;
  align-items: end;
  font-weight: bold;
  color: #434343;
  .text {
    margin-bottom: 25px;
  }
`;

export const LandingSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  .search-input {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #fdecec;
    height: 50px;
    gap: 30px;
    padding: 0 20px;
    border-radius: 30px;
    cursor: text;
    input {
      height: 100%;
      padding: 0;
      width: 90%;
      border: none;
      background-color: transparent;
      color: #fa7c7c;
      font-weight: bold;
      :focus {
        outline: none;
        border: none;
        background-color: transparent;
      }
    }
  }
`;

export const SearchOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
