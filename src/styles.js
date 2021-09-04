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

export const ButtonsContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
      font-size: 15px;
      font-weight: 700;
      background-color: gray;
      border: none;
      border-radius: 2px;
      transition: 0.5s;
      width: 200px;
      height: 30px;
      background-color: lightblue;
      &:hover {
        cursor: pointer;
        transform: skew(10deg);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
`;

export const TimerContainer = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 60px;
`;

export const TimerControlContainer = styled.div`
  text-align: center;
  margin-top: 100px;

  button {
      font-size: 15px;
      font-weight: 700;
      background-color: gray;
      border: none;
      border-radius: 2px;
      transition: 0.5s;
      width: 200px;
      height: 30px;
      margin-left: 50px;
      &:hover {
        cursor: pointer;
        transform: skew(10deg);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .green {
      background-color: lightgreen;
    }
    .red {
      background-color: lightcoral;
    }
    .gray {
      background-color: lightgrey;
    }
`;

export const AdContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  div {
    border: 2px solid black;
    width: 300px;
    height: 200px;
    transition: 0.5s;
    &:hover {
      cursor: pointer;
      background-color: lightblue;
      transform: skew(10deg);
    }
  }
`;