import styled from "styled-components";

export const MainBackgroundStyle = styled.div`
  background-image: url("https://images6.alphacoders.com/955/955360.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #023047;
  h1 {
    width: 500px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    width: 500px;
    margin-left: 60px;
  }
  @media (max-width: 480px) {
    &.hide-on-mobile {
      display: none;
    }
  }
`;

export const ImageStyle = styled.img`
  width: 250px;
  height: 130px;
  margin-right: 250px;
  filter: hue-rotate(550deg);
  margin-top: 9px;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin: 0 auto;
    margin-top: 4px;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
