import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: 700;
    transition: 0.5s;
    &:hover {
      cursor: pointer;
      transform: skew(10deg);
    transition: 0.5s;

    }
  }
  .nav-menu {
    width: 300px;
    height: 35px;
    display: flex;
    button {
      font-size: 15px;
      font-weight: 700;
      width: 100%;
      background-color: gray;
      border: none;
      border-radius: 2px;
      transition: 0.5s;
      &:hover {
        cursor: pointer;
        transform: skew(10deg);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;