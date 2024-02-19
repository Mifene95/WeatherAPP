import styled from "styled-components";

export const StyledMainDiv = styled.div`
  p {
    margin-left: 80px;
    margin-bottom: 0px;
    margin-top: 5px;
    font-size: 30px;

    @media (max-width: 480px) {
      margin-left: 10px;
      text-align: center;
      font-size: 15px;
    }
  }
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  height: 400px;
  width: 900px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  border-radius: 30px;

  @media (max-width: 480px) {
    width: 160px;
    height: 90px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 15px;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  margin-top: 30px;
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: column;
  }
`;

export const StyledSmall = styled.div`
  p {
    margin-bottom: 0px;
    margin-top: 5px;
    font-size: 30px;

    @media (max-width: 480px) {
      font-size: 15px;
      margin-top: 0px;
    }
  }
  padding: 25px;
  border-radius: 30px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 480px) {
    width: 160px;
    height: 90px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.hide-on-mobile {
      display: none;
    }
  }
`;

export const StyledSidePannel = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    color: blue;
  }
  span {
    margin-bottom: 26px;
    color: #023047;
    padding-bottom: 32px;
    border-bottom: 1px solid gray;
  }

  font-weight: 600;
  color: blue;
  display: flex;
  flex-direction: column;
  border-left: 1px solid gray;
  padding: 10px;
  height: calc(100vh - 200px);

  @media (max-width: 480px) {
    &.hide-on-mobile {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;
