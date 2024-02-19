import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLi = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const HomeStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const StyledInput = styled.input`
  color: blue;
  height: 30px;
  border-radius: 10px;
  background-color: lightgray;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 40px;
  margin-right: 20px;
  background-image: url(https://i.imgur.com/KRROOT1.png);
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: 10px center;

  @media (max-width: 480px) {
    height: 20px;
    width: 100px;
    padding-left: 25px;
    background-size: 10px 10px;
  }
`;

export const FlexList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 5px;
    margin-right: 5px;
  }
`;

export const StyledButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: red;
    background: none;

    @media (max-width: 480px) {
      width: 15px;
    }
  }
`;

export const NavStyle = styled.nav`
  border-right: 1px solid gray;
  width: 330px;

  @media (max-width: 480px) {
    width: 150px;
  }
`;
